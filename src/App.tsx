/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import Benefits from './components/Benefits';
import Ingredients from './components/Ingredients';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTA from './components/CTA';
import Policies from './components/Policies';
import Footer from './components/Footer';

import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-on-background selection:bg-primary-container selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductDetails />
        <Benefits />
        <Ingredients />
        <Testimonials />
        <About />
        <CTA />
        <Policies />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
