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
  center: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Papan sirkuit elektronik dengan komponen IoT',
    caption: 'Papan kontrol PentaFlood dan PentaQua',
  },
  left: {
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80',
    alt: 'Sensor lingkungan terpasang di lokasi',
  },
  right: {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    alt: 'Jaringan IoT dan konektivitas',
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
    <div className="border-t border-white/40 py-6 sm:py-7">
      <p className="mb-5 text-center text-[11px] uppercase tracking-[0.18em] text-brand-900/70">
        Terpercaya oleh operator, groundwork, dan instansi
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12 sm:gap-16">
          {row.map((client, idx) => (
            <span
              key={`${client}-${idx}`}
              className="whitespace-nowrap text-sm font-medium tracking-tight text-ink-secondary opacity-70 grayscale transition-colors duration-200 hover:text-brand-700 hover:opacity-100 sm:text-base"
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
    <section id="beranda" className="px-4 pt-24 sm:px-6 sm:pt-28">
      <div
        className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[28px] shadow-floating"
        style={{ backgroundImage: 'var(--gradient-hero)' }}
      >
        <div aria-hidden="true" className="halftone-globe pointer-events-none absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-14 pt-16 text-center sm:px-10 sm:pb-20 sm:pt-24">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-5 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
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

          <h1 className="text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[76px]">
            Your
            <span className="inline-flex translate-y-[-0.06em] items-center justify-center rounded-[16px] bg-[#1A1A1A] p-[0.16em] align-middle">
              <Cpu className="h-[0.6em] w-[0.6em] text-white" aria-hidden="true" />
            </span>{' '}
            IoT Solution
            <br />
            <span className="serif-italic text-[0.78em]">terlengkap di Indonesia</span>
          </h1>

          <p className="mx-auto mt-7 max-w-[620px] text-base leading-relaxed text-white/90 sm:text-lg">
            Kami hadir untuk memberikan solusi atas permasalahan teknologi informasi Anda, dari
            desain, pengembangan perangkat lunak, perangkat keras, hingga solusi IoT.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
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

        <div className="relative z-10 -mx-4 [perspective:1600px] sm:-mx-14">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            <figure className="mask-fade-bottom w-[27%] rotate-y-[12deg]">
              <img
                src={MEDIA.left.src}
                alt={MEDIA.left.alt}
                loading="lazy"
                className="h-[120px] w-full rounded-[24px] border-4 border-white object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:h-[200px]"
              />
            </figure>

            <figure className="relative w-[44%]">
              <img
                src={MEDIA.center.src}
                alt={MEDIA.center.alt}
                className="h-[160px] w-full rounded-[24px] border-4 border-white object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:h-[260px]"
              />
              <button
                type="button"
                aria-label={`Putar ${MEDIA.center.caption}`}
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 backdrop-blur-md transition-transform duration-200 hover:scale-105 sm:h-16 sm:w-16"
              >
                <Play className="ml-0.5 h-5 w-5 fill-white text-white sm:h-6 sm:w-6" />
              </button>
              <figcaption className="mt-3 text-center text-[13px] font-medium text-ink-secondary">
                {MEDIA.center.caption}
              </figcaption>
            </figure>

            <figure className="mask-fade-bottom w-[27%] -rotate-y-[12deg]">
              <img
                src={MEDIA.right.src}
                alt={MEDIA.right.alt}
                loading="lazy"
                className="h-[120px] w-full rounded-[24px] border-4 border-white object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:h-[200px]"
              />
            </figure>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 max-w-[1000px] px-4 sm:mt-14 sm:px-10">
          <ClientMarquee />
        </div>
      </div>
    </section>
  );
}