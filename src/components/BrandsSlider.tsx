import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const BrandsSlider: React.FC = () => {
  const brands = [
    { name: 'HERO', tag: 'Splendor, Passion, Xpulse' },
    { name: 'HONDA', tag: 'Activa, Shine, Unicorn' },
    { name: 'TVS', tag: 'Apache, Jupiter, Ntorq' },
    { name: 'YAMAHA', tag: 'R15, FZ, MT-15, RayZR' },
    { name: 'SUZUKI', tag: 'Access, Gixxer, Burgman' },
    { name: 'ROYAL ENFIELD', tag: 'Classic 350, Hunter, Himalayan' },
    { name: 'BAJAJ', tag: 'Pulsar, Dominar, Avenger' },
    { name: 'KTM', tag: 'Duke 200/390, RC' },
    { name: 'JAWA', tag: '42, Perak, Classic' },
    { name: 'YEZDI', tag: 'Scrambler, Roadster, Adventure' }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-[#050816] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs uppercase font-mono tracking-widest text-gray-400 font-bold flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0EA5E9]" />
          SPECIALIZED SERVICE FOR ALL MAJOR TWO-WHEELER BRANDS
        </span>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full overflow-hidden flex">
        <div className="flex gap-6 animate-marquee whitespace-nowrap py-2">
          {[...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover px-8 py-5 rounded-2xl border border-gray-800 flex flex-col items-center justify-center shrink-0 min-w-[200px]"
            >
              <span className="font-outfit font-black text-xl text-white tracking-wider group-hover:text-[#0EA5E9]">
                {brand.name}
              </span>
              <span className="text-[10px] text-gray-400 font-mono mt-1">{brand.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
