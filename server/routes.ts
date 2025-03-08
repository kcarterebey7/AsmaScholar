import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { namesData } from "@shared/data";

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

  return createServer(app);
}
