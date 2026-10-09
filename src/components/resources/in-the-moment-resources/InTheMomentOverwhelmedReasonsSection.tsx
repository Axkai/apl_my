import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";

export default function InTheMomentOverwhelmedReasonsSection() {
  return (
    <ContentSection id="common-reasons-a-student-may-become-overwhelmed" bgColor="bg-white">
      <SectionHeader title="Common Reasons a Student May Become Overwhelmed" align="left" showPill={true}>
        <BodyText>
          A student may be experiencing:
        </BodyText>

        <BulletList>
          <li>Physical discomfort, illness, tiredness, hunger, or pain</li>
          <li>Sensory sensitivities, such as sensitivity to loud noises or bright lights.</li>
          <li>Difficulty communicating their wants, needs, or feelings</li>
          <li>Boredom or a lack of engagement</li>
          <li>Unexpected changes to routines or plans</li>
          <li>Difficulty with transitions between activities</li>
          <li>Difficulty understanding or completing a task</li>
          <li>Difficulty in interpersonal relationships</li>
        </BulletList>
      </SectionHeader>
    </ContentSection>
  );
}
