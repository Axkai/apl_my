import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";

export default function InTheMomentRegulationSection() {
  return (
    <ContentSection id="supporting-regulation-and-behaviour" bgColor="bg-white">
      <SectionHeader title="Supporting Regulation and Behaviour" align="left" showPill={true}>
        <BodyText>
          It is important to remember:
        </BodyText>

        <BulletList>
          <li>
            When a student becomes upset or overwhelmed, it is important to stay calm yourself. Children often look to adults for cues on how to respond in stressful situations. Taking a slow breath, speaking calmly, and using your own regulation strategies can help support the student&apos;s emotional regulation.
          </li>
          <li>
            Practise using visuals and regulation strategies when students are calm. Familiar tools are easier for students to use when they are feeling overwhelmed or distressed.
          </li>
        </BulletList>
      </SectionHeader>
    </ContentSection>
  );
}
