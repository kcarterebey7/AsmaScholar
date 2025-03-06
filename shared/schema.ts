import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define the QuranVerse type
export interface QuranVerse {
  verse: string;
  reference: string;
  arabicText: string;
  explanation: string;
}

export const names = pgTable("names", {
  id: serial("id").primaryKey(),
  arabicName: text("arabic_name").notNull(),
  transliteration: text("transliteration").notNull(),
  pronunciation: text("pronunciation").notNull(),
  meaning: text("meaning").notNull(),
  description: text("description").notNull(),
  detailedExplanation: text("detailed_explanation"),
  innerMeaning: text("inner_meaning"),
  technique: text("technique"),
  relatedNames: text("related_names").notNull().$type<string[]>(),
  orderNumber: integer("order_number").notNull(),
  category: text("category").notNull(),
  quranVerses: text("quran_verses").$type<QuranVerse[]>(),
});

export const insertNameSchema = createInsertSchema(names, {
  relatedNames: z.array(z.string()),
  quranVerses: z.array(z.object({
    verse: z.string(),
    reference: z.string(),
    arabicText: z.string(),
    explanation: z.string()
  })).optional()
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
  HOLINESS: "Holiness and Purity",
  PEACE: "Peace and Tranquility",
  FAITH: "Faith and Trust",
  PROTECTION: "Protection and Safety",
  GREATNESS: "Greatness and Glory",
  FORGIVENESS: "Forgiveness and Mercy",
  GIVING: "Giving and Generosity",
  SUSTENANCE: "Sustenance and Support",
  OPENING: "Opening and Guidance",
  KNOWLEDGE: "Knowledge and Wisdom",
  ATTRIBUTES: "Divine Attributes",
  JUDGEMENT: "Judgement and Justice",
  LOVE: "Love and Compassion",
  PRAISE: "Praise and Glory",
  RESURRECTION: "Resurrection and Life",
  TRUTH: "Truth and Reality",
  TIME: "Time and Eternity",
  LIFE: "Life and Existence",
  ETERNITY: "Eternity and Permanence",
  GOODNESS: "Goodness and Benefit",
  REPENTANCE: "Repentance and Return",
  APPRECIATION: "Appreciation and Gratitude"
} as const;

export type NameCategory = typeof nameCategories[keyof typeof nameCategories];