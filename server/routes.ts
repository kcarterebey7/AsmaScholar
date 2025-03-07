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


  // User data storage
  const userGroups = new Map<string, any>();

  // Auth endpoint to get current user
  app.get("/api/auth/user", (req, res) => {
    const userId = req.headers["x-replit-user-id"];
    const userName = req.headers["x-replit-user-name"];
    
    if (!userId || !userName) {
      res.status(401).json({ authenticated: false });
      return;
    }
    
    res.json({
      authenticated: true,
      id: userId,
      name: userName
    });
  });

  // Save user groups
  app.post("/api/user/groups", express.json(), (req, res) => {
    const userId = req.headers["x-replit-user-id"];
    
    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    
    userGroups.set(userId.toString(), req.body.groups);
    res.json({ success: true });
  });

  // Get user groups
  app.get("/api/user/groups", (req, res) => {
    const userId = req.headers["x-replit-user-id"];
    
    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    
    const groups = userGroups.get(userId.toString()) || [];
    res.json(groups);
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
