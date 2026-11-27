export type Lang = "en" | "so";
export type Pair = readonly [string, string];
export const fields: Pair[] = [
  ["Digital Administration", "Maamulka Dijitaalka"],
  ["Teaching", "Waxbaridda"],
  ["Translation and Communication", "Tarjumaadda iyo Isgaarsiinta"],
  ["Basic IT Support", "Taageerada Aasaasiga ah ee IT"],
];
export type Profile = {
  name: string;
  contact: string;
  location: string;
  language: string;
  field: string;
  education: string;
  experience: string;
  years: string;
  languages: string;
  skills: string;
  portfolio: string;
};
export const blankProfile: Profile = {
  name: "",
  contact: "",
  location: "Dadaab",
  language: "en",
  field: "",
  education: "",
  experience: "",
  years: "",
  languages: "",
  skills: "",
  portfolio: "",
};
export type Result = {
  category: number;
  answers: string[];
  score: number;
  points: number[];
  date: string;
};
export type Data = {
  profile: Profile;
  suggested: Pair[];
  results: Result[];
  generated: string;
  description: string;
};
export const emptyData: Data = {
  profile: blankProfile,
  suggested: [],
  results: [],
  generated: "",
  description: "",
};
const groups: { terms: string[]; skills: Pair[] }[] = [
  {
    terms: [
      "teach",
      "school",
      "lesson",
      "teacher",
      "taught",
      "macallin",
      "waxbar",
      "arday",
      "dugsi",
    ],
    skills: [
      ["Lesson planning", "Qorshaynta casharrada"],
      ["Classroom management", "Maamulka fasalka"],
      ["Communication", "Isgaarsiinta"],
      ["Assessment and evaluation", "Qiimaynta iyo hubinta"],
      ["Record keeping", "Diiwaan haynta"],
      ["Leadership", "Hoggaaminta"],
    ],
  },
  {
    terms: ["office", "record", "admin", "data", "xafiis", "diiwaan", "xog"],
    skills: [
      ["Data organisation", "Habeynta xogta"],
      ["Record keeping", "Diiwaan haynta"],
      ["Professional communication", "Isgaarsiin xirfadeed"],
      ["Attention to detail", "U fiirsashada faahfaahinta"],
    ],
  },
  {
    terms: ["translat", "language", "interpret", "tarjum", "luqad"],
    skills: [
      ["Translation", "Tarjumaadda"],
      ["Active listening", "Dhegeysi feejigan"],
      ["Cross-cultural communication", "Isgaarsiinta dhaqamada kala duwan"],
    ],
  },
  {
    terms: ["computer", "network", "internet", "repair", "kombiyuutar", "shabakad", "dayactir"],
    skills: [
      ["Troubleshooting", "Xallinta cilladaha"],
      ["Technical support", "Taageerada farsamada"],
      ["Problem solving", "Xallinta dhibaatooyinka"],
    ],
  },
  {
    terms: ["shop", "sell", "customer", "business", "dukaan", "ganacsi", "iib"],
    skills: [
      ["Customer service", "Adeegga macaamiisha"],
      ["Inventory management", "Maamulka alaabta"],
      ["Communication", "Isgaarsiinta"],
    ],
  },
  {
    terms: ["nurse", "health", "care", "hospital", "caafimaad", "kalkaali"],
    skills: [
      ["Care coordination", "Isku dubbaridka daryeelka"],
      ["Record keeping", "Diiwaan haynta"],
      ["Communication", "Isgaarsiinta"],
    ],
  },
];
export function discover(text: string): Pair[] {
  const lower = text.toLowerCase();
  const skills = groups
    .filter((g) => g.terms.some((term) => lower.includes(term)))
    .flatMap((g) => g.skills);
  return skills.filter((s, i) => skills.findIndex((x) => x[0] === s[0]) === i);
}
export const assessments: {
  intro: Pair;
  questions: Pair[];
  rubric: Pair[];
  keywords: string[][];
}[] = [
  {
    intro: [
      "Review records and communicate clearly. Each answer earns up to 2 points.",
      "Hubi diiwaannada oo si cad u wada xiriir. Jawaab kasta waxay leedahay ilaa 2 dhibcood.",
    ],
    questions: [
      [
        "Record: Amina, age 28, email amina.example.com; duplicate entry: Amina, age 28. Identify two errors.",
        "Diiwaan: Amina, da’ 28, iimayl amina.example.com; diiwaan kale: Amina, da’ 28. Sheeg laba khalad.",
      ],
      [
        "Put these names in alphabetical order: Yusuf, Amina, Hassan.",
        "Magacyadan u kala hormari alifbeetada: Yusuf, Amina, Hassan.",
      ],
      [
        "Write an email to a colleague requesting a missing monthly report. Include a greeting and a polite request.",
        "U qor saaxiib shaqo iimayl aad ku codsanayso warbixinta bisha ee maqan. Ku dar salaan iyo codsi xushmad leh.",
      ],
    ],
    rubric: [
      [
        "1 point for an invalid email; 1 for a duplicate record.",
        "1 dhibic iimayl khaldan; 1 dhibic diiwaan soo noqnoqday.",
      ],
      [
        "1 point for all three names; 1 for correct order.",
        "1 dhibic saddexda magac; 1 dhibic kala horreynta saxda ah.",
      ],
      [
        "1 point for a greeting; 1 for a polite request.",
        "1 dhibic salaan; 1 dhibic codsi xushmad leh.",
      ],
    ],
    keywords: [],
  },
  {
    intro: [
      "Plan a short lesson on handwashing for primary school learners. Each answer earns up to 2 points.",
      "Qorshee cashar gaaban oo ku saabsan gacmo dhaqashada, ardayda dugsiga hoose. Jawaab kasta waxay leedahay ilaa 2 dhibcood.",
    ],
    questions: [
      [
        "Outline the lesson with an introduction, activity, and conclusion.",
        "Qor qorshe leh hordhac, hawl iyo gunaanad.",
      ],
      [
        "Write a measurable learning objective: what will learners be able to do?",
        "Qor ujeeddo waxbarasho oo la cabbiri karo: maxay ardaydu qaban karaan?",
      ],
      [
        "How will you check that learners understand? Include questions and a practical demonstration.",
        "Sidee baad u hubinaysaa fahamka ardayda? Ku dar su’aalo iyo bandhig waxqabad.",
      ],
    ],
    rubric: [
      [
        "1 point for an introduction; 1 for an activity or conclusion.",
        "1 dhibic hordhac; 1 dhibic hawl ama gunaanad.",
      ],
      [
        "1 point for learners; 1 for an observable action (demonstrate, explain, identify).",
        "1 dhibic ardayda; 1 dhibic fal la arki karo (muuji, sharax, aqoonso).",
      ],
      [
        "1 point for questions; 1 for demonstration or observation.",
        "1 dhibic su’aalo; 1 dhibic bandhig ama indho-indhayn.",
      ],
    ],
    keywords: [
      ["introduction|introduce|hordhac", "activity|conclusion|hawl|gunaanad"],
      ["learner|student|arday", "demonstrat|explain|identify|muuji|sharax|aqoonso"],
      ["question|ask|su.aal|weydii", "demonstrat|observ|muuji|bandhig|fiiri"],
    ],
  },
  {
    intro: [
      "Translate the English message into Somali: “The meeting is tomorrow at nine in the morning.” Each answer earns up to 2 points.",
      "U tarjum fariintan Af-Soomaali: “The meeting is tomorrow at nine in the morning.” Jawaab kasta waxay leedahay ilaa 2 dhibcood.",
    ],
    questions: [
      ["Write the Somali translation.", "Qor tarjumaadda Af-Soomaaliga."],
      [
        "Explain the meaning, including when the meeting takes place.",
        "Sharax macnaha, kuna dar goorta kulanku dhacayo.",
      ],
      [
        "Rewrite professionally: “Send me the file now.”",
        "Si xirfad leh dib ugu qor: “Hadda faylka ii soo dir.”",
      ],
    ],
    rubric: [
      [
        "1 point for tomorrow (berri); 1 for nine (sagaal). Meaning is not independently reviewed.",
        "1 dhibic berri; 1 dhibic sagaal. Macnaha si madax-bannaan looma qiimayn.",
      ],
      [
        "1 point for tomorrow; 1 for morning or nine.",
        "1 dhibic berri; 1 dhibic subax ama sagaal.",
      ],
      [
        "1 point for a polite request; 1 for mentioning the file.",
        "1 dhibic codsi xushmad leh; 1 dhibic xuska faylka.",
      ],
    ],
    keywords: [
      ["berri", "sagaal|9"],
      ["tomorrow|berri", "morning|nine|subax|sagaal|9"],
      ["please|kindly|fadlan|mahadsanid", "file|fayl"],
    ],
  },
  {
    intro: [
      "A laptop is connected to Wi-Fi but cannot open websites. Diagnose the problem safely. Each answer earns up to 2 points.",
      "Laptop ayaa Wi-Fi ku xiran balse ma furi karo bogagga internetka. Si ammaan leh u ogow cilladda. Jawaab kasta waxay leedahay ilaa 2 dhibcood.",
    ],
    questions: [
      ["Name two possible causes.", "Sheeg laba sababood oo suurtagal ah."],
      [
        "Describe safe troubleshooting steps. Check another device and restart the router.",
        "Sharax tallaabooyin ammaan ah. Hubi qalab kale oo dib u bilow router-ka.",
      ],
      [
        "Explain how you will confirm the connection works again.",
        "Sharax sida aad u xaqiijinayso in xiriirku mar kale shaqaynayo.",
      ],
    ],
    rubric: [
      [
        "1 point for a router issue; 1 for an internet/service issue.",
        "1 dhibic cillad router; 1 dhibic cillad internet ama adeeg.",
      ],
      [
        "1 point for testing another device; 1 for restarting.",
        "1 dhibic tijaabinta qalab kale; 1 dhibic dib u bilaabid.",
      ],
      [
        "1 point for opening a website; 1 for checking the connection.",
        "1 dhibic furista bog; 1 dhibic hubinta xiriirka.",
      ],
    ],
    keywords: [
      ["router|raawtar", "internet|service|adeeg"],
      ["another|other device|qalab kale", "restart|reboot|dib u bil"],
      ["website|browser|bog", "connection|connect|xiriir"],
    ],
  },
];
export function scoreAssessment(category: number, answers: string[]): number[] {
  const assessment = assessments[category];
  if (!assessment) return [];
  return assessment.questions.map((_, i) => {
    const answer = (answers[i] ?? "").toLowerCase();
    if (category === 0) {
      if (i === 0)
        return (
          Number(/email|iimayl|@/.test(answer)) +
          Number(/duplicat|repeat|soo noq|laba jeer/.test(answer))
        );
      if (i === 1)
        return (
          Number(["amina", "hassan", "yusuf"].every((n) => answer.includes(n))) +
          Number(/amina.*hassan.*yusuf/.test(answer))
        );
      return (
        Number(/dear|hello|hi\b|salaan|asc/.test(answer)) +
        Number(/please|kindly|fadlan/.test(answer))
      );
    }
    return (assessment.keywords[i] ?? []).reduce(
      (sum, pattern) => sum + Number(new RegExp(pattern).test(answer)),
      0,
    );
  });
}
export function completion(profile: Profile): number {
  const keys = [
    "name",
    "field",
    "education",
    "experience",
    "years",
    "languages",
    "skills",
  ] as const;
  return Math.round((keys.filter((k) => profile[k].trim()).length / keys.length) * 100);
}
export const disclaimer: Pair = [
  "ProofPath is an early-stage prototype developed for demonstration purposes. Information entered is stored locally in this browser. The platform helps users organise and demonstrate skills but does not independently verify qualifications, issue certifications or guarantee employment opportunities.",
  "ProofPath waa tusaale tijaabo ah oo marxalad hore ku jira, loona sameeyay bandhig. Xogta la geliyo waxaa lagu kaydiyaa biraawsarkan oo keliya. Madashu waxay dadka ka caawisaa habeynta iyo muujinta xirfadaha, balse si madax-bannaan uma xaqiijiso aqoonta, ma bixiso shahaadooyin, mana dammaanad qaaddo fursado shaqo.",
];
