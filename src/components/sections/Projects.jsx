import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Internet Of Things Training",
      date: "September 2020 – December 2023",
      desc: "Partnering with DiLo (Digital Lounge PT. Telkom) provide tools and knowledge to support Internet of things training."
    },
    {
      title: "Project Smartvillage Nusantara in 5 villages",
      date: "July 2020 – December 2020",
      desc: "Partnering with PT. Daya Mitra Telekomunikasi to provide tools that has capability to monitoring disaster through censor and IP Camera that installed on strategic place."
    },
    {
      title: "Project Digitalization Water Processing at PDAM Bandung",
      date: "February 2021 – May 2021",
      desc: "Partnering with PT. TELKOM to provide monitoring water quality tools with PDAM Kota Bandung."
    },
    {
      title: "Project Procurement EMQX License",
      date: "April 2021 – May 2021",
      desc: "Partnering with PT. TELKOM to provide EMQX Software license."
    }
  ];

  return (
    <section id="proyek" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-extrabold tracking-widest text-sm uppercase mb-3">Other Project</p>
          <h2 className="text-3xl lg:text-4xl font-black text-secondary">Proyek Lainnya</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-secondary mb-2">{proj.title}</h3>
              <p className="text-sm font-semibold text-primary mb-4 bg-primary/10 inline-block px-3 py-1 rounded-full">{proj.date}</p>
              <p className="text-slate-600">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
