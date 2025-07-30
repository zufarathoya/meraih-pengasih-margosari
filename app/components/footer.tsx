import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="bg-stone-800 text-stone-300 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="flex justify-center content-center items-center">
            <Image 
              src={`${process.env.NODE_ENV === "production" ? "/meraih-pengasih-margosari" : ""}/images/PNG_LOGO_PENGASIH.png`} 
              alt="University Logo" 
              className="h-7 w-7 mx-3" 
              width={500} 
              height={500} 
            />
            <p className="font-bold text-lg text-white">Meraih Pengasih</p>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-white font-semibold mb-3">Tentang Kami</h3>
              <p className="text-sm">
                Program KKN-PPM UGM YO-062 bertujuan untuk memberdayakan masyarakat melalui berbagai kegiatan inovatif dan berkelanjutan.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-white font-semibold mb-3">Kontak</h3>
              <ul className="text-sm space-y-2">
                <li>Lokasi: Kapanewon Pengasih, Kulon Progo</li>
                <li>Instagram: @meraih.pengasih</li>
              </ul>
            </div>
            
            <div className="text-left">
              <h3 className="text-white font-semibold mb-3">Link Cepat</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Beranda</a></li>
                <li><a href="#" className="hover:text-white transition">Program</a></li>
                <li><a href="#" className="hover:text-white transition">Galeri</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-stone-700">
            <p className="text-sm text-stone-400">
              &copy; 2025 KKN-PPM UGM YO-062.
            </p>
            <p className="text-xs mt-2 text-stone-500">
              Dari Pengasih untuk Pengasih.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
