import React from 'react';

interface LogoCardProps {
  className?: string;
}

export const LogoCard: React.FC<LogoCardProps> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl border-2 border-[#D4AF37]/70 shadow-2xl bg-[#120104] transition-all duration-500 w-full max-w-5xl mx-auto ${className}`}>
      
      {/* 16:9 Aspect Ratio Official Logo Banner (Zero Zoom Button) */}
      <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-[#100002] overflow-hidden">
        <img
          src="/images/logo_official.jpg"
          alt="Raviteja Bike Point Official Logo - Mallula Satyanarayana"
          className="w-full h-full object-contain rounded-2xl block"
        />
      </div>

    </div>
  );
};
