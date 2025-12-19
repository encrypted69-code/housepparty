'use client';

import { useState, useEffect } from 'react';
import Icon from '@/app/components/ui/AppIcon';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  eventDate: '24' | '28' | '31' | '';
  passType: 'male' | 'female' | '';
  addOns: string[];
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
  ageVerified: boolean;
}

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void;
  isProcessing: boolean;
}

const BookingForm = ({ onSubmit, isProcessing }: BookingFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    passType: '',
    addOns: [],
    agreeToTerms: false,
    agreeToPrivacy: false,
    ageVerified: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const addOnOptions = [
    { id: 'unlimited-food', label: 'Unlimited Food & Snacks', price: 500 },
    { id: 'premium-drinks', label: 'Premium Drinks Package', price: 1500 },
    { id: 'vip-seating', label: 'VIP Lounge Seating', price: 2000 },
    { id: 'photo-booth', label: 'Private Photo Booth Access', price: 800 },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid Indian phone number';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select an event date';
    }

    if (!formData.passType) {
      newErrors.passType = 'Please select an entry pass type';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the community standards';
    }

    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = 'You must agree to the privacy policy';
    }

    if (!formData.ageVerified) {
      newErrors.ageVerified = 'Age verification is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleAddOnToggle = (addOnId: string) => {
    if (!isHydrated) return;
    
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  if (!isHydrated) {
    return (
      <div className="glass-effect rounded-2xl p-8 border border-border">
        <div className="animate-pulse space-y-6">
          <div className="h-12 bg-muted rounded-lg"></div>
          <div className="h-12 bg-muted rounded-lg"></div>
          <div className="h-12 bg-muted rounded-lg"></div>
          <div className="h-32 bg-muted rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 border border-border space-y-6">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gradient-violet flex items-center space-x-2">
          <Icon name="UserCircleIcon" size={24} />
          <span>Personal Information</span>
        </h3>

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-muted-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            placeholder="Enter your full name"
            disabled={isProcessing}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-error flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            placeholder="your.email@example.com"
            disabled={isProcessing}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
            Phone Number *
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-4 bg-card border border-r-0 border-input rounded-l-lg text-muted-foreground">
              +91
            </span>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
              className="flex-1 px-4 py-3 bg-card border border-input rounded-r-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              placeholder="9876543210"
              maxLength={10}
              disabled={isProcessing}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-error flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Event Date Selection */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gradient-violet flex items-center space-x-2">
          <Icon name="CalendarIcon" size={24} />
          <span>Select Event Date *</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, eventDate: '24' })}
            className={`p-6 rounded-xl border-2 transition-smooth text-left ${
              formData.eventDate === '24' ? 'border-primary bg-primary/10 glow-violet' : 'border-border hover:border-primary/50'
            }`}
            disabled={isProcessing}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-foreground">December 24th</span>
              <Icon
                name={formData.eventDate === '24' ? 'CheckCircleIcon' : 'CalendarIcon'}
                size={24}
                className={formData.eventDate === '24' ? 'text-primary' : 'text-muted-foreground'}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Christmas Eve Party</p>
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, eventDate: '28' })}
            className={`p-6 rounded-xl border-2 transition-smooth text-left ${
              formData.eventDate === '28' ? 'border-primary bg-primary/10 glow-violet' : 'border-border hover:border-primary/50'
            }`}
            disabled={isProcessing}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-foreground">December 28th</span>
              <Icon
                name={formData.eventDate === '28' ? 'CheckCircleIcon' : 'CalendarIcon'}
                size={24}
                className={formData.eventDate === '28' ? 'text-primary' : 'text-muted-foreground'}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Weekend Party</p>
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, eventDate: '31' })}
            className={`p-6 rounded-xl border-2 transition-smooth text-left ${
              formData.eventDate === '31' ? 'border-primary bg-primary/10 glow-violet' : 'border-border hover:border-primary/50'
            }`}
            disabled={isProcessing}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-foreground">December 31st</span>
              <Icon
                name={formData.eventDate === '31' ? 'CheckCircleIcon' : 'CalendarIcon'}
                size={24}
                className={formData.eventDate === '31' ? 'text-primary' : 'text-muted-foreground'}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">New Year's Eve</p>
          </button>
        </div>
        {errors.eventDate && (
          <p className="text-sm text-error flex items-center space-x-1">
            <Icon name="ExclamationCircleIcon" size={16} />
            <span>{errors.eventDate}</span>
          </p>
        )}
      </div>

      {/* Entry Pass Selection */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gradient-violet flex items-center space-x-2">
          <Icon name="TicketIcon" size={24} />
          <span>Entry Pass Type *</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, passType: 'male' })}
            className={`p-6 rounded-xl border-2 transition-smooth text-left ${
              formData.passType === 'male' ?'border-primary bg-primary/10 glow-violet' :'border-border hover:border-primary/50'
            }`}
            disabled={isProcessing}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-foreground">Male Entry Pass</span>
              <Icon
                name={formData.passType === 'male' ? 'CheckCircleIcon' : 'CircleStackIcon'}
                size={24}
                className={formData.passType === 'male' ? 'text-primary' : 'text-muted-foreground'}
              />
            </div>
            <p className="text-2xl font-bold text-gradient-cyan">₹1,699</p>
            <p className="text-sm text-muted-foreground mt-2">Includes entry and basic amenities</p>
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, passType: 'female' })}
            className={`p-6 rounded-xl border-2 transition-smooth text-left ${
              formData.passType === 'female' ?'border-primary bg-primary/10 glow-violet' :'border-border hover:border-primary/50'
            }`}
            disabled={isProcessing}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-foreground">Female Entry Pass</span>
              <Icon
                name={formData.passType === 'female' ? 'CheckCircleIcon' : 'CircleStackIcon'}
                size={24}
                className={formData.passType === 'female' ? 'text-primary' : 'text-muted-foreground'}
              />
            </div>
            <p className="text-2xl font-bold text-gradient-cyan">₹1,299</p>
            <p className="text-sm text-muted-foreground mt-2">Includes entry and basic amenities</p>
          </button>
        </div>
        {errors.passType && (
          <p className="text-sm text-error flex items-center space-x-1">
            <Icon name="ExclamationCircleIcon" size={16} />
            <span>{errors.passType}</span>
          </p>
        )}
      </div>

      {/* Verification & Agreements */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="text-xl font-bold text-gradient-violet flex items-center space-x-2">
          <Icon name="ShieldCheckIcon" size={24} />
          <span>Verification & Agreements *</span>
        </h3>

        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.ageVerified}
            onChange={(e) => setFormData({ ...formData, ageVerified: e.target.checked })}
            className="mt-1 w-5 h-5 rounded border-2 border-muted-foreground checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary transition-smooth"
            disabled={isProcessing}
          />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
            I confirm that I am 18 years of age or older and will provide valid ID at the venue
          </span>
        </label>
        {errors.ageVerified && (
          <p className="text-sm text-error flex items-center space-x-1 ml-8">
            <Icon name="ExclamationCircleIcon" size={16} />
            <span>{errors.ageVerified}</span>
          </p>
        )}

        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
            className="mt-1 w-5 h-5 rounded border-2 border-muted-foreground checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary transition-smooth"
            disabled={isProcessing}
          />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
            I agree to the <span className="text-primary underline">Community Standards</span> and will respect all attendees and venue rules
          </span>
        </label>
        {errors.agreeToTerms && (
          <p className="text-sm text-error flex items-center space-x-1 ml-8">
            <Icon name="ExclamationCircleIcon" size={16} />
            <span>{errors.agreeToTerms}</span>
          </p>
        )}

        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.agreeToPrivacy}
            onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
            className="mt-1 w-5 h-5 rounded border-2 border-muted-foreground checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary transition-smooth"
            disabled={isProcessing}
          />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
            I have read and agree to the <span className="text-primary underline">Privacy Policy</span> including photo and video restrictions
          </span>
        </label>
        {errors.agreeToPrivacy && (
          <p className="text-sm text-error flex items-center space-x-1 ml-8">
            <Icon name="ExclamationCircleIcon" size={16} />
            <span>{errors.agreeToPrivacy}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isProcessing}
        className="w-full py-4 bg-neon-cyan text-background font-bold rounded-lg transition-smooth hover:scale-105 hover:shadow-glow-cyan disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
      >
        {isProcessing ? (
          <>
            <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Icon name="LockClosedIcon" size={20} />
            <span>Proceed to Payment</span>
          </>
        )}
      </button>
    </form>
  );
};

export default BookingForm;