'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/common/Header';
import HeroSection from './HeroSection';
import EventDetailsSection from './EventDetailsSection';
import EntryPackagesSection from './EntryPackagesSection';
import InclusionsSection from './InclusionsSection';
import FoodMenuSection from './FoodMenuSection';
import BeverageMenuSection from './BeverageMenuSection';
import EntertainmentSection from './EntertainmentSection';
import RulesPrivacySection from './RulesPrivacySection';
import BookingCTASection from './BookingCTASection';
import FooterSection from './FooterSection';

export default function MainExperienceInteractive() {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleBookNow = () => {
    if (isHydrated) {
      router.push('/booking-confirmation-portal');
    }
  };

  const handleBookPackage = (packageId: string) => {
    if (isHydrated) {
      router.push(`/booking-confirmation-portal?package=${packageId}`);
    }
  };

  const handleQuickBook = () => {
    if (isHydrated) {
      router.push('/booking-confirmation-portal');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection onBookNowClick={handleBookNow} />
        <EventDetailsSection />
        <EntryPackagesSection onBookPackage={handleBookPackage} />
        <InclusionsSection />
        <FoodMenuSection />
        <BeverageMenuSection />
        <EntertainmentSection />
        <RulesPrivacySection />
        <BookingCTASection onQuickBook={handleQuickBook} />
      </main>
      <FooterSection />
    </div>
  );
}