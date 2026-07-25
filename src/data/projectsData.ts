export interface LocalizedString {
  sr: string;
  en: string;
}

export interface ProjectItem {
  id: string;
  title: string | LocalizedString;
  project: string;
  type: string | LocalizedString;
  date: string;
  link?: string;
  points: {
    sr: string[];
    en: string[];
  };
  tags?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "frizerski-salon-stevan",
    title: {
      sr: "Frontend & Web Developer",
      en: "Frontend & Web Developer"
    },
    project: "Frizerski Salon Stevan",
    type: {
      sr: "Sajt / Landing Page",
      en: "Barbershop Landing Page"
    },
    date: "2026",
    link: "https://frizerski-salon-stevan.vercel.app/",
    tags: ["React", "Vite", "Tailwind CSS", "SEO"],
    points: {
      sr: [
        "Dizajnirana i razvijena moderna, potpuno odzivna web landing stranica u tehnologijama React & Vite.",
        "Izrađene interaktivne sekcije usluga, cenovnik, radno vreme i integrisana lokacijska mapa.",
        "Optimizovane UI tranzicije, mobilno korisničko iskustvo i performanse za brzo učitavanje."
      ],
      en: [
        "Designed and developed a modern, fully responsive web landing page with React & Vite.",
        "Created custom interactive service sections, price lists, work schedules, and location maps.",
        "Optimised UI transitions, mobile UX, and performance for seamless user engagement."
      ]
    }
  },
  {
    id: "ada-studio",
    title: {
      sr: "Full-Stack Developer",
      en: "Full-Stack Developer"
    },
    project: "Ada Studio",
    type: {
      sr: "Web Agencijska Platforma",
      en: "Web Agency Platform"
    },
    date: "2026",
    link: "https://adastudio.rs/",
    tags: ["WordPress", "Elementor Pro", "ACF Pro"],
    points: {
      sr: [
        "Razvijen moderan i odzivan korisnički interfejs.",
        "Implementirane kompletne funkcionalnosti i prilagođena struktura.",
        "Optimizovani SEO metapodaci i performanse sajta."
      ],
      en: [
        "Engineered a modern, responsive user interface.",
        "Implemented comprehensive backend functionality.",
        "Optimised SEO metadata and page performance."
      ]
    }
  },
  {
    id: "altara-inmo",
    title: {
      sr: "Full-Stack Developer",
      en: "Full-Stack Developer"
    },
    project: "Altara Inmo",
    type: {
      sr: "Platforma za Nekretnine",
      en: "Real Estate Platform"
    },
    date: "2025",
    link: "https://www.altarainmo.com/",
    tags: ["Full-Stack", "REST API", "SEO", "Database"],
    points: {
      sr: [
        "Izrađen brz i pregledan korisnički interfejs.",
        "Implementirane backend CRUD operacije nad nekretninama.",
        "Integrisane eksterne REST API usluge.",
        "Optimizovana platforma za pretraživače (SEO)."
      ],
      en: [
        "Built responsive, user-friendly UI.",
        "Implemented backend property CRUD operations.",
        "Integrated third-party REST APIs smoothly.",
        "Optimised platform for SEO."
      ]
    }
  },
  {
    id: "taxi-pro-gps",
    title: {
      sr: "Backend Developer",
      en: "Backend Developer"
    },
    project: "Taxi Pro GPS",
    type: {
      sr: "Aplikacija za GPS Praćenje",
      en: "GPS Tracking App"
    },
    date: "2025",
    link: "https://www.taxiprogps.com/",
    tags: ["Backend", "GPS Data", "MySQL", "PHP / REST API"],
    points: {
      sr: [
        "Razvijen pouzdan backend za obradu GPS podataka u realnom vremenu.",
        "Integrisane odzivne komponente za praćenje vozila.",
        "Optimizovani upiti nad bazom podataka za brže osvežavanje lokacija."
      ],
      en: [
        "Developed robust backend for GPS data processing.",
        "Integrated responsive frontend tracking features.",
        "Optimised database queries for real-time updates."
      ]
    }
  }
];

export function getLocalizedProject(proj: ProjectItem, lang: "sr" | "en") {
  return {
    ...proj,
    title: typeof proj.title === "string" ? proj.title : proj.title[lang],
    type: typeof proj.type === "string" ? proj.type : proj.type[lang],
    points: proj.points[lang] || proj.points.en
  };
}
