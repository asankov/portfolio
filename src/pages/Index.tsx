import { useRef, useState, useEffect, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import SideNav from "@/components/SideNav";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const index = Math.round(container.scrollTop / container.clientHeight);
    setActiveSection(index);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navigateTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ top: index * container.clientHeight, behavior: "smooth" });
  };

  return (
    <>
      <SideNav activeSection={activeSection} onNavigate={navigateTo} />
      <div ref={containerRef} className="snap-container">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
