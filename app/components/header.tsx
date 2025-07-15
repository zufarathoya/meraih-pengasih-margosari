import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState('index.html');
  const [open, setOpen] = useState(false);
  
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Judul */}
        <div className="flex items-center space-x-3">
          <Image src="/images/logo-ugm.png" alt="University Logo" className="h-12 w-12 object-contain" width={500}
            height={500} />
          <Image src="/images/kkn-ppm-logo.png" alt="KKN PPM UGM Logo" className="h-10 w-10 object-contain" width={500}
            height={500} />
          <Image src="/images/PNG_LOGO_PENGASIH.png" alt="Umbulharjo Logo" className="h-12 w-12 object-contain" width={500}
            height={500} />
          <h1 className="text-xl lg:text-2xl font-bold text-foreground">Meraih Pengasih</h1>
        </div>

        {/* Tombol Mobile Menu (LG ke bawah) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-expanded={open.toString()}
          aria-label="Toggle navigation"
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

        {/* Desktop navigation (LG ke atas) */}
        <nav className="hidden lg:flex" aria-label="Main navigation">
          <ul className="flex space-x-4 xl:space-x-6">
            <li>
              <a
                href="index.html"
                onClick={() => setOpen(false)}
                className={active === 'index.html'
                  ? ' font-semibold'
                  : 'text-muted-foreground hover: transition-colors'}
              >
                Beranda
              </a>
            </li>
            {/*<li>
              <a
                href="waste-types.html"
                onClick={() => setOpen(false)}
                className={active === 'waste-types.html'
                  ? ' font-semibold'
                  : 'text-muted-foreground hover: transition-colors'}
              >
                Jenis Sampah
              </a>
            </li>
            <li>
              <a
                href="waste-management.html"
                onClick={() => setOpen(false)}
                className={active === 'waste-management.html'
                  ? ' font-semibold'
                  : 'text-muted-foreground hover: transition-colors'}
              >
                Pengelolaan
              </a>
            </li>
            <li>
              <a
                href="waste-impacts.html"
                onClick={() => setOpen(false)}
                className={active === 'waste-impacts.html'
                  ? ' font-semibold'
                  : 'text-muted-foreground hover: transition-colors'}
              >
                Dampak
              </a>
            </li>
            <li>
              <a
                href="waste-banks.html"
                onClick={() => setOpen(false)}
                className={active === 'waste-banks.html'
                  ? ' font-semibold'
                  : 'text-muted-foreground hover: transition-colors'}
              >
                Bank Sampah
              </a>
            </li>*/}
          </ul>
        </nav>
      </div>

      {/* Mobile navigation (LG ke bawah) */}
      {open && (
        <nav className="lg:hidden bg-secondary border-t border-border" aria-label="Mobile navigation">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <a
                href="index.html"
                onClick={() => setOpen(false)}
                className={active === 'index.html'
                  ? 'block  font-semibold'
                  : 'block text-secondary-foreground hover: transition-colors'}
              >
                Beranda
              </a>
            </li>
            {/*<li>
              <a
                href="waste-types.html"
                onClick={() => setOpen(false)}
                className={active === 'waste-types.html'
                  ? 'block  font-semibold'
                  : 'block text-secondary-foreground hover: transition-colors'}
              >
                Jenis Sampah
              </a>
            </li>
            <li>
              <a
                href="waste-management.html"
                onClick={() => setOpen(false)}
                className={active === 'waste-management.html'
                  ? 'block  font-semibold'
                  : 'block text-secondary-foreground hover: transition-colors'}
              >
                Pengelolaan
              </a>
            </li>
            <li>
              <a
                href="waste-impacts.html"
                onClick={() => setOpen(false)}
                className={active === 'waste-impacts.html'
                  ? 'block  font-semibold'
                  : 'block text-secondary-foreground hover: transition-colors'}
              >
                Dampak
              </a>
            </li>
            <li>
              <a
                href="waste-banks.html"
                onClick={() => setOpen(false)}
                className={active === 'waste-banks.html'
                  ? 'block  font-semibold'
                  : 'block text-secondary-foreground hover: transition-colors'}
              >
                Bank Sampah
              </a>
            </li>*/}
          </ul>
        </nav>
      )}
    </header>

  )
}
export default Header;
