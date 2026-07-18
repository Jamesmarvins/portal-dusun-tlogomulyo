"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";

export default function EditButton({ type = "translations", section, item = null, label = "Edit", className = "" }) {
  const { editMode, setActiveEditSection } = useLanguage();

  if (!editMode) return null;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveEditSection({ type, section, item });
      }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-600/95 hover:bg-emerald-600 hover:scale-105 active:scale-95 border border-emerald-400/30 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-[11px] cursor-pointer select-none z-30 ${className}`}
    >
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 18.291a8.95 8.95 0 0 1-3.064 1.983m-1.766-.1L3.5 18M18.816 7.037l-1.688-1.688M2.25 21.75h19.5" />
      </svg>
      <span>{label}</span>
    </button>
  );
}
