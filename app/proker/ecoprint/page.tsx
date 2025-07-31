import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import { FaLeaf, FaRecycle, FaHandsHelping, FaTree } from 'react-icons/fa';

const EcoprintBenefits = () => {
  const benefits = [
    { icon: <FaLeaf className="text-green-600" size={40} />, title: "Ramah Lingkungan", description: "Menggunakan bahan alami tanpa zat kimia berbahaya" },
    { icon: <FaRecycle className="text-green-600" size={40} />, title: "Berkelanjutan", description: "Memanfaatkan sumber daya alam secara bertanggung jawab" },
    { icon: <FaHandsHelping className="text-green-600" size={40} />, title: "Pemberdayaan", description: "Meningkatkan keterampilan dan ekonomi kreatif masyarakat" },
    { icon: <FaTree className="text-green-600" size={40} />, title: "Pelestarian", description: "Mengangkat kekayaan flora lokal melalui seni" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
      {benefits.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <div className="flex justify-center mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const GalleryPreview = () => {
  const images = [
    { src: "/images/ecoprint/ecoprint-hasil.jpeg", alt: "Hasil Ecoprint 1" },
    { src: "/images/ecoprint/ecoprint-proses.jpeg", alt: "Proses Ecoprint" },
    { src: "/images/ecoprint/ecoprint-bahan.jpeg", alt: "Bahan Alami" },
    { src: "/images/ecoprint/ecoprint-produk.jpeg", alt: "Produk Ecoprint" }
  ];

  return (
    <div className="my-12">
      {/*<h2 className="text-3xl font-bold text-center text-green-700 mb-8">Galeri Ecoprint</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-48 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "" : ""}${image.src}`}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>*/}
    </div>
  );
};

const page = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="container mx-auto px-6 py-12 flex-grow">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-green-700 text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-green-600">
              Pengenalan dan Pelatihan Teknik Ecoprint sebagai Inovasi Produk Kreatif Berbasis Lingkungan
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mengubah keindahan alam menjadi karya seni yang bernilai melalui teknik pencetakan alami
          </p>
        </section>

        {/* Main Image */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl h-96 overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "" : ""}/images/ecoprint/ecoprint-hasil.jpeg`}
              alt="Ecoprint Hasil"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <h2 className="text-white text-2xl md:text-3xl font-bold">Karya Ecoprint oleh Peserta Pelatihan</h2>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Tentang Program Ecoprint</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Program ini bertujuan untuk mengenalkan dan memberikan pelatihan teknik ecoprint, yaitu metode pencetakan motif alami pada kain atau media lain menggunakan daun, bunga, dan bahan alami yang ramah lingkungan. Melalui kegiatan ini, masyarakat dan pelaku usaha lokal akan dibekali keterampilan untuk menghasilkan produk kreatif yang bernilai jual tinggi tanpa merusak lingkungan.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Mengapa Ecoprint?</h3>
              <p className="text-gray-700">
                Ecoprint tidak hanya menghasilkan produk yang indah, tetapi juga menjadi media edukasi tentang pentingnya menjaga kelestarian alam dan memanfaatkan sumber daya secara berkelanjutan.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <EcoprintBenefits />

          {/* Detailed Content */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Dampak Positif Ecoprint</h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Pelatihan ecoprint ini sekaligus menjadi inovasi dalam mendukung ekowisata, di mana produk-produk hasil ecoprint dapat menjadi suvenir khas yang mencerminkan kekayaan flora lokal. Dengan memanfaatkan sumber daya alam secara berkelanjutan, program ini diharapkan mampu:
            </p>

            <ul className='space-y-4 mb-8'>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaLeaf className="text-green-600" />
                </div>
                <span className="text-gray-700 flex-1">Meningkatkan kesadaran lingkungan dan pelestarian keanekaragaman hayati</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaTree className="text-green-600" />
                </div>
                <span className="text-gray-700 flex-1">Menambah daya tarik destinasi wisata melalui produk kerajinan unik yang ramah lingkungan</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaHandsHelping className="text-green-600" />
                </div>
                <span className="text-gray-700 flex-1">Memberikan keterampilan baru yang dapat meningkatkan pendapatan masyarakat lokal</span>
              </li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Pelestarian Melalui Kreativitas</h3>
              <p className="text-gray-700">
                Melalui kegiatan ini, peserta tidak hanya belajar keterampilan seni dan kerajinan, tetapi juga memahami pentingnya konservasi alam serta kontribusi mereka dalam mendukung pengembangan pariwisata berkelanjutan.
              </p>
            </div>
          </div>

          {/* Gallery Section */}
          <GalleryPreview />

        </section>
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  )
}

export default page
