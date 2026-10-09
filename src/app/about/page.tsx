import React from "react";
import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import AboutWelcomeSection from "@/components/about/AboutWelcomeSection";
import AboutPrinciplesSection from "@/components/about/AboutPrinciplesSection";
import AboutDevelopmentSection from "@/components/about/AboutDevelopmentSection";
import AboutLanguageSection from "@/components/about/AboutLanguageSection";

export const metadata: Metadata = {
  title: "Welcome to AllPlay Learn | AllPlay Learn Malaysia",
  description:
    "Learn about AllPlay Learn Malaysia, based on the AllPlay framework founded in Australia to support inclusion across education, sports and dance.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHero
        title="Welcome to AllPlay Learn"
        heroGraphicSrc="/homepage-hero-bg.svg"
        
      />
      <AboutWelcomeSection />
      <AboutPrinciplesSection />
      <AboutDevelopmentSection />
      <AboutLanguageSection />
    </PageContainer>
  );
}
