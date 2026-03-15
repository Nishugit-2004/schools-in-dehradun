import { GraduationCap, Shield, Globe, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    detail: "Dehradun schools consistently rank among India's top for board results and competitive exam performance.",
  },
  {
    icon: Trophy,
    title: "Sports & Activities",
    detail: "World-class infrastructure for cricket, swimming, horse riding, and over 30 extracurricular clubs.",
  },
  {
    icon: Shield,
    title: "Safe Boarding",
    detail: "24/7 campus security, trained house parents, and comprehensive wellness programs for every student.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    detail: "International exchange programs, MUN conferences, and partnerships with universities worldwide.",
  },
];

const HighlightsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="section-pad bg-secondary/50">
      <h2 className="text-xl font-bold text-foreground mb-5">Why Dehradun?</h2>
      <div className="grid grid-cols-2 gap-3">
        {highlights.map((item, i) => {
          const Icon = item.icon;
          const isExpanded = expanded === i;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setExpanded(isExpanded ? null : i)}
              className="card-surface cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground leading-tight mb-1">
                {item.title}
              </h3>
              <AnimatePresence>
                {isExpanded && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-muted leading-relaxed overflow-hidden"
                  >
                    {item.detail}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HighlightsSection;
