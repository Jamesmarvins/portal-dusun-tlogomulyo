import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-600" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dot-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 sm:py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 8.25 4.69a7.5 7.5 0 0 1 3.75-1.69z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Dusun Tlogomulyo
                </h3>
                <p className="text-xs text-slate-400 tracking-wide uppercase">
                  Portal Informasi Dusun
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Portal informasi resmi Dusun Tlogomulyo, Desa Candi, Kecamatan
              Pringkuku, Kabupaten Pacitan. Menyediakan informasi tentang
              potensi dusun, kegiatan masyarakat, dan panduan KKN bagi
              perguruan tinggi.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Beranda" },
                { href: "/profil-dusun", label: "Profil Dusun" },
                { href: "/info-kkn", label: "Tentang & Info KKN" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <svg
                      className="w-3 h-3 text-slate-600 group-hover:text-primary-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Informasi Perangkat Desa
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <svg className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-slate-400">
                  Dusun Tlogomulyo, Desa Candi,<br />
                  Kec. Pringkuku, Kab. Pacitan,<br />
                  Jawa Timur, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <svg className="w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="text-slate-400">dusun.tlogomulyo@desa.id</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <svg className="w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="text-slate-400">+62 812-XXXX-XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Pemerintah Dusun Tlogomulyo. Hak cipta
            dilindungi.
          </p>
          <p className="flex items-center gap-1">
            Dibangun dengan
            <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            oleh Tim KKN untuk Tlogomulyo
          </p>
        </div>
      </div>
    </footer>
  );
}
