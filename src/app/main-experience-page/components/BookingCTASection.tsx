'use client';

import { useState, useEffect } from 'react';
import Icon from '@/app/components/ui/AppIcon';
import Link from 'next/link';

interface BookingCTASectionProps {
  onQuickBook: () => void;
}

export default function BookingCTASection({ onQuickBook }: BookingCTASectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const urgencyFeatures = [
    { icon: 'ClockIcon', text: 'Limited Spots Available', color: 'text-accent' },
    { icon: 'UserGroupIcon', text: 'Only 150 Guests', color: 'text-neon-cyan' },
    { icon: 'CalendarIcon', text: 'December 31, 2025', color: 'text-neon-pink' },
  ];

  return (
    <section id="booking-cta" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="glass-effect p-8 md:p-12 rounded-3xl border border-neon-cyan/30 glow-cyan text-center">
          {/* Urgency Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {urgencyFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-effect px-4 py-2 rounded-full border border-border"
              >
                <div className="flex items-center space-x-2">
                  <Icon name={feature.icon as any} size={16} className={feature.color} />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient-violet">Ready to Experience</span>
            <br />
            <span className="text-gradient-cyan">Moonlight Fiesta?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Secure your spot at Kolkata's most exclusive private disco experience. Limited availability - book now to avoid disappointment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={isHydrated ? onQuickBook : undefined}
              disabled={!isHydrated}
              className="w-full sm:w-auto px-10 py-5 bg-neon-cyan text-background font-bold text-xl rounded-lg transition-smooth hover:scale-105 glow-cyan hover:shadow-glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Book Your Pass Now</span>
                <Icon name="ArrowRightIcon" size={24} />
              </span>
            </button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="ShieldCheckIcon" size={20} className="text-success" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="LockClosedIcon" size={20} className="text-primary" />
              <span className="text-sm">Privacy Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckBadgeIcon" size={20} className="text-secondary" />
              <span className="text-sm">Verified Host</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect p-6 rounded-xl border border-border text-center">
            <Icon name="BoltIcon" size={32} className="text-neon-violet mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Instant Confirmation</h4>
            <p className="text-sm text-muted-foreground">Receive booking confirmation immediately</p>
          </div>
          <div className="glass-effect p-6 rounded-xl border border-border text-center">
            <Icon name="CreditCardIcon" size={32} className="text-neon-cyan mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Flexible Payment</h4>
            <p className="text-sm text-muted-foreground">UPI, bank transfer, and more options</p>
          </div>
          <div className="glass-effect p-6 rounded-xl border border-border text-center">
            <Icon name="PhoneIcon" size={32} className="text-neon-pink mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
            <p className="text-sm text-muted-foreground">Host available for any questions</p>
          </div>
        </div>
      </div>
    </section>
  );
}