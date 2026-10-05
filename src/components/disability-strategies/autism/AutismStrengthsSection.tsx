import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AutismStrengthsSection() {
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
            Some autistic students might:
          </BodyText>
          <BulletList textColor="text-white">
            <li>Have strong visual skills, such as noticing details, finding things, or recognising patterns.</li>
            <li>Be good at recognising sounds, music, or rhythms.</li>
            <li>Enjoy pattern-finding, problem-solving, and logical thinking.</li>
            <li>Develop deep knowledge about topics they are interested in.</li>
            <li>Think creatively and come up with unique ideas or solutions.</li>
            <li>Have strengths in understanding how objects work and how things fit together.</li>
          </BulletList>
        </SubSection>

        <SubSection
          level="h3"
          title="Where might you provide support?"
          titleColor="text-white"
        >
          <BodyText className="font-bold" textColor="text-white">
            Some autistic students might:
          </BodyText>
          <BulletList textColor="text-white">
            <li>Find social situations challenging and need support in understanding emotions or social cues.</li>
            <li>Benefit from clear, concrete language and examples when learning.</li>
            <li>Need support to know when and how to join activities or play with others.</li>
            <li>Need support to understand instructions and use skills across different situations.</li>
            <li>Benefit from advanced warning and planning when routines, plans, or activities change.</li>
            <li>Be sensitive to sounds, textures, lights, or other sensory experiences.</li>
            <li>Find some motor tasks, such as writing or drawing, challenging.</li>
            <li>Become overwhelmed at times and need support to manage strong emotions.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
