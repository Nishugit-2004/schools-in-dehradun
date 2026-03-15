import { useState, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import SchoolListing from "@/components/SchoolListing";
import HighlightsSection from "@/components/HighlightsSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { schools } from "@/data/schools";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("All Schools");

  const filteredSchools = useMemo(() => {
    if (activeFilter === "All Schools") return schools;
    return schools.filter((s) => s.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      <HeroSection />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <SchoolListing schools={filteredSchools} />
      <HighlightsSection />
      <TrustSection />
      <CTASection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
