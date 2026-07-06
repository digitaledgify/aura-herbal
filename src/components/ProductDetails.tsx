import { motion } from 'motion/react';
import { IMAGE_PATHS } from '../constants';

export default function ProductDetails() {
  const features = [
    { title: "Suitable for all hair types", description: "Balanced for oily, dry, and normal scalps." },
    { title: "Safe for regular use", description: "Daily or weekly ritual without build-up." },
    { title: "Lightweight & Non-sticky", description: "Quickly absorbs leaving a natural sheen." }
  ];

  return (
    <section className="py-24 md:py-32 bg-cream-dark/30" id="hair-oil">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 font-medium">Aura Herbal Hair Oil</h2>
            <p className="font-sans text-lg text-on-surface-variant mb-8 leading-relaxed">
              A powerful blend of natural herbs and oils designed to deeply nourish your scalp and strengthen your hair from root to tip. Crafted using traditional methods that preserve the potency of every botanical element.
            </p>
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center shrink-0 text-xl">
                    🌿
                  </span>
                  <div>
                    <h4 className="font-sans font-bold text-primary">{feature.title}</h4>
                    <p className="font-sans text-on-surface-variant text-sm mt-1">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg h-full w-full object-cover botanical-shadow" 
              alt="Herbal ground paste" 
              loading="lazy"
              src={IMAGE_PATHS.HERBAL_PASTE} 
            />
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg h-full w-full object-cover translate-y-8 md:translate-y-12 botanical-shadow" 
              alt="Ingredients wooden bowl" 
              loading="lazy"
              src={IMAGE_PATHS.INGREDIENT_BOWL} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
