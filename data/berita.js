const getDynamicDate = (daysAgo) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

export const daftarBerita = [
  {
    id: "inovasi-rocket-stove-kurangi-asap-sampah",
    title: "Solusi Atasi Polusi Asap Rumah Tangga, Mahasiswa KKN Ciptakan Tungku Rocket Stove Ramah Lingkungan",
    date: getDynamicDate(2),
    excerpt: "Menjawab permasalahan kebiasaan membakar sampah terbuka di pekarangan rumah warga, mahasiswa KKN memperkenalkan tungku pembakar sampah bermetode Rocket Stove minim asap.",
    content: `
      Merespons kebiasaan masyarakat Dusun Tlogomoyo yang rata-rata membakar sampah rumah tangga secara terbuka di pekarangan rumah, kelompok mahasiswa Kuliah Kerja Nyata (KKN) Kelompok 28 meluncurkan inovasi tepat guna berupa tungku pembakar sampah ramah lingkungan bermetode *Rocket Stove*.
      
      Kebiasaan membakar sampah terbuka selama ini sering kali menimbulkan kepulan asap pekat dan uap berbahaya yang dapat mengganggu pernapasan serta merusak keasrian udara pedesaan. Melalui inovasi *Rocket Stove*, pembakaran dirancang menggunakan prinsip sirkulasi udara ganda (*secondary combustion*) pada ruang bakar vertikal bersuhu tinggi.
      
      "Dengan suhu pembakaran yang jauh lebih panas dan suplai oksigen yang terisolasi sempurna, sampah terbakar lebih tuntas sehingga kuantitas asap atau uap yang terbuang ke udara berkurang drastis hingga 80%," jelas perwakilan KKN Kelompok 28 saat sesi demonstrasi di Balai Dusun. Warga menyambut sangat antusias inovasi sederhana namun berdampak besar bagi kelestarian lingkungan Dusun Tlogomoyo ini.
    `,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "panen-raya-singkong-tlogomoyo",
    title: "Panen Raya Singkong di Dusun Tlogomoyo Membawa Berkah",
    date: getDynamicDate(7),
    excerpt: "Petani di Dusun Tlogomoyo menyambut gembira hasil panen singkong tahun ini yang dinilai melimpah dan berkualitas unggul.",
    content: `
      Warga Dusun Tlogomoyo, Desa Candi kembali mengadakan panen raya singkong pada minggu ini. Kegiatan yang rutin dilakukan setiap tahun ini menjadi momen penting bagi perekonomian warga setempat.
      
      Kepala Dusun Tlogomoyo menyampaikan bahwa hasil panen tahun ini meningkat sekitar 20% dibandingkan tahun sebelumnya. "Cuaca yang mendukung serta penggunaan pupuk organik buatan warga sendiri menjadi faktor utama keberhasilan panen ini," ujarnya.
      
      Singkong hasil panen ini tidak hanya dijual mentah ke pasar, tetapi sebagian besar juga diolah oleh ibu-ibu PKK menjadi berbagai produk UMKM unggulan seperti keripik singkong, tiwul instan, dan getuk. Diharapkan dengan melimpahnya hasil panen ini, kesejahteraan warga Dusun Tlogomoyo akan semakin meningkat.
    `,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pelatihan-digital-marketing-umkm",
    title: "Mahasiswa KKN Gelar Pelatihan Digital Marketing untuk UMKM",
    date: getDynamicDate(14),
    excerpt: "Untuk meningkatkan daya saing produk lokal, mahasiswa KKN mengadakan pelatihan pemasaran digital bagi pelaku UMKM Dusun Tlogomoyo.",
    content: `
      Dalam upaya memajukan potensi desa, kelompok mahasiswa Kuliah Kerja Nyata (KKN) mengadakan program pelatihan *Digital Marketing* yang ditujukan khusus bagi pelaku Usaha Mikro Kecil Menengah (UMKM) di Dusun Tlogomoyo.
      
      Pelatihan yang diadakan di balai dusun ini dihadiri oleh puluhan warga yang antusias ingin mempelajari cara memasarkan produk olahan pangan dan kerajinan tangan mereka melalui media sosial dan platform *e-commerce*.
      
      Materi yang diberikan mencakup cara mengambil foto produk yang menarik, membuat deskripsi jualan yang persuasif, hingga mendaftarkan toko di berbagai aplikasi belanja online. "Kami berharap dengan adanya pelatihan ini, produk asli Tlogomoyo bisa menjangkau pasar yang lebih luas, tidak hanya di Pacitan saja," ungkap salah satu mahasiswa perwakilan KKN.
    `,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gotong-royong-bersihkan-saluran-air",
    title: "Warga Kompak Gotong Royong Bersihkan Saluran Air Menjelang Musim Hujan",
    date: getDynamicDate(21),
    excerpt: "Antisipasi banjir dan genangan air, seluruh elemen masyarakat Dusun Tlogomoyo melakukan kerja bakti membersihkan saluran irigasi.",
    content: `
      Menyambut datangnya pergantian cuaca, warga Dusun Tlogomoyo secara serentak melaksanakan kegiatan gotong royong membersihkan saluran air dan irigasi pada hari Minggu pagi.
      
      Kegiatan ini melibatkan berbagai lapisan masyarakat, mulai dari perangkat desa, tokoh masyarakat, pemuda karang taruna, hingga ibu-ibu yang bertugas menyiapkan konsumsi. Tujuan utama dari kerja bakti ini adalah memastikan aliran air lancar sehingga tidak menyebabkan genangan atau banjir yang dapat merusak lahan pertanian warga.
      
      Selain membersihkan saluran air, warga juga menanam beberapa bibit pohon di area yang rawan erosi. Semangat kebersamaan dan kepedulian terhadap lingkungan ini merupakan salah satu nilai kearifan lokal yang terus dijaga kelestariannya di Dusun Tlogomoyo.
    `,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
  }
];
