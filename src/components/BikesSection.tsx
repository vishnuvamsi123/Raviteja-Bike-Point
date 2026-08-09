import React from 'react';
import { Bike, ArrowRight } from 'lucide-react';

interface BikesSectionProps {
  onBookBike: (modelName: string) => void;
}

export const BikesSection: React.FC<BikesSectionProps> = ({ onBookBike }) => {
  const bikeModels = [
    {
      name: 'Hero Splendor Plus',
      category: '100cc Commuter King',
      img: './images/splendor_2018.png',
      popularService: 'General Service, Carburetor Clean, Chain Lube, Brake Pads',
      desc: 'Amalapuram’s most popular daily commuter bike. We specialize in maintaining peak 65+ kmpl mileage, smooth clutch operation, and original APDV engine tuning.'
    },
    {
      name: 'Hero Glamour',
      category: '125cc Executive Commuter',
      img: './images/glamour_2018.png',
      popularService: 'Engine Oil Flush, i3S Sensor Diagnostics, Clutch Plates',
      desc: 'Known for style and power. Our master technicians provide expert valve clearance shimming, fork seal replacement, and genuine Hero OEM spare replacements.'
    },
    {
      name: 'Honda Shine & Activa 6G / 5G',
      category: '125cc Bike & Scooter',
      img: './images/activa_scooter.png',
      popularService: 'Variator Belt Wash, Spark Plug Clean, Hydraulic Brake Bleeding',
      desc: 'Smooth HET engine maintenance, synthetic 10W-30 engine oil swap, and front shock absorber bush replacement for vibration-free riding.'
    }
  ];

  return (
    <section id="bikes" className="py-24 relative overflow-hidden bg-[#0D0204]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold mb-4">
            <Bike className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold">
              POPULAR BIKES WE SERVICE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Specialized Care For <span className="text-gradient-gold">Your Bike</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            From Hero Splendor & Hero Glamour to Honda Shine, Activa, and Royal Enfield—we carry original spare parts for every brand.
          </p>
        </div>

        {/* Bike Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bikeModels.map((bike, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-gray-800 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="h-56 w-full overflow-hidden relative bg-black/40 border-b border-gray-800">
                  <img
                    src={bike.img}
                    alt={bike.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#8B0000] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    {bike.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-outfit text-white">{bike.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{bike.desc}</p>
                  
                  <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800/80 text-xs">
                    <span className="text-[10px] uppercase font-mono text-[#D4AF37] font-bold block mb-1">MOST POPULAR SERVICE:</span>
                    <span className="text-gray-300 font-medium">{bike.popularService}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookBike(bike.name)}
                  className="w-full py-3 rounded-xl glow-btn-gold text-xs font-bold uppercase tracking-wider text-black flex items-center justify-center gap-2"
                >
                  <span>BOOK SERVICE FOR {bike.name.split(' ')[1]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
