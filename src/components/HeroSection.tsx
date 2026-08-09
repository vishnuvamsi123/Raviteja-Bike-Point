import React from 'react';
import { Calendar, Phone, User, MapPin, Clock, ArrowRight, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onRequestMobilePush: () => void;
  hasNotificationPermission: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-12 overflow-hidden bg-[#0A0102] text-white selection:bg-[#D4AF37] selection:text-black"
    >
      
      {/* 1. Deep Crimson & Gold Silk Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Radial Crimson Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[900px] h-[300px] sm:h-[500px] md:h-[700px] bg-radial from-[#660004]/40 via-[#2B0002]/20 to-transparent rounded-full blur-3xl"></div>
        {/* Gold Light Ray Accents */}
        <div className="absolute top-0 left-1/4 w-48 sm:w-80 md:w-[400px] h-48 sm:h-80 md:h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 md:w-[400px] h-48 sm:h-80 md:h-[400px] bg-[#8B0000]/15 rounded-full blur-3xl"></div>
        {/* Golden Filigree Corner Motifs */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[#D4AF37]/30 opacity-60"></div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-[#D4AF37]/30 opacity-60"></div>
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-[#D4AF37]/30 opacity-60"></div>
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[#D4AF37]/30 opacity-60"></div>
      </div>

      {/* 2. Main Center Hero Content Stack */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center max-w-6xl mx-auto w-full py-4 sm:py-8">
        
        {/* Decorative Gold Top Crown Divider */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45 bg-[#D4AF37]"></div>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
        </div>

        {/* Brand Name: RAVITEJA (Fluid responsive sizes across 320px mobile to 4K desktop) */}
        <h1 className="font-serif-title font-extrabold text-[2.2rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.1em] sm:tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F5EAD4] to-[#D4AF37] drop-shadow-2xl mb-2 leading-none max-w-full break-words">
          RAVITEJA
        </h1>

        {/* Subtitle: BIKE POINT */}
        <div className="flex items-center justify-center gap-2 sm:gap-6 my-2 sm:my-4 w-full max-w-xl px-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-[#D4AF37]"></div>
          <span className="font-outfit font-extrabold text-sm xs:text-base sm:text-2xl md:text-3xl text-[#F3C649] tracking-[0.2em] sm:tracking-[0.35em] uppercase whitespace-nowrap">
            BIKE POINT
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/80 to-[#D4AF37]"></div>
        </div>

        {/* Mechanical Detail Ornament */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 my-2 sm:my-4 text-[#D4AF37] text-[10px] sm:text-xs font-mono tracking-widest uppercase flex-wrap px-2">
          <span className="h-[1px] w-6 sm:w-10 bg-[#D4AF37]/40 hidden xs:inline-block"></span>
          <span>⚙️ MOTORCYCLE REPAIR & SERVICE ⚙️</span>
          <span className="h-[1px] w-6 sm:w-10 bg-[#D4AF37]/40 hidden xs:inline-block"></span>
        </div>

        {/* Hero CTA Buttons (Fluid layout on Mobile / Tablet / Desktop) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4">
          {/* BOOK A SERVICE */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto glow-btn-gold px-6 sm:px-8 py-3.5 rounded-xl font-outfit font-extrabold text-xs uppercase tracking-widest text-black flex items-center justify-center gap-2.5 shadow-xl transition-transform hover:scale-105"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>BOOK A SERVICE</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          {/* CALL NOW */}
          <a
            href="tel:9849020133"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl font-outfit font-extrabold text-xs uppercase tracking-widest text-white border border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center gap-2.5 transition-all"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>CALL NOW</span>
          </a>

          {/* WHATSAPP DIRECT */}
          <a
            href="https://wa.me/919849020133?text=Hi%20Mallula%20Satyanarayana%20garu,%20I%20want%20to%20book%20a%20service%20for%20my%20bike%20at%20Raviteja%20Bike%20Point."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto glow-btn-red px-6 sm:px-7 py-3.5 rounded-xl font-outfit font-bold text-xs uppercase tracking-widest text-white flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP</span>
          </a>
        </div>

      </div>

      {/* 3. Bottom Horizontal Information Bar (Responsive grid for mobile, tablet, and desktop) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-4 sm:mt-6">
        <div className="glass-card rounded-2xl border border-[#D4AF37]/40 bg-[#0F0204]/90 p-3 sm:p-5 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#D4AF37]/30 text-left">
            
            {/* Section 1: Owner */}
            <div className="flex items-center gap-3 px-2 sm:px-3 pt-2 sm:pt-0 lg:py-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] bg-black/50 shrink-0">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="font-outfit font-extrabold text-xs text-white uppercase tracking-wider block">
                  MALLULA SATYANARAYANA
                </span>
                <span className="text-[10px] text-[#F3C649] font-mono tracking-widest uppercase">
                  OWNER
                </span>
              </div>
            </div>

            {/* Section 2: Contact */}
            <div className="flex items-center gap-3 px-2 sm:px-3 pt-2 sm:pt-0 lg:py-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] bg-black/50 shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <a href="tel:9849020133" className="font-outfit font-extrabold text-xs sm:text-sm text-white hover:text-[#D4AF37] font-mono block">
                  9849020133
                </a>
                <span className="text-[10px] text-[#F3C649] font-mono tracking-widest uppercase">
                  CONTACT NO
                </span>
              </div>
            </div>

            {/* Section 3: Address */}
            <div className="flex items-center gap-3 px-2 sm:px-3 pt-2 sm:pt-0 lg:py-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] bg-black/50 shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="font-outfit font-bold text-xs text-white leading-tight block">
                  HIGH SCHOOL ROAD, VICTORY BAZAR
                </span>
                <span className="text-[10px] text-gray-300 font-mono block">
                  AMALAPURAM – 533201
                </span>
              </div>
            </div>

            {/* Section 4: Operating Hours */}
            <div className="flex items-center gap-3 px-2 sm:px-3 pt-2 sm:pt-0 lg:py-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-emerald-400 bg-black/50 shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="font-outfit font-extrabold text-xs text-white uppercase tracking-wider block">
                  MONDAY – SUNDAY
                </span>
                <span className="text-[10px] text-emerald-400 font-mono font-bold block">
                  10:00 AM – 10:00 PM
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
