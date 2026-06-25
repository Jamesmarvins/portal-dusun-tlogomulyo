"use client";

import React, { useEffect, useState } from "react";

export default function PwaRegister() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    // 1. Registrasi Service Worker di background
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => {
            console.log("Service Worker terdaftar sukses di scope:", reg.scope);
          })
          .catch((err) => {
            console.error("Gagal mendaftarkan Service Worker:", err);
          });
      });
    }

    // 2. Tangkap event prompt instalasi PWA
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Tampilkan banner setelah 3 detik jika belum diinstal
      setTimeout(() => {
        setShowInstallBanner(true);
      }, 3000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowInstallBanner(false);
    }
    setDeferredPrompt(null);
  };

  if (!showInstallBanner) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-50 bg-gradient-to-r from-primary-800 to-primary-900 text-white p-4 rounded-2xl shadow-2xl border border-primary-500/30 backdrop-blur-xl animate-fade-in-up flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-xl">
          📲
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold truncate">Aplikasi Dusun Tlogomoyo</p>
          <p className="text-xs text-primary-200">Akses info dusun tanpa kuota & offline</p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleInstallClick}
          className="bg-accent-400 hover:bg-accent-500 text-slate-950 px-3.5 py-2 rounded-xl text-xs font-bold shadow-md transition-transform active:scale-95"
        >
          Install
        </button>
        <button
          onClick={() => setShowInstallBanner(false)}
          className="text-primary-300 hover:text-white p-1 rounded-lg"
          aria-label="Tutup penawaran install"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
