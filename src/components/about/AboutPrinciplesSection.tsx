import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";
import BodyText from "@/components/ui/BodyText";

export default function AboutPrinciplesSection() {
  return (
    <ContentSection id="principles" bgColor="bg-white">
      <SectionHeader title="AllPlay Principles" align="left" />

      <SubSectionGroup layout="grid-3">
        <SubSection
          title="1. Evidence based."
          visualSrc="/principle-1.png"
          visualAlt="1. Evidence based icon"
        >
          <BodyText>
            AllPlay resources are backed by evidence from research. Where evidence is not yet available, expert knowledge is used while research catches up.
          </BodyText>
        </SubSection>

        <SubSection
          title="2. Meet the needs of all children."
          visualSrc="/principle-2.png"
          visualAlt="2. Meet the needs of all children icon"
        >
          <BodyText>
            AllPlay aims to reach the one in five children who have a disability or developmental challenge. We focus on what children can do (i.e., their strengths) and strive to create programs that are culturally sensitive.
          </BodyText>
        </SubSection>

        <SubSection
          title="3. Focus on real inclusion."
          visualSrc="/principle-3.png"
          visualAlt="3. Focus on real inclusion icon"
        >
          <BodyText>
            AllPlay focuses on meaningful inclusion, so children with disability can take part in everyday activities alongside other children. We support mainstream programs to be more inclusive, while respecting the preferences of each family.
          </BodyText>
        </SubSection>

        <SubSection
          title="4. Change the world and not the child."
          visualSrc="/principle-4.png"
          visualAlt="4. Change the world and not the child icon"
        >
          <BodyText>
            When children are not fully included, the barriers are often in the environment or the way things are done—not in the child. AllPlay works to remove these barriers and create environments that include every child.
          </BodyText>
        </SubSection>

        <SubSection
          title="5. Partner to make change happen."
          visualSrc="/principle-5.png"
          visualAlt="5. Partner to make change happen icon"
        >
          <BodyText>
            AllPlay brings together research, governments, community organisations, educators, coaches, children and families to develop our programs. By working together, we can create changes that make sport, dance and education more inclusive.
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
