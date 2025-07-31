import { title } from "process";

export const programs = [
  {
    title:
      "Pelatihan pada Anak Mendeskripsikan Pariwisata Indonesia untuk Meningkatkan Kebanggaan Lokal",
    date: "16 Juli 2025",
    description:
      "Pelatihan untuk anak-anak dalam mendeskripsikan pariwisata lokal.",
    image: `${process.env.NODE_ENV === "production" ? "" : ""}/images/pariwisata/pariwisata.jpeg`,
    link: "/pariwisata"
  },
  {
    title: "Edukasi Praktik Ecobrick untuk Generasi Peduli Lingkungan",
    date: "17 Juli 2025",
    description:
      "Pemanfaatan Ecobrick untuk Menghasilkan Furnitur Ramah Lingkungan.",
    image: `${process.env.NODE_ENV === "production" ? "" : ""}/images/ecobrick/ecobrick-hasil.jpeg`,
    link: "/ecobrick"
  },
  {
    title: "Pengenalan dan Pelatihan Teknik Ecoprint sebagai Inovasi Produk Kreatif Berbasis Lingkungan",
    date: "19 Juli 2025",
    description:
      "Merupakan praktik ecopint yang ditujukan ke anak-anak untuk dapat mengembangkan rasa bangga akan produk lokal dan dapat memanfaatkan bahan yang berada di lingkungan sekitar.",
    image: `${process.env.NODE_ENV === "production" ? "" : ""}/images/ecoprint/ecoprint-hasil.jpeg`,
    link: "/ecoprint"

  },
  {
    title:
      "Penguatan Literasi dan Karakter untuk Generasi Aman dan Bijak Digital",
    date: "15 Juli 2025",
    description: "Mengedukasi generasi muda dengan kemampuan literasi digital yang kuat sekaligus membangun karakter yang tangguh dalam menghadapi tantangan era digital.",
    image: `${process.env.NODE_ENV === "production" ? "" : ""}/images/literasi-karakter/edukasi-karakter.jpeg`,
    link: "/literasikarakter"
  },
  {
    title:
      "Edukasi Pengolahan Sampah Plastik dan Kosakata Lingkungan Bahasa Korea melalui Kolase Plastik",
    date: "12 Juli 2025",
    description:
      "Kesadaran lingkungan dengan memanfaatkan limbah.",
    image: `${process.env.NODE_ENV === "production" ? "" : ""}/images/kolase/kolase-hasil.JPG`,
    link: "/kolase"
  },
  {
    title:
      "Edukasi Pengenalan Ekowisata Lokal dan Praktik Pengolahan Sampah Kardus melalui Puzzle Daur Ulang",
    date: "26 Juli 2025",
    description:
      "Pelatihan digitalisasi program kerja untuk organisasi dan komunitas.",
    image: `${process.env.NODE_ENV === "production" ? "" : ""}/images/puzzle/puzzle.jpeg`,
    link: "/puzzle"
  },
  {
    title:
      "Cerdas Finansial Sejak Dini melalui Edukasi Pengenalan Uang dan Menabung untuk Anak-Anak",
    date: "24 Juli 2025",
    description:
      "Edukasi menabung untuk anak-anak dengan membuat tabungan kertas yang mudah untuk dibuat.",
    image: `${process.env.NODE_ENV === "production" ? "" : ""}/images/menabung/menabung-hasil.jpeg`,
    link: "/menabung"
  },
  {
    title: "Memasak Kimbab & Pembinaan Usaha Bersama UMKM",
    date: "20 Juli 2025",
    description:
      "Memasak Kimbab dan pembinaan UMKM.",
    image: `${process.env.NODE_ENV === "production" ? "" : ""}/images/kimbab-umkm/umkm-pkk.jpeg`,
    link: "/kimbab-umkm"
  },
  {
    title: "Pengelolaan Bank Sampah",
    date: "13 Juli 2025",
    description:
      "Edukasi tentang pengelolaan sampah dan keberlanjutan lingkungan.",
    image: `${process.env.NODE_ENV === "production" ? "" : ""}/images/bank-sampah/bank-sampah.jpeg`,
    link: "/bank-sampah"
  },
];

