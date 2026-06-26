"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function DownloadProfileButton({ className = "" }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleDownloadPDF = () => {
    if (pathname === "/profil-dusun") {
      window.print();
    } else {
      router.push("/profil-dusun");
      setTimeout(() => {
        window.print();
      }, 1200);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className={`inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-extrabold rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base border border-amber-300 cursor-pointer ${className}`}
    >
      <svg className="w-5 h-5 shrink-0 animate-bounce" style={{ animationDuration: "2s" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v4.25a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25v-4.25M12 3v12m0 0-3.75-3.75M12 15l3.75-3.75" />
      </svg>
      <span>Unduh Profil Dusun (PDF)</span>
    </button>
  );
}
