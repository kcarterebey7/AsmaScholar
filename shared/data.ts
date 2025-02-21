import type { InsertName } from "./schema";
import { nameCategories } from "./schema";

export const namesData: InsertName[] = [
  {
    arabicName: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    meaning: "The Most Gracious",
    description: "The Most Gracious - The One who has plenty of mercy for the believers and the blasphemers in this world and especially for the believers in the hereafter.",
    relatedNames: ["Ar-Raheem", "Al-Latif", "Al-Wadud"],
    orderNumber: 1,
    category: nameCategories.MERCY
  },
  {
    arabicName: "الرَّحِيمُ",
    transliteration: "Ar-Raheem",
    meaning: "The Most Merciful",
    description: "The Most Merciful - The One who has plenty of mercy for the believers.",
    relatedNames: ["Ar-Rahman", "Al-Latif", "Al-Wadud"],
    orderNumber: 2,
    category: nameCategories.MERCY
  },
  {
    arabicName: "الْمَلِكُ",
    transliteration: "Al-Malik",
    meaning: "The King",
    description: "The King - The One with complete dominion, the One whose dominion is clear from imperfection.",
    relatedNames: ["Al-Maalik", "Al-Aziz", "Al-Jabbar"],
    orderNumber: 3,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْقُدُّوسُ",
    transliteration: "Al-Quddus",
    meaning: "The Most Sacred",
    description: "The Most Sacred - The One who is pure from any imperfection and clear from children and adversaries.",
    relatedNames: ["As-Salam", "Al-Mu'min", "Al-Muhaymin"],
    orderNumber: 4,
    category: nameCategories.HOLINESS
  },
  {
    arabicName: "السَّلاَمُ",
    transliteration: "As-Salam",
    meaning: "The Source of Peace",
    description: "The Source of Peace - The One who is free from every imperfection and defect.",
    relatedNames: ["Al-Mu'min", "Al-Muhaymin", "Al-Quddus"],
    orderNumber: 5,
    category: nameCategories.PEACE
  },
  {
    arabicName: "الْمُؤْمِنُ",
    transliteration: "Al-Mu'min",
    meaning: "The Guardian of Faith",
    description: "The Guardian of Faith - The One who witnessed for Himself that no one is God but Him. And He witnessed for His believers that they are truthful in their belief that no one is God but Him.",
    relatedNames: ["Al-Muhaymin", "As-Salam", "Al-Quddus"],
    orderNumber: 6,
    category: nameCategories.FAITH
  },
  {
    arabicName: "الْمُهَيْمِنُ",
    transliteration: "Al-Muhaymin",
    meaning: "The Protector",
    description: "The Protector - The One who witnesses the saying and deeds of His creatures.",
    relatedNames: ["Al-Mu'min", "Al-Hafiz", "Al-Wakil"],
    orderNumber: 7,
    category: nameCategories.PROTECTION
  },
  {
    arabicName: "الْعَزِيزُ",
    transliteration: "Al-Aziz",
    meaning: "The Almighty",
    description: "The Almighty - The Strong, The Defeater who is not defeated.",
    relatedNames: ["Al-Qawi", "Al-Malik", "Al-Jabbar"],
    orderNumber: 8,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْجَبَّارُ",
    transliteration: "Al-Jabbar",
    meaning: "The Compeller",
    description: "The Compeller - The One that nothing happens in His dominion except what He willed.",
    relatedNames: ["Al-Aziz", "Al-Malik", "Al-Mutakabbir"],
    orderNumber: 9,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْمُتَكَبِّرُ",
    transliteration: "Al-Mutakabbir",
    meaning: "The Greatest",
    description: "The Greatest - The One who is clear from the attributes of the creatures and from resembling them.",
    relatedNames: ["Al-Kabir", "Al-Azim", "Al-Jalil"],
    orderNumber: 10,
    category: nameCategories.GREATNESS
  },
  {
    arabicName: "الْخَالِقُ",
    transliteration: "Al-Khaliq",
    meaning: "The Creator",
    description: "The Creator - The One who brings everything from non-existence to existence.",
    relatedNames: ["Al-Bari", "Al-Musawwir"],
    orderNumber: 11,
    category: nameCategories.CREATION
  },
  {
    arabicName: "الْبَارِئُ",
    transliteration: "Al-Bari",
    meaning: "The Maker of Order",
    description: "The Maker of Order - The One who creates things with subtle knowledge.",
    relatedNames: ["Al-Khaliq", "Al-Musawwir"],
    orderNumber: 12,
    category: nameCategories.CREATION
  },
  {
    arabicName: "الْمُصَوِّرُ",
    transliteration: "Al-Musawwir",
    meaning: "The Shaper of Beauty",
    description: "The Shaper of Beauty - The One who shapes creatures and perfects their forms.",
    relatedNames: ["Al-Khaliq", "Al-Bari"],
    orderNumber: 13,
    category: nameCategories.CREATION
  },
  {
    arabicName: "الْغَفَّارُ",
    transliteration: "Al-Ghaffar",
    meaning: "The Forgiver",
    description: "The Forgiver - The One who forgives the sins of His servants time and time again.",
    relatedNames: ["At-Tawwab", "Al-'Afuw"],
    orderNumber: 14,
    category: nameCategories.FORGIVENESS
  },
  {
    arabicName: "الْقَهَّارُ",
    transliteration: "Al-Qahhar",
    meaning: "The Subduer",
    description: "The Subduer - The One who has the perfect Power and is not unable over anything.",
    relatedNames: ["Al-Jabbar", "Al-Aziz"],
    orderNumber: 15,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْوَهَّابُ",
    transliteration: "Al-Wahhab",
    meaning: "The Giver of All",
    description: "The Giver of All - The One who gives freely without expecting any return.",
    relatedNames: ["Al-Karim", "Ar-Razzaq"],
    orderNumber: 16,
    category: nameCategories.GIVING
  },
  {
    arabicName: "الرَّزَّاقُ",
    transliteration: "Ar-Razzaq",
    meaning: "The Sustainer",
    description: "The Sustainer - The One who creates all means of nourishment and sustenance.",
    relatedNames: ["Al-Wahhab", "Al-Karim"],
    orderNumber: 17,
    category: nameCategories.SUSTENANCE
  },
  {
    arabicName: "الْفَتَّاحُ",
    transliteration: "Al-Fattah",
    meaning: "The Opener",
    description: "The Opener - The One who opens the closed, whether it be gates of mercy or sustenance.",
    relatedNames: ["An-Nafi", "Al-Hadi"],
    orderNumber: 18,
    category: nameCategories.OPENING
  },
  {
    arabicName: "اَلْعَلِيْمُ",
    transliteration: "Al-Alim",
    meaning: "The All-Knowing",
    description: "The All-Knowing - The One who knows everything in the past, present and future.",
    relatedNames: ["Al-Khabir", "Al-Hakim"],
    orderNumber: 19,
    category: nameCategories.KNOWLEDGE
  },
  {
    arabicName: "الْقَابِضُ",
    transliteration: "Al-Qabid",
    meaning: "The Constrictor",
    description: "The Constrictor - The One who constricts and withholds.",
    relatedNames: ["Al-Basit", "Al-Muqsit"],
    orderNumber: 20,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْبَاسِطُ",
    transliteration: "Al-Basit",
    meaning: "The Expander",
    description: "The Expander - The One who has the power to expand, enlarge, and extend.",
    relatedNames: ["Al-Qabid", "Al-Muqsit"],
    orderNumber: 21,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْخَافِضُ",
    transliteration: "Al-Khafid",
    meaning: "The Abaser",
    description: "The Abaser - The One who lowers whoever He willed by His Destruction and raises whoever He willed by His Endowment.",
    relatedNames: ["Ar-Rafi", "Al-Mu'izz", "Al-Muzil"],
    orderNumber: 22,
    category: nameCategories.POWER
  },
  {
    arabicName: "الرَّافِعُ",
    transliteration: "Ar-Rafi",
    meaning: "The Exalter",
    description: "The Exalter - The One who raises the believers in rank through their obedience to Him.",
    relatedNames: ["Al-Khafid", "Al-Mu'izz", "Al-Muzil"],
    orderNumber: 23,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْمُعِزُّ",
    transliteration: "Al-Mu'izz",
    meaning: "The Bestower of Honors",
    description: "The Bestower of Honors - The One who gives esteem to whoever He willed, hence there is no one to degrade Him.",
    relatedNames: ["Al-Muzil", "Ar-Rafi", "Al-Khafid"],
    orderNumber: 24,
    category: nameCategories.POWER
  },
  {
    arabicName: "المُذِلُّ",
    transliteration: "Al-Muzil",
    meaning: "The Humiliator",
    description: "The Humiliator - The One who degrades whoever He willed, hence there is no one to give them esteem.",
    relatedNames: ["Al-Mu'izz", "Al-Khafid", "Ar-Rafi"],
    orderNumber: 25,
    category: nameCategories.POWER
  },
  {
    arabicName: "السَّمِيعُ",
    transliteration: "As-Sami",
    meaning: "The All-Hearing",
    description: "The All-Hearing - The One who hears all things that are heard by His eternal hearing without an ear, instrument or organ.",
    relatedNames: ["Al-Basir", "Al-Khabir"],
    orderNumber: 26,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْبَصِيرُ",
    transliteration: "Al-Basir",
    meaning: "The All-Seeing",
    description: "The All-Seeing - The One who sees all things that are seen by His eternal seeing without a pupil or any other instrument.",
    relatedNames: ["As-Sami", "Ash-Shahid"],
    orderNumber: 27,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْحَكَمُ",
    transliteration: "Al-Hakam",
    meaning: "The Judge",
    description: "The Judge - The One who judges between His servants in the present and will judge between them in the Hereafter.",
    relatedNames: ["Al-Adl", "Al-Muqsit"],
    orderNumber: 28,
    category: nameCategories.JUDGEMENT
  },
  {
    arabicName: "الْعَدْلُ",
    transliteration: "Al-Adl",
    meaning: "The Just",
    description: "The Just - The One who is entitled to do what He does in the way He does it.",
    relatedNames: ["Al-Hakam", "Al-Muqsit"],
    orderNumber: 29,
    category: nameCategories.JUDGEMENT
  },
  {
    arabicName: "لَّطِيفُ",
    transliteration: "Al-Latif",
    meaning: "The Subtle One",
    description: "The Subtle One - The One who is kind to His believing servants and endows upon them.",
    relatedNames: ["Al-Khabir", "Ar-Ra'uf"],
    orderNumber: 30,
    category: nameCategories.MERCY
  },
  {
    arabicName: "الْخَبِيرُ",
    transliteration: "Al-Khabir",
    meaning: "The All-Aware",
    description: "The All-Aware - The One who knows the truth of things.",
    relatedNames: ["Al-Alim", "Al-Latif"],
    orderNumber: 31,
    category: nameCategories.KNOWLEDGE
  },
  {
    arabicName: "الْحَلِيمُ",
    transliteration: "Al-Halim",
    meaning: "The Forbearing",
    description: "The Forbearing - The One who delays the punishment for those who deserve it and then He might forgive them.",
    relatedNames: ["Al-Ghaffar", "At-Tawwab"],
    orderNumber: 32,
    category: nameCategories.FORGIVENESS
  },
  {
    arabicName: "الْعَظِيمُ",
    transliteration: "Al-Azim",
    meaning: "The Magnificent",
    description: "The Magnificent - The One who is clear from the attributes of the creatures and from resembling them.",
    relatedNames: ["Al-Kabir", "Al-Jalil"],
    orderNumber: 33,
    category: nameCategories.GREATNESS
  },
  {
    arabicName: "الْغَفُورُ",
    transliteration: "Al-Ghafur",
    meaning: "The All-Forgiving",
    description: "The All-Forgiving - The One who forgives a lot.",
    relatedNames: ["Al-Ghaffar", "At-Tawwab"],
    orderNumber: 34,
    category: nameCategories.FORGIVENESS
  },
  {
    arabicName: "الشَّكُورُ",
    transliteration: "Ash-Shakur",
    meaning: "The Most Appreciative",
    description: "The Most Appreciative - The One who gives a lot of reward for a little obedience.",
    relatedNames: ["Al-Karim", "Al-Halim"],
    orderNumber: 35,
    category: nameCategories.APPRECIATION
  },
  {
    arabicName: "الْعَلِيُّ",
    transliteration: "Al-Ali",
    meaning: "The Most High",
    description: "The Most High - The One who is clear from the attributes of the creatures.",
    relatedNames: ["Al-Kabir", "Al-Mutaal"],
    orderNumber: 36,
    category: nameCategories.GREATNESS
  },
  {
    arabicName: "الْكَبِيرُ",
    transliteration: "Al-Kabir",
    meaning: "The Greatest",
    description: "The Greatest - The One who is greater than everything in status.",
    relatedNames: ["Al-Azim", "Al-Jalil"],
    orderNumber: 37,
    category: nameCategories.GREATNESS
  },
  {
    arabicName: "الْحَفِيظُ",
    transliteration: "Al-Hafiz",
    meaning: "The Preserver",
    description: "The Preserver - The One who protects whatever and whoever He willed to protect.",
    relatedNames: ["Al-Wakil", "Al-Muhaymin"],
    orderNumber: 38,
    category: nameCategories.PROTECTION
  },
  {
    arabicName: "المُقيِت",
    transliteration: "Al-Muqit",
    meaning: "The Nourisher",
    description: "The Nourisher - The One who has the Power.",
    relatedNames: ["Ar-Razzaq", "Al-Hafiz"],
    orderNumber: 39,
    category: nameCategories.SUSTENANCE
  },
  {
    arabicName: "الْحَسِيبُ",
    transliteration: "Al-Hasib",
    meaning: "The Reckoner",
    description: "The Reckoner - The One who gives the satisfaction.",
    relatedNames: ["Al-Muqsit", "Al-Adl"],
    orderNumber: 40,
    category: nameCategories.JUDGEMENT
  },
  {
    arabicName: "الْجَلِيلُ",
    transliteration: "Al-Jalil",
    meaning: "The Majestic",
    description: "The Majestic - The One who is attributed with greatness of Power and Glory of status.",
    relatedNames: ["Al-Azim", "Al-Kabir", "Al-Mutakabbir"],
    orderNumber: 41,
    category: nameCategories.GREATNESS
  },
  {
    arabicName: "الْكَرِيمُ",
    transliteration: "Al-Karim",
    meaning: "The Generous",
    description: "The Generous - The One who is attributed with greatness of Power and Glory of status.",
    relatedNames: ["Al-Wahhab", "Ar-Razzaq"],
    orderNumber: 42,
    category: nameCategories.GIVING
  },
  {
    arabicName: "الرَّقِيبُ",
    transliteration: "Ar-Raqib",
    meaning: "The Watchful",
    description: "The Watchful - The One that nothing is absent from Him. Hence, it means the One who watches all things.",
    relatedNames: ["Al-Hafiz", "Ash-Shahid"],
    orderNumber: 43,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْمُجِيبُ",
    transliteration: "Al-Mujib",
    meaning: "The Responsive",
    description: "The Responsive - The One who answers the one in need if he asks Him and rescues the yearning if he calls upon Him.",
    relatedNames: ["As-Sami", "Al-Qarib"],
    orderNumber: 44,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْوَاسِعُ",
    transliteration: "Al-Wasi",
    meaning: "The All-Encompassing",
    description: "The All-Encompassing - The One who encompasses everything in mercy and knowledge.",
    relatedNames: ["Al-Muhit", "Al-Alim"],
    orderNumber: 45,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْحَكِيمُ",
    transliteration: "Al-Hakim",
    meaning: "The Wise",
    description: "The Wise - The One who is wise in His actions and His creation.",
    relatedNames: ["Al-Alim", "Al-Khabir"],
    orderNumber: 46,
    category: nameCategories.KNOWLEDGE
  },
  {
    arabicName: "الْوَدُودُ",
    transliteration: "Al-Wadud",
    meaning: "The Most Loving",
    description: "The Most Loving - The One who loves His believing servants and His believing servants love Him.",
    relatedNames: ["Ar-Rahman", "Ar-Rahim"],
    orderNumber: 47,
    category: nameCategories.LOVE
  },
  {
    arabicName: "الْمَجِيدُ",
    transliteration: "Al-Majid",
    meaning: "The Most Glorious",
    description: "The Most Glorious - The One who is with perfect Power, High Status, Compassion, Generosity and Kindness.",
    relatedNames: ["Al-Jalil", "Al-Karim"],
    orderNumber: 48,
    category: nameCategories.GREATNESS
  },
  {
    arabicName: "الْبَاعِثُ",
    transliteration: "Al-Ba'ith",
    meaning: "The Resurrector",
    description: "The Resurrector - The One who resurrects His slaves after death for reward and/or punishment.",
    relatedNames: ["Al-Muhyi", "Al-Mumit"],
    orderNumber: 49,
    category: nameCategories.RESURRECTION
  },
  {
    arabicName: "الشَّهِيدُ",
    transliteration: "Ash-Shahid",
    meaning: "The Witness",
    description: "The Witness - The One who nothing is absent from Him.",
    relatedNames: ["Al-Basir", "Ar-Raqib"],
    orderNumber: 50,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْحَقُّ",
    transliteration: "Al-Haqq",
    meaning: "The Truth",
    description: "The Truth - The One who truly exists, whose existence is confirmed by His signs.",
    relatedNames: ["Al-Mubin", "An-Nur"],
    orderNumber: 51,
    category: nameCategories.TRUTH
  },
  {
    arabicName: "الْوَكِيلُ",
    transliteration: "Al-Wakil",
    meaning: "The Trustee",
    description: "The Trustee - The One who gives the satisfaction and is relied upon.",
    relatedNames: ["Al-Hafiz", "Al-Kafil"],
    orderNumber: 52,
    category: nameCategories.PROTECTION
  },
  {
    arabicName: "الْقَوِيُّ",
    transliteration: "Al-Qawiyy",
    meaning: "The Most Strong",
    description: "The Most Strong - The One with complete Power.",
    relatedNames: ["Al-Matin", "Al-Aziz"],
    orderNumber: 53,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْمَتِينُ",
    transliteration: "Al-Matin",
    meaning: "The Firm",
    description: "The Firm - The One with extreme Power which is un-interrupted and He does not get tired.",
    relatedNames: ["Al-Qawiyy", "Al-Aziz"],
    orderNumber: 54,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْوَلِيُّ",
    transliteration: "Al-Waliyy",
    meaning: "The Protecting Friend",
    description: "The Protecting Friend - The One who supports His believing servants.",
    relatedNames: ["An-Nasir", "Al-Hafiz"],
    orderNumber: 55,
    category: nameCategories.PROTECTION
  },
  {
    arabicName: "الْحَمِيدُ",
    transliteration: "Al-Hamid",
    meaning: "The Praiseworthy",
    description: "The Praiseworthy - The One who deserves to be praised by His servants for His attributes.",
    relatedNames: ["Ash-Shakur", "Al-Majid"],
    orderNumber: 56,
    category: nameCategories.PRAISE
  },
  {
    arabicName: "الْمُحْصِي",
    transliteration: "Al-Muhsi",
    meaning: "The Accounter",
    description: "The Accounter - The One who the count of things are known to him.",
    relatedNames: ["Al-Hasib", "Al-Hafiz"],
    orderNumber: 57,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْمُبْدِئُ",
    transliteration: "Al-Mubdi",
    meaning: "The Originator",
    description: "The Originator - The One who started the human being. That is, He created him.",
    relatedNames: ["Al-Khaliq", "Al-Mu'id"],
    orderNumber: 58,
    category: nameCategories.CREATION
  },
  {
    arabicName: "الْمُعِيدُ",
    transliteration: "Al-Mu'id",
    meaning: "The Restorer",
    description: "The Restorer - The One who brings back the creatures after death.",
    relatedNames: ["Al-Mubdi", "Al-Ba'ith"],
    orderNumber: 59,
    category: nameCategories.RESURRECTION
  },
  {
    arabicName: "الْمُحْيِي",
    transliteration: "Al-Muhyi",
    meaning: "The Giver of Life",
    description: "The Giver of Life - The One who took out a living human from semen that does not have a soul.",
    relatedNames: ["Al-Mumit", "Al-Ba'ith"],
    orderNumber: 60,
    category: nameCategories.LIFE
  },
  {
    arabicName: "الْمُمِيتُ",
    transliteration: "Al-Mumit",
    meaning: "The Taker of Life",
    description: "The Taker of Life - The One who renders the living dead, bringing about the end of their worldly existence.",
    relatedNames: ["Al-Muhyi", "Al-Ba'ith"],
    orderNumber: 61,
    category: nameCategories.LIFE
  },
  {
    arabicName: "الْحَيُّ",
    transliteration: "Al-Hayy",
    meaning: "The Ever Living",
    description: "The Ever Living - The One who is attributed with a life that is unlike our life and is not that of a combination of soul, flesh or blood.",
    relatedNames: ["Al-Qayyum", "Al-Baqi"],
    orderNumber: 62,
    category: nameCategories.LIFE
  },
  {
    arabicName: "الْقَيُّومُ",
    transliteration: "Al-Qayyum",
    meaning: "The Self-Subsisting",
    description: "The Self-Subsisting - The One who remains and does not end.",
    relatedNames: ["Al-Hayy", "Al-Baqi"],
    orderNumber: 63,
    category: nameCategories.LIFE
  },
  {
    arabicName: "الْوَاجِدُ",
    transliteration: "Al-Wajid",
    meaning: "The Perceiver",
    description: "The Perceiver - The One who finds what He wishes when He wishes.",
    relatedNames: ["Al-Ghaniyy", "Al-Muqtadir"],
    orderNumber: 64,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْمَاجِدُ",
    transliteration: "Al-Majid",
    meaning: "The Noble",
    description: "The Noble - The One who is most glorious.",
    relatedNames: ["Al-Karim", "Al-Jalil"],
    orderNumber: 65,
    category: nameCategories.GREATNESS
  },
  {
    arabicName: "الْواحِدُ",
    transliteration: "Al-Wahid",
    meaning: "The One",
    description: "The One - The One without partner, like, or equal.",
    relatedNames: ["Al-Ahad", "As-Samad"],
    orderNumber: 66,
    category: nameCategories.UNIQUENESS
  },
  {
    arabicName: "الْأَحَد",
    transliteration: "Al-Ahad",
    meaning: "The Unique",
    description: "The Unique - The One who has no partner in His essence, attributes, actions, and in commanding and forbidding.",
    relatedNames: ["Al-Wahid", "As-Samad"],
    orderNumber: 67,
    category: nameCategories.UNIQUENESS
  },
  {
    arabicName: "الصَّمَدُ",
    transliteration: "As-Samad",
    meaning: "The Eternal",
    description: "The Eternal - The Master who is relied upon in matters and who is free from needing food, drink, or any of the creatures' needs.",
    relatedNames: ["Al-Wahid", "Al-Ahad"],
    orderNumber: 68,
    category: nameCategories.ETERNITY
  },
  {
    arabicName: "الْقَادِرُ",
    transliteration: "Al-Qadir",
    meaning: "The Capable",
    description: "The Capable - The One who is attributed with Power and has the ability to accomplish everything.",
    relatedNames: ["Al-Muqtadir", "Al-Qawiyy"],
    orderNumber: 69,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْمُقْتَدِرُ",
    transliteration: "Al-Muqtadir",
    meaning: "The All-Powerful",
    description: "The All-Powerful - The One who has perfect power and who creates all things according to His will.",
    relatedNames: ["Al-Qadir", "Al-Qawiyy"],
    orderNumber: 70,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْمُقَدِّمُ",
    transliteration: "Al-Muqaddim",
    meaning: "The Expediter",
    description: "The Expediter - The One who puts things in their right places. He makes ahead what He wills and delays what He wills.",
    relatedNames: ["Al-Mu'akhkhir", "Al-Hakam"],
    orderNumber: 71,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْمُؤَخِّرُ",
    transliteration: "Al-Mu'akhkhir",
    meaning: "The Delayer",
    description: "The Delayer - The One who puts things in their right places. He makes ahead what He wills and delays what He wills.",
    relatedNames: ["Al-Muqaddim", "Al-Hakam"],
    orderNumber: 72,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْأَوَّلُ",
    transliteration: "Al-Awwal",
    meaning: "The First",
    description: "The First - The One whose existence is without a beginning.",
    relatedNames: ["Al-Akhir", "Az-Zahir", "Al-Batin"],
    orderNumber: 73,
    category: nameCategories.TIME
  },
  {
    arabicName: "الْآخِرُ",
    transliteration: "Al-Akhir",
    meaning: "The Last",
    description: "The Last - The One whose existence is without an end.",
    relatedNames: ["Al-Awwal", "Az-Zahir", "Al-Batin"],
    orderNumber: 74,
    category: nameCategories.TIME
  },
  {
    arabicName: "الظَّاهِرُ",
    transliteration: "Az-Zahir",
    meaning: "The Manifest",
    description: "The Manifest - The One that nothing is above Him and nothing is underneath Him, hence He exists without a place.",
    relatedNames: ["Al-Batin", "Al-Awwal", "Al-Akhir"],
    orderNumber: 75,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْبَاطِنُ",
    transliteration: "Al-Batin",
    meaning: "The Hidden",
    description: "The Hidden - The One that nothing is above Him and nothing is underneath Him, hence He exists without a place.",
    relatedNames: ["Az-Zahir", "Al-Awwal", "Al-Akhir"],
    orderNumber: 76,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْوَالِي",
    transliteration: "Al-Wali",
    meaning: "The Governor",
    description: "The Governor - The One who owns things and manages them.",
    relatedNames: ["Al-Malik", "Al-Wakil"],
    orderNumber: 77,
    category: nameCategories.POWER
  },
  {
    arabicName: "الْمُتَعَالِي",
    transliteration: "Al-Muta'ali",
    meaning: "The Most Exalted",
    description: "The Most Exalted - The One who is clear from the attributes of the creation.",
    relatedNames: ["Al-Ali", "Al-Kabir"],
    orderNumber: 78,
    category: nameCategories.GREATNESS
  },
  {
    arabicName: "الْبَرُّ",
    transliteration: "Al-Barr",
    meaning: "The Source of All Good",
    description: "The Source of All Good - The One who is kind to His creatures, who covered them with His sustenance and specified whoever He willed among them by His support, protection, and special mercy.",
    relatedNames: ["Ar-Rahman", "Ar-Rahim", "Al-Karim"],
    orderNumber: 79,
    category: nameCategories.GOODNESS
  },
  {
    arabicName: "التَّوَّابُ",
    transliteration: "At-Tawwab",
    meaning: "The Ever-Accepting of Repentance",
    description: "The Ever-Accepting of Repentance - The One who grants repentance to whoever He willed among His creatures and accepts his repentance.",
    relatedNames: ["Al-Ghaffar", "Al-Afuw"],
    orderNumber: 80,
    category: nameCategories.REPENTANCE
  },
  {
    arabicName: "الْمُنْتَقِمُ",
    transliteration: "Al-Muntaqim",
    meaning: "The Avenger",
    description: "The Avenger - The One who victoriously prevails over His enemies and punishes them for their sins. It may mean the One who destroys them.",
    relatedNames: ["Al-Aziz", "Al-Qahhar"],
    orderNumber: 81,
    category: nameCategories.JUDGEMENT
  },
  {
    arabicName: "العَفُوُّ",
    transliteration: "Al-Afuw",
    meaning: "The Pardoner",
    description: "The Pardoner - The One who forgives a lot and erases the traces of sins.",
    relatedNames: ["Al-Ghaffar", "At-Tawwab"],
    orderNumber: 82,
    category: nameCategories.FORGIVENESS
  },
  {
    arabicName: "الرَّؤُوفُ",
    transliteration: "Ar-Ra'uf",
    meaning: "The Most Kind",
    description: "The Most Kind - The One who is very compassionate with His creatures.",
    relatedNames: ["Ar-Rahman", "Ar-Rahim"],
    orderNumber: 83,
    category: nameCategories.MERCY
  },
  {
    arabicName: "مَالِكُ الْمُلْكِ",
    transliteration: "Malik-al-Mulk",
    meaning: "The Owner of All",
    description: "The Owner of All - The One who controls the dominion and gives dominion to whoever He willed.",
    relatedNames: ["Al-Malik", "Al-Wali"],
    orderNumber: 84,
    category: nameCategories.POWER
  },
  {
    arabicName: "ذُوالْجَلَالِ وَالْإِكْرَامِ",
    transliteration: "Dhul-Jalali-wal-Ikram",
    meaning: "The Lord of Majesty and Bounty",
    description: "The Lord of Majesty and Bounty - The One who has the perfect Power and Authority, and deserves to be Glorified.",
    relatedNames: ["Al-Majid", "Al-Karim"],
    orderNumber: 85,
    category: nameCategories.GREATNESS
  },
  {
    arabicName: "الْمُقْسِطُ",
    transliteration: "Al-Muqsit",
    meaning: "The Equitable One",
    description: "The Equitable One - The One who is Just in His judgment.",
    relatedNames: ["Al-Adl", "Al-Hakam"],
    orderNumber: 86,
    category: nameCategories.JUDGEMENT
  },
  {
    arabicName: "الْجَامِعُ",
    transliteration: "Al-Jami",
    meaning: "The Gatherer",
    description: "The Gatherer - The One who gathers the creatures on a day that there is no doubt about, that is the Day of Judgment.",
    relatedNames: ["Al-Hasib", "Al-Muhsi"],
    orderNumber: 87,
    category: nameCategories.JUDGEMENT
  },
  {
    arabicName: "الْغَنِيُّ",
    transliteration: "Al-Ghaniyy",
    meaning: "The Self-Sufficient",
    description: "The Self-Sufficient - The One who does not need the creation.",
    relatedNames: ["As-Samad", "Al-Wajid"],
    orderNumber: 88,
    category: nameCategories.ATTRIBUTES
  },
  {
    arabicName: "الْمُغْنِي",
    transliteration: "Al-Mughni",
    meaning: "The Enricher",
    description: "The Enricher - The One who satisfies the necessities of the creatures.",
    relatedNames: ["Al-Ghaniyy", "Ar-Razzaq"],
    orderNumber: 89,
    category: nameCategories.SUSTENANCE
  },
  {
    arabicName: "اَلْمَانِعُ",
    transliteration: "Al-Mani",
    meaning: "The Preventer",
    description: "The Preventer - The One who prevents harmful things from reaching His creatures.",
    relatedNames: ["Al-Hafiz", "Al-Wali"],
    orderNumber: 90,
    category: nameCategories.PROTECTION
  },
  {
    arabicName: "الضَّارُّ",
    transliteration: "Ad-Darr",
    meaning: "The Creator of Harm",
    description: "The Creator of Harm - The One who makes harm reach to whoever He willed and benefits to whoever He willed.",
    relatedNames: ["An-Nafi", "Al-Qadir"],
    orderNumber: 91,
    category: nameCategories.POWER
  },
  {
    arabicName: "النَّافِعُ",
    transliteration: "An-Nafi",
    meaning: "The Creator of Good",
    description: "The Creator of Good - The One who makes harm reach to whoever He willed and benefits to whoever He willed.",
    relatedNames: ["Ad-Darr", "Al-Qadir"],
    orderNumber: 92,
    category: nameCategories.POWER
  },
  {
    arabicName: "النُّورُ",
    transliteration: "An-Nur",
    meaning: "The Light",
    description: "The Light - The One who guides whoever He willed by His light, the light of the heavens and the earth.",
    relatedNames: ["Al-Hadi", "Al-Haqq"],
    orderNumber: 93,
    category: nameCategories.GUIDANCE
  },
  {
    arabicName: "الْهَادِي",
    transliteration: "Al-Hadi",
    meaning: "The Guide",
    description: "The Guide - The One whom with His guidance His believing servants were guided, and with His guidance the living beings have been guided to what is beneficial for them.",
    relatedNames: ["An-Nur", "Ar-Rashid"],
    orderNumber: 94,
    category: nameCategories.GUIDANCE
  },
  {
    arabicName: "الْبَدِيعُ",
    transliteration: "Al-Badi",
    meaning: "The Originator",
    description: "The Originator - The One who created the creation and formed it without any preceding example.",
    relatedNames: ["Al-Khaliq", "Al-Musawwir"],
    orderNumber: 95,
    category: nameCategories.CREATION
  },
  {
    arabicName: "الْبَاقِي",
    transliteration: "Al-Baqi",
    meaning: "The Everlasting",
    description: "The Everlasting - The One that the state of non-existence is impossible for Him.",
    relatedNames: ["Al-Hayy", "Al-Qayyum"],
    orderNumber: 96,
    category: nameCategories.LIFE
  },
  {
    arabicName: "الْوَارِثُ",
    transliteration: "Al-Warith",
    meaning: "The Inheritor",
    description: "The Inheritor - The One who remains after the creatures have perished.",
    relatedNames: ["Al-Baqi", "Al-Hayy"],
    orderNumber: 97,
    category: nameCategories.LIFE
  },
  {
    arabicName: "الرَّشِيدُ",
    transliteration: "Ar-Rashid",
    meaning: "The Guide to the Right Path",
    description: "The Guide to the Right Path - The One who guides His creatures to what is beneficial for them.",
    relatedNames: ["Al-Hadi", "Al-Waliyy"],
    orderNumber: 98,
    category: nameCategories.GUIDANCE
  },
  {
    arabicName: "الصَّبُورُ",
    transliteration: "As-Sabur",
    meaning: "The Patient",
    description: "The Patient - The One who does not quickly punish the sinners.",
    relatedNames: ["Al-Halim", "Al-Ghafur"],
    orderNumber: 99,
    category: nameCategories.FORGIVENESS
  }
];