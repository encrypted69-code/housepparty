'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/app/components/ui/AppIcon';
import Image from 'next/image';

interface ConfirmationSuccessProps {
  bookingId: string;
  passType: string;
  totalAmount: number;
  customerName: string;
  numberOfPasses?: number;
}

const ConfirmationSuccess = ({ bookingId, passType, totalAmount, customerName, numberOfPasses = 1 }: ConfirmationSuccessProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    setIsHydrated(true);
    
    // Generate QR code data
    const qrData = `HOUSEPARTY-KOLKATA\nBooking ID: ${bookingId}\nDate: 31 Dec 2025\nName: ${customerName}\nPasses: ${numberOfPasses} (${passType === 'male' ? 'Male' : 'Female'})\nStatus: CONFIRMED`;
    
    // Generate QR code using API
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrData)}`;
    setQrCodeUrl(qrUrl);
  }, [bookingId, customerName, numberOfPasses, passType]);

  const handleInstagramContact = () => {
    if (!isHydrated) return;
    window.open('https://www.instagram.com/houseparty.sbs/', '_blank');
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
        <h2 className="text-4xl font-bold text-gradient-violet mb-2">✅ BOOKING CONFIRMED</h2>
        <p className="text-lg text-foreground">🎉 Your entry is successfully confirmed!</p>
      </div>

      {/* Main Booking Card with QR Code */}
      <div className="glass-effect rounded-2xl p-8 border border-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient-cyan mb-4">House Party Kolkata – New Year Bash</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CalendarIcon" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-bold text-foreground">31st December (Night)</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="TicketIcon" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Booking ID:</span>
                  <span className="font-mono font-bold text-foreground">{bookingId}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="UserIcon" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium text-foreground">{customerName}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="UsersIcon" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Pass Type:</span>
                  <span className="font-medium text-foreground">{passType === 'male' ? 'Male' : 'Female'} Entry</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="HashtagIcon" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Number of Passes:</span>
                  <span className="font-medium text-foreground">{numberOfPasses}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-bold text-success">✅ Confirmed</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card/50 rounded-lg border border-border">
              <p className="text-sm font-bold text-foreground mb-2">📍 Venue Details</p>
              <p className="text-sm text-muted-foreground">Venue details will be shared privately on Instagram</p>
              <p className="text-sm text-foreground mt-1">⏰ Reporting Time: 9:30 PM onwards</p>
            </div>
          </div>

          {/* Right: QR Code */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="p-4 bg-white rounded-xl">
              {qrCodeUrl && (
                <Image 
                  src={qrCodeUrl} 
                  alt="Booking QR Code" 
                  width={300} 
                  height={300}
                  className="w-full h-auto"
                />
              )}
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground mb-1">🔳 Show this QR code at the entry gate</p>
              <p className="text-sm text-warning">(Entry allowed only with valid QR)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Instructions */}
      <div className="glass-effect rounded-2xl p-6 border border-warning/50 bg-warning/5">
        <div className="flex items-start space-x-3">
          <Icon name="ExclamationTriangleIcon" size={24} className="text-warning mt-1" />
          <div className="space-y-3">
            <p className="font-bold text-foreground text-lg">⚠️ Important Instructions</p>
            <ul className="text-sm text-foreground space-y-2">
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Carry a valid ID proof</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>No re-entry allowed</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>QR valid for one-time entry only</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>•</span>
                <span>Management reserves the right to deny entry for misconduct</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Get Ready Message */}
      <div className="glass-effect rounded-2xl p-8 border border-primary text-center">
        <p className="text-2xl font-bold text-gradient-cyan">💃🕺 Get ready for an unforgettable night!</p>
      </div>

      {/* Contact Support */}
      <div className="glass-effect rounded-2xl p-6 border border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="CameraIcon" size={24} className="text-neon-pink" />
            <div>
              <p className="font-medium text-foreground">Need Help?</p>
              <p className="text-sm text-muted-foreground">Contact us on Instagram</p>
            </div>
          </div>
          <button
            onClick={handleInstagramContact}
            className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:scale-105 transition-smooth flex items-center space-x-2"
          >
            <Icon name="CameraIcon" size={20} />
            <span>Message Us</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4">
        <Link
          href="/main-experience-page"
          className="px-6 py-3 bg-neon-cyan text-background font-bold rounded-lg hover:scale-105 transition-smooth"
        >
          Back to Event Page
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationSuccess;