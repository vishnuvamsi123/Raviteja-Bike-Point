import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, Bell } from 'lucide-react';

interface FloatingActionsProps {
  onOpenOwnerDashboard: () => void;
  unreadCount: number;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenOwnerDashboard,
  unreadCount
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          title="Scroll Back To Top"
          className="p-3 rounded-full glass-card border border-gray-700 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 shadow-xl"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Owner Inbox Bell Button */}
      <button
        onClick={onOpenOwnerDashboard}
        title="Owner Notifications Inbox"
        className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#8B0000] to-[#B31217] text-[#D4AF37] border border-[#D4AF37]/50 flex items-center justify-center shadow-lg shadow-[#8B0000]/40 hover:scale-110 transition-transform duration-300"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D4AF37] text-black font-extrabold text-[10px] flex items-center justify-center animate-bounce shadow-md">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Floating Call */}
      <a
        href="tel:9849020133"
        title="Call 9849020133"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#AA820A] text-black flex items-center justify-center shadow-lg shadow-[#D4AF37]/40 hover:scale-110 transition-transform duration-300"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919849020133?text=Hi%20Mallula%20Satyanarayana%20garu!%20I%20would%20like%20to%20inquire%20about%20bike%20servicing."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/40 hover:scale-110 transition-transform duration-300 group"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none"></span>
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </a>

    </div>
  );
};
