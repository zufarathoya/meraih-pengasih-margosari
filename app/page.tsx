'use client'
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Image from 'next/image';
import Chart from './components/chart';

const HomePage = () => {
  const [active, setActive] = useState('index.html');

  useEffect(() => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    setActive(path);
  }, []);

  const programs = [
    {
      title: 'Pelatihan pada Anak Mendeskripsikan Pariwisata Indonesia untuk Meningkatkan Kebanggaan Lokal',
      date: '12 Juli 2025',
      description: 'Pelatihan untuk anak-anak dalam mendeskripsikan pariwisata lokal berbasis digital.',
      image: '/images/pelatihan.jpg'
    },
    {
      title: 'Edukasi Praktik Ecobrick untuk Generasi Peduli Lingkungan',
      date: '18 Juli 2025',
      description: 'Pemanfaatan ecobrick untuk menghasilkan furnitur ramah lingkungan.',
      image: '/images/ecobrick.jpg'
    },
    {
      title: 'Penguatan Literasi dan Karakter untuk Generasi Aman dan Bijak Digital',
      date: '24 Juli 2025',
      description: 'Pengenalan keamanan siber dan literasi digital untuk remaja.',
      image: '/images/cybersecurity.jpg'
    },
    {
      title: 'Edukasi Pengolahan Sampah Plastik dan Kosakata Lingkungan Bahasa Korea melalui Kolase Plastik',
      date: '30 Juli 2025',
      description: 'Kampanye digital untuk meningkatkan kesadaran lingkungan di kalangan anak muda.',
      image: '/images/environment.jpg'
    },
    {
      title: 'Edukasi Pengenalan Ekowisata Lokal dan Praktik Pengolahan Sampah Kardus melalui Puzzle Daur Ulang',
      date: '5 Agustus 2025',
      description: 'Pelatihan digitalisasi program kerja untuk organisasi dan komunitas.',
      image: '/images/digitalization.jpg'
    },
    {
      title: 'Cerdas Finansial Sejak Dini melalui Edukasi Pengenalan Uang dan Menabung untuk Anak-Anak',
      date: '10 Agustus 2025',
      description: 'Edukasi keuangan dasar untuk anak-anak melalui platform digital.',
      image: '/images/financial-literacy.jpg'
    },
    {
      title: 'Memasak Kimbab & Pembinaan Usaha Bersama UMKM',
      date: '15 Agustus 2025',
      description: 'Pelatihan dasar teknologi informasi dan komunikasi untuk anak-anak.',
      image: '/images/technology-education.jpg'
    },
    {
      title: 'Pengelolaan Bank Sampah',
      date: '20 Agustus 2025',
      description: 'Edukasi tentang pengelolaan sampah dan keberlanjutan lingkungan.',
      image: '/images/waste-management.jpg'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Selamat Datang di <span className="text-green-600">Website Proker</span> Kami!
          </h1>
          <p className="text-lg text-gray-600">
            Kami hadir untuk mendigitalisasi program kerja dengan cara yang lebih efisien,
            informatif, dan mudah diakses untuk semua anggota.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            Mulai Sekarang
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/images/teamwork.png"
            alt="Digitalisasi Proker"
            width={400}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Link to Kalipetir */}
      <section className="container mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          <a href="/kalipetir" className="hover:underline">
            Potensi Ekowisata di Kalurahan Margosari 
          </a>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Kalurahan Margosari memiliki potensi ekowisata yang kaya, termasuk wisata alam, budaya, dan edukasi lingkungan.<br />
          Salah satu dari lokasi yang berpotensi menjadi destinasi wisata adalah Kalipetir tepatnya di <span className="text-green-600">Pesona Kalipetir Mah Abang, Kalipetir Kidul, Margosari</span> yang menawarkan keindahan alam dan kesempatan untuk belajar tentang keberlanjutan lingkungan. Berikut kami tampilkan mengenai lokasi tersebut. 
        </p>
        <a href="/kalipetir" target="_blank" rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
          Menjelajahi Pesona Kalipetir
        </a>
      </section>

      {/* Program Cards */}
      <section className="container mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Program Kerja Kami
        </h2>
        <Chart programs={programs} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

