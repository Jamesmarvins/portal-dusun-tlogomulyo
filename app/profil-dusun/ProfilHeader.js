"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProfilHeader() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in-up">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-primary-200">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              {t?.nav?.beranda || "Beranda"}
            </Link>
          </li>
          <li>
            <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </li>
          <li className="text-white font-medium">{t?.profil?.breadcrumb || "Profil Dusun"}</li>
        </ol>
      </nav>

      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
        {t?.profil?.title || "Profil Dusun"} <span className="text-accent-400">Tlogomoyo</span>
      </h1>
      <p className="text-base sm:text-lg text-primary-100 max-w-2xl leading-relaxed text-justify">
        {t?.profil?.subtitle || "Mengenal lebih dekat Dusun Tlogomoyo geografi, sejarah, kekayaan budaya, potensi pertanian, serta destinasi wisata di sekitarnya. Sebuah dusun yang asri di jantung Pacitan selatan."}
      </p>
    </div>
  );
}
