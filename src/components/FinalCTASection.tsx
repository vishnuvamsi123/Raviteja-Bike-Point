import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#1A0307] via-[#8B0000] to-[#0D0204] border-b border-[#D4AF37]/30 text-white overflow-hidden">
      
      {/* Subtle Ambient Background Light */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37] rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/40 border border-[#D4AF37]/50 text-[#F5D77A] text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MASTER CRAFTSMANSHIP IN AMALAPURAM</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-title font-black uppercase text-white tracking-tight drop-shadow-lg">
          YOUR BIKE DESERVES <span className="text-[#F5D77A]">THE RIGHT CARE.</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-sans leading-relaxed">
          Professional service. Honest work. 26+ years of experience under master mechanic <strong className="text-white">Mallula Satyanarayana</strong>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="glow-btn-gold px-9 py-4 rounded-2xl font-outfit font-extrabold text-sm uppercase tracking-widest text-black flex items-center gap-3 border-2 border-[#D4AF37] shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5 text-black" />
            <span>BOOK A SERVICE NOW</span>
          </button>

          <a
            href="tel:9849020133"
            className="px-9 py-4 rounded-2xl font-outfit font-extrabold text-sm uppercase tracking-widest text-white border-2 border-white/40 bg-black/60 hover:bg-black flex items-center gap-3 shadow-xl transition-all transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 text-[#D4AF37]" />
            <span>CALL 9849020133</span>
          </a>
        </div>

      </div>
    </section>
  );
};
