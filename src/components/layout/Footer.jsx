import React from 'react';
import { ArrowUpRight, MapPin, Clock, Cpu } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Tim Pentarium', href: '#tim' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Produk', href: '#produk' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Kontak', href: '#kontak' },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-white text-ink overflow-hidden">
      {/* 1. Pre-Footer CTA Section (Clean White Canvas) */}
      <div className="relative z-10 bg-white">
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pt-20 sm:pt-28 pb-10 sm:pb-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold leading-tight tracking-[-0.02em] text-ink">
                <span className="serif-italic font-normal">Ready</span> to build smart IoT solutions?
              </h2>
              <p className="mt-3 text-base sm:text-lg text-ink-secondary max-w-2xl">
                Diskusikan kebutuhan teknologi, hardware kontrol, dan sistem telemetri IoT Anda bersama tim ahli Pentarium.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#kontak"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0E8A80] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(14,138,128,0.28)] transition-all duration-300 hover:bg-[#0A6B63] hover:shadow-[0_16px_36px_rgba(14,138,128,0.38)] hover:scale-[1.02]"
              >
                <span>Mulai Konsultasi IoT</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Seamless Organic Liquid Wave Transition (InvestUp Style) */}
      <div className="relative w-full leading-none select-none overflow-visible">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-44 sm:h-56 lg:h-72 block overflow-visible"
          preserveAspectRatio="none"
          style={{ marginBottom: '-2px' }}
          aria-hidden="true"
        >
          <defs>
            {/* Luminous aura blur filter: bleeds softly into the white pre-footer */}
            <filter id="liquidAuraFilter" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="28" />
            </filter>

            {/* Crest rim highlight blur filter */}
            <filter id="crestRimFilter" x="-20%" y="-30%" width="140%" height="160%">
              <feGaussianBlur stdDeviation="10" />
            </filter>

            {/* Soft wave body edge filter for liquid smoothness */}
            <filter id="softWaveFilter" x="-10%" y="-20%" width="120%" height="140%">
              <feGaussianBlur stdDeviation="5" />
            </filter>

            {/* Gradient: Soft Luminous Aura (Bleeds up into white) */}
            <linearGradient id="liquidAuraGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0E8A80" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#0A6B63" stopOpacity="0.65" />
              <stop offset="70%" stopColor="#043833" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#02201D" stopOpacity="0" />
            </linearGradient>

            {/* Gradient: Luminous Crest Rim (Vibrant tosca/cyan liquid rim) */}
            <linearGradient id="crestRimGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#0E8A80" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#05453E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#02201D" stopOpacity="0" />
            </linearGradient>

            {/* Gradient: Solid Wave Body (Richer, darker tosca down to #02201D) */}
            <linearGradient id="solidWaveBodyGrad" x1="0" y1="0" x2="0" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#074E47" />
              <stop offset="30%" stopColor="#043A34" />
              <stop offset="65%" stopColor="#032B27" />
              <stop offset="100%" stopColor="#02201D" />
            </linearGradient>
          </defs>

          {/* Layer 1: Ethereal Aura Bleed (Radiates ~40px into the white canvas) */}
          <path
            d="M-20,125 C240,25 440,195 720,115 C980,35 1220,155 1460,80 L1460,260 L-20,260 Z"
            fill="url(#liquidAuraGrad)"
            filter="url(#liquidAuraFilter)"
          />

          {/* Layer 2: Luminous Liquid Crest Rim */}
          <path
            d="M-20,132 C240,32 440,202 720,122 C980,42 1220,162 1460,87 L1460,280 L-20,280 Z"
            fill="url(#crestRimGrad)"
            filter="url(#crestRimFilter)"
          />

          {/* Layer 3: Main Wave Body (Silky smoothed edge) */}
          <path
            d="M-20,140 C240,40 440,210 720,130 C980,50 1220,170 1460,95 L1460,340 L-20,340 Z"
            fill="url(#solidWaveBodyGrad)"
            filter="url(#softWaveFilter)"
          />

          {/* Layer 4: Solid 100% Opaque Base Rect (Guarantees zero gap at bottom) */}
          <rect x="-20" y="240" width="1500" height="100" fill="#02201D" />
        </svg>
      </div>

      {/* 3. Deep Dark Footer Body (Seamless continuation of #02201D) */}
      <div className="relative z-10 bg-gradient-to-b from-[#02201D] via-[#011B19] to-[#011412] text-white pt-6 pb-10 sm:pb-14">
        {/* Subtle interior ambient light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-teal-400/5 rounded-full blur-[140px]"
        />

        {/* Footer Content */}
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 relative z-20">
          {/* Main Footer Content Grid */}
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_1fr] lg:gap-16 pt-4 pb-16 border-b border-white/10">
            {/* Left Column: Email & Phone */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300/80 mb-2">
                Email
              </p>
              <a
                href="mailto:mail@pentarium.id"
                className="block text-2xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-teal-200 sm:text-3xl lg:text-[38px]"
              >
                mail@pentarium.id
              </a>
              <a
                href="mailto:pentarium.id@gmail.com"
                className="mt-1 block text-sm text-teal-100/70 transition-colors hover:text-white"
              >
                pentarium.id@gmail.com
              </a>

              <div className="mt-8 sm:mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300/80 mb-2">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+6285624536408"
                  className="block text-2xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-teal-200 sm:text-3xl lg:text-[38px]"
                >
                  +62 856-2453-6408
                </a>
                <span className="mt-1.5 block text-sm text-teal-100/75">
                  Toni Prabowo &bull; Konsultasi Cepat & Solutif
                </span>
              </div>
            </div>

            {/* Middle Column: Navigation Links */}
            <div className="lg:pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300/80 mb-5">
                Navigasi
              </p>
              <ul className="space-y-3.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block text-[15px] font-medium text-white/85 transition-all duration-200 hover:translate-x-1.5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Office & Service Info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300/80 mb-3">
                Address / Kantor
              </p>
              <div className="flex items-start gap-3 text-[15px] leading-relaxed text-white/90">
                <MapPin className="h-5 w-5 shrink-0 text-teal-300 mt-0.5" />
                <p>
                  Manglayang Regency Blok i13 No.5c<br />
                  Bandung, Jawa Barat 40625, Indonesia<br />
                  <span className="text-xs font-mono text-teal-200/60">-6.92062, 107.74152</span>
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 text-sm text-white/85">
                  <Clock className="h-4 w-4 shrink-0 text-teal-300 mt-1" />
                  <div>
                    <span className="font-semibold text-white">Jam Operasional:</span>
                    <p className="text-teal-100/75">Senin – Jumat, 08.00 – 17.00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-white/85">
                  <Cpu className="h-4 w-4 shrink-0 text-teal-300 mt-1" />
                  <div>
                    <span className="font-semibold text-white">Fokus Solusi:</span>
                    <p className="text-teal-100/75">Hardware IoT &bull; Firmware Controller &bull; Telemetri & Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Giant Brand Typography (InvestUp Reference Style) */}
          <div className="relative mt-8 sm:mt-12 overflow-hidden select-none">
            <h2 className="text-[16vw] sm:text-[17vw] lg:text-[230px] font-black leading-[0.8] tracking-[-0.05em] text-white/95 uppercase text-center sm:text-left -mb-4 sm:-mb-7 lg:-mb-12">
              Pentarium
            </h2>
          </div>

          {/* Copyright Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-teal-100/60 border-t border-white/10">
            <p>&copy; {CURRENT_YEAR} PT. Penta Digital Nusantara. All Rights Reserved.</p>
            <p className="text-teal-100/70">Solusi IoT &bull; Hardware &bull; Software &bull; Telemetri Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
