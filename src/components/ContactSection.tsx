import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bikeModel: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitted(true);

    const text = `Hi Mallula Satyanarayana garu,%0A%0AI have an inquiry for Raviteja Bike Point:%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Bike: ${formData.bikeModel || 'General'}%0A- Message: ${formData.message || 'General Service inquiry'}`;
    window.open(`https://wa.me/919849020133?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070102]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold mb-4">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold">
              AMALAPURAM LOCATION & CONTACT HUB
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Visit Our Garage in <span className="text-gradient-gold">Amalapuram</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Located conveniently on High School Road, right behind Victory Bazar. Drop in anytime between 10:00 AM – 10:00 PM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Info & Form Panel */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:9849020133"
                className="glass-card p-5 rounded-2xl border border-gray-800 glass-card-hover block"
              >
                <Phone className="w-6 h-6 text-[#D4AF37] mb-2" />
                <span className="text-[10px] text-gray-400 font-mono uppercase block">CALL OWNER DIRECTLY</span>
                <span className="font-outfit font-extrabold text-base text-white">9849020133</span>
                <p className="text-[11px] text-gray-400 mt-1">Mallula Satyanarayana</p>
              </a>

              <div className="glass-card p-5 rounded-2xl border border-gray-800">
                <Clock className="w-6 h-6 text-emerald-400 mb-2" />
                <span className="text-[10px] text-gray-400 font-mono uppercase block">WORKING HOURS</span>
                <span className="font-outfit font-bold text-sm text-emerald-400">10:00 AM - 10:00 PM</span>
                <p className="text-[11px] text-gray-400 mt-1">Open All 7 Days (Mon - Sun)</p>
              </div>
            </div>

            {/* Address Details Card */}
            <div className="glass-card p-6 rounded-3xl border border-[#D4AF37]/30 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h3 className="font-outfit font-bold text-base text-white">GARAGE ADDRESS</h3>
                  <p className="text-gray-300 text-xs leading-relaxed mt-1">
                    Raviteja Bike Point, High School Road,<br />
                    Back Side of Victory Bazar, Amalapuram Rural,<br />
                    Amalapuram, Andhra Pradesh – 533201
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=High+School+Road+Amalapuram+Victory+Bazar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn-gold px-4 py-2.5 rounded-xl font-bold text-xs text-black flex items-center gap-1.5"
                >
                  <Navigation className="w-4 h-4 text-black" />
                  <span>GET SATELLITE DIRECTIONS</span>
                </a>

                <a
                  href="https://wa.me/919849020133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-4 py-2.5 rounded-xl font-bold text-xs text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP CHAT</span>
                </a>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="glass-card p-6 rounded-3xl border border-gray-800">
              <h3 className="font-outfit font-bold text-base text-white mb-4">Send Direct Message to Owner</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Phone *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Bike Model (e.g. Hero Splendor)"
                    value={formData.bikeModel}
                    onChange={(e) => setFormData({ ...formData, bikeModel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                  />

                  <textarea
                    rows={2}
                    placeholder="Describe problem or required service..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                  />

                  <button
                    type="submit"
                    className="w-full glow-btn-gold py-3 rounded-xl font-bold text-xs text-black flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>Send Message & Open WhatsApp</span>
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 mx-auto" />
                  <p className="font-bold text-sm">Message Prepared!</p>
                  <p className="text-xs text-gray-300">WhatsApp opened to connect with Mallula Satyanarayana.</p>
                </div>
              )}
            </div>

          </div>

          {/* Satellite Map Embed Container */}
          <div className="lg:col-span-6 glass-card p-3 rounded-3xl border border-[#D4AF37]/40 min-h-[450px] relative overflow-hidden flex flex-col">
            <div className="px-4 py-2 flex items-center justify-between text-xs font-mono text-gray-300 border-b border-gray-800">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE SATELLITE MAP VIEW
              </span>
              <a
                href="https://maps.google.com/?q=High+School+Road+Amalapuram+Victory+Bazar&t=k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline flex items-center gap-1"
              >
                Full Satellite Map <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Satellite Map Iframe (t=k param forces Satellite view) */}
            <div className="flex-1 w-full h-full min-h-[400px] rounded-2xl overflow-hidden mt-2 border border-gray-800 relative">
              <iframe
                title="Raviteja Bike Point Amalapuram Satellite Location Map"
                src="https://maps.google.com/maps?q=High+School+Road,+Back+Side+of+Victory+Bazar,+Amalapuram+Rural,+Amalapuram+-+533201&t=k&z=18&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl grayscale-[20%] contrast-125"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
