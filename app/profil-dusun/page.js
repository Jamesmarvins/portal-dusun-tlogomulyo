import Link from "next/link";

export const metadata = {
  title: "Profil Dusun Tlogomoyo Geografi, Budaya & Potensi Desa",
  description:
    "Informasi lengkap tentang Dusun Tlogomoyo, Desa Candi, Kecamatan Pringkuku, Kabupaten Pacitan. Geografi, demografi, potensi pertanian, budaya & tradisi, serta destinasi wisata sekitar.",
};

export default function ProfilDusunPage() {
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
          <div className="animate-fade-in-up">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-primary-200">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </li>
                <li className="text-white font-medium">Profil Dusun</li>
              </ol>
            </nav>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Profil Dusun{" "}
              <span className="text-accent-400">Tlogomoyo</span>
            </h1>
            <p className="text-base sm:text-lg text-primary-100 max-w-2xl leading-relaxed text-justify">
              Mengenal lebih dekat Dusun Tlogomoyo geografi, sejarah,
              kekayaan budaya, potensi pertanian, serta destinasi wisata
              di sekitarnya. Sebuah dusun yang asri di jantung Pacitan selatan.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {[
              { value: "Pacitan", label: "Kabupaten", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
              { value: "Pringkuku", label: "Kecamatan", icon: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" },
              { value: "Candi", label: "Desa", icon: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
              { value: "Jawa Timur", label: "Provinsi", icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/15 transition-colors duration-300"
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
      <section className="py-14 sm:py-18 lg:py-22 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
                Geografi & Topografi
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-5">
                Letak Geografis{" "}
                <span className="gradient-text">Tlogomoyo</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                <p>
                  Dusun Tlogomoyo terletak di <strong>Desa Candi</strong>, Kecamatan Pringkuku,
                  Kabupaten Pacitan, Provinsi Jawa Timur. Desa Candi sendiri berjarak sekitar{" "}
                  <strong>10 km dari ibu kota kecamatan</strong> dan merupakan salah satu desa
                  yang memiliki cakupan wilayah cukup luas di Kecamatan Pringkuku.
                </p>
                <p>
                  Topografi wilayah ini didominasi oleh <strong>pegunungan berbatu</strong> yang
                  merupakan bagian dari bentang alam <strong>Pegunungan Seribu</strong> (Gunung Sewu).
                  Di sisi selatan, Desa Candi berbatasan langsung dengan <strong>Samudera Indonesia</strong>,
                  menciptakan perpaduan lanskap perbukitan hijau dan pantai yang memukau.
                </p>
                <p>
                  Koordinat geografis dusun berada di sekitar <strong>8.2239°S, 111.0172°E</strong>,
                  dengan ketinggian bervariasi dari pesisir hingga perbukitan.
                </p>
              </div>
            </div>

            {/* Batas Wilayah Card */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-to-br from-primary-50 to-earth-50 rounded-2xl p-6 sm:p-8 border border-primary-100 shadow-[var(--shadow-card)]">
                <h3 className="font-heading text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                  Batas Wilayah Desa Candi
                </h3>
                <div className="space-y-3">
                  {[
                    { arah: "Utara", batas: "Desa Pringkuku", icon: "↑", color: "from-blue-100 to-blue-200 text-blue-700" },
                    { arah: "Timur", batas: "Desa Poko", icon: "→", color: "from-emerald-100 to-emerald-200 text-emerald-700" },
                    { arah: "Selatan", batas: "Samudera Indonesia", icon: "↓", color: "from-cyan-100 to-cyan-200 text-cyan-700" },
                    { arah: "Barat", batas: "Desa Jlubang", icon: "←", color: "from-amber-100 to-amber-200 text-amber-700" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white rounded-xl p-3 border border-slate-100 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center font-bold text-lg shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.arah}</p>
                        <p className="text-sm font-semibold text-slate-700">{item.batas}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Luas Wilayah Kecamatan */}
                <div className="mt-5 pt-5 border-t border-primary-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Luas Kecamatan Pringkuku</p>
                      <p className="text-xl font-extrabold text-primary-700">~132,93 km²</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Jumlah Desa</p>
                      <p className="text-xl font-extrabold text-primary-700">13 Desa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POTENSI PERTANIAN & PENGGUNAAN LAHAN ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-earth-50 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              Pertanian & Sumber Daya Alam
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Kekayaan Alam{" "}
              <span className="gradient-text">Tlogomoyo</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-justify">
              Topografi perbukitan yang subur menjadikan wilayah ini kaya akan beragam
              komoditas pertanian dan hasil bumi. Masyarakat Tlogomoyo juga aktif berorganisasi dalam bidang agraris, salah satunya melalui keberadaan kelompok tani (seperti Kelompok Tani Nuju Makmur XII) yang menjadi motor penggerak ketahanan pangan dan ekonomi warga setempat.
            </p>
          </div>

          {/* Penggunaan Lahan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
            {[
              {
                value: "~650 ha",
                label: "Ladang & Tegalan",
                desc: "Lahan utama untuk bercocok tanam singkong, empon-empon, dan tanaman pangan lainnya.",
                gradient: "from-emerald-500 to-emerald-700",
                bg: "bg-emerald-50",
              },
              {
                value: "~451 ha",
                label: "Hutan Rakyat",
                desc: "Hutan yang dikelola masyarakat, menghasilkan kayu, kelapa, dan produk kehutanan.",
                gradient: "from-primary-500 to-primary-700",
                bg: "bg-primary-50",
              },
              {
                value: "~12,5 ha",
                label: "Lahan Sawah",
                desc: "Area sawah yang relatif kecil namun tetap produktif untuk kebutuhan pangan lokal.",
                gradient: "from-amber-500 to-amber-700",
                bg: "bg-amber-50",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up`}
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
              >
                <div className={`inline-flex items-center justify-center px-3 py-1 rounded-lg bg-gradient-to-r ${item.gradient} mb-4`}>
                  <span className="text-xl sm:text-2xl font-extrabold text-white">{item.value}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-800 mb-2">{item.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed text-justify">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Komoditas Unggulan */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[var(--shadow-card)] animate-fade-in-up">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 8.25 4.69a7.5 7.5 0 0 1 3.75-1.69z" />
                </svg>
              </div>
              Komoditas Unggulan
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Singkong", emoji: "🌿", desc: "Tanaman pangan utama" },
                { name: "Empon-empon", emoji: "🫚", desc: "Rempah organik" },
                { name: "Kelapa", emoji: "🥥", desc: "Buah & minyak" },
                { name: "Buah-buahan", emoji: "🍌", desc: "Pisang, pepaya, dll" },
                { name: "Sayuran", emoji: "🥬", desc: "Sayur segar lokal" },
                { name: "Kayu", emoji: "🪵", desc: "Hasil hutan rakyat" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-slate-50 hover:bg-primary-50 rounded-xl p-4 text-center border border-slate-100 hover:border-primary-200 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                  <p className="text-sm font-semibold text-slate-700">{item.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUDAYA & TRADISI ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              Budaya & Tradisi
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Kearifan Lokal{" "}
              <span className="gradient-text">yang Terjaga</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-justify">
              Masyarakat Tlogomoyo memiliki tradisi dan kesenian yang kaya warisan leluhur
              yang masih hidup dan terus dilestarikan dari generasi ke generasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Tradisi Ammos",
                desc: "Tradisi khas Kecamatan Pringkuku yang menjadi cikal bakal kesenian Kothekan Lesung seni memukul alat penumbuk padi tradisional secara bersamaan. Tradisi ini lahir dari kehidupan agraris dan melambangkan semangat kegotongroyongan masyarakat.",
                gradient: "from-amber-100 to-amber-200",
                iconColor: "text-amber-700",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />,
              },
              {
                title: "Karawitan & Tayub",
                desc: "Kesenian tradisional gamelan Jawa (Karawitan) dan tarian Tayub sering ditampilkan dalam berbagai acara sosial, hajatan, dan perayaan desa. Kesenian ini mempererat kebersamaan dan menjadi wadah ekspresi budaya masyarakat setempat.",
                gradient: "from-rose-100 to-rose-200",
                iconColor: "text-rose-700",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />,
              },
              {
                title: "Ritual Baritan",
                desc: "Upacara tolak bala dan sedekah bumi yang dilakukan sebagai bentuk rasa syukur kepada Tuhan atas hasil panen dan permohonan perlindungan. Ritual ini biasanya disertai pertunjukan seni lokal dan makan bersama seluruh warga.",
                gradient: "from-purple-100 to-purple-200",
                iconColor: "text-purple-700",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97M5.25 4.97l-2.62 10.726c-.122.499.106 1.028.589 1.202a5.989 5.989 0 0 0 2.031.352 5.989 5.989 0 0 0 2.031-.352c.483-.174.711-.703.59-1.202L5.25 4.97" />,
              },
              {
                title: "Gotong Royong",
                desc: "Tradisi kerja bersama yang sangat kuat di Tlogomoyo. Masyarakat rutin bergotong royong dalam kegiatan pembangunan infrastruktur dusun, perbaikan jalan, bersih-bersih lingkungan, hingga membantu tetangga yang mengadakan hajatan.",
                gradient: "from-blue-100 to-blue-200",
                iconColor: "text-blue-700",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />,
              },
              {
                title: "Musik Air Ceklukan",
                desc: "Kesenian unik dari Kali Barong (di wilayah Desa Candi) musik alami yang tercipta dari alunan suara air sungai yang dimainkan oleh 6-7 orang menggunakan teknik tertentu. Seni ini dihidupkan kembali sebagai upaya pelestarian budaya lokal.",
                gradient: "from-cyan-100 to-cyan-200",
                iconColor: "text-cyan-700",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />,
              },
              {
                title: "Istigosah & Keagamaan",
                desc: "Masyarakat rutin mengadakan istigosah (doa bersama) di lokasi-lokasi yang dianggap bersejarah dan sakral. Kegiatan keagamaan ini menjadi perekat sosial dan memperkuat keharmonisan antarwarga dusun.",
                gradient: "from-emerald-100 to-emerald-200",
                iconColor: "text-emerald-700",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-6 h-6 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WISATA SEKITAR ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-earth-50 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              Wisata Sekitar
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Destinasi Wisata di{" "}
              <span className="gradient-text">Sekitar Dusun</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-justify">
              Desa Candi dan sekitarnya menyimpan destinasi wisata alam yang memukau 
              dari pantai berpasir putih hingga sungai di tengah hutan yang sejuk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Pantai Srau Card */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 animate-fade-in-up">
              {/* Header gradient */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏖️</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Pantai Srau</h3>
                    <p className="text-xs text-cyan-100">&quot;Permata Putih&quot; Pacitan Desa Candi</p>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify mb-5">
                  Pantai Srau merupakan destinasi wisata unggulan Kabupaten Pacitan yang terletak di
                  Desa Candi. Kawasan pantai ini terbagi menjadi <strong>tiga area</strong> yang dipisahkan
                  oleh bukit karang, masing-masing dengan karakteristik unik.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Pasir Putih", detail: "Halus & bersih" },
                    { label: "Karang Bolong", detail: "Ikon foto favorit" },
                    { label: "Jarak", detail: "~45 menit dari kota" },
                    { label: "Aktivitas", detail: "Surfing, camping, dll" },
                  ].map((item, i) => (
                    <div key={i} className="bg-cyan-50/50 rounded-lg p-3 border border-cyan-100">
                      <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-700">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Berenang", "Berselancar", "Berkemah", "Memancing", "Bersepeda"].map((act, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded-full border border-cyan-200">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Kali Barong Card */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {/* Header gradient */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 sm:px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏞️</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Kali Barong</h3>
                    <p className="text-xs text-emerald-100">Wisata Sungai Desa Candi</p>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-justify mb-5">
                  Wisata alam berbasis sungai yang menawarkan kesegaran aliran air jernih di tengah
                  pepohonan rindang dan tebing-tebing alami. Kali Barong juga menjadi rumah bagi
                  kesenian unik <strong>&quot;Ceklukan&quot;</strong> musik alami dari suara air sungai.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Suasana", detail: "Sejuk & alami" },
                    { label: "Keunikan", detail: "Musik air Ceklukan" },
                    { label: "Fasilitas", detail: "Perahu & sepeda air" },
                    { label: "Cocok untuk", detail: "Kemah & piknik" },
                  ].map((item, i) => (
                    <div key={i} className="bg-emerald-50/50 rounded-lg p-3 border border-emerald-100">
                      <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-700">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Berenang", "Perahu", "Sepeda Air", "Berkemah", "Piknik"].map((act, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
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
      <section className="py-14 sm:py-18 lg:py-22 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Info Card */}
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-slate-50 to-primary-50/30 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[var(--shadow-card)]">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  Karakteristik Masyarakat
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Heterogen & Majemuk",
                      desc: "Masyarakat Kecamatan Pringkuku dikenal heterogen dengan latar belakang sosial ekonomi dan tingkat pendidikan yang beragam.",
                    },
                    {
                      title: "Agraris & Pariwisata",
                      desc: "Sebagian besar berprofesi sebagai petani, namun sektor pariwisata kini juga menjadi sumber pendapatan utama berkat Pantai Srau.",
                    },
                    {
                      title: "Ramah & Terbuka",
                      desc: "Masyarakat sangat ramah terhadap pendatang, mahasiswa KKN, dan wisatawan. Nilai gotong royong masih sangat kuat.",
                    },
                    {
                      title: "Transformasi Ekonomi",
                      desc: "Desa Candi mengalami transformasi dari desa berbasis agraris menjadi desa yang juga mengandalkan potensi wisata bahari.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-justify mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
                Sosial & Ekonomi
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-5">
                Kehidupan{" "}
                <span className="gradient-text">Masyarakat</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
                <p>
                  Masyarakat Dusun Tlogomoyo dan Desa Candi secara umum hidup harmonis
                  dengan alam. Pertanian tetap menjadi tulang punggung ekonomi terutama
                  budidaya singkong, empon-empon, kelapa, serta tanaman hortikultura.
                </p>
                <p>
                  Seiring berkembangnya sektor pariwisata di kawasan Pantai Srau, banyak
                  warga yang kini juga berperan sebagai pelaku usaha wisata dari
                  pedagang, penyedia jasa penginapan, hingga pemandu wisata lokal.
                  Transformasi ini membawa dampak positif bagi peningkatan kesejahteraan
                  masyarakat.
                </p>
                <p>
                  Kecamatan Pringkuku tercatat memiliki penduduk sekitar{" "}
                  <strong>32.347 jiwa</strong> (data 2024), tersebar di 13 desa dengan
                  karakteristik demografis yang beragam. Desa Candi sendiri terdiri dari{" "}
                  <strong>15 dusun</strong>, dengan Tlogomoyo sebagai salah satu dusun
                  yang aktif dalam berbagai program pembangunan dan pemberdayaan.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== PEMERINTAHAN DUSUN ===== */}
      <section className="py-14 sm:py-18 lg:py-22 bg-earth-50 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 px-4 py-1.5 rounded-full">
              Pemerintahan
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Struktur{" "}
              <span className="gradient-text">Pemerintahan Dusun</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-justify">
              Pemerintahan Dusun Tlogomoyo berada di bawah naungan Desa Candi. Perangkat dusun
              dipilih secara demokratis untuk melayani dan membangun masyarakat.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[var(--shadow-card)] animate-fade-in-up">
              <div className="space-y-5">
                {[
                  {
                    jabatan: "Kepala Desa Candi",
                    desc: "Pemimpin tertinggi di tingkat desa yang membawahi seluruh dusun, termasuk Tlogomoyo. Bertanggung jawab atas pemerintahan, pembangunan, dan pelayanan masyarakat desa.",
                    color: "from-primary-500 to-primary-700",
                    icon: "🏛️",
                  },
                  {
                    jabatan: "Kepala Dusun (Kadus) Tlogomoyo",
                    desc: "Koordinator di tingkat dusun yang menjadi ujung tombak pelayanan masyarakat. Bertugas mengelola administrasi dusun, menjadi mediator warga, dan mengkoordinasikan program pembangunan.",
                    color: "from-emerald-500 to-emerald-700",
                    icon: "👤",
                  },
                  {
                    jabatan: "RT / RW",
                    desc: "Perangkat lingkungan di tingkat paling bawah yang berinteraksi langsung dengan warga sehari-hari. Membantu pendataan, penyaluran bantuan, dan menjaga ketertiban lingkungan.",
                    color: "from-amber-500 to-amber-700",
                    icon: "🏘️",
                  },
                  {
                    jabatan: "Lembaga Masyarakat Desa",
                    desc: "Termasuk BPD (Badan Permusyawaratan Desa), PKK, Karang Taruna, dan lembaga lainnya yang aktif dalam pemberdayaan masyarakat dan kegiatan sosial dusun.",
                    color: "from-blue-500 to-blue-700",
                    icon: "🤝",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 sm:gap-5 group">
                    <div className="shrink-0">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                    </div>
                    <div className={`flex-1 ${i < 3 ? "pb-5 border-b border-slate-100" : ""}`}>
                      <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5">
                        {item.jabatan}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed text-justify">{item.desc}</p>
                    </div>
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
            Tertarik Mengenal Lebih Dekat?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed text-justify mb-8">
            Kenali lebih jauh tentang kegiatan kemahasiswaan dan program kerja (Proker) KKN 
            yang telah dan sedang berlangsung di Dusun Tlogomoyo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/info-kkn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            >
              Tentang KKN & Proker Kami
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
