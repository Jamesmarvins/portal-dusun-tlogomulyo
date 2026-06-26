"use client";

import React, { useState } from "react";

export default function AgendaWidget() {
  const [activeFilter, setActiveFilter] = useState("semua");

  const getFutureDate = (daysAhead) => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return {
      date: String(d.getDate()).padStart(2, "0"),
      month: months[d.getMonth()],
      year: String(d.getFullYear()),
      fullDate: `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    };
  };

  const d1 = getFutureDate(3);
  const d2 = getFutureDate(8);
  const d3 = getFutureDate(15);
  const d4 = getFutureDate(25);

  const agendaList = [
    {
      id: 1,
      date: d1.date,
      month: d1.month,
      year: d1.year,
      fullDate: d1.fullDate,
      title: "Posyandu Balita & Lansia Rutin",
      time: "08.00 - 11.00 WIB",
      location: "Balai Dusun Tlogomoyo",
      category: "Kesehatan",
      categoryColor: "bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300 border-rose-200 dark:border-rose-800",
      desc: "Pemeriksaan kesehatan gratis, penimbangan balita, pemberian vitamin, serta pembagian makanan tambahan bergizi bagi lansia dan anak-anak.",
      icon: "🩺",
      badgeGradient: "from-rose-500 to-pink-600",
    },
    {
      id: 2,
      date: d2.date,
      month: d2.month,
      year: d2.year,
      fullDate: d2.fullDate,
      title: "Kerja Bakti Gotong Royong Bersih Dusun",
      time: "07.00 WIB - Selesai",
      location: "Sepanjang Jalan Utama Dusun",
      category: "Gotong Royong",
      categoryColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      desc: "Pembersihan saluran air (drainase), perapian bahu jalan, serta penataan tanaman lingkungan bersama seluruh warga RT 01 dan RT 02.",
      icon: "🧹",
      badgeGradient: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      date: d3.date,
      month: d3.month,
      year: d3.year,
      fullDate: d3.fullDate,
      title: "Penyambutan & Penerimaan Mahasiswa KKN",
      time: "09.00 - 12.00 WIB",
      location: "Pendopo Balai Dusun & Candi",
      category: "Pendidikan & KKN",
      categoryColor: "bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      desc: "Upacara penyambutan resmi mahasiswa KKN universitas mitra, pengenalan perangkat dusun, serta pemaparan rencana program kerja pengabdian masyarakat.",
      icon: "🎓",
      badgeGradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 4,
      date: d4.date,
      month: d4.month,
      year: d4.year,
      fullDate: d4.fullDate,
      title: "Musyawarah Kelompok Tani Nuju Makmur XII",
      time: "13.00 - 15.30 WIB",
      location: "Kediaman Kepala Dusun (Kamituwo)",
      category: "Pertanian",
      categoryColor: "bg-amber-100 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800",
      desc: "Pembahasan persiapan masa panen singkong dan empon-empon organik, alokasi pupuk subsidi, serta pemanfaatan teknologi pengolahan hasil panen.",
      icon: "🌾",
      badgeGradient: "from-amber-500 to-orange-600",
    },
  ];

  const filteredAgenda = activeFilter === "semua" 
    ? agendaList 
    : agendaList.filter(item => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden hero-pattern">
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-accent-200/20 dark:bg-accent-900/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-3 bg-primary-50 dark:bg-primary-950 px-4 py-1.5 rounded-full border border-primary-200 dark:border-primary-800 shadow-sm">
            <span>📅</span>
            <span>Jadwal Terjadwal Otomatis</span>
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Papan Agenda &{" "}
            <span className="gradient-text">Kegiatan Terdekat</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Ikuti berbagai kegiatan kemasyarakatan, pemeriksaan kesehatan rutin, gotong royong, hingga agenda penyambutan mahasiswa KKN di Dusun Tlogomoyo yang diperbarui secara *real-time*.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          {[
            { id: "semua", label: "✨ Semua Agenda" },
            { id: "kesehatan", label: "🩺 Kesehatan" },
            { id: "gotong royong", label: "🧹 Gotong Royong" },
            { id: "kkn", label: "🎓 Pendidikan & KKN" },
            { id: "pertanian", label: "🌾 Pertanian" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border shadow-sm ${
                activeFilter === tab.id
                  ? "bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-600/25 scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Agenda Cards Grid / Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredAgenda.map((agenda, index) => (
            <div
              key={agenda.id}
              className="group bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden relative animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 120}ms` }}
            >
              {/* Subtle top accent bar */}
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${agenda.badgeGradient}`} />

              <div>
                <div className="flex items-start justify-between gap-4 mb-5 pt-2">
                  {/* Date Calendar Box */}
                  <div className={`shrink-0 w-16 h-18 sm:w-20 sm:h-22 rounded-2xl bg-gradient-to-br ${agenda.badgeGradient} p-2 text-white flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-2xl sm:text-3xl font-black leading-none">{agenda.date}</span>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1 opacity-95">{agenda.month}</span>
                    <span className="text-[9px] font-mono opacity-80">{agenda.year}</span>
                  </div>

                  {/* Category Pill & Icon */}
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold border inline-flex items-center gap-1.5 shadow-2xs ${agenda.categoryColor}`}>
                      <span>{agenda.icon}</span>
                      <span>{agenda.category}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-900/80 px-2.5 py-1 rounded-lg">
                      🕒 {agenda.time}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-2.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {agenda.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-justify">
                  {agenda.desc}
                </p>
              </div>

              {/* Location Footer & Calendar Reminder */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 min-w-0">
                  <span className="text-base shrink-0">📍</span>
                  <span className="truncate">{agenda.location}</span>
                </div>

                <button
                  onClick={() => alert(`Pengingat agenda "${agenda.title}" pada ${agenda.fullDate} telah dicatat di perangkat Anda.`)}
                  className="shrink-0 px-3.5 py-2 rounded-xl bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 dark:hover:text-slate-950 font-bold text-xs transition-colors duration-200 border border-primary-200 dark:border-primary-800 flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>🔔</span>
                  <span className="hidden sm:inline">Ingatkan Saya</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center animate-fade-in-up">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md">
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">
              Punya usulan agenda atau kegiatan komunitas di Dusun Tlogomoyo?
            </span>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Dusun%20Tlogomoyo,%20saya%20ingin%20mengajukan%20jadwal%20kegiatan..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-transform duration-200 hover:scale-105 inline-flex items-center gap-2 shadow-sm"
            >
              <span>💬</span>
              <span>Hubungi Kamituwo via WA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
