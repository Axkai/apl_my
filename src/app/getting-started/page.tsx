import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      {/* Main Body Container (Figma spec: 1440 Fill x 3356 Hug, Vertical Flow, Gap 0, Pb: 100px) */}
      <main className="w-full max-w-[1440px] mx-auto flex flex-col gap-0 pb-[100px] flex-1">
        <GuideHero />
        <InclusionDiagramSection />
        <InclusiveStepsSection />
      </main>
      <Footer />
    </div>
  );
}
