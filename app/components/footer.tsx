import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

const Footer = (props: {}) => {

  const [open, setOpen] = useState(false);
  return (
    <div>
      <footer className="bg-stone-800 text-stone-300 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="flex justify-center content-center">
            <Image src="/images/PNG_LOGO_PENGASIH.png" alt="University Logo" className="h-7 w-7 mx-10" width={500} height={500} />
            <p className="font-bold text-lg text-white">Meraih Pengasih</p>
          </div>
          <p className="mt-2 max-w-xl mx-auto">
            Gunakan internet secara Cerdas, Berhati-hati, dan Bertanggung Jawab.
            Jadilah Jagoan Siber yang menyebarkan hal-hal positif.
          </p>
          <p className="mt-6 text-sm text-stone-400">
            &copy; 2025 KKN-PPM UGM YO-062.
          </p>
        </div>
      </footer>
    </div>
  )
}
export default Footer;
