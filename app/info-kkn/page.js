"use client";

import { useState } from "react";

/* ============================
   DATA — Ganti dengan data asli
   ============================ */

const kelompokData = {
  nama: "KKN Kelompok 12",
  universitas: "Universitas Negeri Surabaya",
  fakultas: "Lintas Fakultas",
  periode: "1 Juli — 14 Agustus 2026",
  lokasi: "Dusun Tlogomulyo, Desa Candi, Kec. Pringkuku, Kab. Pacitan",
  dpl: {
    nama: "Dr. Budi Santoso, M.Pd.",
    nip: "198501012010011001",
  },
  tema: "Pemberdayaan Masyarakat dan Pengembangan Potensi Desa Berbasis Teknologi Informasi",
};

const anggota = [
  {
    nama: "James Marvin S.",
    nim: "2310101001",
    prodi: "Teknik Informatika",
    jabatan: "Ketua Kelompok",
    foto: null,
    prokerIndividu: [
      {
        judul: "Pembuatan Website Portal Informasi Desa",
        deskripsi:
          "Merancang dan mengembangkan website portal informasi untuk Dusun Tlogomulyo sebagai media digitalisasi profil desa, potensi alam, dan informasi publik.",
        target: "1 website responsif aktif dan terdaftar domain",
        status: "Selesai",
      },
      {
        judul: "Pelatihan Dasar Komputer untuk Perangkat Desa",
        deskripsi:
          "Mengadakan pelatihan penggunaan komputer dasar dan Microsoft Office bagi perangkat desa untuk menunjang administrasi desa.",
        target: "10 peserta perangkat desa mengikuti pelatihan",
        status: "Selesai",
      },
    ],
  },
  {
    nama: "Anisa Rahmawati",
    nim: "2310102002",
    prodi: "Pendidikan Bahasa Indonesia",
    jabatan: "Sekretaris",
    foto: null,
    prokerIndividu: [
      {
        judul: "Bimbingan Belajar Anak SD",
        deskripsi:
          "Menyelenggarakan program bimbingan belajar rutin bagi anak-anak usia sekolah dasar di Dusun Tlogomulyo dengan fokus pada literasi membaca dan menulis.",
        target: "15 anak SD mengikuti bimbel 3x seminggu",
        status: "Selesai",
      },
      {
        judul: "Pojok Baca Dusun",
        deskripsi:
          "Mendirikan pojok baca di balai dusun dengan mengumpulkan donasi buku bacaan anak dan ensiklopedia umum sebagai sarana edukasi masyarakat.",
        target: "100 buku terkumpul dan pojok baca aktif",
        status: "Selesai",
      },
    ],
  },
  {
    nama: "Rizky Aditya Pratama",
    nim: "2310103003",
    prodi: "Ilmu Ekonomi",
    jabatan: "Bendahara",
    foto: null,
    prokerIndividu: [
      {
        judul: "Sosialisasi Literasi Keuangan",
        deskripsi:
          "Memberikan edukasi mengenai pengelolaan keuangan rumah tangga, pentingnya menabung, dan perencanaan keuangan sederhana kepada ibu-ibu PKK.",
        target: "20 peserta ibu-ibu PKK",
        status: "Selesai",
      },
      {
        judul: "Pendampingan Pencatatan Keuangan UMKM",
        deskripsi:
          "Membantu pelaku UMKM lokal dalam membuat pembukuan sederhana dan pencatatan transaksi harian untuk meningkatkan manajemen usaha.",
        target: "5 UMKM terdampingi",
        status: "Selesai",
      },
    ],
  },
  {
    nama: "Siti Nurhaliza",
    nim: "2310104004",
    prodi: "Kesehatan Masyarakat",
    jabatan: "Koordinator Divisi Kesehatan",
    foto: null,
    prokerIndividu: [
      {
        judul: "Posyandu dan Cek Kesehatan Gratis",
        deskripsi:
          "Mengadakan kegiatan posyandu dengan pemeriksaan tekanan darah, gula darah, dan tinggi badan bagi warga lansia dan balita di Dusun Tlogomulyo.",
        target: "30 warga mengikuti cek kesehatan",
        status: "Selesai",
      },
      {
        judul: "Sosialisasi Pola Hidup Bersih dan Sehat (PHBS)",
        deskripsi:
          "Mengadakan penyuluhan mengenai PHBS, cuci tangan pakai sabun, dan pengelolaan sampah rumah tangga yang benar.",
        target: "25 peserta dari warga dusun",
        status: "Selesai",
      },
    ],
  },
  {
    nama: "Dimas Arya Wijaya",
    nim: "2310105005",
    prodi: "Teknik Sipil",
    jabatan: "Koordinator Divisi Infrastruktur",
    foto: null,
    prokerIndividu: [
      {
        judul: "Pembuatan Papan Nama Jalan Dusun",
        deskripsi:
          "Merancang dan memasang papan nama jalan dan penunjuk arah di titik-titik strategis Dusun Tlogomulyo untuk memudahkan navigasi.",
        target: "8 papan nama terpasang",
        status: "Selesai",
      },
      {
        judul: "Perbaikan Saluran Drainase",
        deskripsi:
          "Melakukan kerja bakti bersama warga untuk memperbaiki dan membersihkan saluran drainase di RT 01 dan RT 02 untuk mencegah banjir.",
        target: "200 meter saluran diperbaiki",
        status: "Selesai",
      },
    ],
  },
  {
    nama: "Putri Ayu Lestari",
    nim: "2310106006",
    prodi: "Pendidikan Luar Sekolah",
    jabatan: "Koordinator Divisi Pendidikan",
    foto: null,
    prokerIndividu: [
      {
        judul: "Pelatihan Kerajinan Tangan",
        deskripsi:
          "Mengadakan pelatihan membuat kerajinan tangan dari bahan daur ulang bagi ibu-ibu dan remaja dusun sebagai peluang usaha kreatif.",
        target: "15 peserta menghasilkan minimal 2 produk",
        status: "Selesai",
      },
      {
        judul: "English Fun Learning untuk Anak-Anak",
        deskripsi:
          "Menyelenggarakan kelas bahasa Inggris yang menyenangkan melalui games, lagu, dan storytelling bagi anak-anak usia sekolah.",
        target: "20 anak mengikuti 6 sesi pertemuan",
        status: "Selesai",
      },
    ],
  },
  {
    nama: "Fajar Dwi Nugroho",
    nim: "2310107007",
    prodi: "Agribisnis",
    jabatan: "Koordinator Divisi Pertanian",
    foto: null,
    prokerIndividu: [
      {
        judul: "Sosialisasi Pertanian Organik",
        deskripsi:
          "Memberikan penyuluhan mengenai teknik pertanian organik, pembuatan pupuk kompos, dan pestisida alami kepada petani di Dusun Tlogomulyo.",
        target: "20 petani mengikuti sosialisasi",
        status: "Selesai",
      },
      {
        judul: "Demplot Budidaya Empon-Empon",
        deskripsi:
          "Membuat demplot (demonstrasi plot) budidaya empon-empon organik (jahe, kunyit, lengkuas) sebagai komoditas unggulan dusun.",
        target: "1 lahan demplot 50m² aktif",
        status: "Selesai",
      },
    ],
  },
];

