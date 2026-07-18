"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";

export default function QuickEditor() {
  const {
    isAdmin,
    setIsAdmin,
    editMode,
    setEditMode,
    activeEditSection,
    setActiveEditSection,
    translationsState,
    updateSection,
    umkmList,
    saveUmkmList,
    checkAdminStatus,
  } = useLanguage();

  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Local form states for editing translations
  const [editIdData, setEditIdData] = useState(null);
  const [editEnData, setEditEnData] = useState(null);
  const [activeLangTab, setActiveLangTab] = useState("id"); // "id" or "en"

  // Local form states for editing UMKM product
  const [editProduct, setEditProduct] = useState(null);

  // Toast state
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3500);
  };

  // Sync edit form states when activeEditSection changes
  useEffect(() => {
    if (!activeEditSection) {
      setEditIdData(null);
      setEditEnData(null);
      setEditProduct(null);
      return;
    }

    if (activeEditSection.type === "translations") {
      const section = activeEditSection.section;
      if (translationsState.id[section]) {
        // Deep copy
        setEditIdData(JSON.parse(JSON.stringify(translationsState.id[section])));
        setEditEnData(JSON.parse(JSON.stringify(translationsState.en[section] || {})));
      }
      setActiveLangTab("id");
    } else if (activeEditSection.type === "umkm-edit") {
      setEditProduct(JSON.parse(JSON.stringify(activeEditSection.item)));
    } else if (activeEditSection.type === "umkm-add") {
      setEditProduct({
        id: "produk-" + Date.now(),
        name: "",
        category: "makanan",
        categoryLabel: "🍟 Makanan & Camilan",
        price: 0,
        priceLabel: "",
        seller: "",
        phone: "628",
        image: "/images/hero.png",
        desc: "",
        badge: "Produk Baru ✨",
      });
    }
  }, [activeEditSection, translationsState]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    
    if (password === "tlogomoyo2026") {
      localStorage.setItem("tlogomoyo_admin_pass", password);
      setIsAdmin(true);
      setEditMode(true);
      setShowLoginModal(false);
      setPassword("");
      showToast("Berhasil masuk sebagai Admin!", "success");
    } else {
      setLoginError("Password salah. Silakan coba lagi.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("tlogomoyo_admin_pass");
    setIsAdmin(false);
    setEditMode(false);
    setActiveEditSection(null);
    showToast("Berhasil keluar dari mode Admin.", "info");
  };

  // File upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);

    const adminPass = localStorage.getItem("tlogomoyo_admin_pass") || "";

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: {
          "x-admin-password": adminPass,
        },
        body: formData,
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setEditProduct((prev) => ({ ...prev, image: result.url }));
        showToast("Gambar berhasil diunggah!", "success");
      } else {
        showToast(result.error || "Gagal mengunggah gambar.", "error");
      }
    } catch (err) {
      showToast("Kesalahan jaringan: " + err.message, "error");
    } finally {
      setUploadingImage(false);
    }
  };

  // Submit edits for translation section
  const handleTranslationSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const section = activeEditSection.section;

    const res = await updateSection(section, editIdData, editEnData);
    setIsLoading(false);

    if (res.success) {
      showToast("Teks bagian berhasil diperbarui!", "success");
      setActiveEditSection(null);
    } else {
      showToast(res.error || "Gagal memperbarui teks.", "error");
    }
  };

  // Submit product edit / add for UMKM
  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedUmkm = [...umkmList];
    if (activeEditSection.type === "umkm-add") {
      updatedUmkm.push(editProduct);
    } else {
      const idx = updatedUmkm.findIndex((p) => p.id === editProduct.id);
      if (idx !== -1) {
        updatedUmkm[idx] = editProduct;
      }
    }

    const res = await saveUmkmList(updatedUmkm);
    setIsLoading(false);

    if (res.success) {
      showToast(
        activeEditSection.type === "umkm-add" 
          ? "Produk baru berhasil ditambahkan!" 
          : "Produk berhasil diperbarui!", 
        "success"
      );
      setActiveEditSection(null);
    } else {
      showToast(res.error || "Gagal menyimpan produk.", "error");
    }
  };

  // Translation helper to handle simple inputs
  const handleFieldChange = (key, lang, value) => {
    if (lang === "id") {
      setEditIdData((prev) => ({ ...prev, [key]: value }));
    } else {
      setEditEnData((prev) => ({ ...prev, [key]: value }));
    }
  };

  // Translation helper to handle array lists (like cards, stats)
  const handleArrayItemChange = (key, idx, subKey, lang, value) => {
    if (lang === "id") {
      setEditIdData((prev) => {
        const copy = { ...prev };
        copy[key][idx][subKey] = value;
        return copy;
      });
    } else {
      setEditEnData((prev) => {
        const copy = { ...prev };
        // Handle mismatch lengths safely
        if (!copy[key]) copy[key] = [];
        if (!copy[key][idx]) copy[key][idx] = {};
        copy[key][idx][subKey] = value;
        return copy;
      });
    }
  };

  const handleArrayItemDelete = (key, idx) => {
    setEditIdData((prev) => {
      const copy = { ...prev };
      copy[key].splice(idx, 1);
      return copy;
    });
    setEditEnData((prev) => {
      const copy = { ...prev };
      if (copy[key]) copy[key].splice(idx, 1);
      return copy;
    });
  };

  const handleArrayItemAdd = (key, template) => {
    setEditIdData((prev) => {
      const copy = { ...prev };
      if (!copy[key]) copy[key] = [];
      copy[key].push(JSON.parse(JSON.stringify(template)));
      return copy;
    });
    setEditEnData((prev) => {
      const copy = { ...prev };
      if (!copy[key]) copy[key] = [];
      copy[key].push(JSON.parse(JSON.stringify(template)));
      return copy;
    });
  };

  // Render form controls dynamically based on the active JSON structure
  const renderFormFields = () => {
    if (!editIdData) return null;

    const keys = Object.keys(editIdData);

    return (
      <div className="space-y-6">
        {/* Language Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setActiveLangTab("id")}
            className={`flex-1 py-3 text-sm font-bold border-b-2 text-center transition-all ${
              activeLangTab === "id"
                ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            🇮🇩 Bahasa Indonesia
          </button>
          <button
            type="button"
            onClick={() => setActiveLangTab("en")}
            className={`flex-1 py-3 text-sm font-bold border-b-2 text-center transition-all ${
              activeLangTab === "en"
                ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            🇬🇧 English
          </button>
        </div>

        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 scrollbar-thin">
          {keys.map((key) => {
            const valId = editIdData[key];
            const currentLangData = activeLangTab === "id" ? editIdData : editEnData;
            const otherLangData = activeLangTab === "id" ? editEnData : editIdData;

            if (valId === null) return null;

            // 1. ARRAY OF OBJECTS (lists like stats, cards, etc.)
            if (Array.isArray(valId)) {
              const listItems = currentLangData[key] || [];
              const otherItems = otherLangData[key] || [];

              return (
                <div key={key} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
                      Daftar {key}
                    </h4>
                    <button
                      type="button"
                      onClick={() => {
                        const template = valId.length > 0 
                          ? Object.keys(valId[0]).reduce((acc, k) => {
                              acc[k] = "";
                              return acc;
                            }, {})
                          : { title: "", desc: "" };
                        handleArrayItemAdd(key, template);
                      }}
                      className="px-2.5 py-1 bg-emerald-600 text-white rounded-lg text-[10px] font-bold hover:bg-emerald-700 transition"
                    >
                      + Tambah Item
                    </button>
                  </div>

                  <div className="space-y-3">
                    {listItems.map((item, idx) => {
                      const itemKeys = Object.keys(item);
                      return (
                        <div key={idx} className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm relative space-y-2">
                          <button
                            type="button"
                            onClick={() => handleArrayItemDelete(key, idx)}
                            className="absolute top-2.5 right-3 text-red-500 hover:text-red-700 text-[10px] font-bold"
                          >
                            Hapus
                          </button>
                          <span className="text-[10px] font-bold text-slate-400">Item #{idx + 1}</span>
                          
                          <div className="space-y-2">
                            {itemKeys.map((subKey) => {
                              if (typeof item[subKey] === "object") return null;
                              return (
                                <div key={subKey} className="space-y-1">
                                  <label className="text-[10px] font-bold text-slate-500 uppercase">{subKey}</label>
                                  {subKey === "desc" || subKey === "deskripsi" || subKey === "quote" || subKey === "p1" ? (
                                    <textarea
                                      value={item[subKey] || ""}
                                      onChange={(e) => handleArrayItemChange(key, idx, subKey, activeLangTab, e.target.value)}
                                      className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none"
                                      rows={2}
                                    />
                                  ) : (
                                    <input
                                      type="text"
                                      value={item[subKey] || ""}
                                      onChange={(e) => handleArrayItemChange(key, idx, subKey, activeLangTab, e.target.value)}
                                      className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none"
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            // 2. DICTIONARY/OBJECTS (like maps)
            if (typeof valId === "object") {
              const subKeys = Object.keys(valId);
              return (
                <div key={key} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                  <h4 className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">{key}</h4>
                  <div className="space-y-3">
                    {subKeys.map((subKey) => {
                      const itemVal = currentLangData[key]?.[subKey] || "";
                      return (
                        <div key={subKey} className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-500 uppercase">{subKey}</label>
                          <input
                            type="text"
                            value={itemVal}
                            onChange={(e) => {
                              const updatedSubObj = { ...(currentLangData[key] || {}), [subKey]: e.target.value };
                              handleFieldChange(key, activeLangTab, updatedSubObj);
                            }}
                            className="w-full text-xs p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            // 3. PLAIN STRING/NUMBER
            const isTextarea = String(valId).length > 60;
            const currentVal = currentLangData[key] || "";

            return (
              <div key={key} className="space-y-1">
                <label className="block text-xs font-bold text-slate-650 dark:text-slate-305 uppercase">{key}</label>
                {isTextarea ? (
                  <textarea
                    value={currentVal}
                    onChange={(e) => handleFieldChange(key, activeLangTab, e.target.value)}
                    className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    rows={4}
                  />
                ) : (
                  <input
                    type="text"
                    value={currentVal}
                    onChange={(e) => handleFieldChange(key, activeLangTab, e.target.value)}
                    className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getSectionTitleReadable = (sectionName) => {
    const titles = {
      hero: "Hero Utama (Beranda)",
      sambutan: "Sambutan Kepala Dusun",
      weather: "Widget Cuaca",
      map: "Peta Interaktif",
      homeSections: "Seksi Beranda",
      profilContent: "Deskripsi Profil Dusun",
      profilFull: "Detil Profil Dusun",
      potensiPage: "Halaman Potensi Dusun",
      kknContent: "DPL & Kontak KKN",
      infoKknFull: "Detail KKN & Anggota",
      footer: "Footer & Kontak",
    };
    return titles[sectionName] || sectionName;
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed bottom-6 left-6 z-[9999] px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border animate-fade-in-up transition-all ${
          toast.type === "success" 
            ? "bg-emerald-650 border-emerald-500 text-white" 
            : toast.type === "error" 
            ? "bg-red-900 border-red-800 text-white" 
            : "bg-blue-900 border-blue-800 text-white"
        }`}>
          <span className="text-sm">
            {toast.type === "success" ? "✓" : toast.type === "error" ? "⚠️" : "ℹ"}
          </span>
          <span className="text-xs font-bold">{toast.message}</span>
        </div>
      )}

      {/* FLOATING ACTION PANEL */}
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3 select-none">
        
        {/* Toggle Panel Mode Edit (Only visible to admin) */}
        {isAdmin ? (
          <div className="flex flex-col items-end gap-2 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-3 shadow-2xl animate-fade-in-up">
            <div className="text-[10px] font-bold text-emerald-450 uppercase tracking-widest px-1 mb-1.5 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Admin Portal
            </div>
            
            <div className="flex flex-col gap-1.5 w-40">
              <button
                onClick={() => setEditMode(!editMode)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                  editMode 
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20" 
                    : "bg-slate-800 text-slate-350 hover:bg-slate-750"
                }`}
              >
                {editMode ? "📝 Edit Visual: ON" : "✏️ Edit Visual: OFF"}
              </button>

              <a
                href="/admin"
                className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-750 text-slate-300 rounded-xl text-xs font-bold text-center border border-slate-700/50 transition-all"
              >
                📂 Dashboard Admin
              </a>

              <button
                onClick={handleLogout}
                className="w-full py-2 px-3 bg-red-650/80 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Keluar Admin
              </button>
            </div>
          </div>
        ) : (
          /* Locked Button if not logged in */
          <button
            onClick={() => setShowLoginModal(true)}
            className="group flex items-center gap-2 px-4 py-3 bg-slate-900/90 dark:bg-slate-950/90 hover:bg-slate-850 dark:hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.05] cursor-pointer"
          >
            <svg className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-350" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <span className="text-xs font-bold tracking-wide uppercase">🔑 Login Admin</span>
          </button>
        )}
      </div>

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-fade-in-up">
            <button
              onClick={() => { setShowLoginModal(false); setLoginError(""); setPassword(""); }}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-350 text-sm font-bold"
            >
              ✕
            </button>
            <div className="text-center mb-6">
              <h3 className="text-xl font-heading font-extrabold text-white">Login Admin</h3>
              <p className="text-xs text-slate-450 mt-1">Gunakan password admin untuk mengubah isi website</p>
            </div>
            
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kata Sandi</label>
                <input
                  type="password"
                  placeholder="Masukkan password admin..."
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950/90 border border-slate-800 text-white rounded-2xl placeholder-slate-650 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              {loginError && (
                <div className="p-2.5 bg-red-950/50 border border-red-900 rounded-xl text-xs text-red-400 text-center font-bold">
                  ⚠️ {loginError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-primary-700 text-white font-bold rounded-2xl shadow-lg hover:from-emerald-700 transition"
              >
                Masuk & Edit Visual
              </button>
            </form>
          </div>
        </div>
      )}

      {/* EDIT MODAL FOR TRANSLATIONS */}
      {activeEditSection && activeEditSection.type === "translations" && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-fade-in-up flex flex-col max-h-[85vh]">
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-850">
              <div>
                <h3 className="font-heading text-lg font-extrabold text-slate-800 dark:text-white">
                  Edit Bagian: {getSectionTitleReadable(activeEditSection.section)}
                </h3>
                <p className="text-xs text-slate-450 mt-0.5">Ubah teks di bawah ini dan simpan ke server</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveEditSection(null)}
                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-850 hover:bg-slate-300 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold transition text-xs"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleTranslationSubmit} className="flex-1 flex flex-col min-h-0">
              <div className="p-6 flex-1 overflow-y-auto">
                {renderFormFields()}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-slate-150 dark:border-slate-800 flex justify-end gap-3 bg-slate-50 dark:bg-slate-850">
                <button
                  type="button"
                  onClick={() => setActiveEditSection(null)}
                  className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs hover:bg-slate-200 hover:scale-105 active:scale-95 transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs hover:bg-emerald-700 hover:scale-105 active:scale-95 transition disabled:opacity-50 flex items-center gap-1.5 shadow shadow-emerald-500/20 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <span>✓ Simpan Perubahan</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT MODAL FOR UMKM PRODUCT (ADD/EDIT) */}
      {activeEditSection && (activeEditSection.type === "umkm-edit" || activeEditSection.type === "umkm-add") && editProduct && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-fade-in-up flex flex-col max-h-[85vh]">
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-850">
              <div>
                <h3 className="font-heading text-lg font-extrabold text-slate-800 dark:text-white">
                  {activeEditSection.type === "umkm-add" ? "Tambah Produk UMKM Baru" : "Edit Produk UMKM"}
                </h3>
                <p className="text-xs text-slate-450 mt-0.5">Kelola detail produk dan nomor pemesanan WA</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveEditSection(null)}
                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-850 hover:bg-slate-300 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold transition text-xs"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleProductSubmit} className="flex-1 flex flex-col min-h-0">
              <div className="p-6 flex-1 overflow-y-auto space-y-4">
                
                {/* Product Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Nama Produk</label>
                  <input
                    type="text"
                    required
                    value={editProduct.name}
                    onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                    className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Category */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Kategori</label>
                    <select
                      value={editProduct.category}
                      onChange={(e) => {
                        const cat = e.target.value;
                        const labels = {
                          makanan: "🍟 Makanan & Camilan",
                          minuman: "☕ Jamu & Minuman",
                          kerajinan: "🧺 Kerajinan Tangan",
                          "hasil-bumi": "🌾 Hasil Bumi",
                        };
                        setEditProduct({
                          ...editProduct,
                          category: cat,
                          categoryLabel: labels[cat] || "🍟 Makanan & Camilan",
                        });
                      }}
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                    >
                      <option value="makanan">🍟 Makanan & Camilan</option>
                      <option value="minuman">☕ Jamu & Minuman</option>
                      <option value="kerajinan">🧺 Kerajinan Tangan</option>
                      <option value="hasil-bumi">🌾 Hasil Bumi</option>
                    </select>
                  </div>

                  {/* Badge */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Label Status / Badge</label>
                    <input
                      type="text"
                      placeholder="e.g. Produk Baru ✨"
                      value={editProduct.badge}
                      onChange={(e) => setEditProduct({ ...editProduct, badge: e.target.value })}
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Seller / Pemilik */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Pemilik / Penjual</label>
                    <input
                      type="text"
                      required
                      value={editProduct.seller}
                      onChange={(e) => setEditProduct({ ...editProduct, seller: e.target.value })}
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                    />
                  </div>

                  {/* Phone (WhatsApp) */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">No. WhatsApp (Gunakan 62)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 6285223344"
                      value={editProduct.phone}
                      onChange={(e) => setEditProduct({ ...editProduct, phone: e.target.value })}
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Price */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Harga Angka</label>
                    <input
                      type="number"
                      required
                      value={editProduct.price}
                      onChange={(e) => setEditProduct({ ...editProduct, price: parseInt(e.target.value) || 0 })}
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                    />
                  </div>

                  {/* Price Label */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Keterangan Harga (Bilingual/Teks)</label>
                    <input
                      type="text"
                      placeholder="e.g. Rp 15.000 / bungkus"
                      required
                      value={editProduct.priceLabel}
                      onChange={(e) => setEditProduct({ ...editProduct, priceLabel: e.target.value })}
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Deskripsi Produk</label>
                  <textarea
                    required
                    value={editProduct.desc}
                    onChange={(e) => setEditProduct({ ...editProduct, desc: e.target.value })}
                    className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    rows={3}
                  />
                </div>

                {/* Image Upload / URL */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl space-y-3">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Unggah Foto Produk</span>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-20 h-20 bg-slate-200 dark:bg-slate-950 rounded-xl border border-slate-300 dark:border-slate-700 overflow-hidden shrink-0 flex items-center justify-center">
                      {editProduct.image ? (
                        <img src={editProduct.image} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xl">🍟</span>
                      )}
                    </div>
                    
                    <div className="flex-1 w-full space-y-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploadingImage}
                        className="text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 file:cursor-pointer disabled:opacity-50"
                      />
                      <p className="text-[10px] text-slate-400">Atau masukkan URL foto secara manual:</p>
                      <input
                        type="text"
                        value={editProduct.image}
                        onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
                        className="w-full text-xs p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-slate-150 dark:border-slate-800 flex justify-end gap-3 bg-slate-50 dark:bg-slate-850">
                <button
                  type="button"
                  onClick={() => setActiveEditSection(null)}
                  className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs hover:bg-slate-200 hover:scale-105 active:scale-95 transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs hover:bg-emerald-700 hover:scale-105 active:scale-95 transition disabled:opacity-50 flex items-center gap-1.5 shadow shadow-emerald-500/20 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <span>✓ Simpan Produk</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
