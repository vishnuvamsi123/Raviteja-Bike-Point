import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandsSlider } from './components/BrandsSlider';
import { BikesSection } from './components/BikesSection';
import { ServicesCatalog } from './components/ServicesCatalog';
import { EstimateCalculator } from './components/EstimateCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { OwnerDashboardModal, BookingNotification } from './components/OwnerDashboardModal';
import { requestNotificationPermission, sendMobilePushNotification } from './utils/notificationService';

const INITIAL_NOTIFICATIONS: BookingNotification[] = [
  {
    id: 'b-101',
    name: 'K. Venkateswara Rao',
    phone: '9848012345',
    bikeModel: 'Hero Splendor Plus',
    serviceType: 'General Service & Mileage Tuning',
    preferredDate: 'Today',
    preferredTime: '10:00 AM',
    notes: 'Please check carburetor & clutch cable adjustment.',
    status: 'Pending',
    createdAt: '10 mins ago',
    type: 'Booking'
  },
  {
    id: 'b-102',
    name: 'Suresh Kumar',
    phone: '9440156789',
    bikeModel: 'Hero Glamour',
    serviceType: 'Engine Oil & Fork Seal Replacement',
    preferredDate: 'Tomorrow',
    preferredTime: '02:00 PM',
    notes: 'Front shock absorbers leaking oil.',
    status: 'Confirmed',
    createdAt: '1 hour ago',
    type: 'Booking'
  }
];

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isOwnerDashboardOpen, setIsOwnerDashboardOpen] = useState<boolean>(false);

  const [bookingService, setBookingService] = useState<string>('General Service');
  const [bookingBikeModel, setBookingBikeModel] = useState<string>('Hero Splendor Plus');
  
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [hasNotificationPermission, setHasNotificationPermission] = useState<boolean>(false);

  // Load / Store Notifications in LocalStorage
  const [notifications, setNotifications] = useState<BookingNotification[]>(() => {
    try {
      const saved = localStorage.getItem('raviteja_owner_notifications');
      return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
    } catch (e) {
      return INITIAL_NOTIFICATIONS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('raviteja_owner_notifications', JSON.stringify(notifications));
    } catch (e) {}
  }, [notifications]);

  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'granted') {
      setHasNotificationPermission(true);
    }
  }, []);

  const handleRequestMobilePush = async () => {
    const granted = await requestNotificationPermission();
    setHasNotificationPermission(granted);

    if (granted) {
      sendMobilePushNotification(
        'Raviteja Bike Point Notifications Active! 🔔',
        'Live service booking & estimate notifications are now enabled on your mobile device.'
      );
    } else {
      alert('Mobile Notification permission was not granted. Please enable notifications in your browser settings.');
    }
  };

  const handleAddNotification = (newNotif: BookingNotification) => {
    setNotifications((prev) => [newNotif, ...prev]);

    // Send native system mobile push notification
    sendMobilePushNotification(
      `New Booking: ${newNotif.name}`,
      `${newNotif.bikeModel} - ${newNotif.serviceType}. Contact: ${newNotif.phone}`
    );

    // Audio chime
    if (soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } catch (e) {}
    }
  };

  const handleUpdateStatus = (id: string, newStatus: 'Pending' | 'Confirmed' | 'Completed') => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: newStatus } : n))
    );
  };

  const handleDeleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const handleOpenBooking = () => {
    setBookingService('General Service');
    setBookingBikeModel('Hero Splendor Plus');
    setIsBookingOpen(true);
  };

  const handleBookBike = (modelName: string) => {
    setBookingBikeModel(modelName);
    setBookingService('General Service');
    setIsBookingOpen(true);
  };

  const handleSelectServiceToBook = (serviceTitle: string) => {
    setBookingService(serviceTitle);
    setIsBookingOpen(true);
  };

  const handleBookWithEstimate = (bikeModel: string, services: string[], cost: number) => {
    setBookingBikeModel(bikeModel);
    setBookingService(services.join(', '));
    setIsBookingOpen(true);
  };

  const unreadCount = notifications.filter((n) => n.status === 'Pending').length;

  return (
    <div className="min-h-screen relative bg-[#0A0203] text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Sticky Header with Logo & Mobile Notifications */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenOwnerDashboard={() => setIsOwnerDashboardOpen(true)}
        onRequestMobilePush={handleRequestMobilePush}
        hasNotificationPermission={hasNotificationPermission}
        unreadCount={unreadCount}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Content */}
      <main className="relative z-10 space-y-0">
        
        {/* Full-width Widescreen Homepage Logo Card */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onRequestMobilePush={handleRequestMobilePush}
          hasNotificationPermission={hasNotificationPermission}
        />

        {/* Featured Brands Marquee */}
        <BrandsSlider />

        {/* Dedicated Section for Hero Splendor & Glamour Bikes */}
        <BikesSection onBookBike={handleBookBike} />

        {/* Master Services Catalog */}
        <ServicesCatalog onSelectService={handleSelectServiceToBook} />

        {/* Cost Estimator */}
        <EstimateCalculator onBookWithEstimate={handleBookWithEstimate} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Contact & Location Hub */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Bar */}
      <FloatingActions
        onOpenOwnerDashboard={() => setIsOwnerDashboardOpen(true)}
        unreadCount={unreadCount}
      />

      {/* Customer Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
        initialBikeModel={bookingBikeModel}
        onNewNotification={handleAddNotification}
      />

      {/* Real-time Owner Dashboard Modal for Mallula Satyanarayana */}
      <OwnerDashboardModal
        isOpen={isOwnerDashboardOpen}
        onClose={() => setIsOwnerDashboardOpen(false)}
        notifications={notifications}
        onUpdateStatus={handleUpdateStatus}
        onDeleteNotification={handleDeleteNotification}
        onClearAll={handleClearAll}
      />

    </div>
  );
};

export default App;
