import React from 'react';
import { Award, ShieldCheck, DollarSign, Wrench, PackageCheck, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: '26+ YEARS EXPERIENCE',
      icon: Award,
      subtitle: 'SINCE 1992 IN AMALAPURAM',
      description: 'Master craftsmanship established by Mallula Satyanarayana, solving complex engine, electrical, and suspension challenges with precision.'
    },
    {
      title: 'EXPERIENCED SERVICE',
      icon: Wrench,
      subtitle: 'MULTI-BRAND MASTERY',
      description: 'Specialized diagnostic servicing for Hero Splendor, Hero Glamour, Honda Shine, Activa 6G/5G, TVS Jupiter, and all Indian motorcycles.'
    },
    {
      title: 'HONEST PRICING',
      icon: DollarSign,
      subtitle: 'TRANSPARENT ESTIMATES',
      description: 'No hidden labor fees or unnecessary part replacements. We provide clear, itemized quotes before starting any work.'
    },
    {
      title: 'RELIABLE WORK',
      icon: ShieldCheck,
      subtitle: 'ROAD-TESTED QUALITY',
      description: 'Every serviced bike undergoes a rigorous 32-point checklist inspection and road testing before being handed back to the owner.'
    },
    {
      title: 'QUALITY PARTS',
      icon: PackageCheck,
      subtitle: '100% GENUINE OEM',
      description: 'We install only authentic manufacturer spare parts, high-grade synthetic lubricants, and heavy-duty seals for long durability.'
    },
    {
      title: 'CUSTOMER TRUST',
      icon: HeartHandshake,
      subtitle: 'GENERATIONAL REPUTATION',
      description: 'Trusted by over 10,000+ motorcycle owners across Amalapuram Rural, built on honesty, prompt delivery, and long-term customer care.'
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-[#0D0204] border-b border-[#D4AF37]/20 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8B0000]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>THE RAVITEJA ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-black text-white uppercase tracking-tight">
            WHY RIDER FAMILIES TRUST <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#B8860B]">RAVITEJA BIKE POINT</span>
          </h2>

          <p className="text-base text-gray-300 font-sans leading-relaxed">
            Combining traditional Indian business ethics with high-performance automotive precision.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 group hover:-translate-y-1.5 shadow-xl bg-gradient-to-b from-[#1A0307]/80 to-[#0D0204]"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#8B0000]/40 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#F5D77A] font-bold uppercase tracking-widest">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-xl font-bold font-outfit text-white group-hover:text-[#D4AF37] transition-colors mt-0.5">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
