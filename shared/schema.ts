import { pgTable, text, serial, integer, array } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const names = pgTable("names", {
  id: serial("id").primaryKey(),
  arabicName: text("arabic_name").notNull(),
  transliteration: text("transliteration").notNull(),
  meaning: text("meaning").notNull(),
  description: text("description").notNull(),
  relatedNames: array(text("related_names")).notNull(),
  orderNumber: integer("order_number").notNull(),
});

export const insertNameSchema = createInsertSchema(names).omit({ 
  id: true 
});

export type InsertName = z.infer<typeof insertNameSchema>;
export type Name = typeof names.$inferSelect;
