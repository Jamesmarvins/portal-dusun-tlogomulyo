"use client";

import React, { useState, useEffect, useMemo } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(false);
  
  // Datasets
  const [translations, setTranslations] = useState(null);
  const [berita, setBerita] = useState([]);
  const [umkm, setUmkm] = useState([]);
  
  // Selected Section in Translations
  const [selectedTransSection, setSelectedTransSection] = useState("hero");

  // UMKM Editor State
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Berita Editor State
  const [editingNews, setEditingNews] = useState(null);
  const [isAddingNews, setIsAddingNews] = useState(false);

  // Status message
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 4000);
  };

  // Check auth on load
  useEffect(() => {
    const savedPassword = localStorage.getItem("tlogomoyo_admin_pass");
    if (savedPassword) {
      setPassword(savedPassword);
      verifyAndLoadData(savedPassword);
    }
  }, []);

  const verifyAndLoadData = async (passToVerify) => {
    setIsLoading(true);
    setLoginError("");
    try {
      const res = await fetch("/api/admin", {
        headers: {
          "x-admin-password": passToVerify,
        },
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setIsAuthenticated(true);
        localStorage.setItem("tlogomoyo_admin_pass", passToVerify);
        setTranslations(result.data.translations);
        setBerita(result.data.berita);
        setUmkm(result.data.umkm);
      } else {
        setLoginError(result.error || "Password salah.");
        setIsAuthenticated(false);
        localStorage.removeItem("tlogomoyo_admin_pass");
      }
    } catch (err) {
      setLoginError("Gagal terhubung ke API admin: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password) {
      setLoginError("Password wajib diisi.");
      return;
    }
    verifyAndLoadData(password);
  };

  const handleLogout = () => {
    localStorage.removeItem("tlogomoyo_admin_pass");
    setPassword("");
    setIsAuthenticated(false);
    showToast("Berhasil keluar dari panel admin.", "info");
  };

  // API Call to Save Data
  const saveData = async (type, updatedData) => {
    setIsLoading(true);
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
        showToast(`Data ${type} berhasil disimpan!`);
        // Refresh local state
        if (type === "translations") setTranslations(updatedData);
        if (type === "berita") setBerita(updatedData);
        if (type === "umkm") setUmkm(updatedData);
      } else {
        showToast(result.error || "Gagal menyimpan data.", "error");
      }
    } catch (err) {
      showToast("Kesalahan jaringan: " + err.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image upload to public/uploads
  const handleImageUpload = async (e, callback) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: {
          "x-admin-password": password,
        },
        body: formData,
      });
      const result = await res.json();
      if (res.ok && result.success) {
        showToast("Foto berhasil diunggah.");
        callback(result.url);
      } else {
        showToast(result.error || "Gagal mengunggah foto.", "error");
      }
    } catch (err) {
      showToast("Kesalahan mengunggah: " + err.message, "error");
    } finally {
      setUploadingImage(false);
    }
  };

  // Recursive translation updater
  const updateTranslationKey = (section, pathArr, lang, value) => {
    const newTranslations = { ...translations };
    
    let currentId = newTranslations.id[section];
    let currentEn = newTranslations.en[section];

    if (!currentId || !currentEn) return;

    // Travel to nesting level
    for (let i = 0; i < pathArr.length - 1; i++) {
      currentId = currentId[pathArr[i]];
      currentEn = currentEn[pathArr[i]];
    }

    const lastKey = pathArr[pathArr.length - 1];
    if (lang === "id") {
      currentId[lastKey] = value;
    } else {
      currentEn[lastKey] = value;
    }

    setTranslations(newTranslations);
  };

  // Custom Array item handlers for nested translation fields (e.g. stats, cards, etc.)
  const handleArrayFieldChange = (section, pathArr, index, field, lang, value) => {
    const newTranslations = { ...translations };
    let arrId = newTranslations.id[section];
    let arrEn = newTranslations.en[section];

    for (let i = 0; i < pathArr.length; i++) {
      arrId = arrId[pathArr[i]];
      arrEn = arrEn[pathArr[i]];
    }

    if (lang === "id") {
      arrId[index][field] = value;
    } else {
      arrEn[index][field] = value;
    }
    setTranslations(newTranslations);
  };

  const handleArrayAdd = (section, pathArr, templateObj) => {
    const newTranslations = { ...translations };
    let arrId = newTranslations.id[section];
    let arrEn = newTranslations.en[section];

    for (let i = 0; i < pathArr.length; i++) {
      arrId = arrId[pathArr[i]];
      arrEn = arrEn[pathArr[i]];
    }

    arrId.push(JSON.parse(JSON.stringify(templateObj)));
    arrEn.push(JSON.parse(JSON.stringify(templateObj)));
    setTranslations(newTranslations);
  };

  const handleArrayDelete = (section, pathArr, index) => {
    const newTranslations = { ...translations };
    let arrId = newTranslations.id[section];
    let arrEn = newTranslations.en[section];

    for (let i = 0; i < pathArr.length; i++) {
      arrId = arrId[pathArr[i]];
      arrEn = arrEn[pathArr[i]];
    }

    arrId.splice(index, 1);
    arrEn.splice(index, 1);
    setTranslations(newTranslations);
  };

  // UMKM CRUD Handlers
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const updatedUmkm = [...umkm];
    if (isAddingProduct) {
      updatedUmkm.push(editingProduct);
    } else {
      const idx = updatedUmkm.findIndex((p) => p.id === editingProduct.id);
      if (idx !== -1) updatedUmkm[idx] = editingProduct;
    }
    saveData("umkm", updatedUmkm);
    setEditingProduct(null);
    setIsAddingProduct(false);
  };

  const handleProductDelete = (productId) => {
    if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      const updatedUmkm = umkm.filter((p) => p.id !== productId);
      saveData("umkm", updatedUmkm);
    }
  };

  const handleProductEdit = (product) => {
    setEditingProduct({ ...product });
    setIsAddingProduct(false);
  };

  const handleProductCreate = () => {
    setEditingProduct({
      id: "produk-" + Date.now(),
      name: "",
      category: "makanan",
      categoryLabel: "🍟 Makanan & Camilan",
      price: 0,
      priceLabel: "",
      seller: "",
      phone: "6285",
      image: "/images/hero.png",
      desc: "",
      badge: "Produk Baru ✨",
    });
    setIsAddingProduct(true);
  };

  // Berita CRUD Handlers
  const handleNewsSubmit = (e) => {
    e.preventDefault();
    const updatedBerita = [...berita];
    if (isAddingNews) {
      updatedBerita.unshift(editingNews); // Add to top of list
    } else {
      const idx = updatedBerita.findIndex((n) => n.id === editingNews.id);
      if (idx !== -1) updatedBerita[idx] = editingNews;
    }
    saveData("berita", updatedBerita);
    setEditingNews(null);
    setIsAddingNews(false);
  };

  const handleNewsDelete = (newsId) => {
    if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      const updatedBerita = berita.filter((n) => n.id !== newsId);
      saveData("berita", updatedBerita);
    }
  };

  const handleNewsEdit = (article) => {
    setEditingNews({ ...article });
    setIsAddingNews(false);
  };

  const handleNewsCreate = () => {
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const d = new Date();
    const formattedDate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;

    setEditingNews({
      id: "berita-" + Date.now(),
      title: "",
      date: formattedDate,
      excerpt: "",
      content: "",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    });
    setIsAddingNews(true);
  };

  // Translation Section Options
  const translationSections = [
    { id: "hero", name: "🏠 Hero Utama (Beranda)" },
    { id: "sambutan", name: "👑 Sambutan Kasun" },
    { id: "weather", name: "🌤️ Cuaca Live Widget" },
    { id: "map", name: "🗺️ Peta Interaktif" },
    { id: "homeSections", name: "🌿 Seksi Beranda & Potensi" },
    { id: "profilContent", name: "📍 Profil - Deskripsi Umum" },
    { id: "profilFull", name: "📖 Profil - Geografi & Sejarah" },
    { id: "kknContent", name: "🎓 KKN - Ringkasan & DPL" },
    { id: "infoKknFull", name: "🎒 KKN - Detail Program & Anggota" },
    { id: "footer", name: "📞 Footer & Kontak" },
  ];

  // Helper to render nested object keys as inputs
  const renderTranslationsForm = (section) => {
    if (!translations || !translations.id[section]) return null;

    const idSec = translations.id[section];
    const enSec = translations.en[section];

    const keys = Object.keys(idSec);

    return (
      <div className="space-y-6">
        {keys.map((key) => {
          const valId = idSec[key];
          const valEn = enSec[key];

          // If the key is an array of objects (like cards, stats, anggota, etc.)
          if (Array.isArray(valId)) {
            return (
              <div key={key} className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-heading font-bold text-slate-800 dark:text-white capitalize">
                    Daftar {key} ({valId.length} Item)
                  </h4>
                  <button
                    type="button"
                    onClick={() => {
                      // Dynamically build a template based on the first item or defaults
                      const template = valId.length > 0 
                        ? Object.keys(valId[0]).reduce((acc, k) => {
                            acc[k] = typeof valId[0][k] === "object" ? (Array.isArray(valId[0][k]) ? [] : {}) : "";
                            return acc;
                          }, {})
                        : { title: "", desc: "" };
                      handleArrayAdd(section, [key], template);
                    }}
                    className="px-3 py-1.5 bg-primary-600 text-white rounded-xl text-xs font-bold hover:bg-primary-700 transition"
                  >
                    + Tambah Item
                  </button>
                </div>

                <div className="space-y-4">
                  {valId.map((item, idx) => {
                    const itemEn = valEn[idx] || {};
                    const itemKeys = Object.keys(item);

                    return (
                      <div key={idx} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm relative">
                        <button
                          type="button"
                          onClick={() => handleArrayDelete(section, [key], idx)}
                          className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xs font-bold"
                        >
                          Hapus [✕]
                        </button>
                        <p className="text-xs font-bold text-slate-400 mb-3">Item #{idx + 1}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Bahasa Indonesia */}
                          <div className="space-y-3">
                            <h5 className="text-xs font-bold text-emerald-600">Bahasa Indonesia</h5>
                            {itemKeys.map((subKey) => {
                              if (typeof item[subKey] === "object") return null; // Skip deeply nested arrays/objs in this simple loop
                              return (
                                <div key={subKey} className="space-y-1">
                                  <label className="text-xs font-semibold text-slate-500 uppercase">{subKey}</label>
                                  {subKey === "desc" || subKey === "deskripsi" || subKey === "content" ? (
                                    <textarea
                                      value={item[subKey] || ""}
                                      onChange={(e) => handleArrayFieldChange(section, [key], idx, subKey, "id", e.target.value)}
                                      className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-900 border rounded-lg focus:outline-none"
                                      rows={2}
                                    />
                                  ) : (
                                    <input
                                      type="text"
                                      value={item[subKey] || ""}
                                      onChange={(e) => handleArrayFieldChange(section, [key], idx, subKey, "id", e.target.value)}
                                      className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-900 border rounded-lg focus:outline-none"
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* English */}
                          <div className="space-y-3">
                            <h5 className="text-xs font-bold text-amber-600">English</h5>
                            {itemKeys.map((subKey) => {
                              if (typeof item[subKey] === "object") return null;
                              return (
                                <div key={subKey} className="space-y-1">
                                  <label className="text-xs font-semibold text-slate-500 uppercase">{subKey}</label>
                                  {subKey === "desc" || subKey === "deskripsi" || subKey === "content" ? (
                                    <textarea
                                      value={itemEn[subKey] || ""}
                                      onChange={(e) => handleArrayFieldChange(section, [key], idx, subKey, "en", e.target.value)}
                                      className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-900 border rounded-lg focus:outline-none"
                                      rows={2}
                                    />
                                  ) : (
                                    <input
                                      type="text"
                                      value={itemEn[subKey] || ""}
                                      onChange={(e) => handleArrayFieldChange(section, [key], idx, subKey, "en", e.target.value)}
                                      className="w-full text-xs p-2 bg-slate-50 dark:bg-slate-900 border rounded-lg focus:outline-none"
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          // If the key is an object (nested keys like dpl, apl, etc.)
          if (typeof valId === "object" && valId !== null) {
            const subKeys = Object.keys(valId);
            return (
              <div key={key} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-heading font-bold text-slate-800 dark:text-white capitalize mb-4">
                  {key}
                </h4>
                <div className="space-y-4">
                  {subKeys.map((subKey) => (
                    <div key={subKey} className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-slate-100 dark:border-slate-700 pb-3 last:border-0 last:pb-0">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                          {key} &gt; {subKey} [ID]
                        </label>
                        <input
                          type="text"
                          value={valId[subKey] || ""}
                          onChange={(e) => updateTranslationKey(section, [key, subKey], "id", e.target.value)}
                          className="w-full text-sm p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                          {key} &gt; {subKey} [EN]
                        </label>
                        <input
                          type="text"
                          value={valEn[subKey] || ""}
                          onChange={(e) => updateTranslationKey(section, [key, subKey], "en", e.target.value)}
                          className="w-full text-sm p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // Default simple key (string value)
          const isTextArea = valId.length > 60;

          return (
            <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  {key} [ID]
                </label>
                {isTextArea ? (
                  <textarea
                    value={valId}
                    onChange={(e) => updateTranslationKey(section, [key], "id", e.target.value)}
                    className="w-full text-sm p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    rows={3}
                  />
                ) : (
                  <input
                    type="text"
                    value={valId}
                    onChange={(e) => updateTranslationKey(section, [key], "id", e.target.value)}
                    className="w-full text-sm p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  {key} [EN]
                </label>
                {isTextArea ? (
                  <textarea
                    value={valEn || ""}
                    onChange={(e) => updateTranslationKey(section, [key], "en", e.target.value)}
                    className="w-full text-sm p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    rows={3}
                  />
                ) : (
                  <input
                    type="text"
                    value={valEn || ""}
                    onChange={(e) => updateTranslationKey(section, [key], "en", e.target.value)}
                    className="w-full text-sm p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // If not authenticated, show login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h1 className="font-heading text-2xl font-extrabold text-white">Dashboard Admin</h1>
            <p className="text-sm text-slate-400 mt-1">Portal Informasi Dusun Tlogomoyo</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Kata Sandi Admin</label>
              <input
                type="password"
                placeholder="Masukkan kata sandi..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 text-white rounded-2xl placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
            </div>

            {loginError && (
              <div className="p-3 bg-red-950/50 border border-red-900 rounded-xl text-xs text-red-400 text-center font-bold">
                ⚠️ {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:from-primary-700 hover:to-emerald-700 transition duration-300 disabled:opacity-50"
            >
              {isLoading ? "Memverifikasi..." : "Masuk"}
            </button>

            <div className="text-center pt-2">
              <a href="/" className="text-xs font-semibold text-slate-500 hover:text-slate-400 transition">
                ← Kembali ke Portal Utama
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Toast Component
  const toastColors = {
    success: "bg-emerald-550 border-emerald-500 text-white",
    error: "bg-red-950 border-red-800 text-red-200",
    info: "bg-blue-950 border-blue-800 text-blue-200",
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col font-sans">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed bottom-5 right-5 z-55 px-5 py-3.5 rounded-2xl border shadow-xl flex items-center gap-3 transition-all duration-300 animate-slide-in-up ${toastColors[toast.type] || toastColors.success}`}>
          <span className="text-lg">
            {toast.type === "success" ? "✓" : toast.type === "error" ? "⚠️" : "ℹ"}
          </span>
          <span className="text-xs font-bold">{toast.message}</span>
        </div>
      )}

      {/* Admin Navbar */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-lg flex items-center justify-center font-bold text-white shadow">
            T
          </div>
          <div>
            <h2 className="font-heading text-sm font-extrabold tracking-wide uppercase">Tlogomoyo</h2>
            <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest mt-0.5">Admin Panel</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-bold text-slate-350 hover:bg-slate-800 hover:text-white transition"
          >
            Situs Utama ↗
          </a>
          <button
            onClick={handleLogout}
            className="px-3.5 py-1.5 bg-red-650/80 hover:bg-red-600 text-white text-xs font-bold rounded-xl transition shadow"
          >
            Keluar
          </button>
        </div>
      </header>

      {/* Main Admin layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-6">
        
        {/* Left Sidebar Menu */}
        <aside className="w-full md:w-64 shrink-0 space-y-2">
          {[
            { id: "dashboard", label: "🏠 Beranda Admin" },
            { id: "translations", label: "📝 Edit Teks Website" },
            { id: "umkm", label: "🛍️ Katalog UMKM" },
            { id: "berita", label: "📰 Berita Dusun" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setEditingProduct(null);
                setEditingNews(null);
              }}
              className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition duration-200 cursor-pointer flex items-center justify-between ${
                activeTab === tab.id
                  ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80"
              }`}
            >
              <span>{tab.label}</span>
              {activeTab === tab.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          ))}
        </aside>

        {/* Right Main Content Panel */}
        <main className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 shadow-sm min-w-0">
          {isLoading && (
            <div className="absolute inset-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xs flex items-center justify-center z-40 rounded-3xl">
              <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* TAB 1: DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-700 pb-4">
                <h1 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">Selamat Datang di Portal Admin!</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Kelola dan perbarui informasi resmi Dusun Tlogomoyo secara mandiri.</p>
              </div>

              {/* Statistics cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-slate-850 dark:to-slate-800 rounded-2xl border border-emerald-100 dark:border-slate-700 text-center">
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Produk UMKM</p>
                  <p className="text-4xl font-extrabold text-emerald-800 dark:text-white mt-1">{umkm.length}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-850 dark:to-slate-800 rounded-2xl border border-blue-100 dark:border-slate-700 text-center">
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Artikel Berita</p>
                  <p className="text-4xl font-extrabold text-blue-800 dark:text-white mt-1">{berita.length}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-slate-850 dark:to-slate-800 rounded-2xl border border-amber-100 dark:border-slate-700 text-center">
                  <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">Sandi Aktif</p>
                  <p className="text-xs font-extrabold text-amber-800 dark:text-white mt-4 bg-white/50 dark:bg-slate-900/50 py-1.5 px-3.5 rounded-xl border border-amber-250 truncate">tlogomoyo2026</p>
                </div>
              </div>

              <div className="bg-slate-55 p-5 rounded-2xl border border-slate-200 dark:bg-slate-900/40 dark:border-slate-700 space-y-3">
                <h3 className="font-heading font-bold text-slate-800 dark:text-white">Petunjuk Ringkas Penggunaan:</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-400 text-justify">
                  <li><strong>Edit Teks Website</strong>: Digunakan untuk memodifikasi teks-teks statis seperti Judul Hero, Kutipan Sambutan Kepala Dusun, Penjelasan Geografi, atau data anggota KKN. Teks disimpan bilingual (Indonesia dan Inggris).</li>
                  <li><strong>Katalog UMKM</strong>: Tambah produk baru, edit nama produk, harga, foto, deskripsi, dan nomor telepon WhatsApp pemilik UMKM.</li>
                  <li><strong>Berita Dusun</strong>: Buat berita/kegiatan terbaru di dusun. Anda dapat menyertakan foto dan deskripsi kegiatan.</li>
                  <li><strong>Penyimpanan</strong>: Setelah mengedit data, pastikan untuk menekan tombol <strong>Simpan Perubahan</strong> di bagian bawah form untuk menulis data secara permanen ke file server.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: TRANSLATIONS EDITOR */}
          {activeTab === "translations" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700 pb-4">
                <div>
                  <h1 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">Edit Teks Website</h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Pilih bagian halaman yang ingin diperbarui teksnya.</p>
                </div>
                <button
                  onClick={() => saveData("translations", translations)}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition shadow shadow-emerald-500/20 cursor-pointer self-start sm:self-auto"
                >
                  ✓ Simpan Perubahan
                </button>
              </div>

              {/* Section Selector Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Pilih Bagian Halaman:</label>
                <select
                  value={selectedTransSection}
                  onChange={(e) => setSelectedTransSection(e.target.value)}
                  className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {translationSections.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      {sec.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Translation fields form */}
              <div className="mt-4">
                {renderTranslationsForm(selectedTransSection)}
              </div>

              {/* Save Button Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end">
                <button
                  onClick={() => saveData("translations", translations)}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition shadow shadow-emerald-500/20 cursor-pointer"
                >
                  ✓ Simpan Seluruh Perubahan Teks
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: UMKM CATALOG LIST & FORM */}
          {activeTab === "umkm" && (
            <div className="space-y-6">
              {/* Product Edit/Add Form */}
              {editingProduct ? (
                <form onSubmit={handleProductSubmit} className="space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-700 pb-4 flex justify-between items-center">
                    <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                      {isAddingProduct ? "Tambah Produk UMKM" : "Edit Produk UMKM"}
                    </h2>
                    <button
                      type="button"
                      onClick={() => setEditingProduct(null)}
                      className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-655 text-slate-700 dark:text-white text-xs font-bold rounded-xl transition"
                    >
                      Batal
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Nama Produk / Usaha</label>
                        <input
                          type="text"
                          required
                          value={editingProduct.name}
                          onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm font-semibold"
                        />
                      </div>

                      {/* Category */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Kategori</label>
                        <select
                          value={editingProduct.category}
                          onChange={(e) => {
                            const catLabels = {
                              makanan: "🍟 Makanan & Camilan",
                              minuman: "☕ Jamu & Minuman",
                              kerajinan: "🧺 Kerajinan Tangan",
                              "hasil-bumi": "🌾 Hasil Bumi",
                            };
                            setEditingProduct({
                              ...editingProduct,
                              category: e.target.value,
                              categoryLabel: catLabels[e.target.value] || "💡 Lainnya",
                            });
                          }}
                          className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                        >
                          <option value="makanan">🍟 Makanan & Camilan</option>
                          <option value="minuman">☕ Jamu & Minuman</option>
                          <option value="kerajinan">🧺 Kerajinan Tangan</option>
                          <option value="hasil-bumi">🌾 Hasil Bumi</option>
                        </select>
                      </div>

                      {/* Price */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-400 uppercase">Harga (Rp)</label>
                          <input
                            type="number"
                            required
                            value={editingProduct.price}
                            onChange={(e) => setEditingProduct({ ...editingProduct, price: parseInt(e.target.value) || 0 })}
                            className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm font-semibold"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-400 uppercase">Label Harga</label>
                          <input
                            type="text"
                            placeholder="Contoh: Rp 15.000 / bungkus"
                            value={editingProduct.priceLabel}
                            onChange={(e) => setEditingProduct({ ...editingProduct, priceLabel: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          />
                        </div>
                      </div>

                      {/* Seller & WhatsApp */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-400 uppercase">Nama Penjual</label>
                          <input
                            type="text"
                            required
                            value={editingProduct.seller}
                            onChange={(e) => setEditingProduct({ ...editingProduct, seller: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-400 uppercase">Nomor WA (Awali 62)</label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: 62852593000"
                            value={editingProduct.phone}
                            onChange={(e) => setEditingProduct({ ...editingProduct, phone: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Image Upload */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Foto Produk</label>
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            required
                            value={editingProduct.image}
                            onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                            className="flex-1 p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl text-xs font-mono"
                          />
                          <label className="px-3.5 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-655 text-xs font-bold rounded-xl cursor-pointer transition shrink-0">
                            {uploadingImage ? "Mengunggah..." : "Pilih File"}
                            <input
                              type="file"
                              accept="image/*"
                              disabled={uploadingImage}
                              onChange={(e) => handleImageUpload(e, (url) => setEditingProduct({ ...editingProduct, image: url }))}
                              className="hidden"
                            />
                          </label>
                        </div>
                        {editingProduct.image && (
                          <div className="mt-2 h-36 w-36 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-100">
                            <img src={editingProduct.image} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Deskripsi Produk</label>
                        <textarea
                          required
                          value={editingProduct.desc}
                          onChange={(e) => setEditingProduct({ ...editingProduct, desc: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          rows={4}
                        />
                      </div>

                      {/* Badge / Label */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Badge (Label Kecil)</label>
                        <input
                          type="text"
                          placeholder="Contoh: Terlaris 🔥"
                          value={editingProduct.badge}
                          onChange={(e) => setEditingProduct({ ...editingProduct, badge: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm transition shadow shadow-primary-500/20"
                    >
                      Simpan Produk
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  {/* UMKM Header */}
                  <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                    <div>
                      <h1 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">Katalog UMKM</h1>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Kelola katalog produk olahan makanan, minuman, kerajinan warga.</p>
                    </div>
                    <button
                      onClick={handleProductCreate}
                      className="px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow shadow-primary-500/20 cursor-pointer"
                    >
                      + Tambah Produk
                    </button>
                  </div>

                  {/* UMKM List Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm text-slate-500 dark:text-slate-400">
                      <thead className="bg-slate-50 dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-350 uppercase">
                        <tr>
                          <th className="px-6 py-3">Produk</th>
                          <th className="px-6 py-3">Kategori</th>
                          <th className="px-6 py-3">Harga</th>
                          <th className="px-6 py-3">Penjual & Kontak</th>
                          <th className="px-6 py-3 text-right">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {umkm.map((product) => (
                          <tr key={product.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition">
                            <td className="px-6 py-4 flex items-center gap-3">
                              <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <p className="font-bold text-slate-900 dark:text-white">{product.name}</p>
                                <span className="inline-block px-2 py-0.5 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-bold rounded-md mt-0.5">
                                  {product.badge}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-slate-750 dark:text-slate-200">{product.categoryLabel}</td>
                            <td className="px-6 py-4">
                              <p className="font-bold text-slate-900 dark:text-white">Rp {product.price.toLocaleString("id-ID")}</p>
                              <p className="text-xs text-slate-400">{product.priceLabel}</p>
                            </td>
                            <td className="px-6 py-4">
                              <p className="font-bold text-slate-800 dark:text-slate-250">{product.seller}</p>
                              <p className="text-xs text-emerald-600 font-semibold">WA: +{product.phone}</p>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="inline-flex gap-2">
                                <button
                                  type="button"
                                  onClick={() => handleProductEdit(product)}
                                  className="px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-950 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-lg transition"
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleProductDelete(product.id)}
                                  className="px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-950 dark:hover:bg-red-900 text-red-700 dark:text-red-300 text-xs font-bold rounded-lg transition"
                                >
                                  Hapus
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: BERITA LIST & FORM */}
          {activeTab === "berita" && (
            <div className="space-y-6">
              {editingNews ? (
                <form onSubmit={handleNewsSubmit} className="space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-700 pb-4 flex justify-between items-center">
                    <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                      {isAddingNews ? "Tulis Berita Baru" : "Edit Berita"}
                    </h2>
                    <button
                      type="button"
                      onClick={() => setEditingNews(null)}
                      className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-655 text-slate-700 dark:text-white text-xs font-bold rounded-xl transition"
                    >
                      Batal
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {/* Title */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Judul Berita</label>
                        <input
                          type="text"
                          required
                          value={editingNews.title}
                          onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm font-semibold"
                        />
                      </div>

                      {/* Date */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Tanggal Publikasi</label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: 17 Juli 2026"
                          value={editingNews.date}
                          onChange={(e) => setEditingNews({ ...editingNews, date: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                        />
                      </div>

                      {/* Excerpt */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Kutipan Singkat (Excerpt)</label>
                        <textarea
                          required
                          value={editingNews.excerpt}
                          onChange={(e) => setEditingNews({ ...editingNews, excerpt: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Image Upload */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Foto Sampul Berita</label>
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            required
                            value={editingNews.image}
                            onChange={(e) => setEditingNews({ ...editingNews, image: e.target.value })}
                            className="flex-1 p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl text-xs font-mono"
                          />
                          <label className="px-3.5 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-655 text-xs font-bold rounded-xl cursor-pointer transition shrink-0">
                            {uploadingImage ? "Mengunggah..." : "Pilih File"}
                            <input
                              type="file"
                              accept="image/*"
                              disabled={uploadingImage}
                              onChange={(e) => handleImageUpload(e, (url) => setEditingNews({ ...editingNews, image: url }))}
                              className="hidden"
                            />
                          </label>
                        </div>
                        {editingNews.image && (
                          <div className="mt-2 h-36 w-36 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-100">
                            <img src={editingNews.image} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase">Isi Berita Lengkap</label>
                        <textarea
                          required
                          value={editingNews.content}
                          onChange={(e) => setEditingNews({ ...editingNews, content: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm font-mono"
                          rows={6}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm transition shadow shadow-primary-500/20"
                    >
                      Simpan Berita
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  {/* Berita Header */}
                  <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-4">
                    <div>
                      <h1 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">Berita & Kegiatan Dusun</h1>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Kelola artikel kegiatan warga Dusun Tlogomoyo dan rilis berita KKN.</p>
                    </div>
                    <button
                      onClick={handleNewsCreate}
                      className="px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow shadow-primary-500/20 cursor-pointer"
                    >
                      + Tulis Berita
                    </button>
                  </div>

                  {/* Berita Cards/List Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {berita.map((article) => (
                      <div key={article.id} className="p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex gap-4 hover:shadow-md transition">
                        <div className="w-24 h-24 rounded-xl overflow-hidden border bg-slate-100 shrink-0">
                          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-slate-400">{article.date}</span>
                            <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug line-clamp-2 mt-0.5">
                              {article.title}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                              {article.excerpt}
                            </p>
                          </div>
                          <div className="flex justify-end gap-2 mt-3">
                            <button
                              type="button"
                              onClick={() => handleNewsEdit(article)}
                              className="px-3 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-950 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-300 text-[10px] font-bold rounded-lg transition"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => handleNewsDelete(article.id)}
                              className="px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-950 dark:hover:bg-red-900 text-red-700 dark:text-red-300 text-[10px] font-bold rounded-lg transition"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
