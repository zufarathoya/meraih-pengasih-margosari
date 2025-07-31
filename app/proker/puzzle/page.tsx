import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Image from 'next/image';

const activities = [
  {
    title: 'Puzzle Edukatif Daur Ulang',
    desc: 'Anak-anak belajar mendaur ulang kardus menjadi puzzle edukatif yang mendukung kesadaran lingkungan dan ekowisata berkelanjutan.',
    icon: '🧩',
  },
  {
    title: 'Permainan Teka-Teki Silang Bahasa Korea',
    desc: 'Melatih pengelolaan sampah plastik sambil mengenal kosakata lingkungan dalam Bahasa Korea dasar melalui TTS interaktif yang seru.',
    icon: '🔤',
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
            Edukasi Ekowisata dan Pengolahan Sampah melalui Puzzle & Teka-Teki Silang
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Program kreatif untuk meningkatkan kepedulian lingkungan anak melalui puzzle edukatif daur ulang dan permainan TTS kosakata lingkungan dalam Bahasa Korea dasar.
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "" : ""}/images/puzzle/puzzle.jpeg`}
              alt="Puzzle Daur Ulang Ekowisata"
              width={800}
              height={500}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* Activities Section */}
        <section className="grid md:grid-cols-2 gap-6">
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

