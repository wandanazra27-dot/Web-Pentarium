import React from 'react';
import { Eye, Target, Activity, Smartphone, Cpu, PenTool } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary-dark font-bold text-xs uppercase tracking-wider mb-4 border border-primary/20">
              02. About Pentarium
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-secondary mb-6 leading-tight">Tentang Pentarium</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Formed specifically for IoT solution in Indonesia. PT. PENTARIUM DIGITAL NUSANTARA have skills and resources to be able to provide you solution for your digital problems. With our in-house expertise backed up by our strong principals, we are capable to deliver the solution to your problems in Information Technology, no matter how complex it is. We can assume responsibility all the way from design, software development, hardware, maintenance and most important is IoT solution.
              <br/><br/>
              We make our business to provide our customers with cost effective and reliable solutions to all their digital needs. Our commitment to performance excellence and un-matched customer services is what allows us to keep our valuable customers, and is what make us different from our peers.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Our Vision</h3>
                  <p className="text-slate-600">Become an Information and Technology company who can compete in global world nowadays, and become a company who can contribute to our society in IT field.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Our Mission</h3>
                  <ul className="list-disc pl-5 text-slate-600 space-y-1">
                    <li>Put forward our professionalism, individual skills, and teamwork to produce the best product.</li>
                    <li>Give best solution to our partner to handle any problems in IT sector.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-secondary to-[#01023a] rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl lg:text-3xl font-black mb-8 relative z-10">Our Divisions</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-center gap-4 text-lg font-semibold">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary"><Activity className="w-5 h-5" /></div>
                1. IoT (Internet of Things)
              </li>
              <li className="flex items-center gap-4 text-lg font-semibold">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary"><Smartphone className="w-5 h-5" /></div>
                2. Software
              </li>
              <li className="flex items-center gap-4 text-lg font-semibold">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary"><Cpu className="w-5 h-5" /></div>
                3. Hardware
              </li>
              <li className="flex items-center gap-4 text-lg font-semibold">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary"><PenTool className="w-5 h-5" /></div>
                4. Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
