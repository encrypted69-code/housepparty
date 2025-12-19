import Icon from '@/app/components/ui/AppIcon';
import AppImage from '@/app/components/ui/AppImage';

export default function EntertainmentSection() {
  const entertainmentFeatures = [
  {
    title: 'Live DJ Performance',
    description: 'Professional DJ spinning EDM, House, and Bollywood hits all night',
    image: "https://images.unsplash.com/photo-1723210727336-5cc362095fd7",
    alt: 'Professional DJ with headphones performing at turntables with colorful stage lights',
    icon: 'MusicalNoteIcon',
    color: 'text-neon-violet'
  },
  {
    title: 'Laser Light Show',
    description: 'State-of-the-art laser effects synchronized with music',
    image: "https://images.unsplash.com/photo-1675119552184-b417e6e87fca",
    alt: 'Vibrant laser beams in purple and blue cutting through dark nightclub atmosphere',
    icon: 'BoltIcon',
    color: 'text-neon-cyan'
  },
  {
    title: 'Dance Floor',
    description: 'Spacious LED dance floor with premium sound system',
    image: "https://images.unsplash.com/photo-1682068789645-c90caf6b32fa",
    alt: 'Crowded dance floor with people dancing under colorful disco lights and smoke effects',
    icon: 'FireIcon',
    color: 'text-neon-pink'
  },
  {
    title: 'Photo Booth',
    description: 'Instagram-worthy photo opportunities with props',
    image: "https://images.unsplash.com/photo-1727892349075-401c9df83995",
    alt: 'Group of friends posing with fun props in illuminated photo booth with neon backdrop',
    icon: 'CameraIcon',
    color: 'text-neon-lime'
  }];


  const specialAttractions = [
  { icon: 'SparklesIcon', text: 'Smoke & Fog Effects', color: 'text-neon-violet' },
  { icon: 'FireIcon', text: 'LED Wall Displays', color: 'text-neon-cyan' },
  { icon: 'MusicalNoteIcon', text: 'Premium Sound System', color: 'text-neon-pink' },
  { icon: 'BoltIcon', text: 'Strobe Lighting', color: 'text-neon-lime' },
  { icon: 'StarIcon', text: 'Mirror Ball Effects', color: 'text-neon-orange' },
  { icon: 'LightBulbIcon', text: 'Moving Head Lights', color: 'text-primary' }];


  return (
    <section id="entertainment" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="MusicalNoteIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Live Entertainment</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-violet mb-4">
            Entertainment Universe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immersive entertainment experiences that will keep you dancing all night long
          </p>
        </div>

        {/* Main Entertainment Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {entertainmentFeatures.map((feature, index) =>
          <div
            key={index}
            className="glass-effect rounded-2xl border border-border overflow-hidden transition-smooth hover:scale-105 hover:shadow-soft">

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={feature.image}
                alt={feature.alt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className={`absolute bottom-4 left-4 p-3 rounded-full bg-card/80 backdrop-blur-sm ${feature.color}`}>
                  <Icon name={feature.icon as any} size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Special Attractions Grid */}
        <div className="glass-effect p-8 rounded-2xl border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Special Attractions & Effects
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialAttractions.map((attraction, index) =>
            <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-card/50 ${attraction.color} mb-3`}>
                  <Icon name={attraction.icon as any} size={24} />
                </div>
                <p className="text-sm text-muted-foreground">{attraction.text}</p>
              </div>
            )}
          </div>
        </div>

        {/* Music Schedule */}
        <div className="mt-12 glass-effect p-8 rounded-2xl border border-primary/30 glow-violet">
          <div className="text-center mb-8">
            <Icon name="ClockIcon" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Music Schedule</h3>
            <p className="text-muted-foreground">Experience different vibes throughout the night</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 glass-effect rounded-lg border border-border">
              <p className="text-neon-cyan font-semibold mb-2">9:00 PM - 11:00 PM</p>
              <p className="text-sm text-muted-foreground">Warm-up Mix</p>
              <p className="text-xs text-muted-foreground mt-1">Chill House & Lounge</p>
            </div>
            <div className="text-center p-4 glass-effect rounded-lg border border-primary">
              <p className="text-neon-pink font-semibold mb-2">11:00 PM - 1:00 AM</p>
              <p className="text-sm text-muted-foreground">Peak Energy</p>
              <p className="text-xs text-muted-foreground mt-1">EDM & Progressive House</p>
            </div>
            <div className="text-center p-4 glass-effect rounded-lg border border-border">
              <p className="text-neon-lime font-semibold mb-2">1:00 AM - 3:00 AM</p>
              <p className="text-sm text-muted-foreground">Bollywood Blast</p>
              <p className="text-xs text-muted-foreground mt-1">Latest Hits & Classics</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}