'use client';

import { useState, useEffect } from 'react';
import Icon from '@/app/components/ui/AppIcon';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onPaymentComplete: (method: string) => void;
}

const PaymentModal = ({ isOpen, onClose, totalAmount, onPaymentComplete }: PaymentModalProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isHydrated]);

  const handlePayment = () => {
    setIsProcessing(true);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: totalAmount * 100, // Amount in paise
      currency: 'INR',
      name: 'House Party',
      description: 'Event Booking Payment',
      image: '/favicon.ico',
      handler: function (response: any) {
        setIsProcessing(false);
        onPaymentComplete('razorpay');
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#00f5ff'
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!isHydrated || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="glass-effect rounded-2xl border border-border w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 glass-effect border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gradient-violet flex items-center space-x-2">
            <Icon name="CreditCardIcon" size={24} />
            <span>Complete Payment</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-card rounded-lg transition-smooth"
            disabled={isProcessing}
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Amount Display */}
          <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
            <p className="text-sm text-muted-foreground mb-2">Total Amount to Pay</p>
            <p className="text-4xl font-bold text-gradient-cyan">₹{totalAmount.toLocaleString('en-IN')}</p>
          </div>

          {/* Payment Info */}
          <div className="space-y-4">
            <div className="p-6 bg-card/50 rounded-xl border border-border text-center">
              <Icon name="CreditCardIcon" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Secure Payment via Razorpay</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Pay securely using UPI, Cards, Net Banking, and Wallets
              </p>
              <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                <Icon name="ShieldCheckIcon" size={16} className="text-success" />
                <span>256-bit SSL Encrypted</span>
              </div>
            </div>
          </div>

          {/* Security Info */}
          <div className="p-4 bg-card/50 rounded-lg border border-border">
            <div className="flex items-start space-x-3">
              <Icon name="ShieldCheckIcon" size={20} className="text-success mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">100% Secure Payment Gateway</p>
                <p className="text-muted-foreground">
                  Your payment information is encrypted and secure. We never store your payment details.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-card transition-smooth"
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="flex-1 py-3 bg-neon-cyan text-background font-bold rounded-lg transition-smooth hover:scale-105 hover:shadow-glow-cyan disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Icon name="CheckIcon" size={20} />
                  <span>Pay ₹{totalAmount.toLocaleString('en-IN')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;