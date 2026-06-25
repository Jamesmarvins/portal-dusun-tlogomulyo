"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1 border border-slate-200 dark:border-slate-700 shadow-inner shrink-0">
      <button
        onClick={() => setLanguage("id")}
        className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
          language === "id"
            ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm scale-105"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
        }`}
        title="Bahasa Indonesia"
      >
        <span>🇮🇩</span>
        <span>ID</span>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
          language === "en"
            ? "bg-white dark:bg-slate-700 text-primary-700 dark:text-primary-300 shadow-sm scale-105"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
        }`}
        title="English Version"
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
}
