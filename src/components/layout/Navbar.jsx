import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Legalitas', href: '#legalitas' },
    { name: 'Tim', href: '#tim' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Produk', href: '#produk' },
    { name: 'Proyek', href: '#proyek' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo pentarium.png" alt="Pentarium Logo" className="h-10 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-primary font-semibold text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#kontak"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_4px_15px_rgba(0,180,216,0.4)] hover:-translate-y-0.5 inline-block"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-primary hover:bg-slate-50 px-3 py-2 rounded-xl font-semibold text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-full font-bold text-sm transition-all shadow-md"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
