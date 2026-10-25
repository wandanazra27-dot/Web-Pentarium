import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  X,
  MessageSquare,
  Award,
  Zap,
} from 'lucide-react';
import Reveal from '../ui/Reveal';

const PROJECTS = [
  {
    id: 'iot-training',
    category: 'Edukasi & Kapasitas Digital',
    tag: 'Training & Workshop',
    title: 'Internet Of Things Training',
    partner: 'DiLo (Digital Lounge PT. Telkom)',
    partnerShort: 'PT. Telkom DiLo',
    date: 'September 2020 – Desember 2023',
    status: 'Program Sukses & Selesai',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    desc: 'Kemitraan strategis bersama Digital Lounge PT. Telkom dalam penyediaan perangkat hardware IoT, modul praktikum telemetri, dan pelatihan bagi ratusan talenta digital.',
    metrics: [
      { label: 'Peserta Terlatih', value: '500+ Talenta' },
      { label: 'Fokus Praktikum', value: 'Sensor & IoT' },
      { label: 'Masa Kolaborasi', value: '3+ Tahun' },
    ],
    details: {
      overview:
        'Program pelatihan dan transfer knowledge teknologi IoT yang diinisiasi bersama Digital Lounge (DiLo) PT. Telkom Indonesia. Bertujuan melahirkan talenta pengembang IoT siap kerja yang menguasai integrasi mikrokontroler, protokol transmisi nirkabel, hingga platform visualisasi data cloud.',
      deliverables: [
        'Penyediaan kit modul sensor IoT edukasi mandiri hasil rancang bangun tim Pentarium',
        'Kurikulum komprehensif mulai dari sensor interfacing, telemetri LoRaWAN, hingga MQTT broker',
        'Workshop tatap muka dan sesi mentoring virtual dengan studi kasus pemantauan lingkungan riil',
        'Pendampingan capstone project bagi tim peserta terbaik untuk validasi solusi siap terap',
      ],
      techStack: ['ESP32 / Arduino MCU', 'LoRaWAN Transceiver', 'Antares IoT Cloud', 'Python & MQTT Broker'],
      impact: 'Mencetak lebih dari 500 talenta developer muda yang memahami implementasi perangkat keras IoT di industri nyata.',
    },
  },
  {
    id: 'smartvillage',
    category: 'Infrastruktur Desa Cerdas',
    tag: 'Mitigasi Bencana & IoT',
    title: 'Project Smartvillage Nusantara in 5 Villages',
    partner: 'PT. Daya Mitra Telekomunikasi (Mitratel)',
    partnerShort: 'Mitratel BUMN',
    date: 'Juli 2020 – Desember 2020',
    status: 'Implementasi Lapangan Aktif',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    desc: 'Pengadaan dan instalasi stasiun telemetri mitigasi bencana serta IP Camera outdoor tahan cuaca di titik-titik strategis pada 5 desa percontohan nasional.',
    metrics: [
      { label: 'Cakupan Wilayah', value: '5 Desa Mandiri' },
      { label: 'Perangkat', value: 'Sensor & IP Cam' },
      { label: 'Monitoring', value: '24/7 Command Center' },
    ],
    details: {
      overview:
        'Kemitraan bersama PT. Daya Mitra Telekomunikasi (Mitratel) dalam mewujudkan inisiatif Smartvillage Nusantara. Pentarium merancang dan menginstalasi tiang stasiun sensor pemantau potensi bencana alam serta kamera pengawas pintar berdaya tahan cuaca ekstrim di area pedesaan.',
      deliverables: [
        'Penyediaan stasiun telemetri cuaca dan sensor ketinggian muka air rawan banjir',
        'Pemasangan IP Camera outdoor night vision dengan konektivitas seluler/BTS Mitratel',
        'Dashboard visualisasi status desa untuk aparat pamong praja dan mitigasi dini warga',
        'Pelatihan operasional lapangan dan prosedur pemeliharaan berkala bagi operator lokal',
      ],
      techStack: ['Outdoor Telemetry Pole', 'PTZ IP Camera 4MP', 'Solar PV Hybrid', 'Mitratel Tower Network'],
      impact: 'Meningkatkan ketangguhan warga desa terhadap potensi banjir dan bencana alam secara preventif.',
    },
  },
  {
    id: 'pdam-bandung',
    category: 'Utilitas & Kualitas Air',
    tag: 'Digitalisasi PDAM',
    title: 'Digitalization Water Processing at PDAM Bandung',
    partner: 'PT. TELKOM Indonesia & PDAM Tirtawening',
    partnerShort: 'Telkom x Tirtawening',
    date: 'Februari 2021 – Mei 2021',
    status: 'Operasional Penuh',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    desc: 'Implementasi sensor telemetri pemantauan kualitas air pipa distribusi dan instalasi pengolahan air minum secara real-time bersama Telkom Indonesia dan PDAM Kota Bandung.',
    metrics: [
      { label: 'Parameter Air', value: 'pH, NTU & Flow' },
      { label: 'Akurasi Sensor', value: 'High Precision' },
      { label: 'Integrasi', value: 'Antares & SCADA' },
    ],
    details: {
      overview:
        'Kolaborasi bersama PT. TELKOM Indonesia untuk mendigitalisasi instalasi pengolahan dan distribusi air PDAM Kota Bandung (Tirtawening). Sistem sensor terpasang mengukur tingkat kekeruhan (turbidity), pH, dan debit air pipa primer secara kontinu untuk menjamin standar baku mutu air konsumsi masyarakat.',
      deliverables: [
        'Instalasi sensor kekeruhan air optik (Turbidity) dan elektroda pH presisi tinggi',
        'Integrasi transmisi telemetri LoRaWAN ke server monitoring PDAM Tirtawening',
        'Sistem alarm otomatis apabila parameter air berada di luar batas baku mutu kesehatan',
        'Uji kalibrasi berkala dan verifikasi akurasi data laboratorium kimia air',
      ],
      techStack: ['PentaQua Water Station', 'LoRaWAN Gateway', 'Antares Cloud Broker', 'Industrial Flow Meter'],
      impact: 'Mempercepat respons pencegahan anomali kualitas air serta menghemat waktu uji manual laboratorium lapangan PDAM.',
    },
  },
  {
    id: 'emqx-license',
    category: 'Enterprise Cloud & IoT Messaging',
    tag: 'Infrastruktur Cloud',
    title: 'Project Procurement EMQX Enterprise License',
    partner: 'PT. TELKOM Indonesia',
    partnerShort: 'PT. Telkom Antares',
    date: 'April 2021 – Mei 2021',
    status: 'Lisensi & Deployment Sukses',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    desc: 'Pengadaan dan konfigurasi lisensi perangkat lunak EMQX Enterprise untuk mendukung infrastruktur broker pesan IoT berkecepatan tinggi bagi ekosistem Telkom.',
    metrics: [
      { label: 'Kapasitas Pesan', value: '100k+ Pesan/Detik' },
      { label: 'Protokol', value: 'MQTT / CoAP' },
      { label: 'Keandalan', value: '99.99% Uptime' },
    ],
    details: {
      overview:
        'Penyediaan lisensi enterprise EMQX Software Broker berskala korporat kepada PT. TELKOM Indonesia. Lisensi ini menjadi fondasi transmisi jutaan paket data per detik dari ribuan perangkat sensor IoT pelanggan korporasi ke platform cloud Antares dengan latensi sub-milidetik.',
      deliverables: [
        'Pengadaan lisensi resmi EMQX Enterprise Software berkapasitas pesan masif',
        'Arsitektur clustering high-availability anti-downtime untuk layanan kritis Telkom',
        'Dukungan integrasi protokol MQTT 5.0, MQTT-SN, dan REST API enterprise',
        'Dokumentasi teknis, transfer knowledge arsitektur, dan SLA pemeliharaan',
      ],
      techStack: ['EMQX Enterprise Broker', 'Erlang/OTP Engine', 'Kubernetes Cluster', 'Telkom Antares Cloud'],
      impact: 'Mendukung tulang punggung komunikasi data IoT nasional Telkom dengan stabilitas dan skalabilitas enterprise.',
    },
  },
];

