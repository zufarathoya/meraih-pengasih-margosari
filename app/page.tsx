'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
import { LoremIpsum } from "lorem-ipsum";

const HomePage = () => {
  // const [open, setOpen] = useState(false);
  const [active, setActive] = useState('index.html');

  useEffect(() => {
    // Set active based on current path
    const path = window.location.pathname.split('/').pop() || 'index.html';
    setActive(path);
  }, []);

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content: Pesona Kalipetir */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Menjelajahi Pesona Kalipetir
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {lorem.generateWords(30)}
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Gambar Utama */}
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/kalipetir-landscape.jpg" // Ganti dengan path gambar Anda
              alt="Pemandangan Kalipetir"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Deskripsi Sejarah */}
          <div className="text-gray-700">
            <h2 className="text-3xl font-bold mb-3">{lorem.generateWords(4)}</h2>
            <p className="mb-4">
              {lorem.generateWords(50)}
            </p>
            <p>
              {lorem.generateSentences(3)}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Daya Tarik Utama Kalipetir</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Keindahan Alam */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Keindahan Alam yang Asri</h3>
              <p className="text-gray-600">
                {lorem.generateSentences(3)}
              </p>
            </div>

            {/* Card 2: Spot Fotografi */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Spot Fotografi Instagramable</h3>
              <p className="text-gray-600">
                {lorem.generateSentences(3)}
              </p>
            </div>

            {/* Card 3: Aktivitas Rekreasi */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Aktivitas Rekreasi & Lokal</h3>
              <p className="text-gray-600">
                {lorem.generateSentences(3)}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
