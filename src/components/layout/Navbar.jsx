import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo pentarium.png" alt="Pentarium Logo" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#beranda" className="text-slate-700 hover:text-primary font-semibold transition-colors">Beranda</a>
          <a href="#tentang" className="text-slate-700 hover:text-primary font-semibold transition-colors">Tentang Kami</a>
          <a href="#layanan" className="text-slate-700 hover:text-primary font-semibold transition-colors">Layanan</a>
          <a href="#produk" className="text-slate-700 hover:text-primary font-semibold transition-colors">Produk</a>
        </div>

        <div className="hidden md:block">
          <a href="#kontak" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_4px_15px_rgba(0,180,216,0.4)] hover:-translate-y-0.5">
            Hubungi Kami
          </a>
        </div>

        <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
