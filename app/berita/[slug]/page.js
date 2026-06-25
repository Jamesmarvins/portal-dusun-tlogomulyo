import { daftarBerita } from "@/data/berita";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons";

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const berita = daftarBerita.find((b) => b.id === resolvedParams.slug);
  
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

export default async function BeritaDetail({ params }) {
  const resolvedParams = await params;
  const berita = daftarBerita.find((b) => b.id === resolvedParams.slug);

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
          <ShareButtons title={berita.title} />
        </div>
      </div>
    </main>
  );
}
