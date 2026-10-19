import React from 'react';
import {
  Eye,
  Target,
  CheckCircle2,
  Globe,
  Award,
  Sparkles,
  MapPin,
  Shield,
  Layers,
  Cpu,
  Smartphone,
  PenTool,
  Activity,
} from 'lucide-react';

export default function About() {
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

  return (
    <section id="tentang" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#12AA9E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= 1. TOP OVERVIEW SECTION ================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Story & Detailed Paragraphs (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12AA9E]/10 text-[#0d7d74] font-bold text-xs uppercase tracking-wider mb-4 border border-[#12AA9E]/25">
              <Sparkles className="w-3.5 h-3.5 text-[#12AA9E]" />
              02. About Pentarium
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-6 leading-tight tracking-tight">
              Mengenal Lebih Dekat <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#12AA9E] to-primary-dark">
                PT. Penta Digital Nusantara
              </span>
            </h2>

            <div className="space-y-5 text-slate-600 text-base lg:text-lg leading-relaxed">
              <p>
                Dibentuk secara khusus sebagai pelopor penyedia solusi <strong className="text-secondary font-semibold">Internet of Things (IoT)</strong> di Indonesia, <strong className="text-secondary font-semibold">PT. PENTARIUM DIGITAL NUSANTARA</strong> memiliki keahlian dan kapabilitas menyeluruh untuk mengatasi berbagai tantangan digital Anda.
              </p>
              
              <p>
                Didukung oleh tim ahli in-house yang berdedikasi serta kemitraan prinsipal yang kokoh, kami mampu menghadirkan solusi teknologi informasi yang andal tanpa memandang tingkat kompleksitasnya. Tanggung jawab kami mencakup seluruh siklus: mulai dari perancangan arsitektur, pengembangan perangkat lunak (software), fabrikasi perangkat keras (hardware), hingga pemeliharaan sistem.
              </p>

              <p className="border-l-4 border-[#12AA9E] pl-4 text-slate-700 font-medium italic bg-white/70 py-2.5 rounded-r-xl shadow-2xs">
                "Komitmen kami adalah menghadirkan solusi digital yang hemat biaya, berkualitas tinggi, dan dapat diandalkan demi menciptakan nilai tambah yang berkelanjutan bagi setiap mitra."
              </p>
            </div>

            {/* Quick Feature Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#12AA9E]" /> End-to-End IoT Solutions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#12AA9E]" /> Cost-Effective & Reliable
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#12AA9E]" /> In-House Engineering
              </span>
            </div>
          </div>

          {/* Right Column: Corporate Highlights Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-secondary via-[#0a1128] to-[#01023a] rounded-3xl p-7 lg:p-9 text-white shadow-xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#12AA9E]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#12AA9E] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  Komitmen Kami
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-white">Your IoT Solution</h3>
                <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                  Menyediakan ekosistem solusi digital terintegrasi dari hulu ke hilir untuk industri dan korporasi.
                </p>
              </div>

              <div className="space-y-3.5 relative z-10">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#12AA9E]/20 text-[#12AA9E] flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Performance Excellence</h4>
                    <p className="text-slate-300 text-xs mt-0.5">Fokus pada performa sistem tinggi dan keandalan data real-time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#12AA9E]/20 text-[#12AA9E] flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Full-Stack Responsibility</h4>
                    <p className="text-slate-300 text-xs mt-0.5">Tanggung jawab terpusat: perancangan, perakitan, dan implementasi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#12AA9E]/20 text-[#12AA9E] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Headquartered in Bandung</h4>
                    <p className="text-slate-300 text-xs mt-0.5">Melayani implementasi digital dan konektivitas LoRaWAN se-Indonesia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 2. THE FOUR PILLARS SECTION (GOJEK-INSPIRED) ================= */}
        <div className="mb-24">
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
