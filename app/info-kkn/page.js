"use client";

import { useState } from "react";

/* ============================
   DATA — Ganti dengan data asli
   ============================ */

const kelompokData = {
  nama: "KKN Kelompok 12",
  universitas: "Universitas Kristen Duta Wacana",
  fakultas: "Lintas Fakultas",
  periode: "24 Juni - 23 Juli 2026",
  lokasi: "Dusun Tlogomoyo, Desa Candi, Kec. Pringkuku, Kab. Pacitan",
  dpl: {
    nama: "Eka Adhi Wibowo, SE, M.Sc",
    nip: "-",
  },
  apl: {
    nama: "Stefanus Andy Kurniawan",
  },
  tema: "Penguatan Kapasitas Masyarakat di Bidang Pariwisata, Digitalisasi, dan Kesehatan Lingkungan Berbasis Potensi Lokasi",
};

/* 1 Program Kerja Kelompok */
const prokerKelompok = {
  judul: "Kerja Bakti dan Bersih Desa",
  deskripsi:
    "Kegiatan gotong royong membersihkan lingkungan dusun, termasuk pembersihan jalan, selokan, dan fasilitas umum bersama warga masyarakat. Program ini bertujuan mempererat silaturahmi antara mahasiswa KKN dengan warga serta mewujudkan lingkungan dusun yang bersih, sehat, dan nyaman.",
  target: "Seluruh area dusun bersih dan terawat",
  status: "Selesai",
};

/* 7 anggota — masing-masing 1 proker individu */
const anggota = [
  {
    nama: "Giovanni",
    nim: "41220663",
    prodi: "Lintas Fakultas",
    jabatan: "Ketua Kelompok",
    prokerIndividu: {
      judul: "Sosialisasi Pertanian Organik",
      deskripsi:
        "Memberikan penyuluhan mengenai teknik pertanian organik, pembuatan pupuk kompos, dan pestisida alami kepada petani di Dusun Tlogomoyo.",
      target: "20 petani mengikuti sosialisasi",
      status: "Selesai",
    },
  },
  {
    nama: "Skolastika Puspa Wulandari",
    nim: "81230167",
    prodi: "Lintas Fakultas",
    jabatan: "Sekretaris",
    prokerIndividu: {
      judul: "Bimbingan Belajar Anak SD",
      deskripsi:
        "Menyelenggarakan program bimbingan belajar rutin bagi anak-anak usia sekolah dasar di Dusun Tlogomoyo dengan fokus pada literasi membaca dan menulis.",
      target: "15 anak SD mengikuti bimbel 3x seminggu",
      status: "Selesai",
    },
  },
  {
    nama: "Sarniati Simon",
    nim: "11231408",
    prodi: "Lintas Fakultas",
    jabatan: "Bendahara",
    prokerIndividu: {
      judul: "Sosialisasi Literasi Keuangan",
      deskripsi:
        "Memberikan edukasi mengenai pengelolaan keuangan rumah tangga, pentingnya menabung, dan perencanaan keuangan sederhana kepada ibu-ibu PKK.",
      target: "20 peserta ibu-ibu PKK",
      status: "Selesai",
    },
  },
  {
    nama: "Kadek Nadya",
    nim: "11221249",
    prodi: "Lintas Fakultas",
    jabatan: "Koordinator Divisi Kesehatan",
    prokerIndividu: {
      judul: "Posyandu dan Cek Kesehatan Gratis",
      deskripsi:
        "Mengadakan kegiatan posyandu dengan pemeriksaan tekanan darah, gula darah, dan tinggi badan bagi warga lansia dan balita di Dusun Tlogomoyo.",
      target: "30 warga mengikuti cek kesehatan",
      status: "Selesai",
    },
  },
  {
    nama: "Rachel Sry Bunga Redjeki",
    nim: "61230816",
    prodi: "Lintas Fakultas",
    jabatan: "Koordinator Divisi Pendidikan",
    prokerIndividu: {
      judul: "Pelatihan Kerajinan Tangan",
      deskripsi:
        "Mengadakan pelatihan membuat kerajinan tangan dari bahan daur ulang bagi ibu-ibu dan remaja dusun sebagai peluang usaha kreatif.",
      target: "15 peserta menghasilkan minimal 2 produk",
      status: "Selesai",
    },
  },
  {
    nama: "James Marvin Santoso",
    nim: "71230971",
    prodi: "Teknik Informatika",
    jabatan: "Koordinator Divisi IT",
    prokerIndividu: {
      judul: "Pembuatan Website Portal Informasi Desa",
      deskripsi:
        "Merancang dan mengembangkan website portal informasi untuk Dusun Tlogomoyo sebagai media digitalisasi profil desa, potensi alam, dan informasi publik.",
      target: "1 website responsif aktif dan terdaftar domain",
      status: "Selesai",
    },
  },
  {
    nama: "Sadrakh Satria Wibowo",
    nim: "71220939",
    prodi: "Lintas Fakultas",
    jabatan: "Koordinator Divisi Infrastruktur",
    prokerIndividu: {
      judul: "Pembuatan Papan Nama Jalan Dusun",
      deskripsi:
        "Merancang dan memasang papan nama jalan dan penunjuk arah di titik-titik strategis Dusun Tlogomoyo untuk memudahkan navigasi.",
      target: "8 papan nama terpasang",
      status: "Selesai",
    },
  },
];

