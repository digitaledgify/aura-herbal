import { MessageCircle, CheckCircle, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGE_PATHS } from '../constants';

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {['AYURVEDIC HERITAGE'].map((badge) => (
              <span key={badge} className="font-sans text-[10px] font-bold tracking-widest uppercase text-primary bg-primary-container/10 px-3 py-1.5 rounded-full border border-primary-container/20">
                {badge}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-[1.1] font-semibold tracking-tight">
            Aura Herbal — Ayurvedic Hair Oil for Hair Fall & Growth 🌿
          </h1>
          <p className="font-sans text-lg text-on-surface-variant mb-8 max-w-lg leading-relaxed">
            Pure Herbal Care for Stronger, Healthier Hair. Made with traditional Ayurvedic ingredients to reduce hair fall, boost growth, and nourish your scalp naturally.
          </p>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="font-serif text-3xl text-primary font-semibold">₹499</span>
            <span className="font-sans text-sm text-on-surface-variant/70">for 200ml</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919080407843?text=Hi%20I%20want%20to%20order%20Aura%20Herbal%20Hair%20Oil"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-white px-8 py-4 rounded-lg font-sans font-bold text-sm tracking-wide text-center flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg"
            >
              <MessageCircle size={18} /> Order on WhatsApp
            </motion.a>
            <div className="flex items-center gap-4 text-on-surface-variant/80 font-sans text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary fill-primary/10" /> 100% Natural
              </span>
            </div>
          </div>

          <div className="flex gap-8 border-t border-outline-variant pt-8">
            <div>
              <div className="text-xl md:text-2xl font-serif text-primary font-medium">Handmade</div>
              <p className="text-[10px] md:text-xs font-sans font-bold tracking-widest uppercase text-on-surface-variant mt-1">WITH CARE</p>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-primary font-medium">No Chemicals</div>
              <p className="text-[12px] font-sans font-bold tracking-widest uppercase text-on-surface-variant mt-1" style={{ width: '201.021px' }}>ONLY NATURAL INGREDIENTS</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary-container/5 rounded-full blur-3xl scale-125"></div>
          <img 
            className="relative z-10 w-full rounded-2xl botanical-shadow transform transition-transform duration-700 hover:scale-[1.02]" 
            alt="Aura Herbal Ayurvedic hair oil bottle for hair fall and hair growth" 
            src={IMAGE_PATHS.HERO_PRODUCT} 
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl botanical-shadow z-20 hidden lg:block max-w-[240px]">
            <p className="font-serif text-primary italic text-lg">"Simply transformative"</p>
            <div className="flex gap-1 text-gold mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
