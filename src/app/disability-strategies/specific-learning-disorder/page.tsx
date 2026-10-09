import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import SpecificLearningDisorderAboutSection from "@/components/disability-strategies/specific-learning-disorder/SpecificLearningDisorderAboutSection";
import SpecificLearningDisorderStrengthsSection from "@/components/disability-strategies/specific-learning-disorder/SpecificLearningDisorderStrengthsSection";
import SpecificLearningDisorderStrategiesSection from "@/components/disability-strategies/specific-learning-disorder/SpecificLearningDisorderStrategiesSection";
import SpecificLearningDisorderBestPracticeSection from "@/components/disability-strategies/specific-learning-disorder/SpecificLearningDisorderBestPracticeSection";
import SpecificLearningDisorderCurriculumSection from "@/components/disability-strategies/specific-learning-disorder/SpecificLearningDisorderCurriculumSection";
import SpecificLearningDisorderOtherConsiderationsSection from "@/components/disability-strategies/specific-learning-disorder/SpecificLearningDisorderOtherConsiderationsSection";
import SpecificLearningDisorderResourcesSection from "@/components/disability-strategies/specific-learning-disorder/SpecificLearningDisorderResourcesSection";

export const metadata: Metadata = {
  title: "Specific Learning Disorder | Disability Strategies | AllPlay Learn",
  description: "Evidence-based strategies, strengths, and curriculum considerations for supporting primary school students with specific learning disorder.",
};

const jumpLinks = [
  { label: "About", href: "#about-specific-learning-disorder" },
  { label: "Strengths", href: "#strengths" },
  { label: "Evidence-based strategies", href: "#evidence-based-strategies" },
  { label: "Best practice tips", href: "#best-practice-tips" },
  { label: "Curriculum considerations", href: "#curriculum-considerations" },
  { label: "Other considerations", href: "#other-considerations" },
  { label: "Relevant resources", href: "#relevant-resources" },
];

export default function SpecificLearningDisorderStrategyPage() {
  return (
    <PageContainer>
      <PageHero
        title="Specific Learning Disorder"
        heroGraphicSrc="/hero-bg.svg"
        jumpLinks={jumpLinks}
      />
      <SpecificLearningDisorderAboutSection />
      <SpecificLearningDisorderStrengthsSection />
      <SpecificLearningDisorderStrategiesSection />
      <SpecificLearningDisorderBestPracticeSection />
      <SpecificLearningDisorderCurriculumSection />
      <SpecificLearningDisorderOtherConsiderationsSection />
      <SpecificLearningDisorderResourcesSection />
    </PageContainer>
  );
}
