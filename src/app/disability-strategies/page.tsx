import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import DisabilityTopicsSection from "@/components/disability-strategies/DisabilityTopicsSection";

export const metadata: Metadata = {
  title: "Disability Strategies | AllPlay Learn",
  description: "Evidence-based strategies and information for supporting children with disabilities and developmental challenges in education settings.",
};

export default function DisabilityStrategiesPage() {
  return (
    <PageContainer>
      <PageHero
        title="Disability Strategies"
        heroGraphicSrc="/page-hero-bg.png"
      />
      <DisabilityTopicsSection />
    </PageContainer>
  );
}
