import { useRef, useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CastAISection from "@/components/CastAISection";
import VMwareCarbonBlackSection from "@/components/VMwareCarbonBlackSection";
import DockerSection from "@/components/DockerSection";
import PaysafeSection from "@/components/PaysafeSection";
import KiwiTCMSSection from "@/components/KiwiTCMSSection";
import PublicSpeakingSection from "@/components/PublicSpeakingSection";
import PersonalProjectsSection from "@/components/PersonalProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import SideNav from "@/components/SideNav";

const sectionIds = [
  "home",
  "about",
  "projects",
  "cast-ai",
  "vmware-carbon-black",
  "docker",
  "paysafe",
  "kiwi-tcms",
  "public-speaking",
  "personal-projects",
  "skills",
  "contact",
];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  // Scroll to hash on initial load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "auto" });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(container.children) as HTMLElement[];
    const intersectingRatios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            intersectingRatios.set(index, entry.intersectionRatio);
          }
        });
        let maxRatio = 0;
        let maxIndex = 0;
        intersectingRatios.forEach((ratio, index) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxIndex = index;
          }
        });
        if (maxRatio > 0) {
          setActiveSection(maxIndex);
          const id = sectionIds[maxIndex];
          if (id) {
            const hash = id === "home" ? "" : `#${id}`;
            window.history.replaceState(null, "", `/${hash}`);
          }
        }
      },
      { root: container, threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigateTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const section = container.children[index] as HTMLElement;
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SideNav activeSection={activeSection} onNavigate={navigateTo} />
      <div ref={containerRef} className="snap-container">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CastAISection />
        <VMwareCarbonBlackSection />
        <DockerSection />
        <PaysafeSection />
        <KiwiTCMSSection />
        <PublicSpeakingSection />
        <PersonalProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
