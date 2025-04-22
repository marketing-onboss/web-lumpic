import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User model for authentication
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name").notNull(),
  isFreelancer: boolean("is_freelancer").notNull().default(true),
  avatarUrl: text("avatar_url"),
  bio: text("bio"),
  createdAt: text("created_at").notNull(),
});

// Services that freelancers can offer
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  priceInBlinks: integer("price_in_blinks").notNull(),
  estimatedDuration: text("estimated_duration").notNull(),
  category: text("category").notNull(),
  userId: integer("user_id").notNull(),
});

// Projects created by clients
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  budgetInBlinks: integer("budget_in_blinks").notNull(),
  status: text("status").notNull(),
  userId: integer("user_id").notNull(),
  assignedTo: integer("assigned_to"),
  dueDate: text("due_date"),
  createdAt: text("created_at").notNull(),
});

// Testimonials from users
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
  role: text("role"),
  createdAt: text("created_at").notNull(),
});

// Insert schemas for validation
export const insertUserSchema = createInsertSchema(users).omit({
  id: true
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
