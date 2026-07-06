export default function Policies() {
  return (
    <section className="py-16 bg-cream border-t border-outline-variant/30" id="policies">
      <div className="max-w-4xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div id="shipping">
          <h3 className="font-serif text-xl text-primary mb-3 font-medium">Shipping</h3>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            Orders are confirmed over WhatsApp and typically dispatched within 1-2 business days.
            Delivery across Tamil Nadu takes 2-4 days; other parts of India may take 4-7 days.
            Shipping cost, if any, is shared at the time of order confirmation.
          </p>
        </div>
        <div id="privacy-policy">
          <h3 className="font-serif text-xl text-primary mb-3 font-medium">Privacy Policy</h3>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            We only use the details you share with us (name, phone number, address) to process
            and deliver your order. We never sell or share your information with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}
