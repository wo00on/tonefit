import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Color palette schema for future database storage if needed
export const colorPalettes = pgTable("color_palettes", {
  id: serial("id").primaryKey(),
  year: integer("year").notNull(),
  name: text("name").notNull(),
  hex: text("hex").notNull(),
  personalColorType: text("personal_color_type").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertColorPaletteSchema = createInsertSchema(colorPalettes).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertColorPalette = z.infer<typeof insertColorPaletteSchema>;
export type ColorPalette = typeof colorPalettes.$inferSelect;
