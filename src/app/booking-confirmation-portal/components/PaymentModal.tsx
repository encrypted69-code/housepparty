'use client';

import { useState, useEffect } from 'react';
import Icon from '@/app/components/ui/AppIcon';


interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onPaymentComplete: (method: string) => void;
}

const PaymentModal = ({ isOpen, onClose, totalAmount, onPaymentComplete }: PaymentModalProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'upi' | 'bank' | ''>('');
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
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
    if (!selectedMethod) return;

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete(selectedMethod);
    }, 2000);
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

          {/* Payment Methods */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Select Payment Method</h3>

            {/* UPI Payment */}
            <button
              onClick={() => setSelectedMethod('upi')}
              className={`w-full p-6 rounded-xl border-2 transition-smooth text-left ${
                selectedMethod === 'upi' ?'border-primary bg-primary/10 glow-violet' :'border-border hover:border-primary/50'
              }`}
              disabled={isProcessing}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center">
                    <Icon name="DevicePhoneMobileIcon" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">UPI Payment</p>
                    <p className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm, etc.</p>
                  </div>
                </div>
                <Icon
                  name={selectedMethod === 'upi' ? 'CheckCircleIcon' : 'CircleStackIcon'}
                  size={24}
                  className={selectedMethod === 'upi' ? 'text-primary' : 'text-muted-foreground'}
                />
              </div>
            </button>

            {selectedMethod === 'upi' && (
              <div className="ml-4 p-4 bg-card/50 rounded-lg border border-border space-y-4">
                <div>
                  <label htmlFor="upiId" className="block text-sm font-medium text-muted-foreground mb-2">
                    Enter UPI ID
                  </label>
                  <input
                    type="text"
                    id="upiId"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    className="w-full px-4 py-3 bg-card border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    disabled={isProcessing}
                  />
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="InformationCircleIcon" size={16} />
                  <span>You will receive a payment request on your UPI app</span>
                </div>
              </div>
            )}

            {/* Bank Transfer */}
            <button
              onClick={() => setSelectedMethod('bank')}
              className={`w-full p-6 rounded-xl border-2 transition-smooth text-left ${
                selectedMethod === 'bank' ?'border-primary bg-primary/10 glow-violet' :'border-border hover:border-primary/50'
              }`}
              disabled={isProcessing}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center">
                    <Icon name="BuildingLibraryIcon" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Bank Transfer</p>
                    <p className="text-sm text-muted-foreground">Direct bank account transfer</p>
                  </div>
                </div>
                <Icon
                  name={selectedMethod === 'bank' ? 'CheckCircleIcon' : 'CircleStackIcon'}
                  size={24}
                  className={selectedMethod === 'bank' ? 'text-primary' : 'text-muted-foreground'}
                />
              </div>
            </button>

            {selectedMethod === 'bank' && (
              <div className="ml-4 p-4 bg-card/50 rounded-lg border border-border space-y-3">
                <p className="text-sm font-medium text-foreground">Transfer to:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Name:</span>
                    <span className="text-foreground font-medium">Moonlight Fiesta Events</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Number:</span>
                    <span className="text-foreground font-medium">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">IFSC Code:</span>
                    <span className="text-foreground font-medium">HDFC0001234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bank Name:</span>
                    <span className="text-foreground font-medium">HDFC Bank</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2 text-sm text-warning mt-4">
                  <Icon name="ExclamationTriangleIcon" size={16} className="mt-0.5" />
                  <span>Please share payment screenshot on WhatsApp after transfer</span>
                </div>
              </div>
            )}
          </div>

          {/* Security Info */}
          <div className="p-4 bg-card/50 rounded-lg border border-border">
            <div className="flex items-start space-x-3">
              <Icon name="ShieldCheckIcon" size={20} className="text-success mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">Secure Payment Gateway</p>
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
              disabled={!selectedMethod || isProcessing || (selectedMethod === 'upi' && !upiId)}
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
                  <span>Confirm Payment</span>
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