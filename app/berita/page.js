import Link from "next/link";
import { daftarBerita } from "@/data/berita";

export const metadata = {
  title: "Berita & Pengumuman - Dusun Tlogomoyo",
  description: "Dapatkan informasi terbaru, pengumuman kegiatan, dan berita seputar Dusun Tlogomoyo, Desa Candi.",
};

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      {/* Header Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="absolute inset-0 hero-pattern opacity-50 dark:opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-3 bg-primary-50 dark:bg-primary-900/30 px-4 py-1.5 rounded-full">
            Informasi Terkini
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Berita & <span className="gradient-text">Pengumuman</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            Ikuti perkembangan terbaru, kegiatan warga, dan berbagai informasi penting seputar Dusun Tlogomoyo.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarBerita.map((berita, index) => (
            <article 
              key={berita.id} 
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700/80 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <Link href={`/berita/${berita.id}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={berita.image} 
                    alt={berita.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                    {berita.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {berita.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">
                    {berita.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-primary-600 dark:text-primary-400 text-sm font-semibold group/btn">
                    Baca Selengkapnya
                    <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {daftarBerita.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Belum ada berita</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Nantikan informasi terbaru dari kami.</p>
          </div>
        )}
      </section>
    </main>
  );
}
