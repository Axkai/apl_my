import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import AdhdAboutSection from "@/components/disability-strategies/adhd/AdhdAboutSection";
import AdhdStrengthsSection from "@/components/disability-strategies/adhd/AdhdStrengthsSection";
import AdhdStrategiesSection from "@/components/disability-strategies/adhd/AdhdStrategiesSection";
import AdhdBestPracticeSection from "@/components/disability-strategies/adhd/AdhdBestPracticeSection";
import AdhdCurriculumSection from "@/components/disability-strategies/adhd/AdhdCurriculumSection";
import AdhdOtherConsiderationsSection from "@/components/disability-strategies/adhd/AdhdOtherConsiderationsSection";
import AdhdResourcesSection from "@/components/disability-strategies/adhd/AdhdResourcesSection";

export const metadata: Metadata = {
  title: "Attention-deficit/hyperactivity disorder (ADHD) | Disability Strategies | AllPlay Learn",
  description: "Evidence-based strategies, strengths, and curriculum considerations for supporting primary school students with ADHD.",
};

const jumpLinks = [
  { label: "About", href: "#about-attention-deficit/hyperactivity-disorder-(adhd)" },
  { label: "Strengths", href: "#strengths" },
  { label: "Evidence-based strategies", href: "#evidence-based-strategies" },
  { label: "Best practice tips", href: "#best-practice-tips" },
  { label: "Curriculum considerations", href: "#curriculum-considerations" },
  { label: "Other considerations", href: "#other-considerations" },
  { label: "Relevant resources", href: "#relevant-resources" },
];

export default function AdhdStrategyPage() {
  return (
    <PageContainer>
      <PageHero
        title="Attention-deficit/hyperactivity disorder (ADHD)"
        heroGraphicSrc="/page-hero-bg.png"
        jumpLinks={jumpLinks}
      />
      <AdhdAboutSection />
      <AdhdStrengthsSection />
      <AdhdStrategiesSection />
      <AdhdBestPracticeSection />
      <AdhdCurriculumSection />
      <AdhdOtherConsiderationsSection />
      <AdhdResourcesSection />
    </PageContainer>
  );
}
