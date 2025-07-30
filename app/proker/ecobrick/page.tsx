import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import { FaLeaf, FaRecycle, FaHandsHelping, FaTree, FaTrash, FaWineBottle, FaHammer } from 'react-icons/fa';

const EcobrickProcess = () => {
  const steps = [
    {
      icon: <FaTrash className="text-green-600" size={40} />,
      title: "Kumpulkan Sampah Plastik",
      description: "Pilah sampah plastik bersih dan kering seperti kemasan makanan, bungkus plastik, atau kantong plastik"
    },
    {
      icon: <FaWineBottle className="text-green-600" size={40} />,
      title: "Siapkan Botol Plastik",
      description: "Gunakan botol PET bekas minuman dengan ukuran seragam (600ml atau 1.5L)"
    },
    {
      icon: <FaHandsHelping className="text-green-600" size={40} />,
      title: "Isi Botol dengan Plastik",
      description: "Masukkan sampah plastik sedikit demi sedikit dan padatkan menggunakan tongkat kayu sampai sangat padat"
    },
    {
      icon: <FaHammer className="text-green-600" size={40} />,
      title: "Bentuk Furnitur",
      description: "Susun ecobrick yang sudah jadi  untuk membentuk furnitur"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
      {steps.map((item, index) => (
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
    { src: "/images/ecobrick/botol.jpeg", alt: "Pemadatan Ecobrick" },
    { src: "/images/ecobrick/susunan.png", alt: "Pengumpulan Plastik" },
    { src: "/images/ecobrick/sofa.png", alt: "Pengisian Botol" },
    { src: "/images/ecobrick/rangka.jpeg", alt: "Rangka"}
  ];

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Model Furnitur Ecobrick</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-70 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}${image.src}`}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
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
              Edukasi Praktik Ecobrick untuk Generasi Peduli Lingkungan
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mengubah sampah plastik menjadi furnitur yang dapat digunakan
          </p>
        </section>

        {/* Main Image */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl h-96 overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/ecobrick/ecobrick-hasil.jpeg`}
              alt="Hasil Ecobrick"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <h2 className="text-white text-2xl md:text-3xl font-bold">Furnitur dari Ecobrick oleh Peserta</h2>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="">
          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Tentang Program Ecobrick</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Program "Pemanfaatan Ecobrick untuk Menghasilkan Furnitur Ramah Lingkungan" ini dirancang khusus untuk siswa SMP agar mereka dapat belajar cara mengolah sampah plastik menjadi sesuatu yang bermanfaat. Melalui pelatihan ini, siswa akan dikenalkan pada ecobrick, yaitu botol plastik yang diisi rapat dengan sampah plastik, yang kemudian dapat disusun menjadi berbagai furnitur sederhana seperti kursi kecil dan rak sepatu.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Mengapa Ecobrick?</h3>
              <p className="text-gray-700">
                Kegiatan ini mengajarkan pentingnya menjaga kebersihan lingkungan dengan cara yang seru, kreatif, dan menyenangkan, sekaligus mengurangi sampah plastik di lingkungan sekitar.
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Langkah Pembuatan Ecobrick</h2>
            <EcobrickProcess />
          </div>

          {/* Benefits Section */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Manfaat Ecobrick</h2>
            <p className='text-lg mb-6 leading-relaxed'>
              Selain mengurangi sampah plastik, program ecobrick memberikan berbagai manfaat lain:
            </p>

            <ul className='space-y-4 mb-8'>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaLeaf className="text-green-600" />
                </div>
                <span className="text-gray-700 flex-1">Mengurangi volume sampah plastik di lingkungan</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaTree className="text-green-600" />
                </div>
                <span className="text-gray-700 flex-1">Menciptakan kesadaran lingkungan sejak dini</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaHandsHelping className="text-green-600" />
                </div>
                <span className="text-gray-700 flex-1">Mengembangkan kreativitas dan keterampilan praktis siswa</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaRecycle className="text-green-600" />
                </div>
                <span className="text-gray-700 flex-1">Menghasilkan produk fungsional dari bahan daur ulang</span>
              </li>
            </ul>
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