/* ============================
   HELPERS
   ============================ */

const jabatanColors = {
  "Ketua Kelompok": "from-amber-400 to-amber-600",
  Sekretaris: "from-violet-400 to-violet-600",
  Bendahara: "from-emerald-400 to-emerald-600",
  default: "from-primary-400 to-primary-600",
};

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

/* ============================
   MAIN COMPONENT
   ============================ */

export default function InfoKKNPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="animate-fade-in-up">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-slate-300">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </li>
                <li className="text-white font-medium">Tentang &amp; KKN</li>
              </ol>
            </nav>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Tentang KKN <span className="gradient-text">Tlogomoyo</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Profil kelompok, program kerja kelompok, dan program kerja individu
              Tim KKN di Dusun Tlogomoyo.
            </p>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
              {[
                { value: "7", label: "Anggota" },
                { value: "1", label: "Proker Kelompok" },
                { value: "7", label: "Proker Individu" },
                { value: "29 Hari", label: "Durasi" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                >
                  <p className="text-lg sm:text-xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: PROFIL KELOMPOK ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              Profil Kelompok
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Kenali <span className="gradient-text">Tim Kami</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Kelompok KKN yang bertugas di Dusun Tlogomoyo terdiri dari 7
              mahasiswa lintas jurusan yang siap berkolaborasi dengan masyarakat.
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] overflow-hidden mb-10 sm:mb-14 animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 sm:px-8 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {kelompokData.nama}
                  </h3>
                  <p className="text-sm text-white/70">
                    {kelompokData.universitas}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: "Universitas", value: kelompokData.universitas, icon: "🏫" },
                  { label: "Periode", value: kelompokData.periode, icon: "📅" },
                  { label: "Lokasi", value: kelompokData.lokasi, icon: "📍" },
                  { label: "DPL", value: kelompokData.dpl.nama, icon: "👨‍🏫" },
                  { label: "APL", value: kelompokData.apl.nama, icon: "🧑‍💼" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-700 mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Tema */}
              <div className="mt-6 bg-gradient-to-r from-primary-50 to-accent-400/10 rounded-xl p-5 border border-primary-100">
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">
                  Tema KKN
                </p>
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                  &ldquo;{kelompokData.tema}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* ===== ANGGOTA GRID ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {anggota.map((member, i) => {
              const gradientColor =
                jabatanColors[member.jabatan] || jabatanColors.default;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in-up"
                  style={{
                    animationDelay: `${i * 80}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {/* Colored top bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${gradientColor}`} />
                  <div className="p-5">
                    {/* Avatar */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-11 h-11 bg-gradient-to-br ${gradientColor} rounded-xl flex items-center justify-center shadow-md shrink-0`}
                      >
                        <span className="text-white font-bold text-sm">
                          {getInitials(member.nama)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-800 truncate">
                          {member.nama}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {member.nim}
                        </p>
                      </div>
                    </div>
                    {/* Details */}
                    <div className="space-y-1.5">
                      <p className="text-xs text-slate-500">{member.prodi}</p>
                      <span
                        className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${gradientColor} text-white`}
                      >
                        {member.jabatan}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: PROGRAM KERJA KELOMPOK (1 proker) ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              Program Kerja
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Proker <span className="gradient-text">Kelompok</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Program kerja bersama yang dilaksanakan oleh seluruh anggota
              kelompok KKN selama periode penugasan di Dusun Tlogomoyo.
            </p>
          </div>

          {/* Single Proker Kelompok — Featured Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] overflow-hidden animate-fade-in-up">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 px-6 sm:px-8 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Program Kerja Kelompok
                  </h3>
                  <p className="text-sm text-white/70">
                    Dilaksanakan oleh seluruh anggota
                  </p>
                </div>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/20">
                  {prokerKelompok.status}
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                {prokerKelompok.judul}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {prokerKelompok.deskripsi}
              </p>

              {/* Target & Participants */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                    <div>
                      <p className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">
                        Target Capaian
                      </p>
                      <p className="text-sm font-medium text-slate-700 mt-0.5">
                        {prokerKelompok.target}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <div>
                      <p className="text-[10px] font-semibold text-primary-600 uppercase tracking-wider">
                        Pelaksana
                      </p>
                      <p className="text-sm font-medium text-slate-700 mt-0.5">
                        Seluruh 7 anggota kelompok KKN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PROGRAM KERJA INDIVIDU (7 proker) ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-earth-50 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              Proker Individu
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Program Kerja <span className="gradient-text">Individu</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Setiap anggota memiliki satu program kerja individu sesuai bidang
              keahlian masing-masing.
            </p>
          </div>

          {/* Grid of individual proker cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {anggota.map((member, i) => {
              const gradientColor =
                jabatanColors[member.jabatan] || jabatanColors.default;
              const proker = member.prokerIndividu;
              const isExpanded = expandedCard === i;

              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in-up flex flex-col"
                  style={{
                    animationDelay: `${i * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {/* Gradient top bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${gradientColor}`} />

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    {/* Member info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${gradientColor} rounded-xl flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-white font-bold text-xs">
                          {getInitials(member.nama)}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-slate-800 truncate">
                          {member.nama}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {member.prodi}
                        </p>
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r ${gradientColor} text-white shrink-0`}
                      >
                        {member.jabatan.split(" ").slice(0, 2).join(" ")}
                      </span>
                    </div>

                    {/* Proker content */}
                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-800 mb-2">
                      {proker.judul}
                    </h3>

                    <p
                      className={`text-sm text-slate-500 leading-relaxed mb-4 flex-1 ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {proker.deskripsi}
                    </p>

                    {proker.deskripsi.length > 120 && (
                      <button
                        onClick={() =>
                          setExpandedCard(isExpanded ? null : i)
                        }
                        className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors mb-4 self-start"
                      >
                        {isExpanded ? "Tutup ▲" : "Selengkapnya ▼"}
                      </button>
                    )}

                    {/* Target + Status */}
                    <div className="mt-auto space-y-3">
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                          </svg>
                          <div>
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                              Target
                            </p>
                            <p className="text-xs font-medium text-slate-600 mt-0.5">
                              {proker.target}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-400">
                          {member.nim}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            proker.status === "Selesai"
                              ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                              : proker.status === "Sedang Berjalan"
                              ? "bg-blue-100 text-blue-700 border border-blue-200"
                              : "bg-slate-100 text-slate-600 border border-slate-200"
                          }`}
                        >
                          {proker.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
