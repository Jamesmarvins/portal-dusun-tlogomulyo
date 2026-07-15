"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const katalogProduk = [
  {
    id: "wayang-yono",
    name: "Kerajinan Wayang Pak Yono",
    category: "kerajinan",
    categoryLabel: "🧺 Kerajinan Tangan",
    price: 150000,
    priceLabel: "Harga menyesuaikan ukuran & kerumitan",
    seller: "Pak Yono (RT 02)",
    phone: "6285259300843",
    image: "/images/umkm-wayang.jpg",
    desc: "Kerajinan wayang kulit tatah tradisional buatan tangan Pak Yono yang bernilai seni tinggi.",
    badge: "Karya Seni 🎨"
  },
  {
    id: "cemilan-ismi",
    name: "Aneka Cemilan Bu Ismi",
    category: "makanan",
    categoryLabel: "🍟 Makanan & Camilan",
    price: 15000,
    priceLabel: "Mulai Rp 15.000 / kemasan",
    seller: "Bu Ismi (RT 01)",
    phone: "6285259300843",
    image: "/images/umkm-cemilan.jpg",
    desc: "Aneka camilan kering tradisional seperti keripik, kue bawang, dan pangsit renyah olahan Bu Ismi.",
    badge: "Terlaris 🔥"
  },
  {
    id: "bawang-yani",
    name: "Bawang Goreng Bu Yani",
    category: "makanan",
    categoryLabel: "🍟 Makanan & Camilan",
    price: 18000,
    priceLabel: "Rp 18.000 / pouch",
    seller: "Bu Yani (RT 02)",
    phone: "6285259300843",
    image: "/images/umkm-bawang.jpg",
    desc: "Bawang goreng merah gurih renyah tanpa bahan pengawet produksi rumahan Bu Yani.",
    badge: "Renyah & Gurih 💨"
  },
  {
    id: "tempe-yanti",
    name: "Tempe Daun Bu Yanti",
    category: "makanan",
    categoryLabel: "🍟 Makanan & Camilan",
    price: 5000,
    priceLabel: "Rp 5.000 / ikat",
    seller: "Bu Yanti (RT 01)",
    phone: "6285259300843",
    image: "/images/umkm-tempe.jpg",
    desc: "Tempe tradisional bungkus daun jati dan pisang segar buatan Bu Yanti dengan ragi alami.",
    badge: "Tradisional 🍃"
  },
  {
    id: "kerupuk-suharmi",
    name: "Kerupuk Kering Bu Suharmi",
    category: "makanan",
    categoryLabel: "🍟 Makanan & Camilan",
    price: 12000,
    priceLabel: "Rp 12.000 / pack",
    seller: "Bu Suharmi (RT 01)",
    phone: "6285259300843",
    image: "/images/umkm-kerupuk.jpg",
    desc: "Kerupuk kering mentah siap goreng produksi Bu Suharmi yang mekar renyah sempurna.",
    badge: "Ekstra Mekar ✨"
  },
  {
    id: "sale-suharmi",
    name: "Sale Pisang Goreng Bu Suharmi",
    category: "makanan",
    categoryLabel: "🍟 Makanan & Camilan",
    price: 20000,
    priceLabel: "Rp 20.000 / pack",
    seller: "Bu Suharmi (RT 01)",
    phone: "6285259300843",
    image: "/images/umkm-sale.jpg",
    desc: "Camilan sale pisang goreng manis gurih khas Pacitan buatan Bu Suharmi.",
    badge: "Khas Pacitan 🍌"
  },
  {
    id: "roti-maya",
    name: "Roti Manis Bu Maya",
    category: "makanan",
    categoryLabel: "🍟 Makanan & Camilan",
    price: 10000,
    priceLabel: "Mulai Rp 10.000 / pack",
    seller: "Bu Maya (RT 02)",
    phone: "6285259300843",
    image: "/images/umkm-roti.png",
    desc: "Aneka roti manis isi tradisional yang lembut dan dipanggang segar setiap hari oleh Bu Maya.",
    badge: "Segar dari Oven 🍞"
  }
];

