"use client";

import React from "react";

export default function UmkmCatalog() {
  const adminWaNumber = "6281234567890"; // Nomor kontak resmi koordinator UMKM desa

  const products = [
    {
      id: "keripik-singkong",
      name: "Keripik Singkong Khas Tlogomoyo",
      price: "Rp 15.000",
      unit: "kemasan 250gr",
      desc: "Keripik renyah dari singkong pilihan hasil panen kebun Tlogomoyo. Tersedia rasa Original Bawang dan Pedas Balado.",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "tiwul-instan",
      name: "Tiwul Instan Ayu",
      price: "Rp 20.000",
      unit: "kemasan 500gr",
      desc: "Makanan pokok tradisional tinggi serat pengganti nasi. Praktis diseduh kukus dengan paduan kelapa parut manis.",
      badge: "Pangan Sehat",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "jamu-empon",
      name: "Serbuk Jamu Empon-Empon",
      price: "Rp 25.000",
      unit: "botol 200gr",
      desc: "Olahan jahe merah, kunyit, dan temulawak organik tanpa pengawet buatan. Menjaga daya tahan tubuh dan kebugaran.",
      badge: "Herbal Organik",
      image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "besek-bambu",
      name: "Besek Anyaman Bambu Alami",
      price: "Rp 7.500",
      unit: "per pasang",
      desc: "Wadah ramah lingkungan hasil kerajinan tangan warga. Cocok untuk kemasan oleh-oleh, katering, atau hajatan.",
      badge: "Eco-Friendly",
      image: "https://images.unsplash.com/photo-1615822359434-58a4369a473d?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const handleOrderWa = (productName) => {
    const text = `Halo Admin Portal Dusun Tlogomoyo, saya tertarik untuk memesan produk UMKM: *${productName}*. Mohon informasi ketersediaan dan ongkos kirimnya. Terima kasih!`;
    const url = `https://wa.me/${adminWaNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-800 rounded-3xl my-12 p-6 sm:p-10 border border-primary-100 dark:border-slate-700 shadow-xl">
      <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
        <span className="inline-block text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 bg-primary-50 dark:bg-primary-950 px-4 py-1.5 rounded-full">
          Direktori Pemasok & E-Commerce Desa
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mb-4">
          Katalog Produk <span className="gradient-text">Asli Tlogomoyo</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Setiap pemesanan Anda menggerakkan langsung perputaran ekonomi rumah tangga petani dan pelaku UMKM Dusun Tlogomoyo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="group bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
          >
            <div>
              <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-primary-700/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-bold text-base text-slate-800 dark:text-white font-heading mb-1 line-clamp-1">
                {item.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 mt-auto">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-base font-extrabold text-primary-700 dark:text-primary-400">
                  {item.price}
                </span>
                <span className="text-[10px] text-slate-400">
                  {item.unit}
                </span>
              </div>

              <button
                onClick={() => handleOrderWa(item.name)}
                className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer"
              >
                <span>💬</span>
                <span>Pesan via WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
