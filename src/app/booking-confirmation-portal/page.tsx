import type { Metadata } from 'next';
import Header from '@/app/components/common/Header';
import BookingPortalInteractive from './components/BookingPortalInteractive';

export const metadata: Metadata = {
  title: 'Booking Confirmation Portal - Moonlight Fiesta',
  description: 'Secure your spot at the most exclusive New Year\'s Eve celebration in Kolkata. Complete your booking with our secure payment processing and reservation management system.',
};

export default function BookingConfirmationPortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BookingPortalInteractive />
    </main>
  );
}