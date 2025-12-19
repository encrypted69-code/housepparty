import Icon from '@/app/components/ui/AppIcon';

export default function RulesPrivacySection() {
  const houseRules = [
    {
      icon: 'ShieldCheckIcon',
      title: 'Age Verification',
      description: 'Valid government-issued ID required. Entry strictly 18+ only.',
      color: 'text-neon-violet',
    },
    {
      icon: 'CameraIcon',
      title: 'Photography Policy',
      description: 'No unauthorized photography or videography. Respect others\' privacy.',
      color: 'text-neon-cyan',
    },
    {
      icon: 'NoSymbolIcon',
      title: 'Zero Tolerance',
      description: 'No drugs, weapons, or illegal substances. Immediate removal if found.',
      color: 'text-accent',
    },
    {
      icon: 'UserGroupIcon',
      title: 'Respectful Behavior',
      description: 'Treat all guests and staff with respect. No harassment tolerated.',
      color: 'text-neon-pink',
    },
    {
      icon: 'ExclamationTriangleIcon',
      title: 'Dress Code',
      description: 'Smart casual to party wear. Management reserves right to refuse entry.',
      color: 'text-neon-lime',
    },
    {
      icon: 'HandRaisedIcon',
      title: 'Responsible Drinking',
      description: 'Drink responsibly. We reserve right to refuse service to intoxicated guests.',
      color: 'text-neon-orange',
    },
  ];

  const privacyPoints = [
    'Your personal information is encrypted and securely stored',
    'We do not share guest lists or attendance information',
    'Payment details are processed through secure gateways',
    'No social media tagging without explicit consent',
    'Event photos are shared only with attendee permission',
    'You can request data deletion at any time',
  ];

  return (
    <section id="rules-privacy" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Community Standards</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-cyan mb-4">
            Rules & Privacy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear guidelines to ensure a safe, respectful, and enjoyable experience for everyone
          </p>
        </div>

        {/* House Rules */}
        <div className="mb-16">
          <h3 className="font-display text-3xl font-bold text-foreground text-center mb-8">House Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {houseRules.map((rule, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-xl border border-border transition-smooth hover:scale-105 hover:shadow-soft"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-card/50 ${rule.color} mb-4`}>
                  <Icon name={rule.icon as any} size={24} />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">{rule.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="glass-effect p-8 rounded-2xl border border-primary/30 glow-violet">
          <div className="text-center mb-8">
            <Icon name="LockClosedIcon" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-3xl font-bold text-foreground mb-2">Privacy Commitment</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your privacy is our priority. We maintain strict confidentiality and data protection standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {privacyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 glass-effect rounded-lg border border-border">
                <Icon name="CheckCircleIcon" size={20} className="flex-shrink-0 text-success mt-0.5" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-12 glass-effect p-6 rounded-xl border border-accent/30">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Icon name="ExclamationTriangleIcon" size={32} className="text-accent flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground text-lg mb-2">Important Notice</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By booking and attending this event, you agree to abide by all house rules and privacy policies. Management reserves the right to refuse entry or remove any guest who violates these guidelines. Entry passes are non-refundable. Please drink responsibly and arrange safe transportation. For any concerns or questions, contact our host team.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}