export const metadata = {
  title: "Tentang Dusun & Info KKN — Dusun Tlogomulyo",
  description:
    "Informasi lengkap tentang Dusun Tlogomulyo, Desa Candi, Kab. Pacitan. Termasuk panduan KKN, prosedur perizinan, persyaratan, dan kontak resmi perangkat desa.",
};

export default function InfoKKNPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="animate-fade-in-up">
            {/* Breadcrumb */}
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
                <li className="text-white font-medium">Tentang & KKN</li>
              </ol>
            </nav>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Tentang Dusun & Info KKN
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Halaman ini berisi informasi bagi Anda yang ingin mengenal
              lebih dalam tentang Dusun Tlogomulyo, termasuk panduan
              Kuliah Kerja Nyata (KKN) bagi perguruan tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-earth-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10">
            {/* Card 1: Tentang KKN */}
            <article className="bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] overflow-hidden animate-fade-in-up">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 sm:px-8 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Tentang KKN di Dusun Tlogomulyo
                  </h2>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  Dusun Tlogomulyo menyambut baik program Kuliah Kerja Nyata
                  (KKN) dari berbagai perguruan tinggi. Kami percaya bahwa
                  kolaborasi antara akademisi dan masyarakat desa dapat
                  menciptakan dampak positif yang berkelanjutan.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Program KKN di dusun kami difokuskan pada beberapa bidang
                  prioritas:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Pemberdayaan UMKM & digitalisasi pemasaran komoditas desa",
                    "Pendampingan literasi keuangan untuk pelaku usaha lokal",
                    "Pengembangan infrastruktur informasi desa",
                    "Edukasi kesehatan dan lingkungan kepada masyarakat",
                    "Pendampingan pendidikan anak usia sekolah",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-600"
                    >
                      <svg className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Card 2: Prosedur Perizinan */}
            <article className="bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] overflow-hidden animate-fade-in-up">
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 px-6 sm:px-8 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Prosedur Perizinan KKN
                  </h2>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Berikut adalah alur resmi pengajuan izin pelaksanaan KKN di
                  Dusun Tlogomulyo. Pastikan semua persyaratan dipenuhi sebelum
                  mengajukan permohonan.
                </p>

                {/* Steps */}
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Surat Permohonan Resmi",
                      desc: "Universitas menerbitkan surat permohonan KKN resmi yang ditujukan kepada Kepala Desa/Lurah. Surat harus mencantumkan: nama universitas, jumlah mahasiswa, rencana periode pelaksanaan, dan bidang fokus KKN.",
                    },
                    {
                      step: "02",
                      title: "Pengajuan ke Kelurahan / Kantor Desa",
                      desc: "Surat permohonan diserahkan ke kantor desa melalui Dosen Pembimbing Lapangan (DPL). Pihak desa akan melakukan verifikasi dan meneruskan ke Kepala Dusun Tlogomulyo.",
                    },
                    {
                      step: "03",
                      title: "Koordinasi dengan Kepala Dusun",
                      desc: "Setelah surat disetujui oleh desa, DPL wajib melakukan koordinasi langsung dengan Kepala Dusun untuk membahas detail program, lokasi penginapan, dan jadwal kegiatan.",
                    },
                    {
                      step: "04",
                      title: "Rapat Teknis Pra-KKN",
                      desc: "Dilaksanakan minimal 2 minggu sebelum KKN dimulai. Rapat membahas pembagian wilayah, program kerja prioritas, norma dan adat setempat, serta mekanisme pelaporan kegiatan.",
                    },
                    {
                      step: "05",
                      title: "Pelaksanaan & Pelaporan",
                      desc: "KKN dilaksanakan sesuai jadwal yang disepakati. Tim KKN wajib membuat laporan mingguan kepada Kepala Dusun dan menyerahkan laporan akhir setelah program selesai.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 sm:gap-5 group">
                      {/* Step number */}
                      <div className="shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center border border-primary-200 group-hover:from-primary-200 group-hover:to-primary-300 transition-colors duration-300">
                          <span className="text-sm sm:text-base font-extrabold text-primary-700">
                            {item.step}
                          </span>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                        <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Card 3: Persyaratan Dokumen */}
            <article className="bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] overflow-hidden animate-fade-in-up">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 sm:px-8 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Persyaratan Dokumen
                  </h2>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                  Dokumen berikut wajib disiapkan oleh pihak universitas
                  sebelum mengajukan permohonan KKN:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Surat Permohonan KKN dari Universitas",
                    "Surat Tugas Dosen Pembimbing Lapangan",
                    "Daftar Nama Mahasiswa Peserta KKN",
                    "Fotokopi KTP / Kartu Mahasiswa",
                    "Proposal Rencana Program Kerja",
                    "Surat Keterangan Sehat dari Dokter",
                    "Surat Pernyataan Menaati Peraturan Desa",
                    "Polis Asuransi Kecelakaan (jika ada)",
                  ].map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100"
                    >
                      <svg className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-slate-600">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Card 4: Kontak Resmi */}
            <article className="bg-white rounded-2xl border border-slate-200/80 shadow-[var(--shadow-card)] overflow-hidden animate-fade-in-up">
              <div className="bg-gradient-to-r from-primary-700 to-primary-800 px-6 sm:px-8 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Kontak Resmi Dusun
                  </h2>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Untuk pertanyaan lebih lanjut atau pengajuan KKN, silakan
                  hubungi kontak resmi berikut:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Contact Card 1 */}
                  <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-5 border border-primary-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">
                          Kepala Dusun Tlogomulyo
                        </p>
                        <p className="text-xs text-slate-500">
                          Koordinator Penerimaan KKN
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        +62 812-XXXX-XXXX
                      </p>
                      <p className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        kadus.tlogomulyo@desa.id
                      </p>
                    </div>
                  </div>

                  {/* Contact Card 2 */}
                  <div className="bg-gradient-to-br from-accent-400/10 to-white rounded-xl p-5 border border-accent-400/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-accent-400/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">
                          Kantor Kelurahan / Desa
                        </p>
                        <p className="text-xs text-slate-500">
                          Administrasi & Surat Menyurat
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        +62 813-XXXX-XXXX
                      </p>
                      <p className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Senin—Jumat, 08.00—15.00 WIB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Note */}
                <div className="mt-6 bg-amber-50 rounded-xl p-4 sm:p-5 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-amber-800 mb-1">
                        Penting Diperhatikan
                      </p>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        Pengajuan KKN minimal dilakukan{" "}
                        <strong>1 bulan sebelum</strong> tanggal pelaksanaan
                        yang direncanakan. Pihak dusun berhak menolak permohonan
                        jika dokumen tidak lengkap atau jadwal berbenturan
                        dengan agenda desa lainnya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
