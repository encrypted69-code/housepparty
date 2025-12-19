import Icon from '@/app/components/ui/AppIcon';

export default function InclusionsSection() {
  const inclusions = [
    {
      icon: 'MusicalNoteIcon',
      title: 'Live DJ Performance',
      description: 'Professional DJ spinning the hottest tracks all night long',
      color: 'text-neon-violet',
    },
    {
      icon: 'LightBulbIcon',
      title: 'Premium Lighting & Effects',
      description: 'State-of-the-art disco lights, lasers, and smoke effects',
      color: 'text-neon-cyan',
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Professional Security',
      description: 'Trained security personnel ensuring your safety',
      color: 'text-neon-pink',
    },
    {
      icon: 'HomeModernIcon',
      title: 'Climate-Controlled Venue',
      description: 'Comfortable air-conditioned space throughout',
      color: 'text-neon-lime',
    },
    {
      icon: 'WifiIcon',
      title: 'High-Speed WiFi',
      description: 'Complimentary internet access for sharing moments',
      color: 'text-neon-orange',
    },
    {
      icon: 'TruckIcon',
      title: 'Valet Parking',
      description: 'Secure parking facility with valet service',
      color: 'text-primary',
    },
    {
      icon: 'SparklesIcon',
      title: 'Welcome Drink',
      description: 'Complimentary signature cocktail on arrival',
      color: 'text-secondary',
    },
    {
      icon: 'ArchiveBoxIcon',
      title: 'Coat Check Service',
      description: 'Secure storage for your belongings',
      color: 'text-accent',
    },
  ];

  return (
    <section id="inclusions" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="GiftIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Complimentary</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-cyan mb-4">
            What's Included
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium amenities and services included with every entry pass at no extra cost
          </p>
        </div>

        {/* Inclusions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inclusions.map((inclusion, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl border border-border transition-smooth hover:scale-105 hover:shadow-soft hover:border-primary/50"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-card/50 ${inclusion.color} mb-4`}>
                <Icon name={inclusion.icon as any} size={24} />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{inclusion.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{inclusion.description}</p>
            </div>
          ))}
        </div>

        {/* Value Proposition Banner */}
        <div className="mt-12 glass-effect p-8 rounded-2xl border border-primary/30 glow-violet">
          <div className="text-center">
            <Icon name="SparklesIcon" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Over ₹5,000 Worth of Premium Services Included
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every entry pass comes with these complimentary premium amenities, ensuring you have an unforgettable experience from the moment you arrive until the last song plays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}