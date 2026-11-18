export type Lang = "sr" | "en";

export const CONTACT = {
  email: "sretenovic0315@gmail.com",
  linkedin: "https://www.linkedin.com/in/strahinja-sretenovic",
  github: "https://github.com/Strahinja-Sretenovic",
  resume: "/folders/resume.pdf",
};

export interface Project {
  id: string;
  name: string;
  year: string;
  link: string;
  image: string;
  accent: string;
  tags: string[];
  category: Record<Lang, string>;
  line: Record<Lang, string>;
  role: Record<Lang, string>;
}

export const projects: Project[] = [
  {
    id: "stevan",
    name: "Frizerski salon Stevan",
    year: "2026",
    link: "https://frizerski-salon-stevan.vercel.app/",
    image: "/work/stevan.webp",
    accent: "#d9a441",
    tags: ["React", "SEO", "Mobile-first"],
    category: { sr: "Sajt za salon", en: "Salon website" },
    line: {
      sr: "Elegantan sajt koji posetioce pretvara u zakazane termine — jedan klik do poziva.",
      en: "An elegant site that turns visitors into bookings — one tap away from a call.",
    },
    role: { sr: "Dizajn i razvoj", en: "Design & development" },
  },
  {
    id: "ada",
    name: "Ada Studio",
    year: "2026",
    link: "https://adastudio.rs/",
    image: "/work/ada.webp",
    accent: "#f08a24",
    tags: ["WordPress", "Custom CMS", "SEO"],
    category: { sr: "Agencijska platforma", en: "Studio platform" },
    line: {
      sr: "Premium prezentacija arhitektonskog studija, sa CMS-om za lako ažuriranje projekata.",
      en: "A premium presence for an architecture studio, with a CMS for effortless updates.",
    },
    role: { sr: "Full-stack razvoj", en: "Full-stack development" },
  },
  {
    id: "altara",
    name: "Altara Inmo",
    year: "2025",
    link: "https://www.altarainmo.com/",
    image: "/work/altara.webp",
    accent: "#b7a76a",
    tags: ["Web app", "REST API", "CRUD"],
    category: { sr: "Portal za nekretnine", en: "Real-estate portal" },
    line: {
      sr: "Katalog nekretnina sa brzim filterima i upitima koji stižu direktno agentima.",
      en: "A property catalogue with fast filters and inquiries sent straight to agents.",
    },
    role: { sr: "Full-stack razvoj", en: "Full-stack development" },
  },
  {
    id: "taxi",
    name: "Taxi Pro GPS",
    year: "2025",
    link: "https://www.taxiprogps.com/",
    image: "/work/taxi.webp",
    accent: "#f5b800",
    tags: ["PHP", "MySQL", "Android API"],
    category: { sr: "Softver za flotu", en: "Fleet software" },
    line: {
      sr: "Backend za praćenje vozila u realnom vremenu i komunikaciju sa Android aplikacijom.",
      en: "Backend for real-time vehicle tracking and the Android app that talks to it.",
    },
    role: { sr: "Backend razvoj", en: "Backend development" },
  },
];

