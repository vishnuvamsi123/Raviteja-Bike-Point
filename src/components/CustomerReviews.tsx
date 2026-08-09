import React, { useState } from 'react';
import { Star, MessageSquarePlus, Quote, CheckCircle2 } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Venkateswara Rao K.',
      bike: 'Hero Splendor Plus (2018 Model)',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Best bike service in Amalapuram! Mallula Satyanarayana garu serviced my Splendor 2018 model perfectly. Mileage improved back to 68 kmpl and smooth engine feel.'
    },
    {
      id: 2,
      name: 'Suresh Kumar B.',
      bike: 'Hero Glamour (2018 Model)',
      rating: 5,
      date: '1 month ago',
      comment: 'Affordable and genuine work. Got clutch plate replacement and fork oil seal changed for my Glamour. Honest advice, fair billing, and fast turnaround.'
    },
    {
      id: 3,
      name: 'Rambabu M.',
      bike: 'Honda Activa 6G',
      rating: 5,
      date: '3 weeks ago',
      comment: 'Owner Mallula Satyanarayana garu is very friendly and expert. Serviced my scooter front brake bleeding & belt clean. Rides like brand new.'
    },
    {
      id: 4,
      name: 'Pavan Kalyan P.',
      bike: 'Honda Shine 125',
      rating: 5,
      date: '2 months ago',
      comment: 'My family has serviced bikes at Raviteja Bike Point for years. Trusted mechanic near Victory Bazar. Genuine OEM spares and zero unnecessary charges.'
    }
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewText) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowReviewModal(false);
      setReviewName('');
      setReviewText('');
    }, 2500);
  };

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#0D0204]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold mb-4">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold">
              TRUSTED SINCE 1992
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight">
            What Our <span className="text-gradient-gold">Riders Say</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Over 26+ years of earning the trust of Splendor, Glamour & scooter owners across Amalapuram.
          </p>

          <button
            onClick={() => setShowReviewModal(true)}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-xs font-bold text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>LEAVE A REVIEW</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-gray-800 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-800/40 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-gray-200 text-sm leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8B0000] border border-[#D4AF37] flex items-center justify-center font-bold text-xs text-[#D4AF37]">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{rev.name}</h4>
                    <p className="text-[11px] text-[#D4AF37] font-mono">{rev.bike}</p>
                  </div>
                </div>

                <span className="text-[10px] text-gray-500 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-8 rounded-3xl border border-[#D4AF37]/30 relative bg-[#180508]">
            <h3 className="text-xl font-bold font-outfit text-white mb-2">Share Your Experience</h3>
            <p className="text-xs text-gray-400 mb-6">Your feedback helps us maintain Amalapuram’s top service standard.</p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white">Thank You!</h4>
                <p className="text-xs text-gray-300">Your review has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="text-xs text-gray-300 font-medium block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    placeholder="e.g. Ramesh V."
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-300 font-medium block mb-1">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setReviewRating(star)}
                        className="p-1"
                      >
                        <Star className={`w-6 h-6 ${star <= reviewRating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-300 font-medium block mb-1">Your Feedback</label>
                  <textarea
                    required
                    rows={3}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Write your thoughts..."
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white text-xs outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="flex-1 py-3 rounded-xl glass-card text-xs text-gray-300 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 glow-btn-gold py-3 rounded-xl text-xs text-black font-bold"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
