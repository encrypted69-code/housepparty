'use client';

import { useState, useEffect } from 'react';
import Icon from '@/app/components/ui/AppIcon';

interface PricingSummaryProps {
  passType: 'male' | 'female' | '';
  addOns: string[];
}

interface AddOnOption {
  id: string;
  label: string;
  price: number;
}

const PricingSummary = ({ passType, addOns }: PricingSummaryProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const addOnOptions: AddOnOption[] = [
    { id: 'unlimited-food', label: 'Unlimited Food & Snacks', price: 500 },
    { id: 'premium-drinks', label: 'Premium Drinks Package', price: 1500 },
    { id: 'vip-seating', label: 'VIP Lounge Seating', price: 2000 },
    { id: 'photo-booth', label: 'Private Photo Booth Access', price: 800 },
  ];

  const passPrices = {
    male: 1699,
    female: 1299,
  };

  const getPassPrice = (): number => {
    if (!passType) return 0;
    return passPrices[passType];
  };

  const getAddOnsTotal = (): number => {
    return addOns.reduce((total, addOnId) => {
      const addOn = addOnOptions.find(option => option.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
  };

  const getTotal = (): number => {
    return getPassPrice() + getAddOnsTotal();
  };

  const selectedAddOns = addOnOptions.filter(option => addOns.includes(option.id));

  if (!isHydrated) {
    return (
      <div className="glass-effect rounded-2xl p-8 border border-border sticky top-24">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded"></div>
          <div className="h-24 bg-muted rounded"></div>
          <div className="h-16 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-effect rounded-2xl p-8 border border-border sticky top-24">
      <h3 className="text-2xl font-bold text-gradient-violet mb-6 flex items-center space-x-2">
        <Icon name="CalculatorIcon" size={24} />
        <span>Booking Summary</span>
      </h3>

      <div className="space-y-4">
        {/* Entry Pass */}
        {passType && (
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div className="flex items-center space-x-3">
              <Icon name="TicketIcon" size={20} className="text-primary" />
              <div>
                <p className="font-medium text-foreground">
                  {passType === 'male' ? 'Male' : 'Female'} Entry Pass
                </p>
                <p className="text-xs text-muted-foreground">Includes basic amenities</p>
              </div>
            </div>
            <p className="font-bold text-foreground">₹{getPassPrice().toLocaleString('en-IN')}</p>
          </div>
        )}

        {/* Add-ons */}
        {selectedAddOns.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground flex items-center space-x-2">
              <Icon name="SparklesIcon" size={16} />
              <span>Experience Enhancers</span>
            </p>
            {selectedAddOns.map((addOn) => (
              <div key={addOn.id} className="flex items-center justify-between py-2 pl-6">
                <p className="text-sm text-foreground">{addOn.label}</p>
                <p className="text-sm font-medium text-foreground">₹{addOn.price.toLocaleString('en-IN')}</p>
              </div>
            ))}
          </div>
        )}

        {/* Subtotal */}
        {passType && (
          <>
            <div className="flex items-center justify-between py-3 border-t border-border">
              <p className="font-medium text-muted-foreground">Subtotal</p>
              <p className="font-bold text-foreground">₹{getTotal().toLocaleString('en-IN')}</p>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-4 border-t-2 border-primary">
              <p className="text-xl font-bold text-foreground">Total Amount</p>
              <p className="text-2xl font-bold text-gradient-cyan">₹{getTotal().toLocaleString('en-IN')}</p>
            </div>
          </>
        )}

        {/* Empty State */}
        {!passType && (
          <div className="text-center py-8">
            <Icon name="ShoppingCartIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Select an entry pass to see pricing</p>
          </div>
        )}
      </div>

      {/* Security Badge */}
      <div className="mt-6 p-4 bg-card/50 rounded-lg border border-border">
        <div className="flex items-center space-x-3">
          <Icon name="ShieldCheckIcon" size={24} className="text-success" />
          <div>
            <p className="text-sm font-medium text-foreground">Secure Payment</p>
            <p className="text-xs text-muted-foreground">SSL encrypted transaction</p>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="mt-6 p-4 bg-card/50 rounded-lg border border-border space-y-2">
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="CalendarIcon" size={16} className="text-primary" />
          <span className="text-muted-foreground">Date:</span>
          <span className="text-foreground font-medium">31st December 2025</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="ClockIcon" size={16} className="text-primary" />
          <span className="text-muted-foreground">Time:</span>
          <span className="text-foreground font-medium">9:00 PM - 3:00 AM</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Icon name="MapPinIcon" size={16} className="text-primary" />
          <span className="text-muted-foreground">Venue:</span>
          <span className="text-foreground font-medium">Private Resort, Kolkata</span>
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;