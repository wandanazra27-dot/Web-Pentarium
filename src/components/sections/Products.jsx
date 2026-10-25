import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  X,
  CheckCircle2,
  Cpu,
  Building2,
  Sparkles,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import Reveal from '../ui/Reveal';

const PRODUCTS = [
  {
    category: 'Pemantauan bencana',
    title: 'Water Level Monitoring (PentaFlood)',
    desc: 'Pantau ketinggian air secara real-time dan berikan peringatan lebih awal saat potensi banjir terdeteksi.',
    overview:
      'PentaFlood adalah stasiun pemantauan ketinggian air cerdas berbasis IoT yang dirancang untuk mitigasi bencana banjir di daerah aliran sungai (DAS), pintu air, waduk, dan kawasan perkotaan rawan genangan. Sistem bekerja otonom 24/7 dengan pasokan solar panel mandiri serta mentransmisikan data real-time ke command center.',
    image: 'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat elektronik untuk sistem pemantauan air PentaFlood',
    advantages: [
      'Peringatan dini banjir otomatis melalui SMS, WhatsApp, dan dashboard terintegrasi',
      'Pengisian daya mandiri dengan Solar Panel 20 Wp dan baterai cadangan tahan lama',
      'Konektivitas fleksibel GSM/GPRS, LoRaWAN, dan Wi-Fi untuk area minim sinyal',
      'Sensor ultrasonik berakurasi tinggi dengan jangkauan pengukuran 30 cm – 10 meter',
    ],
    specs: [
      'Altitude Sensor: 30 cm – 1000 cm',
      'Temperature Sensor: 10 – 65 °C',
      'Humidity Sensor: 0 – 100 %',
      'Barometric Pressure: 300 – 1100 hPa',
      'Battery Sensor: Max 36V 3A',
      'Connectivity: GSM / LoRa / Wi-Fi',
      'Battery: 12V 7.2 Ah Sealed Rechargeable',
      'Solar Panel: 20 Wp Monocrystalline',
    ],
    clients: 'Mitratel, Telkom Indonesia, Lippo Village, Antares',
  },
  {
    category: 'Kualitas air',
    title: 'Smart Water Monitoring Solution (PentaQua)',
    desc: 'Pantau kualitas air melalui sensor yang terhubung dengan jaringan LoRa atau Wi-Fi.',
    overview:
      'PentaQua merupakan solusi telemetri pemantauan kualitas air terpadu untuk PDAM, danau, bendungan, dan instalasi pengolahan limbah industri (IPAL). Memantau parameter keasaman (pH), kekeruhan (turbidity), suhu, dan volume air secara simultan dan kontinu.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat kontrol dan sensor untuk pemantauan kualitas air PentaQua',
    advantages: [
      'Multiparameter terpadu: pH, kekeruhan (turbidity), suhu, dan level air',
      'Tiang galvanis 2 meter tahan karat dan box controller berstandar IP65 outdoor',
      'Integrasi langsung dengan dashboard Antares Telkom & platform analitik mitra',
      'Peringatan instan apabila ambang baku mutu lingkungan terlampaui',
    ],
    specs: [
      'Water level sensor: 20 - 500 cm',
      'Temperature: 0 - 55 °C',
      'Turbidity: 0 - 3000 NTU',
      'PH Sensor: 0 - 14 pH (High Precision)',
      'Power: Solar Panel 50 Wp',
      'Battery: Li-Po 12V High Capacity',
      'Dimension Pole: 2 meter galvanis outdoor',
      'Box Controller: 270 x 170 x 100 mm (IP65)',
    ],
    clients: 'Mitratel, Telkom Indonesia, Tirtawening, Antares',
  },
  {
    category: 'Infrastruktur air',
    title: 'Water Pressure Monitoring (PentaMon)',
    desc: 'Solusi pemantauan tekanan air untuk membantu menjaga performa dan keandalan jaringan distribusi.',
    overview:
      'PentaMon mendeteksi anomali tekanan fluida pada pipa distribusi PDAM dan jaringan pipa industri. Membantu teknisi mendeteksi kebocoran pipa (Non-Revenue Water) lebih cepat sebelum terjadi kerusakan struktural atau kerugian air yang besar.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Visual jaringan digital untuk pemantauan infrastruktur pipa PentaMon',
    advantages: [
      'Pendeteksian kebocoran pipa tersembunyi lewat anomali fluktuasi tekanan',
      'Teknologi ultra-low power tahan bertahun-tahun dengan baterai internal',
      'Format perangkat kompak yang mudah dipasang pada sambungan pipa standar',
      'Dukungan jaringan LoRaWAN jangkauan jauh tembus bawah tanah / chamber',
    ],
    specs: [
      'Pressure Range: 0 - 10 Bar (Akurasi ±0.5% FS)',
      'Battery: Li-ion 4000 mAh Industrial Grade',
      'Protection: IP68 Tahan Rendaman Air',
      'Data Uplink: LoRaWAN / NB-IoT / GSM',
      'Operating Temp: -10 °C hingga 70 °C',
      'Thread Fitting: G 1/4" atau G 1/2" NPT Male',
    ],
    clients: 'PDAM Tirtawening, Kawasan Industri, Telkom Antares',
  },
  {
    category: 'Pertanian cerdas',
    title: 'Automatic Weather Station (AWS)',
    desc: 'Pantau kondisi lingkungan melalui smartphone. Data cuaca membantu memperkirakan risiko hama dan mengoptimalkan pertumbuhan tanaman.',
    overview:
      'Stasiun cuaca otomatis mikro berbasis IoT untuk agrikultur presisi, perkebunan komersial, dan riset iklim mikro. Dilengkapi 7 sensor cuaca esensial yang mengirimkan data meteorologi setiap menit untuk pemodelan kalender tanam dan pencegahan hama.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    alt: 'Teknisi menggunakan perangkat untuk memantau data lingkungan AWS',
    advantages: [
      'Ramah lingkungan & bertenaga surya untuk operasional 100% mandiri',
      'Membantu memprediksi cuaca mikro beberapa hari ke depan secara akurat',
      'Pencegahan dini serangan hama & penyakit tanaman berdasarkan kelembaban udara',
      'Optimalisasi jadwal panen dan estimasi hasil panen pertanian modern',
    ],
    specs: [
      'Temperature: 0 - 70 °C (Resolusi 0.1 °C)',
      'Humidity: 20 - 99 % RH',
      'Solar Radiation: 0 - 1200 Lux',
      'Precipitation (Curah Hujan): 0 - 1 mm/s',
      'Wind Speed: 0 - 40 km/h (Anemometer)',
      'Wind Direction: 0 - 360° (Wind Vane)',
      'Barometric Pressure: 500 - 1200 mbar',
    ],
    clients: 'Dinas Pertanian, Smart Village Nusantara, Edukasi Agribisnis',
  },
  {
    category: 'Layanan publik',
    title: 'Queue System',
    desc: 'Sistem antrean yang dapat disesuaikan untuk rumah sakit, bank, dan berbagai institusi, serta diintegrasikan dengan sistem lain.',
    overview:
      'Sistem manajemen antrean generasi baru yang menggabungkan display multimedia, tiket fisik thermal atau barcode digital smartphone, serta pemanggilan suara interaktif multi-bahasa. Mencegah kerumunan dan meningkatkan kepuasan pelanggan secara signifikan.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat teknologi yang digunakan dalam layanan publik sistem antrean',
    advantages: [
      'Mendukung display Smart TV multi-layar, nomor loket, dan running text promosi',
      'Pilihan tiket cetak thermal otomatis atau reservasi online via web/QR',
      'Laporan performa pelayanan petugas loket & statistik waktu tunggu harian',
      'Dukungan integrasi API ke SIMRS Rumah Sakit, Core Banking, atau SIPKD',
    ],
    specs: [
      'Controller: Mini PC Industrial IoT Gateway',
      'Printer: Thermal Auto-Cutter 80mm High Speed',
      'Voice System: TTS / Pre-recorded Multi-language Audio',
      'Display: HDMI Output hingga resolusi 4K UHD',
      'Network: Dual Band Wi-Fi & Gigabit Ethernet LAN',
      'Keypad Loket: Wireless Tablet / Web Caller App',
    ],
    clients: 'RSUD Kota Bandung, RSSM, KelingKumang, Kopontren Daarut Tauhiid',
  },
  {
    category: 'Konektivitas kota',
    title: 'SmartPole',
    desc: 'Satu tiang multifungsi yang dapat dilengkapi CCTV, speaker, tombol darurat, sensor lingkungan, dan akses Wi-Fi.',
    overview:
      'Infrastruktur pencahayaan dan telekomunikasi cerdas perkotaan terpadu (Smart City). Mengintegrasikan lampu jalan LED adaptif hemat energi dengan kamera pengawas keamanan, stasiun sensor polusi udara, speaker publik informasi, dan panic button darurat.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Komponen elektronik untuk infrastruktur pintar SmartPole',
    advantages: [
      'Integrasi 6 perangkat dalam 1 tiang hemat ruang dan estetika modern',
      'Pencahayaan LED adaptif dengan pengaturan intensitas otomatis hemat daya',
      'Panic button langsung terhubung ke command center keamanan lingkungan',
      'Monitoring kualitas udara (PM2.5, suhu, kelembaban) real-time untuk publik',
    ],
    specs: [
      'Pole Structure: 6 - 9 Meter Hot-Dip Galvanized Steel',
      'Lighting: Smart LED 60W – 120W Dimming Schedule',
      'CCTV: PTZ IP Camera 4MP Full HD Night Vision',
      'Environment Sensor: PM2.5, PM10, Temp, Humidity, CO2',
      'Public Audio: IP Horn Speaker 30W Weatherproof',
      'Emergency: Illuminated SOS Panic Button',
    ],
    clients: 'Mitratel, Telkom Indonesia, Antares Smart City',
  },
  {
    category: 'Bangunan pintar',
    title: 'Smart Building',
    desc: 'Perangkat untuk rumah, kantor, dan ruang kelas: mulai dari kontrol lampu dan AC hingga kamera, sensor orang, LPG, dan kebocoran air.',
    overview:
      'Solusi otomasi gedung pintar yang memberikan efisiensi konsumsi daya listrik serta proteksi fasilitas kerja secara menyeluruh. Dapat mengendalikan tata cahaya, HVAC/AC pintar, sensor deteksi kebocoran gas LPG, sensor banjir lantai, hingga akses ruangan secara otomatis.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    alt: 'Infrastruktur jaringan untuk sistem bangunan pintar',
    advantages: [
      'Penghematan konsumsi listrik AC dan lampu hingga 30-40% per bulan',
      'Sistem peringatan bahaya kebocoran gas LPG dan rembesan air secara instan',
      'Deteksi okupansi ruangan cerdas untuk otomatisasi pendingin dan lampu',
      'Kontrol terpusat melalui aplikasi mobile iOS/Android dan dashboard web',
    ],
    specs: [
      'Communication: Zigbee 3.0, Modbus, Wi-Fi 2.4GHz',
      'Smart Relay: 16A Heavy Duty Power Control',
      'Sensors: PIR Motion, LPG Gas, Smoke Detector, Water Leak',
      'AC Controller: Universal IR Blaster with Temp Feedback',
      'Gateway: Central Smart Hub with Offline Logic Support',
    ],
    clients: 'Edu Media Digital, Perkantoran Korporat & Sekolah',
  },
  {
    category: 'Akses & parkir',
    title: 'Smart Gate',
    desc: 'Sistem akses untuk kantor, sekolah, dan area parkir dengan pilihan swing gate, magnetic door, turnstile, ticketing, atau parking gate.',
    overview:
      'Sistem kendali gerbang akses fisik otomatis dengan integrasi kartu RFID, sensor sidik jari, tiket barcode, atau kamera pemindai wajah (Face Recognition). Sangat kokoh untuk gedung kantor, universitas, sekolah terpadu, dan pintu masuk wahana rekreasi.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat elektronik untuk sistem akses otomatis Smart Gate',
    advantages: [
      'Mekanisme motor brushless cepat (< 1 detik per siklus) dan tahan benturan',
      'Mendukung banyak metode autentikasi: RFID Card, Barcode 2D, Face Cam, Plat Nomor',
      'Sinkronisasi langsung dengan sistem absensi karyawan atau tiket pengunjung',
      'Material Stainless Steel SUS304 anti karat untuk pemasangan indoor maupun outdoor',
    ],
    specs: [
      'Barrier Options: Flap Barrier, Tripod Turnstile, Swing Gate, Boom Gate',
      'Pass Rate: 35 – 45 Orang / Menit (Kecepatan Tinggi)',
      'Material: Stainless Steel SUS304 Tebal 1.5 - 2.0 mm',
      'Reader: RFID Mifare 13.56 MHz & 2D QR Scanner',
      'Safety: Infrared Anti-Pinch Sensors & Auto Emergency Drop',
    ],
    clients: 'Edu Media Digital, The Jungle Bogor, Perumahan & Kampus',
  },
  {
    category: 'Pertanian urban',
    title: 'Pakebun (Urban Farming)',
    desc: 'Solusi berkebun urban dengan perangkat irigasi, penyiraman dan pemupukan otomatis, smart greenhouse, serta sensor tanah dan lingkungan.',
    overview:
      'Platform dan teknologi otomasi budidaya tanaman presisi untuk pertanian urban, hidroponik, dan smart greenhouse. Mengatur jadwal pengairan, takaran nutrisi pupuk cair (AB Mix), dan sirkulasi udara greenhouse secara mandiri berbasis sensor IoT tanah dan cuaca.',
    image: 'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perangkat sensor untuk mendukung pemantauan lingkungan Pakebun',
    link: 'http://pakebun.com',
    advantages: [
      'Penyiraman dan pemupukan otomatis berbasis sensor kelembaban tanah & EC',
      'Smart Greenhouse dengan kontrol ventilasi, kipas blower, dan shading net',
      'Pemantauan status tanaman dan kendali pompa dari smartphone di mana saja',
      'Menghemat air dan nutrisi tanaman hingga 50% dibanding metode manual',
    ],
    specs: [
      'Sensor: Soil Moisture, NPK, Soil EC, Water pH, Ambient Temp/RH',
      'Actuators: Solenoid Valve 12V DC & Nutrient Dosing Pump',
      'Power Options: Dual Power AC 220V & Solar PV Hybrid',
      'Connectivity: Wi-Fi & GSM 4G Cloud Telemetry',
      'App: Pakebun Mobile (Android / iOS)',
    ],
    clients: 'Penggiat Hidroponik, Komunitas Urban Farming, Agribisnis Komersial',
  },
];

