"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations as staticTranslations } from "@/data/translations";
import staticUmkm from "@/data/umkm.json";
import staticBerita from "@/data/berita.json";

const LanguageContext = createContext({
  language: "id",
  setLanguage: () => {},
  t: staticTranslations.id,
  translationsState: staticTranslations,
  umkmList: staticUmkm,
  beritaList: staticBerita,
  isAdmin: false,
  setIsAdmin: () => {},
  editMode: false,
  setEditMode: () => {},
  activeEditSection: null,
  setActiveEditSection: () => {},
  updateSection: async () => {},
  saveUmkmList: async () => {},
  saveBeritaList: async () => {},
  saveData: async () => {},
  checkAdminStatus: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");
  const [translationsState, setTranslationsState] = useState(staticTranslations);
  const [umkmList, setUmkmList] = useState(staticUmkm);
  const [beritaList, setBeritaList] = useState(staticBerita);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [activeEditSection, setActiveEditSection] = useState(null);

  // Load language preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tlogomoyo_lang");
    if (stored === "id" || stored === "en") {
      setTimeout(() => {
        setLanguage(stored);
      }, 0);
    }
  }, []);

  // Fetch dynamic content from server on mount
  useEffect(() => {
    async function loadDynamicData() {
      try {
        const res = await fetch("/api/admin");
        const result = await res.json();
        if (res.ok && result.success) {
          if (result.data.translations) setTranslationsState(result.data.translations);
          if (result.data.umkm) setUmkmList(result.data.umkm);
          if (result.data.berita) setBeritaList(result.data.berita);
        }
      } catch (err) {
        console.error("Gagal memuat data dinamis dari server:", err);
      }
    }
    loadDynamicData();
  }, []);

  // Verify and update Admin status on mount or password changes
  const checkAdminStatus = (pass = null) => {
    const password = pass || localStorage.getItem("tlogomoyo_admin_pass");
    if (password === "Tlogomoyokunomor1selalu") {
      setIsAdmin(true);
      return true;
    }
    setIsAdmin(false);
    return false;
  };

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("tlogomoyo_lang", lang);
  };

  const saveData = async (type, updatedData) => {
    const password = localStorage.getItem("tlogomoyo_admin_pass") || "";
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({
          type,
          data: updatedData,
        }),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        return { success: true };
      } else {
        return { success: false, error: result.error || "Gagal menyimpan data ke server." };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const updateSection = async (section, updatedId, updatedEn) => {
    const updated = {
      ...translationsState,
      id: { ...translationsState.id, [section]: updatedId },
      en: { ...translationsState.en, [section]: updatedEn },
    };
    setTranslationsState(updated);
    return await saveData("translations", updated);
  };

  const handleSaveUmkmList = async (newList) => {
    setUmkmList(newList);
    return await saveData("umkm", newList);
  };

  const handleSaveBeritaList = async (newList) => {
    setBeritaList(newList);
    return await saveData("berita", newList);
  };

  const t = translationsState[language] || translationsState.id;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        translationsState,
        umkmList,
        beritaList,
        isAdmin,
        setIsAdmin,
        editMode,
        setEditMode,
        activeEditSection,
        setActiveEditSection,
        updateSection,
        saveUmkmList: handleSaveUmkmList,
        saveBeritaList: handleSaveBeritaList,
        saveData,
        checkAdminStatus,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
