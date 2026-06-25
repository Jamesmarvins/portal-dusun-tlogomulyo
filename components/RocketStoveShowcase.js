"use client";

import React, { useState } from "react";

export default function RocketStoveShowcase() {
  const [activeTab, setActiveTab] = useState("prinsip");

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl my-12 p-6 sm:p-10 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs sm:text-sm font-bold tracking-wide mb-4">
            <span>🔥</span>
            <span>Inovasi Lingkungan KKN Kelompok 12</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading mb-4 tracking-tight">
            Tungku Sampah <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">Rocket Stove</span> Minim Asap
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Solusi cerdas mengatasi polusi kepulan asap akibat kebiasaan membakar sampah rumah tangga di pekarangan warga Dusun Tlogomoyo.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {[
            { id: "prinsip", icon: "⚙️", label: "Prinsip Kerja & Pembakaran Ganda" },
            { id: "dampak", icon: "🌱", label: "Efektivitas Reduksi Asap" },
            { id: "panduan", icon: "🛠️", label: "Keunggulan Bagi Rumah Tangga" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 border-orange-400 shadow-lg shadow-orange-500/25 scale-105"
                  : "bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500 hover:bg-slate-700"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Cards */}
        <div className="bg-slate-950/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-slate-700/80">
          {activeTab === "prinsip" && (
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up">
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                <h3 className="text-lg sm:text-xl font-bold text-orange-400 font-heading">
                  Mengapa Pembakaran Terbuka Berbahaya?
                </h3>
                <p>
                  Membakar sampah langsung di tanah membuat suplai oksigen tidak merata dan suhu pembakaran rendah (<span className="text-amber-300 font-semibold">±250°C</span>). Hasilnya adalah pembakaran tidak sempurna yang melepaskan karbon monoksida, uap plastik toksik, dan kepulan asap pekat.
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-400 font-heading pt-2">
                  Keajaiban Desain Rocket Stove
                </h3>
                <p>
                  Tungku *Rocket Stove* dirancang dengan ruang bakar vertikal terisolasi berbentuk huruf L atau J. Aliran udara ditarik kuat secara alami (*natural draft*) menciptakan dorongan panas ekstrem hingga <span className="text-emerald-300 font-semibold">&gt;700°C</span>. Suhu tinggi ini membakar habis uap dan partikel asap sebelum sempat keluar ke cerobong atas.
                </p>
              </div>

              {/* Visual Diagram ASCII / Styled Schematics */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 relative flex flex-col items-center justify-center min-h-[260px]">
                <div className="text-center font-mono text-xs space-y-2 w-full max-w-xs">
                  <div className="p-2 bg-emerald-950/80 border border-emerald-500/40 rounded text-emerald-300 animate-pulse font-bold">
                    ☁️ Keluar Uap Bersih (Minim Asap)
                  </div>
                  <div className="flex justify-center">
                    <div className="w-16 h-12 bg-gradient-to-t from-orange-600 to-amber-400 rounded-t flex items-center justify-center font-bold text-slate-950 shadow-inner">
                      700°C+
                    </div>
                  </div>
                  <div className="p-3 bg-slate-800 border border-orange-500/50 rounded-xl flex justify-between items-center text-left">
                    <div className="text-[10px] text-orange-300">
                      🔥 Ruang Bakar<br/>Terisolasi
                    </div>
                    <div className="text-right text-[10px] text-blue-300">
                      💨 Oksigen Masuk<br/>(*Natural Draft*)
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-4 text-center italic">
                  *Skema pembakaran sekunder menghancurkan partikel asap
                </p>
              </div>
            </div>
          )}

          {activeTab === "dampak" && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-900 p-5 rounded-2xl border border-emerald-500/20">
                  <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">80%</p>
                  <p className="text-xs text-slate-400 uppercase font-bold">Reduksi Kepulan Asap</p>
                </div>
                <div className="bg-slate-900 p-5 rounded-2xl border border-amber-500/20">
                  <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">3x</p>
                  <p className="text-xs text-slate-400 uppercase font-bold">Lebih Cepat Terbakar</p>
                </div>
                <div className="bg-slate-900 p-5 rounded-2xl border border-blue-500/20">
                  <p className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-1">0,-</p>
                  <p className="text-xs text-slate-400 uppercase font-bold">Biaya Bahan Bakar Tambahan</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 text-center max-w-3xl mx-auto leading-relaxed">
                Dengan penerapan tungku ini di setiap pekarangan rumah warga Dusun Tlogomoyo, kualitas udara pedesaan yang sejuk tetap terjaga, meminimalkan risiko infeksi saluran pernapasan (ISPA), serta mewujudkan lingkungan permukiman yang sehat.
              </p>
            </div>
          )}

          {activeTab === "panduan" && (
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up text-sm">
              {[
                { title: "Mudah Dibuat Sendiri", desc: "Dapat dirakit menggunakan kaleng cat bekas, batako, atau drum bekas yang mudah didapat warga tanpa biaya mahal." },
                { title: "Aman Untuk Halaman Rumah", desc: "Api terkurung di dalam ruang bakar tertutup sehingga tidak merambat ke rumput kering atau pepohonan sekitar." },
                { title: "Sisa Abu Sedikit & Berguna", desc: "Pembakaran sempurna menyisakan volume abu yang sangat sedikit dan dapat langsung dimanfaatkan untuk campuran pupuk tanaman." },
                { title: "Solusi Mandiri Tiap Rumah", desc: "Menjawab kendala jauhnya akses armada pengangkut sampah kota ke area pegunungan Dusun Tlogomoyo." },
              ].map((feat, i) => (
                <div key={i} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex gap-3 items-start">
                  <span className="text-emerald-400 font-bold text-lg">✔</span>
                  <div>
                    <p className="font-bold text-slate-100 mb-1">{feat.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
