import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Clock, HeartHandshake, Star } from 'lucide-react';
import { LogoCard } from './LogoCard';

export const ExperienceTimeline: React.FC = () => {
  const milestones = [
    {
      year: '1992',
      title: 'Foundation of Trust',
      desc: 'Mallula Satyanarayana established Raviteja Bike Point in Amalapuram with a single workbench and an uncompromising commitment to honest repair.'
    },
    {
      year: '2005',
      title: 'Infrastructure Upgrade',
      desc: 'Expanded the workshop facility with hydraulic lifts, automated oil change systems, and specialized engine overhauling tools.'
    },
    {
      year: '2016',
      title: 'Advanced Diagnostics',
      desc: 'Introduced computer-aided electrical diagnostics and multi-brand engine tuning for modern fuel-injected bikes & sports motorbikes.'
    },
    {
      year: '2026',
      title: '26+ Years of Excellence',
      desc: 'Over 10,000+ bikes serviced with a 98% customer approval rating. Amalapuram’s most recommended two-wheeler care center.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0203]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold mb-4">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold">
              OUR HERITAGE & LEGACY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Craftsmanship Refined Across <span className="text-gradient-gold">26+ Years</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            From humble beginnings in 1992 to becoming Amalapuram’s gold standard garage, our dedication to every rider's safety has never wavered.
          </p>
        </div>

        {/* Storytelling & Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Logo Card Component */}
          <div className="lg:col-span-5">
            <LogoCard />
          </div>

          {/* Story & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-8 rounded-3xl space-y-6 border border-gray-800">
              <h3 className="text-2xl font-bold font-outfit text-white">
                "We started Raviteja Bike Point in 1992 with one simple mission..."
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                To provide honest, affordable, and reliable motorcycle servicing. Over the last 26+ years, we have earned the trust of riders throughout Amalapuram through transparent pricing, genuine spare parts, and customer-first service.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/60 border border-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">100% Genuine OEM Spare Parts</h4>
                    <p className="text-xs text-gray-400">Direct Hero, Honda, TVS replacements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/60 border border-gray-800">
                  <HeartHandshake className="w-5 h-5 text-[#B31217] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Transparent Repair Billing</h4>
                    <p className="text-xs text-gray-400">No hidden costs or unnecessary swaps.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/60 border border-gray-800">
                  <Award className="w-5 h-5 text-[#F5C542] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Certified Master Technicians</h4>
                    <p className="text-xs text-gray-400">26+ years of multi-brand mastery.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/60 border border-gray-800">
                  <Star className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Rapid Same-Day Service</h4>
                    <p className="text-xs text-gray-400">Fast turn-around for daily commuters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Path */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#8B0000] to-[#D4AF37] hidden md:block"></div>

          <div className="space-y-12 relative z-10">
            {milestones.map((item, idx) => (
              <div key={item.year} className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="w-full md:w-1/2 text-left md:text-right">
                  <div className={`glass-card p-6 rounded-2xl border border-gray-800 glass-card-hover inline-block w-full ${
                    idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <span className="text-2xl font-black font-mono text-[#D4AF37] mb-2 inline-block">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold font-outfit text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>

                {/* Timeline Center Node */}
                <div className="w-12 h-12 rounded-full bg-[#0A0203] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/40 z-10 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[#8B0000]"></div>
                </div>

                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
