import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function SpecificLearningDisorderBestPracticeSection() {
  return (
    <ContentSection id="best-practice-tips" bgColor="bg-white">
      <SectionHeader title="Best practice tips" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection id="range-of-strategies" title="Teach a range of strategies">
          <BodyText>
            It can be helpful to teach upper primary students a range of strategies for solving mathematics problems. For example, with a sum such as 68 – 64 = ?, a child could count forward from 64, count backwards from 68, or minus 4 from 8, and 60 from 60.
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
