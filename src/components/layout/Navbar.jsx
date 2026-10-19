import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Single source of truth for navigation.
 * `path` is where each item is headed once multi-page routing lands;
 * `href` keeps the current anchor behaviour working until then.
 */
const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda', path: '/' },
  { label: 'Tentang Kami', href: '#tentang', path: '/tentang' },
  { label: 'Legalitas', href: '#legalitas', path: '/tentang' },
  { label: 'Tim', href: '#tim', path: '/tentang' },
  { label: 'Layanan', href: '#layanan', path: '/layanan' },
  { label: 'Produk', href: '#produk', path: '/produk' },
  { label: 'Proyek', href: '#proyek', path: '/produk' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('beranda');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean);
    if (!sections.length) return;

    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0];
      for (const section of sections) {
        if (section.offsetTop <= marker) current = section;
      }
      setActiveId(current.id);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-canvas/75 backdrop-blur-[12px] border-b border-black/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="#beranda" aria-label="Pentarium" className="block h-9 w-9 shrink-0 overflow-hidden sm:h-10 sm:w-10">
            <img
              src="/logo pentarium.png"
              alt="Pentarium"
              className="h-9 w-9 origin-top scale-[1.22] brightness-0 sm:h-10 sm:w-10"
            />
          </a>

          <nav
            aria-label="Utama"
            className="hidden items-center gap-1 rounded-full bg-white/80 p-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-[12px] lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-white text-ink shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
                      : 'text-ink-secondary hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a href="#kontak" className="btn-glossy btn-sm hidden sm:inline-flex">
              Contact Us
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-ink shadow-[0_2px_6px_rgba(0,0,0,0.04)] backdrop-blur-[12px] transition-colors hover:bg-white lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-black/[0.06] bg-canvas/95 backdrop-blur-[12px] transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pb-5 pt-2 sm:px-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? 'bg-white text-ink' : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#kontak"
            onClick={() => setIsMenuOpen(false)}
            className="btn-glossy btn-sm mt-2 w-full"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}