import { Leaf, Sparkles, Timer, Trees } from 'lucide-react';
import { motion } from 'motion/react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Leaf className="text-primary w-8 h-8" />,
      title: "Hair Growth",
      description: "Reduces hair fall and promotes natural regrowth by stimulating follicles."
    },
    {
      icon: <Trees className="text-primary w-8 h-8" />,
      title: "Scalp Health",
      description: "Controls dandruff and soothes dry, itchy scalp with cooling botanicals."
    },
    {
      icon: <Timer className="text-primary w-8 h-8" />,
      title: "Prevents Greying",
      description: "Enriched with henna and curry leaves to maintain natural pigmentation."
    },
    {
      icon: <Sparkles className="text-primary w-8 h-8" />,
      title: "Smooth & Shiny",
      description: "Deeply conditions to make hair soft, smooth, and naturally lustrous."
    }
  ];

  return (
    <section className="py-24 md:py-32" id="benefits">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
        <span className="font-sans text-xs font-bold tracking-widest uppercase text-primary/60">The Transformation</span>
        <h2 className="font-serif text-3xl md:text-4xl text-primary mt-4 font-medium">Why Choose Aura Herbal?</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-xl border border-outline-variant/30 botanical-shadow transition-all duration-300"
          >
            <div className="mb-6">{benefit.icon}</div>
            <h3 className="font-serif text-xl text-primary mb-3 font-medium">{benefit.title}</h3>
            <p className="font-sans text-on-surface-variant leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
