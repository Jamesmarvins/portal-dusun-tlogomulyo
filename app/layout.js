import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


/* Viewport responsivitas mobile */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#15803d",
};

export const metadata = {
  title: "Portal Informasi Dusun Tlogomoyo Desa Candi, Pacitan",
  description:
    "Portal informasi resmi Dusun Tlogomoyo, Desa Candi, Kec. Pringkuku, Kab. Pacitan, Jawa Timur. Kenali potensi dusun, informasi KKN, dan hubungi perangkat desa.",
  keywords: [
    "dusun tlogomoyo",
    "desa candi pacitan",
    "pringkuku pacitan",
    "informasi dusun",
    "KKN tlogomoyo",
    "profil desa pacitan",
    "portal desa",
  ],
  openGraph: {
    title: "Portal Informasi Dusun Tlogomoyo",
    description:
      "Portal informasi resmi Dusun Tlogomoyo kenali potensi dusun dan informasi penting lainnya.",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import PwaRegister from "@/components/PwaRegister";
import QuickEditor from "@/components/QuickEditor";

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className="antialiased"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <PwaRegister />
            <QuickEditor />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
