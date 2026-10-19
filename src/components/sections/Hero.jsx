import React from 'react';
import { Play, Cpu } from 'lucide-react';

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
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    alt: 'Engineer profesional menguji perangkat IoT di fasilitas modern',
  },
  center: {
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    alt: 'Perakitan papan kontrol sirkuit mikrokontroler IoT Pentarium',
    caption: 'Papan kontrol PentaFlood dan PentaQua',
  },
  right: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
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

      {/* 3 Cinematic 3D Media Cards Matching Reference Photo */}
      <div className="relative z-10 mx-auto max-w-[1040px] px-4 [perspective:1400px] sm:px-6">
        <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-6">
          {/* Left Card: 3D perspective tilted inwards with bottom mask fade */}
          <figure className="group hero-card-interactive hero-card-float-left mask-fade-bottom w-[28%] origin-right z-10">
            <div className="overflow-hidden rounded-[16px] border-2 border-white bg-white/40 shadow-[0_14px_35px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:rounded-[22px] sm:border-3">
              <img
                src={MEDIA.left.src}
                alt={MEDIA.left.alt}
                loading="lazy"
                className="h-[125px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[165px] lg:h-[195px]"
              />
            </div>
          </figure>

          {/* Center Card: Front & Center featured card with play button */}
          <figure className="group hero-card-interactive hero-card-float-center relative w-[44%] z-20">
            <div className="relative overflow-hidden rounded-[20px] border-3 border-white bg-white shadow-[0_20px_50px_rgba(0,0,0,0.14)] sm:rounded-[26px] sm:border-4">
              <img
                src={MEDIA.center.src}
                alt={MEDIA.center.alt}
                className="h-[155px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[205px] lg:h-[245px]"
              />
              <button
                type="button"
                aria-label={`Putar ${MEDIA.center.caption}`}
                className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/60 hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] sm:h-14 sm:w-14"
              >
                <Play className="ml-0.5 h-5 w-5 fill-white text-white sm:h-6 sm:w-6" />
              </button>
            </div>
            <figcaption className="mt-2.5 text-center text-[11px] font-medium text-ink-secondary sm:text-xs">
              {MEDIA.center.caption}
            </figcaption>
          </figure>

          {/* Right Card: 3D perspective tilted inwards with bottom mask fade */}
          <figure className="group hero-card-interactive hero-card-float-right mask-fade-bottom w-[28%] origin-left z-10">
            <div className="overflow-hidden rounded-[16px] border-2 border-white bg-white/40 shadow-[0_14px_35px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:rounded-[22px] sm:border-3">
              <img
                src={MEDIA.right.src}
                alt={MEDIA.right.alt}
                loading="lazy"
                className="h-[125px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[165px] lg:h-[195px]"
              />
            </div>
          </figure>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-[960px] px-4 sm:mt-12 sm:px-10">
        <ClientMarquee />
      </div>
    </section>
  );
}