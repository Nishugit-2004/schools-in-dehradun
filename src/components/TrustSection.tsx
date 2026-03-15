import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Award, Users } from "lucide-react";

const testimonials = [
  {
    quote: "The best decision we made for our daughter's education. The campus, the teachers, the culture — everything exceeded our expectations.",
    name: "Priya Sharma",
    relation: "Parent, Class X",
  },
  {
    quote: "My son's confidence and academic performance transformed within the first year. Dehradun's schools offer a unique environment you can't find elsewhere.",
    name: "Rajesh Gupta",
    relation: "Parent, Class VIII",
  },
  {
    quote: "From sports to academics, the holistic approach here has shaped my child into a well-rounded individual ready for the world.",
    name: "Anita Mehta",
    relation: "Parent, Class XII",
  },
];

const badges = [
  { icon: Star, label: "Top 10 Boarding Schools in India" },
  { icon: Award, label: "NABET Accredited Institutions" },
  { icon: Users, label: "50,000+ Alumni Worldwide" },
];

const TrustSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-pad">
      <h2 className="text-xl font-bold text-foreground mb-5">Trusted by Parents</h2>

      {/* Testimonial Carousel */}
      <div className="card-surface mb-6 relative min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-foreground leading-relaxed italic mb-4">
              "{testimonials[current].quote}"
            </p>
            <p className="text-sm font-bold text-foreground">
              {testimonials[current].name}
            </p>
            <p className="text-xs text-muted">
              {testimonials[current].relation}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2 mt-4">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} className="text-foreground" />
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} className="text-foreground" />
          </button>
          <div className="flex items-center gap-1.5 ml-auto">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-col gap-3">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/60"
            >
              <Icon size={18} className="text-accent shrink-0" />
              <span className="text-sm font-medium text-foreground">{badge.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustSection;
