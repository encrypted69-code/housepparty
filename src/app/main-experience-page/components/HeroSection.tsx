'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/app/components/ui/AppIcon';
import AppImage from '@/app/components/ui/AppImage';

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export default function HeroSection({ onBookNowClick }: HeroSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background/90"></div>

      {/* Animated Glow Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Exclusivity Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="glass-effect px-4 py-2 rounded-full border border-neon-violet/30 glow-violet">
              <div className="flex items-center space-x-2">
                <Icon name="LockClosedIcon" size={16} className="text-neon-violet" />
                <span className="text-sm font-medium text-foreground">Private Event</span>
              </div>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full border border-neon-cyan/30 glow-cyan">
              <div className="flex items-center space-x-2">
                <Icon name="SparklesIcon" size={16} className="text-neon-cyan" />
                <span className="text-sm font-medium text-foreground">Premium Experience</span>
              </div>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full border border-neon-pink/30 glow-pink">
              <div className="flex items-center space-x-2">
                <Icon name="UserGroupIcon" size={16} className="text-neon-pink" />
                <span className="text-sm font-medium text-foreground">Curated Crowd</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient-violet">Moonlight</span>
            <br />
            <span className="text-gradient-cyan">Fiesta</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
            Beyond the velvet rope
          </p>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            An exclusive, invitation-only disco experience where privacy meets luxury. Curated for discerning individuals who value authentic connections over social media validation.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <div className="glass-effect p-6 rounded-xl border border-border hover:border-primary/50 transition-smooth">
              <Icon name="ShieldCheckIcon" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Private & Secure</h3>
              <p className="text-sm text-muted-foreground">Strict privacy policies and verified guest list</p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border hover:border-secondary/50 transition-smooth">
              <Icon name="MusicalNoteIcon" size={32} className="text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Premium Entertainment</h3>
              <p className="text-sm text-muted-foreground">Live DJs and curated music experience</p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-border hover:border-accent/50 transition-smooth">
              <Icon name="StarIcon" size={32} className="text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Luxury Amenities</h3>
              <p className="text-sm text-muted-foreground">Premium food, drinks, and facilities</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={isHydrated ? onBookNowClick : undefined}
              disabled={!isHydrated}
              className="w-full sm:w-auto px-8 py-4 bg-neon-cyan text-background font-bold text-lg rounded-lg transition-smooth hover:scale-105 glow-cyan hover:shadow-glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Book Your Entry Pass</span>
                <Icon name="ArrowRightIcon" size={20} />
              </span>
            </button>
          </div>

          {/* Event Date & Location Teaser */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="CalendarIcon" size={20} className="text-primary" />
              <span className="text-sm">December 31, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPinIcon" size={20} className="text-secondary" />
              <span className="text-sm">Premium Resort, Kolkata</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={20} className="text-accent" />
              <span className="text-sm">9:00 PM - 3:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
}