"use client";

import React, { useState } from "react";

export default function QuickContact() {
  const [isOpen, setIsOpen] = useState(false);

  const kadusWa = "6281234567890";
  const kknWa = "6289876543210";

  const handleWaClick = (number, topic) => {
    const text = `Halo Portal Dusun Tlogomoyo, saya ingin bertanya terkait: *${topic}*. Terima kasih.`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end font-sans">
      {/* Contact Menu Card */}
      {isOpen && (
        <div className="mb-3 w-64 sm:w-72 bg-slate-900/95 text-white p-4 rounded-3xl shadow-2xl backdrop-blur-2xl border border-primary-500/30 animate-fade-in-up">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-700/80">
            <span className="text-xs font-bold text-primary-300 uppercase tracking-wider">
              📞 Hubungi Dusun
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
              aria-label="Tutup menu kontak"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            Pilih layanan informasi atau pengajuan izin kunjungan resmi:
          </p>

          <div className="space-y-2">
            <button
              onClick={() => handleWaClick(kadusWa, "Layanan Masyarakat / Aspirasi Warga")}
              className="w-full p-2.5 bg-slate-800 hover:bg-emerald-600 rounded-xl flex items-center gap-2.5 text-left text-xs font-semibold transition-colors group cursor-pointer"
            >
              <span className="text-base">🏡</span>
              <div className="min-w-0">
                <p className="font-bold text-white group-hover:text-white">Kepala Dusun Tlogomoyo</p>
                <p className="text-[10px] text-slate-400 group-hover:text-emerald-100">Layanan administrasi & izin</p>
              </div>
            </button>

            <button
              onClick={() => handleWaClick(kknWa, "Program Kerja KKN / Rocket Stove")}
              className="w-full p-2.5 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center gap-2.5 text-left text-xs font-semibold transition-colors group cursor-pointer"
            >
              <span className="text-base">🎓</span>
              <div className="min-w-0">
                <p className="font-bold text-white group-hover:text-white">Tim KKN Kelompok 28</p>
                <p className="text-[10px] text-slate-400 group-hover:text-blue-100">Info proker & kerjasama</p>
              </div>
            </button>

            <a
              href="https://maps.google.com/?q=Balai+Dusun+Tlogomoyo+Candi+Pacitan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2.5 bg-slate-800 hover:bg-amber-600 rounded-xl flex items-center gap-2.5 text-left text-xs font-semibold transition-colors group"
            >
              <span className="text-base">📍</span>
              <div className="min-w-0">
                <p className="font-bold text-white group-hover:text-white">Peta Balai Dusun</p>
                <p className="text-[10px] text-slate-400 group-hover:text-amber-100">Buka navigasi Google Maps</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-primary-400/30 cursor-pointer"
      >
        <span>💬</span>
        <span>Kontak & Bantuan</span>
      </button>
    </div>
  );
}
