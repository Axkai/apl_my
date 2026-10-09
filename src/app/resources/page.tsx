import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import ResourcesWelcomeSection from "@/components/resources/ResourcesWelcomeSection";
import ResourcesStoriesSection from "@/components/resources/ResourcesStoriesSection";
import ResourcesInTheMomentSection from "@/components/resources/ResourcesInTheMomentSection";
import ResourcesClassroomSection from "@/components/resources/ResourcesClassroomSection";
import ResourcesSocialInclusionSection from "@/components/resources/ResourcesSocialInclusionSection";
import ResourcesAnxietySection from "@/components/resources/ResourcesAnxietySection";

export const metadata: Metadata = {
  title: "Resources | AllPlay Learn",
  description: "Access a wide range of posters, activity books, handouts, stories, and in-the-moment resources to support student inclusion in schools.",
};

export default function ResourcesPage() {
  return (
    <PageContainer>
      <PageHero
        title="Resources"
        heroGraphicSrc="/hero-bg.svg"
      />
      <ResourcesWelcomeSection />
      <ResourcesStoriesSection />
      <ResourcesInTheMomentSection />
      <ResourcesClassroomSection />
      <ResourcesSocialInclusionSection />
      <ResourcesAnxietySection />
    </PageContainer>
  );
}
