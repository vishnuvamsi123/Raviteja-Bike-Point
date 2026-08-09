import React, { useState } from 'react';
import { Camera, X, ZoomIn } from 'lucide-react';

export const MasonryGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filters = ['All', 'Commuter Bikes', 'Workshop', 'Engine Parts'];

  const galleryItems = [
    {
      id: 1,
      title: 'Hero Splendor Plus 2018 Model Serviced',
      category: 'Commuter Bikes',
      img: '/images/splendor_2018.png',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 2,
      title: 'Hero Glamour 2018 Model 125cc Tuning',
      category: 'Commuter Bikes',
      img: '/images/glamour_2018.png',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 3,
      title: 'Precision Engine Cylinder Overhaul',
      category: 'Engine Parts',
      img: '/images/engine_repair.png',
      span: 'md:col-span-1 md:row-span-2'
    },
    {
      id: 4,
      title: 'Workshop Service Bays & Lifts',
      category: 'Workshop',
      img: '/images/workshop_bikes.png',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 5,
      title: 'High Mileage Carburetor & Clutch Overhaul',
      category: 'Engine Parts',
      img: '/images/splendor_2018.png',
      span: 'md:col-span-1 md:row-span-1'
    }
  ];

  const filteredItems = selectedFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#0A0203]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold mb-4">
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold">
              WORKSHOP & BIKE GALLERY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            Our Service <span className="text-gradient-gold">Work Gallery</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Take a look at our precision work on Hero Splendor, Hero Glamour, Honda Shine, Activa, and workshop engine overhauls.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-xl font-outfit font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-black font-extrabold shadow-lg shadow-[#D4AF37]/30'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item.img)}
              className={`group relative glass-card rounded-3xl overflow-hidden cursor-pointer ${item.span} border border-gray-800`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0203] via-[#0A0203]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-[#0A0203]/80 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-outfit text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full glass-card text-white hover:text-[#D4AF37]"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden glass-card p-2 border border-[#D4AF37]/40">
            <img
              src={activeImage}
              alt="Raviteja Bike Point Gallery Lightbox"
              className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
