import React, { useState } from 'react';
import { Camera, Eye, X, Wrench, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      title: 'Hero Splendor Plus — Engine Diagnostic & Mileage Tuning',
      category: 'ENGINE REPAIR',
      image: './images/hero_splendor.png',
      caption: 'Complete cylinder head dekoking, carburetor tuning, and 10W-30 synthetic oil swap for optimal fuel efficiency.'
    },
    {
      title: 'Hero Glamour — Fork Seal & Brake Overhaul',
      category: 'SUSPENSION & BRAKES',
      image: './images/hero_glamour.png',
      caption: 'Telescopic front shock absorber oil replacement, oil seal renewal, and DOT-4 hydraulic disc brake bleeding.'
    },
    {
      title: 'Honda Activa 6G / 5G — Variator Belt & Clutch Maintenance',
      category: 'SCOOTER MAINTENANCE',
      image: './images/activa_scooter.png',
      caption: 'Variator roller cleaning, belt inspection, spark plug polishing, and front shock absorber bush replacement.'
    },
    {
      title: '3D Automotive Studio Render — High Performance Model',
      category: 'STUDIO CRAFTSMANSHIP',
      image: './images/hero_3d_motorcycle.jpg',
      caption: '3D modern motorcycle visual representation showcasing deep red ambient reflections and metallic black finish.'
    }
  ];

  return (
    <section id="gallery" className="py-24 relative bg-[#0D0204] border-b border-[#D4AF37]/20 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8B0000]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>WORKSHOP CRAFTSMANSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-black text-white uppercase tracking-tight">
            MOTORCYCLE SERVICE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#B8860B]">GALLERY</span>
          </h2>

          <p className="text-base text-gray-300 font-sans leading-relaxed">
            Take a look inside our Amalapuram workshop. Precision tools, clean workmanship, and dedicated care for every motorcycle model.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.image)}
              className="glass-card rounded-3xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 group cursor-pointer shadow-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-black/90">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-[10px] font-mono text-[#F5D77A] uppercase font-bold tracking-widest border border-[#D4AF37]/30">
                  {item.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-outfit text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-full bg-[#8B0000] text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden glass-card border border-[#D4AF37] p-2">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 text-white hover:text-[#D4AF37]"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={activeImage} alt="Expanded View" className="w-full h-auto max-h-[80vh] object-contain rounded-xl" />
          </div>
        </div>
      )}

    </section>
  );
};
