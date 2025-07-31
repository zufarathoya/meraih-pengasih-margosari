import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Image from 'next/image';

const activities = [
  {
    title: 'Sosialisasi Pelatihan Komunikasi Dasar',
    desc: 'Melatih keterampilan komunikasi masyarakat dalam pengelolaan bank sampah agar pesan edukasi tersampaikan dengan kreatif dan efektif.',
    icon: '🗣️',
  },
  {
    title: 'Strategi Pencatatan dan Manajemen Keuangan',
    desc: 'Pelatihan pencatatan transaksi dan strategi manajemen keuangan untuk menjaga keberlanjutan operasional bank sampah.',
    icon: '📊',
  },
  {
    title: 'Pengelolaan Bank Sampah Berbasis Hukum',
    desc: 'Meningkatkan pemahaman hukum masyarakat untuk pengelolaan sampah yang sesuai regulasi dan berkelanjutan.',
    icon: '⚖️',
  },
];

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow">
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Pengelolaan Bank Sampah
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Program pemberdayaan masyarakat melalui pelatihan komunikasi, manajemen keuangan, dan edukasi hukum dalam mengelola bank sampah demi keberlanjutan lingkungan.
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/bank-sampah/bank-sampah.jpeg`}
              alt="Pengelolaan Bank Sampah"
              width={800}
              height={500}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* Activities Section */}
        <section className="grid md:grid-cols-3 gap-6">
          {activities.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
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

