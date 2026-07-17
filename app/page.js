"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import WeatherWidget from "@/components/WeatherWidget";
import InteractiveMap from "@/components/InteractiveMap";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden hero-pattern">
        {/* Hero Background Image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img src="/images/hero.png" alt="Dusun Tlogomoyo Pacitan" className="w-full h-full object-cover object-center opacity-55 dark:opacity-35 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/20 dark:from-slate-900/95 dark:via-slate-900/80 dark:to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-900" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-primary-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-accent-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary-300/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.8s" }} />

          {/* Dot pattern on the right */}
          <div className="absolute top-20 right-0 w-64 h-64 dot-pattern opacity-30 hidden lg:block" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 shadow-sm mb-6 sm:mb-8">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-primary-700 tracking-wide">
                  {t.hero.badge}
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5 sm:mb-6">
                <span className="text-slate-900 dark:text-white">{t.hero.welcome}</span>
                <br />
                <span className="gradient-text">{t.hero.hamletName}</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-8 sm:mb-10 text-justify">
                {t.hero.desc}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#tentang"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
                >
                  {t.hero.btnPotential}
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
                </a>
              </div>
              {/* Stats Row */}
              <div className="mt-10 sm:mt-12 flex items-center gap-6 sm:gap-8">
                {[
                  { value: "~190", label: t.hero.stats.pop },
                  { value: "71 KK", label: t.hero.stats.kk },
                  { value: "~650 ha", label: t.hero.stats.lahan },
                ].map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <p className="text-xl sm:text-2xl font-extrabold text-primary-700">
                      {stat.value}
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Illustration / Decorative Card */}
            <div className="flex justify-center items-center mt-10 lg:mt-0">
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-3xl blur-2xl scale-110" />

                {/* Main card */}
                <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-primary-100 dark:border-slate-700 shadow-2xl overflow-hidden max-w-md">
                  {/* Image banner inside card */}
                  <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden group">
                    <img src="/images/hero.png" alt="Panorama Tlogomoyo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                      <span className="px-2.5 py-1 bg-primary-600/90 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider">Pacitan</span>
                      <span className="text-xs font-medium opacity-90">{t?.heroCard?.province || "Jawa Timur"}</span>
                    </div>
                  </div>

                  {/* Top decoration */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">{t?.heroCard?.title || "Profil Dusun"}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{t?.heroCard?.location || "Tlogomoyo, Pacitan"}</p>
                    </div>
                  </div>

                  {/* Info items */}
                  <div className="space-y-3">
                    {(t?.heroCard?.items || [
                      { name: "Potensi Pertanian", detail: "Singkong, Empon-empon, Kelapa" },
                      { name: "Lokasi Strategis", detail: "Jawa Timur, Indonesia" },
                      { name: "Masyarakat Ramah", detail: "Gotong Royong & Budaya Lokal" },
                    ]).map((item, i) => {
                      const colors = [
                        "from-emerald-400 to-emerald-600",
                        "from-blue-400 to-blue-600",
                        "from-amber-400 to-amber-600",
                      ];
                      return (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700 hover:bg-primary-50 dark:hover:bg-slate-700/80 transition-colors duration-200 shadow-sm"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${colors[i % colors.length]} rounded-lg flex items-center justify-center shrink-0`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-slate-800 dark:text-white truncate">{item.name}</p>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-300">{item.detail}</p>
                        </div>
                      </div>
                      );
                    })}
                  </div>

                  {/* Bottom stat */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-400">{t?.heroCard?.openFor || t?.heroBottom?.openFor || "Terbuka untuk"}</p>
                      <p className="text-lg font-extrabold text-primary-700">{t?.heroCard?.kknVisit || t?.heroBottom?.kknVisit || "KKN & Kunjungan"}</p>
                    </div>
                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SAMBUTAN KEPALA DUSUN ===== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 z-20 mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-white/95 via-white/90 to-primary-50/80 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-primary-200/60 dark:border-primary-500/20 shadow-2xl shadow-primary-900/10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center text-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-700 bg-gradient-to-br from-primary-400 to-primary-700 p-1 mb-4 group">
              <img src="/images/kepala-dusun.jpg" alt="Kepala Dusun Tlogomoyo" className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-2xl" />
            </div>
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 rounded-full text-xs font-bold tracking-wider uppercase mb-1">{t?.sambutan?.role || "Kepala Dusun"}</span>
            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">{t?.sambutan?.name || "Bapak Kepala Dusun"}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t?.sambutan?.gov || "Pemerintah Dusun Tlogomoyo"}</p>
          </div>
          <div className="md:col-span-8 lg:col-span-9 space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-semibold">
              <span>{t?.sambutan?.badge || "👑 Pesan & Sambutan Resmi"}</span>
            </div>
            <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed italic text-justify border-l-4 border-primary-500 pl-4 py-1">
              &ldquo;{t?.sambutan?.quote || "Assalamu'alaikum Warahmatullahi Wabarakatuh. Salam sejahtera bagi kita semua. Selamat datang di Portal Informasi Digital Resmi Dusun Tlogomoyo, Desa Candi. Website ini dihadirkan sebagai wujud digitalisasi dan jembatan informasi bagi masyarakat serta wisatawan yang ingin mengenal potensi pertanian, keindahan Pantai Srau, dan keramahan warga kami."}&rdquo;
            </blockquote>
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-700/80">
              <span className="text-xs text-slate-400 font-medium">{t?.sambutan?.footer || "Dipersembahkan dalam rangka kemajuan & transparansi dusun"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WEATHER WIDGET SECTION ===== */}
      <WeatherWidget />

      {/* ===== TENTANG DUSUN SECTION ===== */}
      <section id="tentang" className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-800">
        {/* Section decoration */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              {t?.homeSections?.potensiBadge || "Profil Dusun"}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              {t?.homeSections?.potensiTitle || "Mengenal Tlogomoyo"}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-center">
              {t?.homeSections?.potensiDesc || "Dusun Tlogomoyo merupakan bagian dari Desa Candi, Kecamatan Pringkuku, Kabupaten Pacitan, Jawa Timur. Dusun ini memiliki beragam potensi yang menjadikannya unik dan menarik."}
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                image: "/images/pertanian.jpg",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 8.25 4.69a7.5 7.5 0 0 1 3.75-1.69z" />
                ),
                title: t?.homeSections?.cards?.[0]?.title || "Potensi Pertanian",
                desc: t?.homeSections?.cards?.[0]?.desc || "Dusun Tlogomoyo kaya akan hasil pertanian seperti singkong, empon-empon organik, kelapa, dan produk turunannya. Komoditas ini menjadi tulang punggung perekonomian masyarakat setempat.",
                gradient: "from-emerald-100 to-emerald-200",
                iconColor: "text-emerald-700 dark:text-emerald-400",
              },
              {
                image: "/images/peternakan.jpg",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                ),
                title: t?.homeSections?.cards?.[1]?.title || "Masyarakat & Budaya",
                desc: t?.homeSections?.cards?.[1]?.desc || "Masyarakat Tlogomoyo dikenal ramah dan menjunjung tinggi nilai gotong royong. Tradisi dan kearifan lokal tetap terjaga di tengah perkembangan zaman modern.",
                gradient: "from-amber-100 to-amber-200",
                iconColor: "text-amber-700 dark:text-amber-400",
              },
              {
                image: "/images/kerajinan.jpg",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                ),
                title: t?.homeSections?.cards?.[2]?.title || "Terbuka untuk KKN",
                desc: t?.homeSections?.cards?.[2]?.desc || "Dusun Tlogomoyo menyambut baik program KKN dari berbagai perguruan tinggi. Kolaborasi antara akademisi dan masyarakat telah menciptakan dampak positif yang berkelanjutan.",
                gradient: "from-blue-100 to-blue-200",
                iconColor: "text-blue-700 dark:text-blue-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up overflow-hidden flex flex-col"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
              >
                <div className="relative h-48 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className={`absolute bottom-3 left-4 w-10 h-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg`}>
                    <svg className={`w-5 h-5 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {item.icon}
                    </svg>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEUNGGULAN / POTENSI SECTION ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-earth-50 dark:bg-slate-900 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              {t?.homeSections?.keunggulanBadge || "Keunggulan"}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              {t?.homeSections?.keunggulanTitle || "Mengapa Tlogomoyo?"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                ),
                title: t?.homeSections?.keunggulanCards?.[0]?.title || "Lokasi Strategis",
                desc: t?.homeSections?.keunggulanCards?.[0]?.desc || "Terletak di Kabupaten Pacitan, Jawa Timur daerah yang dikenal dengan keindahan alamnya. Akses menuju dusun dapat ditempuh dengan mudah dari pusat kota.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                ),
                title: t?.homeSections?.keunggulanCards?.[1]?.title || "Lingkungan Asri & Aman",
                desc: t?.homeSections?.keunggulanCards?.[1]?.desc || "Dikelilingi oleh perbukitan hijau dan udara segar. Lingkungan yang tenang dan aman menjadikan dusun ini cocok untuk kegiatan akademik, penelitian, dan KKN.",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97M5.25 4.97l-2.62 10.726c-.122.499.106 1.028.589 1.202a5.989 5.989 0 0 0 2.031.352 5.989 5.989 0 0 0 2.031-.352c.483-.174.711-.703.59-1.202L5.25 4.97" />
                ),
                title: t?.homeSections?.keunggulanCards?.[2]?.title || "Kearifan Lokal",
                desc: t?.homeSections?.keunggulanCards?.[2]?.desc || "Tradisi dan adat istiadat masyarakat yang masih terjaga memberikan pengalaman otentik bagi siapa pun yang berkunjung dan ingin belajar tentang kehidupan pedesaan.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE MAP SECTION ===== */}
      <InteractiveMap />
    </>
  );
}
