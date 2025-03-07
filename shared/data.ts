import type { InsertName, QuranVerse } from "./schema";
import { nameCategories } from "./schema";

export const namesData: InsertName[] = [
  {
    id: 1,
    arabicName: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    pronunciation: "ar-rah-MAAN",
    meaning: "The Most Merciful",
    description: "The Most Gracious - The One who has plenty of mercy for the believers and the blasphemers in this world and especially for the believers in the hereafter.",
    detailedExplanation: "Ar-Rahman represents the all-encompassing mercy of God that embraces all creation without discrimination.",
    innerMeaning: "This name connects you to the universal flow of divine mercy that sustains all existence.",
    technique: "Practice loving-kindness meditation, starting with yourself and gradually expanding to include all beings.",
    relatedNames: ["Ar-Raheem", "Al-Latif", "Al-Wadud"],
    orderNumber: 1,
    category: nameCategories.MERCY,
    quranVerses: [
      {
        verse: "In the name of Allah, the Most Gracious, the Most Merciful",
        reference: "1:1",
        arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        explanation: "This verse, known as the Bismillah, appears at the beginning of 113 chapters of the Quran."
      }
    ]
  },
  {
    id: 2,
    arabicName: "الرَّحِيمُ",
    transliteration: "Ar-Raheem",
    pronunciation: "ar-ra-HEEM",
    meaning: "The Most Merciful",
    description: "The Most Merciful - The One who has plenty of mercy for the believers.",
    detailedExplanation: "Ar-Raheem represents specific divine mercy that is bestowed upon the faithful.",
    innerMeaning: "This name awakens your capacity for focused, nurturing mercy.",
    technique: "When reciting this name, envision divine mercy as a healing light penetrating every cell of your being.",
    relatedNames: ["Ar-Rahman", "Al-Wadud", "Al-Latif"],
    orderNumber: 2,
    category: nameCategories.MERCY,
    quranVerses: [
      {
        verse: "And He is ever Merciful to the believers.",
        reference: "33:43",
        arabicText: "وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
        explanation: "This verse emphasizes the special mercy that Allah shows to the believers."
      }
    ]
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
  },
  {
    id: 6,
    arabicName: "الْمُؤْمِنُ",
    transliteration: "Al-Mu'min",
    pronunciation: "al-MU-min",
    meaning: "The Guardian of Faith",
    description: "The Guardian of Faith - The One who witnessed for Himself that no one is God but Him.",
    detailedExplanation: "Al-Mu'min represents divine protection and security in faith. This name assures believers of God's support and validation of their faith.",
    innerMeaning: "This name awakens your capacity for steadfast faith and trust in the divine plan.",
    technique: "Practice affirmations that strengthen your faith. Remember divine support in times of doubt.",
    relatedNames: ["Al-Muhaymin", "As-Salam", "Al-Wakil"],
    orderNumber: 6,
    category: nameCategories.FAITH,
    quranVerses: [
      {
        verse: "He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Guardian of Faith.",
        reference: "59:23",
        arabicText: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ",
        explanation: "This verse lists Al-Mu'min among divine names, showing its connection to divine security."
      }
    ]
  },
  {
    id: 7,
    arabicName: "الْمُهَيْمِنُ",
    transliteration: "Al-Muhaymin",
    pronunciation: "al-mu-HAY-min",
    meaning: "The Guardian",
    description: "The Guardian - The One who witnesses the saying and deeds of His creatures.",
    detailedExplanation: "Al-Muhaymin represents divine oversight and protection. This name reminds us that God is ever-watchful and protective.",
    innerMeaning: "This name connects you to divine protection and guidance. It teaches mindful awareness and conscious living.",
    technique: "Practice mindfulness and self-awareness. Remember divine presence in all situations.",
    relatedNames: ["Al-Mu'min", "Al-Hafiz", "Al-Wakil"],
    orderNumber: 7,
    category: nameCategories.PROTECTION,
    quranVerses: [
      {
        verse: "And We have revealed to you the Book in truth, confirming that which preceded it of the Scripture and as a guardian over it.",
        reference: "5:48",
        arabicText: "وَأَنزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ مِنَ الْكِتَابِ وَمُهَيْمِنًا عَلَيْهِ",
        explanation: "This verse shows how the divine guardian watches over and protects revelation."
      }
    ]
  }
  //  ... Add the remaining 92 names here ...
];