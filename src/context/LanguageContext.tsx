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
      
      const setMeta = (selector: string, content: string) => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute("content", content);
      };

      setMeta('meta[name="description"]', currentT.meta.description);
      setMeta('meta[property="og:title"]', currentT.meta.title);
      setMeta('meta[property="og:description"]', currentT.meta.description);
      setMeta('meta[name="twitter:title"]', currentT.meta.title);
      setMeta('meta[name="twitter:description"]', currentT.meta.description);
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

