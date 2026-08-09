import React, { useState } from 'react';
import { X, Bell, Phone, MessageSquare, Shield, Trash2, Check, User, Bike, Wrench } from 'lucide-react';

export interface BookingNotification {
  id: string;
  name: string;
  phone: string;
  bikeModel: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  createdAt: string;
  type: 'Booking' | 'Estimate' | 'Reminder';
}

interface OwnerDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: BookingNotification[];
  onUpdateStatus: (id: string, newStatus: 'Pending' | 'Confirmed' | 'Completed') => void;
  onDeleteNotification: (id: string) => void;
  onClearAll: () => void;
}

export const OwnerDashboardModal: React.FC<OwnerDashboardModalProps> = ({
  isOpen,
  onClose,
  notifications,
  onUpdateStatus,
  onDeleteNotification,
  onClearAll
}) => {
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Confirmed' | 'Completed'>('All');

  if (!isOpen) return null;

  const filtered = filter === 'All'
    ? notifications
    : notifications.filter(n => n.status === filter);

  const pendingCount = notifications.filter(n => n.status === 'Pending').length;

  const handleSendWhatsAppReply = (item: BookingNotification) => {
    const text = `*RAVITEJA BIKE POINT - BOOKING CONFIRMATION*%0A%0AHello ${item.name}! 👋%0AThis is Mallula Satyanarayana from Raviteja Bike Point (Amalapuram).%0A%0AWe have received your request:%0A- *Bike:* ${item.bikeModel}%0A- *Service:* ${item.serviceType}%0A- *Date & Time:* ${item.preferredDate || 'Today'} (${item.preferredTime})%0A%0AYour appointment is *CONFIRMED*! Please bring your bike to our garage near Victory Bazar, High School Road.%0A%0AContact: 9849020133`;
    window.open(`https://wa.me/91${item.phone.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    onUpdateStatus(item.id, 'Confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300">
      <div className="relative glass-card max-w-4xl w-full p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 my-8 shadow-2xl bg-[#120204]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <Bell className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-extrabold font-outfit text-white">Owner Notifications</h2>
                {pendingCount > 0 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#8B0000] text-white text-xs font-bold font-mono">
                    {pendingCount} NEW
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 font-mono">
                MALLULA SATYANARAYANA — RAVITEJA BIKE POINT (9849020133)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full glass-card text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls & Clear Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-gray-800/80">
          <div className="flex gap-2">
            {(['All', 'Pending', 'Confirmed', 'Completed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold font-outfit transition-all ${
                  filter === tab
                    ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20'
                    : 'glass-card text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {notifications.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-xs text-red-400 hover:text-red-300 font-mono flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear All
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="py-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400 space-y-3">
              <Shield className="w-12 h-12 text-gray-700 mx-auto" />
              <p className="text-sm font-outfit">No notifications found in {filter} queue.</p>
              <p className="text-xs text-gray-500 font-mono">Incoming bookings will appear here automatically.</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border transition-all ${
                  item.status === 'Pending'
                    ? 'bg-[#180508] border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/5'
                    : item.status === 'Confirmed'
                    ? 'bg-gray-900/60 border-emerald-500/40'
                    : 'bg-gray-900/30 border-gray-800 opacity-65'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                        item.type === 'Booking' ? 'bg-[#8B0000] text-white' : 'bg-[#D4AF37]/20 text-[#F5C542]'
                      }`}>
                        {item.type}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">{item.createdAt}</span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold font-mono ${
                        item.status === 'Pending' ? 'bg-amber-500/20 text-amber-300' :
                        item.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-300' :
                        'bg-gray-700 text-gray-300'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-bold text-white">
                      <span className="flex items-center gap-1.5 text-[#D4AF37]">
                        <User className="w-4 h-4" /> {item.name}
                      </span>
                      <a href={`tel:${item.phone}`} className="flex items-center gap-1 text-emerald-400 hover:underline font-mono">
                        <Phone className="w-3.5 h-3.5" /> {item.phone}
                      </a>
                      <span className="flex items-center gap-1.5 text-gray-300">
                        <Bike className="w-4 h-4 text-[#F5C542]" /> {item.bikeModel}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span><strong>Service:</strong> {item.serviceType}</span>
                      {item.preferredDate && <span>• <strong>Slot:</strong> {item.preferredDate} ({item.preferredTime})</span>}
                    </p>

                    {item.notes && (
                      <p className="text-xs italic text-gray-400 bg-black/40 p-2.5 rounded-lg border border-gray-800">
                        "{item.notes}"
                      </p>
                    )}
                  </div>

                  {/* Actions for Owner */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleSendWhatsAppReply(item)}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/30"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Reply on WhatsApp</span>
                    </button>

                    {item.status === 'Pending' && (
                      <button
                        onClick={() => onUpdateStatus(item.id, 'Confirmed')}
                        className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 text-xs font-bold"
                        title="Mark Confirmed"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    )}

                    {item.status !== 'Completed' && (
                      <button
                        onClick={() => onUpdateStatus(item.id, 'Completed')}
                        className="px-3 py-2 rounded-xl glass-card text-xs text-gray-300 font-bold hover:text-white"
                      >
                        Complete
                      </button>
                    )}

                    <button
                      onClick={() => onDeleteNotification(item.id)}
                      className="p-2 rounded-xl glass-card text-gray-500 hover:text-red-400"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info for owner */}
        <div className="pt-4 border-t border-gray-800 text-xs text-gray-500 font-mono flex items-center justify-between">
          <span>Owner Hotline: 9849020133</span>
          <span>Raviteja Bike Point • Amalapuram</span>
        </div>

      </div>
    </div>
  );
};
