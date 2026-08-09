import React from 'react';
import { Award, Users, CheckCircle2, ShieldCheck, Zap, DollarSign, Cpu, ThumbsUp, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: '26+ Years Experience',
      desc: 'Over two decades of hands-on expertise servicing bikes across Amalapuram since 1992.',
      color: 'text-[#0EA5E9]'
    },
    {
      icon: Users,
      title: 'Certified Master Mechanics',
      desc: 'Trained technicians with deep expertise in multi-brand EFI, carburetors, and gearboxes.',
      color: 'text-[#F97316]'
    },
    {
      icon: DollarSign,
      title: 'Affordable & Honest Pricing',
      desc: 'No hidden charges or padded bills. Itemized quotation before starting any job.',
      color: 'text-emerald-400'
    },
    {
      icon: ShieldCheck,
      title: '100% Original Spare Parts',
      desc: 'Only genuine OEM parts from Hero, Honda, TVS, RE, Yamaha, and Bajaj.',
      color: 'text-[#22D3EE]'
    },
    {
      icon: Zap,
      title: 'Fast Same-Day Turnaround',
      desc: 'Most routine services completed within 2 to 4 hours so you are never left stranded.',
      color: 'text-amber-400'
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction First',
      desc: 'Our long-standing local reputation is built on trust, honesty, and friendly service.',
      color: 'text-pink-400'
    },
    {
      icon: Cpu,
      title: 'Modern Diagnostic Tools',
      desc: 'Advanced electrical continuity scanners, hydraulic lifts, and torque tools.',
      color: 'text-violet-400'
    },
    {
      icon: CheckCircle2,
      title: 'Quality & Service Guarantee',
      desc: 'Free follow-up inspection and 30-day warranty on major repair jobs.',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow mb-4">
            <Sparkles className="w-4 h-4 text-[#0EA5E9]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#0EA5E9]">
              THE RAVITEJA ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Why Riders In Amalapuram <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            We treat every bike like our own. Here is why generations of families continue to bring their two-wheelers to our garage.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-gray-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#0EA5E9]/50 transition-all">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold font-outfit text-white mb-2 group-hover:text-[#0EA5E9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.desc}
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
