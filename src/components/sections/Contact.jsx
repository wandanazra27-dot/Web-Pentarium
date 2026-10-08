import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-10 lg:p-16 lg:w-1/2 text-white bg-linear-to-br from-secondary to-[#01023a]">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">Hubungi Kami</h2>
            <p className="text-white/80 text-lg mb-12">Siap untuk mentransformasi bisnis Anda? Mari diskusikan kebutuhan teknologi Anda bersama tim ahli kami.</p>

            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Office</h4>
                  <p className="text-white/70">Manglayang Regency Blok i13 No.5c<br />-6.92062, 107.74152</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-white/70">mail@pentarium.id<br />pentarium.id@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-white/70">0856 2453 6408 (Toni)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-16 lg:w-1/2 bg-white">
            <h3 className="text-2xl font-bold text-secondary mb-8">Kirim Pesan</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Nama Lengkap" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" required />
              </div>
              <div>
                <input type="email" placeholder="Email Anda" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" required />
              </div>
              <div>
                <textarea placeholder="Pesan Anda" rows="4" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Kirim Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
