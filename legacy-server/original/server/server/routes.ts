import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiRoute = "/api";
  
  // Users routes
  app.post(`${apiRoute}/users`, async (req, res) => {
    try {
      const newUser = await storage.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(400).json({ message: errorMessage });
    }
  });

  app.get(`${apiRoute}/users/:id`, async (req, res) => {
    try {
      const user = await storage.getUser(Number(req.params.id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ message: errorMessage });
    }
  });

  // Services routes
  app.post(`${apiRoute}/services`, async (req, res) => {
    try {
      const newService = await storage.createService(req.body);
      res.status(201).json(newService);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(400).json({ message: errorMessage });
    }
  });

  app.get(`${apiRoute}/services`, async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ message: errorMessage });
    }
  });

  // Projects routes
  app.post(`${apiRoute}/projects`, async (req, res) => {
    try {
      const newProject = await storage.createProject(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(400).json({ message: errorMessage });
    }
  });

  app.get(`${apiRoute}/projects`, async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ message: errorMessage });
    }
  });

  // Testimonials routes
  app.post(`${apiRoute}/testimonials`, async (req, res) => {
    try {
      const newTestimonial = await storage.createTestimonial(req.body);
      res.status(201).json(newTestimonial);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(400).json({ message: errorMessage });
    }
  });

  app.get(`${apiRoute}/testimonials`, async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ message: errorMessage });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
