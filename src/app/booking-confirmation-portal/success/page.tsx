'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ConfirmationSuccess from '../components/ConfirmationSuccess';

export default function SuccessPage() {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    // Retrieve booking data from localStorage
    const storedData = localStorage.getItem('lastBooking');
    
    if (storedData) {
      setBookingData(JSON.parse(storedData));
    } else {
      // If no booking data, redirect to booking page
      router.push('/booking-confirmation-portal');
    }
  }, [router]);

  if (!bookingData) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="animate-pulse">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ConfirmationSuccess
          bookingId={bookingData.bookingId}
          passType={bookingData.passType}
          totalAmount={bookingData.totalAmount}
          customerName={bookingData.customerName}
          numberOfPasses={bookingData.numberOfPasses}
        />
      </div>
    </div>
  );
}
