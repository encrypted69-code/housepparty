import Icon from '@/app/components/ui/AppIcon';
import AppImage from '@/app/components/ui/AppImage';
import Link from 'next/link';

export default function HostSection() {
  const hostInfo = {
    name: 'Arjun Mehta',
    role: 'Event Curator & Host',
    experience: '8+ Years',
    eventsHosted: '150+',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f0fd5cb-1763295525028.png",
    alt: 'Professional Indian man in black blazer smiling confidently at camera in modern office',
    bio: 'Passionate about creating unforgettable nightlife experiences, Arjun has been curating exclusive private events in Kolkata for over 8 years. With a background in hospitality management and a deep understanding of what makes a party truly special, he ensures every detail is perfect.',
    specialties: [
    'Private Event Curation',
    'Guest Experience Design',
    'Entertainment Coordination',
    'Safety & Security Management']

  };

  const stats = [
  { icon: 'CalendarIcon', value: '150+', label: 'Events Hosted', color: 'text-neon-violet' },
  { icon: 'UserGroupIcon', value: '5000+', label: 'Happy Guests', color: 'text-neon-cyan' },
  { icon: 'StarIcon', value: '4.9/5', label: 'Average Rating', color: 'text-neon-pink' },
  { icon: 'ShieldCheckIcon', value: '100%', label: 'Safety Record', color: 'text-neon-lime' }];


  const contactMethods = [
  { icon: 'CameraIcon', text: 'Instagram', color: 'text-neon-pink' }];


  return (
    <section id="host" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="UserCircleIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Your Host</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-cyan mb-4">
            Meet Your Host
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced event curator dedicated to creating unforgettable experiences
          </p>
        </div>

        {/* Host Profile Card */}
        <div className="glass-effect rounded-2xl border border-primary/30 glow-violet overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Host Image & Basic Info */}
            <div className="space-y-6">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
                <AppImage
                  src={hostInfo.image}
                  alt={hostInfo.alt}
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">{hostInfo.name}</h3>
                <p className="text-lg text-primary mb-4">{hostInfo.role}</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg border border-border">
                    <Icon name="BriefcaseIcon" size={16} className="text-neon-cyan" />
                    <span className="text-sm text-muted-foreground">{hostInfo.experience} Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg border border-border">
                    <Icon name="CalendarIcon" size={16} className="text-neon-pink" />
                    <span className="text-sm text-muted-foreground">{hostInfo.eventsHosted} Events</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Host Details */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground text-xl mb-3">About</h4>
                <p className="text-muted-foreground leading-relaxed">{hostInfo.bio}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground text-xl mb-3">Specialties</h4>
                <div className="space-y-2">
                  {hostInfo.specialties.map((specialty, index) =>
                  <div key={index} className="flex items-center space-x-3">
                      <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{specialty}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground text-xl mb-3">Contact Methods</h4>
                <div className="flex flex-wrap gap-3">
                  {contactMethods.map((method, index) =>
                  <div
                    key={index}
                    className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg border border-border">

                      <Icon name={method.icon as any} size={16} className={method.color} />
                      <span className="text-sm text-muted-foreground">{method.text}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) =>
          <div
            key={index}
            className="glass-effect p-6 rounded-xl border border-border text-center transition-smooth hover:scale-105 hover:shadow-soft">

              <Icon name={stat.icon as any} size={32} className={`${stat.color} mx-auto mb-3`} />
              <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="glass-effect p-8 rounded-2xl border border-border text-center">
          <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Have Questions? Let's Talk!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with Arjun directly to discuss your requirements, ask questions, or get personalized recommendations for your experience.
          </p>
        </div>
      </div>
    </section>);

}