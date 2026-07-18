import beritaData from "./berita.json";

const getDynamicDate = (daysAgo) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

export const daftarBerita = beritaData.map(item => {
  if (typeof item.daysAgo === "number") {
    const { daysAgo, ...rest } = item;
    return {
      ...rest,
      date: getDynamicDate(daysAgo)
    };
  }
  return item;
});
