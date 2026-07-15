"use client";

import ProfilHeader from "./ProfilHeader";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProfilDusunPage() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent-400/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-300/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl" />
          <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <ProfilHeader />

          {/* Quick Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {[
              { value: t?.profilContent?.stats?.[0]?.value || "Pacitan", label: t?.profilContent?.stats?.[0]?.label || "Kabupaten", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
              { value: t?.profilContent?.stats?.[1]?.value || "Pringkuku", label: t?.profilContent?.stats?.[1]?.label || "Kecamatan", icon: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" },
              { value: t?.profilContent?.stats?.[2]?.value || "Candi", label: t?.profilContent?.stats?.[2]?.label || "Desa", icon: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
              { value: t?.profilContent?.stats?.[3]?.value || "Jawa Timur", label: t?.profilContent?.stats?.[3]?.label || "Provinsi", icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/20 dark:bg-slate-800/15 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                  <span className="text-[10px] sm:text-xs text-primary-200 font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GEOGRAFI & TOPOGRAFI ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
                {t?.profilContent?.geoBadge || "Geografi & Topografi"}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-5">
                {t?.profilContent?.geoTitle || "Letak Geografis"}{" "}
                <span className="gradient-text">Tlogomoyo</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                <p>{t?.profilContent?.geoP1 || "Dusun Tlogomoyo terletak di Desa Candi, Kecamatan Pringkuku, Kabupaten Pacitan, Provinsi Jawa Timur. Desa Candi sendiri berjarak sekitar 10 km dari ibu kota kecamatan dan merupakan salah satu desa yang memiliki cakupan wilayah cukup luas di Kecamatan Pringkuku."}</p>
                <p>{t?.profilContent?.geoP2 || "Topografi wilayah ini didominasi oleh pegunungan berbatu yang merupakan bagian dari bentang alam Pegunungan Seribu (Gunung Sewu). Di sisi selatan, Desa Candi berbatasan langsung dengan Samudera Indonesia, menciptakan perpaduan lanskap perbukitan hijau dan pantai yang memukau."}</p>
                <p>{t?.profilContent?.geoP3 || "Koordinat geografis dusun berada di sekitar 8.2239°S, 111.0172°E, dengan ketinggian bervariasi dari pesisir hingga perbukitan."}</p>
              </div>
            </div>

            {/* Batas Wilayah Card */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-to-br from-primary-50 to-earth-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 sm:p-8 border border-primary-100 dark:border-slate-700 shadow-[var(--shadow-card)]">
                <h3 className="font-heading text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                  {t?.profilContent?.batasTitle || "Batas Wilayah Desa Candi"}
                </h3>
                <div className="space-y-3">
                  {[
                    { arah: t?.profilContent?.batas?.[0]?.arah || "Utara", batas: t?.profilContent?.batas?.[0]?.batas || "Desa Pringkuku", icon: "↑", color: "from-blue-100 to-blue-200 text-blue-700" },
                    { arah: t?.profilContent?.batas?.[1]?.arah || "Timur", batas: t?.profilContent?.batas?.[1]?.batas || "Desa Poko", icon: "→", color: "from-emerald-100 to-emerald-200 text-emerald-700" },
                    { arah: t?.profilContent?.batas?.[2]?.arah || "Selatan", batas: t?.profilContent?.batas?.[2]?.batas || "Samudera Indonesia", icon: "↓", color: "from-cyan-100 to-cyan-200 text-cyan-700" },
                    { arah: t?.profilContent?.batas?.[3]?.arah || "Barat", batas: t?.profilContent?.batas?.[3]?.batas || "Desa Jlubang", icon: "←", color: "from-amber-100 to-amber-200 text-amber-700" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center font-bold text-lg shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.arah}</p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-100">{item.batas}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Luas Wilayah Kecamatan */}
                <div className="mt-5 pt-5 border-t border-primary-100 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{language === "en" ? "Pringkuku District Area" : "Luas Kecamatan Pringkuku"}</p>
                      <p className="text-xl font-extrabold text-primary-700 dark:text-primary-400">~132,93 km²</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{language === "en" ? "Number of Villages" : "Jumlah Desa"}</p>
                      <p className="text-xl font-extrabold text-primary-700 dark:text-primary-400">{language === "en" ? "13 Villages" : "13 Desa"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POTENSI PERTANIAN & PENGGUNAAN LAHAN ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-earth-50 dark:bg-slate-900 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              {t?.profilFull?.sec2Badge || "Pertanian & Sumber Daya Alam"}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              {t?.profilFull?.sec2Title || "Kekayaan Alam"}{" "}
              <span className="gradient-text">{t?.profilFull?.sec2TitleHighlight || "Tlogomoyo"}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-center">
              {t?.profilFull?.sec2Desc || "Topografi perbukitan yang subur menjadikan wilayah ini kaya akan beragam komoditas pertanian dan hasil bumi. Masyarakat Tlogomoyo juga aktif berorganisasi dalam bidang agraris, salah satunya melalui keberadaan kelompok tani (seperti Kelompok Tani Nuju Makmur XII) yang menjadi motor penggerak ketahanan pangan dan ekonomi warga setempat."}
            </p>
          </div>

          {/* Penggunaan Lahan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {(t?.profilFull?.lahan || [
              { value: "~650 ha", label: "Ladang & Tegalan", desc: "Lahan utama untuk bercocok tanam singkong, empon-empon, dan tanaman pangan lainnya." },
              { value: "~451 ha", label: "Hutan Rakyat", desc: "Hutan yang dikelola masyarakat, menghasilkan kayu, kelapa, dan produk kehutanan." },
              { value: "~12,5 ha", label: "Lahan Sawah", desc: "Area sawah yang relatif kecil namun tetap produktif untuk kebutuhan pangan lokal." },
            ]).map((item, i) => {
              const styles = [
                { gradient: "from-emerald-500 to-emerald-700", bg: "bg-emerald-50" },
                { gradient: "from-primary-500 to-primary-700", bg: "bg-primary-50" },
                { gradient: "from-amber-500 to-amber-700", bg: "bg-amber-50" },
              ][i] || { gradient: "from-emerald-500 to-emerald-700", bg: "bg-emerald-50" };
              return (
                <div
                  key={i}
                  className={`${styles.bg} dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up`}
                  style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
                >
                  <div className={`inline-flex items-center justify-center px-3 py-1 rounded-lg bg-gradient-to-r ${styles.gradient} mb-4`}>
                    <span className="text-xl sm:text-2xl font-extrabold text-white">{item.value}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-800 dark:text-white mb-2">{item.label}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Komoditas Unggulan */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-[var(--shadow-card)] animate-fade-in-up">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 8.25 4.69a7.5 7.5 0 0 1 3.75-1.69z" />
                </svg>
              </div>
              {t?.profilFull?.komoditasTitle || "Komoditas Unggulan"}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {(t?.profilFull?.komoditas || [
                { name: "Singkong", desc: "Tanaman pangan utama" },
                { name: "Padi", desc: "Bahan pangan pokok utama" },
                { name: "Kelapa", desc: "Hasil perkebunan unggulan" },
                { name: "Jagung", desc: "Tanaman palawija pendukung" },
                { name: "Pisang", desc: "Hortikultura kebun pekarangan" },
              ]).map((item, i) => {
                const emoji = ["🌿", "🌾", "🥥", "🌽", "🍌"][i] || "🌱";
                return (
                  <div
                    key={i}
                    className="group bg-slate-50 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-slate-700 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                  >
                    <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform duration-300">{emoji}</span>
                    <p className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300">{item.name}</p>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-300 mt-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUDAYA & TRADISI ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              {t?.profilFull?.sec3Badge || "Budaya & Tradisi"}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              {t?.profilFull?.sec3Title || "Kearifan Lokal"}{" "}
              <span className="gradient-text">{t?.profilFull?.sec3TitleHighlight || "yang Terjaga"}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-center">
              {t?.profilFull?.sec3Desc || "Masyarakat Tlogomoyo memiliki tradisi dan kesenian yang kaya warisan leluhur yang masih hidup dan terus dilestarikan dari generasi ke generasi."}
            </p>
          </div>

          {/* Budaya Showcase Banner */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-700 relative h-72 sm:h-96 group animate-fade-in-up">
            <img src="/images/budaya.png" alt="Budaya Gotong Royong Warga Tlogomoyo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="px-3 py-1 bg-amber-500 text-slate-950 rounded-lg font-bold text-xs uppercase tracking-wider mb-2 inline-block">{t?.profilFull?.bannerBadge || "Nilai Utama"}</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">{t?.profilFull?.bannerTitle || "Semangat Kegotongroyongan & Budaya Agraris"}</h3>
                <p className="text-sm text-slate-200 mt-1 max-w-xl">{t?.profilFull?.bannerDesc || "Dari tradisi Ammos, Kothekan Lesung, hingga kerja bakti rutin membangun desa bersama-sama dengan senyum hangat keramahan lokal."}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center max-w-2xl mx-auto">
            {(t?.profilFull?.cards || [
              { title: "Gotong Royong", desc: "Tradisi kerja bersama yang sangat kuat di Tlogomoyo. Masyarakat rutin bergotong royong dalam kegiatan pembangunan infrastruktur dusun, perbaikan jalan, bersih-bersih lingkungan, hingga membantu tetangga yang mengadakan hajatan." },
            ]).map((item, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up w-full"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEJARAH & ASAL-USUL ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-earth-50 dark:bg-slate-900 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              {t?.profilFull?.sec4Badge || "Sejarah & Asal-Usul"}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              {t?.profilFull?.sec4Title || "Rekam Jejak & Asal Nama"}{" "}
              <span className="gradient-text">{t?.profilFull?.sec4TitleHighlight || "Tlogomoyo"}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-center">
              {t?.profilFull?.sec4Desc || "Mari telusuri sejarah berdirinya pemukiman di Tlogomoyo serta makna luhur di balik nama dusun ini."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Asal-Usul Nama Card */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 animate-fade-in-up">
              {/* Header gradient */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 sm:px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💧</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{t?.profilFull?.asalUsul?.title || "Asal-Usul Nama Tlogomoyo"}</h3>
                    <p className="text-xs text-primary-100">{t?.profilFull?.asalUsul?.subtitle || "Kejernihan Sumber Air di Atas Bukit Karst"}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-justify">
                  {t?.profilFull?.asalUsul?.p1 || "Nama Tlogomoyo memiliki akar historis dari kata 'Tlogo' (telaga/sumber air) dan 'Moyo' (bayangan atau ketenangan batin). Konon di masa awal pemukiman, para tetua dusun menemukan sebuah telaga kecil dengan air yang sangat jernih di antara bukit karst kering. Telaga ini menjadi tumpuan warga untuk bertahan hidup dan mengolah tanah pertanian, sehingga dusun ini dinamai Tlogomoyo sebagai perlambang berkah ketenangan dan kehidupan."}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {(t?.profilFull?.asalUsul?.details || [
                    { label: "Makna 'Tlogo'", detail: "Telaga Kehidupan" },
                    { label: "Makna 'Moyo'", detail: "Ketenangan Jiwa" },
                    { label: "Karakter Lahan", detail: "Bukit Karst Pegunungan Sewu" },
                    { label: "Pilar Utama", detail: "Sumber Daya Air Lokal" },
                  ]).map((item, i) => (
                    <div key={i} className="bg-primary-50/80 dark:bg-slate-700/80 rounded-lg p-3 border border-primary-200 dark:border-slate-600">
                      <p className="text-xs text-primary-800 dark:text-primary-300 font-bold mb-0.5">{item.label}</p>
                      <p className="text-sm font-extrabold text-slate-800 dark:text-white">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {(t?.profilFull?.asalUsul?.acts || ["Harmoni Alam", "Kearifan Lokal", "Penjaga Telaga", "Konservasi Air"]).map((act, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-950/80 text-primary-800 dark:text-primary-200 text-xs font-bold rounded-full border border-primary-300 dark:border-primary-800">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sejarah Perkembangan Card */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {/* Header gradient */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 sm:px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{t?.profilFull?.sejarah?.title || "Sejarah Perkembangan Agraris"}</h3>
                    <p className="text-xs text-amber-100">{t?.profilFull?.sejarah?.subtitle || "Babad Alas dan Ketahanan Pangan Mandiri"}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-justify">
                  {t?.profilFull?.sejarah?.p1 || "Pemukiman Tlogomoyo dimulai oleh para pembuka lahan (babad alas) yang bermigrasi mencari lahan subur di pedalaman Pacitan selatan. Generasi awal berfokus pada teknik bercocok tanam tadah hujan karena struktur tanah berbatu. Melalui ketekunan, warga berhasil mengembangkan sistem budidaya singkong, empon-empon, dan penyadapan nira kelapa yang kini diwariskan turun-temurun sebagai identitas ekonomi utama dusun."}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {(t?.profilFull?.sejarah?.details || [
                    { label: "Masa Rintisan", detail: "Pertanian Tadah Hujan" },
                    { label: "Komoditas Awal", detail: "Singkong & Kelapa" },
                    { label: "Pola Sosial", detail: "Gotong Royong Sambatan" },
                    { label: "Fase Modern", detail: "Digitalisasi & UMKM Kreatif" },
                  ]).map((item, i) => (
                    <div key={i} className="bg-amber-50/80 dark:bg-slate-700/80 rounded-lg p-3 border border-amber-200 dark:border-slate-600">
                      <p className="text-xs text-amber-800 dark:text-amber-300 font-bold mb-0.5">{item.label}</p>
                      <p className="text-sm font-extrabold text-slate-800 dark:text-white">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {(t?.profilFull?.sejarah?.acts || ["Babad Alas", "Tani Tradisional", "Sistem Sambatan", "Kemandirian Pangan"]).map((act, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1 bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 text-xs font-bold rounded-full border border-amber-300 dark:border-amber-800">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MASYARAKAT & MATA PENCAHARIAN ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Info Card */}
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-slate-50 to-primary-50/30 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-[var(--shadow-card)]">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  {t?.profilFull?.sec5Title || "Karakteristik Masyarakat"}
                </h3>
                <div className="space-y-4">
                  {(t?.profilFull?.sec5Chars || [
                    { title: "Heterogen & Majemuk", desc: "Masyarakat Kecamatan Pringkuku dikenal heterogen dengan latar belakang sosial ekonomi dan tingkat pendidikan yang beragam." },
                    { title: "Agraris & Pariwisata", desc: "Sebagian besar berprofesi sebagai petani, namun sektor pariwisata kini juga menjadi sumber pendapatan utama berkat Pantai Srau." },
                    { title: "Ramah & Terbuka", desc: "Masyarakat sangat ramah terhadap pendatang, mahasiswa KKN, dan wisatawan. Nilai gotong royong masih sangat kuat." },
                    { title: "Transformasi Ekonomi", desc: "Desa Candi mengalami transformasi dari desa berbasis agraris menjadi desa yang juga mengandalkan potensi wisata bahari." },
                  ]).map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-100">{item.title}</p>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5 text-justify">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-3 bg-primary-50 dark:bg-primary-900/30 px-4 py-1.5 rounded-full">
                {t?.profilFull?.sec5RightBadge || "Sosial & Ekonomi"}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-5">
                {t?.profilFull?.sec5RightTitle || "Kehidupan"}{" "}
                <span className="gradient-text">{t?.profilFull?.sec5RightHighlight || "Masyarakat"}</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                <p>{t?.profilFull?.sec5P1 || "Masyarakat Dusun Tlogomoyo dan Desa Candi secara umum hidup harmonis dengan alam. Pertanian tetap menjadi tulang punggung ekonomi terutama budidaya singkong, empon-empon, kelapa, serta tanaman hortikultura."}</p>
                <p>{t?.profilFull?.sec5P2 || "Seiring berkembangnya sektor pariwisata di kawasan Pantai Srau, banyak warga yang kini juga berperan sebagai pelaku usaha wisata dari pedagang, penyedia jasa penginapan, hingga pemandu wisata lokal. Transformasi ini membawa dampak positif bagi peningkatan kesejahteraan masyarakat."}</p>
                <p>{t?.profilFull?.sec5P3 || "Kecamatan Pringkuku tercatat memiliki penduduk sekitar 32.347 jiwa (data 2024), tersebar di 13 desa dengan karakteristik demografis yang beragam. Desa Candi sendiri terdiri dari 15 dusun, dengan Tlogomoyo sebagai salah satu dusun yang aktif dalam berbagai program pembangunan dan pemberdayaan."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STRUKTUR ORGANISASI PEMERINTAHAN ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 hero-pattern border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-100/60 dark:bg-primary-900/40 px-4 py-1.5 rounded-full border border-primary-200 dark:border-primary-800">
              {t?.profilFull?.sec6Badge || "Kelembagaan & Tokoh Masyarakat"}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              {t?.profilFull?.sec6Title || "Struktur Organisasi"} <span className="gradient-text">{t?.profilFull?.sec6Highlight || "Pemerintahan Dusun"}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed text-center">
              {t?.profilFull?.sec6Desc || "Pemerintahan Dusun Tlogomoyo berada di bawah naungan Pemerintah Desa Candi. Berikut adalah jajaran jembatan pemangku wilayah yang senantiasa bergotong royong melayani warga."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {(t?.profilFull?.govCards || [
              { jabatan: "Kepala Desa Candi", nama: "Pemerintah Desa Candi", desc: "Pemimpin tertinggi tingkat desa di Kecamatan Pringkuku yang membawahi 15 dusun, termasuk Dusun Tlogomoyo.", badge: "Pembina Wilayah" },
              { jabatan: "Kepala Dusun (Kasun)", nama: "Bapak Kepala Dusun Tlogomoyo", desc: "Koordinator utama pemangku wilayah Dusun Tlogomoyo yang menjadi ujung tombak pelayanan administrasi & aspirasi masyarakat.", badge: "Pimpinan Dusun" },
              { jabatan: "Ketua Rukun Warga (RW)", nama: "Ketua RW Dusun Tlogomoyo", desc: "Koordinator ketertiban lingkungan dan jembatan komunikasi antar-RT di seluruh wilayah pedukuhan Tlogomoyo.", badge: "Koordinator Lingkungan" },
              { jabatan: "Ketua RT 01", nama: "Pengurus Wilayah RT 01", desc: "Membawahi dan melayani 35 Kepala Keluarga (KK) di sektor wilayah selatan/barat Dusun Tlogomoyo.", badge: "35 Kepala Keluarga" },
              { jabatan: "Ketua RT 02", nama: "Pengurus Wilayah RT 02", desc: "Membawahi dan melayani 36 Kepala Keluarga (KK) di sektor wilayah utara/timur Dusun Tlogomoyo.", badge: "36 Kepala Keluarga" },
              { jabatan: "Kelompok Tani", nama: "Nuju Makmur XII", desc: "Motor penggerak ketahanan pangan, budidaya singkong, dan empon-empon organik penopang perekonomian warga.", badge: "Lembaga Agraris" },
            ]).map((item, i) => {
              const styles = [
                { color: "from-amber-400 to-orange-600", icon: "🏛️" },
                { color: "from-emerald-400 to-teal-700", icon: "👑" },
                { color: "from-blue-400 to-indigo-600", icon: "🤝" },
                { color: "from-purple-400 to-indigo-700", icon: "🏘️" },
                { color: "from-teal-400 to-emerald-700", icon: "🏡" },
                { color: "from-red-400 to-rose-600", icon: "🌾" },
              ][i] || { color: "from-amber-400 to-orange-600", icon: "⭐" };
              return (
                <div key={i} className="group bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:border-primary-400 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r sm:w-full" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${styles.color} flex items-center justify-center text-3xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 text-white mt-2`}>
                    {styles.icon}
                  </div>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-full mb-2 tracking-wider uppercase">{item.badge}</span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1">{item.jabatan}</h3>
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3">{item.nama}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-center">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INFOGRAFIS DATA KEPENDUDUKAN (OPEN DATA) ===== */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 dark:bg-primary-900/30 px-4 py-1.5 rounded-full border border-primary-200 dark:border-primary-800">
              {t?.profilFull?.sec7Badge || "Open Data Desa"}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              {t?.profilFull?.sec7Title || "Infografis Demografi"} <span className="gradient-text">{t?.profilFull?.sec7Highlight || "Dusun Tlogomoyo"}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-center">
              {t?.profilFull?.sec7Desc || "Transparansi data statistik kependudukan warga Dusun Tlogomoyo berdasarkan pemutakhiran direktori wilayah RT 01 dan RT 02."}
            </p>
          </div>

          {/* Infografis 4 Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-6xl mx-auto">
            {(t?.profilFull?.infografis || [
              { label: "Total Jiwa", val: "~190 Jiwa", desc: "Estimasi penduduk aktif" },
              { label: "Kepala Keluarga", val: "71 KK", desc: "35 KK (RT 01) + 36 KK (RT 02)" },
              { label: "Rukun Tetangga", val: "2 RT Aktif", desc: "Partisipasi gotong royong 100%" },
              { label: "Sektor Unggulan", val: "Pertanian", desc: "Singkong, Padi, Kelapa, Jagung, Pisang" },
            ]).map((stat, idx) => {
              const styles = [
                { icon: "👥", bg: "from-blue-500/10 to-indigo-500/10", border: "border-blue-200 dark:border-blue-800", text: "text-blue-600 dark:text-blue-400" },
                { icon: "🏡", bg: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-200 dark:border-emerald-800", text: "text-emerald-600 dark:text-emerald-400" },
                { icon: "📍", bg: "from-amber-500/10 to-orange-500/10", border: "border-amber-200 dark:border-amber-800", text: "text-amber-600 dark:text-amber-400" },
                { icon: "🌾", bg: "from-purple-500/10 to-pink-500/10", border: "border-purple-200 dark:border-purple-800", text: "text-purple-600 dark:text-purple-400" },
              ][idx] || { icon: "📊", bg: "from-blue-500/10 to-indigo-500/10", border: "border-blue-200 dark:border-blue-800", text: "text-blue-600 dark:text-blue-400" };
              return (
                <div key={idx} className={`rounded-3xl p-6 bg-gradient-to-br ${styles.bg} border ${styles.border} flex flex-col justify-between shadow-lg`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{styles.icon}</span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${styles.text}`}>{stat.label}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{stat.val}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{stat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              {t?.profilFull?.dirTitle || "Direktori Kepala Keluarga"} <span className="gradient-text">{t?.profilFull?.dirHighlight || "RT 01 & RT 02"}</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              {t?.profilFull?.dirDesc || "Daftar pemangku rumah tangga yang menjadi penopang kerukunan antarwarga."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* RT 01 Card */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-black text-xl shadow-md">
                    01
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">{t?.profilFull?.rt1Title || "Wilayah RT 01"}</h3>
                    <p className="text-xs text-slate-500 font-medium">{t?.profilFull?.rt1Sub || "35 Kepala Keluarga"}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold">{t?.profilFull?.rtActive || "Aktif"}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
                {[
                  "Tuirin", "Tusirah", "Yamti", "Wakiyem", "Ponidi", "Suparno", "Sutarno", "Parnen", "Suparmi", "Sunarto",
                  "Tusiran", "Haryanti", "Suharto", "Sarno", "Suyanto", "Sutilah", "Sokiyem", "Siram", "Sukiman", "Tusiran",
                  "Salbani", "Paiyem", "Boinah", "Wagiran", "Wonimin", "Katemi", "Boyadi", "Sokiran", "Yati", "Mujiatin",
                  "Etik", "Surono", "Siti. A.", "Sugito", "Sugiyanto"
                ].map((name, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-800/80 px-3.5 py-2.5 rounded-xl border border-slate-100 dark:border-slate-700/60 shadow-sm hover:border-primary-300 transition-colors">
                    <span className="w-6 text-right text-xs font-mono font-bold text-slate-400">{idx + 37}.</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RT 02 Card */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-black text-xl shadow-md">
                    02
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">{t?.profilFull?.rt2Title || "Wilayah RT 02"}</h3>
                    <p className="text-xs text-slate-500 font-medium">{t?.profilFull?.rt2Sub || "36 Kepala Keluarga"}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-bold">{t?.profilFull?.rtActive || "Aktif"}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
                {[
                  "Hairani", "Sukatman", "Rasidin", "Sugiarto", "Kadiyat", "Wasono", "Tumirah", "Mameni", "Sumadi", "Supadi",
                  "Pawito", "Riswanto", "Woniran", "Sardi", "Sumarlan", "Jumiati", "Suwito", "Nanang I.", "Samino", "Yudi",
                  "Saidi", "Tumino", "Sukadi", "Parno", "Katirun", "Suryanto", "Jumingan", "Bambang", "Tumiran", "Dwi",
                  "Agus", "Purwanto", "Joko", "Tukino", "Poiman", "Samidi"
                ].map((name, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-800/80 px-3.5 py-2.5 rounded-xl border border-slate-100 dark:border-slate-700/60 shadow-sm hover:border-emerald-300 transition-colors">
                    <span className="w-6 text-right text-xs font-mono font-bold text-slate-400">{idx + 1}.</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BOTTOM ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            {t?.profilContent?.ctaHeading || "Tertarik Mengenal Lebih Dekat?"}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-8 text-center">
            {t?.profilContent?.ctaDesc || "Kenali lebih jauh tentang kegiatan kemahasiswaan dan program kerja (Proker) KKN yang telah dan sedang berlangsung di Dusun Tlogomoyo."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/info-kkn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            >
              {t?.profilContent?.ctaTitle || "Tentang KKN & Proker Kami"}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white hover:text-slate-900 dark:bg-slate-800/20 transition-all duration-300 text-sm sm:text-base"
            >
              {t?.profilContent?.ctaBack || "Kembali ke Beranda"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
