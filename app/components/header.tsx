'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname(); // ✅ Mendapatkan path URL
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white/70 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo + Judul */}
        <a href='/'>
        <div className="flex items-center space-x-3">
          <Image src={`${process.env.NODE_ENV === "production" ? "" : ""}/images/logo-ugm.png`} alt="University Logo" className="h-12 w-12 object-contain" width={500} height={500} />
          <Image src={`${process.env.NODE_ENV === "production" ? "" : ""}/images/kkn-ppm-logo.png`} alt="KKN PPM UGM Logo" className="h-10 w-10 object-contain" width={500} height={500} />
          <Image src={`${process.env.NODE_ENV === "production" ? "" : ""}/images/PNG_LOGO_PENGASIH.png`} alt="Logo" className="h-12 w-12 object-contain" width={500} height={500} />
          <h1 className="text-xl lg:text-2xl font-bold text-foreground">Meraih Pengasih</h1>
        </div>
        </a>

        {/* Tombol Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {!open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex" aria-label="Main navigation">
          <ul className="flex space-x-4 xl:space-x-6">
            <li>
              <a
                href={`${process.env.NODE_ENV === "production" ? "" : ""}/`}
                className={pathname === '/' ? 'font-semibold underline' : 'text-muted-foreground hover:transition-colors'}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href={`${process.env.NODE_ENV === "production" ? "" : ""}/proker`}
                className={pathname.startsWith('/proker') ? 'font-semibold underline' : 'text-muted-foreground hover:transition-colors'}
              >
                Proker
              </a>
            </li>
            <li>
              <a
                href={`${process.env.NODE_ENV === "production" ? "" : ""}/kalipetir`}
                className={pathname.startsWith('/kalipetir') ? 'font-semibold underline' : 'text-muted-foreground hover:transition-colors'}
              >
                Ekowisata 
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="lg:hidden bg-secondary border-t border-border" aria-label="Mobile navigation">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <a
                href={`${process.env.NODE_ENV === "production" ? "" : ""}/`}
                onClick={() => setOpen(false)}
                className={pathname === '/' ? 'block font-semibold underline' : 'block text-secondary-foreground hover:transition-colors'}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href={`${process.env.NODE_ENV === "production" ? "" : ""}/proker`}
                onClick={() => setOpen(false)}
                className={pathname.startsWith('/proker') ? 'font-semibold underline' : 'text-muted-foreground hover:transition-colors'}
              >
                Proker
              </a>
            </li>
            <li>
              <a
                href={`${process.env.NODE_ENV === "production" ? "" : ""}/kalipetir`}
                onClick={() => setOpen(false)}
                className={pathname.startsWith('/kalipetir') ? 'font-semibold underline' : 'text-muted-foreground hover:transition-colors'}
              >
                Ekowisata 
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

