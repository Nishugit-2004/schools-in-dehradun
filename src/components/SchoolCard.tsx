import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { School } from "@/data/schools";

interface SchoolCardProps {
  school: School;
  index: number;
}

const SchoolCard = ({ school, index }: SchoolCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setExpanded(!expanded)}
      className="card-surface cursor-pointer"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
        <img
          src={school.image}
          alt={school.name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-card/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-foreground">
          {school.board}
        </div>
      </div>

      <h3 className="text-lg font-bold text-foreground leading-tight mb-1">
        {school.name}
      </h3>
      <p className="text-sm text-muted flex items-center gap-1 mb-3">
        <MapPin size={14} /> {school.location}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {school.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted leading-relaxed text-pretty mb-4">
              {school.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-2 gap-3">
        <button
          className="btn-primary"
          onClick={(e) => e.stopPropagation()}
        >
          Enquire
        </button>
        <button
          className="btn-secondary"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          {expanded ? "Collapse" : "View Details"}
        </button>
      </div>
    </motion.div>
  );
};

export default SchoolCard;