const CATEGORIES = [
  'Semua Proyek',
  'Edukasi & Kapasitas Digital',
  'Infrastruktur Desa Cerdas',
  'Utilitas & Kualitas Air',
  'Enterprise Cloud & IoT Messaging',
];

function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  const waMessage = encodeURIComponent(
    `Halo Tim Pentarium, saya tertarik mendiskusikan peluang kolaborasi/proyek serupa dengan portofolio: ${project.title} (${project.partner})`
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
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-3xl my-auto bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Banner with Cover Image */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-900 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela detail proyek"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Badges & Title */}
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-8 sm:right-8">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12AA9E] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                <Calendar className="w-3 h-3" />
                {project.date}
              </span>
            </div>
            <h3
              id="modal-project-title"
              className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight drop-shadow-sm"
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Partner & Scope Overview */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-teal-50/60 border border-teal-100">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-teal-800 uppercase tracking-wider font-mono">
                Mitra Utama Proyek:
              </p>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                {project.partner}
              </h4>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-2">
              Ikhtisar & Latar Belakang
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          {/* Lingkup Kerja & Output */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg bg-[#12AA9E] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                Ruang Lingkup & Deliverables Proyek
              </h4>
            </div>
            <ul className="space-y-2.5">
              {project.details.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-[#0d7d74] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teknologi yang Diterapkan */}
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <Cpu className="w-4 h-4 text-slate-500" />
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                Teknologi & Hardware yang Diintegrasikan:
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.details.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80 flex items-center gap-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#12AA9E]" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Dampak Nyata */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
            <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wider font-mono mb-0.5">
                Dampak & Nilai Tambah:
              </p>
              <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                {project.details.impact}
              </p>
            </div>
          </div>
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

          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#12AA9E] hover:bg-[#0e8a80] text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Diskusikan Kolaborasi Serupa</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Semua Proyek');
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on ESC and lock body scroll
  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === 'Semua Proyek'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyek" className="pt-4 pb-16 lg:pt-6 lg:pb-20 bg-slate-50 relative overflow-hidden scroll-mt-20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#12AA9E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12AA9E]/10 text-[#0d7d74] font-bold text-xs uppercase tracking-wider mb-2.5 border border-[#12AA9E]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#12AA9E]" />
            05. Rekam Jejak Kolaborasi & Implementasi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight">
            Proyek Strategis <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12AA9E] to-primary-dark">& Kolaborasi Lainnya</span>
          </h2>
          <p className="mx-auto mt-2.5 max-w-[62ch] text-sm sm:text-base leading-relaxed text-slate-500">
            Bukti nyata komitmen Pentarium dalam mendampingi BUMN, pemerintah daerah, dan institusi nasional mewujudkan adopsi IoT yang teruji, andal, dan berdampak nyata di lapangan.
          </p>

          {/* Category Filter Chips */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md scale-105'
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80 shadow-xs'
                  }`}
                >
                  {cat === 'Semua Proyek' ? `Semua (${PROJECTS.length})` : cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white rounded-[24px] sm:rounded-[28px] border border-slate-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full"
              >
                {/* Visual Header Image Banner */}
                <div className="relative aspect-[16/6.8] sm:aspect-[16/6] w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                      <Building2 className="w-3 h-3 text-[#12AA9E]" />
                      {project.partnerShort}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6FD3CB] font-mono">
                      {project.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-white/90 font-medium">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight group-hover:text-[#12AA9E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  {/* Impact Metric Chips */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100">
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-slate-50 group-hover:bg-teal-50/50 p-2 rounded-xl border border-slate-100 transition-colors text-center"
                        >
                          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono truncate">
                            {metric.label}
                          </span>
                          <span className="block text-xs sm:text-[13px] font-black text-slate-800 mt-0.5 truncate">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Trigger Action */}
                    <div className="mt-3.5 flex items-center justify-between text-xs font-bold text-[#12AA9E]">
                      <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Lihat Rincian & Lingkup Kemitraan
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Detail Solusi &bull; Telkom Group
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Strategic Impact Strip */}
        <Reveal delay={200}>
          <div className="mt-10 sm:mt-12 rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl border border-slate-800 relative overflow-hidden">
            {/* Background Accent Gradients */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#12AA9E]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12AA9E]/20 text-[#6FD3CB] text-xs font-bold uppercase tracking-wider border border-[#12AA9E]/30 mb-3">
                  <Zap className="w-3.5 h-3.5" />
                  Kemitraan Siap Skala
                </span>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                  Punya Kebutuhan Solusi IoT untuk Institusi atau BUMN Anda?
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Kami siap berkolaborasi mulai dari tahap riset prototipe, fabrikasi perangkat keras, integrasi jaringan telemetri, hingga deployment berskala nasional.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-2xl sm:text-3xl font-black text-[#6FD3CB]">4+</span>
                  <span className="block text-[11px] text-slate-300 font-medium mt-1">Proyek Strategis</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-2xl sm:text-3xl font-black text-[#6FD3CB]">3+</span>
                  <span className="block text-[11px] text-slate-300 font-medium mt-1">Mitra BUMN Utama</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-2xl sm:text-3xl font-black text-[#6FD3CB]">5</span>
                  <span className="block text-[11px] text-slate-300 font-medium mt-1">Desa Percontohan</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                  <span className="block text-2xl sm:text-3xl font-black text-[#6FD3CB]">100%</span>
                  <span className="block text-[11px] text-slate-300 font-medium mt-1">Implementasi Sukses</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
