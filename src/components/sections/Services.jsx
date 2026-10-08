import React from 'react';
import { Smartphone, Satellite, Server, HardDrive, Monitor, Cpu } from 'lucide-react';

export default function Services() {
  return (
    <section id="layanan" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-extrabold tracking-widest text-sm uppercase mb-3">Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-black text-secondary mb-6">Layanan Perusahaan</h2>
          <p className="text-slate-600 text-lg">We provide cost effective and reliable solutions to all digital needs.</p>
        </div>

        <div className="space-y-12">
          {/* Software Development */}
          <div className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary">Software Development</h3>
                <p className="text-slate-600">Develop Mobile Apps & Web Application</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
              <h4 className="font-bold text-lg mb-3">Our Finished Mobile Apps Projects:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</span>
                  <span><strong>LapakPOS</strong> is a mobile application to record transactions at store.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
                  <span><strong>Antares</strong> is a mobile application that collaborate with IoT platform.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</span>
                  <span><strong>PentaQue</strong> is a mobile application for queuing system.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">4</span>
                  <span><strong>Emergency Button</strong> is a mobile application to report emergency case that cooperate with hospital around the user.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IoT Solution */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Satellite className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">IoT Solution</h3>
              <h4 className="font-semibold text-primary mb-2">LoRaWAN Connectivity Integration</h4>
              <p className="text-slate-600 text-sm mb-4">We provide tools that could connected to BTS LoRaWan which owned by PT. Telekomunikasi Indonesia. The BTS connections are covering Java Island, Sumatra and Bali.</p>
            </div>

            {/* EMQX */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Server className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Authorization Reseller EMQX</h3>
              <h4 className="font-semibold text-primary mb-2">(MQTT Broker)</h4>
              <p className="text-slate-600 text-sm mb-4">We are legal agent of EMQX MQTT in Indonesia.</p>
              <p className="text-xs text-slate-400 font-semibold mt-auto pt-4 border-t border-slate-100">Client & Partner: Telkom Indonesia, Antares</p>
            </div>

            {/* Asset Management */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <HardDrive className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Asset Management System</h3>
              <h4 className="font-semibold text-primary mb-2">Digital Maintenance System</h4>
              <p className="text-slate-600 text-sm mb-4">We provide tools that could Maintenance Asset, Tracking Asset using RFID.</p>
              <p className="text-xs text-slate-400 font-semibold mt-auto pt-4 border-t border-slate-100">Client & Partner: Telkom Indonesia, Pertamina Drilling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
