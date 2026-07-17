"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext({
  language: "id",
  setLanguage: () => {},
  t: translations.id,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");

  useEffect(() => {
    const stored = localStorage.getItem("tlogomoyo_lang");
    if (stored === "id" || stored === "en") {
      setTimeout(() => {
        setLanguage(stored);
      }, 0);
    }
  }, []);

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("tlogomoyo_lang", lang);
  };

  const t = translations[language] || translations.id;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