const kategoriList = [
  { id: "semua", label: "🌟 Semua Produk" },
  { id: "makanan", label: "🍟 Makanan & Camilan" },
  { id: "minuman", label: "☕ Jamu & Minuman" },
  { id: "kerajinan", label: "🧺 Kerajinan Tangan" },
  { id: "hasil-bumi", label: "🌾 Hasil Bumi" },
];

export default function UmkmPage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return katalogProduk.filter((item) => {
      const matchCategory = selectedCategory === "semua" || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.seller.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-24 selection:bg-primary-200 selection:text-primary-900">
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            {t?.umkm?.badge || "E-Katalog Digital & Pemberdayaan Warga"}
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            {t?.umkm?.title || "Katalog Produk UMKM Dusun Tlogomoyo"}
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed">
            {t?.umkm?.subtitle || "Dukung perekonomian lokal dengan membeli langsung produk olahan pangan organik, jamu tradisional, dan kerajinan tangan dari warga Dusun Tlogomoyo, Pacitan."}
          </p>
        </div>
      </section>

      {/* ===== FILTER & SEARCH SECTION ===== */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-4 px-4 sm:px-6 lg:px-8 shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {kategoriList.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 scale-105"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600"
                  }`}
                >
                  {t?.umkm?.cats?.[cat.id] || cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t?.umkm?.searchPlaceholder || "Cari camilan, jamu, atau penjual..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ===== CATALOG GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="w-16 h-16 bg-primary-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
              {t?.umkm?.searchEmpty || "Produk Tidak Ditemukan"}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
              {t?.umkm?.searchEmptyAdvice || "Maaf, tidak ada produk yang cocok. Coba gunakan kata kunci lain atau pilih kategori Semua."}
            </p>
            <button
              onClick={() => { setSelectedCategory("semua"); setSearchQuery(""); }}
              className="mt-6 px-6 py-2.5 bg-primary-600 text-white font-semibold rounded-xl text-sm shadow-md hover:bg-primary-700 transition-colors"
            >
              {t?.umkm?.viewAllBtn || "Lihat Semua Produk"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700 shadow-[var(--shadow-card)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image & Badges */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/10 shadow-sm">
                    {t?.umkm?.cats?.[product.category] || product.categoryLabel}
                  </span>

                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-[11px] px-3 py-1.5 rounded-xl shadow-md">
                    {t?.umkmProducts?.[product.id]?.badge || product.badge}
                  </span>

                  {/* View Details overlay on image bottom */}
                  <div className="absolute bottom-4 right-4 text-white">
                    <span className="text-xs bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl font-bold border border-white/10 shadow-sm flex items-center gap-1.5">
                      {language === "en" ? "View Details 👁️" : "Lihat Detail 👁️"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      <span>🏪</span>
                      <span className="truncate">{product.seller}</span>
                    </div>
                    <h3 
                      onClick={() => setSelectedProduct(product)}
                      className="font-heading text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {t?.umkmProducts?.[product.id]?.name || product.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {t?.umkmProducts?.[product.id]?.desc || product.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-primary-600 dark:hover:bg-primary-600 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>👁️</span>
                      <span>{language === "en" ? "View Details" : "Lihat Detail"}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ===== PRODUCT DETAIL MODAL ===== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 animate-fade-in-up">
            {/* Close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="h-64 sm:h-80 w-full relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              <span className="absolute bottom-4 left-6 bg-amber-500 text-slate-950 font-black px-4 py-1.5 rounded-xl text-sm shadow-lg">
                {t?.umkmProducts?.[selectedProduct.id]?.badge || selectedProduct.badge}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs font-bold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wider">
                <span>{t?.umkm?.cats?.[selectedProduct.category] || selectedProduct.categoryLabel}</span>
                <span>🏪 {selectedProduct.seller}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                {t?.umkmProducts?.[selectedProduct.id]?.name || selectedProduct.name}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                {t?.umkmProducts?.[selectedProduct.id]?.desc || selectedProduct.desc}
              </p>

              <div className="flex items-center justify-end border-t border-slate-100 dark:border-slate-800 pt-6">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl transition-colors cursor-pointer text-center text-sm"
                >
                  {language === "en" ? "Close" : "Tutup"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
