import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import IntellectualDisabilityAboutSection from "@/components/disability-strategies/intellectual-disability/IntellectualDisabilityAboutSection";
import IntellectualDisabilityStrengthsSection from "@/components/disability-strategies/intellectual-disability/IntellectualDisabilityStrengthsSection";
import IntellectualDisabilityStrategiesSection from "@/components/disability-strategies/intellectual-disability/IntellectualDisabilityStrategiesSection";
import IntellectualDisabilityBestPracticeSection from "@/components/disability-strategies/intellectual-disability/IntellectualDisabilityBestPracticeSection";
import IntellectualDisabilityCurriculumSection from "@/components/disability-strategies/intellectual-disability/IntellectualDisabilityCurriculumSection";
import IntellectualDisabilityOtherConsiderationsSection from "@/components/disability-strategies/intellectual-disability/IntellectualDisabilityOtherConsiderationsSection";
import IntellectualDisabilityResourcesSection from "@/components/disability-strategies/intellectual-disability/IntellectualDisabilityResourcesSection";

export const metadata: Metadata = {
  title: "Intellectual Disability | Disability Strategies | AllPlay Learn",
  description: "Evidence-based strategies, strengths, and curriculum considerations for supporting primary school students with intellectual disability.",
};

const jumpLinks = [
  { label: "About", href: "#about-intellectual-disability" },
  { label: "Strengths", href: "#strengths" },
  { label: "Evidence-based strategies", href: "#evidence-based-strategies" },
  { label: "Best practice tips", href: "#best-practice-tips" },
  { label: "Curriculum considerations", href: "#curriculum-considerations" },
  { label: "Other considerations", href: "#other-considerations" },
  { label: "Relevant resources", href: "#relevant-resources" },
];

export default function IntellectualDisabilityStrategyPage() {
  return (
    <PageContainer>
      <PageHero
        title="Intellectual Disability"
        heroGraphicSrc="/hero-bg.svg"
        jumpLinks={jumpLinks}
      />
      <IntellectualDisabilityAboutSection />
      <IntellectualDisabilityStrengthsSection />
      <IntellectualDisabilityStrategiesSection />
      <IntellectualDisabilityBestPracticeSection />
      <IntellectualDisabilityCurriculumSection />
      <IntellectualDisabilityOtherConsiderationsSection />
      <IntellectualDisabilityResourcesSection />
    </PageContainer>
  );
}
