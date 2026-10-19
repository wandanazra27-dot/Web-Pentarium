import React from 'react';
import { FileCheck, ShieldCheck, CreditCard, Receipt, Building2, CheckCircle2 } from 'lucide-react';

export default function Legality() {
  const legalItems = [
    {
      number: "01",
      title: "Nomor Induk Berusaha (NIB)",
      subtitle: "Legal Business Identification",
      icon: FileCheck,
      details: [
        { label: "Nomor NIB", value: "0220103330143", highlight: true },
        { label: "Instansi Penerbit", value: "Lembaga OSS / Pemerintah RI" },
        { label: "Status Dokumen", value: "Aktif & Terverifikasi" }
      ],
      badge: "OSS Terdaftar"
    },
    {
      number: "02",
      title: "Rekening Resmi Perusahaan",
      subtitle: "Official Corporate Bank Account",
      icon: CreditCard,
      details: [
        { label: "Bank", value: "Bank Danamon" },
        { label: "Kantor Cabang", value: "Cabang Merdeka Bandung" },
        { label: "No. Rekening", value: "8800220330", highlight: true },
        { label: "Atas Nama", value: "PT. Penta Digital Nusantara" }
      ],
      badge: "Akun Resmi"
    },
    {
      number: "03",
      title: "Akta & Pengesahan Kemenkumham",
      subtitle: "Notary Legal Document",
      icon: ShieldCheck,
      details: [
        { label: "Akta Pendirian", value: "No. 04 ; 2 Maret 2020", highlight: true },
        { label: "SK Kemenkumham", value: "AHU-0440.AH.02.01-TH.2010" },
        { label: "Bentuk Badan Hukum", value: "Perseroan Terbatas (PT)" }
      ],
      badge: "Kemenkumham RI"
    },
    {
      number: "04",
      title: "Nomor Pokok Wajib Pajak (NPWP)",
      subtitle: "Tax Registration",
      icon: Receipt,
      details: [
        { label: "Nomor NPWP", value: "95.560.059.1-422.00", highlight: true },
        { label: "Wajib Pajak", value: "PT. Penta Digital Nusantara" },
        { label: "Alamat Terdaftar", value: "Jl. Bugenville VII No 6, RT 02 RW 04, Gempolsari, Bandung Kulon" }
      ],
      badge: "DJP Terdaftar"
    }
  ];

  return (
    <section id="legalitas" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary-dark font-bold text-xs uppercase tracking-wider mb-4 border border-primary/20">
            <Building2 className="w-3.5 h-3.5" />
            03. Corporate Legality
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-secondary mb-4 leading-tight">
            Legalitas Perusahaan
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            PT. Penta Digital Nusantara merupakan entitas bisnis berbadan hukum resmi yang beroperasi secara sah di bawah regulasi Negara Kesatuan Republik Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {legalItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-slate-50/80 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-primary/30 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-primary tracking-wider uppercase">
                          Bagian {item.number}
                        </span>
                        <h3 className="text-xl font-bold text-secondary group-hover:text-primary-dark transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200/60 shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-3 bg-white group-hover:bg-slate-50/70 p-5 rounded-2xl border border-slate-100 transition-colors">
                    {item.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm border-b border-slate-100/80 last:border-0 pb-2.5 last:pb-0"
                      >
                        <span className="text-slate-500 font-medium text-xs sm:text-sm">
                          {detail.label}
                        </span>
                        <span
                          className={`font-semibold text-right ${
                            detail.highlight
                              ? 'text-primary font-mono text-base'
                              : 'text-slate-800'
                          }`}
                        >
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>PENTARIUM | PT. PENTARIUM DIGITAL NUSANTARA</span>
                  <span className="font-mono font-semibold text-slate-500">Hal. 03</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
