import React, { useState } from 'react';
import { X, Calendar, Phone, User, Bike, Wrench, MessageSquare, CheckCircle2, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BookingNotification } from './OwnerDashboardModal';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialBikeModel?: string;
  onNewNotification: (notification: BookingNotification) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'General Service',
  initialBikeModel = 'Hero Splendor Plus',
  onNewNotification
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bikeModel, setBikeModel] = useState(initialBikeModel);
  const [serviceType, setServiceType] = useState(initialService);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !bikeModel) return;

    // Create notification object for the owner Mallula Satyanarayana
    const newNotif: BookingNotification = {
      id: `booking-${Date.now()}`,
      name,
      phone,
      bikeModel,
      serviceType,
      preferredDate: preferredDate || 'Today',
      preferredTime,
      notes,
      status: 'Pending',
      createdAt: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      type: 'Booking'
    };

    // Pass notification up to App state & localStorage
    onNewNotification(newNotif);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    setIsSuccess(true);
  };

  const handleWhatsAppDispatch = () => {
    const text = `*NEW SERVICE BOOKING - RAVITEJA BIKE POINT*%0A%0A*Customer Name:* ${name}%0A*Phone:* ${phone}%0A*Bike Model:* ${bikeModel}%0A*Service:* ${serviceType}%0A*Preferred Slot:* ${preferredDate || 'Today'} (${preferredTime})%0A*Notes:* ${notes || 'None'}%0A%0A_Sent to Mallula Satyanarayana (9849020133)_`;
    window.open(`https://wa.me/919849020133?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300">
      <div className="relative glass-card max-w-xl w-full p-8 rounded-3xl border border-[#D4AF37]/40 my-8 shadow-2xl bg-[#180508]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full glass-card text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-mono font-bold mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                RESERVE YOUR SERVICE SLOT
              </div>
              <h2 className="text-2xl font-extrabold font-outfit text-white">Book Bike Service</h2>
              <p className="text-xs text-gray-400">Direct booking notification sent to Mallula Satyanarayana (9849020133).</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-300 block mb-1">Your Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh V."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-300 block mb-1">Mobile Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9849020133"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-300 block mb-1">Bike Brand & Model *</label>
                  <div className="relative">
                    <Bike className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
                    <select
                      value={bikeModel}
                      onChange={(e) => setBikeModel(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Hero Splendor Plus">Hero Splendor Plus</option>
                      <option value="Hero Glamour">Hero Glamour</option>
                      <option value="Honda Shine 125">Honda Shine 125</option>
                      <option value="Honda Activa 6G / 5G">Honda Activa 6G / 5G</option>
                      <option value="TVS Apache RTR / Jupiter">TVS Apache RTR / Jupiter</option>
                      <option value="Royal Enfield Classic 350">Royal Enfield Classic 350</option>
                      <option value="Other Bike / Scooter">Other Bike / Scooter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-300 block mb-1">Required Service *</label>
                  <div className="relative">
                    <Wrench className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3" />
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                    >
                      <option value="General Service">General Full Service</option>
                      <option value="Engine Overhaul">Engine Overhaul / Repair</option>
                      <option value="Oil Change">Engine Oil Change</option>
                      <option value="Brake Overhaul">Brake Repair / Shoe Swap</option>
                      <option value="Electrical Repair">Wiring / Battery Repair</option>
                      <option value="Clutch Repair">Clutch Plate Swap</option>
                      <option value="Chain Adjustment">Chain Clean & Lube</option>
                      <option value="Periodic Maintenance">Periodic Maintenance</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-300 block mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-300 block mb-1">Preferred Time Slot</label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                  >
                    <option value="10:00 AM">Morning (10:00 AM - 12:00 PM)</option>
                    <option value="02:00 PM">Afternoon (02:00 PM - 04:00 PM)</option>
                    <option value="06:00 PM">Evening (06:00 PM - 08:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-300 block mb-1">Issue Notes (Optional)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe starting problem, clutch slip, noise, or specific repair..."
                  className="w-full px-4 py-2 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full glow-btn-gold py-3.5 rounded-xl font-outfit font-extrabold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 mt-4"
              >
                <Bell className="w-4 h-4 text-black" />
                <span>SUBMIT BOOKING & NOTIFY OWNER</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold font-outfit text-white">Booking Submitted!</h2>
              <p className="text-xs text-gray-300 mt-2 max-w-sm mx-auto">
                Thank you <span className="font-bold text-[#D4AF37]">{name}</span>. A notification has been sent to Mallula Satyanarayana.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border border-[#D4AF37]/30 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between"><span className="text-gray-400">Bike:</span> <span className="text-white font-bold">{bikeModel}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Service:</span> <span className="text-[#D4AF37] font-bold">{serviceType}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Slot:</span> <span className="text-white">{preferredDate || 'Today'} @ {preferredTime}</span></div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppDispatch}
                className="w-full glow-btn-red py-3.5 rounded-xl font-outfit font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>SEND DIRECTLY TO OWNER WHATSAPP (9849020133)</span>
              </button>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full glass-card py-3 rounded-xl text-xs text-gray-400 font-bold"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
