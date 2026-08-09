import React, { useState } from 'react';
import { Calculator, Bike, CheckSquare, Square, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface EstimateCalculatorProps {
  onBookWithEstimate: (bikeModel: string, services: string[], cost: number) => void;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ onBookWithEstimate }) => {
  const [selectedBikeType, setSelectedBikeType] = useState<'splendor' | 'glamour' | 'scooter' | 'sports'>('splendor');

  const bikeTypes = [
    { id: 'splendor', label: 'Hero Splendor / HF Deluxe', desc: '100cc Commuter Bikes', factor: 1.0 },
    { id: 'glamour', label: 'Hero Glamour / Passion Pro', desc: '125cc Executive Commuter', factor: 1.1 },
    { id: 'scooter', label: 'Honda Activa / TVS Jupiter / Access', desc: 'Automatic Scooters', factor: 1.05 },
    { id: 'sports', label: 'Honda Shine / Pulsar / Apache / RE', desc: '125cc-350cc Motorcycles', factor: 1.35 }
  ];

  const serviceOptions = [
    { id: 'gen-service', name: 'General Full Service', basePrice: 400 },
    { id: 'oil-flush', name: 'Engine Oil & Filter Change', basePrice: 350 },
    { id: 'brake-pad', name: 'Brake Pad / Drum Shoe Swap', basePrice: 200 },
    { id: 'chain-lube', name: 'Drive Chain Cleaning & Lube', basePrice: 150 },
    { id: 'carb-clean', name: 'Carburetor / Tuning Clean', basePrice: 250 },
    { id: 'clutch-swap', name: 'Clutch Friction Plate Swap', basePrice: 550 },
    { id: 'fork-seal', name: 'Front Suspension Fork Oil & Seal', basePrice: 450 },
    { id: 'wash-polish', name: 'Water Wash & Body Polish', basePrice: 150 },
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>(['gen-service', 'oil-flush']);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const activeFactor = bikeTypes.find(b => b.id === selectedBikeType)?.factor || 1.0;
  
  const rawCost = selectedServices.reduce((sum, sId) => {
    const item = serviceOptions.find(opt => opt.id === sId);
    return sum + (item ? item.basePrice : 0);
  }, 0);

  const estimatedCost = Math.round(rawCost * activeFactor);
  const minCost = Math.round(estimatedCost * 0.95);
  const maxCost = Math.round(estimatedCost * 1.08);

  const selectedServiceNames = selectedServices
    .map(sId => serviceOptions.find(opt => opt.id === sId)?.name)
    .filter(Boolean) as string[];

  const activeBikeObj = bikeTypes.find(b => b.id === selectedBikeType);

  const handleWhatsAppShare = () => {
    const text = `Hi Mallula Satyanarayana garu! I calculated an estimate for my ${activeBikeObj?.label}:%0A- Services: ${selectedServiceNames.join(', ')}%0A- Estimated Bill: ₹${minCost} - ₹${maxCost}%0A%0ACan I schedule an appointment at Raviteja Bike Point?`;
    window.open(`https://wa.me/919849020133?text=${text}`, '_blank');
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-[#0D0204]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold mb-4">
            <Calculator className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold">
              TRANSPARENT COST ESTIMATOR
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Service Bill <span className="text-gradient-gold">Estimator</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Select your bike model (Splendor, Glamour, Scooter, or Shine) and required service to view estimated charges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 space-y-8 glass-card p-8 rounded-3xl border border-gray-800">
            
            {/* Step 1: Bike Category */}
            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] block mb-3">
                1. SELECT BIKE MODEL
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bikeTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedBikeType(type.id as any)}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                      selectedBikeType === type.id
                        ? 'bg-[#8B0000]/30 border-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/10'
                        : 'bg-gray-900/40 border-gray-800 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    <div className="font-outfit font-bold text-sm text-white flex items-center justify-between">
                      <span>{type.label}</span>
                      <Bike className={`w-4 h-4 ${selectedBikeType === type.id ? 'text-[#D4AF37]' : 'text-gray-600'}`} />
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1">{type.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Required Services */}
            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37] block mb-3">
                2. CHOOSE REQUIRED REPAIR / SERVICE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => {
                  const isChecked = selectedServices.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      className={`p-3.5 rounded-xl text-left border flex items-center justify-between transition-all duration-200 ${
                        isChecked
                          ? 'bg-[#8B0000]/40 border-[#D4AF37]/60 text-white'
                          : 'bg-gray-900/30 border-gray-800 text-gray-400 hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-600 shrink-0" />
                        )}
                        <span className="text-xs font-medium">{opt.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-gray-400">
                        ~₹{Math.round(opt.basePrice * activeFactor)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Summary Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-[#D4AF37]/30 relative overflow-hidden bg-gradient-to-b from-[#180508] to-[#0D0204]">
              <div className="flex items-center justify-between pb-6 border-b border-gray-800 mb-6">
                <div>
                  <h3 className="font-outfit font-extrabold text-xl text-white">ESTIMATE SUMMARY</h3>
                  <p className="text-xs text-gray-400 font-mono">ITEMIZED PRICE BREAKDOWN</p>
                </div>
                <div className="px-3 py-1 rounded-full badge-gold text-xs font-mono">
                  {selectedServices.length} Items Selected
                </div>
              </div>

              <div className="space-y-3 mb-8 max-h-48 overflow-y-auto pr-2">
                {selectedServiceNames.map((name, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-gray-800/50">
                    <span className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      {name}
                    </span>
                    <span className="text-gray-400 font-mono">Included</span>
                  </div>
                ))}
              </div>

              {/* Price Range Display */}
              <div className="p-6 rounded-2xl bg-black/60 border border-[#D4AF37]/30 mb-6 text-center">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-mono block mb-1">
                  ESTIMATED BILL RANGE
                </span>
                <div className="text-4xl font-extrabold font-outfit text-gradient-gold mb-1">
                  ₹{minCost} - ₹{maxCost}
                </div>
                <p className="text-[11px] text-emerald-400 font-medium flex items-center justify-center gap-1 mt-2 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" /> Genuine OEM Spares & Labor Included
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => onBookWithEstimate(activeBikeObj?.label || '', selectedServiceNames, estimatedCost)}
                  className="w-full glow-btn-gold py-3.5 rounded-xl font-outfit font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2"
                >
                  <span>BOOK NOW WITH THIS ESTIMATE</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                <button
                  onClick={handleWhatsAppShare}
                  className="w-full glass-card hover:bg-emerald-500/10 border-emerald-500/40 py-3.5 rounded-xl font-outfit font-bold text-xs uppercase tracking-wider text-emerald-400 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>GET QUOTE ON WHATSAPP (9849020133)</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
