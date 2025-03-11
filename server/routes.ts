import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { namesData } from "@shared/data";
import type { InsertName } from "@shared/schema";

export async function registerRoutes(app: Express) {
  // Initialize data
  for (const name of namesData) {
    await storage.createName(name);
  }

  // Get all names
  app.get("/api/names", async (_req, res) => {
    const names = await storage.getAllNames();
    res.json(names);
  });

  // Get single name
  app.get("/api/names/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const name = await storage.getName(id);
    
    if (!name) {
      res.status(404).json({ message: "Name not found" });
      return;
    }

    res.json(name);
  });

  // Add a new name
  app.post("/api/names", async (req, res) => {
    try {
      const nameData: InsertName = req.body;
      
      // Basic validation
      if (!nameData.arabicName || !nameData.transliteration || !nameData.meaning) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      const name = await storage.createName(nameData);
      res.status(201).json(name);
    } catch (error) {
      console.error("Error creating name:", error);
      res.status(500).json({ message: "Failed to create name", error: String(error) });
    }
  });

  return createServer(app);
}
