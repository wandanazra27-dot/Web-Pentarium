import React from 'react';
import { Cpu } from 'lucide-react';

const AVATARS = [
  { initials: 'TP', label: 'Toni Prabowo, CEO' },
  { initials: 'WJ', label: 'Waluya Juang, CTO' },
  { initials: 'AB', label: 'Agus Budiantoro, COO' },
];

const CLIENTS = [
  'Telkom Indonesia',
  'Pertamina Drilling',
  'Mitratel',
  'Antares',
  'PDAM Kota Bandung',
  'Edu Media Digital',
  'The Jungle Bogor',
  'LapakPOS',
];

const MEDIA = {
  left: {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engineer profesional menguji perangkat IoT di fasilitas modern',
  },
  center: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    alt: 'Papan kontrol elektronik IoT Pentarium',
    caption: 'Papan kontrol PentaFlood dan PentaQua',
  },
  right: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dashboard monitoring telemetri dan analitik IoT real-time',
  },
};

function Avatar({ initials, label }) {
  return (
    <span
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-[10px] font-semibold tracking-tight text-white ring-2 ring-white"
    >
      {initials}
    </span>
  );
}

function ClientMarquee() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <div className="border-t border-black/[0.06] py-6 sm:py-8">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
        Terpercaya oleh operator, groundwork, dan instansi
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12 sm:gap-16">
          {row.map((client, idx) => (
            <span
              key={`${client}-${idx}`}
              className="whitespace-nowrap text-sm font-semibold tracking-wide text-ink-secondary/70 transition-colors duration-200 hover:text-brand-700 sm:text-base"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden"
      style={{ backgroundImage: 'var(--gradient-hero)' }}
    >
      <div aria-hidden="true" className="halftone-globe pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-10 pt-28 text-center sm:px-10 sm:pb-14 sm:pt-34">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          <div className="flex items-center">
            {AVATARS.map((avatar, idx) => (
              <span key={avatar.initials} className={idx > 0 ? '-ml-2' : ''}>
                <Avatar {...avatar} />
              </span>
            ))}
          </div>
          <span className="whitespace-nowrap text-[13px] font-medium text-ink">
            5 tim teknis sejak 2020
          </span>
        </div>

        <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:text-[52px] lg:text-[68px]">
          Your
          <span className="inline-flex translate-y-[-0.06em] items-center justify-center rounded-[16px] bg-[#1A1A1A] p-[0.16em] align-middle shadow-md">
            <Cpu className="h-[0.6em] w-[0.6em] text-white" aria-hidden="true" />
          </span>{' '}
          IoT Solution
          <br />
          <span className="serif-italic text-[0.78em]">terlengkap di Indonesia</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[600px] text-sm leading-relaxed text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.12)] sm:text-base">
          Kami hadir untuk memberikan solusi atas permasalahan teknologi informasi Anda, dari
          desain, pengembangan perangkat lunak, perangkat keras, hingga solusi IoT.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#produk" className="btn-glossy">
            Lihat Produk
          </a>
          <a
            href="#tentang"
            className="rounded-full border border-white/70 bg-white/10 px-6 py-[13px] text-[15px] font-semibold text-white backdrop-blur-[12px] transition-colors duration-200 hover:bg-white/20"
          >
            Tentang Kami
          </a>
        </div>
      </div>

      {/* 3 Widescreen Rectangular (Persegi Panjang) Media Cards */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 [perspective:1400px] sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-6">
          {/* Left Card: Widescreen horizontal rectangle with subtle 1px border */}
          <figure className="group hero-card-interactive hero-card-float-left mask-fade-bottom w-[30%] lg:w-[31%] origin-right z-10">
            <div className="overflow-hidden rounded-[18px] border border-white/40 bg-white/30 shadow-[0_16px_40px_rgba(0,0,0,0.07)] backdrop-blur-sm sm:rounded-[24px]">
              <img
                src={MEDIA.left.src}
                alt={MEDIA.left.alt}
                loading="lazy"
                className="h-[125px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[165px] md:h-[195px] lg:h-[225px]"
              />
            </div>
          </figure>

          {/* Center Card: Front & Center widescreen horizontal rectangle, subtle 1px border, NO play button */}
          <figure className="group hero-card-interactive hero-card-float-center relative w-[40%] lg:w-[38%] z-20">
            <div className="relative overflow-hidden rounded-[20px] border border-white/50 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.12)] sm:rounded-[28px]">
              <img
                src={MEDIA.center.src}
                alt={MEDIA.center.alt}
                className="h-[150px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[200px] md:h-[240px] lg:h-[275px]"
              />
            </div>
            <figcaption className="mt-2.5 text-center text-[11px] font-medium text-ink-secondary sm:text-xs">
              {MEDIA.center.caption}
            </figcaption>
          </figure>

          {/* Right Card: Widescreen horizontal rectangle with subtle 1px border */}
          <figure className="group hero-card-interactive hero-card-float-right mask-fade-bottom w-[30%] lg:w-[31%] origin-left z-10">
            <div className="overflow-hidden rounded-[18px] border border-white/40 bg-white/30 shadow-[0_16px_40px_rgba(0,0,0,0.07)] backdrop-blur-sm sm:rounded-[24px]">
              <img
                src={MEDIA.right.src}
                alt={MEDIA.right.alt}
                loading="lazy"
                className="h-[125px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[165px] md:h-[195px] lg:h-[225px]"
              />
            </div>
          </figure>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-[1040px] px-4 sm:mt-12 sm:px-10">
        <ClientMarquee />
      </div>
    </section>
  );
}