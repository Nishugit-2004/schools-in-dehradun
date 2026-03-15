import { motion } from "framer-motion";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  "All Schools",
  "Boarding Schools",
  "Girls Schools",
  "CBSE Schools",
  "International",
  "Budget Friendly",
];

const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="sticky top-0 z-30 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="flex gap-2.5 px-5 py-3 overflow-x-auto hide-scrollbar scroll-snap-x">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(filter)}
            className={
              activeFilter === filter ? "filter-chip-active snap-start" : "filter-chip snap-start"
            }
          >
            {filter}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
