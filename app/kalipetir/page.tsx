'use client'
import React from 'react';
import Image from 'next/image';
import { LoremIpsum } from "lorem-ipsum";
import Header from '../components/header';
import Footer from '../components/footer';

// Definisikan komponen FeatureCard di sini atau impor dari file lain
const FeatureCard = ({ title, textColor, description, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <h3 className={`text-xl font-semibold ${textColor} mb-2`}>{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4">
      <Image
        src={image}
        alt=""
        width={500}
        height={300}
        className="rounded-lg object-cover"
      />
    </div>
  </div>
);

const Kalipetir = () => {
  // Inisialisasi LoremIpsum (cukup sekali)
  const lorem = new LoremIpsum({
    sentencesPerParagraph: { max: 8, min: 4 },
    wordsPerSentence: { max: 16, min: 4 }
  });

  // Data untuk kartu fitur, dipisahkan dari JSX
  const featureCardsData = [
    {
      title: "Kedai MahAbang",
      textColor: "text-green-700",
      description: "Ini merupakan kedai yang menyediakan berbagai makanan dan minuman. Kedai ini terletak di bagian timur dari lokasi Pesona Kalipetir Mah Abang, dekat dengan area parkir. Lokasi ini kerap menjadi tempat berkumpul bagi warga lokal untuk menikmati makanan sekaligus pemandangan di daerah tersebut.",
      image: `${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/kalipetir/kedai-mahabang.png`
    },
    {
      title: "Spot Fotografi",
      textColor: "text-blue-700",
      description: "Spot fotografi dengan latar belakang alam yang indah di Pesona Kalipetir. Tempat ini terletak di bagian barat dari lokasi Pesona Kalipetir Mah Abang, pada lokasi ini kita dapat melihat sunset yang indah. Berikut adalah foto yang diambil pada sore hari di lokasi tersebut.",
      image: `${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/Kalipetir/sunset.png`
    },
    {
      title: "Aktivitas Rekreasi & Lokal",
      textColor: "text-orange-700",
      description: "Pesona Kalipetir Mah Abang juga menawarkan berbagai aktivitas rekreasi yang dapat dinikmati, salah satunya digunakan untuk menonton Tim Nasional Sepak Bola Indonesia. Selain itu terdapat berbagai kegiatan yang juga dilakukan seperti jathilan dan beberapa kegiatan dari padukuhan Kalipetir Kidul. Berikut adalah contoh kegiatan yang ada di lokasi tersebut.",
      image: `${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/Kalipetir/kegiatan-kalipetir.png`
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex flex-col">
      <Header />

      {/* Konten utama dengan tag <main> dan layout flex-grow */}
      <main className="container mx-auto px-6 py-12 flex-grow">

        {/* Hero Section */}
        <div className="">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Menjelajahi Pesona Kalipetir
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Pada bagian ini, kami akan memperkenalkan Pesona Kalipetir Mah Abang, sebuah lokasi yang terletak di Kalipetir Kidul, Margosari. Lokasi ini memiliki potensi ekowisata yang kaya, termasuk wisata alam, budaya, dan edukasi lingkungan. Kami akan menampilkan berbagai daya tarik utama dari lokasi ini.
            Berikut kami tampilkan mengenai lokasi tersebut.
          </p>
        </div>

        {/* Section Deskripsi & Gambar */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/kalipetir/kalipetir-landscape.jpg`}
              alt="Pemandangan Kalipetir"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="text-gray-700">
            <h2 className="text-3xl font-bold mb-3">Mengenal Pesona Kalipetir</h2>
            <p className="mb-4">
              Pesona Kalipetir Mah Abang adalah sebuah lokasi yang terletak di Kalipetir Kidul, Margosari. Lokasi ini memiliki potensi ekowisata yang cukup baik .
              Pesona Kalipetir Mah Abang menawarkan berbagai daya tarik utama yang dapat dinikmati oleh pengunjung.
            </p>
            <p>
              Lokasi ini awalnya dikelola oleh pihak dari Kalurahan Margosari yang digunakan sebagai tempat ekowisata di kalurahan tersebut. Dengan pemandangan alam yang indah, lokasi ini menjadi tempat yang ideal untuk bersantai, belajar, dan menikmati keindahan alam.
            </p>
          </div>
        </div>

        {/* Section Daya Tarik Utama */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Daya Tarik Utama Kalipetir</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCardsData.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                textColor={card.textColor}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>

        {/* Section Peta Lokasi (Iframe) - BARU */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Lokasi Kalipetir di Google Maps</h2>
          <div className="w-full overflow-hidden rounded-lg shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4801.565932286323!2d110.18118097584033!3d-7.851611878035175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7afb154d0506ab%3A0x1cc30f34e39761af!2sPesona%20Kalipetir%20(Mah%20Abang)!5e1!3m2!1sid!2sid!4v1753880105745!5m2!1sid!2sid"
              width="100%"
              height="450"
              allowFullScreen
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Kalipetir;
