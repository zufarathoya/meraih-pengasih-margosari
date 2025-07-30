import React from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const Page = () => {
  const kegiatan = [
    {
      title: "Pelatihan Literasi Digital dan Keamanan Siber",
      desc: "Memberikan pemahaman tentang penggunaan internet secara bijak, keamanan data pribadi, dan cara menghindari cyberbullying untuk anak sekolah.",
      icon: "💻"
    },
    {
      title: "Pembuatan Poster Pencegahan Kenakalan Remaja",
      desc: "Mengajak siswa membuat poster edukatif untuk kampanye pencegahan kenakalan dan meningkatkan kesadaran terhadap perilaku menyimpang.",
      icon: "🖌️"
    },
    {
      title: "Cerdas Kelola Uang Sejak Dini",
      desc: "Sosialisasi literasi keuangan bagi siswa SMP agar mampu mengelola uang saku, menabung, dan memahami dasar keuangan dengan baik.",
      icon: "💰"
    },
    {
      title: "Sosialisasi Strategi Mengurangi Tingkat Kejahatan",
      desc: "Memberikan wawasan tentang penyebab kenakalan remaja, strategi pencegahan, dan pembentukan karakter positif untuk generasi muda.",
      icon: "🛡️"
    }
  ];

  return (

    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Penguatan Literasi & Karakter
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Program untuk membentuk generasi aman dan bijak digital melalui literasi, keamanan siber, pengelolaan keuangan, dan pencegahan kenakalan remaja.
          </p>
        </section>

        {/* Kegiatan Section */}
        <section className="grid md:grid-cols-2 gap-8 mt-12">
          {kegiatan.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-2xl font-semibold text-green-600 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Page;
