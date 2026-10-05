import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import AutismAboutSection from "@/components/disability-strategies/autism/AutismAboutSection";
import AutismStrengthsSection from "@/components/disability-strategies/autism/AutismStrengthsSection";
import AutismStrategiesSection from "@/components/disability-strategies/autism/AutismStrategiesSection";
import AutismBestPracticeSection from "@/components/disability-strategies/autism/AutismBestPracticeSection";
import AutismCurriculumSection from "@/components/disability-strategies/autism/AutismCurriculumSection";
import AutismOtherConsiderationsSection from "@/components/disability-strategies/autism/AutismOtherConsiderationsSection";
import AutismResourcesSection from "@/components/disability-strategies/autism/AutismResourcesSection";

export const metadata: Metadata = {
  title: "Autism | Disability Strategies | AllPlay Learn",
  description: "Evidence-based strategies, strengths, and curriculum considerations for supporting primary school students with autism.",
};

const jumpLinks = [
  { label: "About", href: "#about-autism" },
  { label: "Strengths", href: "#strengths" },
  { label: "Evidence-based strategies", href: "#evidence-based-strategies" },
  { label: "Best practice tips", href: "#best-practice-tips" },
  { label: "Curriculum considerations", href: "#curriculum-considerations" },
  { label: "Other considerations", href: "#other-considerations" },
  { label: "Relevant resources", href: "#relevant-resources" },
];

export default function AutismStrategyPage() {
  return (
    <PageContainer>
      <PageHero
        title="Autism"
        heroGraphicSrc="/page-hero-bg.png"
        jumpLinks={jumpLinks}
      />
      <AutismAboutSection />
      <AutismStrengthsSection />
      <AutismStrategiesSection />
      <AutismBestPracticeSection />
      <AutismCurriculumSection />
      <AutismOtherConsiderationsSection />
      <AutismResourcesSection />
    </PageContainer>
  );
}
