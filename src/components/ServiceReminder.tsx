import React, { useState } from 'react';
import { Bell, Calendar, CheckCircle2, AlertTriangle, Sparkles, Clock } from 'lucide-react';

export const ServiceReminder: React.FC = () => {
  const [lastServiceDate, setLastServiceDate] = useState<string>('2026-05-01');
  const [monthlyKm, setMonthlyKm] = useState<number>(800);
  const [reminderSaved, setReminderSaved] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  // Calculate next service due date (3000 km or 3 months, whichever earlier)
  const calculateDueDate = () => {
    const lastDate = new Date(lastServiceDate);
    if (isNaN(lastDate.getTime())) return '3 Months from last service';
    
    // Days to cover 3000km
    const daysFor3000km = Math.round((3000 / (monthlyKm || 800)) * 30);
    const daysInterval = Math.min(daysFor3000km, 90); // Cap at 90 days

    const nextDate = new Date(lastDate);
    nextDate.setDate(nextDate.getDate() + daysInterval);

    return nextDate.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleSaveReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setReminderSaved(true);
    setTimeout(() => setReminderSaved(false), 5000);
  };

  return (
    <section className="py-16 relative overflow-hidden bg-[#050816] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-gray-800 bg-gradient-to-r from-gray-900/90 via-[#050816] to-gray-900/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-glow text-xs font-mono font-bold text-[#0EA5E9]">
                <Bell className="w-4 h-4 text-[#22D3EE] animate-bounce" />
                NEVER MISS A SERVICE
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-outfit text-white">
                Free Bike <span className="text-gradient">Service Due Reminder</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Regular servicing prevents engine wear, extends fuel economy, and retains resale value. Set your reminder in 10 seconds.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleSaveReminder} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-300 font-medium block mb-1.5">Last Service Date</label>
                    <input
                      type="date"
                      value={lastServiceDate}
                      onChange={(e) => setLastServiceDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs focus:border-[#0EA5E9] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-300 font-medium block mb-1.5">Monthly Riding Distance</label>
                    <select
                      value={monthlyKm}
                      onChange={(e) => setMonthlyKm(Number(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs focus:border-[#0EA5E9] outline-none"
                    >
                      <option value={400}>Low (~400 km / month)</option>
                      <option value={800}>Average (~800 km / month)</option>
                      <option value={1500}>High (~1500 km / month)</option>
                      <option value={2500}>Daily Long Commute (2000+ km)</option>
                    </select>
                  </div>
                </div>

                {/* Due Date Alert Box */}
                <div className="p-4 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#22D3EE]" />
                    <div>
                      <span className="text-[10px] uppercase font-mono text-gray-400 block">RECOMMENDED NEXT DUE DATE</span>
                      <span className="text-base font-extrabold font-outfit text-white">{calculateDueDate()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="Enter WhatsApp Mobile Number (e.g. 9849020133)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs focus:border-[#0EA5E9] outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="glow-btn-primary px-6 py-3 rounded-xl text-xs font-bold font-outfit uppercase tracking-wider text-white whitespace-nowrap"
                  >
                    Set Reminder
                  </button>
                </div>

                {reminderSaved && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Service reminder saved! We'll alert you on WhatsApp before your due date.</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
