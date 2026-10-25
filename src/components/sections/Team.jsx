import React, { useState, useEffect } from 'react';
import {
  Users2,
  Shield,
  Sparkles,
  IdCard,
  X,
  CheckCircle2,
  Briefcase,
  QrCode,
  Building2,
  Cpu,
} from 'lucide-react';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedMember(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const team = [
    {
      role: "CEO",
      name: "Toni Prabowo",
      title: "Chief Executive Officer",
      idNumber: "PDN-EXEC-2020-001",
      image: "/team/toni_prabowo_ceo.png",
      tag: "Executive Board",
      themeColor: "#12AA9E",
      frameColor: "border-[#12AA9E]",
      bgBackplate: "bg-teal-100",
      accentDot: "bg-[#12AA9E]",
      squiggleColor: "#12AA9E",
      explanation: {
        whatIs: "Chief Executive Officer (CEO) adalah nakhoda tertinggi korporasi yang memegang komando strategis seluruh arah bisnis, investasi, dan kelangsungan inovasi PT. Penta Digital Nusantara.",
        dailyTasks: "Memimpin kesepakatan kemitraan strategis dengan Telkom & Mitratel, menetapkan visi produk telemetri nasional, serta memastikan seluruh divisi bergerak selaras mencapai target korporasi.",
        responsibilities: [
          "Penetapan arah strategis & visi pertumbuhan bisnis IoT nasional",
          "Kemitraan strategis dengan BUMN, korporasi, & pemerintah",
          "Tata kelola korporasi, kepatuhan hukum, & representasi publik",
        ],
        accessLevel: "Level 1 • Supreme Executive Access",
      },
    },
    {
      role: "CTO",
      name: "Waluya Juang",
      title: "Chief Technology Officer",
      idNumber: "PDN-EXEC-2020-002",
      image: "/team/waluya_juang_cto.png",
      tag: "Technology Lead",
      themeColor: "#2563EB",
      frameColor: "border-blue-500",
      bgBackplate: "bg-blue-100",
      accentDot: "bg-blue-500",
      squiggleColor: "#2563EB",
      explanation: {
        whatIs: "Chief Technology Officer (CTO) adalah kepala arsitek teknologi yang mengomandani seluruh riset rekayasa, pengembangan perangkat keras (hardware), perangkat lunak (software), dan integrasi telemetri LoRaWAN.",
        dailyTasks: "Memimpin perancangan skematik sirkuit & custom PCB, mengawasi integrasi cloud server EMQX, serta merancang arsitektur telemetri sensor tahan cuaca ekstrim.",
        responsibilities: [
          "Arsitektur embedded hardware & custom PCB controller",
          "Pengembangan cloud backend & telemetri LoRaWAN Jawa-Bali-Sumatra",
          "Keamanan enkripsi transmisi data & standar ketahanan teknis",
        ],
        accessLevel: "Level 1 • Tech & Infrastructure Access",
      },
    },
    {
      role: "CFO",
      name: "Husnul Khotimah",
      title: "Chief Financial Officer",
      idNumber: "PDN-EXEC-2020-003",
      image: "/team/husnul_khotimah_cfo.png",
      tag: "Finance & Audit",
      themeColor: "#E11D48",
      frameColor: "border-rose-400",
      bgBackplate: "bg-rose-100",
      accentDot: "bg-rose-400",
      squiggleColor: "#E11D48",
      explanation: {
        whatIs: "Chief Financial Officer (CFO) adalah pengelola utama integritas finansial perusahaan, permodalan produksi massal sensor, serta kepatuhan fiskal dan perpajakan resmi.",
        dailyTasks: "Mengelola penganggaran biaya produksi manufaktur hardware (cost-effective), mengawasi kepatuhan audit perpajakan (NPWP), dan mengelola rekening resmi perusahaan di Bank Danamon.",
        responsibilities: [
          "Perencanaan anggaran riset & pengadaan rantai pasok komponen",
          "Kepatuhan audit legalitas fiskal, pajak (NPWP), & akuntansi",
          "Optimasi biaya solusi digital agar hemat biaya bagi setiap mitra",
        ],
        accessLevel: "Level 1 • Treasury & Corporate Assets",
      },
    },
    {
      role: "COO",
      name: "Agus Budiantoro",
      title: "Chief Operational Officer",
      idNumber: "PDN-EXEC-2020-004",
      image: "/team/agus_budiantoro_coo.png",
      tag: "Operations Lead",
      themeColor: "#D97706",
      frameColor: "border-amber-400",
      bgBackplate: "bg-amber-100",
      accentDot: "bg-amber-400",
      squiggleColor: "#D97706",
      explanation: {
        whatIs: "Chief Operational Officer (COO) adalah pemimpin eksekusi operasional dan logistik lapangan yang mengawal perakitan fisik stasiun sensor hingga instalasi di lapangan seluruh Indonesia.",
        dailyTasks: "Mengoordinasikan tim lapangan dalam instalasi tiang telemetri PentaFlood/AWS, memastikan ketersediaan pasokan panel surya & baterai, serta memimpin pemeliharaan sistem on-site.",
        responsibilities: [
          "Manajemen operasional fabrikasi alat & perakitan fisik",
          "Pengawasan on-site deployment & keselamatan tim teknis",
          "SOP pemeliharaan berkala sistem sensor di seluruh wilayah",
        ],
        accessLevel: "Level 1 • Field & Operations Access",
      },
    },
    {
      role: "CMO",
      name: "Hanief Fatchuddin",
      title: "Chief Marketing Officer",
      idNumber: "PDN-EXEC-2020-005",
      image: "/team/hanief_fatchuddin_cmo.png",
      tag: "Commercial Lead",
      themeColor: "#7C3AED",
      frameColor: "border-purple-400",
      bgBackplate: "bg-purple-100",
      accentDot: "bg-purple-400",
      squiggleColor: "#7C3AED",
      explanation: {
        whatIs: "Chief Marketing Officer (CMO) adalah ujung tombak ekspansi komersial yang bertanggung jawab atas pengenalan solusi IoT Pentarium ke pasar korporasi (B2B) dan instansi pemerintah (B2G).",
        dailyTasks: "Membangun relasi kemitraan proyek Smartvillage Nusantara, menyusun strategi komunikasi brand Pentarium, serta memperluas jaringan reseller dan lisensi EMQX.",
        responsibilities: [
          "Pengembangan pasar B2B/B2G & kemitraan strategis",
          "Distribusi portofolio solusi telemetri & aplikasi mobile",
          "Branding korporasi, edukasi pasar IoT, & client relations",
        ],
        accessLevel: "Level 1 • Strategic Business Access",
      },
    },
  ];

  return (
    <section id="tim" className="pt-28 pb-24 lg:pt-36 lg:pb-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#12AA9E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12AA9E]/10 text-[#0d7d74] font-bold text-xs uppercase tracking-wider mb-4 border border-[#12AA9E]/25">
            <Users2 className="w-3.5 h-3.5 text-[#12AA9E]" />
            03. Management Team
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12AA9E] to-primary-dark">Team</span>
          </h2>
          
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Dewan pimpinan eksekutif PT. Penta Digital Nusantara yang berdedikasi melahirkan inovasi teknologi cerdas untuk industri Indonesia.
          </p>
        </div>

        {/* 5 Executive Cards Grid - Matching Reference Framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6 justify-center items-stretch">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              {/* Layered Graphic Frame (Matching Reference) */}
              <div className="relative w-52 h-64 sm:w-48 sm:h-60 mb-6 flex items-center justify-center">
                {/* 1. Background Colored Solid Backplate (Offset Layer) */}
                <div
                  className={`absolute -top-2.5 -right-2.5 w-full h-full rounded-3xl ${member.bgBackplate} transition-all duration-300 group-hover:-top-3 group-hover:-right-3 shadow-xs`}
                />

                {/* 2. Front Picture Frame (Thick Border Box) */}
                <div
                  className={`relative w-full h-full rounded-3xl border-4 ${member.frameColor} bg-white overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 flex items-end justify-center`}
                >
                  {/* Executive Portrait Photo */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle bottom gradient shadow */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900/15 to-transparent pointer-events-none" />
                </div>

                {/* 3. Memphis Geometric Graphic Accents (Matching Reference) */}
                {/* Wavy squiggle line at top-left */}
                <svg
                  className="absolute -top-3 -left-3 w-12 h-12 pointer-events-none z-20 group-hover:rotate-12 transition-transform duration-300"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M4 22 Q 10 10, 18 20 T 34 18"
                    stroke={member.squiggleColor}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Yellow Plus Cross '+' at top-right */}
                <span className="absolute -top-1 right-2 text-amber-400 font-black text-2xl font-mono leading-none z-20 pointer-events-none select-none drop-shadow-xs">
                  +
                </span>

                {/* Ring Circle Accent at left-center */}
                <span className="absolute top-1/2 -left-3 w-4 h-4 rounded-full border-3 border-amber-400 z-20 pointer-events-none bg-white/50" />

                {/* Small Solid Accent Dot at bottom-right */}
                <span className="absolute bottom-5 -right-2 w-3.5 h-3.5 rounded-full bg-amber-400 z-20 pointer-events-none shadow-xs" />
              </div>

              {/* Name & Title */}
              <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-[#12AA9E] transition-colors leading-tight">
                {member.name}
              </h3>
              
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 mb-4">
                {member.title}
              </p>

              {/* Interactive ID Card Button */}
              <button
                type="button"
                onClick={() => setSelectedMember(member)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-800 bg-white hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-slate-900 shadow-2xs hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
              >
                <IdCard className="w-3.5 h-3.5 text-[#12AA9E] group-hover/btn:text-white transition-colors" />
                <span>Lihat ID Card</span>
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* ================= INTERACTIVE ID CARD MODAL ================= */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          {/* Card Container (stops propagation so clicking inside doesn't close) */}
          <div
            className="relative w-full max-w-[420px] my-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Lanyard Strap & Metal Carabiner Top */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Lanyard Fabric Strap */}
              <div className="w-10 h-10 bg-slate-900 rounded-t-md border-t-2 border-slate-700 shadow-md flex items-center justify-center">
                <div className="w-1.5 h-full bg-slate-800" />
              </div>
              {/* Metal Badge Clip */}
              <div className="w-7 h-5 rounded-sm bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 border border-slate-400 shadow-xs flex items-center justify-center -mt-1">
                <div className="w-3 h-2 rounded-xs bg-slate-600/30" />
              </div>
            </div>

            {/* 2. Realistic Corporate ID Card Badge */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 relative pt-3 -mt-2">
              
              {/* Lanyard Punch Hole */}
              <div className="w-14 h-3 bg-slate-900 rounded-full mx-auto border border-slate-700 shadow-inner mb-3" />

              {/* Close Button Top Right */}
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all z-20"
                aria-label="Tutup ID Card"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badge Top Header */}
              <div
                className="px-6 py-4 text-white relative overflow-hidden"
                style={{ backgroundColor: selectedMember.themeColor }}
              >
                {/* Subtle sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />

                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-90 block">
                      PT. Penta Digital Nusantara
                    </span>
                    <h4 className="text-sm font-black tracking-wider uppercase font-mono">
                      OFFICIAL EXECUTIVE PASS
                    </h4>
                  </div>

                  {/* Golden Smart Chip Illustration */}
                  <div className="w-9 h-7 rounded bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 border border-amber-600/40 p-0.5 relative shadow-xs shrink-0">
                    <div className="w-full h-full border border-amber-700/30 rounded-xs flex flex-col justify-between p-0.5">
                      <div className="h-0.5 bg-amber-700/40 w-full" />
                      <div className="h-0.5 bg-amber-700/40 w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Photo & Identification */}
              <div className="p-6">
                <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                  {/* Portrait Frame */}
                  <div className="w-24 h-28 rounded-2xl bg-gradient-to-t from-slate-100 to-slate-50 border-2 border-slate-200 overflow-hidden shadow-inner flex items-end justify-center shrink-0">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-contain object-bottom"
                    />
                  </div>

                  {/* Identity Details */}
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-white text-[10px] font-mono font-bold tracking-wider mb-1"
                      style={{ backgroundColor: selectedMember.themeColor }}
                    >
                      {selectedMember.role}
                    </span>
                    <h3 className="font-black text-lg text-slate-900 leading-snug">
                      {selectedMember.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 leading-tight">
                      {selectedMember.title}
                    </p>
                    <p className="text-[11px] font-mono text-slate-400 mt-1">
                      ID: {selectedMember.idNumber}
                    </p>
                  </div>
                </div>

                {/* "Apa Itu dan Apa Tugasnya?" Explanation */}
                <div className="mt-4 bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-6 h-6 rounded-lg text-white flex items-center justify-center shrink-0"
                      style={{ backgroundColor: selectedMember.themeColor }}
                    >
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black text-slate-900">
                      Apa Tugas & Perannya di Pentarium?
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {selectedMember.explanation.whatIs}
                  </p>

                  <div className="pt-2.5 border-t border-slate-200/70">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 font-mono">
                      Tanggung Jawab Utama:
                    </span>
                    <ul className="space-y-1.5">
                      {selectedMember.explanation.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-[11px] text-slate-700 leading-tight">
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0 mt-0.5"
                            style={{ color: selectedMember.themeColor }}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Security Barcode & Tech Credentials */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <div>
                    <span className="block text-slate-700 font-bold text-[11px]">
                      {selectedMember.explanation.accessLevel}
                    </span>
                    <span className="text-[9px] text-slate-400">
                      BANDUNG • SK KEMENKUMHAM AHU-0440
                    </span>
                  </div>

                  {/* Stylized Barcode */}
                  <div className="flex items-center gap-0.5 h-7">
                    <div className="w-0.5 h-full bg-slate-800" />
                    <div className="w-1 h-full bg-slate-800" />
                    <div className="w-0.5 h-full bg-slate-300" />
                    <div className="w-1.5 h-full bg-slate-800" />
                    <div className="w-0.5 h-full bg-slate-800" />
                    <div className="w-1 h-full bg-slate-400" />
                    <div className="w-0.5 h-full bg-slate-800" />
                    <div className="w-2 h-full bg-slate-800" />
                    <div className="w-0.5 h-full bg-slate-800" />
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="w-full mt-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Tutup ID Card
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
