import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Bell, Volume2, VolumeX, Smartphone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenOwnerDashboard: () => void;
  onRequestMobilePush: () => void;
  hasNotificationPermission: boolean;
  unreadCount: number;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenOwnerDashboard,
  onRequestMobilePush,
  hasNotificationPermission,
  unreadCount,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      }
    } catch (e) {}
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0D0204]/90 backdrop-blur-xl border-b border-[#D4AF37]/30 py-2.5 shadow-2xl shadow-black/80' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={playClickSound}
            className="flex flex-col group"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif-title font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                RAVITEJA <span className="text-[#D4AF37] font-sans text-sm sm:text-base font-bold">BIKE POINT</span>
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase">
              MALLULA SATYANARAYANA • AMALAPURAM
            </p>
          </a>

          {/* Top Center Minimal Golden Lord Ganesha Emblem */}
          <div className="hidden md:flex flex-col items-center">
            <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <img
                src="./images/ganesha.png"
                alt="Lord Ganesha Emblem"
                className="w-5 h-5 object-contain"
              />
              <span className="text-[10px] font-serif-title text-[#F5D77A] tracking-widest uppercase font-bold">
                SRI GANESHAIAH NAMAHA
              </span>
            </div>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-0.5"></div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={playClickSound}
                className="text-xs uppercase tracking-widest font-semibold text-gray-200 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#D4AF37] after:to-[#8B0000] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Tools & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Mobile Push Notification Button */}
            <button
              onClick={() => {
                playClickSound();
                onRequestMobilePush();
              }}
              title={hasNotificationPermission ? 'Mobile Notifications Enabled' : 'Enable Mobile Push Notifications'}
              className={`p-2.5 rounded-xl glass-card transition-colors flex items-center gap-1 text-xs ${
                hasNotificationPermission ? 'text-emerald-400 border-emerald-500/40' : 'text-gray-300 hover:text-[#D4AF37]'
              }`}
            >
              <Smartphone className="w-4 h-4 text-[#F5C542]" />
            </button>

            {/* Owner Inbox Button */}
            <button
              onClick={() => {
                playClickSound();
                onOpenOwnerDashboard();
              }}
              title="Owner Dashboard Inbox"
              className="relative p-2.5 rounded-xl glass-card text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              <Bell className="w-4 h-4 text-[#D4AF37]" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#8B0000] text-white text-[10px] font-extrabold flex items-center justify-center animate-bounce border border-black">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playClickSound();
              }}
              title={soundEnabled ? 'Mute Sounds' : 'Enable Sounds'}
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-[#D4AF37] transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#D4AF37]" /> : <VolumeX className="w-4 h-4 text-gray-600" />}
            </button>

            {/* Book Service CTA Button */}
            <button
              onClick={() => {
                playClickSound();
                onOpenBooking();
              }}
              className="glow-btn-gold px-5 py-2.5 rounded-xl font-outfit font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 border border-[#D4AF37]"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book Service</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                playClickSound();
                onOpenOwnerDashboard();
              }}
              className="relative p-2 rounded-xl glass-card text-[#D4AF37]"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8B0000] text-white text-[9px] font-bold flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 rounded-xl glass-card text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-gray-800 px-6 py-6 mt-2 space-y-4 animate-in slide-in-from-top-4 duration-300">
          
          {/* Top Center Ganesha Mobile Emblem */}
          <div className="flex items-center justify-center gap-2 py-1 pb-3 border-b border-gray-800">
            <img src="./images/ganesha.png" alt="Ganesha" className="w-4 h-4 object-contain" />
            <span className="text-[10px] font-serif-title text-[#F5D77A] tracking-widest uppercase font-bold">
              SRI GANESHAIAH NAMAHA
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 pb-3 border-b border-gray-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestMobilePush();
              }}
              className="flex items-center justify-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
            >
              <Smartphone className="w-4 h-4" />
              <span>{hasNotificationPermission ? 'Active' : 'Mobile Push'}</span>
            </button>
            <a
              href="tel:9849020133"
              className="flex items-center justify-center gap-2 text-xs font-bold px-3 py-2 rounded-lg bg-[#8B0000]/30 text-[#F3C649] border border-[#D4AF37]/30"
            >
              <Phone className="w-4 h-4" />
              <span>9849020133</span>
            </a>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-semibold text-gray-200 hover:text-[#D4AF37] py-1 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-gray-600">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-800 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOwnerDashboard();
              }}
              className="px-4 py-2.5 rounded-xl glass-card text-xs font-bold text-[#D4AF37] flex items-center gap-2"
            >
              <Bell className="w-4 h-4" />
              <span>Owner Inbox ({unreadCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="glow-btn-gold px-5 py-2.5 rounded-xl font-bold text-xs text-black"
            >
              Book Service Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
