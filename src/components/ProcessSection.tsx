import React from 'react';
import { Calendar, Search, Stethoscope, Wrench, ShieldCheck, Key, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Book Appointment',
      desc: 'Reserve your service slot online or via call. Choose pickup or walk-in time.',
      icon: Calendar,
      color: 'from-[#0EA5E9] to-[#22D3EE]'
    },
    {
      number: '02',
      title: 'Digital Inspection',
      desc: 'Our master mechanic conducts a thorough 30-point checkup of your bike.',
      icon: Search,
      color: 'from-[#22D3EE] to-blue-500'
    },
    {
      number: '03',
      title: 'Transparent Diagnosis',
      desc: 'We share exact issue reports and estimated component costs before starting work.',
      icon: Stethoscope,
      color: 'from-amber-400 to-[#F97316]'
    },
    {
      number: '04',
      title: 'Precision Repair',
      desc: 'Expert servicing using OEM original spare parts and high-torque calibrated tools.',
      icon: Wrench,
      color: 'from-[#F97316] to-red-500'
    },
    {
      number: '05',
      title: 'Quality Check & Wash',
      desc: 'Road testing, brake verification, and high-pressure ceramic foam wash polishing.',
      icon: ShieldCheck,
      color: 'from-emerald-400 to-[#0EA5E9]'
    },
    {
      number: '06',
      title: 'Happy Delivery',
      desc: 'Collect your smooth-running bike with digital invoice and service warranty.',
      icon: Key,
      color: 'from-violet-400 to-[#22D3EE]'
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow mb-4">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#F97316]">
              TRANSPARENT WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Our 6-Step <span className="text-gradient">Luxury Service Process</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Every step is designed for maximum clarity, speed, and zero compromise on riding safety.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group glass-card glass-card-hover p-8 rounded-3xl border border-gray-800 relative flex flex-col justify-between"
              >
                {/* Step Index Watermark */}
                <div className="absolute top-4 right-6 font-outfit font-black text-5xl text-gray-800/40 group-hover:text-[#0EA5E9]/20 transition-colors pointer-events-none">
                  {step.number}
                </div>

                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-[#050816] rounded-[14px] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-outfit text-white mb-2 group-hover:text-[#22D3EE] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-[#050816] border border-gray-700 flex items-center justify-center text-gray-500">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
