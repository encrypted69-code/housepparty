import Icon from '@/app/components/ui/AppIcon';

export default function FoodMenuSection() {
  const menuCategories = [
    {
      category: 'Starters',
      icon: 'FireIcon',
      color: 'text-neon-orange',
      items: [
        { name: 'Paneer Tikka', description: 'Marinated cottage cheese with Indian spices' },
        { name: 'Chicken Malai Tikka', description: 'Creamy chicken kebabs with cashew paste' },
        { name: 'Fish Amritsari', description: 'Crispy fried fish with aromatic spices' },
        { name: 'Veg Spring Rolls', description: 'Crispy rolls with mixed vegetables' },
      ],
    },
    {
      category: 'Main Course',
      icon: 'CakeIcon',
      color: 'text-neon-lime',
      items: [
        { name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry' },
        { name: 'Dal Makhani', description: 'Black lentils in rich creamy gravy' },
        { name: 'Paneer Butter Masala', description: 'Cottage cheese in smooth tomato sauce' },
        { name: 'Biryani', description: 'Aromatic rice with choice of chicken or vegetables' },
        { name: 'Pasta Alfredo', description: 'Creamy white sauce pasta' },
        { name: 'Grilled Fish', description: 'Herb-marinated fish fillet' },
      ],
    },
    {
      category: 'Breads & Rice',
      icon: 'Square3Stack3DIcon',
      color: 'text-neon-cyan',
      items: [
        { name: 'Butter Naan', description: 'Soft leavened bread with butter' },
        { name: 'Garlic Naan', description: 'Naan topped with garlic and herbs' },
        { name: 'Tandoori Roti', description: 'Whole wheat flatbread' },
        { name: 'Jeera Rice', description: 'Basmati rice with cumin seeds' },
      ],
    },
    {
      category: 'Desserts',
      icon: 'SparklesIcon',
      color: 'text-neon-pink',
      items: [
        { name: 'Gulab Jamun', description: 'Soft milk dumplings in sugar syrup' },
        { name: 'Chocolate Brownie', description: 'Rich chocolate dessert with ice cream' },
        { name: 'Fruit Custard', description: 'Fresh fruits in creamy custard' },
        { name: 'Ice Cream', description: 'Assorted flavors' },
      ],
    },
  ];

  return (
    <section id="food-menu" className="py-20 px-4 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-lime/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Icon name="CakeIcon" size={20} className="text-primary" />
            <span className="text-sm font-medium text-foreground">Culinary Experience</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-violet mb-4">
            Food Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Unlimited premium buffet with diverse cuisines for add-on package holders
          </p>
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg border border-neon-lime/30">
            <Icon name="InformationCircleIcon" size={16} className="text-neon-lime" />
            <span className="text-sm text-muted-foreground">Available with Unlimited Food Package (₹1,500)</span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuCategories.map((category, index) => (
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

              {/* Menu Items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" size={20} className={`flex-shrink-0 ${category.color} mt-0.5`} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect p-6 rounded-xl border border-border text-center">
            <Icon name="ClockIcon" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Live Counters</h4>
            <p className="text-sm text-muted-foreground">Fresh food prepared on-demand</p>
          </div>
          <div className="glass-effect p-6 rounded-xl border border-border text-center">
            <Icon name="HeartIcon" size={32} className="text-secondary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Dietary Options</h4>
            <p className="text-sm text-muted-foreground">Vegetarian & non-vegetarian choices</p>
          </div>
          <div className="glass-effect p-6 rounded-xl border border-border text-center">
            <Icon name="SparklesIcon" size={32} className="text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Premium Quality</h4>
            <p className="text-sm text-muted-foreground">Fresh ingredients & expert chefs</p>
          </div>
        </div>
      </div>
    </section>
  );
}