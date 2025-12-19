'use client';

import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import PricingSummary from './PricingSummary';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  passType: 'male' | 'female' | '';
  addOns: string[];
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
  ageVerified: boolean;
}

const BookingPortalInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleFormSubmit = (data: BookingFormData) => {
    // Create WhatsApp message
    const addOnLabels: Record<string, string> = {
      'unlimited-food': 'Unlimited Food & Snacks',
      'premium-drinks': 'Premium Drinks Package',
      'vip-seating': 'VIP Lounge Seating',
      'photo-booth': 'Private Photo Booth Access',
    };

    let message = `Hi, I want to book passes for 31st Dec\n\n`;
    message += `📋 *Booking Details:*\n`;
    message += `Name: ${data.fullName}\n`;
    message += `Phone: ${data.phone}\n`;
    message += `Email: ${data.email}\n\n`;
    message += `🎫 *Pass Type:* ${data.passType === 'male' ? 'Male Entry Pass (₹1,699)' : 'Female Entry Pass (₹1,299)'}\n\n`;
    
    if (data.addOns.length > 0) {
      message += `✨ *Add-ons:*\n`;
      data.addOns.forEach(addOnId => {
        message += `- ${addOnLabels[addOnId]}\n`;
      });
      message += `\n`;
    }
    
    message += `Please confirm my booking!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919768372013?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-16 bg-muted rounded-lg"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 h-96 bg-muted rounded-lg"></div>
              <div className="h-96 bg-muted rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-violet mb-4">
            Secure Your Spot
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete your booking for the most exclusive New Year's Eve celebration in Kolkata
          </p>
        </div>

        {/* Booking Form & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm
              onSubmit={handleFormSubmit}
              isProcessing={false}
            />
          </div>

          <div>
            <PricingSummary
              passType={bookingData?.passType || ''}
              addOns={bookingData?.addOns || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPortalInteractive;