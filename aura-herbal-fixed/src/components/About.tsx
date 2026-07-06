import { History, Award } from 'lucide-react';
import { IMAGE_PATHS } from '../constants';

export default function About() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="our-story">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
        <img 
          className="w-1/2 md:w-1/3 object-contain" 
          alt="Aura Herbal Watermark" 
          loading="lazy"
          src={IMAGE_PATHS.LOGO} 
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8 font-medium">About Aura Herbal 🌿</h2>
        <p className="font-sans text-lg text-on-background mb-10 leading-relaxed max-w-2xl mx-auto opacity-90">
          Aura Herbal is dedicated to bringing back the power of traditional herbal hair care. Our oil is made using time-tested ingredients and methods, ensuring purity, quality, and effectiveness. We believe in natural healing and chemical-free beauty, bridging the gap between ancient rituals and modern self-care.
        </p>
        
        <div className="flex justify-center gap-12">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-container/20 transition-colors">
              <History size={28} className="text-primary" />
            </div>
            <span className="text-[10px] md:text-xs font-sans font-bold tracking-widest uppercase text-primary">TIME-TESTED</span>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-container/20 transition-colors">
              <Award size={28} className="text-primary" />
            </div>
            <span className="text-[10px] md:text-xs font-sans font-bold tracking-widest uppercase text-primary">PREMIUM QUALITY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
