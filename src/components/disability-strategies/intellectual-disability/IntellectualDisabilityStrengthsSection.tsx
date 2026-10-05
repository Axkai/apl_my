import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function IntellectualDisabilityStrengthsSection() {
  return (
    <ContentSection
      id="strengths"
      bgColor="bg-white"
      bgImageSrc="/strengths-bg-pattern-v2.png"
      bgImageAlt="Strengths section background pattern"
    >
      <SectionHeader
        title="Strengths"
        align="left"
        showPill={true}
        titleColor="text-white"
      />
      <SubSectionGroup layout="grid-2">
        <SubSection
          level="h3"
          title="What might be some strengths?"
          titleColor="text-white"
        >
          <BodyText className="font-bold" textColor="text-white">
            Some students with intellectual disability might:
          </BodyText>
          <BulletList textColor="text-white">
            <li>Enjoy play, and learning through play.</li>
            <li>Show lots of interest in activities that involve play.</li>
            <li>Have good fine and gross motor skill development through play.</li>
          </BulletList>
        </SubSection>

        <SubSection
          level="h3"
          title="Where might you provide support?"
          titleColor="text-white"
        >
          <BodyText className="font-bold" textColor="text-white">
            Some students with intellectual disability might:
          </BodyText>
          <BulletList textColor="text-white">
            <li>Need more time to think and understand. They might not understand instructions if they are given a lot of information at once.</li>
            <li>Take longer to learn new skills. Structure and routine may help them.</li>
            <li>Be very social and friendly, and enjoy talking and spending time with other people. However, sometimes, they might stand too close or be overfamiliar with people. A reminder about personal boundaries may be helpful.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
