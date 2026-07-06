import { Instagram, MessageCircle } from 'lucide-react';
import { IMAGE_PATHS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-primary-container text-white pt-20 pb-10 border-t border-gold/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="mb-6">
            <img 
              alt="Aura Herbal Logo" 
              className="h-16 w-auto object-contain opacity-90" 
              src={IMAGE_PATHS.LOGO} 
            />
          </div>
          <p className="font-serif text-sm leading-relaxed text-cream/60">
            Ancient Wisdom, Bottled. Experience the purest form of Ayurvedic hair care.
          </p>
        </div>
        
        <div>
          <h4 className="font-sans font-bold text-sm tracking-widest uppercase mb-6 text-cream/90">Navigation</h4>
          <ul className="space-y-4 font-serif text-sm">
            {[
              { label: 'Shop', href: '#order' },
              { label: 'Our Story', href: '#our-story' },
              { label: 'Hair Oil', href: '#hair-oil' },
            ].map(item => (
              <li key={item.label}>
                <a href={item.href} className="text-cream/60 hover:text-white transition-all duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-sans font-bold text-sm tracking-widest uppercase mb-6 text-cream/90">Support</h4>
          <ul className="space-y-4 font-serif text-sm">
            {[
              { label: 'Privacy Policy', href: '#privacy-policy' },
              { label: 'Shipping', href: '#shipping' },
              { label: 'Contact Us', href: 'https://wa.me/919080407843?text=Hi%2C%20I%20have%20a%20question%20about%20Aura%20Herbal%20Hair%20Oil', external: true },
            ].map(item => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-cream/60 hover:text-white transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-sans font-bold text-sm tracking-widest uppercase mb-6 text-cream/90">Join the Tribe</h4>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/auraherbal._" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Aura Herbal on Instagram"
              className="text-gold hover:scale-110 transition-transform"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/919080407843?text=Hi%20I%20want%20to%20order%20Aura%20Herbal%20Hair%20Oil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Aura Herbal on WhatsApp"
              className="text-gold hover:scale-110 transition-transform"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-20 pt-8 border-t border-white/5 text-center">
        <p className="font-serif text-sm text-cream/30">
          © {new Date().getFullYear()} Aura Herbal. Ancient Wisdom, Bottled.
        </p>
      </div>
    </footer>
  );
}
