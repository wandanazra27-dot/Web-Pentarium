import React from 'react';
import { Users2, Shield } from 'lucide-react';

export default function Team() {
  const team = [
    { role: "CEO", name: "Toni Prabowo", title: "Chief Executive Officer" },
    { role: "CTO", name: "Waluya Juang", title: "Chief Technology Officer" },
    { role: "CFO", name: "Husnul Khotimah", title: "Chief Financial Officer" },
    { role: "COO", name: "Agus Budiantoro", title: "Chief Operational Officer" },
    { role: "CMO", name: "Hanief Fatchuddin", title: "Chief Marketing Officer" },
  ];

  return (
    <section id="tim" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary-dark font-bold text-xs uppercase tracking-wider mb-4 border border-primary/20">
            <Users2 className="w-3.5 h-3.5" />
            03. Management Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-secondary mb-4">
            Meet Our Team
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Struktur kepemimpinan eksekutif PT. Penta Digital Nusantara yang berdedikasi menghadirkan inovasi dan keunggulan teknologi digital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white p-7 rounded-3xl text-center border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-dark font-black text-xs tracking-wider uppercase mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {member.role}
                </span>

                <div className="w-20 h-20 mx-auto bg-linear-to-br from-primary to-primary-dark rounded-2xl mb-5 flex items-center justify-center text-white font-black text-2xl shadow-md group-hover:scale-105 transition-transform duration-300">
                  {member.name.charAt(0)}
                </div>

                <h3 className="font-bold text-lg text-secondary mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-500 font-medium text-xs leading-relaxed">
                  {member.title}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                <Shield className="w-3 h-3 text-primary" />
                <span>Executive Board</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
