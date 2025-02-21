import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const names = pgTable("names", {
  id: serial("id").primaryKey(),
  arabicName: text("arabic_name").notNull(),
  transliteration: text("transliteration").notNull(),
  pronunciation: text("pronunciation").notNull(),
  meaning: text("meaning").notNull(),
  description: text("description").notNull(),
  relatedNames: text("related_names").notNull().$type<string[]>(),
  orderNumber: integer("order_number").notNull(),
  category: text("category").notNull(),
});

export const insertNameSchema = createInsertSchema(names, {
  relatedNames: z.array(z.string())
}).omit({ id: true });

export type InsertName = z.infer<typeof insertNameSchema>;
export type Name = typeof names.$inferSelect;

// Define available categories
export const nameCategories = {
  DIVINITY: "Divine Essence",
  POWER: "Power and Authority",
  MERCY: "Mercy and Compassion",
  CREATION: "Creation and Life",
  GUIDANCE: "Guidance and Wisdom",
  JUSTICE: "Justice and Truth",
  PROVISION: "Provision and Sustenance",
  MAJESTY: "Majesty and Honor",
  UNIQUENESS: "Uniqueness and Unity",
} as const;

export type NameCategory = typeof nameCategories[keyof typeof nameCategories];