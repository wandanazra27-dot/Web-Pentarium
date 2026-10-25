import React, { useState } from 'react';
import {
  Eye,
  Target,
  Globe,
  Award,
  Sparkles,
  ShieldCheck,
  Cpu,
  Smartphone,
  PenTool,
  Activity,
  CheckCircle2,
  MapPin,
  Radio,
  Layers,
  Wifi,
  Zap,
  Terminal,
  Code2,
  Box,
} from 'lucide-react';

export default function About() {
  // Real deployment field showcase items from Pentarium's authentic PDF records
  const fieldShowcase = [
    {
      id: "pentaflood",
      title: "PentaFlood™ Telemetri Lapangan",
      tag: "Solar Telemetry & LoRaWAN",
      location: "Bandung, Jawa Barat",
      image: "/extracted/img_13.jpg",
      description: "Pemasangan tiang sensor telemetri banjir bertenaga surya terhubung gateway LoRaWAN untuk transmisi data ketinggian air real-time.",
    },
    {
      id: "aws",
      title: "Automatic Weather Station (AWS)",
      tag: "Environmental Sensors",
      location: "Stasiun Lapangan, Jabar",
      image: "/extracted/img_15.jpg",
      description: "Perakitan modul sensor cuaca terpadu mencakup anemometer, pluviometer, dan sensor radiasi matahari dengan proteksi industri.",
    },
    {
      id: "command-center",
      title: "Integrated Command Center",
      tag: "Multi-Screen Dashboard",
      location: "Pentarium Control HQ",
      image: "/extracted/img_29.jpg",
      description: "Pusat pemantauan data terpadu multi-layar yang memvisualisasikan telemetri sensor ribuan node secara presisi dan terenkripsi.",
    },
  ];

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const activeItem = fieldShowcase[activePhotoIdx];

  const pillars = [
    {
      number: "01",
      name: "IoT Solution",
      category: "Internet of Things",
      desc: "Smart sensors, telemetry, & LoRaWAN integration.",
      icon: Activity,
      colorScheme: "teal", // #12AA9E
      shapeType: "iot",
    },
    {
      number: "02",
      name: "Software",
      category: "Application & Cloud",
      desc: "Mobile apps & custom web platform development.",
      icon: Smartphone,
      colorScheme: "white", // White
      shapeType: "software",
    },
    {
      number: "03",
      name: "Hardware",
      category: "Engineering & Devices",
      desc: "Custom embedded systems & IoT controller boards.",
      icon: Cpu,
      colorScheme: "teal", // #12AA9E
      shapeType: "hardware",
    },
    {
      number: "04",
      name: "Design",
      category: "UI/UX & Prototyping",
      desc: "Industrial device casing & digital user experience.",
      icon: PenTool,
      colorScheme: "white", // White
      shapeType: "design",
    },
  ];

  const coreServices = [
    {
      title: "IoT & Telemetri",
      desc: "Smart sensor & LoRaWAN",
      icon: Radio,
      badge: "01",
    },
    {
      title: "Software & Cloud",
      desc: "Web dashboard & mobile app",
      icon: Code2,
      badge: "02",
    },
    {
      title: "Hardware Embedded",
      desc: "Custom PCB & firmware",
      icon: Cpu,
      badge: "03",
    },
    {
      title: "Industrial & UI Design",
      desc: "Casing IP67 & sistem UI/UX",
      icon: Box,
      badge: "04",
    },
  ];

  return (
    <section id="tentang" className="pt-28 pb-20 lg:pt-36 lg:pb-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#12AA9E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= 1. TOP OVERVIEW SECTION ================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-28">
          
          {/* Left Column: Human Story & Corporate Identity (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12AA9E]/10 text-[#0d7d74] font-bold text-xs uppercase tracking-wider mb-4 border border-[#12AA9E]/25">
              <Sparkles className="w-3.5 h-3.5 text-[#12AA9E]" />
              02. Profil Perusahaan
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-6 leading-[1.18] tracking-tight">
              Mengenal Lebih Dekat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12AA9E] to-primary-dark">
                PT. Penta Digital Nusantara
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base lg:text-lg leading-relaxed">
              <p>
                Dibentuk secara khusus sebagai pelopor penyedia solusi <strong className="text-secondary font-semibold">Internet of Things (IoT)</strong> di Indonesia, <strong className="text-secondary font-semibold">PT. Pentarium Digital Nusantara (Pentarium)</strong> memiliki keahlian dan kapabilitas menyeluruh untuk mengatasi berbagai tantangan digitalisasi Anda.
              </p>
              
              <p>
                Didukung oleh tim ahli <em>in-house</em> yang berdedikasi serta kemitraan prinsipal yang kokoh, kami menghadirkan ekosistem teknologi informasi yang andal tanpa memandang tingkat kompleksitasnya: mulai dari perancangan arsitektur, riset & fabrikasi perangkat keras (<em>hardware</em>), pengembangan perangkat lunak (<em>software & cloud</em>), hingga implementasi konektivitas telemetri dan pemeliharaan sistem terpadu.
              </p>

              <div className="bg-white p-5 rounded-2xl border-l-4 border-[#12AA9E] border border-slate-200/80 shadow-2xs">
                <p className="text-slate-700 text-sm lg:text-base font-medium italic">
                  "Komitmen kami adalah menghadirkan solusi digital yang hemat biaya, berkualitas tinggi, dan dapat diandalkan demi menciptakan nilai tambah yang berkelanjutan bagi setiap mitra."
                </p>
              </div>
            </div>

            {/* 4 Fokus Layanan Inti */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {coreServices.map((service, sIdx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={sIdx}
                    className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#12AA9E]/50 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#12AA9E]/10 text-[#12AA9E] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#12AA9E] transition-colors">
                          {service.badge}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#12AA9E] transition-colors leading-snug">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Real On-Site Deployment Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Main Interactive Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                key={activeItem.id}
                className="w-full h-[430px] object-cover object-center transition-all duration-500 group-hover:scale-105"
              />
              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

              {/* Top status bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-800 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Implementasi Nyata Lapangan
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[11px] font-mono text-white/95">
                  <MapPin className="w-3 h-3 text-[#12AA9E]" />
                  {activeItem.location}
                </span>
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="inline-block text-[11px] uppercase tracking-wider text-[#12AA9E] font-bold mb-1">
                  {activeItem.tag}
                </span>
                <h4 className="text-lg lg:text-xl font-bold text-white mb-1.5 leading-snug">
                  {activeItem.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {activeItem.description}
                </p>

                {/* Partner Trust Strip */}
                <div className="mt-3.5 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="text-slate-400">Ekosistem & Prinsipal Resmi:</span>
                  <span className="font-semibold text-white">Telkom • Mitratel • EMQX</span>
                </div>
              </div>
            </div>

            {/* Interactive Photo Switcher Tabs */}
            <div className="bg-white p-2 rounded-2xl border border-slate-200/80 shadow-xs grid grid-cols-3 gap-2">
              {fieldShowcase.map((item, idx) => {
                const isActive = activePhotoIdx === idx;
                return (
                  <button
                    key={item.id}
                    id={`showcase-tab-${item.id}`}
                    type="button"
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl text-left transition-all ${
                      isActive
                        ? 'bg-[#12AA9E]/15 border-2 border-[#12AA9E] text-[#0d7d74] shadow-xs'
                        : 'bg-slate-50/80 hover:bg-slate-100 text-slate-600 border border-slate-200/60'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-200"
                    />
                    <div className="min-w-0 flex-1">
                      <p className={`text-[11px] font-bold truncate ${isActive ? 'text-[#0d7d74]' : 'text-slate-800'}`}>
                        {item.id === 'pentaflood' ? 'PentaFlood' : item.id === 'aws' ? 'Stasiun AWS' : 'Command Ctr'}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {item.id === 'pentaflood' ? 'Telemetri' : item.id === 'aws' ? 'Sensors' : 'Dashboard'}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ================= 2. THE FOUR PILLARS SECTION (GOJEK-INSPIRED) ================= */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#12AA9E] font-extrabold tracking-widest text-xs uppercase mb-2 block">
              Our Divisions
            </span>
            <h3 className="text-3xl lg:text-4xl font-black text-secondary tracking-tight">
              The Four Pillars of Pentarium
            </h3>
            <p className="text-slate-500 text-sm lg:text-base mt-2">
              Empat pilar divisi terpadu yang saling bersinergi dalam melahirkan solusi teknologi berkualitas tinggi.
            </p>
          </div>

          {/* 4 Cards Grid - Alternating #12AA9E and White */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const isTeal = pillar.colorScheme === "teal";
              
              return (
                <div
                  key={idx}
                  className={`rounded-3xl p-7 lg:p-8 flex flex-col justify-between min-h-[350px] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${
                    isTeal
                      ? 'bg-[#12AA9E] text-white shadow-[0_16px_35px_rgba(18,170,158,0.32)] hover:shadow-[0_22px_45px_rgba(18,170,158,0.45)] border border-[#12AA9E]/40'
                      : 'bg-white text-slate-900 shadow-[0_16px_35px_rgba(15,23,42,0.06)] hover:shadow-[0_22px_45px_rgba(18,170,158,0.22)] border border-slate-200/90'
                  }`}
                >
                  {/* Top Part: Title & Subtitle */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                          isTeal
                            ? 'bg-white/20 text-white'
                            : 'bg-[#12AA9E]/10 text-[#0d7d74]'
                        }`}
                      >
                        Pilar {pillar.number}
                      </span>
                    </div>

                    <h4
                      className={`text-2xl font-black mb-2 tracking-tight ${
                        isTeal ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {pillar.name}
                    </h4>

                    <p
                      className={`text-xs lg:text-sm font-medium leading-relaxed ${
                        isTeal ? 'text-teal-50' : 'text-slate-500'
                      }`}
                    >
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Part: Clean Iconic Logo for Each Pillar */}
                  <div className="pt-8 pb-2 flex flex-col items-center justify-center">
                    <div
                      className={`w-24 h-24 rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md ${
                        isTeal
                          ? 'bg-white/15 border border-white/25 text-white shadow-black/10'
                          : 'bg-[#12AA9E]/10 border border-[#12AA9E]/20 text-[#12AA9E] shadow-[#12AA9E]/5'
                      }`}
                    >
                      {pillar.shapeType === "iot" && (
                        /* Logo IoT: Sensor Hub & Wireless Telemetry Arcs */
                        <svg
                          viewBox="0 0 48 48"
                          className="w-12 h-12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="24" cy="24" r="5" fill="currentColor" fillOpacity="0.2" />
                          <circle cx="24" cy="24" r="2.5" fill="currentColor" />
                          <path d="M17 17a9.9 9.9 0 0 1 14 0" />
                          <path d="M12 12a17 17 0 0 1 24 0" />
                          <path d="M7 7a24.1 24.1 0 0 1 34 0" />
                          <path d="M24 29v7" />
                          <circle cx="24" cy="38" r="2" fill="currentColor" />
                          <path d="M20 27l-6 6" />
                          <circle cx="12" cy="35" r="2" fill="currentColor" />
                          <path d="M28 27l6 6" />
                          <circle cx="36" cy="35" r="2" fill="currentColor" />
                        </svg>
                      )}

                      {pillar.shapeType === "software" && (
                        /* Logo Software: Application Window & Code Brackets */
                        <svg
                          viewBox="0 0 48 48"
                          className="w-12 h-12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="6" y="8" width="36" height="26" rx="5" fill="currentColor" fillOpacity="0.1" />
                          <line x1="6" y1="16" x2="42" y2="16" />
                          <circle cx="11" cy="12" r="1.5" fill="currentColor" />
                          <circle cx="16" cy="12" r="1.5" fill="currentColor" />
                          <circle cx="21" cy="12" r="1.5" fill="currentColor" />
                          <polyline points="18 21 14 25 18 29" />
                          <polyline points="30 21 34 25 30 29" />
                          <line x1="26" y1="20" x2="22" y2="30" />
                          <path d="M18 34l-3 6h18l-3-6" />
                        </svg>
                      )}

                      {pillar.shapeType === "hardware" && (
                        /* Logo Hardware: Microcontroller CPU Processor Chip */
                        <svg
                          viewBox="0 0 48 48"
                          className="w-12 h-12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="11" y="11" width="26" height="26" rx="4" fill="currentColor" fillOpacity="0.15" />
                          <rect x="17" y="17" width="14" height="14" rx="2" strokeWidth="2" />
                          <circle cx="20" cy="20" r="1" fill="currentColor" />
                          <line x1="16" y1="5" x2="16" y2="11" />
                          <line x1="24" y1="5" x2="24" y2="11" />
                          <line x1="32" y1="5" x2="32" y2="11" />
                          <line x1="16" y1="37" x2="16" y2="43" />
                          <line x1="24" y1="37" x2="24" y2="43" />
                          <line x1="32" y1="37" x2="32" y2="43" />
                          <line x1="5" y1="16" x2="11" y2="16" />
                          <line x1="5" y1="24" x2="11" y2="24" />
                          <line x1="5" y1="32" x2="11" y2="32" />
                          <line x1="37" y1="16" x2="43" y2="16" />
                          <line x1="37" y1="24" x2="43" y2="24" />
                          <line x1="37" y1="32" x2="43" y2="32" />
                        </svg>
                      )}

                      {pillar.shapeType === "design" && (
                        /* Logo Design: Digital Pen Tool & Vector Bezier Anchors */
                        <svg
                          viewBox="0 0 48 48"
                          className="w-12 h-12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M25 8l8 8-16 16-5-1-1-5 14-18z" fill="currentColor" fillOpacity="0.1" />
                          <path d="M11 31l-4 9 9-4" />
                          <circle cx="21" cy="18" r="2" fill="currentColor" />
                          <path d="M26 34c4-3 9-2 12 1" strokeDasharray="2 2" />
                          <circle cx="40" cy="36" r="2.5" fill="currentColor" fillOpacity="0.25" />
                          <path d="M8 18c2-4 6-5 9-3" strokeDasharray="2 2" />
                          <rect x="6" y="16" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.25" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= 3. VISION & MISSION SHOWCASE ================= */}
        <div className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#12AA9E] font-extrabold tracking-widest text-xs uppercase mb-2 block">
              Arah & Tujuan Kami
            </span>
            <h3 className="text-2xl lg:text-3xl font-black text-secondary">
              Visi & Misi Perusahaan
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Prinsip fundamental yang memandu setiap langkah inovasi dan dedikasi PT. Penta Digital Nusantara.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#12AA9E] to-primary-dark" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#12AA9E]/10 text-[#12AA9E] flex items-center justify-center shadow-xs">
                    <Eye className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#12AA9E]/10 text-[#0d7d74] font-bold text-xs uppercase tracking-wider">
                    Visi
                  </span>
                </div>

                <h4 className="text-2xl font-black text-secondary mb-3">Our Vision</h4>
                
                <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6 font-medium">
                  "Become an Information and Technology company who can compete in global world nowadays, and become a company who can contribute to our society in IT field."
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Globe className="w-4 h-4 text-[#12AA9E] shrink-0" />
                <span>Berdaya saing global & berkontribusi nyata bagi masyarakat</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary to-[#12AA9E]" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shadow-xs">
                    <Target className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-wider">
                    Misi
                  </span>
                </div>

                <h4 className="text-2xl font-black text-secondary mb-4">Our Mission</h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-[#12AA9E]/10 text-[#12AA9E] flex items-center justify-center shrink-0 font-bold text-xs">
                      01
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-secondary">Profesionalisme & Kerja Tim</h5>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Put forward our professionalism, individual skills, and teamwork to produce the best product.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-[#12AA9E]/10 text-[#12AA9E] flex items-center justify-center shrink-0 font-bold text-xs">
                      02
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-secondary">Solusi Terbaik bagi Mitra</h5>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Give best solution to our partner to handle any problems in IT sector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500 mt-4">
                <Award className="w-4 h-4 text-secondary shrink-0" />
                <span>Keahlian individu, kolaborasi tim, dan kepuasan mitra</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
