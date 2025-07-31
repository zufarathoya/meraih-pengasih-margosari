import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Image from 'next/image';

const steps = [
  {
    title: 'Pengenalan Konsep Menabung',
    desc: 'Belajar pentingnya menyisihkan uang saku, manfaat menabung, dan bagaimana kebiasaan ini membantu masa depan yang lebih baik.',
  },
  {
    title: 'Workshop Membuat Celengan Kertas',
    desc: 'Membuat celengan kreatif dari kertas berwarna dan hiasan menarik. Aktivitas ini menyenangkan sekaligus mengajarkan kreativitas.',
  },
  {
    title: 'Simulasi Menabung',
    desc: 'Anak-anak diajak untuk mengisi celengan kertas secara bertahap sambil belajar mengatur keuangan melalui permainan simulasi.',
  },
];

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow">
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Cerdas Finansial Sejak Dini
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Edukasi menabung untuk anak-anak melalui kegiatan kreatif membuat celengan kertas yang mudah dan menyenangkan.
          </p>
        </section>

        {/* Gambar utama */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl h-96 overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "" : ""}/images/menabung/menabung-hasil.jpeg`}
              alt="Hasil Ecobrick"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <h2 className="text-white text-2xl md:text-3xl font-bold">Furnitur dari Ecobrick oleh Peserta</h2>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <section className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-full font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;

