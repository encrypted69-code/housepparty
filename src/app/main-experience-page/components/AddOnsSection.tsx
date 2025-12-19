'use client';

import { useState, useEffect } from 'react';
import Icon from '@/app/components/ui/AppIcon';
import AppImage from '@/app/components/ui/AppImage';

interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
  icon: string;
  color: string;
  features: string[];
}

interface AddOnsSectionProps {
  onAddToCart: (addOnId: string) => void;
}

export default function AddOnsSection({ onAddToCart }: AddOnsSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const addOns: AddOn[] = [
  {
    id: 'unlimited-food',
    name: 'Unlimited Food Package',
    description: 'All-you-can-eat premium buffet with diverse cuisines',
    price: 1500,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17923c299-1764874486952.png",
    alt: 'Elegant buffet spread with colorful gourmet dishes on white plates at upscale restaurant',
    icon: 'CakeIcon',
    color: 'text-neon-lime',
    features: [
    'Unlimited Indian & Continental dishes',
    'Live food counters',
    'Premium dessert selection',
    'Vegetarian & non-vegetarian options']

  },
  {
    id: 'unlimited-alcohol',
    name: 'Unlimited Alcohol Package',
    description: 'Premium bar access with unlimited drinks all night',
    price: 2500,
    image: "https://images.unsplash.com/photo-1689239719024-8f0866438b46",
    alt: 'Colorful cocktails with garnishes on dark bar counter with ambient lighting',
    icon: 'BeakerIcon',
    color: 'text-neon-orange',
    features: [
    'Unlimited premium spirits',
    'Signature cocktails',
    'Beer & wine selection',
    'Professional bartender service']

  },
  {
    id: 'vip-lounge',
    name: 'VIP Lounge Access',
    description: 'Exclusive lounge area with premium seating and service',
    price: 3000,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15303cdbf-1764698977550.png",
    alt: 'Luxurious VIP lounge with plush velvet seating and ambient purple lighting',
    icon: 'StarIcon',
    color: 'text-neon-violet',
    features: [
    'Private seating area',
    'Dedicated server',
    'Priority bar service',
    'Exclusive photo opportunities']

  },
  {
    id: 'photography-package',
    name: 'Professional Photography',
    description: 'Personal photographer for your special moments',
    price: 2000,
    image: "https://images.unsplash.com/photo-1597083608558-0f819f99fa60",
    alt: 'Professional photographer with DSLR camera capturing event in dimly lit venue',
    icon: 'CameraIcon',
    color: 'text-neon-cyan',
    features: [
    '2 hours of dedicated photography',
    'Edited high-resolution photos',
    'Instant social media ready images',
    'Digital album delivery']

  }];


  return (
    <section id="add-ons" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-lime/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="PlusCircleIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Enhance Your Experience</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-violet mb-4">
            Premium Add-Ons
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elevate your night with exclusive upgrades and personalized luxury experiences
          </p>
        </div>

        {/* Add-Ons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {addOns.map((addOn) =>
          <div
            key={addOn.id}
            className="glass-effect rounded-2xl border border-border overflow-hidden transition-smooth hover:scale-105 hover:shadow-soft">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={addOn.image}
                alt={addOn.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className={`absolute top-4 right-4 p-3 rounded-full bg-card/80 backdrop-blur-sm ${addOn.color}`}>
                  <Icon name={addOn.icon as any} size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{addOn.name}</h3>
                    <p className="text-sm text-muted-foreground">{addOn.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <span className={`text-2xl font-bold ${addOn.color}`}>₹{addOn.price.toLocaleString('en-IN')}</span>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {addOn.features.map((feature, index) =>
                <div key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={16} className={`flex-shrink-0 ${addOn.color} mt-0.5`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                )}
                </div>

                {/* Add Button */}
                <button
                onClick={isHydrated ? () => onAddToCart(addOn.id) : undefined}
                disabled={!isHydrated}
                className="w-full py-3 glass-effect border border-primary/50 text-foreground font-semibold rounded-lg transition-smooth hover:scale-105 hover:border-primary hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed">

                  <span className="flex items-center justify-center space-x-2">
                    <Icon name="PlusIcon" size={20} />
                    <span>Add to Booking</span>
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Combo Offer Banner */}
        <div className="mt-12 glass-effect p-6 rounded-xl border border-neon-lime/30 glow-lime">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start space-x-4">
              <Icon name="GiftIcon" size={32} className="text-neon-lime flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-1">Combo Offer Available!</h4>
                <p className="text-sm text-muted-foreground">
                  Book Unlimited Food + Unlimited Alcohol together and save ₹500
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <span className="text-2xl font-bold text-neon-lime">₹3,500</span>
              <p className="text-xs text-muted-foreground">Instead of ₹4,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}