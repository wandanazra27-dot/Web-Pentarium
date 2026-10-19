import React from 'react';
import Reveal from '../ui/Reveal';
import ScrollWords from '../ui/ScrollWords';
import SectionCard from '../ui/SectionCard';

const STATEMENT =
  'Formed specifically for IoT solution in Indonesia, we take responsibility all the way from design, software development, hardware, maintenance, and IoT solution.';

const VISION =
  'Become an Information and Technology company who can compete in global world nowadays, and become a company who can contribute to our society in IT field.';

const MISSION = [
  'Put forward our professionalism, individual skills, and teamwork to produce the best product.',
  'Give best solution to our partner to handle any problems in IT sector.',
];

const DIVISIONS = [
  { name: 'IoT', detail: 'Internet of Things' },
  { name: 'Software', detail: 'Mobile apps & web application' },
  { name: 'Hardware', detail: 'Perangkat dan board kontrol' },
  { name: 'Design', detail: 'Antarmuka dan identitas produk' },
];

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat elektronik yang dirakit di meja kerja',
    className: 'lg:-translate-y-3 lg:-rotate-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'Papan kontrol elektronik dalam proses perakitan',
    className: 'lg:translate-y-6 lg:rotate-1',
  },
];

export default function About() {
  return (
    <SectionCard id="tentang" containerClassName="mt-16 lg:mt-20" className="p-8 sm:p-12 lg:p-16">
      <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-brand-700">
        Tentang Pentarium
      </p>

      <ScrollWords
        text={STATEMENT}
        className="mt-6 max-w-[17ch] text-[34px] font-medium leading-[1.12] tracking-[-0.02em] sm:max-w-none sm:text-[40px] lg:max-w-[26ch] lg:text-[44px]"
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5">
        {PHOTOS.map((photo, idx) => (
          <Reveal
            as="figure"
            key={photo.src}
            delay={idx * 80}
            className={`overflow-hidden rounded-[24px] ${photo.className}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-[170px] w-full object-cover sm:h-[280px] lg:h-[340px]"
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 border-t border-black/[0.07] pt-12 lg:mt-24 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <Reveal className="max-w-[56ch]">
          <p className="text-base leading-relaxed text-ink-secondary sm:text-lg">
            We make our business to provide our customers with cost effective and reliable solutions to
            all their digital needs. Our commitment to performance excellence and un-matched customer
            services is what allows us to keep our valuable customers, and is what make us different
            from our peers.
          </p>

          <dl className="mt-10 space-y-8">
            <div>
              <dt className="text-[13px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                Our Vision
              </dt>
              <dd className="mt-2 text-xl leading-relaxed text-ink sm:text-2xl">{VISION}</dd>
            </div>
            <div>
              <dt className="text-[13px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                Our Mission
              </dt>
              <dd className="mt-2">
                <ul className="space-y-3 text-xl leading-relaxed text-ink sm:text-2xl">
                  {MISSION.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={80} className="card-inner self-start p-7 sm:p-8">
          <h3 className="text-[13px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Our Divisions
          </h3>
          <ol className="mt-6 space-y-5">
            {DIVISIONS.map((division, idx) => (
              <li key={division.name} className="flex gap-4 border-b border-black/[0.06] pb-5 last:border-0 last:pb-0">
                <span className="font-mono text-xs text-brand-700">{String(idx + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block text-lg font-medium text-ink">{division.name}</span>
                  <span className="block text-sm text-ink-secondary">{division.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </SectionCard>
  );
}