'use client';

import { useState, useEffect } from 'react';
import Icon from '@/app/components/ui/AppIcon';

interface Package {
  id: string;
  gender: string;
  price: number;
  originalPrice?: number;
  icon: string;
  color: string;
  borderColor: string;
  glowClass: string;
  inclusions: string[];
  popular?: boolean;
}

interface EntryPackagesSectionProps {
  onBookPackage: (packageId: string) => void;
}

export default function EntryPackagesSection({ onBookPackage }: EntryPackagesSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const packages: Package[] = [
    {
      id: 'male-entry',
      gender: 'Male Entry Pass',
      price: 1699,
      originalPrice: 1699,
      icon: 'UserIcon',
      color: 'text-neon-cyan',
      borderColor: 'border-neon-cyan/30',
      glowClass: 'glow-cyan',
      inclusions: [
        'Entry to exclusive disco party',
        'Access to premium dance floor',
        'Complimentary welcome drink',
        'Access to all entertainment zones',
        'Secure coat check facility',
      ],
    },
    {
      id: 'female-entry',
      gender: 'Female Entry Pass',
      price: 1299,
      originalPrice: 1299,
      icon: 'UserIcon',
      color: 'text-neon-pink',
      borderColor: 'border-neon-pink/30',
      glowClass: 'glow-pink',
      popular: true,
      inclusions: [
        'Entry to exclusive disco party',
        'Access to premium dance floor',
        'Complimentary welcome drink',
        'Access to all entertainment zones',
        'Secure coat check facility',
        'Priority entry access',
      ],
    },
  ];

  return (
    <section id="entry-packages" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="TicketIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Entry Passes</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-cyan mb-4">
            Choose Your Pass
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your entry pass and unlock access to an unforgettable night
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative glass-effect p-8 rounded-2xl border ${pkg.borderColor} ${pkg.glowClass} transition-smooth hover:scale-105 hover:shadow-soft`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-neon-pink px-4 py-1 rounded-full text-background text-sm font-bold shadow-glow-pink">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-card/50 ${pkg.color} mb-4`}>
                  <Icon name={pkg.icon as any} size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{pkg.gender}</h3>
                <div className="flex items-center justify-center space-x-2">
                  {pkg.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                  <span className={`text-4xl font-bold ${pkg.color}`}>₹{pkg.price.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Per person • One-time entry</p>
              </div>

              {/* Inclusions */}
              <div className="space-y-3 mb-8">
                {pkg.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className={`flex-shrink-0 ${pkg.color} mt-0.5`} />
                    <span className="text-sm text-muted-foreground">{inclusion}</span>
                  </div>
                ))}
              </div>

              {/* Book Button */}
              <button
                onClick={isHydrated ? () => onBookPackage(pkg.id) : undefined}
                disabled={!isHydrated}
                className={`w-full py-4 bg-gradient-to-r ${
                  pkg.id === 'female-entry' ?'from-neon-pink to-neon-violet' :'from-neon-cyan to-primary'
                } text-background font-bold text-lg rounded-lg transition-smooth hover:scale-105 hover:shadow-soft disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Book Now</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 glass-effect p-6 rounded-xl border border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-2">Important Information</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Entry passes are non-refundable and non-transferable</li>
                <li>• Valid government-issued ID required for age verification (18+)</li>
                <li>• Prices include all taxes and service charges</li>
                <li>• Limited availability - Book early to secure your spot</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}