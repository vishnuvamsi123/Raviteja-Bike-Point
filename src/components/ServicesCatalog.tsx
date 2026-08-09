import React, { useState } from 'react';
import { 
  Wrench, 
  Settings, 
  Droplet, 
  Disc, 
  Link, 
  Zap, 
  Battery, 
  CircleDashed, 
  ShieldAlert, 
  Sliders, 
  Gauge, 
  CalendarCheck,
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';

interface ServicesCatalogProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Maintenance', 'Engine & Power', 'Diagnostics', 'Brakes & Suspension'];

  const services = [
    {
      id: 'general-service',
      title: 'General Service',
      category: 'Maintenance',
      icon: Wrench,
      desc: 'Complete 30-point inspection for Splendor, Glamour, Activa & Shine. Carburetor tuning, spark plug wash, air filter clean & cable lubing.',
      time: '2 - 3 Hours',
      popular: true,
      color: 'from-[#D4AF37] to-[#AA820A]'
    },
    {
      id: 'engine-overhaul',
      title: 'Engine Overhaul',
      category: 'Engine & Power',
      icon: Settings,
      desc: 'Precision cylinder boring, piston replacement, valve seating, crank balancing & gasket renewal for restored 65+ kmpl mileage.',
      time: '1 - 2 Days',
      popular: true,
      color: 'from-[#8B0000] to-[#B31217]'
    },
    {
      id: 'oil-change',
      title: 'Engine Oil Change',
      category: 'Maintenance',
      icon: Droplet,
      desc: 'Castrol / Motul engine oil flush with OEM oil filter replacement for peak thermal control in summer heat.',
      time: '25 Mins',
      popular: false,
      color: 'from-amber-400 to-[#D4AF37]'
    },
    {
      id: 'brake-repair',
      title: 'Brake Overhaul',
      category: 'Brakes & Suspension',
      icon: Disc,
      desc: 'Front disc bleeding, brake shoe replacement for drum brakes, caliper pin greasing & immediate stopping power.',
      time: '40 Mins',
      popular: false,
      color: 'from-emerald-500 to-[#D4AF37]'
    },
    {
      id: 'chain-adjustment',
      title: 'Chain Clean & Lubing',
      category: 'Maintenance',
      icon: Link,
      desc: 'Drive chain degreasing, O-ring inspection, tension adjustment, and high-speed chain lube application.',
      time: '20 Mins',
      popular: false,
      color: 'from-[#8B0000] to-rose-700'
    },
    {
      id: 'electrical-repair',
      title: 'Wiring & Battery Test',
      category: 'Diagnostics',
      icon: Zap,
      desc: 'Self-start coil testing, i3S system diagnostics, wiring short circuit fix, headlight LED upgrades & horn wiring.',
      time: '1 - 2 Hours',
      popular: false,
      color: 'from-yellow-400 to-[#D4AF37]'
    },
    {
      id: 'clutch-repair',
      title: 'Clutch Assembly Repair',
      category: 'Engine & Power',
      icon: Gauge,
      desc: 'Friction plate replacement, pressure plate alignment, and smooth gear lever adjustment for effortless pickup.',
      time: '2 Hours',
      popular: false,
      color: 'from-[#D4AF37] to-[#8B0000]'
    },
    {
      id: 'suspension-service',
      title: 'Front Fork Suspension',
      category: 'Brakes & Suspension',
      icon: Sliders,
      desc: 'Fork seal replacement, fork oil refill, and bush replacement for smooth pothole absorption.',
      time: '2 - 3 Hours',
      popular: false,
      color: 'from-amber-500 to-[#8B0000]'
    },
    {
      id: 'periodic-maintenance',
      title: 'Periodic Maintenance',
      category: 'Maintenance',
      icon: CalendarCheck,
      desc: 'Regular periodic maintenance per factory manuals for Hero, Honda, TVS, RE, Yamaha & Bajaj.',
      time: '2 Hours',
      popular: false,
      color: 'from-[#D4AF37] to-amber-600'
    }
  ];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0D0204]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold mb-4">
            <Wrench className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold">
              GARAGE SERVICES & REPAIRS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Quality Service <span className="text-gradient-gold">You Can Trust</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            From routine Splendor & Glamour oil changes to complete engine rebuilds by Mallula Satyanarayana.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-outfit font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black font-extrabold shadow-lg shadow-[#D4AF37]/30 scale-105'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative glass-card glass-card-hover p-8 rounded-3xl border border-gray-800 flex flex-col justify-between"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#8B0000] text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                    POPULAR CHOICE
                  </div>
                )}

                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-[#0D0204] rounded-[14px] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#D4AF37] block mb-2">
                    {service.category}
                  </span>

                  <h3 className="text-2xl font-bold font-outfit text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/80 mb-6 text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{service.time}</span>
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400 font-bold">
                      <CheckCircle className="w-3.5 h-3.5" /> OEM Spares
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 rounded-xl glow-btn-gold text-xs font-bold font-outfit uppercase tracking-wider text-black flex items-center justify-center gap-2"
                  >
                    <span>BOOK THIS SERVICE</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
