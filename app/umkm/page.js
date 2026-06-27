"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const katalogProduk = [
  {
    id: "keripik-singkong",
    name: "Keripik Singkong Renyah Bu Siti",
    category: "makanan",
    categoryLabel: "🍟 Makanan & Camilan",
    price: 15000,
    priceLabel: "Rp 15.000 / kemasan 250gr",
    seller: "UMKM Bu Siti (RT 01 / RW 02)",
    phone: "6281234567890",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=800&auto=format&fit=crop",
    desc: "Keripik singkong pilihan dari hasil panen kebun Tlogomoyo diiris tipis dan digoreng renyah dengan bumbu bawang putih alami. Bebas pengawet dan renyah tahan lama.",
    badge: "Terlaris 🔥"
  },
  {
    id: "gula-aren",
    name: "Gula Aren Asli Mbah Kromo",
    category: "hasil-bumi",
    categoryLabel: "🌾 Hasil Bumi & Pangan",
    price: 25000,
    priceLabel: "Rp 25.000 / kg",
    seller: "Kelompok Tani Nira Lestari (RT 03)",
    phone: "6281234567890",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?q=80&w=800&auto=format&fit=crop",
    desc: "Diolah secara tradisional menggunakan tungku kayu bakar dari nira aren murni pegunungan Tlogomoyo. Aroma harum khas, manis legit, cocok untuk kopi dan jajanan pasar.",
    badge: "100% Organik 🌱"
  },
  {
    id: "jamu-empon",
    name: "Jamu Empon-Empon Instan",
    category: "minuman",
    categoryLabel: "☕ Jamu & Minuman Herbal",
    price: 18000,
    priceLabel: "Rp 18.000 / pouch 200gr",
    seller: "Kelompok Asman Toga Ibu PKK",
    phone: "6281234567890",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop",
    desc: "Serbuk minuman herbal siap seduh berkhasiat tinggi. Terbuat dari rimpang jahe merah, temulawak, kunyit, dan serai organik yang ditanam di pekarangan warga dusun.",
    badge: "Pilihan Sehat 💪"
  },
  {
    id: "besek-bambu",
    name: "Besek Anyaman Bambu Alami",
    category: "kerajinan",
    categoryLabel: "🧺 Kerajinan Tangan",
    price: 12000,
    priceLabel: "Rp 12.000 / pasang",
    seller: "Pengrajin Bambu Pak Tarjo (RT 02)",
    phone: "6281234567890",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop",
    desc: "Anyaman bambu halus dan presisi dikerjakan dengan tangan terampil. Sangat cocok untuk wadah hantaran ramah lingkungan, suvenir acara, atau penyimpanan bumbu dapur.",
    badge: "Eco-Friendly ♻️"
  },
  {
    id: "tiwul-instan",
    name: "Tiwul Instan Cap Gunung Sewu",
    category: "makanan",
    categoryLabel: "🍟 Makanan & Camilan",
    price: 20000,
    priceLabel: "Rp 20.000 / box 500gr",
    seller: "Kelompok Wanita Tani (KWT)",
    phone: "6281234567890",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    desc: "Makanan pokok alternatif rendah glikemik berbahan dasar gaplek singkong berkualitas tinggi. Dikemas higienis, sangat mudah dimasak hanya dalam 10 menit.",
    badge: "Khas Pacitan 🏖️"
  },
  {
    id: "madu-hutan",
    name: "Madu Hutan Liar Gunung Sewu",
    category: "minuman",
    categoryLabel: "☕ Jamu & Minuman Herbal",
    price: 65000,
    priceLabel: "Rp 65.000 / botol 350ml",
    seller: "Kelompok Tani Hutan Wana Lestari",
    phone: "6281234567890",
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?q=80&w=800&auto=format&fit=crop",
    desc: "Madu murni yang dipanen langsung dari sarang lebah liar di perbukitan hutan Tlogomoyo. Kaya antioksidan alami dan enzim baik untuk stamina tubuh.",
    badge: "Panen Liar 🐝"
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
  const { language } = useLanguage();
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

  const handleOrderWhatsApp = (product) => {
    const text = `Halo ${product.seller}, saya melihat katalog di *Portal Informasi Dusun Tlogomoyo*. Saya tertarik memesan produk:\n\n*${product.name}* (${product.priceLabel})\n\nApakah stok saat ini masih tersedia? Terima kasih.`;
    const url = `https://wa.me/${product.phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
            E-Katalog Digital & Pemberdayaan Warga
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Katalog Produk UMKM <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200">
              Dusun Tlogomoyo
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-200 leading-relaxed">
            Dukung perekonomian lokal dengan membeli langsung produk olahan pangan organik, jamu tradisional, dan kerajinan tangan dari warga Dusun Tlogomoyo, Pacitan.
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
                  {cat.label}
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
              placeholder="Cari camilan, jamu, atau penjual..."
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
              Produk Tidak Ditemukan
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
              Maaf, tidak ada produk yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Coba gunakan kata kunci lain atau pilih kategori Semua.
            </p>
            <button
              onClick={() => { setSelectedCategory("semua"); setSearchQuery(""); }}
              className="mt-6 px-6 py-2.5 bg-primary-600 text-white font-semibold rounded-xl text-sm shadow-md hover:bg-primary-700 transition-colors"
            >
              Lihat Semua Produk
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
                    {product.categoryLabel}
                  </span>

                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-[11px] px-3 py-1.5 rounded-xl shadow-md">
                    {product.badge}
                  </span>

                  {/* Price overlay on image bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-lg sm:text-xl font-heading font-black tracking-tight drop-shadow-md">
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                    <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg font-medium">
                      Lihat Detail 👁️
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      <span>🏪</span>
                      <span className="truncate">{product.seller}</span>
                    </div>
                    <h3 
                      onClick={() => setSelectedProduct(product)}
                      className="font-heading text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      {product.desc}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleOrderWhatsApp(product)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm cursor-pointer"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.131.564 4.14 1.566 5.885l-1.666 6.115 6.275-1.644c1.685.918 3.612 1.444 5.666 1.444 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12z"/>
                    </svg>
                    <span>Beli via WhatsApp</span>
                  </button>
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
                {selectedProduct.badge}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs font-bold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wider">
                <span>{selectedProduct.categoryLabel}</span>
                <span>🏪 {selectedProduct.seller}</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                {selectedProduct.name}
              </h2>
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mb-4">
                {selectedProduct.priceLabel}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8 text-justify">
                {selectedProduct.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                <button
                  onClick={() => handleOrderWhatsApp(selectedProduct)}
                  className="w-full sm:flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold rounded-2xl shadow-lg flex items-center justify-center gap-3 text-base transition-all hover:scale-[1.02]"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.131.564 4.14 1.566 5.885l-1.666 6.115 6.275-1.644c1.685.918 3.612 1.444 5.666 1.444 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12z"/>
                  </svg>
                  <span>Pesan Langsung via WhatsApp</span>
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full sm:w-auto px-6 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-2xl transition-colors"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
