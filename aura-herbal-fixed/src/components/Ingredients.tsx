import { motion } from 'motion/react';

export default function Ingredients() {
  const sections = [
    {
      title: "Leaves & Flowers",
      icon: "🌿",
      items: ["Sembaruthi (Hibiscus)", "Karuvepillai (Curry Leaves)", "Marudhani (Henna)", "Veppillai (Neem)", "Koyya Ilai (Guava)"]
    },
    {
      title: "Scalp Care",
      icon: "💆",
      items: ["Vettiver", "Vendhaiyam (Fenugreek)", "Karunjeeragam (Black Seed)", "Vembalam Pattai"]
    },
    {
      title: "Growth Boosters",
      icon: "📈",
      items: ["Nellikkai (Amla)", "Chinna Vengaiyam (Small Onion)", "Karisalankanni (Bhringraj)"]
    },
    {
      title: "Pure Oil Base",
      icon: "💧",
      items: ["Hand-pressed Coconut Oil", "Traditional Lamp Oil"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-primary-container text-white" id="ingredients">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 font-medium tracking-tight">Our Herbal Ingredients 🌿</h2>
          <p className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase">100% NATURAL • NO CHEMICALS • NO ARTIFICIAL ADDITIVES</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="font-serif text-xl border-b border-white/20 pb-3 flex items-center gap-2 font-medium">
                <span className="text-lg opacity-80">{section.icon}</span> {section.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, itemIdx) => (
                  <motion.span 
                    key={itemIdx}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    className="px-4 py-2 bg-white/10 rounded-lg text-sm font-sans tracking-wide cursor-default transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-8 w-full h-px opacity-30"></div>
          <p className="italic text-white/80 font-serif text-lg">✨ Crafted with time-honored Ayurvedic wisdom for modern hair needs.</p>
        </div>
      </div>
    </section>
  );
}
