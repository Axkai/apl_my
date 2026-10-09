import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import InTheMomentOverviewSection from "@/components/resources/in-the-moment-resources/InTheMomentOverviewSection";
import InTheMomentRegulationSection from "@/components/resources/in-the-moment-resources/InTheMomentRegulationSection";
import InTheMomentOverwhelmedReasonsSection from "@/components/resources/in-the-moment-resources/InTheMomentOverwhelmedReasonsSection";
import InTheMomentRespondingSection from "@/components/resources/in-the-moment-resources/InTheMomentRespondingSection";

export const metadata: Metadata = {
  title: "In the Moment Resources | Resources | AllPlay Learn",
  description: "Tools, strategies, and resources to support students with skills such as asking for help, solving problems, and regulating emotions and behaviours.",
};

export default function InTheMomentResourcesPage() {
  return (
    <PageContainer>
      <PageHero
        title="In the Moment Resources"
        heroGraphicSrc="/hero-bg.svg"
      />
      <InTheMomentOverviewSection />
      <InTheMomentRegulationSection />
      <InTheMomentOverwhelmedReasonsSection />
      <InTheMomentRespondingSection />
    </PageContainer>
  );
}