const prokerKelompok = [
  {
    judul: "Kerja Bakti dan Bersih Desa",
    deskripsi:
      "Kegiatan gotong royong membersihkan lingkungan dusun, termasuk pembersihan jalan, selokan, dan fasilitas umum bersama warga masyarakat.",
    kategori: "Lingkungan",
    icon: "leaf",
  },
  {
    judul: "Sosialisasi Potensi Wisata Desa",
    deskripsi:
      "Mengidentifikasi dan mempromosikan potensi wisata alam di Dusun Tlogomulyo melalui media sosial dan pembuatan konten kreatif.",
    kategori: "Pariwisata",
    icon: "camera",
  },
  {
    judul: "Festival Budaya dan Pentas Seni",
    deskripsi:
      "Menyelenggarakan acara festival budaya yang menampilkan kesenian lokal, kuliner khas, dan produk UMKM dusun sebagai ajang promosi dan hiburan.",
    kategori: "Budaya",
    icon: "music",
  },
  {
    judul: "Senam Sehat Bersama Warga",
    deskripsi:
      "Mengadakan kegiatan senam pagi rutin setiap minggu bersama warga dusun untuk meningkatkan kesadaran hidup sehat dan kebersamaan.",
    kategori: "Kesehatan",
    icon: "heart",
  },
  {
    judul: "Pelatihan Digital Marketing UMKM",
    deskripsi:
      "Memberikan pelatihan pemanfaatan media sosial dan marketplace digital bagi pelaku UMKM lokal untuk memperluas jangkauan pemasaran produk.",
    kategori: "Ekonomi",
    icon: "shop",
  },
];

