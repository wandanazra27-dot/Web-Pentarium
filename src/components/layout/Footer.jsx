import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src="/logo pentarium.png" alt="Pentarium Logo" className="h-10 w-auto brightness-0 invert" />
            </a>
            <p className="text-white/60 leading-relaxed">
              PT. Penta Digital Nusantara.<br />
              Membawa solusi IoT terbaik untuk mengatasi berbagai permasalahan di era digital.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#produk" className="hover:text-primary transition-colors">Produk</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Legalitas</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Akta Pendirian: 04; 2 MARET 2020</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> NIB: 0220103330143</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> NPWP: 95.560.059.1-422.00</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-center text-white/40 text-sm">
          &copy; 2026 PT. Penta Digital Nusantara (Pentarium). All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
