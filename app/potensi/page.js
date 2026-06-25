export const metadata = {
  title: "Potensi & UMKM Dusun Tlogomoyo Pacitan",
  description:
    "Jelajahi potensi luar biasa dari Dusun Tlogomoyo, mulai dari hasil pertanian organik, kerajinan tangan lokal, hingga produk UMKM unggulan yang menggerakkan ekonomi warga.",
};

export default function PotensiUMKM() {
  const potensiList = [
    {
      id: "pertanian",
      title: "Hasil Pertanian & Perkebunan",
      desc: "Tanah Tlogomoyo yang subur menghasilkan berbagai komoditas unggulan seperti singkong, empon-empon (jahe, kunyit, temulawak), kelapa, dan sayuran organik. Hasil bumi ini menjadi tulang punggung perekonomian sebagian besar warga.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-amber-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1592982537447-6f2c6a0c5f21?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "makanan",
      title: "Olahan Pangan Lokal",
      desc: "Warga dusun aktif mengolah hasil panen menjadi produk bernilai jual lebih tinggi. Terdapat UMKM pembuat keripik singkong, gula aren, jamu tradisional, dan berbagai penganan khas pedesaan yang lezat dan sehat.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      ),
      color: "from-red-400 to-rose-600",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "kerajinan",
      title: "Kerajinan Tangan",
      desc: "Keterampilan tangan warga Tlogomoyo menghasilkan produk kerajinan anyaman bambu, peralatan dapur tradisional, hingga hiasan dekoratif yang bernilai seni tinggi. Produk ini sering dijadikan cinderamata khas.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      color: "from-blue-400 to-indigo-600",
      image: "https://images.unsplash.com/photo-1615822359434-58a4369a473d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "peternakan",
      title: "Peternakan Rakyat",
      desc: "Sebagian warga juga mengelola peternakan skala rumah tangga seperti ayam kampung, kambing, dan sapi. Peternakan ini memberikan kontribusi yang stabil terhadap pemenuhan gizi dan pendapatan keluarga.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      ),
      color: "from-emerald-400 to-teal-600",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 selection:bg-primary-200 selection:text-primary-900 pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-white dark:bg-slate-800" />
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-primary-50/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-accent-200/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100/50 border border-primary-200 text-primary-700 text-sm font-medium mb-6 animate-fade-in-up">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Ekonomi Kreatif & Agrikultur
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Potensi & UMKM <br className="hidden sm:block" />
            <span className="gradient-text">Dusun Tlogomoyo</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed animate-fade-in-up text-center" style={{ animationDelay: "200ms" }}>
            Jelajahi kekayaan alam dan kreativitas masyarakat Dusun Tlogomoyo. Dari hasil bumi yang melimpah hingga kerajinan tangan yang memukau.
          </p>
        </div>
      </section>

      {/* Potensi Grid Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 lg:-mt-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {potensiList.map((item, index) => (
            <div 
              key={item.id}
              className="group bg-white dark:bg-slate-800 rounded-3xl p-2 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                <div className={`absolute top-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white font-heading">
                  {item.title}
                </h3>
              </div>
              <div className="px-6 pb-8 flex-1">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
