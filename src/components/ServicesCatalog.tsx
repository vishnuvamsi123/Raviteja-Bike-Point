import React, { useState } from 'react';
import { Wrench, Disc, Droplets, Zap, ShieldAlert, Cpu, BatteryCharging, Gauge, Check, Calendar, ArrowRight } from 'lucide-react';

interface ServicesCatalogProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({ onSelectService }) => {
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number>(0);

  const services = [
    {
      id: 'general-service',
      title: 'General Bike Service',
      category: 'PERIODIC MAINTENANCE',
      price: '₹450 - ₹750',
      time: '2 - 3 Hours',
      icon: Wrench,
      description: 'Comprehensive 32-point inspection including engine tuning, spark plug cleaning, air filter wash, chain tensioning, carburetor/FI adjustment, and brake alignment.',
      details: ['32-Point Checkup', 'Spark Plug Polish', 'Carburetor / FI Clean', 'Brake Adjustment', 'General Wash']
    },
    {
      id: 'engine-repair',
      title: 'Engine Repair & Overhaul',
      category: 'PRECISION MECHANICAL',
      price: '₹1,200 - ₹3,500',
      time: '1 - 2 Days',
      icon: Cpu,
      description: 'Complete engine head dekoking, piston ring replacement, valve seating, crank shaft alignment, and noise reduction for smooth acceleration.',
      details: ['Piston Ring Swap', 'Valve Grinding', 'Crank Alignment', 'Smoke Elimination', 'Compression Test']
    },
    {
      id: 'oil-change',
      title: 'Oil Change & Lube Swap',
      category: 'FLUID MAINTENANCE',
      price: '₹350 - ₹950',
      time: '20 Minutes',
      icon: Droplets,
      description: 'Premium synthetic 10W-30 / 20W-40 engine oil swap with genuine oil filter replacement, gear oil fill, and smooth clutch performance.',
      details: ['Synthetic Oil Swap', 'Oil Filter Replacement', 'Gear Lube Wash', 'Drain Plug Gasket', 'Disposal Handling']
    },
    {
      id: 'brake-repair',
      title: 'Brake Repair & Bleeding',
      category: 'SAFETY SYSTEM',
      price: '₹250 - ₹650',
      time: '45 Minutes',
      icon: Disc,
      description: 'Front hydraulic disc brake pad replacement, DOT-4 brake fluid bleeding, rear drum brake shoe cleaning, and lever sensitivity adjustment.',
      details: ['Disc Pad Swap', 'Fluid Bleeding', 'Drum Shoe Scuffing', 'Brake Line Purge', 'Lever Lubrication']
    },
    {
      id: 'clutch-repair',
      title: 'Clutch & Transmission Repair',
      category: 'POWER DELIVY',
      price: '₹550 - ₹1,400',
      time: '2 - 4 Hours',
      icon: Gauge,
      description: 'Clutch plate replacement, friction disc alignment, clutch cable adjustment, and smooth gear shifting without slippage.',
      details: ['Clutch Plate Swap', 'Pressure Plate Polish', 'Cable Lube', 'Gear Shifter Tuning', 'Primary Gear Check']
    },
    {
      id: 'chain-service',
      title: 'Chain Clean & Lube Service',
      category: 'DRIVE TRAIN',
      price: '₹150 - ₹300',
      time: '30 Minutes',
      icon: Wrench,
      description: 'Degreasing drive chain with high-pressure solvents, O-ring inspection, tension setting, and Motul chain lube application.',
      details: ['Deep Degreasing', 'Tension Adjustment', 'O-Ring Inspection', 'Motul Lube Spray', 'Sprocket Wear Check']
    },
    {
      id: 'electrical-repair',
      title: 'Electrical & Wiring Repair',
      category: 'ELECTRICAL SYSTEM',
      price: '₹300 - ₹850',
      time: '1 - 3 Hours',
      icon: Zap,
      description: 'Diagnosing headlamp wiring, turn indicator relays, horn replacement, stator coil testing, and short-circuit troubleshooting.',
      details: ['Harness Inspection', 'Stator Coil Check', 'Relay Replacement', 'Indicator Wiring', 'Fuse Box Repair']
    },
    {
      id: 'battery-service',
      title: 'Battery Charging & Replacement',
      category: 'POWER STORAGE',
      price: '₹100 - ₹2,200',
      time: '30 Minutes',
      icon: BatteryCharging,
      description: 'Exide/Amaron dry battery health check, terminal corrosion cleaning, trickle charging, and new battery replacement with warranty.',
      details: ['Voltage Testing', 'Terminal Cleaning', 'Deep Trickle Charge', 'Warranty Support', 'Old Battery Recycle']
    },
    {
      id: 'tyre-service',
      title: 'Tyre & Tube Replacement',
      category: 'WHEEL ASSEMBLY',
      price: '₹200 - ₹2,500',
      time: '30 Minutes',
      icon: Disc,
      description: 'Tubeless tyre fitment, heavy-duty tube replacement, puncture repair, and wheel alignment for vibration-free riding.',
      details: ['Tubeless Fitment', 'Heavy Duty Tube', 'Wheel Balancing', 'Valve Replacement', 'Rim Inspection']
    },
    {
      id: 'suspension-repair',
      title: 'Suspension & Fork Seal Repair',
      category: 'RIDE COMFORT',
      price: '₹450 - ₹1,200',
      time: '2 - 3 Hours',
      icon: ShieldAlert,
      description: 'Front telescopic shock absorber fork oil replacement, oil seal swap, rear shock bush replacement, and bump absorption tuning.',
      details: ['Fork Oil Swap', 'Oil Seal Replacement', 'Bush Replacement', 'Damper Inspection', 'Alignment Check']
    },
    {
      id: 'periodic-maintenance',
      title: 'Periodic Maintenance Program',
      category: 'MILESTONE SERVICE',
      price: '₹600 - ₹1,100',
      time: '3 Hours',
      icon: Wrench,
      description: 'Comprehensive 5000 km / 10,000 km scheduled maintenance covering all fluids, filters, cables, greasing, and road testing.',
      details: ['All Filters Replaced', 'Greasing Pivot Points', 'Tappet Adjustment', 'Comprehensive Road Test', 'Service Reminder Tag']
    },
    {
      id: 'troubleshooting',
      title: 'Motorcycle Troubleshooting',
      category: 'DIAGNOSTICS',
      price: '₹250 - ₹600',
      time: '1 Hour',
      icon: Cpu,
      description: 'Diagnosing starting trouble, cold start issues, engine stalling, poor mileage, and abnormal mechanical noises.',
      details: ['Starting Trouble Diagnostic', 'Compression Check', 'Fuel Flow Test', 'Ignition Coil Check', 'Mileage Tuning']
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[#0A0102] border-b border-[#D4AF37]/20 text-white overflow-hidden">
      
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#8B0000]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8B0000]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            <Wrench className="w-3.5 h-3.5" />
            <span>MASTER REPAIR SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-black text-[#FFFFFF] uppercase tracking-tight">
            EXPERT TWO-WHEELER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#B8860B]">SERVICES CATALOG</span>
          </h2>

          <p className="text-base text-gray-300 font-sans leading-relaxed">
            From quick synthetic oil swaps to complete engine overhauls, Raviteja Bike Point delivers precision servicing for all Hero, Honda, TVS, Bajaj, and Yamaha motorcycles.
          </p>
        </div>

        {/* Active Interactive Service Spotlight Inspector Card */}
        <div className="mb-16 glass-card p-6 sm:p-10 rounded-3xl border-2 border-[#D4AF37]/50 shadow-2xl bg-gradient-to-r from-[#1A0307] via-[#0D0204] to-[#1A0307]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#8B0000] text-white text-[10px] font-mono font-bold tracking-widest uppercase">
                  {services[selectedServiceIdx].category}
                </span>
                <span className="text-xs text-[#D4AF37] font-mono font-bold">
                  ESTIMATED DURATION: {services[selectedServiceIdx].time}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-white">
                {services[selectedServiceIdx].title}
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                {services[selectedServiceIdx].description}
              </p>

              {/* Service Details Checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {services[selectedServiceIdx].details.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Direct CTA Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl glass-card border border-[#D4AF37]/40 flex flex-col items-center justify-center text-center space-y-4 bg-[#0D0204]/90">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">ESTIMATED SERVICE PRICE</span>
              <div className="text-3xl font-extrabold text-[#D4AF37] font-outfit">
                {services[selectedServiceIdx].price}
              </div>

              <button
                onClick={() => onSelectService(services[selectedServiceIdx].title)}
                className="w-full glow-btn-gold py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-widest text-black flex items-center justify-center gap-2 border border-[#D4AF37]"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>BOOK THIS SERVICE</span>
              </button>
            </div>

          </div>
        </div>

        {/* All 12 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            const isSelected = selectedServiceIdx === idx;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceIdx(idx)}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#D4AF37] bg-[#1A0307]/90 shadow-xl shadow-[#8B0000]/30 transform -translate-y-1'
                    : 'border-gray-800/80 hover:border-[#D4AF37]/60 hover:bg-[#1A0307]/50'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#8B0000] text-[#D4AF37]' : 'bg-black/60 text-gray-400 group-hover:text-[#D4AF37]'}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#D4AF37] font-bold">{service.price}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{service.category}</span>
                    <h4 className="text-lg font-bold font-outfit text-white group-hover:text-[#D4AF37] transition-colors mt-0.5">
                      {service.title}
                    </h4>
                  </div>

                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-[#D4AF37]' : 'text-gray-400 group-hover:text-white'}>
                    {isSelected ? 'Currently Inspected' : 'View Details'}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#D4AF37] translate-x-1' : 'text-gray-500 group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
