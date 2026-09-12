import React, { useState } from 'react';
import { Award, UserCheck, ShieldCheck, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTimeline, setActiveTimeline] = useState<number>(0);

  const timelineEvents = [
    {
      year: '1992',
      title: 'Foundation of Raviteja Bike Point',
      description: 'Mallula Satyanarayana established Raviteja Bike Point on High School Road near Boys High School Center, Amalapuram, with a vision for honest craftsmanship.',
      highlight: 'Established with core principles of trust, precision, and customer care.'
    },
    {
      year: '2005',
      title: 'Hydraulic Lifts & Tooling Expansion',
      description: 'Upgraded garage infrastructure with pneumatic tools, precision torque wrenches, and dedicated hydraulic ramps for multi-brand motorcycle servicing.',
      highlight: 'Introduced rapid 45-minute periodic oil & brake maintenance routines.'
    },
    {
      year: '2016',
      title: 'Multi-Brand & Engine Diagnostics Masterclass',
      description: 'Specialized in synthetic oil swaps, clutch tuning, shock absorber rebuilds, and engine overhauls for Hero Splendor, Hero Glamour, Honda Shine, and Activa scooters.',
      highlight: 'Crossed 5,000+ satisfied repeat riders across Amalapuram Rural.'
    },
    {
      year: '2026',
      title: '26+ Years Benchmark & Modern Digital Experience',
      description: 'Celebrates over 26 years of trusted two-wheeler excellence in Amalapuram with 10,000+ serviced bikes, transparent digital estimation, and instant owner notifications.',
      highlight: 'Serving Amalapuram with 100% genuine OEM parts and zero compromise.'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0D0204] border-b border-[#D4AF37]/20 text-white overflow-hidden">
      
      {/* Background Subtle Metallic Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8B0000] rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8B0000]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>HERITAGE & CRAFTSMANSHIP</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-black text-white uppercase tracking-tight">
            26+ YEARS. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#B8860B]">ONE TRUSTED NAME.</span>
          </h2>
          
          <p className="text-base text-gray-300 font-sans leading-relaxed">
            Founded in 1992 by <strong className="text-white">Mallula Satyanarayana — Owner</strong>, Raviteja Bike Point has delivered transparent, high-precision two-wheeler repairs in Amalapuram for over a quarter century.
          </p>
        </div>

        {/* Story Grid & Owner Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Owner Profile Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-[#D4AF37]/40 p-3 shadow-2xl group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#1A0307]">
                
                {/* Background Workshop Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-[#1A0307]/80 to-transparent z-10"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 space-y-3">
                  <div className="inline-block px-3 py-1 rounded-md bg-[#8B0000] text-white text-[11px] font-bold font-mono tracking-widest uppercase w-fit">
                    FOUNDER & OWNER
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-white">
                    Mallula Satyanarayana
                  </h3>
                  
                  <p className="text-xs text-[#F5D77A] font-mono tracking-wider uppercase font-semibold">
                    Master Two-Wheeler Mechanic • 26+ Yrs Experience
                  </p>

                  <div className="pt-2 border-t border-gray-800 text-xs text-gray-300 leading-relaxed font-sans">
                    "Every bike that enters our shop receives the same dedication and engineering care as if it were our own family vehicle."
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Gold Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xl flex items-center gap-4 bg-[#0D0204]">
              <div className="text-4xl font-extrabold text-[#D4AF37] font-outfit">26+</div>
              <div className="text-[11px] text-gray-200 font-mono uppercase font-bold leading-tight">
                Years of Master<br />Service in Amalapuram
              </div>
            </div>
          </div>

          {/* Right Column: Values & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-white">
                Engineered for Peak Performance & Long Life
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Whether you ride a <span className="text-[#D4AF37] font-semibold">Hero Splendor Plus</span>, <span className="text-[#D4AF37] font-semibold">Hero Glamour</span>, <span className="text-[#D4AF37] font-semibold">Honda Shine</span>, or <span className="text-[#D4AF37] font-semibold">Honda Activa 6G / 5G</span>, our workshop uses diagnostic precision to eliminate engine vibrations, restore fuel efficiency, and ensure smooth braking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="glass-card p-4 rounded-xl border border-[#D4AF37]/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">100% Genuine Spare Parts</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Only authentic OEM spares & synthetic lubricants used.</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-[#D4AF37]/20 flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Owner Oversight</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Mallula Satyanarayana inspects every bike personally.</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-[#D4AF37]/20 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Same-Day Delivery</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Quick turnaround for general service & routine oil swaps.</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-[#D4AF37]/20 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Honest Pricing Guarantee</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Clear upfront cost breakdown before any repair begins.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Interactive Timeline Section: 1992 → Today */}
        <div className="pt-12 border-t border-gray-800">
          
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase">
              JOURNEY OF EXCELLENCE
            </span>
            <h3 className="text-2xl font-serif-title font-bold text-white mt-1">
              HERITAGE TIMELINE (1992 → TODAY)
            </h3>
          </div>

          {/* Timeline Buttons Header */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
            {timelineEvents.map((event, idx) => (
              <button
                key={event.year}
                onClick={() => setActiveTimeline(idx)}
                className={`py-3 px-4 rounded-xl border transition-all flex flex-col items-center justify-center font-outfit ${
                  activeTimeline === idx
                    ? 'bg-[#8B0000] border-[#D4AF37] text-white shadow-lg shadow-[#8B0000]/40 scale-105'
                    : 'glass-card border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                <span className="text-xl font-extrabold">{event.year}</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F5D77A]">MILESTONE</span>
              </button>
            ))}
          </div>

          {/* Timeline Event Details Card */}
          <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/40 relative overflow-hidden bg-gradient-to-r from-[#1A0307] via-[#0D0204] to-[#1A0307]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4AF37]">
                  <span>YEAR {timelineEvents[activeTimeline].year}</span>
                  <span>•</span>
                  <span>AMALAPURAM RURAL</span>
                </div>
                
                <h4 className="text-2xl font-bold font-outfit text-white">
                  {timelineEvents[activeTimeline].title}
                </h4>
                
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {timelineEvents[activeTimeline].description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#F5D77A]">
                  <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                  <span>{timelineEvents[activeTimeline].highlight}</span>
                </div>
              </div>

              <div className="shrink-0 p-6 rounded-2xl bg-[#8B0000]/30 border border-[#D4AF37]/40 text-center">
                <span className="text-4xl font-extrabold text-[#D4AF37] font-outfit">
                  {timelineEvents[activeTimeline].year}
                </span>
                <p className="text-[10px] font-mono text-gray-300 uppercase tracking-widest mt-1">
                  HISTORICAL MILESTONE
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
