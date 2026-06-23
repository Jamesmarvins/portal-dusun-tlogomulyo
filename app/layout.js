import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

/* Viewport — responsivitas mobile */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#15803d",
};

export const metadata = {
  title: "Portal Informasi Dusun Tlogomulyo — Desa Candi, Pacitan",
  description:
    "Portal informasi resmi Dusun Tlogomulyo, Desa Candi, Kec. Pringkuku, Kab. Pacitan, Jawa Timur. Kenali potensi dusun, informasi KKN, dan hubungi perangkat desa.",
  keywords: [
    "dusun tlogomulyo",
    "desa candi pacitan",
    "pringkuku pacitan",
    "informasi dusun",
    "KKN tlogomulyo",
    "profil desa pacitan",
    "portal desa",
  ],
  openGraph: {
    title: "Portal Informasi Dusun Tlogomulyo",
    description:
      "Portal informasi resmi Dusun Tlogomulyo — kenali potensi dusun dan informasi penting lainnya.",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-earth-50 text-slate-800 overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
