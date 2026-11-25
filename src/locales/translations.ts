export type Language = "sr" | "en";

export interface TranslationSchema {
  meta: { title: string; description: string };
}

export const translations: Record<Language, TranslationSchema> = {
  sr: {
    meta: {
      title: "SSolutions — Strahinja Sretenović | Izrada sajtova i web aplikacija, Novi Sad",
      description:
        "Portfolio Strahinje Sretenovića (SSolutions), Novi Sad. Pravim brze, moderne sajtove i web aplikacije koji donose klijente — dizajn, kod i SEO na jednom mestu.",
    },
  },
  en: {
    meta: {
      title: "SSolutions by Strahinja Sretenović — Websites & Web Apps | Novi Sad",
      description:
        "Portfolio of Strahinja Sretenović (SSolutions), Novi Sad, Serbia. I build fast, modern websites and web apps that bring in clients — design, code and SEO in one place.",
    },
  },
};
