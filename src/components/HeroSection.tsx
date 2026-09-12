import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Phone, MessageSquare, ShieldCheck, Award, Wrench, ChevronDown, Sparkles, AlertCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onRequestMobilePush: () => void;
  hasNotificationPermission: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onRequestMobilePush,
  hasNotificationPermission,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBikeHovered, setIsBikeHovered] = useState(false);
  const [has3dImageError, setHas3dImageError] = useState(false);

  // Counter State for Statistics
  const [expCount, setExpCount] = useState(0);
  const [bikesCount, setBikesCount] = useState(0);
  const [commitCount, setCommitCount] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Parallax mouse tracker
    const handleMouseMove = (e: MouseEvent) => {
      try {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 20;
        const y = (e.clientY / innerHeight - 0.5) * 20;
        setMousePos({ x, y });
      } catch (err) {}
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Animated Counters Logic
    let start = 0;
    const duration = 2000;
    const intervalTime = 30;
    const steps = duration / intervalTime;

    const expStep = 26 / steps;
    const bikesStep = 10000 / steps;
    const commitStep = 100 / steps;

    const timer = setInterval(() => {
      start += 1;
      setExpCount((prev) => Math.min(26, Math.floor(prev + expStep)));
      setBikesCount((prev) => Math.min(10000, Math.floor(prev + bikesStep)));
      setCommitCount((prev) => Math.min(100, Math.floor(prev + commitStep)));

      if (start >= steps) {
        setExpCount(26);
        setBikesCount(10000);
        setCommitCount(100);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-gradient-to-b from-[#0D0204] via-[#1A0307] to-[#0D0204] border-b border-[#D4AF37]/20"
    >
      
      {/* Background Studio Lighting & Volumetric Red Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8B0000]/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[160px]"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-950/30 rounded-full blur-[120px]"></div>
        
        {/* Subtle Carbon Fiber Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>
      </div>

      {/* Main 16:9 Aspect Ratio Hero Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10 py-6">
        
        {/* TOP CENTER: Small Elegant Gold Lord Ganesha Emblem Header */}
        <div className="flex flex-col items-center justify-center mb-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-[#1A0307]/80 border border-[#D4AF37]/40 backdrop-blur-md shadow-lg shadow-black/60">
            <img
              src="./images/ganesha.png"
              alt="Lord Ganesha Emblem"
              className="w-5 h-5 object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
              onError={(e) => {
                // Fallback Ganesha icon rendering if file missing
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="font-serif-title text-xs font-bold text-[#F5D77A] tracking-[0.25em] uppercase">
              SRI GANESHAIAH NAMAHA • TRADITION & TRUST SINCE 1992
            </span>
          </div>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SIDE: Brand Title, Taglines, & CTAs (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Brand Title Block */}
            <div className="space-y-1">
              
              {/* Gold Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase bg-[#8B0000]/20 border border-[#D4AF37]/30 px-3.5 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
                <span>26+ YEARS OF EXPERIENCE • ESTD 1992</span>
              </div>

              {/* RAVITEJA */}
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-title font-black tracking-tight text-white uppercase leading-none drop-shadow-2xl">
                RAVITEJA
              </h1>

              {/* BIKE POINT Subtitle */}
              <div className="flex items-center gap-4 pt-1">
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#D4AF37] to-[#8B0000]"></div>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D4AF37] tracking-[0.2em] uppercase font-outfit">
                  BIKE POINT
                </h2>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-[#8B0000] to-transparent"></div>
              </div>
            </div>

            {/* Main Headline & Support Description */}
            <div className="space-y-3 pt-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-100 tracking-wide font-outfit">
                "PRECISION FOR EVERY RIDE."
              </h3>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-sans leading-relaxed">
                Professional two-wheeler service, repair, and precision maintenance in Amalapuram under the master craftsmanship of <strong className="text-white font-semibold">Mallula Satyanarayana — Owner</strong>.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              
              {/* BOOK A SERVICE */}
              <button
                onClick={onOpenBooking}
                className="glow-btn-gold px-8 py-4 rounded-2xl font-outfit font-extrabold text-sm uppercase tracking-widest text-black flex items-center gap-3 border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/20 group transition-all duration-300 transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                <span>BOOK A SERVICE</span>
              </button>

              {/* CALL NOW */}
              <a
                href="tel:9849020133"
                className="px-8 py-4 rounded-2xl font-outfit font-extrabold text-sm uppercase tracking-widest text-white border-2 border-[#D4AF37]/50 bg-[#1A0307]/70 hover:bg-[#8B0000]/40 hover:border-[#D4AF37] flex items-center gap-3 shadow-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md"
              >
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <span>CALL 9849020133</span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919849020133?text=Hi%20Mallula%20Satyanarayana%20garu,%20I%20want%20to%20book%20a%20bike%20service%20at%20Raviteja%20Bike%20Point."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-2xl font-outfit font-bold text-xs uppercase tracking-widest text-emerald-400 border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-900/40 flex items-center gap-2 backdrop-blur-md transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP</span>
              </a>
            </div>

            {/* Quick Guarantee Micro-Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-800/80 max-w-lg">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-[11px] text-gray-300 font-medium">100% Genuine OEM Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-[11px] text-gray-300 font-medium">26+ Yrs Master Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-[11px] text-gray-300 font-medium">Honest & Transparent Price</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive 3D Realistic Modern Motorcycle Render with Graceful Fallback (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Soft Red Studio Ambient Halo behind 3D Bike */}
            <div className="absolute w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#8B0000]/40 via-[#D4AF37]/20 to-transparent rounded-full blur-[90px] pointer-events-none"></div>

            {/* Interactive 3D Render Card */}
            <div 
              onMouseEnter={() => setIsBikeHovered(true)}
              onMouseLeave={() => setIsBikeHovered(false)}
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg) scale(${isBikeHovered ? 1.03 : 1})`,
                transition: isBikeHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
              }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden glass-card border border-[#D4AF37]/40 p-2 group shadow-2xl shadow-black/90 cursor-pointer"
            >
              {/* Studio Render Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-black/90 aspect-[16/10] flex items-center justify-center">
                
                {!has3dImageError ? (
                  /* Generated 3D Motorcycle Image */
                  <img
                    src="./images/hero_3d_motorcycle.jpg"
                    alt="Raviteja Bike Point 3D Realistic Modern Motorcycle Render"
                    onError={() => setHas3dImageError(true)}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  /* Fallback Hero Vector Visual (Triggers automatically if WebGL/3D asset is unavailable) */
                  <div className="w-full h-full bg-gradient-to-b from-[#1A0307] to-black p-8 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-20 h-20 rounded-full bg-[#8B0000]/40 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg shadow-[#8B0000]/50">
                      <Wrench className="w-10 h-10 animate-pulse" />
                    </div>
                    <h4 className="text-xl font-bold font-outfit text-white">
                      RAVITEJA AUTOMOTIVE STUDIO
                    </h4>
                    <p className="text-xs text-gray-300 max-w-xs">
                      Master motorcycle repair, engine tuning & periodic maintenance in Amalapuram since 1992.
                    </p>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest bg-[#8B0000]/30 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                      MALLULA SATYANARAYANA • OWNER
                    </span>
                  </div>
                )}

                {/* Red Rim Lighting Overlay Effect */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-to-t from-red-950/60 via-transparent to-amber-500/10 ${
                    isBikeHovered ? 'opacity-100' : 'opacity-60'
                  }`}
                ></div>

                {/* High-End Automotive Studio Badge */}
                <div className="absolute top-3 left-3 glass-card px-3 py-1 rounded-full border border-[#D4AF37]/40 text-[10px] font-mono text-[#F5D77A] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>3D AUTOMOTIVE STUDIO VISUAL</span>
                </div>

                {/* Interactive Touch / Hover Label */}
                <div className="absolute bottom-3 right-3 glass-card px-3 py-1 rounded-full text-[10px] text-gray-300 font-mono flex items-center gap-1">
                  <span>INTERACTIVE 3D VIEW</span>
                </div>
              </div>

              {/* Ground Shadow & Golden Light Reflection */}
              <div className="w-full h-4 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent blur-md mt-1"></div>
            </div>

          </div>

        </div>

        {/* BOTTOM HERO STATISTICS BAR (26+ YEARS, 10000+ BIKES, 100% COMMITMENT) */}
        <div className="mt-12 pt-6 border-t border-[#D4AF37]/30 grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto text-center">
          
          {/* STAT 1: YEARS */}
          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#B8860B] drop-shadow-md">
              {expCount}+
            </div>
            <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-gray-300 uppercase mt-1">
              YEARS EXPERIENCE
            </p>
          </div>

          {/* STAT 2: BIKES SERVICED */}
          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#B8860B] drop-shadow-md">
              {bikesCount.toLocaleString()}+
            </div>
            <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-gray-300 uppercase mt-1">
              BIKES SERVICED
            </p>
          </div>

          {/* STAT 3: COMMITMENT */}
          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#B8860B] drop-shadow-md">
              {commitCount}%
            </div>
            <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-gray-300 uppercase mt-1">
              SATISFACTION COMMITMENT
            </p>
          </div>

        </div>

      </div>

      {/* Scroll Down Hint */}
      <div className="flex justify-center items-center pt-4">
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-400 hover:text-[#D4AF37] transition-colors gap-1 text-[10px] tracking-widest uppercase font-mono"
        >
          <span>EXPLORE HERITAGE & SERVICES</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </a>
      </div>

    </section>
  );
};
