import React from 'react';

export default function Team() {
  const team = [
    { name: "Toni Prabowo", title: "Chief Executive Officer (CEO)" },
    { name: "Waluya Juang", title: "Chief Technology Officer (CTO)" },
    { name: "Husnul Khotimah", title: "Chief Financial Officer (CFO)" },
    { name: "Agus Budiantoro", title: "Chief Operational Officer (COO)" },
    { name: "Hanief Fatchuddin", title: "Chief Marketing Officer (CMO)" },
  ];

  return (
    <section id="tim" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-extrabold tracking-widest text-sm uppercase mb-3">Meet Our Team</p>
          <h2 className="text-3xl lg:text-4xl font-black text-secondary">Manajemen Pentarium</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-slate-50 w-full md:w-64 p-8 rounded-3xl text-center border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-full mb-4 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-bold text-xl text-secondary mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