function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  const waMessage = encodeURIComponent(
    `Halo Tim Pentarium, saya tertarik dan ingin konsultasi lebih lanjut mengenai produk: ${product.title}`
  );
  const waUrl = `https://wa.me/6285624536408?text=${waMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className="relative w-full max-w-3xl my-auto bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Banner with Image */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-900 shrink-0">
          <img
            src={product.image}
            alt={product.alt || product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela detail"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Title & Category */}
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-8 sm:right-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12AA9E] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              {product.category}
            </span>
            <h3
              id="modal-product-title"
              className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight drop-shadow-sm"
            >
              {product.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Deskripsi Lengkap */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-2">
              Tentang Solusi Ini
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {product.overview || product.desc}
            </p>
          </div>

          {/* Keunggulan Utama */}
          {product.advantages && product.advantages.length > 0 && (
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-lg bg-[#12AA9E] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                  Keunggulan & Manfaat Utama
                </h4>
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {product.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-[#12AA9E] shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Spesifikasi Teknis */}
          {product.specs && product.specs.length > 0 && (
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                  Spesifikasi Teknis & Hardware
                </h4>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {product.specs.map((spec, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/70 text-xs font-medium text-slate-700 shadow-xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#12AA9E] shrink-0" />
                    <span className="truncate">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Klien & Rekanan */}
          {product.clients && (
            <div className="bg-teal-50/50 border border-teal-100 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-7 h-7 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block mb-0.5 font-mono">
                  Klien & Mitra Terverifikasi:
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  {product.clients}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-xs sm:text-sm font-semibold text-slate-600 transition-colors cursor-pointer"
          >
            Tutup
          </button>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-xs sm:text-sm font-bold text-slate-800 transition-colors cursor-pointer"
              >
                <span>Kunjungi Web Pakebun</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#12AA9E] hover:bg-[#0e8a80] text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetails({ product, onOpenModal }) {
  if (!product.specs && !product.advantages && !product.clients) return null;

  return (
    <details className="group mt-6 border-t border-black/[0.08] pt-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink-secondary marker:hidden hover:text-ink">
        <span>Ringkasan cepat spesifikasi</span>
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
              {product.advantages.map((advantage) => (
                <li key={advantage}>• {advantage}</li>
              ))}
            </ul>
          </div>
        )}
        {product.specs && (
          <div>
            <h4 className="mb-2 font-medium text-ink">Spesifikasi</h4>
            <ul className="grid gap-x-5 gap-y-1 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <li key={spec}>• {spec}</li>
              ))}
            </ul>
          </div>
        )}
        {product.clients && (
          <p>
            Klien & partner: <span className="font-medium text-ink">{product.clients}</span>
          </p>
        )}
        {onOpenModal && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenModal}
              className="text-xs font-bold text-[#12AA9E] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              Buka pop-up penjelasan & spesifikasi lengkap
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </details>
  );
}

function ProductRow({ product, index, onSelectProduct }) {
  const isEven = index % 2 === 0;

  return (
    <article className="grid items-center gap-8 md:grid-cols-12 lg:gap-14">
      {/* Gambar Produk */}
      <div
        onClick={() => onSelectProduct(product)}
        title="Klik untuk melihat penjelasan produk"
        className={`md:col-span-6 overflow-hidden rounded-[22px] sm:rounded-[28px] border border-black/[0.06] shadow-sm bg-slate-100 cursor-pointer group relative ${
          isEven ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg backdrop-blur-xs flex items-center gap-1.5">
            Lihat Penjelasan
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Konten Deskripsi */}
      <div className={`md:col-span-6 flex flex-col justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-700">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-700" />
          {product.category}
        </p>
        <h3
          onClick={() => onSelectProduct(product)}
          className="mt-3 text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[32px] cursor-pointer hover:text-[#12AA9E] transition-colors"
          title="Klik untuk membuka detail produk"
        >
          {product.title}
        </h3>
        <p className="mt-4 max-w-[50ch] text-[15px] leading-relaxed text-ink-secondary">
          {product.desc}
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition-all hover:bg-[#12AA9E] hover:shadow-md cursor-pointer group"
          >
            <span>{product.link ? 'Lihat Detail & Pakebun' : 'Diskusikan solusi & Detail'}</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
        <ProductDetails product={product} onOpenModal={() => onSelectProduct(product)} />
      </div>
    </article>
  );
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Close modal on ESC key and lock body scroll
  useEffect(() => {
    if (!selectedProduct) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <section id="produk" className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#12AA9E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12AA9E]/10 text-[#0d7d74] font-bold text-xs uppercase tracking-wider mb-4 border border-[#12AA9E]/25">
            04. Portofolio Hardware & IoT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight">
            Produk <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12AA9E] to-primary-dark">Pentarium</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[56ch] text-sm sm:text-base leading-relaxed text-slate-500">
            Dari pemantauan lingkungan hingga otomasi cerdas, temukan solusi perangkat keras dan telemetri yang dirancang untuk bekerja terukur di dunia nyata. Klik produk atau tombol untuk melihat detail spesifikasi dan konsultasi.
          </p>
        </Reveal>

        {/* Product Items List */}
        <div className="space-y-12 sm:space-y-16">
          {PRODUCTS.map((product, index) => (
            <React.Fragment key={product.title}>
              <Reveal delay={index % 2 === 0 ? 0 : 60}>
                <div className="rounded-[28px] sm:rounded-[32px] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100/80 transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                  <ProductRow
                    product={product}
                    index={index}
                    onSelectProduct={setSelectedProduct}
                  />
                </div>
              </Reveal>
              {index === 3 && (
                <Reveal>
                  <figure className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] shadow-md my-4 sm:my-8">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80"
                      alt="Rangkaian elektronik sebagai bagian dari solusi IoT Pentarium"
                      loading="lazy"
                      className="aspect-[16/6] sm:aspect-[16/5] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
                    <figcaption className="absolute inset-y-0 left-0 flex max-w-2xl flex-col justify-center px-8 text-white sm:px-14">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6FD3CB]">
                        IoT &bull; Hardware &bull; Telemetry
                      </p>
                      <p className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                        Dirancang presisi untuk bekerja di dunia nyata.
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Interactive Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
