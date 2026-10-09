import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import SocialInclusionTopicsSection from "@/components/social-inclusion/SocialInclusionTopicsSection";

export const metadata: Metadata = {
  title: "Social Inclusion | AllPlay Learn",
  description: "Evidence-based approaches, peer mediation, and teacher guidance for supporting social inclusion and reducing exclusion at school.",
};

export default function SocialInclusionPage() {
  return (
    <PageContainer>
      <PageHero
        title="Social Inclusion"
        heroGraphicSrc="/hero-bg-2.svg"
      />
      <SocialInclusionTopicsSection />
    </PageContainer>
  );
}
