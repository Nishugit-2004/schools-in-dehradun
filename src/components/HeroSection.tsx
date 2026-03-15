import { Download, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dehradun.jpg";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={heroImage}
          alt="Scenic Dehradun school campus with Himalayan foothills"
          className="object-cover w-full h-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-[1.875rem] font-bold leading-[1.1] tracking-tight text-primary-foreground text-balance mb-3"
          >
            Top Schools in Dehradun for Your Child
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
            className="text-sm leading-relaxed text-primary-foreground/80 text-pretty mb-4"
          >
            Curated directory of Dehradun's finest boarding &amp; day schools — compare, filter, and enquire in one place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="trust-badge text-primary-foreground/60">CBSE</span>
            <span className="text-primary-foreground/30">•</span>
            <span className="trust-badge text-primary-foreground/60">Boarding</span>
            <span className="text-primary-foreground/30">•</span>
            <span className="trust-badge text-primary-foreground/60">Ranked</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        className="px-5 -mt-5 relative z-10 flex gap-3"
      >
        <button className="btn-primary flex-1 shadow-lg">
          <Download size={16} />
          Download Guide
        </button>
        <button className="btn-secondary flex-1">
          <MessageCircle size={16} />
          Enquire Now
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
