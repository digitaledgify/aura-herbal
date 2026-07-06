import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919080407843?text=Hi!%20I%20want%20to%20order%20Aura%20Herbal%20Hair%20Oil"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white transition-shadow hover:shadow-green-500/20"
    >
      <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20"></div>
      <MessageCircle size={32} fill="currentColor" />
    </motion.a>
  );
}
