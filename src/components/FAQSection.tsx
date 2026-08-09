import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you use original factory spare parts?',
      a: 'Yes, 100%. We source genuine OEM parts directly from authorized distributors for Hero, Honda, TVS, Royal Enfield, Yamaha, Suzuki, and Bajaj. Every replaced component comes with brand packaging verification.'
    },
    {
      q: 'How long does a general bike service take?',
      a: 'A standard 30-point general service with oil change and tuning usually takes 2 to 3 hours. If you drop off your bike in the morning (10 AM), it will be ready for pickup by afternoon.'
    },
    {
      q: 'Who will service my motorcycle?',
      a: 'Your motorcycle is directly inspected and serviced under the personal supervision of Mallula Satyanarayana, who brings 26+ years of master mechanical experience since 1992.'
    },
    {
      q: 'Do you offer engine overhaul & heavy repair work?',
      a: 'Yes. We specialize in complete engine rebuilds, cylinder boring, crank balancing, valve grinding, clutch disc replacement, and gearbox repairs for both scooters and premium motorcycles.'
    },
    {
      q: 'What are your working hours and location in Amalapuram?',
      a: 'We are open Monday to Sunday from 10:00 AM to 10:00 PM. Our garage is located on High School Road, right behind Victory Bazar and near Boys High School Center in Amalapuram.'
    },
    {
      q: 'What payment options do you accept?',
      a: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), and direct bank transfers for your convenience.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050816] border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-glow mb-4">
            <HelpCircle className="w-4 h-4 text-[#22D3EE]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#22D3EE]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Everything you need to know about our bike servicing, pricing transparency, and garage standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-outfit font-bold text-base sm:text-lg text-white hover:text-[#0EA5E9] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#0EA5E9] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#F97316]' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-300 text-sm leading-relaxed border-t border-gray-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
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
