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
  results?: {
    sr: string;
    en: string;
  };
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
      sr: "Web Sajt & Landing Stranica",
      en: "Web Presentation & Landing Page"
    },
    project: "Frizerski Salon Stevan",
    type: {
      sr: "Sajt za Povećanje Rezervacija",
      en: "High-Converting Salon Website"
    },
    date: "2026",
    link: "https://frizerski-salon-stevan.vercel.app/",
    tags: ["React", "Visoke Konverzije", "SEO Optimizacija", "Mobilni Prikaz"],
    results: {
      sr: "+180% više direktnih poziva i online zakazivanja, 100/100 brzina učitavanja",
      en: "+180% increase in direct calls & appointments, 100/100 mobile performance"
    },
    points: {
      sr: [
        "Izrađen atraktivan, moderan sajt koji posetioce pretvara u stalne klijente salona.",
        "Jasno istaknute usluge, transparentan cenovnik i instant dugmad za poziv i lokaciju.",
        "Maksimalna brzina učitavanja na telefonima koja odmah ostavlja profesionalan utisak."
      ],
      en: [
        "Crafted a modern, visually stunning website engineered to convert visitors into loyal clients.",
        "Crystal-clear service showcase, interactive pricing, and instant one-tap call & maps actions.",
        "Lightning-fast mobile loading speed that establishes instant brand trust and authority."
      ]
    }
  },
  {
    id: "ada-studio",
    title: {
      sr: "Agencijska Web Platforma & CMS",
      en: "Agency Web Platform & Custom CMS"
    },
    project: "Ada Studio",
    type: {
      sr: "Brending & Generator Upita",
      en: "Brand Platform & Lead Generator"
    },
    date: "2026",
    link: "https://adastudio.rs/",
    tags: ["WordPress", "Custom CMS", "SEO Rangiranje", "Automatizacija"],
    results: {
      sr: "Automatizovan prijem novih klijenata i visoko pozicioniranje na Google pretrazi",
      en: "Automated client onboarding pipeline and strong Google SERP visibility"
    },
    points: {
      sr: [
        "Prestižan agencijski dizajn kreiran da privuče veće klijente i predstavi portfolio radova.",
        "Prilagođen sistem za lako ažuriranje sadržaja, blog članaka i novih usluga.",
        "SEO optimizacija koja donosi besplatne organske posete i stabilan priliv upita."
      ],
      en: [
        "Premium agency presence designed to win high-ticket clients and showcase creative work.",
        "Custom easy-to-use CMS tailored for effortless content, service, and blog updates.",
        "Advanced SEO setup driving consistent organic inbound inquiries without ad spend."
      ]
    }
  },
  {
    id: "altara-inmo",
    title: {
      sr: "Platforma za Nekretnine",
      en: "Real Estate Property Platform"
    },
    project: "Altara Inmo",
    type: {
      sr: "Prodajna Platforma & Pretraga",
      en: "Sales & Real Estate Portal"
    },
    date: "2025",
    link: "https://www.altarainmo.com/",
    tags: ["Web Aplikacija", "Pretraga Nekretnina", "Brz Odziv", "Globalni Klijenti"],
    results: {
      sr: "Filtriranje hiljada nekretnina u sekundi i direktna veza kupaca sa agentima",
      en: "Sub-second filtering across property catalogs with direct lead-to-agent dispatch"
    },
    points: {
      sr: [
        "Pregledan katalog nekretnina sa brzim filtriranjem po ceni, lokaciji i tipu objekta.",
        "Direktan sistem za slanje upita koji ubrzava proces prodaje i komunikaciju sa kupcima.",
        "Pouzdan rad i bezbedno čuvanje podataka prilagođeno internacionalnom tržištu."
      ],
      en: [
        "Intuitive property catalog with instant real-time filtering by budget, location, and type.",
        "Seamless lead capture system streamlining property inquiries directly to real estate agents.",
        "High-reliability multi-language architecture built for international buyers."
      ]
    }
  },
  {
    id: "taxi-pro-gps",
    title: {
      sr: "Softverski Sistem za Praćenje Flote",
      en: "Fleet Management & Live GPS Platform"
    },
    project: "Taxi Pro GPS",
    type: {
      sr: "Sistem za Optimizaciju Poslovanja",
      en: "Operations & Fleet Software"
    },
    date: "2025",
    link: "https://www.taxiprogps.com/",
    tags: ["Softver po Meri", "Ušteda Vremena", "Real-Time Podaci", "Pouzdanost 24/7"],
    results: {
      sr: "Smanjenje troškova goriva i automatizovano praćenje svih vozila u realnom vremenu",
      en: "Reduced fleet operating costs and automated real-time dispatch management"
    },
    points: {
      sr: [
        "Rešenje po meri koje vlasnicima vozila štedi hiljade evra kroz pametno praćenje.",
        "Prikaz lokacija vozila u milisekundi bez zastoja i prekida u radu.",
        "Kompletna automatizacija dispečerskih izveštaja i istorije kretanja."
      ],
      en: [
        "Bespoke software architecture reducing fleet operational expenditure via intelligent tracking.",
        "Millisecond-level real-time vehicle positioning with 99.9% operational uptime.",
        "Automated reporting dashboards and dispatch route analytics saving administrative hours."
      ]
    }
  }
];

export function getLocalizedProject(proj: ProjectItem, lang: "sr" | "en") {
  return {
    ...proj,
    title: typeof proj.title === "string" ? proj.title : proj.title[lang],
    type: typeof proj.type === "string" ? proj.type : proj.type[lang],
    results: proj.results ? (typeof proj.results === "string" ? proj.results : proj.results[lang]) : undefined,
    points: proj.points[lang] || proj.points.en
  };
}
