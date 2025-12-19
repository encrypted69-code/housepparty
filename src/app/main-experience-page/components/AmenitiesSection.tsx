import Icon from '@/app/components/ui/AppIcon';
import AppImage from '@/app/components/ui/AppImage';

export default function AmenitiesSection() {
  const amenities = [
  {
    title: 'Premium Restrooms',
    description: 'Clean, well-maintained facilities with attendants',
    image: "https://images.unsplash.com/photo-1723180890185-383b0c72a96a",
    alt: 'Modern luxury bathroom with marble countertops and ambient lighting',
    icon: 'HomeModernIcon',
    color: 'text-neon-violet'
  },
  {
    title: 'VIP Lounge Area',
    description: 'Exclusive seating zones with premium service',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15303cdbf-1764698977550.png",
    alt: 'Luxurious VIP lounge with plush velvet seating and ambient purple lighting',
    icon: 'StarIcon',
    color: 'text-neon-cyan'
  },
  {
    title: 'Outdoor Terrace',
    description: 'Open-air space for fresh air and conversations',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ce78b5ae-1764745340163.png",
    alt: 'Rooftop terrace with string lights and comfortable seating overlooking city skyline',
    icon: 'SunIcon',
    color: 'text-neon-pink'
  },
  {
    title: 'Smoking Zone',
    description: 'Designated outdoor smoking area',
    image: "https://images.unsplash.com/photo-1713861136437-ed7b2a4742f1",
    alt: 'Outdoor smoking area with comfortable seating and ambient lighting',
    icon: 'FireIcon',
    color: 'text-neon-lime'
  },
  {
    title: 'Coat Check',
    description: 'Secure storage for your belongings',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8c6946a-1764694582373.png",
    alt: 'Professional coat check counter with organized storage system',
    icon: 'ArchiveBoxIcon',
    color: 'text-neon-orange'
  },
  {
    title: 'Valet Parking',
    description: 'Convenient parking service at entrance',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c1d7597-1764674076582.png",
    alt: 'Professional valet attendant in uniform standing near luxury cars at night',
    icon: 'TruckIcon',
    color: 'text-primary'
  }];


  const facilityFeatures = [
  { icon: 'BoltIcon', text: 'High-Speed WiFi', color: 'text-neon-violet' },
  { icon: 'ShieldCheckIcon', text: '24/7 Security', color: 'text-neon-cyan' },
  { icon: 'HomeModernIcon', text: 'Climate Control', color: 'text-neon-pink' },
  { icon: 'HeartIcon', text: 'First Aid Available', color: 'text-neon-lime' },
  { icon: 'PhoneIcon', text: 'Emergency Contact', color: 'text-neon-orange' },
  { icon: 'UserGroupIcon', text: 'Professional Staff', color: 'text-primary' }];


  return (
    <section id="amenities" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="HomeModernIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Premium Facilities</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-violet mb-4">
            Venue Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            World-class facilities designed for your comfort and convenience
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {amenities.map((amenity, index) =>
          <div
            key={index}
            className="glass-effect rounded-2xl border border-border overflow-hidden transition-smooth hover:scale-105 hover:shadow-soft">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={amenity.image}
                alt={amenity.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className={`absolute bottom-4 left-4 p-3 rounded-full bg-card/80 backdrop-blur-sm ${amenity.color}`}>
                  <Icon name={amenity.icon as any} size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Facility Features */}
        <div className="glass-effect p-8 rounded-2xl border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Additional Facilities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilityFeatures.map((feature, index) =>
            <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-card/50 ${feature.color} mb-3`}>
                  <Icon name={feature.icon as any} size={24} />
                </div>
                <p className="text-sm text-muted-foreground">{feature.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}