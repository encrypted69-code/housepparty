'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BookingForm from './BookingForm';
import PricingSummary from './PricingSummary';
import PaymentModal from './PaymentModal';

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
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const calculateTotal = (data: BookingFormData) => {
    const passPrice = data.passType === 'male' ? 1699 : 1299;
    const addOnPrices: Record<string, number> = {
      'unlimited-food': 500,
      'premium-drinks': 1500,
      'vip-seating': 2000,
      'photo-booth': 800,
    };
    const addOnsTotal = data.addOns.reduce((sum, id) => sum + (addOnPrices[id] || 0), 0);
    return passPrice + addOnsTotal;
  };

  const handleFormSubmit = (data: BookingFormData) => {
    setBookingData(data);
    const total = calculateTotal(data);
    setTotalAmount(total);
    setShowPaymentModal(true);
  };

  const handlePaymentComplete = (method: string) => {
    setShowPaymentModal(false);
    
    if (bookingData) {
      // Generate booking ID
      const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
      const bookingId = `HP31-${randomId}`;
      
      // Store booking data in localStorage to pass to success page
      localStorage.setItem('lastBooking', JSON.stringify({
        bookingId,
        customerName: bookingData.fullName,
        passType: bookingData.passType,
        numberOfPasses: 1,
        totalAmount
      }));
    }
    
    // Redirect to success page
    router.push('/booking-confirmation-portal/success');
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

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        totalAmount={totalAmount}
        onPaymentComplete={handlePaymentComplete}
      />
    </div>
  );
};

export default BookingPortalInteractive;