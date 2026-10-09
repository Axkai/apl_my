import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import PeerMediationAboutSection from "@/components/social-inclusion/peer-mediation/PeerMediationAboutSection";
import PeerMediationCharacteristicsSection from "@/components/social-inclusion/peer-mediation/PeerMediationCharacteristicsSection";
import PeerMediationTeachingSection from "@/components/social-inclusion/peer-mediation/PeerMediationTeachingSection";

export const metadata: Metadata = {
  title: "Peer Mediation | Social Inclusion | AllPlay Learn",
  description: "Research-backed approaches and guidelines for implementing peer mediation to support student social inclusion in primary schools.",
};

const jumpLinks = [
  { label: "What is peer inclusion?", href: "#so-what-is-peer-mediation?" },
  { label: "Characteristics of effective peer inclusion", href: "#characteristics-of-effective-peer-mediation" },
  { label: "Teaching peer mediation", href: "#teaching-peer-mediation" },
];

export default function PeerMediationPage() {
  return (
    <PageContainer>
      <PageHero
        title="Peer Mediation"
        heroGraphicSrc="/hero-bg.svg"
        jumpLinks={jumpLinks}
        description={
          <>
            Research has shown that <span className="font-bold">peer mediation</span> is one of the most effective approaches for supporting the inclusion of students and the development of social skills at school. Peer mediation is particularly relevant for students who find it hard to engage with peers or join in.
          </>
        }
      />
      <PeerMediationAboutSection />
      <PeerMediationCharacteristicsSection />
      <PeerMediationTeachingSection />
    </PageContainer>
  );
}
