import { motion, AnimatePresence } from "framer-motion";
import SchoolCard from "./SchoolCard";
import type { School } from "@/data/schools";

interface SchoolListingProps {
  schools: School[];
}

const SchoolListing = ({ schools }: SchoolListingProps) => {
  return (
    <section className="section-pad">
      <h2 className="text-xl font-bold text-foreground mb-1">Schools Directory</h2>
      <p className="text-sm text-muted mb-5">{schools.length} schools found</p>
      <AnimatePresence mode="popLayout">
        <motion.div layout className="flex flex-col gap-5">
          {schools.map((school, i) => (
            <SchoolCard key={school.id} school={school} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default SchoolListing;
