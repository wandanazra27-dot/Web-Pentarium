import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

const PRODUCTS = [
  {
    category: 'Pemantauan bencana',
    title: 'Water Level Monitoring (PentaFlood)',
    desc: 'Pantau ketinggian air secara real-time dan berikan peringatan lebih awal saat potensi banjir terdeteksi.',
    image: 'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat elektronik untuk sistem pemantauan',
    specs: [
      'Altitude Sensor: 30 cm – 1000 cm',
      'Temperature Sensor: 10 – 65 *C',
      'Humidity Sensor: 0 – 100 %',
      'Barometric Pressure Sensor: 300 – 1100 hPa',
      'Battery Sensor: Max 36V 3A',
      'Connectivity: GSM/LoRa/Wifi',
      'Battery: 12V 7.2 Ah',
      'Solar Panel: 20 Wp',
    ],
    clients: 'Mitratel, Telkom Indonesia, Lippo Village, Antares',
  },
  {
    category: 'Kualitas air',
    title: 'Smart Water Monitoring Solution (PentaQua)',
    desc: 'Pantau kualitas air melalui sensor yang terhubung dengan jaringan LoRa atau Wi-Fi.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat kontrol dan sensor untuk pemantauan air',
    specs: [
      'Water level sensor: 20 - 500 cm',
      'Temperature: 0 - 55 *C',
      'Turbidity: 0 - 3000 NTU',
      'PH: 0 - 14 pH',
      'Power: Solar Panel 50 Wp',
      'Battery: Li-Po 12 V',
      'Dimension Pole: 2 meter galvanis',
      'Box Controller: 270 x 170 x 100 mm',
    ],
    clients: 'Mitratel, Telkom Indonesia, Tirtawening, Antares',
  },
  {
    category: 'Infrastruktur air',
    title: 'Water Pressure Monitoring (PentaMon)',
    desc: 'Solusi pemantauan tekanan air untuk membantu menjaga performa dan keandalan jaringan distribusi.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Visual jaringan digital untuk pemantauan infrastruktur',
    specs: ['Pressure: 0 - 10 Bar', 'Battery: 4000 mAh'],
  },
  {
    category: 'Pertanian cerdas',
    title: 'Automatic Weather Station (AWS)',
    desc: 'Pantau kondisi lingkungan melalui smartphone. Data cuaca membantu memperkirakan risiko hama dan mengoptimalkan pertumbuhan tanaman.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    alt: 'Teknisi menggunakan perangkat untuk memantau data lingkungan',
    advantages: [
      'Environmentally friendly',
      'Can predict the weather the next few days',
      'Preventive attacks by pests and diseases',
      'Optimization of harvest and yield estimation',
    ],
    specs: [
      'Temperature: 0-70 deg C (0.1 degC)',
      'Humidity: 20-99%',
      'Solar Radiation: 0-1200 Lux',
      'Precipitation: 0-1 mm/s',
      'Wind Speed: 0-40 km/h',
      'Wind Direction: 0-360 deg',
      'Barometric Pressure: 500-1200 mbar',
    ],
  },
  {
    category: 'Layanan publik',
    title: 'Queue System',
    desc: 'Sistem antrean yang dapat disesuaikan untuk rumah sakit, bank, dan berbagai institusi, serta diintegrasikan dengan sistem lain.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat teknologi yang digunakan dalam layanan publik',
    clients: 'RSUD Kota Bandung, RSSM, KelingKumang, Kopontren Daarut Tauhiid, dll',
  },
  {
    category: 'Konektivitas kota',
    title: 'SmartPole',
    desc: 'Satu tiang multifungsi yang dapat dilengkapi CCTV, speaker, tombol darurat, sensor lingkungan, dan akses Wi-Fi.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Komponen elektronik untuk infrastruktur pintar',
    clients: 'Mitratel, Telkom Indonesia, Antares',
  },
  {
    category: 'Bangunan pintar',
    title: 'Smart Building',
    desc: 'Perangkat untuk rumah, kantor, dan ruang kelas: mulai dari kontrol lampu dan AC hingga kamera, sensor orang, LPG, dan kebocoran air.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    alt: 'Infrastruktur jaringan untuk sistem bangunan pintar',
    clients: 'Edu Media Digital',
  },
  {
    category: 'Akses & parkir',
    title: 'Smart Gate',
    desc: 'Sistem akses untuk kantor, sekolah, dan area parkir dengan pilihan swing gate, magnetic door, turnstile, ticketing, atau parking gate.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat elektronik untuk sistem akses otomatis',
    clients: 'Edu Media Digital, The Jungle Bogor',
  },
  {
    category: 'Pertanian urban',
    title: 'Pakebun (Urban Farming)',
    desc: 'Solusi berkebun urban dengan perangkat irigasi, penyiraman dan pemupukan otomatis, smart greenhouse, serta sensor tanah dan lingkungan.',
    image: 'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat sensor untuk mendukung pemantauan lingkungan',
    link: 'http://pakebun.com',
  },
];

