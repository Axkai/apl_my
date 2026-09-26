import React from "react";
import type { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import GuideHero from "@/components/getting-started/GuideHero";
import InclusionDiagramSection from "@/components/getting-started/InclusionDiagramSection";
import InclusiveStepsSection from "@/components/getting-started/InclusiveStepsSection";

export const metadata: Metadata = {
  title: "Getting Started - Teacher Guide | AllPlay Learn Malaysia",
  description:
    "Practical guide for primary school teachers on inclusive education, Disability Standards for Education, and strengths-based strategies.",
};

export default function GettingStartedPage() {
  return (
    <PageContainer>
      <GuideHero />
      <InclusionDiagramSection />
      <InclusiveStepsSection />
    </PageContainer>
  );
}
