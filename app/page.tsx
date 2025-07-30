'use client'
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Image from 'next/image';
import Chart from './components/card';
import { programs } from './data/prokerData';

const HomePage = () => {
  const [active, setActive] = useState('index.html');

  useEffect(() => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    setActive(path);
  }, []);

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-24">

          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span className="text-yellow-700 font-semibold text-sm uppercase tracking-wider">
              Program Kerja KKN
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
              Dokumentasi & Informasi <br />
              <span className="text-yellow-600">Kegiatan Kami</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Menyajikan seluruh program kerja yang telah kami lakukan
              untuk meningkatkan kesejahteraan masyarakat dan keberlanjutan lingkungan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/proker"
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition text-center"
              >
                Lihat Program Kerja
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-yellow-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <Image
              src="https://margosari.id/desa/upload/fmedia/WhatsApp%20Image%202025-07-10%20at%2008-02-06.jpg"
              alt="Kegiatan Masyarakat"
              width={420}
              height={320}
              className="rounded-2xl shadow-xl relative z-10"
            />
          </div>
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
          Salah satu dari lokasi yang berpotensi menjadi destinasi wisata adalah Kalipetir tepatnya di <span className="text-yellow-600">Pesona Kalipetir Mah Abang, Kalipetir Kidul, Margosari</span> yang menawarkan keindahan alam dan kesempatan untuk belajar tentang keberlanjutan lingkungan. Berikut kami tampilkan mengenai lokasi tersebut.
        </p>
        <a href="/kalipetir" target="_blank" rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition">
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