function ProductDetails({ product }) {
  if (!product.specs && !product.advantages && !product.clients) return null;

  return (
    <details className="group mt-6 border-t border-black/[0.08] pt-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink-secondary marker:hidden">
        Spesifikasi & informasi
        <ArrowDown
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-secondary">
        {product.advantages && (
          <div>
            <h4 className="mb-2 font-medium text-ink">Keunggulan</h4>
            <ul className="space-y-1">
              {product.advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}
            </ul>
          </div>
        )}
        {product.specs && (
          <div>
            <h4 className="mb-2 font-medium text-ink">Spesifikasi</h4>
            <ul className="grid gap-x-5 gap-y-1 sm:grid-cols-2">
              {product.specs.map((spec) => <li key={spec}>{spec}</li>)}
            </ul>
          </div>
        )}
        {product.clients && (
          <p>
            Klien & partner: <span className="font-medium text-ink">{product.clients}</span>
          </p>
        )}
      </div>
    </details>
  );
}

function ProductRow({ product, index }) {
  const imageClassName = index % 2 === 0
    ? 'product-row-image-right overflow-hidden rounded-[20px] sm:rounded-[24px]'
    : 'product-row-image-left overflow-hidden rounded-[20px] sm:rounded-[24px]';
  const textClassName = index % 2 === 0 ? 'product-row-copy-left' : 'product-row-copy-right';

  return (
    <article className="grid items-center gap-7 border-b border-black/[0.07] py-9 first:pt-0 last:border-0 last:pb-0 sm:gap-10 sm:py-12 md:grid-cols-2 lg:gap-16 lg:py-16">
      <div className={imageClassName}>
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      <div className={textClassName}>
        <p className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-secondary">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-700" />
          {product.category}
        </p>
        <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[32px]">
          {product.title}
        </h3>
        <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-ink-secondary">
          {product.desc}
        </p>
        <a
          href={product.link || '#kontak'}
          target={product.link ? '_blank' : undefined}
          rel={product.link ? 'noreferrer' : undefined}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[12px] font-medium text-white transition-colors hover:bg-brand-900"
        >
          {product.link ? 'Kunjungi Pakebun' : 'Diskusikan solusi'}
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
        <ProductDetails product={product} />
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section id="produk" className="mx-auto mt-16 max-w-[1200px] px-4 sm:mt-20 sm:px-6">
      <div className="overflow-hidden rounded-[28px] bg-white px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-brand-700">
            Produk Pentarium
          </p>
          <h2 className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]">
            Teknologi untuk<br className="hidden sm:block" /> kebutuhan nyata
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-ink-secondary">
            Dari pemantauan lingkungan hingga otomasi, temukan solusi yang membantu pekerjaan
            menjadi lebih terukur dan terhubung.
          </p>
        </Reveal>

        <div className="mx-auto max-w-[1000px]">
          {PRODUCTS.map((product, index) => (
            <React.Fragment key={product.title}>
              <Reveal delay={index % 2 === 0 ? 0 : 80}>
                <ProductRow product={product} index={index} />
              </Reveal>
              {index === 3 && (
                <Reveal>
                  <figure className="relative my-10 overflow-hidden rounded-[20px] sm:my-14 sm:rounded-[24px]">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80"
                      alt="Rangkaian elektronik sebagai bagian dari solusi IoT Pentarium"
                      loading="lazy"
                      className="aspect-[16/8] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
                    <figcaption className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center px-6 text-white sm:px-10">
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/75">
                        IoT · Hardware · Software
                      </p>
                      <p className="mt-3 text-2xl font-medium leading-tight sm:text-4xl">
                        Dirancang untuk bekerja di dunia nyata.
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
