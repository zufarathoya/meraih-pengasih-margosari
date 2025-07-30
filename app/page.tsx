'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
import { LoremIpsum } from "lorem-ipsum";
import Kalipetir from './kalipetir/page';

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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Selamat Datang di Website Proker Kami!
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Kami hadir untuk mendigitalisasi program kerja dengan lebih efisien,
          informatif, dan mudah diakses.
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
