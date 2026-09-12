import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageSquare, ShieldCheck, User } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-[#0D0204] border-b border-[#D4AF37]/20 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8B0000]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT OR CALL OUR WORKSHOP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-black text-white uppercase tracking-tight">
            LOCATION & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#B8860B]">CONTACT HUB</span>
          </h2>

          <p className="text-base text-gray-300 font-sans leading-relaxed">
            Conveniently located near Victory Bazar and Boys High School Center in Amalapuram Rural. Walk in or call for immediate bike service assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business & Address Info (Cols 1-5) */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-[#D4AF37]/40 space-y-6 flex flex-col justify-between bg-gradient-to-b from-[#1A0307] via-[#0D0204] to-[#1A0307]">
            
            <div className="space-y-6">
              
              {/* Header Badge */}
              <div className="border-b border-gray-800 pb-4">
                <h3 className="text-2xl font-serif-title font-bold text-white">
                  RAVITEJA BIKE POINT
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-[#D4AF37] font-mono uppercase font-bold">
                  <User className="w-3.5 h-3.5" />
                  <span>MALLULA SATYANARAYANA — OWNER</span>
                </div>
              </div>

              {/* Phone & WhatsApp Contact */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">DIRECT PHONE & WHATSAPP</span>
                <a 
                  href="tel:9849020133" 
                  className="flex items-center gap-3 p-3.5 rounded-xl glass-card border border-[#D4AF37]/30 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all group"
                >
                  <div className="p-2 rounded-lg bg-[#8B0000] text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold font-outfit">9849020133</div>
                    <div className="text-[11px] text-gray-400">Click to call Mallula Satyanarayana garu</div>
                  </div>
                </a>
              </div>

              {/* Physical Workshop Address */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">WORKSHOP ADDRESS</span>
                <div className="flex items-start gap-3 p-3.5 rounded-xl glass-card border border-gray-800">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div className="text-xs text-gray-300 space-y-1 font-sans leading-relaxed">
                    <p className="font-semibold text-white">High School Road, Back Side of Victory Bazar</p>
                    <p>Amalapuram Rural, Amalapuram – 533201</p>
                    <p className="text-[#F5D77A] font-mono text-[11px]">Landmark: Near Victory Bazar / Boys High School Center</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">WORKING HOURS</span>
                <div className="flex items-center gap-3 p-3.5 rounded-xl glass-card border border-gray-800">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-white">Monday – Sunday (7 Days Open)</p>
                    <p className="text-gray-300 font-mono">10:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-800">
              <a
                href="tel:9849020133"
                className="glow-btn-gold py-3 px-2 rounded-xl text-center font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-1.5 border border-[#D4AF37]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL NOW</span>
              </a>

              <a
                href="https://wa.me/919849020133?text=Hi%20Mallula%20Satyanarayana%20garu,%20I%20want%20to%20inquire%20about%20bike%20service."
                target="_blank"
                rel="noreferrer"
                className="py-3 px-2 rounded-xl text-center font-bold text-xs uppercase tracking-wider text-emerald-400 border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-900/40 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WHATSAPP</span>
              </a>

              <a
                href="https://maps.google.com/?q=Amalapuram+High+School+Road"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-2 rounded-xl text-center font-bold text-xs uppercase tracking-wider text-gray-200 border border-gray-700 bg-black/60 hover:border-[#D4AF37] flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>MAP</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Satellite View Embed (Cols 6-12) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-card border border-[#D4AF37]/40 relative min-h-[420px] flex flex-col">
            
            <div className="px-6 py-3 bg-[#1A0307] border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono text-[#F5D77A] uppercase font-bold tracking-wider">
                  SATELLITE MAP VIEW • AMALAPURAM RURAL
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">HIGH SCHOOL ROAD</span>
            </div>

            <div className="flex-1 w-full relative">
              <iframe
                title="Raviteja Bike Point Satellite Location Map"
                src="https://maps.google.com/maps?q=High+School+Road,+Back+Side+of+Victory+Bazar,+Amalapuram+Rural,+Amalapuram+533201&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-150 contrast-125"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
