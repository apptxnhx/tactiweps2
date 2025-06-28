import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get all weapons by category
  app.get("/api/weapons/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const weapons = await storage.getWeaponsByCategory(category);
      res.json(weapons);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch weapons" });
    }
  });

  // API endpoint to get all weapon categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // API endpoint to search weapons
  app.get("/api/weapons/:category/search", async (req, res) => {
    try {
      const { category } = req.params;
      const { q } = req.query;
      const weapons = await storage.searchWeapons(category, q as string);
      res.json(weapons);
    } catch (error) {
      res.status(500).json({ error: "Failed to search weapons" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