export const stackRows = [
  ["React", "TypeScript", "Next.js", "Tailwind CSS", "Angular", "Node.js", "NestJS", "Express"],
  ["Java · Spring Boot", "Go", "C# · .NET", "Python · FastAPI", "PHP", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Kubernetes"],
];

const sr = {
  nav: { about: "O meni", work: "Radovi", services: "Usluge", process: "Proces", contact: "Kontakt", cta: "Započnimo" },
  hero: {
    eyebrow: "Strahinja Sretenović — web developer",
    lines: ["Pravim sajtove", "koji donose"],
    accent: "klijente.",
    sub: "Dizajn, kod i SEO — od ideje do sajta koji radi za vaš posao.",
    ctaWork: "Pogledaj radove",
    ctaTalk: "Započnimo projekat",
    status: "Slobodan za nove projekte",
    scroll: "Skroluj",
    location: "Čačak, Srbija",
  },
  marquee: ["Web sajtovi", "Web aplikacije", "Landing stranice", "SEO", "Backend sistemi", "Redizajn"],
  about: {
    label: "O meni",
    statement:
      "Ja sam Strahinja — developer iz Čačka. Spajam backend inženjering i dizajn da bih pravio sajtove koji su brzi, lepi i jednostavni. Bez šablona. Bez komplikacija.",
    facts: [
      { value: "FTN", label: "Master studije, Novi Sad" },
      { value: "1+", label: "godina iskustva u firmi" },
      { value: "4", label: "projekta uživo" },
      { value: "20+", label: "tehnologija" },
    ],
    resume: "Preuzmi CV",
  },
  work: {
    label: "Izabrani radovi",
    title: "Projekti koji rade",
    hint: "Prevuci / skroluj",
    visit: "Pogledaj uživo",
  },
  services: {
    label: "Usluge",
    title: "Šta mogu da napravim za vas",
    items: [
      { title: "Web sajtovi", text: "Brzi, moderni sajtovi napravljeni da posetioce pretvore u upite." },
      { title: "Web aplikacije", text: "Rezervacije, katalozi, admin paneli — softver po meri vašeg posla." },
      { title: "SEO i brzina", text: "Tehnički SEO i performanse, da vas klijenti zaista pronađu." },
      { title: "Redizajn", text: "Zastareo sajt postaje moderan, brz i prilagođen telefonu." },
    ],
  },
  process: {
    label: "Proces",
    title: "Od razgovora do lansiranja",
    steps: [
      { title: "Razgovor", text: "Upoznam vaš posao, klijente i cilj." },
      { title: "Plan i dizajn", text: "Struktura i izgled — pre prve linije koda." },
      { title: "Razvoj", text: "Gradim i testiram, vi pratite napredak." },
      { title: "Lansiranje", text: "Sajt ide uživo, a ja ostajem tu za podršku." },
    ],
  },
  stack: { label: "Alati koje koristim" },
  contact: {
    label: "Kontakt",
    kicker: "Imate ideju?",
    title: ["Hajde da je", "napravimo."],
    name: "Ime",
    email: "Email",
    type: "Šta vam treba?",
    types: ["Web sajt", "Web aplikacija", "SEO", "Redizajn", "Nešto drugo"],
    message: "Ukratko o projektu",
    send: "Pošalji upit",
    note: "Otvoriće se vaš email sa pripremljenom porukom.",
    or: "ili pišite direktno",
    copied: "Email kopiran",
    required: "Unesite ime i email.",
    privacyPre: "Slanjem upita prihvatate obradu podataka u skladu sa",
    privacyLink: "Politikom privatnosti",
  },
  footer: {
    rights: "Sva prava zadržana.",
    privacy: "Privatnost",
    terms: "Uslovi",
    cookies: "Kolačići",
    refund: "Povraćaj i garancija",
    business: "Podaci o poslovanju",
    cookieSettings: "Podešavanja kolačića",
    top: "Na vrh",
  },
};

const en: typeof sr = {
  nav: { about: "About", work: "Work", services: "Services", process: "Process", contact: "Contact", cta: "Let's talk" },
  hero: {
    eyebrow: "Strahinja Sretenović — web developer",
    lines: ["I build websites", "that bring in"],
    accent: "clients.",
    sub: "Design, code and SEO — from an idea to a site that works for your business.",
    ctaWork: "See my work",
    ctaTalk: "Start a project",
    status: "Available for new projects",
    scroll: "Scroll",
    location: "Čačak, Serbia",
  },
  marquee: ["Websites", "Web apps", "Landing pages", "SEO", "Backend systems", "Redesigns"],
  about: {
    label: "About",
    statement:
      "I'm Strahinja — a developer from Čačak, Serbia. I combine backend engineering with design to build websites that are fast, beautiful and simple. No templates. No fuss.",
    facts: [
      { value: "FTN", label: "Master's student, Novi Sad" },
      { value: "1+", label: "year in industry" },
      { value: "4", label: "live projects" },
      { value: "20+", label: "technologies" },
    ],
    resume: "Download CV",
  },
  work: {
    label: "Selected work",
    title: "Projects that work",
    hint: "Drag / scroll",
    visit: "Visit live",
  },
  services: {
    label: "Services",
    title: "What I can build for you",
    items: [
      { title: "Websites", text: "Fast, modern sites built to turn visitors into inquiries." },
      { title: "Web apps", text: "Bookings, catalogues, admin panels — software shaped to your business." },
      { title: "SEO & speed", text: "Technical SEO and performance, so clients actually find you." },
      { title: "Redesigns", text: "An outdated site becomes modern, fast and mobile-ready." },
    ],
  },
  process: {
    label: "Process",
    title: "From first call to launch",
    steps: [
      { title: "Talk", text: "I learn your business, clients and goals." },
      { title: "Plan & design", text: "Structure and look — before a line of code." },
      { title: "Build", text: "I build and test while you follow along." },
      { title: "Launch", text: "Your site goes live, and I stay around for support." },
    ],
  },
  stack: { label: "Tools I use" },
  contact: {
    label: "Contact",
    kicker: "Got an idea?",
    title: ["Let's build", "it together."],
    name: "Name",
    email: "Email",
    type: "What do you need?",
    types: ["Website", "Web app", "SEO", "Redesign", "Something else"],
    message: "A few words about the project",
    send: "Send inquiry",
    note: "Your email app opens with the message ready to send.",
    or: "or write directly",
    copied: "Email copied",
    required: "Please enter your name and email.",
    privacyPre: "By sending an inquiry you agree to the processing of your data under the",
    privacyLink: "Privacy Policy",
  },
  footer: {
    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    refund: "Refund policy",
    business: "Business details",
    cookieSettings: "Cookie settings",
    top: "Back to top",
  },
};

export const content = { sr, en };
export type Content = typeof sr;
