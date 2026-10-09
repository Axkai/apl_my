import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import StoriesOverviewSection from "@/components/stories/StoriesOverviewSection";
import StoriesCollectionSection from "@/components/stories/StoriesCollectionSection";

export const metadata: Metadata = {
  title: "Stories | AllPlay Learn",
  description: "Stories that help children learn about school, featuring audio and customizable versions to support all learners.",
};

export default function StoriesPage() {
  return (
    <PageContainer>
      <PageHero
        title="Stories"
        heroGraphicSrc="/hero-bg.svg"
      />
      <StoriesOverviewSection />
      <StoriesCollectionSection />
    </PageContainer>
  );
}
