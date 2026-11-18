export type Language = "sr" | "en";

export interface TranslationSchema {
  meta: { title: string; description: string };
}

export const translations: Record<Language, TranslationSchema> = {
  sr: {
    meta: {
      title: "SSolutions — Izrada sajtova i web aplikacija | Čačak",
      description:
        "Web studio iz Čačka. Pravimo brze, moderne sajtove i web aplikacije koji donose klijente — dizajn, kod i SEO na jednom mestu.",
    },
  },
  en: {
    meta: {
      title: "SSolutions — Websites & Web Apps | Čačak, Serbia",
      description:
        "Web studio from Čačak, Serbia. We build fast, modern websites and web apps that bring in clients — design, code and SEO in one place.",
    },
  },
};
