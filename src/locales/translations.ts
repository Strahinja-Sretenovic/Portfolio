export type Language = "sr" | "en";

export interface TranslationSchema {
  meta: { title: string; description: string };
}

export const translations: Record<Language, TranslationSchema> = {
  sr: {
    meta: {
      title: "Strahinja Sretenović — softverski inženjer i full-stack developer | SSolutions",
      description:
        "Portfolio Strahinje Sretenovića (SSolutions): softverski inženjer i full-stack developer iz Novog Sada. Master student elektrotehnike i računarstva na FTN-u, Univerzitet u Novom Sadu.",
    },
  },
  en: {
    meta: {
      title: "Strahinja Sretenović — Software Engineer & Full-Stack Developer | SSolutions",
      description:
        "Portfolio of Strahinja Sretenović (SSolutions): software engineer and full-stack developer from Novi Sad. Master\'s student in Electrical and Computer Engineering at FTN, University of Novi Sad.",
    },
  },
};
