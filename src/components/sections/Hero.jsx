import React from 'react';

const CLIENTS = [
  'Telkom Indonesia',
  'Pertamina Drilling',
  'Mitratel',
  'Antares',
  'PDAM Kota Bandung',
  'Lippo Village',
  'The Jungle Bogor',
  'Tirtawening',
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden"
      style={{ backgroundImage: 'var(--gradient-hero)' }}
    >
      {/* 3D Halftone Dotted Globe Background */}
      <div aria-hidden="true" className="halftone-globe pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-4 pt-32 text-center sm:px-10 sm:pb-8 sm:pt-40">
        {/* Heading: Clean, elegant typography without the icon badge */}
        <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.1)] sm:text-[54px] lg:text-[68px]">
          Your IoT Solution
          <br />
          <span className="serif-italic font-normal text-[0.82em] text-white/95">
            terlengkap di Indonesia
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-[620px] text-sm leading-relaxed text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.12)] sm:text-base">
          Kami hadir untuk memberikan solusi atas permasalahan teknologi informasi Anda, dari
          desain, pengembangan perangkat lunak, perangkat keras, hingga solusi IoT.
        </p>

        {/* Single Centered Glossy Black CTA Button */}
        <div className="mt-8 flex items-center justify-center">
          <a
            href="#produk"
            className="btn-glossy px-8 py-3.5 text-base shadow-xl hover:scale-105 transition-transform"
          >
            Lihat Produk
          </a>
        </div>
      </div>

      {/* 3 Widescreen Cards in 3D Perspective ("agak miring-miring") matching reference visual */}
      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-3 sm:px-6 lg:px-8 mt-6 sm:mt-10 hero-3d-stage">
        {/* Soft bottom gradient mist fading the cards into the white section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-3 h-32 sm:h-44 md:h-56 bg-gradient-to-t from-white via-white/90 to-transparent z-30"
        />

        <div className="flex items-center justify-center -space-x-6 sm:-space-x-10 md:-space-x-14 lg:-space-x-16">
          {/* Left Card: Field Assembly (img_15.jpg) - 3D Tilted Concave towards center */}
          <div className="hero-card-left group w-[34%] sm:w-[33%] lg:w-[32%] z-10 shrink-0">
            <div className="overflow-hidden rounded-[20px] sm:rounded-[30px] lg:rounded-[36px] border border-white/60 bg-slate-900/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-sm">
              <img
                src="/extracted/img_15.jpg"
                alt="Automatic Weather Station Field Assembly"
                loading="lazy"
                className="h-[180px] sm:h-[250px] md:h-[310px] lg:h-[370px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Center Card: Command Center (img_29.jpg) - Front, elevated photo card */}
          <div className="hero-card-center group relative w-[42%] sm:w-[40%] lg:w-[38%] z-20 shrink-0">
            <div className="relative overflow-hidden rounded-[22px] sm:rounded-[32px] lg:rounded-[40px] border-2 sm:border-[3px] border-white bg-slate-900/10 shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
              <img
                src="/extracted/img_29.jpg"
                alt="Integrated Command Center Monitoring System"
                className="h-[210px] sm:h-[280px] md:h-[350px] lg:h-[415px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Card: Solar Telemetry (img_13.jpg) - 3D Tilted Concave towards center */}
          <div className="hero-card-right group w-[34%] sm:w-[33%] lg:w-[32%] z-10 shrink-0">
            <div className="overflow-hidden rounded-[20px] sm:rounded-[30px] lg:rounded-[36px] border border-white/60 bg-slate-900/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-sm">
              <img
                src="/extracted/img_13.jpg"
                alt="PentaFlood Solar Telemetry Deployment"
                loading="lazy"
                className="h-[180px] sm:h-[250px] md:h-[310px] lg:h-[370px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Partner / Client Marquee ("ini nya gerak") */}
      <div className="relative z-10 w-full overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-18 select-none">
        {/* Soft edge fade for marquee */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-white to-transparent z-20" />

        <div className="marquee-track flex w-max items-center hover:[animation-play-state:paused]">
          {/* Set 1 */}
          <div className="flex items-center gap-10 sm:gap-16 lg:gap-20 pr-10 sm:pr-16 lg:pr-20 shrink-0">
            {CLIENTS.map((client) => (
              <span
                key={`s1-${client}`}
                className="font-sans font-black text-sm sm:text-base tracking-widest uppercase text-slate-800/60 hover:text-brand-700 transition-colors whitespace-nowrap cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
          {/* Set 2 (for seamless infinite loop) */}
          <div
            className="flex items-center gap-10 sm:gap-16 lg:gap-20 pr-10 sm:pr-16 lg:pr-20 shrink-0"
            aria-hidden="true"
          >
            {CLIENTS.map((client, idx) => (
              <span
                key={`s2-${client}-${idx}`}
                className="font-sans font-black text-sm sm:text-base tracking-widest uppercase text-slate-800/60 hover:text-brand-700 transition-colors whitespace-nowrap cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
