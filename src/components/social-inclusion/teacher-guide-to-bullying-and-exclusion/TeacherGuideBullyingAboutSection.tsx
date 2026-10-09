import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";

export default function TeacherGuideBullyingAboutSection() {
  return (
    <ContentSection id="what-is-bullying?" bgColor="bg-white">
      <SectionHeader title="What is bullying?" align="left" showPill={true}>

          <BodyText>
            Bullying is when someone repeatedly hurts, upsets or excludes another person on purpose.
          </BodyText>

          <BodyText className="font-bold">
            Bullying can include:
          </BodyText>

          <BulletList>
            <li>repeatedly calling someone hurtful names or making fun of them</li>
            <li>repeatedly leaving someone out on purpose</li>
            <li>hitting, pushing or damaging someone&apos;s things</li>
          </BulletList>

          <BodyText>
            It is important to keep in mind that not every unkind behaviour or disagreement is bullying. For example, if a child repeatedly makes fun of the same classmate even after being asked to stop, this would be bullying. But, if two friends disagree about whose turn it is and become upset while playing, this is not necessarily bullying, and is probably more of disagreement. Additionally, if a child says something mean to another child one time, this is unkind behaviour but not necessarily bullying.
          </BodyText>

      </SectionHeader>
    </ContentSection>
  );
}
