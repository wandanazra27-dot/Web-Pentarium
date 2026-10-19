import React from 'react';
import { Eye, Target, Activity, Smartphone, Cpu, PenTool, CheckCircle2, Globe, Award, Sparkles } from 'lucide-react';

export default function About() {
  const divisions = [
    {
      number: "01",
      name: "IoT (Internet of Things)",
      desc: "Smart sensors, telemetry, & LoRaWAN integration",
      icon: Activity,
    },
    {
      number: "02",
      name: "Software Development",
      desc: "Mobile apps & custom web applications",
      icon: Smartphone,
    },
    {
      number: "03",
      name: "Hardware Engineering",
      desc: "Custom embedded systems & IoT device design",
      icon: Cpu,
    },
    {
      number: "04",
      name: "Design & Prototyping",
      desc: "Product design & digital user experience",
      icon: PenTool,
    },
  ];

  return (
    <section id="tentang" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Overview & Divisions */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Story & Detailed Paragraphs (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary-dark font-bold text-xs uppercase tracking-wider mb-4 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              02. About Pentarium
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-6 leading-tight tracking-tight">
              Mengenal Lebih Dekat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
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

              <p className="border-l-4 border-primary pl-4 text-slate-700 font-medium italic bg-white/60 py-2 rounded-r-xl">
                "Komitmen kami adalah menghadirkan solusi digital yang hemat biaya, berkualitas tinggi, dan dapat diandalkan demi menciptakan nilai tambah yang berkelanjutan bagi setiap mitra."
              </p>
            </div>

            {/* Quick Feature Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> End-to-End IoT Solutions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Cost-Effective & Reliable
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> In-House Engineering
              </span>
            </div>
          </div>

          {/* Right Column: Our Divisions (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-secondary via-[#0a1128] to-[#01023a] rounded-3xl p-7 lg:p-9 text-white shadow-xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 mb-6">
                <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
                  Pilar Keahlian
                </span>
                <h3 className="text-2xl lg:text-3xl font-black mt-1">Our Divisions</h3>
                <p className="text-slate-300 text-xs mt-1">
                  Empat divisi utama yang saling terintegrasi dalam merancang produk berkualitas tinggi.
                </p>
              </div>

              <div className="space-y-3.5 relative z-10">
                {divisions.map((div, idx) => {
                  const Icon = div.icon;
                  return (
                    <div
                      key={idx}
                      className="group flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm lg:text-base text-white group-hover:text-primary transition-colors">
                            {div.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400">
                            {div.number}
                          </span>
                        </div>
                        <p className="text-slate-300 text-xs mt-0.5 leading-snug">
                          {div.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Vision & Mission Showcase */}
        <div className="pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-extrabold tracking-widest text-xs uppercase mb-2 block">
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
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary-dark" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-xs">
                    <Eye className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary-dark font-bold text-xs uppercase tracking-wider">
                    Visi
                  </span>
                </div>

                <h4 className="text-2xl font-black text-secondary mb-3">Our Vision</h4>
                
                <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6 font-medium">
                  "Become an Information and Technology company who can compete in global world nowadays, and become a company who can contribute to our society in IT field."
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Globe className="w-4 h-4 text-primary shrink-0" />
                <span>Berdaya saing global & berkontribusi nyata bagi masyarakat</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary to-primary" />

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
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-xs">
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
                    <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold text-xs">
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
