import type { InsertName, QuranVerse } from "./schema";
import { nameCategories } from "./schema";

export const namesData: InsertName[] = [
  {
    arabicName: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    pronunciation: "ar-rah-MAAN",
    meaning: "The Most Merciful",
    description: "The Most Gracious - The One who has plenty of mercy for the believers and the blasphemers in this world and especially for the believers in the hereafter.",
    detailedExplanation: "Ar-Rahman represents the all-encompassing mercy of God that embraces all creation without discrimination. This name appears 57 times in the Quran and is one of the most frequently mentioned divine names, highlighting its significance. It inspires hope and trust in God's infinite compassion.",
    innerMeaning: "This name connects you to the universal flow of divine mercy that sustains all existence. It's about recognizing that mercy is the foundation of all reality and allowing that understanding to shape how you view and interact with the world. It's about cultivating unconditional compassion.",
    technique: "Practice loving-kindness meditation, starting with yourself and gradually expanding to include all beings. Begin each day by setting an intention to embody divine mercy in your interactions. When faced with difficulty, pause and ask: 'How would infinite compassion respond in this moment?' Let your heart soften and expand beyond its usual limits.",
    relatedNames: ["Ar-Raheem", "Al-Latif", "Al-Wadud"],
    orderNumber: 1,
    category: nameCategories.MERCY,
    quranVerses: [
      {
        verse: "In the name of Allah, the Most Gracious, the Most Merciful",
        reference: "1:1", 
        arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        explanation: "This verse, known as the Bismillah, appears at the beginning of 113 chapters of the Quran, emphasizing the all-encompassing nature of divine mercy."
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
    arabicName: "الرَّحِيمُ",
    transliteration: "Ar-Raheem",
    pronunciation: "ar-ra-HEEM",
    meaning: "The Most Merciful",
    description: "The Most Merciful - The One who has plenty of mercy for the believers.",
    detailedExplanation: "Ar-Raheem represents specific divine mercy that is bestowed upon the faithful. While Ar-Rahman encompasses all creation, Ar-Raheem signifies a special mercy reserved for believers.", 
    innerMeaning: "This name awakens your capacity for focused, nurturing mercy - the ability to offer profound care and healing to yourself and others.",
    technique: "When reciting this name, envision divine mercy as a healing light penetrating every cell of your being. Practice acts of targeted kindness.",
    relatedNames: ["Ar-Rahman", "Al-Wadud", "Al-Latif"],
    orderNumber: 2,
    category: nameCategories.MERCY,
    quranVerses: [
      {
        verse: "And He is ever Merciful to the believers.",
        reference: "33:43",
        arabicText: "وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
        explanation: "This verse emphasizes the special mercy that Allah shows to the believers."
      },
      {
        verse: "My mercy embraces all things.",
        reference: "7:156",
        arabicText: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
        explanation: "This verse reveals the all-encompassing nature of divine mercy."
      }
    ]
  },
  {
    arabicName: "الْمَلِكُ",
    transliteration: "Al-Malik",
    pronunciation: "al-MA-lik",
    meaning: "The King",
    description: "The King - The One with complete dominion, whose dominion is clear from imperfection.",
    detailedExplanation: "Al-Malik signifies absolute sovereignty and perfect governance. This name reminds us that God's rule is just and unwavering.",
    innerMeaning: "Within you resides an inner sovereignty - the capacity to govern yourself with wisdom and justice.",
    technique: "Practice mindful leadership in all areas of life. Cultivate inner authority through self-discipline and noble character.",
    relatedNames: ["Al-Maalik", "Al-Aziz", "Al-Jabbar"],
    orderNumber: 3,
    category: nameCategories.POWER,
    quranVerses: [
      {
        verse: "So exalted is Allah, the Sovereign, the Truth.",
        reference: "20:114",
        arabicText: "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ",
        explanation: "This verse emphasizes Allah's absolute sovereignty alongside His truth."
      }
    ]
  },
  {
    arabicName: "الْقُدُّوسُ",
    transliteration: "Al-Quddus", 
    pronunciation: "al-QUDD-oos",
    meaning: "The Most Holy",
    description: "The Most Holy - The One who is pure from any imperfection and clear from all defects.",
    detailedExplanation: "Al-Quddus represents absolute purity and perfection beyond any flaw or deficiency.",
    innerMeaning: "This name awakens your innate capacity for purity and refinement of character.", 
    technique: "Practice regular purification of body, speech and mind. Cultivate inner cleanliness through wholesome thoughts and actions.",
    relatedNames: ["As-Salam", "At-Tahir", "Al-Barr"],
    orderNumber: 4,
    category: nameCategories.HOLINESS,
    quranVerses: [
      {
        verse: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection.",
        reference: "59:23",
        arabicText: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ",
        explanation: "This verse emphasizes Allah's absolute purity alongside His sovereignty."
      }
    ]
  },
  {
    arabicName: "السَّلاَمُ",
    transliteration: "As-Salam",
    pronunciation: "as-sa-LAAM", 
    meaning: "The Source of Peace",
    description: "The Source of Peace - The One who is free from every imperfection.",
    detailedExplanation: "As-Salam represents perfect peace and tranquility, free from all disturbance and conflict.",
    innerMeaning: "This name connects you to the infinite peace at your core - your natural state of tranquility.",
    technique: "Practice conscious breathing and meditation. Cultivate inner stillness through mindful presence.",
    relatedNames: ["Al-Mu'min", "Al-Muhaymin", "Al-Quddus"],
    orderNumber: 5,
    category: nameCategories.PEACE,
    quranVerses: [
      {
        verse: "And Allah invites to the Home of Peace.",
        reference: "10:25",
        arabicText: "وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ",
        explanation: "This verse shows how Allah guides to the abode of perfect peace."
      }
    ]
  }
];