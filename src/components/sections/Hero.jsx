import React from 'react';
import { Satellite } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-bold text-sm mb-6 border border-primary/20">
              <Satellite className="w-4 h-4" /> PT. Penta Digital Nusantara
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              Your <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dark">IoT</span> Solution
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Kami hadir untuk memberikan solusi atas permasalahan teknologi informasi Anda, dari desain, pengembangan perangkat lunak, perangkat keras, hingga solusi IoT terlengkap di Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#produk" className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Lihat Produk
              </a>
              <a href="#tentang" className="bg-white hover:bg-slate-50 text-secondary border border-slate-200 px-8 py-3.5 rounded-full font-bold transition-all shadow-sm hover:shadow hover:-translate-y-1">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="IoT Technology" className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-100 lg:h-125" />
          </div>
        </div>
      </div>
    </section>
  );
}
