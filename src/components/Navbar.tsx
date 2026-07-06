import { ShoppingBag, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGE_PATHS } from '../constants';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-cream/95 backdrop-blur-sm border-b border-primary-container/10 shadow-[0_4px_20px_-10px_rgba(27,67,50,0.1)]">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img 
            alt="Aura Herbal Logo" 
            className="h-14 md:h-16 w-auto object-contain" 
            src={IMAGE_PATHS.LOGO} 
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {[
            { label: 'Shop', href: '#order' },
            { label: 'Hair Oil', href: '#hair-oil' },
            { label: 'Ingredients', href: '#ingredients' },
            { label: 'Our Story', href: '#our-story' },
          ].map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="font-serif text-xs tracking-widest uppercase text-primary/70 hover:text-primary transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a 
            href="#order" 
            aria-label="Go to order section"
            className="text-primary cursor-pointer hover:opacity-70 transition-opacity"
          >
            <ShoppingBag size={24} />
          </a>
          <a 
            href="https://wa.me/919080407843?text=Hi%20I%20want%20to%20order%20Aura%20Herbal%20Hair%20Oil"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary-container text-white px-6 py-2 rounded-lg font-sans text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
