import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";

export default function PeerMediationCharacteristicsSection() {
  return (
    <ContentSection id="characteristics-of-effective-peer-mediation" bgColor="bg-white">
      <SectionHeader title="Characteristics of effective peer mediation" align="left" showPill={true}>
        <BulletList>
          <li>
            Peer mediation typically involves the inclusion of several peers as mediators. Including more than one classmate means that a student has many peers to interact with.
          </li>
          <li>
            Classmates who are well-liked tend to make great peer mediators. It may also be important to choose peer mediators who have good social and communication skills.
          </li>
          <li>
            Regular training and practice is important for successful peer mediation.
          </li>
        </BulletList>
      </SectionHeader>
    </ContentSection>
  );
}
