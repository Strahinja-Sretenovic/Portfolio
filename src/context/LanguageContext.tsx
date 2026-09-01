import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationSchema, Language } from "../locales/translations";

export type { Language };

interface LanguageContextType {
  language: Language;
  t: TranslationSchema;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("app_lang");
    return (saved === "en" || saved === "sr") ? saved : "sr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "sr" ? "en" : "sr");
  };

  useEffect(() => {
    localStorage.setItem("app_lang", language);
    // Sync document language attribute and title
    document.documentElement.lang = language;
    const currentT = translations[language];
    if (currentT) {
      document.title = currentT.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", currentT.meta.description);
      }
    }
  }, [language]);

  const t = translations[language] || translations.sr;

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

