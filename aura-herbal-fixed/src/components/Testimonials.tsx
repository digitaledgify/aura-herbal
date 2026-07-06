import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    { text: "My hair fall reduced within weeks!", name: "Priya S." },
    { text: "Hair feels thicker and healthier.", name: "Anjali R." },
    { text: "Very natural and effective oil.", name: "Karthik M." }
  ];

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-cream" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-16 font-medium">What Our Customers Say 💬</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white p-10 rounded-xl botanical-shadow"
            >
              <Quote className="text-primary/10 absolute top-4 right-4 w-12 h-12" strokeWidth={1} />
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="font-serif text-xl text-primary mb-6 italic leading-relaxed">"{review.text}"</p>
              <p className="font-sans text-xs font-bold tracking-widest uppercase text-on-surface-variant">— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
