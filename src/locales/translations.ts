export type Language = "sr" | "en";

export interface TranslationSchema {
  meta: { title: string; description: string };
}

export const translations: Record<Language, TranslationSchema> = {
  sr: {
    meta: {
      title: "Strahinja Sretenović — Izrada sajtova i web aplikacija | SSolutions",
      description:
        "Web developer iz Čačka. Pravim brze, moderne sajtove i web aplikacije koji donose klijente — dizajn, kod i SEO na jednom mestu.",
    },
  },
  en: {
    meta: {
      title: "Strahinja Sretenović — Websites & Web Apps | SSolutions",
      description:
        "Web developer from Čačak, Serbia. I build fast, modern websites and web apps that bring in clients — design, code and SEO in one place.",
    },
  },
};
