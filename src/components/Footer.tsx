import React from 'react';
import { Phone, MapPin, Clock, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060102] border-t border-[#D4AF37]/20 text-gray-400 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif-title font-extrabold text-xl text-white tracking-wide">
                RAVITEJA <span className="text-[#D4AF37] font-sans font-bold">BIKE POINT</span>
              </span>
              <p className="text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase mt-0.5">
                MALLULA SATYANARAYANA • AMALAPURAM
              </p>
            </div>

            <p className="text-xs leading-relaxed text-gray-400">
              Amalapuram’s trusted two-wheeler repair & service center owned by <strong className="text-white">Mallula Satyanarayana</strong>. 
              Specializing in Hero Splendor, Hero Glamour, Honda Shine, Activa, and all bikes.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full badge-gold text-[11px] font-mono">
                <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" /> 100% Genuine OEM Spares
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-outfit font-bold text-sm text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#bikes" className="hover:text-[#D4AF37] transition-colors">Hero Splendor & Glamour</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Service Catalog</a></li>
              <li><a href="#estimator" className="hover:text-[#D4AF37] transition-colors">Bill Estimator</a></li>
              <li><a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Work Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Garage</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-outfit font-bold text-sm text-white uppercase tracking-wider">Contact & Hours</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>High School Road, Back Side of Victory Bazar, Amalapuram Rural - 533201</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F5C542] shrink-0" />
                <a href="tel:9849020133" className="text-white hover:text-[#D4AF37] font-mono font-bold text-sm">
                  9849020133
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon – Sun: 10:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {new Date().getFullYear()} Raviteja Bike Point. All rights reserved.</p>
          <p className="flex items-center gap-1 text-gray-500">
            Mallula Satyanarayana • Amalapuram <Heart className="w-3 h-3 text-[#8B0000] fill-[#8B0000]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
