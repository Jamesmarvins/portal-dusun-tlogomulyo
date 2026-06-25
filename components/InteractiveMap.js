"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function InteractiveMap() {
  const { t } = useLanguage();
  const [activeSpot, setActiveSpot] = useState("srau");

  const mapEmbedUrls = {
    balai: "https://maps.google.com/maps?q=Desa+Candi+Pringkuku+Pacitan&t=&z=14&ie=UTF8&iwloc=&output=embed",
    srau: "https://maps.google.com/maps?q=Pantai+Srau+Desa+Candi+Pacitan&t=&z=14&ie=UTF8&iwloc=&output=embed",
    barong: "https://maps.google.com/maps?q=Sungai+Barong+Candi+Pacitan&t=&z=14&ie=UTF8&iwloc=&output=embed",
  };

  const spotInfo = t.map.locations[activeSpot];

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-earth-50 dark:bg-slate-900 hero-pattern border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 animate-fade-in-up">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 dark:bg-primary-950 px-4 py-1.5 rounded-full border border-primary-200 dark:border-primary-800">
            {t.map.sectionBadge}
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {t.map.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.map.sectionDesc}
          </p>
        </div>

        {/* Hotspot Switcher Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 animate-fade-in-up">
          {[
            { id: "srau", icon: "🏖️", label: "Pantai Srau Spot" },
            { id: "balai", icon: "📍", label: "Balai Dusun & Candi" },
            { id: "barong", icon: "🏞️", label: "Kali Barong River" },
          ].map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveSpot(spot.id)}
              className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2.5 shadow-sm border ${
                activeSpot === spot.id
                  ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white border-primary-600 shadow-lg shadow-primary-600/25 scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-slate-700"
              }`}
            >
              <span className="text-lg">{spot.icon}</span>
              <span>{spot.label}</span>
            </button>
          ))}
        </div>

        {/* Map Container & Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start animate-fade-in-up">
          {/* Info Card */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-[var(--shadow-card)] flex flex-col justify-between space-y-6 lg:h-[450px]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-950 text-accent-700 dark:text-accent-300 text-xs font-bold mb-3">
                <span>📍 Titik Terpilih</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                {spotInfo.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                {spotInfo.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-700 space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-400 font-semibold">Koordinat GPS</span>
                <code className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg text-primary-600 dark:text-primary-400 font-mono font-bold">
                  {spotInfo.coords}
                </code>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(spotInfo.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-slate-900 hover:bg-primary-700 dark:bg-white dark:text-slate-900 dark:hover:bg-primary-400 text-white font-bold rounded-xl transition-colors duration-300 text-sm shadow-md"
              >
                <span>🗺️</span>
                <span>{t.map.openMaps}</span>
              </a>
            </div>
          </div>

          {/* Map Embed iframe */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-[var(--shadow-card)] h-[350px] sm:h-[450px] relative group">
            <iframe
              src={mapEmbedUrls[activeSpot]}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Interactive Village Map"
              className="w-full h-full filter dark:brightness-90 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
