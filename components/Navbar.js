"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/profil-dusun", label: "Profil Dusun" },
  { href: "/info-kkn", label: "Tentang & KKN" },
];

export default function Navbar() {
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
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-primary-100"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigasi utama">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
            aria-label="Beranda Portal Informasi Tlogomulyo"
          >
            {/* Leaf Icon */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 8.25 4.69a7.5 7.5 0 0 1 3.75-1.69z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15l3-3 3 3"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-lg font-bold text-primary-800 leading-tight tracking-tight">
                Tlogomulyo
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide uppercase">
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
                      ? "text-primary-700 bg-primary-50"
                      : "text-slate-600 hover:text-primary-700 hover:bg-primary-50/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-500 rounded-full" />
                  )}
                </Link>
              );
            })}
            {/* CTA Button */}
            <Link
              href="/info-kkn"
              className="ml-2 lg:ml-4 px-4 lg:px-5 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Info KKN
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:text-primary-700 hover:bg-primary-50 transition-colors duration-200"
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

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2 space-y-1 border-t border-primary-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary-700 bg-primary-50 border-l-3 border-primary-500"
                      : "text-slate-600 hover:text-primary-700 hover:bg-primary-50/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/info-kkn"
              className="block mx-4 mt-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              Info KKN →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
