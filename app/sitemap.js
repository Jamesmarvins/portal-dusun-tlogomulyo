export default function sitemap() {
  // Gunakan environment variable NEXT_PUBLIC_SITE_URL jika ada, jika tidak, gunakan default URL desa.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tlogomoyo-candi.vercel.app";

  const routes = [
    "",
    "/profil-dusun",
    "/info-kkn",
    "/potensi",
    "/umkm",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
