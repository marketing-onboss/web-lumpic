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
      res.status(400).json({ message: error.message });
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
      res.status(500).json({ message: error.message });
    }
  });

  // Services routes
  app.post(`${apiRoute}/services`, async (req, res) => {
    try {
      const newService = await storage.createService(req.body);
      res.status(201).json(newService);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get(`${apiRoute}/services`, async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Projects routes
  app.post(`${apiRoute}/projects`, async (req, res) => {
    try {
      const newProject = await storage.createProject(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get(`${apiRoute}/projects`, async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Testimonials routes
  app.post(`${apiRoute}/testimonials`, async (req, res) => {
    try {
      const newTestimonial = await storage.createTestimonial(req.body);
      res.status(201).json(newTestimonial);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get(`${apiRoute}/testimonials`, async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
