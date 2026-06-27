"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const katalogProduk = [
  {
    id: "keripik-singkong",
    title: "Keripik Singkong Bu Siti",
    category: "kuliner",
    categoryBadge: "KULINER",
    subtitle: "Dusun Tlogomoyo · Ibu Siti",
    desc: "Olahan keripik singkong renyah pilihan dari panen kebun lokal dengan bumbu alami rahasia warisan keluarga. Gurih, renyah, dan tanpa bahan pengawet.",
    tags: ["Keripik Original", "Pedas Balado", "Gurih", "+1"],
    phoneDisplay: "0812-3456-7890",
    phoneWA: "6281234567890",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "anyaman-bambu",
    title: "Anyaman Bambu Pak Tarjo",
    category: "kerajinan",
    categoryBadge: "KERAJINAN",
    subtitle: "Dusun Tlogomoyo · Bpk. Tarjo",
    desc: "Kerajinan anyaman bambu alami berkualitas tinggi dikerjakan dengan tangan terampil dan presisi. Cocok untuk wadah hantaran suvenir ramah lingkungan.",
    tags: ["Besek Bambu", "Tampah", "Kipas", "+2"],
    phoneDisplay: "0813-4567-8901",
    phoneWA: "6281345678901",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "jamu-empon",
    title: "Jamu Tradisional Ibu PKK",
    category: "kuliner",
    categoryBadge: "KULINER",
    subtitle: "Dusun Tlogomoyo · Kelompok Asman Toga",
    desc: "Jamu tradisional dari resep warisan turun-temurun dengan bahan herbal alami seperti jahe merah, temulawak, dan kunyit yang dipetik langsung dari kebun sendiri.",
    tags: ["Kunyit Asam", "Beras Kencur", "Temulawak", "+1"],
    phoneDisplay: "0852-3456-7890",
    phoneWA: "6285234567890",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gula-aren",
    title: "Gula Aren Mbah Kromo",
    category: "pertanian",
    categoryBadge: "PERTANIAN",
    subtitle: "Dusun Tlogomoyo · Mbah Kromo",
    desc: "Gula aren organik murni yang diolah secara tradisional menggunakan tungku kayu bakar dari nira kelapa pilihan perbukitan Tlogomoyo.",
    tags: ["Gula Batok", "Gula Semut", "Nira Murni", "+1"],
    phoneDisplay: "0821-9876-5432",
    phoneWA: "6282198765432",
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "tiwul-instan",
    title: "Tiwul Instan Cap Gunung Sewu",
    category: "kuliner",
    categoryBadge: "KULINER",
    subtitle: "Dusun Tlogomoyo · Kelompok Wanita Tani",
    desc: "Makanan pokok alternatif rendah glikemik berbahan dasar gaplek singkong pilihan. Praktis dimasak dan sangat baik untuk kesehatan pencernaan.",
    tags: ["Tiwul Manis", "Tiwul Tawar", "Gatot", "+1"],
    phoneDisplay: "0857-1234-5678",
    phoneWA: "6285712345678",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "madu-hutan",
    title: "Madu Hutan Liar Wana Lestari",
    category: "pertanian",
    categoryBadge: "PERTANIAN",
    subtitle: "Dusun Tlogomoyo · Kelompok Tani Hutan",
    desc: "Madu murni yang dipanen langsung dari sarang lebah liar di perbukitan hutan Tlogomoyo. Kaya antioksidan alami dan khasiat penambah stamina.",
    tags: ["Madu Multiflora", "Sarang Lebah", "Klanceng"],
    phoneDisplay: "0819-8765-4321",
    phoneWA: "6281987654321",
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?q=80&w=800&auto=format&fit=crop"
  }
];

const kategoriList = [
  { id: "semua", label: "🌟 Semua" },
  { id: "kuliner", label: "🍛 Kuliner" },
  { id: "kerajinan", label: "🧺 Kerajinan" },
  { id: "pertanian", label: "🌾 Pertanian" },
];

export default function UmkmPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return katalogProduk.filter((item) => {
      const matchCategory = selectedCategory === "semua" || item.category === selectedCategory;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWA = (phoneWA, title) => {
    const text = `Halo, saya melihat informasi *${title}* di Portal Dusun Tlogomoyo. Apakah produk saat ini tersedia?`;
    window.open(`https://wa.me/${phoneWA}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-slate-900 pb-24 selection:bg-primary-500 selection:text-white font-sans">
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-slate-950 to-slate-900 text-white border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Katalog UMKM Dusun Tlogomoyo
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-400">
            Etalase produk unggulan olahan pangan, hasil bumi, dan kerajinan karya masyarakat Dusun Tlogomoyo.
          </p>
        </div>
      </section>

      {/* ===== FILTER & SEARCH ===== */}
      <section className="sticky top-16 sm:top-20 z-30 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {kategoriList.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
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
              placeholder="Cari produk atau penjual..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 text-slate-100 placeholder-slate-500 text-sm border border-slate-700 focus:border-amber-500 focus:outline-none transition-all duration-200"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== CATALOG GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-800/50 rounded-3xl border border-slate-800 p-8">
            <p className="text-slate-400 text-sm">Produk tidak ditemukan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className="bg-[#151f32] rounded-2xl overflow-hidden border border-slate-800/80 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Top Image & Badge */}
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-slate-800">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-amber-500/90 backdrop-blur-md text-slate-950 font-black text-[11px] px-3 py-1 rounded tracking-wider uppercase shadow">
                        {product.categoryBadge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-white mb-1">
                      {product.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400 mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 text-justify">
                      {product.desc}
                    </p>

                    {/* Tags row */}
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      {product.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-slate-300 bg-slate-800/90 px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Contact Row */}
                <div className="px-6 pb-6 pt-2">
                  <div className="border-t border-slate-800 pt-4">
                    <button
                      onClick={() => handleWA(product.phoneWA, product.title)}
                      className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-colors cursor-pointer group"
                    >
                      <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.131.564 4.14 1.566 5.885l-1.666 6.115 6.275-1.644c1.685.918 3.612 1.444 5.666 1.444 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12z"/>
                      </svg>
                      <span>{product.phoneDisplay}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
