import Icon from '@/app/components/ui/AppIcon';

export default function EventDetailsSection() {
  const eventDetails = [
    {
      icon: 'MapPinIcon',
      title: 'Venue',
      description: 'Exclusive Private Resort',
      details: 'Premium disco-themed venue with state-of-the-art sound and lighting systems',
      color: 'text-neon-violet',
      borderColor: 'border-neon-violet/30',
      glowClass: 'glow-violet',
    },
    {
      icon: 'CalendarIcon',
      title: 'Date & Time',
      description: 'December 31, 2025',
      details: '9:00 PM - 3:00 AM (6 hours of non-stop entertainment)',
      color: 'text-neon-cyan',
      borderColor: 'border-neon-cyan/30',
      glowClass: 'glow-cyan',
    },
    {
      icon: 'UserGroupIcon',
      title: 'Capacity',
      description: 'Limited to 150 Guests',
      details: 'Intimate, curated crowd for authentic connections',
      color: 'text-neon-pink',
      borderColor: 'border-neon-pink/30',
      glowClass: 'glow-pink',
    },
    {
      icon: 'MusicalNoteIcon',
      title: 'Music Genre',
      description: 'EDM, House & Bollywood',
      details: 'Live DJ performances with premium sound experience',
      color: 'text-neon-lime',
      borderColor: 'border-neon-lime/30',
      glowClass: 'glow-lime',
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Dress Code',
      description: 'Smart Casual to Party Wear',
      details: 'Express yourself while maintaining sophistication',
      color: 'text-neon-orange',
      borderColor: 'border-neon-orange/30',
      glowClass: 'glow-violet',
    },
    {
      icon: 'BoltIcon',
      title: 'Age Requirement',
      description: '18+ Only',
      details: 'Valid ID required for entry verification',
      color: 'text-primary',
      borderColor: 'border-primary/30',
      glowClass: 'glow-violet-strong',
    },
  ];

  return (
    <section id="event-details" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="InformationCircleIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Event Information</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-violet mb-4">
            Experience Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about this exclusive nightlife experience
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventDetails.map((detail, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-xl border ${detail.borderColor} ${detail.glowClass} transition-smooth hover:scale-105 hover:shadow-soft`}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 p-3 rounded-lg bg-card/50 ${detail.color}`}>
                  <Icon name={detail.icon as any} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-1">{detail.title}</h3>
                  <p className={`font-medium ${detail.color} mb-2`}>{detail.description}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Banner */}
        <div className="mt-12 glass-effect p-6 rounded-xl border border-border text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center space-x-2">
              <Icon name="CheckBadgeIcon" size={24} className="text-success" />
              <span className="text-foreground font-medium">Verified Host</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Icon name="LockClosedIcon" size={24} className="text-primary" />
              <span className="text-foreground font-medium">Privacy Guaranteed</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <Icon name="SparklesIcon" size={24} className="text-secondary" />
              <span className="text-foreground font-medium">Premium Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}