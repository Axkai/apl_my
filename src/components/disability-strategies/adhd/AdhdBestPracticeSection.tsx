import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AdhdBestPracticeSection() {
  return (
    <ContentSection id="best-practice-tips" bgColor="bg-white">
      <SectionHeader title="Best practice tips" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection level="h4" title="Get student feedback">
          <BulletList>
            <li>Check in with students to see how they’re travelling. Some children may need adjustments to the teaching pace, their goals or the level of support given.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Movement and Using special sitting tools">
          <BulletList>
            <li><strong>Allow regular movement breaks</strong>: Short opportunities to move can help students stay focused, manage their energy levels, and support learning. Therapy balls and cushions may improve focus and restlessness for some students.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Support Social Interactions">
          <BulletList>
            <li>Create a warm and fun environment.</li>
            <li>Children may need help to get along with others. Show them how to listen, make conversation, talk politely, help others, be assertive, give and accept praise and opinions, manage conflicts, and cooperate in play.</li>
            <li>Role-play different situations and give children feedback as they practise these skills.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Build a positive relationship with students">
          <BodyText>
            <strong>High quality relationships between students and teachers can help learning and socio-emotional outcomes</strong>. Sensitive and responsive teachers who are kind, approachable and easy to talk to are key.
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
