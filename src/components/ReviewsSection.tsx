import React from 'react';
import { Star, MessageCircle, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'K. Venkateswara Rao',
      location: 'Amalapuram Rural',
      bike: 'Hero Splendor Plus',
      rating: 5,
      comment: 'Mallula Satyanarayana garu has been servicing my Hero Splendor for over 12 years. Always honest, original oil used, and mileage improved noticeably.',
      date: 'Verified Customer'
    },
    {
      name: 'Suresh Kumar',
      location: 'Boys High School Road',
      bike: 'Hero Glamour',
      rating: 5,
      comment: 'Front shock absorber leak fixed perfectly. Smooth riding with zero vibration now. Extremely reasonable service charges.',
      date: 'Verified Customer'
    },
    {
      name: 'N. Prasad',
      location: 'Victory Bazar Center',
      bike: 'Honda Activa 6G',
      rating: 5,
      comment: 'Variator belt and brake bleeding done in 2 hours. Very clean work and friendly response. Best scooter service point in Amalapuram.',
      date: 'Verified Customer'
    },
    {
      name: 'V. Rambabu',
      location: 'Amalapuram Town',
      bike: 'Honda Shine',
      rating: 5,
      comment: 'Trusted 26+ year workshop. I never go anywhere else. Satyanarayana garu inspects every part personally before handover.',
      date: 'Verified Customer'
    }
  ];

  return (
    <section id="reviews" className="py-24 relative bg-[#0A0102] border-b border-[#D4AF37]/20 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8B0000]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>RIDER FEEDBACK & REPUTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-black text-white uppercase tracking-tight">
            WHAT RIDER FAMILIES SAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#B8860B]">ABOUT RAVITEJA</span>
          </h2>

          <p className="text-base text-gray-300 font-sans leading-relaxed">
            Real customer testimonials from motorcycle owners across Amalapuram.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 relative space-y-4 bg-gradient-to-b from-[#1A0307]/80 to-[#0D0204]"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4AF37]/20 pointer-events-none" />

              <div className="flex items-center gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-sm text-gray-200 leading-relaxed font-sans italic">
                "{rev.comment}"
              </p>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold font-outfit text-white">{rev.name}</h4>
                  <p className="text-xs text-[#F5D77A] font-mono">{rev.bike} • {rev.location}</p>
                </div>
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#8B0000]/40 text-[#D4AF37] border border-[#D4AF37]/30">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
