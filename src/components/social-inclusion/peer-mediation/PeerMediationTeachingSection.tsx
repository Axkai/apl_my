import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import ImageCard from "@/components/ui/ImageCard";

export default function PeerMediationTeachingSection() {
  return (
    <ContentSection id="teaching-peer-mediation" bgColor="bg-white">
      <SectionHeader title="Teaching peer mediation" align="left" showPill={true}>
        <BodyText>
          Use our <span className="font-bold">Peer Mediation</span> resource to teach children simple ways to communicate, help others join in and include their classmates. The resource can be used to introduce and practise these skills in the classroom or playground. Teachers might need to support students with this at the start until they become familiar with what to do.
        </BodyText>
      </SectionHeader>

      <div className="mt-6 w-full flex justify-center">
        <ImageCard
          src="/peer-mediation-steps.png"
          alt="Peer mediation steps poster"
        />
      </div>
    </ContentSection>
  );
}