/* ============================
   ICON COMPONENTS
   ============================ */

function IconLeaf({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 8.25 4.69a7.5 7.5 0 0 1 3.75-1.69z" />
    </svg>
  );
}
function IconCamera({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
    </svg>
  );
}
function IconMusic({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V4.846a2.25 2.25 0 0 0-1.632-2.163l-5.25-1.5A2.25 2.25 0 0 0 6 3.346v11.557" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.903v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 6 14.903Z" />
    </svg>
  );
}
function IconHeart({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}
function IconShop({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    </svg>
  );
}

const iconMap = { leaf: IconLeaf, camera: IconCamera, music: IconMusic, heart: IconHeart, shop: IconShop };

const jabatanColors = {
  "Ketua Kelompok": "from-amber-400 to-amber-600",
  Sekretaris: "from-violet-400 to-violet-600",
  Bendahara: "from-emerald-400 to-emerald-600",
  default: "from-primary-400 to-primary-600",
};

const kategoriColors = {
  Lingkungan: { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200" },
  Pariwisata: { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200" },
  Budaya: { bg: "bg-violet-100", text: "text-violet-700", border: "border-violet-200" },
  Kesehatan: { bg: "bg-rose-100", text: "text-rose-700", border: "border-rose-200" },
  Ekonomi: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
};

/* ============================
   MAIN COMPONENT
   ============================ */

export default function InfoKKNPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeMember = anggota[activeTab];

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
                  <a href="/" className="hover:text-white transition-colors">Beranda</a>
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
              Tentang KKN <span className="gradient-text">Tlogomulyo</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Profil kelompok, program kerja kelompok, dan program kerja individu
              Tim KKN di Dusun Tlogomulyo.
            </p>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
              {[
                { value: "7", label: "Anggota" },
                { value: "5", label: "Proker Kelompok" },
                { value: "14", label: "Proker Individu" },
                { value: "45 Hari", label: "Durasi" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                  <p className="text-lg sm:text-xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
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
              Kelompok KKN yang bertugas di Dusun Tlogomulyo terdiri dari 7 mahasiswa lintas
              jurusan yang siap berkolaborasi dengan masyarakat.
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
                  <h3 className="text-lg sm:text-xl font-bold text-white">{kelompokData.nama}</h3>
                  <p className="text-sm text-white/70">{kelompokData.universitas}</p>
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
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-700 mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Tema */}
              <div className="mt-6 bg-gradient-to-r from-primary-50 to-accent-400/10 rounded-xl p-5 border border-primary-100">
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">Tema KKN</p>
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                  &ldquo;{kelompokData.tema}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* ===== ANGGOTA GRID ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {anggota.map((member, i) => {
              const gradientColor = jabatanColors[member.jabatan] || jabatanColors.default;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
                >
                  {/* Colored top bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${gradientColor}`} />
                  <div className="p-5">
                    {/* Avatar */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 bg-gradient-to-br ${gradientColor} rounded-xl flex items-center justify-center shadow-md shrink-0`}>
                        <span className="text-white font-bold text-sm">
                          {member.nama.split(" ").map(n => n[0]).slice(0, 2).join("")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-800 truncate">{member.nama}</p>
                        <p className="text-[11px] text-slate-400">{member.nim}</p>
                      </div>
                    </div>
                    {/* Details */}
                    <div className="space-y-1.5">
                      <p className="text-xs text-slate-500">{member.prodi}</p>
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${gradientColor} text-white`}>
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

      {/* ===== SECTION 2: PROGRAM KERJA KELOMPOK ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              Program Kerja
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Proker <span className="gradient-text">Kelompok</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Program kerja bersama yang dilaksanakan oleh seluruh anggota kelompok
              KKN selama periode penugasan di Dusun Tlogomulyo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {prokerKelompok.map((proker, i) => {
              const IconComp = iconMap[proker.icon] || IconLeaf;
              const colors = kategoriColors[proker.kategori] || kategoriColors.Lingkungan;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {proker.kategori}
                    </span>
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-800 mb-2">
                    {proker.judul}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {proker.deskripsi}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PROGRAM KERJA INDIVIDU ===== */}
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
              Setiap anggota memiliki program kerja individu sesuai bidang keahlian
              masing-masing. Pilih anggota untuk melihat detail prokernya.
            </p>
          </div>

          {/* Tabs — Member Selector */}
          <div className="mb-8 sm:mb-10">
            {/* Desktop tabs */}
            <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3">
              {anggota.map((member, i) => {
                const isActive = activeTab === i;
                const gradientColor = jabatanColors[member.jabatan] || jabatanColors.default;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                      isActive
                        ? "bg-white shadow-lg border-primary-200 text-primary-700 scale-[1.03]"
                        : "bg-white/60 border-slate-200/60 text-slate-500 hover:bg-white hover:border-slate-300 hover:text-slate-700"
                    }`}
                  >
                    <div className={`w-7 h-7 bg-gradient-to-br ${gradientColor} rounded-lg flex items-center justify-center shrink-0`}>
                      <span className="text-white font-bold text-[10px]">
                        {member.nama.split(" ").map(n => n[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                    <span className="truncate max-w-[120px]">{member.nama.split(" ").slice(0, 2).join(" ")}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile dropdown */}
            <div className="sm:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {anggota.map((member, i) => (
                  <option key={i} value={i}>
                    {member.nama} — {member.jabatan}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Member Content */}
          <div className="animate-fade-in-up" key={activeTab}>
            {/* Member header card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] overflow-hidden mb-6">
              <div className={`h-2 bg-gradient-to-r ${jabatanColors[activeMember.jabatan] || jabatanColors.default}`} />
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${jabatanColors[activeMember.jabatan] || jabatanColors.default} rounded-2xl flex items-center justify-center shadow-lg shrink-0`}>
                  <span className="text-white font-bold text-lg">
                    {activeMember.nama.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-800">
                    {activeMember.nama}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-sm text-slate-500">{activeMember.nim}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-sm text-slate-500">{activeMember.prodi}</span>
                    <span className="text-slate-300">•</span>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r ${jabatanColors[activeMember.jabatan] || jabatanColors.default} text-white`}>
                      {activeMember.jabatan}
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary-600">{activeMember.prokerIndividu.length}</p>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Proker</p>
                </div>
              </div>
            </div>

            {/* Proker list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {activeMember.prokerIndividu.map((proker, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-6 sm:p-7">
                    {/* Number badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center border border-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-colors duration-300">
                        <span className="text-sm font-extrabold text-primary-700">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        proker.status === "Selesai"
                          ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                          : proker.status === "Sedang Berjalan"
                          ? "bg-blue-100 text-blue-700 border border-blue-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}>
                        {proker.status}
                      </span>
                    </div>

                    <h4 className="font-heading text-base sm:text-lg font-bold text-slate-800 mb-2">
                      {proker.judul}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {proker.deskripsi}
                    </p>

                    {/* Target */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                        <div>
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Target Capaian</p>
                          <p className="text-sm font-medium text-slate-600 mt-0.5">{proker.target}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
