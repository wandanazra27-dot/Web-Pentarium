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

  const stats = [
    { value: "2020", label: "Tahun Berdiri", detail: "Di Bandung, Jawa Barat" },
    { value: "10+", label: "Solusi Produk", detail: "PentaFlood, AWS, dll." },
    { value: "Nasional", label: "Cakupan Jaringan", detail: "Jawa, Sumatra & Bali" },
    { value: "100%", label: "In-House Team", detail: "Hardware & Software" },
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

            {/* Authentic Company Milestones */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, sIdx) => (
                <div key={sIdx} className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-100 shadow-2xs hover:border-[#12AA9E]/40 hover:shadow-md transition-all">
                  <p className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-black text-[#12AA9E] font-mono tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-800 mt-1">{stat.label}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{stat.detail}</p>
                </div>
              ))}
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

                  {/* Bottom Part: Minimalist Geometric Graphic Art (Gojek-Inspired) */}
                  <div className="pt-8">
                    {pillar.shapeType === "iot" && (
                      /* IoT geometric connected nodes & rings */
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full border-4 border-slate-900 bg-transparent shrink-0" />
                        <div className="w-8 h-8 rounded-full bg-white shrink-0" />
                        <div className="w-8 h-8 rounded-full border-4 border-slate-900 bg-transparent shrink-0" />
                        <div className="w-8 h-8 rounded-full bg-white shrink-0" />
                        <div className="w-4 h-8 rounded-l-full bg-slate-900 shrink-0" />
                      </div>
                    )}

                    {pillar.shapeType === "software" && (
                      /* Software geometric arch & pill */
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-8 rounded-t-full bg-[#12AA9E] relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-900" />
                        </div>
                        <div className="w-16 h-8 rounded-b-full bg-slate-900" />
                      </div>
                    )}

                    {pillar.shapeType === "hardware" && (
                      /* Hardware geometric overlapping solid & ring */
                      <div className="flex items-center justify-center -space-x-4">
                        <div className="w-14 h-14 rounded-full bg-slate-900 shrink-0" />
                        <div className="w-14 h-14 rounded-full border-4 border-white bg-transparent shrink-0" />
                      </div>
                    )}

                    {pillar.shapeType === "design" && (
                      /* Design geometric intersecting teal & dark circle */
                      <div className="flex items-center justify-center -space-x-3">
                        <div className="w-14 h-14 rounded-full bg-[#12AA9E] shrink-0" />
                        <div className="w-14 h-14 rounded-full border-4 border-slate-900 bg-transparent shrink-0" />
                      </div>
                    )}
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
