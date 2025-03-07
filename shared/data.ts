import type { InsertName, QuranVerse } from "./schema";
import { nameCategories } from "./schema";

export const namesData: InsertName[] = [
  {
    arabicName: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    pronunciation: "ar-rah-MAAN",
    meaning: "The Most Merciful",
    description: "The Most Gracious - The One who has plenty of mercy for all creation.",
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
    arabicName: "الْمَلِكُ",
    transliteration: "Al-Malik",
    pronunciation: "al-MA-lik",
    meaning: "The King",
    description: "The King - The One with complete dominion, whose dominion is clear from imperfection.",
    detailedExplanation: "Al-Malik signifies absolute sovereignty and perfect governance.",
    innerMeaning: "Within you resides an inner sovereignty - the capacity to govern yourself with wisdom and justice.",
    technique: "Practice mindful leadership in all areas of life. Cultivate inner authority through self-discipline.",
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
  },
  {
    arabicName: "الْمُؤْمِنُ",
    transliteration: "Al-Mu'min",
    pronunciation: "al-MU-min",
    meaning: "The Guardian of Faith",
    description: "The Guardian of Faith - The One who witnessed for Himself that no one is God but Him.",
    detailedExplanation: "Al-Mu'min represents divine protection and security in faith.",
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
    arabicName: "الْمُهَيْمِنُ",
    transliteration: "Al-Muhaymin",
    pronunciation: "al-mu-HAY-min",
    meaning: "The Guardian",
    description: "The Guardian - The One who witnesses the saying and deeds of His creatures.",
    detailedExplanation: "Al-Muhaymin represents divine oversight and protection.",
    innerMeaning: "This name connects you to divine protection and guidance.",
    technique: "Practice mindfulness and self-awareness.",
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
  },
  {
    arabicName: "الْعَزِيزُ",
    transliteration: "Al-Aziz",
    pronunciation: "al-a-ZEEZ",
    meaning: "The Almighty",
    description: "The Almighty - The One who overcomes all.",
    detailedExplanation: "Al-Aziz represents divine might and invincibility.",
    innerMeaning: "This name awakens your inner strength and resilience.",
    technique: "Practice standing firm in your truth and principles.",
    relatedNames: ["Al-Qawi", "Al-Qadir", "Al-Jabbar"],
    orderNumber: 8,
    category: nameCategories.POWER,
    quranVerses: [
      {
        verse: "And Allah is Exalted in Might and Wise.",
        reference: "2:228",
        arabicText: "وَاللَّهُ عَزِيزٌ حَكِيمٌ",
        explanation: "This verse connects divine might with wisdom."
      }
    ]
  },
  {
    arabicName: "الْجَبَّارُ",
    transliteration: "Al-Jabbar",
    pronunciation: "al-jab-BAAR",
    meaning: "The Compeller",
    description: "The Compeller - The One who repairs all broken things.",
    detailedExplanation: "Al-Jabbar represents divine power to restore and heal.",
    innerMeaning: "This name connects you to the power of restoration.",
    technique: "Practice healing work and helping others recover.",
    relatedNames: ["Al-Aziz", "Al-Qawi", "Al-Muqtadir"],
    orderNumber: 9,
    category: nameCategories.POWER,
    quranVerses: [
      {
        verse: "The Mighty, the Compeller, the Superior.",
        reference: "59:23",
        arabicText: "الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ",
        explanation: "This verse lists Al-Jabbar among divine attributes of power."
      }
    ]
  },
  {
    arabicName: "الْمُتَكَبِّرُ",
    transliteration: "Al-Mutakabbir",
    pronunciation: "al-mu-ta-KAB-bir",
    meaning: "The Greatest",
    description: "The Greatest - The One who is clear from the attributes of the creatures.",
    detailedExplanation: "Al-Mutakabbir represents divine transcendence above all creation.",
    innerMeaning: "This name teaches proper humility before divine greatness.",
    technique: "Practice humility while maintaining dignity.",
    relatedNames: ["Al-Azim", "Al-Jalil", "Al-Kabir"],
    orderNumber: 10,
    category: nameCategories.GREATNESS,
    quranVerses: [
      {
        verse: "He is Allah, the Creator, the Inventor, the Fashioner.",
        reference: "59:24",
        arabicText: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
        explanation: "This verse shows the creative power of Allah."
      }
    ]
  },
  {
    arabicName: "الْخَالِقُ",
    transliteration: "Al-Khaliq",
    pronunciation: "al-KHA-liq",
    meaning: "The Creator",
    description: "The Creator - The One who brings everything from non-existence to existence.",
    detailedExplanation: "Al-Khaliq represents the divine power of creation.",
    innerMeaning: "This name awakens creative potential.",
    technique: "Express creativity in positive ways.",
    relatedNames: ["Al-Bari", "Al-Musawwir"],
    orderNumber: 11,
    category: nameCategories.CREATION,
    quranVerses: [
      {
        verse: "That is Allah, your Lord, the Creator of all things.",
        reference: "40:62",
        arabicText: "ذَٰلِكُمُ اللَّهُ رَبُّكُمْ خَالِقُ كُلِّ شَيْءٍ",
        explanation: "This verse affirms Allah as the Creator of everything."
      }
    ]
  },
  {
    arabicName: "الْبَارِئُ",
    transliteration: "Al-Bari",
    pronunciation: "al-BAA-ri",
    meaning: "The Evolver",
    description: "The Evolver - The One who creates with perfect proportion.",
    detailedExplanation: "Al-Bari represents the divine power to evolve creation perfectly.",
    innerMeaning: "This name connects to evolutionary wisdom.",
    technique: "Observe and appreciate natural development.",
    relatedNames: ["Al-Khaliq", "Al-Musawwir"],
    orderNumber: 12,
    category: nameCategories.CREATION,
    quranVerses: [
      {
        verse: "He is Allah, the Creator, the Evolver, the Bestower of Forms.",
        reference: "59:24",
        arabicText: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
        explanation: "This verse shows Allah's role as the perfect evolver."
      }
    ]
  },
  {
    arabicName: "الْمُصَوِّرُ",
    transliteration: "Al-Musawwir",
    pronunciation: "al-mu-SAW-wir",
    meaning: "The Fashioner",
    description: "The Fashioner - The One who forms His creatures in different shapes.",
    detailedExplanation: "Al-Musawwir represents divine artistry in creation.",
    innerMeaning: "This name awakens the creative spirit within.",
    technique: "Practice seeing beauty in all forms of creation.",
    relatedNames: ["Al-Khaliq", "Al-Bari"],
    orderNumber: 13,
    category: nameCategories.CREATION,
    quranVerses: [
      {
        verse: "He is Allah, the Creator, the Inventor, the Fashioner.",
        reference: "59:24",
        arabicText: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ",
        explanation: "This verse shows Allah's role as the divine artist."
      }
    ]
  },
  {
    arabicName: "الْغَفَّارُ",
    transliteration: "Al-Ghaffar",
    pronunciation: "al-GHAF-faar",
    meaning: "The All-Forgiving",
    description: "The All-Forgiving - The One who forgives repeatedly.",
    detailedExplanation: "Al-Ghaffar represents endless divine forgiveness.",
    innerMeaning: "This name awakens the capacity for forgiveness.",
    technique: "Practice forgiveness daily.",
    relatedNames: ["At-Tawwab", "Al-Afuw"],
    orderNumber: 14,
    category: nameCategories.FORGIVENESS,
    quranVerses: [
      {
        verse: "Indeed, I am the Perpetual Forgiver.",
        reference: "20:82",
        arabicText: "وَإِنِّي لَغَفَّارٌ",
        explanation: "This verse emphasizes Allah's continuous forgiveness."
      }
    ]
  },
  {
    arabicName: "الْقَهَّارُ",
    transliteration: "Al-Qahhar",
    pronunciation: "al-QAH-haar",
    meaning: "The Subduer",
    description: "The Subduer - The One who has subdued all creation to His will.",
    detailedExplanation: "Al-Qahhar represents divine dominion over all things.",
    innerMeaning: "This name teaches mastery over the lower self.",
    technique: "Practice self-discipline and restraint.",
    relatedNames: ["Al-Aziz", "Al-Jabbar"],
    orderNumber: 15,
    category: nameCategories.POWER,
    quranVerses: [
      {
        verse: "He is the One, the Prevailing.",
        reference: "13:16",
        arabicText: "قُلْ هُوَ اللَّهُ الْوَاحِدُ الْقَهَّارُ",
        explanation: "This verse shows Allah's absolute dominion."
      }
    ]
  },
  {
    arabicName: "الْوَهَّابُ",
    transliteration: "Al-Wahhab",
    pronunciation: "al-wah-HAAB",
    meaning: "The Giver of All",
    description: "The Giver of All - The One who gives freely without expecting any return.",
    detailedExplanation: "Al-Wahhab represents divine generosity without limit or condition.",
    innerMeaning: "This name awakens the capacity for unconditional giving.",
    technique: "Practice giving without expectation of return.",
    relatedNames: ["Al-Karim", "Ar-Razzaq"],
    orderNumber: 16,
    category: nameCategories.GIVING,
    quranVerses: [
      {
        verse: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
        reference: "3:8",
        arabicText: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
        explanation: "This verse emphasizes Allah's attribute of giving freely."
      }
    ]
  },
  {
    arabicName: "الرَّزَّاقُ",
    transliteration: "Ar-Razzaq",
    pronunciation: "ar-raz-ZAAQ",
    meaning: "The Provider",
    description: "The Provider - The One who creates all means of sustenance.",
    detailedExplanation: "Ar-Razzaq represents divine provision and sustenance.",
    innerMeaning: "This name connects you to the flow of divine provision.",
    technique: "Practice gratitude for daily sustenance.",
    relatedNames: ["Al-Wahhab", "Al-Karim"],
    orderNumber: 17,
    category: nameCategories.SUSTENANCE,
    quranVerses: [
      {
        verse: "Indeed, Allah is the Provider, the firm possessor of strength.",
        reference: "51:58",
        arabicText: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
        explanation: "This verse affirms Allah's role as the ultimate provider."
      }
    ]
  },
  {
    arabicName: "الْفَتَّاحُ",
    transliteration: "Al-Fattah",
    pronunciation: "al-fat-TAAH",
    meaning: "The Opener",
    description: "The Opener - The One who opens the way to victory and success.",
    detailedExplanation: "Al-Fattah represents divine opening of opportunities.",
    innerMeaning: "This name awakens the ability to recognize opportunities.",
    technique: "Practice openness to new possibilities.",
    relatedNames: ["Al-Wahhab", "Al-Basit"],
    orderNumber: 18,
    category: nameCategories.OPENING,
    quranVerses: [
      {
        verse: "Our Lord, decide between us and our people in truth, and You are the best of those who give decision.",
        reference: "7:89",
        arabicText: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
        explanation: "This verse shows Allah's role in opening paths to resolution."
      }
    ]
  },
  {
    arabicName: "اَلْعَلِيمُ",
    transliteration: "Al-Alim",
    pronunciation: "al-a-LEEM",
    meaning: "The All-Knowing",
    description: "The All-Knowing - The One who knows everything openly and secretly.",
    detailedExplanation: "Al-Alim represents complete and perfect knowledge.",
    innerMeaning: "This name connects you to divine wisdom and knowledge.",
    technique: "Practice seeking knowledge with humility.",
    relatedNames: ["Al-Khabir", "Al-Hakim"],
    orderNumber: 19,
    category: nameCategories.KNOWLEDGE,
    quranVerses: [
      {
        verse: "And Allah is Knowing of all things.",
        reference: "2:282",
        arabicText: "وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ",
        explanation: "This verse affirms Allah's complete knowledge."
      }
    ]
  },
  {
    arabicName: "الْقَابِضُ",
    transliteration: "Al-Qabid",
    pronunciation: "al-QAA-bid",
    meaning: "The Constrictor",
    description: "The Constrictor - The One who constricts provision by His wisdom.",
    detailedExplanation: "Al-Qabid represents divine wisdom in withholding.",
    innerMeaning: "This name teaches the wisdom of limitation.",
    technique: "Practice acceptance of limitations.",
    relatedNames: ["Al-Basit", "Al-Muqit"],
    orderNumber: 20,
    category: nameCategories.SUSTENANCE,
    quranVerses: [
      {
        verse: "And it is Allah who withholds and grants abundance.",
        reference: "2:245",
        arabicText: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ",
        explanation: "This verse shows Allah's control over provision."
      }
    ]
  },
  {
    arabicName: "الْبَاسِطُ",
    transliteration: "Al-Basit",
    pronunciation: "al-BAA-sit",
    meaning: "The Expander",
    description: "The Expander - The One who expands and amplifies provision.",
    detailedExplanation: "Al-Basit represents divine expansion and abundance.",
    innerMeaning: "This name awakens the capacity for growth and expansion.",
    technique: "Practice gratitude during times of abundance.",
    relatedNames: ["Al-Qabid", "Ar-Razzaq"],
    orderNumber: 21,
    category: nameCategories.SUSTENANCE,
    quranVerses: [
      {
        verse: "And it is Allah who withholds and grants abundance.",
        reference: "2:245",
        arabicText: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ",
        explanation: "This verse shows Allah's power to expand provision."
      }
    ]
  },
  {
    arabicName: "الْخَافِضُ",
    transliteration: "Al-Khafid",
    pronunciation: "al-KHA-fid",
    meaning: "The Abaser",
    description: "The Abaser - The One who lowers what He wills by His wisdom.",
    detailedExplanation: "Al-Khafid represents divine wisdom in humbling.",
    innerMeaning: "This name teaches the wisdom of limitation.",
    technique: "Practice acceptance of limitations.",
    relatedNames: ["Ar-Rafi", "Al-Muizz"],
    orderNumber: 22,
    category: nameCategories.JUSTICE,
    quranVerses: [
      {
        verse: "When the Event befalls - There is no denying its befalling.",
        reference: "56:1-2",
        arabicText: "إِذَا وَقَعَتِ الْوَاقِعَةُ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ خَافِضَةٌ رَّافِعَةٌ",
        explanation: "This verse shows Allah's power to abase and elevate."
      }
    ]
  },
  {
    arabicName: "الرَّافِعُ",
    transliteration: "Ar-Rafi",
    pronunciation: "ar-RAA-fi",
    meaning: "The Exalter",
    description: "The Exalter - The One who raises whom He wills by His wisdom.",
    detailedExplanation: "Ar-Rafi represents divine elevation and honor.",
    innerMeaning: "This name awakens aspiration to higher states.",
    technique: "Practice elevating others through service.",
    relatedNames: ["Al-Khafid", "Al-Muizz"],
    orderNumber: 23,
    category: nameCategories.JUSTICE,
    quranVerses: [
      {
        verse: "And We raised high for you your repute.",
        reference: "94:4",
        arabicText: "وَرَفَعْنَا لَكَ ذِكْرَكَ",
        explanation: "This verse shows Allah's power to elevate in status."
      }
    ]
  },
  {
    arabicName: "الْمُعِزُّ",
    transliteration: "Al-Muizz",
    pronunciation: "al-mu-IZZ",
    meaning: "The Bestower of Honor",
    description: "The Bestower of Honor - The One who honors whom He wills.",
    detailedExplanation: "Al-Muizz represents divine bestowal of dignity.",
    innerMeaning: "This name awakens inner dignity and honor.",
    technique: "Practice maintaining dignity in all situations.",
    relatedNames: ["Al-Muzill", "Al-Aziz"],
    orderNumber: 24,
    category: nameCategories.HONOR,
    quranVerses: [
      {
        verse: "Say, 'O Allah, Owner of Sovereignty, You give sovereignty to whom You will.'",
        reference: "3:26",
        arabicText: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ",
        explanation: "This verse shows Allah's power to bestow honor."
      }
    ]
  },
  {
    arabicName: "اَلْمُذِلُّ",
    transliteration: "Al-Muzill",
    pronunciation: "al-mu-ZILL",
    meaning: "The Humiliator",
    description: "The Humiliator - The One who humbles whom He wills by His wisdom.",
    detailedExplanation: "Al-Muzill represents divine wisdom in humbling.",
    innerMeaning: "This name teaches the wisdom of accepting divine decree.",
    technique: "Practice acceptance of divine wisdom.",
    relatedNames: ["Al-Muizz", "Al-Hakam"],
    orderNumber: 25,
    category: nameCategories.JUSTICE,
    quranVerses: [
      {
        verse: "And You give honor to whom You will and humble whom You will.",
        reference: "3:26",
        arabicText: "وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ",
        explanation: "This verse shows Allah's power over honor and humility."
      }
    ]
  },
  {
    arabicName: "السَّمِيعُ",
    transliteration: "As-Sami",
    pronunciation: "as-sa-MEE",
    meaning: "The All-Hearing",
    description: "The All-Hearing - The One who hears all things, secret and open.",
    detailedExplanation: "As-Sami represents perfect divine hearing.",
    innerMeaning: "This name awakens inner listening and receptivity.",
    technique: "Practice deep listening to all beings.",
    relatedNames: ["Al-Basir", "Al-Khabir"],
    orderNumber: 26,
    category: nameCategories.ATTRIBUTES,
    quranVerses: [
      {
        verse: "Indeed, Allah is Hearing and Knowing.",
        reference: "2:181",
        arabicText: "إِنَّ اللَّهَ سَمِيعٌ عَلِيمٌ",
        explanation: "This verse affirms Allah's perfect hearing."
      }
    ]
  },
  {
    arabicName: "الْبَصِيرُ",
    transliteration: "Al-Basir",
    pronunciation: "al-ba-SEER",
    meaning: "The All-Seeing",
    description: "The All-Seeing - The One who sees all things, hidden and visible.",
    detailedExplanation: "Al-Basir represents perfect divine vision.",
    innerMeaning: "This name awakens inner vision and insight.",
    technique: "Practice seeing with the heart.",
    relatedNames: ["As-Sami", "Ash-Shahid"],
    orderNumber: 27,
    category: nameCategories.ATTRIBUTES,
    quranVerses: [
      {
        verse: "Indeed, Allah is Hearing and Seeing.",
        reference: "4:58",
        arabicText: "إِنَّ اللَّهَ كَانَ سَمِيعًا بَصِيرًا",
        explanation: "This verse affirms Allah's perfect vision."
      }
    ]
  },
  {
    arabicName: "الْحَكَمُ",
    transliteration: "Al-Hakam",
    pronunciation: "al-HA-kam",
    meaning: "The Judge",
    description: "The Judge - The One who judges between His creatures with truth.",
    detailedExplanation: "Al-Hakam represents perfect divine judgment.",
    innerMeaning: "This name awakens wise discernment.",
    technique: "Practice fair judgment in all matters.",
    relatedNames: ["Al-Adl", "Al-Muqsit"],
    orderNumber: 28,
    category: nameCategories.JUSTICE,
    quranVerses: [
      {
        verse: "Is not Allah the most just of judges?",
        reference: "95:8",
        arabicText: "أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ",
        explanation: "This verse affirms Allah as the perfect judge."
      }
    ]
  },
  {
    arabicName: "الْعَدْلُ",
    transliteration: "Al-Adl",
    pronunciation: "al-ADL",
    meaning: "The Just",
    description: "The Just - The One who is utterly just in all His decrees.",
    detailedExplanation: "Al-Adl represents perfect divine justice.",
    innerMeaning: "This name awakens the love of justice.",
    technique: "Practice justice in all dealings.",
    relatedNames: ["Al-Hakam", "Al-Muqsit"],
    orderNumber: 29,
    category: nameCategories.JUSTICE,
    quranVerses: [
      {
        verse: "Indeed, Allah orders justice and good conduct.",
        reference: "16:90",
        arabicText: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ",
        explanation: "This verse shows Allah's command for justice."
      }
    ]
  },
  {
    arabicName: "لَّطِيفُ",
    transliteration: "Al-Latif",
    pronunciation: "al-la-TEEF",
    meaning: "The Subtle",
    description: "The Subtle - The One who is gentle in His actions.",
    detailedExplanation: "Al-Latif represents divine subtlety and gentleness.",
    innerMeaning: "This name awakens gentleness and refinement.",
    technique: "Practice subtlety and gentleness.",
    relatedNames: ["Al-Khabir", "Ar-Rauf"],
    orderNumber: 30,
    category: nameCategories.ATTRIBUTES,
    quranVerses: [
      {
        verse: "He is the Subtle, the Aware.",
        reference: "6:103",
        arabicText: "وَهُوَ اللَّطِيفُ الْخَبِيرُ",
        explanation: "This verse affirms Allah's subtlety and awareness."
      }
    ]
  },
  {
    arabicName: "الْخَبِيرُ",
    transliteration: "Al-Khabir",
    pronunciation: "al-kha-BEER",
    meaning: "The All-Aware",
    description: "The All-Aware - The One who is totally aware of all things.",
    detailedExplanation: "Al-Khabir represents complete divine awareness.",
    innerMeaning: "This name awakens deep awareness and insight.",
    technique: "Practice mindful awareness.",
    relatedNames: ["Al-Latif", "Al-Alim"],
    orderNumber: 31,
    category: nameCategories.KNOWLEDGE,
    quranVerses: [
      {
        verse: "Indeed, Allah is Acquainted with what you do.",
        reference: "2:234",
        arabicText: "وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ",
        explanation: "This verse affirms Allah's complete awareness."
      }
    ]
  },
  {
    arabicName: "الْحَلِيمُ",
    transliteration: "Al-Halim",
    pronunciation: "al-ha-LEEM",
    meaning: "The Forbearing",
    description: "The Forbearing - The One who delays punishment for those who deserve it and then might forgive them.",
    detailedExplanation: "Al-Halim represents divine patience and forbearance.",
    innerMeaning: "This name awakens patience and tolerance.",
    technique: "Practice patience in all situations.",
    relatedNames: ["Al-Ghafur", "Al-Afuw"],
    orderNumber: 32,
    category: nameCategories.MERCY,
    quranVerses: [
      {
        verse: "And Allah is Forbearing and Merciful.",
        reference: "2:225",
        arabicText: "وَاللَّهُ غَفُورٌ حَلِيمٌ",
        explanation: "This verse affirms Allah's forbearance."
      }
    ]
  },
  {
    arabicName: "الْعَظِيمُ",
    transliteration: "Al-Azim",
    pronunciation: "al-a-ZEEM",
    meaning: "The Magnificent",
    description: "The Magnificent - The One who is vast and mighty in His attributes.",
    detailedExplanation: "Al-Azim represents divine magnificence.",
    innerMeaning: "This name awakens appreciation of divine greatness.",
    technique: "Practice recognizing magnificence in creation.",
    relatedNames: ["Al-Kabir", "Al-Jalil"],
    orderNumber: 33,
    category: nameCategories.GREATNESS,
    quranVerses: [
      {
        verse: "And He is the Most High, the Magnificent.",
        reference: "2:255",
        arabicText: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        explanation: "This verse affirms Allah's magnificence."
      }
    ]
  },
  {
    arabicName: "الْغَفُورُ",
    transliteration: "Al-Ghafur",
    pronunciation: "al-gha-FOOR",
    meaning: "The All-Forgiving",
    description: "The All-Forgiving - The One who forgives abundantly.",
    detailedExplanation: "Al-Ghafur represents abundant divine forgiveness.",
    innerMeaning: "This name awakens the capacity to forgive completely.",
    technique: "Practice complete forgiveness.",
    relatedNames: ["Al-Ghaffar", "At-Tawwab"],
    orderNumber: 34,
    category: nameCategories.FORGIVENESS,
    quranVerses: [
      {
        verse: "And Allah is Forgiving and Merciful.",
        reference: "2:173",
        arabicText: "إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
        explanation: "This verse affirms Allah's forgiveness."
      }
    ]
  },
  {
    arabicName: "الشَّكُورُ",
    transliteration: "Ash-Shakur",
    pronunciation: "ash-sha-KOOR",
    meaning: "The Most Appreciative",
    description: "The Most Appreciative - The One who gives abundantly in return for little.",
    detailedExplanation: "Ash-Shakur represents divine appreciation.",
    innerMeaning: "This name awakens gratitude and appreciation.",
    technique: "Practice expressing gratitude.",
    relatedNames: ["Al-Karim", "Al-Wahhab"],
    orderNumber: 35,
    category: nameCategories.APPRECIATION,
    quranVerses: [
      {
        verse: "That He may give them in full their rewards and increase for them of His bounty.",
        reference: "35:30",
        arabicText: "لِيُوَفِّيَهُمْ أُجُورَهُمْ وَيَزِيدَهُم مِّن فَضْلِهِ ۚ إِنَّهُ غَفُورٌ شَكُورٌ",
        explanation: "This verse shows Allah's appreciation of good deeds."
      }
    ]
  },
  {
    arabicName: "الْعَلِيُّ",
    transliteration: "Al-Ali",
    pronunciation: "al-A-lee",
    meaning: "The Most High",
    description: "The Most High - The One who is above and beyond all creation.",
    detailedExplanation: "Al-Ali represents transcendence above all creation.",
    innerMeaning: "This name awakens aspiration to higher consciousness.",
    technique: "Practice rising above lower tendencies.",
    relatedNames: ["Al-Kabir", "Al-Mutaal"],
    orderNumber: 36,
    category: nameCategories.GREATNESS,
    quranVerses: [
      {
        verse: "And He is the Most High, the Most Great.",
        reference: "2:255",
        arabicText: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        explanation: "This verse affirms Allah's transcendence."
      }
    ]
  },
  {
    arabicName: "الْكَبِيرُ",
    transliteration: "Al-Kabir",
    pronunciation: "al-ka-BEER",
    meaning: "The Most Great",
    description: "The Most Great - The One who is greater than everything.",
    detailedExplanation: "Al-Kabir represents absolute greatness.",
    innerMeaning: "This name awakens recognition of divine greatness.",
    technique: "Practice humility before divine greatness.",
    relatedNames: ["Al-Ali", "Al-Azim"],
    orderNumber: 37,
    category: nameCategories.GREATNESS,
    quranVerses: [
      {
        verse: "He is the Most High, the Most Great.",
        reference: "34:23",
        arabicText: "وَهُوَ الْعَلِيُّ الْكَبِيرُ",
        explanation: "This verse shows Allah's absolute greatness."
      }
    ]
  },
  {
    arabicName: "الْحَفِيظُ",
    transliteration: "Al-Hafiz",
    pronunciation: "al-ha-FEEZ",
    meaning: "The Preserver",
    description: "The Preserver - The One who protects and preserves all things.",
    detailedExplanation: "Al-Hafiz represents divine preservation.",
    innerMeaning: "This name awakens mindful protection.",
    technique: "Practice protecting what is valuable.",
    relatedNames: ["Al-Wakil", "Al-Muhaymin"],
    orderNumber: 38,
    category: nameCategories.PROTECTION,
    quranVerses: [
      {
        verse: "And your Lord is Guardian over all things.",
        reference: "34:21",
        arabicText: "وَرَبُّكَ عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ",
        explanation: "This verse affirms Allah's preservation of all things."
      }
    ]
  },
  {
    arabicName: "المُقِيت",
    transliteration: "Al-Muqit",
    pronunciation: "al-mu-QEET",
    meaning: "The Nourisher",
    description: "The Nourisher - The One who provides nourishment for all creatures.",
    detailedExplanation: "Al-Muqit represents divine nourishment.",
    innerMeaning: "This name awakens awareness of divine sustenance.",
    technique: "Practice gratitude for nourishment.",
    relatedNames: ["Ar-Razzaq", "Al-Wadud"],
    orderNumber: 39,
    category: nameCategories.SUSTENANCE,
    quranVerses: [
      {
        verse: "And Allah is ever, over all things, a Keeper.",
        reference: "4:85",
        arabicText: "وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ مُّقِيتًا",
        explanation: "This verse shows Allah's role as the sustainer."
      }
    ]
  },
  {
    arabicName: "الْحَسِيبُ",
    transliteration: "Al-Hasib",
    pronunciation: "al-ha-SEEB",
    meaning: "The Reckoner",
    description: "The Reckoner - The One who takes account of all things.",
    detailedExplanation: "Al-Hasib represents divine accounting.",
    innerMeaning: "This name awakens consciousness of accountability.",
    technique: "Practice self-accounting.",
    relatedNames: ["Al-Hafiz", "Ash-Shahid"],
    orderNumber: 40,
    category: nameCategories.JUSTICE,
    quranVerses: [
      {
        verse: "Sufficient is Allah as Reckoner.",
        reference: "4:6",
        arabicText: "وَكَفَىٰ بِاللَّهِ حَسِيبًا",
        explanation: "This verse affirms Allah's role as the perfect reckoner."
      }
    ]
  },
  {
    arabicName: "الْجَلِيلُ",
    transliteration: "Al-Jalil",
    pronunciation: "al-ja-LEEL",
    meaning: "The Majestic",
    description: "The Majestic - The One who is attributed with greatness of Power and Glory.",
    detailedExplanation: "Al-Jalil represents divine majesty.",
    innerMeaning: "This name awakens appreciation of divine majesty.",
    technique: "Practice recognizing majesty in creation.",
    relatedNames: ["Al-Azim", "Al-Kabir"],
    orderNumber: 41,
    category: nameCategories.MAJESTY,
    quranVerses: [
      {
        verse: "Blessed is the name of your Lord, Owner of Majesty and Honor.",
        reference: "55:78",
        arabicText: "تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ",
        explanation: "This verse shows Allah's majesty and honor."
      }
    ]
  },
  {
    arabicName: "الْكَرِيمُ",
    transliteration: "Al-Karim",
    pronunciation: "al-ka-REEM",
    meaning: "The Generous",
    description: "The Generous - The One who is generous in all things and gives abundantly.",
    detailedExplanation: "Al-Karim represents divine generosity.",
    innerMeaning: "This name awakens generosity of spirit.",
    technique: "Practice generous giving.",
    relatedNames: ["Al-Wahhab", "Ar-Razzaq"],
    orderNumber: 42,
    category: nameCategories.GIVING,
    quranVerses: [
      {
        verse: "O mankind, what has deceived you concerning your Lord, the Generous?",
        reference: "82:6",
        arabicText: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
        explanation: "This verse reminds of Allah's generosity."
      }
    ]
  },
  {
    arabicName: "الرَّقِيبُ",
    transliteration: "Ar-Raqib",
    pronunciation: "ar-ra-QEEB",
    meaning: "The Watchful",
    description: "The Watchful - The One who watches all things.",
    detailedExplanation: "Ar-Raqib represents divine watchfulness.",
    innerMeaning: "This name awakens mindful awareness.",
    technique: "Practice constant mindfulness.",
    relatedNames: ["Al-Hafiz", "Ash-Shahid"],
    orderNumber: 43,
    category: nameCategories.PROTECTION,
    quranVerses: [
      {
        verse: "Indeed, Allah is ever, over you, an Observer.",
        reference: "4:1",
        arabicText: "إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا",
        explanation: "This verse affirms Allah's watchfulness."
      }
    ]
  },
  {
    arabicName: "الْمُجِيبُ",
    transliteration: "Al-Mujib",
    pronunciation: "al-mu-JEEB",
    meaning: "The Responsive",
    description: "The Responsive - The One who responds to supplications.",
    detailedExplanation: "Al-Mujib represents divine responsiveness.",
    innerMeaning: "This name awakens receptivity to divine responses.",
    technique: "Practice sincere supplication.",
    relatedNames: ["Al-Qarib", "As-Sami"],
    orderNumber: 44,
    category: nameCategories.MERCY,
    quranVerses: [
      {
        verse: "Indeed, my Lord is near and responsive.",
        reference: "11:61",
        arabicText: "إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ",
        explanation: "This verse shows Allah's responsiveness to prayers."
      }
    ]
  },
  {
    arabicName: "الْوَاسِعُ",
    transliteration: "Al-Wasi",
    pronunciation: "al-WAA-si",
    meaning: "The All-Encompassing",
    description: "The All-Encompassing - The One who encompasses all things in His knowledge and mercy.",
    detailedExplanation: "Al-Wasi represents divine vastness.",
    innerMeaning: "This name awakens expansive consciousness.",
    technique: "Practice expanding awareness.",
    relatedNames: ["Al-Muhit", "Al-Jami"],
    orderNumber: 45,
    category: nameCategories.ATTRIBUTES,
    quranVerses: [
      {
        verse: "And Allah is all-Encompassing and Knowing.",
        reference: "2:115",
        arabicText: "إِنَّ اللَّهَ وَاسِعٌ عَلِيمٌ",
        explanation: "This verse affirms Allah's all-encompassing nature."
      }
    ]
  },
  {
    arabicName: "الْحَكِيمُ",
    transliteration: "Al-Hakim",
    pronunciation: "al-ha-KEEM",
    meaning: "The Wise",
    description: "The Wise - The One who is wise in all His actions.",
    detailedExplanation: "Al-Hakim represents divine wisdom.",
    innerMeaning: "This name awakens inner wisdom.",
    technique: "Practice wise discernment.",
    relatedNames: ["Al-Alim", "Al-Khabir"],
    orderNumber: 46,
    category: nameCategories.KNOWLEDGE,
    quranVerses: [
      {
        verse: "And He is the Wise, the Aware.",
        reference: "6:18",
        arabicText: "وَهُوَ الْحَكِيمُ الْخَبِيرُ",
        explanation: "This verse affirms Allah's perfect wisdom."
      }
    ]
  },
  {
    arabicName: "الْوَدُودُ",
    transliteration: "Al-Wadud",
    pronunciation: "al-wa-DOOD",
    meaning: "The Loving",
    description: "The Loving - The One who loves His believing servants.",
    detailedExplanation: "Al-Wadud represents divine love.",
    innerMeaning: "This name awakens divine love within.",
    technique: "Practice loving-kindness.",
    relatedNames: ["Ar-Rahman", "Ar-Rahim"],
    orderNumber: 47,
    category: nameCategories.LOVE,
    quranVerses: [
      {
        verse: "And He is the Forgiving, the Loving.",
        reference: "85:14",
        arabicText: "وَهُوَ الْغَفُورُ الْوَدُودُ",
        explanation: "This verse shows Allah's loving nature."
      }
    ]
  },
  {
    arabicName: "الْمَجِيدُ",
    transliteration: "Al-Majid",
    pronunciation: "al-ma-JEED",
    meaning: "The Glorious",
    description: "The Glorious - The One who is most glorious.",
    detailedExplanation: "Al-Majid represents divine glory.",
    innerMeaning: "This name awakens recognition of divine glory.",
    technique: "Practice glorifying the Divine.",
    relatedNames: ["Al-Jalil", "Al-Hamid"],
    orderNumber: 48,
    category: nameCategories.MAJESTY,
    quranVerses: [
      {
        verse: "Indeed, He is the Glorious, the Generous.",
        reference: "11:73",
        arabicText: "إِنَّهُ حَمِيدٌ مَجِيدٌ",
        explanation: "This verse affirms Allah's glory."
      }
    ]
  },
  {
    arabicName: "الْبَاعِثُ",
    transliteration: "Al-Ba'ith",
    pronunciation: "al-BAA-ith",
    meaning: "The Resurrector",
    description: "The Resurrector - The One who raises the dead to life.",
    detailedExplanation: "Al-Ba'ith represents divine power of resurrection.",
    innerMeaning: "This name awakens spiritual revival.",
    technique: "Practice spiritual renewal.",
    relatedNames: ["Al-Muhyi", "Al-Mumit"],
    orderNumber: 49,
    category: nameCategories.RESURRECTION,
    quranVerses: [
      {
        verse: "And that Allah will resurrect those in the graves.",
        reference: "22:7",
        arabicText: "وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ",
        explanation: "This verse shows Allah's power of resurrection."
      }
    ]
  },
  {
    arabicName: "الشَّهِيدُ",
    transliteration: "Ash-Shahid",
    pronunciation: "ash-sha-HEED",
    meaning: "The Witness",
    description: "The Witness - The One who witnesses all things.",
    detailedExplanation: "Ash-Shahid represents divine witnessing.",
    innerMeaning: "This name awakens mindful presence.",
    technique: "Practice being present.",
    relatedNames: ["Al-Basir", "Al-Khabir"],
    orderNumber: 50,
    category: nameCategories.ATTRIBUTES,
    quranVerses: [
      {
        verse: "And Allah is Witness over all things.",
        reference: "58:6",
        arabicText: "وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ",
        explanation: "This verse affirms Allah's witnessing of all things."
      }
    ]
  },
  {
    arabicName: "الْحَقُّ",
    transliteration: "Al-Haqq",
    pronunciation: "al-HAQQ",
    meaning: "The Truth",
    description: "The Truth - The One who is the absolute truth.",
    detailedExplanation: "Al-Haqq represents absolute truth.",
    innerMeaning: "This name awakens love of truth.",
    technique: "Practice truthfulness.",
    relatedNames: ["Al-Mubin", "An-Nur"],
    orderNumber: 51,
    category: nameCategories.TRUTH,
    quranVerses: [
      {
        verse: "That is because Allah is the Truth.",
        reference: "22:62",
        arabicText: "ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ",
        explanation: "This verse affirms Allah as the absolute truth."
      }
    ]
  },
  {
    arabicName: "الْوَكِيلُ",
    transliteration: "Al-Wakil",
    pronunciation: "al-wa-KEEL",
    meaning: "The Trustee",
    description: "The Trustee - The One who provides and is trusted.",
    detailedExplanation: "Al-Wakil represents divine trusteeship.",
    innerMeaning: "This name awakens trust in divine care.",
    technique: "Practice trust in divine provision.",
    relatedNames: ["Al-Hafiz", "Al-Kafil"],
    orderNumber: 52,
    category: nameCategories.PROTECTION,
    quranVerses: [
      {
        verse: "And sufficient is Allah as Disposer of affairs.",
        reference: "33:3",
        arabicText: "وَكَفَىٰ بِاللَّهِ وَكِيلًا",
        explanation: "This verse affirms Allah as the perfect trustee."
      }
    ]
  },
  {
    arabicName: "الْقَوِيُّ",
    transliteration: "Al-Qawiyy",
    pronunciation: "al-qa-WIYY",
    meaning: "The Strong",
    description: "The Strong - The One who has complete power.",
    detailedExplanation: "Al-Qawiyy represents absolute strength.",
    innerMeaning: "This name awakens inner strength.",
    technique: "Practice spiritual strength.",
    relatedNames: ["Al-Matin", "Al-Aziz"],
    orderNumber: 53,
    category: nameCategories.POWER,
    quranVerses: [
      {
        verse: "Indeed, Allah is the Strong, the Exalted in Might.",
        reference: "22:40",
        arabicText: "إِنَّ اللَّهَ لَقَوِيٌّ عَزِيزٌ",
        explanation: "This verse affirms Allah's perfect strength."
      }
    ]
  },
  {
    arabicName: "الْمَتِينُ",
    transliteration: "Al-Matin",
    pronunciation: "al-ma-TEEN",
    meaning: "The Firm",
    description: "The Firm - The One who is strong and unshakeable.",
    detailedExplanation: "Al-Matin represents unshakeable strength.",
    innerMeaning: "This name awakens steadfastness.",
    technique: "Practice firmness in faith.",
    relatedNames: ["Al-Qawiyy", "Al-Aziz"],
    orderNumber: 54,
    category: nameCategories.POWER,
    quranVerses: [
      {
        verse: "Indeed, Allah is the [continual] Provider, the firm possessor of strength.",
        reference: "51:58",
        arabicText: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
        explanation: "This verse shows Allah's firm strength."
      }
    ]
  },
  {
    arabicName: "الْوَلِيُّ",
    transliteration: "Al-Waliyy",
    pronunciation: "al-wa-LIYY",
    meaning: "The Guardian Friend",
    description: "The Guardian Friend - The One who supports and protects.",
    detailedExplanation: "Al-Waliyy represents divine friendship and protection.",
    innerMeaning: "This name awakens divine friendship.",
    technique: "Practice friendship with the Divine.",
    relatedNames: ["An-Nasir", "Al-Hafiz"],
    orderNumber: 55,
    category: nameCategories.PROTECTION,
    quranVerses: [
      {
        verse: "For Allah is the protector of those who believe.",
        reference: "47:11",
        arabicText: "ذَٰلِكَ بِأَنَّ اللَّهَ مَوْلَى الَّذِينَ آمَنُوا",
        explanation: "This verse affirms Allah's guardianship of believers."
      }
    ]
  }
];