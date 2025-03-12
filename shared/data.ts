import type { Name, InsertName } from "./schema";
import { nameCategories } from "./schema";

export const namesData: InsertName[] = [
  {
    arabicName: "الرَّحْمٰن",
    transliteration: "Ar-Rahman", 
    pronunciation: "ar-rah-MAAN",
    meaning: "The Most Gracious",
    description: "The Most Gracious - The One who has plenty of mercy for the believers and the blasphemers in this world and especially for the believers in the hereafter.",
    detailedExplanation: "Ar-Rahman signifies the abundance of Divine mercy that encompasses all creation. This name represents the immediate, present manifestation of Allah's mercy in every moment, sustaining and nurturing all existence regardless of merit or belief.",
    innerMeaning: "This name connects you to the boundless mercy and compassion that exists within you. It's about recognizing that at your core, you have an unlimited capacity for kindness and understanding. It's about being merciful to yourself and others.",
    technique: "Practice showing kindness and mercy to yourself and others. When faced with hardship, remember that divine mercy surrounds you always.",
    relatedNames: ["Ar-Raheem", "Al-Latif", "Al-Wadud"],
    orderNumber: 1,
    id: 1,
    category: nameCategories.MERCY,
    quranVerses: [
      {
        verse: "In the name of Allah, the Most Gracious, the Most Merciful",
        reference: "1:1",
        arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        explanation: "This verse, known as the Bismillah, appears at the beginning of 113 chapters of the Quran, emphasizing the all-encompassing nature of divine mercy."
      },
      {
        verse: "To Allah (الله) belongs the East and the West, so wherever you turn, there is the Face of Allah (وجه الله). Indeed, Allah (الله) is All-Encompassing (الواسع, Al-Wāsi'), All-Knowing (العليم, Al-'Alīm).",
        reference: "2:115",
        arabicText: "وَلِلّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّواْ فَثَمَّ وَجْهُ اللّهِ إِنَّ اللّهَ وَاسِعٌ عَلِيمٌ",
        explanation: "This verse highlights Allah's presence and knowledge across all directions, indicating that His guidance and wisdom encompass everything."
      },
      {
        verse: "The Most Merciful, taught the Quran, created man, taught him eloquence.",
        reference: "55:1-4",
        arabicText: "الرَّحْمَٰنُ عَلَّمَ الْقُرْآنَ خَلَقَ الْإِنسَانَ عَلَّمَهُ الْبَيَانَ",
        explanation: "These verses directly connect Ar-Rahman with divine teaching and the creation of humanity, showing how mercy manifests through knowledge and understanding."
      }
    ]
  },
  {
    arabicName: "الرَّحِيْم",
    transliteration: "Ar-Rahim",
    pronunciation: "ar-ra-HEEM",
    meaning: "The Most Merciful",
    description: "The Most Merciful - The One who has plenty of mercy for the believers.",
    detailedExplanation: "Ar-Rahim represents the specialized, focused manifestation of Divine mercy particularly for the believers. While Ar-Rahman's mercy encompasses all creation, Ar-Rahim's mercy is a special grace reserved for those who believe and follow guidance.",
    innerMeaning: "This name connects you to the deep, sustainable compassion that nurtures growth and transformation. It's about developing lasting kindness and mercy that can weather any storm.",
    technique: "Practice consistent, sustainable acts of kindness. Build lasting relationships based on mercy and understanding.",
    relatedNames: ["Ar-Rahman", "Al-Latif", "Al-Wadud"],
    orderNumber: 2,
    category: nameCategories.MERCY,
    quranVerses: [
      {
        verse: "And He is ever Merciful to the believers.",
        reference: "33:43",
        arabicText: "وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
        explanation: "This verse emphasizes the special mercy that Allah shows to the believers, highlighting the nurturing aspect of divine compassion."
      },
      {
        verse: "My mercy embraces all things.",
        reference: "7:156",
        arabicText: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
        explanation: "This verse reveals the all-encompassing nature of divine mercy, showing how it extends to every aspect of creation."
      }
    ]
  }
];
