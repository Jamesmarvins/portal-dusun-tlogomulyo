import { daftarBerita } from "@/data/berita";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate metadata dynamically
export function generateMetadata({ params }) {
  const berita = daftarBerita.find((b) => b.id === params.slug);
  
  if (!berita) {
    return {
      title: "Berita Tidak Ditemukan - Dusun Tlogomoyo",
    };
  }

  return {
    title: `${berita.title} - Dusun Tlogomoyo`,
    description: berita.excerpt,
  };
}

export default function BeritaDetail({ params }) {
  const berita = daftarBerita.find((b) => b.id === params.slug);

  if (!berita) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link 
          href="/berita" 
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors mb-8 group"
        >
          <svg className="w-5 h-5 mr-1.5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Daftar Berita
        </Link>

        {/* Article Header */}
        <header className="mb-10 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Kabar Dusun
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {berita.date}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            {berita.title}
          </h1>
        </header>

        {/* Featured Image */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl mb-12 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <img 
            src={berita.image} 
            alt={berita.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg sm:prose-xl dark:prose-invert prose-primary max-w-none text-slate-700 dark:text-slate-300 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          {berita.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            return (
              <p key={index} className="mb-6 leading-relaxed text-justify">
                {paragraph.trim()}
              </p>
            );
          })}
        </article>

        {/* Social Share / Footer */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Bagikan artikel ini:
          </p>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
