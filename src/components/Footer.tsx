import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#D4AF37]/30 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand Info (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="flex flex-col">
              <span className="font-serif-title font-extrabold text-2xl tracking-wider text-white">
                RAVITEJA <span className="text-[#D4AF37] font-sans text-lg font-bold">BIKE POINT</span>
              </span>
              <span className="text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase">
                MALLULA SATYANARAYANA • ESTD 1992
              </span>
            </a>

            <p className="text-xs text-gray-300 max-w-sm leading-relaxed font-sans">
              Amalapuram’s premier two-wheeler repair and service center. Delivering master engine Dekoking, oil swaps, brake bleeding, and general maintenance for 26+ years.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <img src="./images/ganesha.png" alt="Ganesha" className="w-4 h-4 object-contain" />
              <span className="text-[11px] font-serif-title text-[#F5D77A] font-bold tracking-widest uppercase">
                SRI GANESHAIAH NAMAHA
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Cols 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About History</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services Catalog</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Workshop Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (Cols 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
              CONTACT INFORMATION
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Call/WhatsApp: <strong className="text-white">9849020133</strong></span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>High School Road, Back Side of Victory Bazar, Amalapuram Rural, Amalapuram – 533201</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Mon – Sun: 10:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© Raviteja Bike Point. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with precision for Mallula Satyanarayana</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
