import { Phone, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-cream-dark/50" id="order">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl botanical-shadow p-8 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full -translate-y-1/2 translate-x-1/2 -z-0"></div>
          
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 font-medium">Start Your Hair Ritual Today</h2>
            <p className="font-sans text-lg text-on-surface-variant mb-4 max-w-2xl mx-auto">
              Experience the difference of pure herbal nutrition. Our experts are ready to guide you on your journey to healthier hair.
            </p>
            <p className="font-serif text-2xl text-primary font-semibold mb-12">₹499 <span className="font-sans text-sm text-on-surface-variant/70 font-normal">/ 200ml bottle</span></p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center rounded-xl">
                  <Phone size={24} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-xs font-sans font-bold tracking-widest uppercase text-on-surface-variant opacity-60">WHATSAPP</p>
                  <p className="font-serif text-xl md:text-2xl text-primary font-medium">+91 9080407843</p>
                </div>
              </div>
              <a 
                href="https://www.instagram.com/auraherbal._" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-70 transition-opacity"
              >
                <div className="w-12 h-12 bg-cream flex items-center justify-center rounded-xl">
                  <Instagram size={24} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] md:text-xs font-sans font-bold tracking-widest uppercase text-on-surface-variant opacity-60">INSTAGRAM</p>
                  <p className="font-serif text-xl md:text-2xl text-primary font-medium">@auraherbal._</p>
                </div>
              </a>
            </div>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919080407843?text=Hi%20I%20want%20to%20order%20Aura%20Herbal%20Hair%20Oil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary-container text-white px-8 md:px-12 py-5 md:py-6 rounded-xl font-serif text-xl md:text-2xl hover:opacity-90 transition-all shadow-xl"
            >
              Order Instantly on WhatsApp <ArrowRight size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
