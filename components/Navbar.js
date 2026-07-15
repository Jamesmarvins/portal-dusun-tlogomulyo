"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

const navLinks = [
  { href: "/", key: "beranda" },
  { href: "/profil-dusun", key: "profil" },
  { href: "/potensi", key: "potensi" },
  { href: "/umkm", key: "umkm" },
  { href: "/info-kkn", key: "infokkn" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-primary-100 dark:border-slate-800"
          : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigasi utama">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
            aria-label="Beranda Portal Informasi Tlogomoyo"
          >
            {/* Logo Image */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <img
                src="/images/logo.png"
                alt="Logo Tlogomoyo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-lg font-bold text-primary-800 dark:text-primary-400 leading-tight tracking-tight">
                Tlogomoyo
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">
                Portal Informasi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-slate-800"
                  }`}
                >
                  {t.nav[link.key]}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800 transition-colors duration-200"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 ${
            isOpen ? "max-h-80 opacity-100 pb-4 shadow-xl" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2 space-y-1 border-t border-primary-100 dark:border-slate-800">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 border-l-3 border-primary-500"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-slate-800"
                  }`}
                >
                  {t.nav[link.key]}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
