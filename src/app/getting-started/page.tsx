import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideHero from "@/components/getting-started/GuideHero";
import InclusionDiagramSection from "@/components/getting-started/InclusionDiagramSection";
import InclusiveStepsSection from "@/components/getting-started/InclusiveStepsSection";
import ResourcePromoGrid from "@/components/getting-started/ResourcePromoGrid";

export const metadata: Metadata = {
  title: "Getting Started - Teacher Guide | AllPlay Learn Malaysia",
  description:
    "Practical guide for primary school teachers on inclusive education, Disability Standards for Education, and strengths-based strategies.",
};

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <GuideHero />
        <InclusionDiagramSection />
        <InclusiveStepsSection />
        <ResourcePromoGrid />
      </main>
      <Footer />
    </div>
  );
}
