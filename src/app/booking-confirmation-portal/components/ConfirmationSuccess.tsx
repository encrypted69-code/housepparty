'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/app/components/ui/AppIcon';

interface ConfirmationSuccessProps {
  bookingId: string;
  passType: string;
  totalAmount: number;
  paymentMethod: string;
}

const ConfirmationSuccess = ({ bookingId, passType, totalAmount, paymentMethod }: ConfirmationSuccessProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDownloadTicket = () => {
    if (!isHydrated) return;
    // Simulate ticket download
    alert('Ticket download will be available via email and WhatsApp');
  };

  const handleAddToCalendar = () => {
    if (!isHydrated) return;
    // Simulate calendar integration
    alert('Event added to your calendar');
  };

  const handleWhatsAppContact = () => {
    if (!isHydrated) return;
    window.open('https://wa.me/919876543210?text=Hi, I have a question about my booking', '_blank');
  };

  if (!isHydrated) {
    return (
      <div className="glass-effect rounded-2xl p-8 border border-border">
        <div className="animate-pulse space-y-6">
          <div className="h-24 bg-muted rounded-lg"></div>
          <div className="h-48 bg-muted rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Success Header */}
      <div className="glass-effect rounded-2xl p-8 border border-success text-center glow-lime">
        <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircleIcon" size={48} className="text-success" />
        </div>
        <h2 className="text-3xl font-bold text-gradient-violet mb-2">Booking Confirmed!</h2>
        <p className="text-muted-foreground">Your reservation has been successfully processed</p>
      </div>

      {/* Booking Details */}
      <div className="glass-effect rounded-2xl p-8 border border-border space-y-6">
        <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="DocumentTextIcon" size={24} className="text-primary" />
          <span>Booking Details</span>
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border">
            <span className="text-muted-foreground">Booking ID</span>
            <span className="font-mono font-bold text-foreground">{bookingId}</span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border">
            <span className="text-muted-foreground">Entry Pass Type</span>
            <span className="font-medium text-foreground capitalize">{passType}</span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border">
            <span className="text-muted-foreground">Total Amount Paid</span>
            <span className="font-bold text-gradient-cyan">₹{totalAmount.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border">
            <span className="text-muted-foreground">Payment Method</span>
            <span className="font-medium text-foreground capitalize">{paymentMethod}</span>
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="text-muted-foreground">Payment Status</span>
            <span className="px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium flex items-center space-x-1">
              <Icon name="CheckCircleIcon" size={16} />
              <span>Confirmed</span>
            </span>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="glass-effect rounded-2xl p-8 border border-border space-y-4">
        <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
          <Icon name="CalendarDaysIcon" size={24} className="text-primary" />
          <span>Event Information</span>
        </h3>

        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Icon name="CalendarIcon" size={20} className="text-primary mt-1" />
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium text-foreground">31st December 2025 (New Year's Eve)</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Icon name="ClockIcon" size={20} className="text-primary mt-1" />
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-medium text-foreground">9:00 PM - 3:00 AM</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Icon name="MapPinIcon" size={20} className="text-primary mt-1" />
            <div>
              <p className="text-sm text-muted-foreground">Venue</p>
              <p className="font-medium text-foreground">Private Disco Resort, Kolkata</p>
              <p className="text-sm text-muted-foreground mt-1">Exact location will be shared 24 hours before the event</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={handleDownloadTicket}
          className="p-4 glass-effect border border-border rounded-xl hover:border-primary transition-smooth flex items-center justify-center space-x-2 group"
        >
          <Icon name="TicketIcon" size={20} className="text-primary group-hover:scale-110 transition-smooth" />
          <span className="font-medium text-foreground">Download Ticket</span>
        </button>

        <button
          onClick={handleAddToCalendar}
          className="p-4 glass-effect border border-border rounded-xl hover:border-secondary transition-smooth flex items-center justify-center space-x-2 group"
        >
          <Icon name="CalendarIcon" size={20} className="text-secondary group-hover:scale-110 transition-smooth" />
          <span className="font-medium text-foreground">Add to Calendar</span>
        </button>
      </div>

      {/* Important Information */}
      <div className="glass-effect rounded-2xl p-6 border border-warning/50 bg-warning/5">
        <div className="flex items-start space-x-3">
          <Icon name="ExclamationTriangleIcon" size={24} className="text-warning mt-1" />
          <div className="space-y-2">
            <p className="font-bold text-foreground">Important Reminders</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Carry a valid government-issued photo ID for age verification</li>
              <li>Entry is strictly for guests 18 years and above</li>
              <li>Photography and videography are restricted - respect privacy policies</li>
              <li>Dress code: Smart casual or party attire</li>
              <li>Gates open at 9:00 PM sharp - arrive on time</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="glass-effect rounded-2xl p-6 border border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-primary" />
            <div>
              <p className="font-medium text-foreground">Need Help?</p>
              <p className="text-sm text-muted-foreground">Contact us on WhatsApp</p>
            </div>
          </div>
          <button
            onClick={handleWhatsAppContact}
            className="px-6 py-2 bg-success text-white font-medium rounded-lg hover:scale-105 transition-smooth flex items-center space-x-2"
          >
            <Icon name="ChatBubbleLeftEllipsisIcon" size={20} />
            <span>Chat Now</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4">
        <Link
          href="/main-experience-page"
          className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-card transition-smooth"
        >
          Back to Event Page
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationSuccess;