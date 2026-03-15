import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", phone: "", grade: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-foreground rounded-3xl p-6"
      >
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Send size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary-foreground mb-2">Thank You!</h3>
            <p className="text-sm text-primary-foreground/60 mb-4">
              We'll get back to you shortly. Meanwhile, connect with us on WhatsApp for instant help.
            </p>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-primary-foreground text-balance mb-2">
              Find the Perfect School for Your Child
            </h2>
            <p className="text-sm text-primary-foreground/60 mb-6">
              Fill in a few details and our counsellors will reach out within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="btn-dark placeholder:text-primary-foreground/40 text-primary-foreground px-4 text-left"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="btn-dark placeholder:text-primary-foreground/40 text-primary-foreground px-4 text-left"
              />
              <input
                type="text"
                placeholder="Child's Grade"
                required
                value={form.grade}
                onChange={(e) => setForm({ ...form, grade: e.target.value })}
                className="btn-dark placeholder:text-primary-foreground/40 text-primary-foreground px-4 text-left"
              />
              <button type="submit" className="btn-primary mt-2 shadow-lg">
                <Send size={16} />
                Submit Enquiry
              </button>
            </form>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default CTASection;
