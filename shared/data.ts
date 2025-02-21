import type { InsertName } from "./schema";

export const namesData: InsertName[] = [
  {
    arabicName: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    meaning: "The Most Gracious",
    description: "The Most Gracious - The One who has plenty of mercy for the believers and the blasphemers in this world and especially for the believers in the hereafter.",
    relatedNames: ["Ar-Raheem", "Al-Latif", "Al-Wadud"],
    orderNumber: 1
  },
  {
    arabicName: "الرَّحِيمُ",
    transliteration: "Ar-Raheem",
    meaning: "The Most Merciful",
    description: "The Most Merciful - The One who has plenty of mercy for the believers.",
    relatedNames: ["Ar-Rahman", "Al-Latif", "Al-Wadud"],
    orderNumber: 2
  }
  // Additional names would be added here...
];
