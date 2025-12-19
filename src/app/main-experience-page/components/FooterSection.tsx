import Icon from '@/app/components/ui/AppIcon';
import Link from 'next/link';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Event Details', href: '#event-details' },
    { label: 'Entry Packages', href: '#entry-packages' },
    { label: 'Add-Ons', href: '#add-ons' },
    { label: 'Food Menu', href: '#food-menu' },
    { label: 'Entertainment', href: '#entertainment' },
    { label: 'Rules & Privacy', href: '#rules-privacy' },
  ];

  const socialLinks = [
    { icon: 'CameraIcon', label: 'Instagram', color: 'text-neon-pink' },
  ];

  return (
    <footer className="py-16 px-4 lg:px-8 border-t border-border relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="18" stroke="url(#gradient1)" strokeWidth="2" />
                <path
                  d="M20 8C20 8 14 14 14 20C14 26 20 32 20 32C20 32 26 26 26 20C26 14 20 8 20 8Z"
                  fill="url(#gradient2)"
                />
                <circle cx="20" cy="20" r="4" fill="#00FFFF" />
                <defs>
                  <linearGradient id="gradient1" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#FF1493" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="14" y1="8" x2="26" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8A2BE2" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#FF1493" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display text-2xl font-bold text-gradient-violet">Moonlight Fiesta</span>
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Kolkata's most exclusive private disco experience. Where privacy meets luxury, and curation creates magic.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="MapPinIcon" size={16} className="text-primary" />
              <span>Salt Lake, Kolkata 700091</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="https://instagram.com/houseparty.sbs" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-smooth">
                <Icon name="CameraIcon" size={20} className="text-neon-pink" />
                <span className="text-sm">@houseparty.sbs</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Moonlight Fiesta. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#rules-privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link href="#rules-privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}