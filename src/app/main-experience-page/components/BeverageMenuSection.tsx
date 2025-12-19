import Icon from '@/app/components/ui/AppIcon';

export default function BeverageMenuSection() {
  const beverageCategories = [
    {
      category: 'Premium Spirits',
      icon: 'BeakerIcon',
      color: 'text-neon-orange',
      items: [
        'Vodka - Absolut, Smirnoff',
        'Whisky - Johnnie Walker, Jack Daniels',
        'Rum - Bacardi, Captain Morgan',
        'Gin - Bombay Sapphire, Tanqueray',
        'Tequila - Jose Cuervo, Patron',
      ],
    },
    {
      category: 'Signature Cocktails',
      icon: 'SparklesIcon',
      color: 'text-neon-pink',
      items: [
        'Moonlight Mojito - Fresh mint & lime',
        'Fiesta Margarita - Classic tequila blend',
        'Purple Haze - Vodka with berry infusion',
        'Disco Daiquiri - Rum with tropical fruits',
        'Electric Blue - Gin with blue curacao',
      ],
    },
    {
      category: 'Beer & Wine',
      icon: 'Square3Stack3DIcon',
      color: 'text-neon-cyan',
      items: [
        'Domestic Beer - Kingfisher, Budweiser',
        'Premium Beer - Corona, Heineken',
        'Red Wine - Cabernet, Merlot',
        'White Wine - Chardonnay, Sauvignon',
        'Sparkling Wine - Prosecco',
      ],
    },
    {
      category: 'Non-Alcoholic',
      icon: 'CakeIcon',
      color: 'text-neon-lime',
      items: [
        'Fresh Fruit Juices',
        'Soft Drinks - Coke, Sprite, Fanta',
        'Mocktails - Virgin Mojito, Pina Colada',
        'Energy Drinks - Red Bull',
        'Mineral Water',
      ],
    },
  ];

  return (
    <section id="beverage-menu" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="BeakerIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Bar Menu</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-cyan mb-4">
            Beverages & Alcohol
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Premium bar with unlimited drinks for add-on package holders
          </p>
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg border border-neon-orange/30">
            <Icon name="InformationCircleIcon" size={16} className="text-neon-orange" />
            <span className="text-sm text-muted-foreground">Available with Unlimited Alcohol Package (₹2,500)</span>
          </div>
        </div>

        {/* Beverage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {beverageCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl border border-border transition-smooth hover:shadow-soft"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-border">
                <div className={`p-2 rounded-lg bg-card/50 ${category.color}`}>
                  <Icon name={category.icon as any} size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">{category.category}</h3>
              </div>

              {/* Beverage Items */}
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className={`flex-shrink-0 ${category.color}`} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Service Banner */}
        <div className="mt-12 glass-effect p-6 rounded-xl border border-accent/30">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Icon name="ShieldCheckIcon" size={32} className="text-accent flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground text-lg mb-2">Responsible Service of Alcohol</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Valid ID required for age verification (18+ only)</li>
                <li>• Professional bartenders trained in responsible service</li>
                <li>• We reserve the right to refuse service to intoxicated guests</li>
                <li>• Complimentary water and non-alcoholic options always available</li>
                <li>• Please drink responsibly and arrange safe transportation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bar Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect p-6 rounded-xl border border-border text-center">
            <Icon name="UserGroupIcon" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Expert Bartenders</h4>
            <p className="text-sm text-muted-foreground">Professional mixologists crafting perfect drinks</p>
          </div>
          <div className="glass-effect p-6 rounded-xl border border-border text-center">
            <Icon name="ClockIcon" size={32} className="text-secondary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">All Night Service</h4>
            <p className="text-sm text-muted-foreground">Bar open from 9 PM to 3 AM</p>
          </div>
          <div className="glass-effect p-6 rounded-xl border border-border text-center">
            <Icon name="SparklesIcon" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Premium Selection</h4>
            <p className="text-sm text-muted-foreground">Top-shelf spirits and craft cocktails</p>
          </div>
        </div>
      </div>
    </section>
  );
}