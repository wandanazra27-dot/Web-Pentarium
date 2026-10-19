import React from 'react';
import Reveal from '../ui/Reveal';
import SectionCard from '../ui/SectionCard';

const SERVICES = [
  {
    category: 'Software Development',
    title: 'Mobile apps & web application',
    desc: 'Develop mobile apps and web application, starting from requirement mapping, interface design, until the application runs on the client device.',
    tags: ['LapakPOS', 'Antares', 'PentaQue', 'Emergency Button'],
    note: 'LapakPOS mencatat transaksi toko, Antares collaborate dengan platform IoT, PentaQue untuk sistem antrean, Emergency Button melaporkan kondisi darurat ke rumah sakit terdekat.',
    photo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Papan sirkuit sebagai representasi pengembangan perangkat keras dan lunak',
  },
  {
    category: 'IoT Solution',
    title: 'LoRaWAN connectivity integration',
    desc: 'We provide tools that could connected to BTS LoRaWAN owned by PT. Telekomunikasi Indonesia, covering Java Island, Sumatra and Bali.',
    tags: ['LoRaWAN', 'Telkom Indonesia', 'Java', 'Sumatra', 'Bali'],
    photo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Jaringan konektivitas yang menjangkau wilayah Indonesia',
  },
  {
    category: 'Platform',
    title: 'Authorization reseller EMQX',
    desc: 'We are legal agent of EMQX MQTT in Indonesia, selling and supporting the broker untuk ribuan perangkat IoT.',
    tags: ['EMQX', 'MQTT Broker', 'License'],
    partners: 'Telkom Indonesia, Antares',
    photo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    alt: 'Rack server untuk mengoperasikan broker MQTT',
  },
  {
    category: 'Asset Management',
    title: 'Digital maintenance system',
    desc: 'We provide tools that could maintenance asset, tracking asset using RFID, from pencatatan aset sampai laporan pemeliharaan.',
    tags: ['RFID', 'Asset Tracking', 'Maintenance'],
    partners: 'Telkom Indonesia, Pertamina Drilling',
    photo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    alt: 'Tablet yang digunakan untuk mencatat aset dan pemeliharaan',
  },
];

const Tag = ({ children }) => (
  <span className="rounded-full bg-[#F3F3F3] px-3 py-1.5 text-[11px] font-medium tracking-tight text-ink-secondary">
    {children}
  </span>
);

export default function Services() {
  return (
    <SectionCard id="layanan" containerClassName="mt-16 lg:mt-20" className="p-8 sm:p-12 lg:p-16">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-brand-700">Our Services</p>
        <h2 className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]">
          <span className="serif-italic">What We Create</span>
          <br />
          <span>for You</span>
        </h2>
      </Reveal>

      <div className="relative mt-14 lg:mt-20">
        <div className="relative z-10 space-y-5 sm:space-y-7">
          {SERVICES.map((service, idx) => (
            <div key={service.category} className="sticky" style={{ top: `calc(96px + ${idx * 14}px)` }}>
              <article className="section-card lift relative z-10 grid overflow-hidden md:grid-cols-[40%_1fr]">
                <div className="h-[180px] overflow-hidden md:h-auto">
                  <img
                    src={service.photo}
                    alt={service.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-brand-700">
                    {service.category}
                  </p>
                  <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[36px]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-secondary">
                    {service.desc}
                  </p>

                  {service.note && (
                    <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-ink-muted">{service.note}</p>
                  )}

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li key={tag}>
                        <Tag>{tag}</Tag>
                      </li>
                    ))}
                  </ul>

                  {service.partners && (
                    <p className="mt-6 border-t border-black/[0.07] pt-4 text-[13px] text-ink-secondary">
                      Client & Partner:{' '}
                      <span className="font-medium text-ink">{service.partners}</span>
                    </p>
                  )}
                </div>
              </article>

              {/* Two faded layers sitting behind the active card */}
              {idx === 0 && (
                <>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-5 top-full h-[180px] origin-top scale-[0.96] rounded-[28px] border border-black/[0.05] bg-card-soft"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-5 top-[calc(100%+24px)] h-[180px] origin-top scale-[0.92] rounded-[28px] border border-black/[0.04] bg-canvas"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}