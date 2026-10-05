import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function SpecificLearningDisorderStrengthsSection() {
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
            Some students with specific learning disorder might:
          </BodyText>
          <BulletList textColor="text-white">
            <li>Do well in, and even excel in, other areas of their learning.</li>
            <li>Have good visual-spatial skills (ability to mentally picture and move images).</li>
            <li>Have a good understanding of information taught out loud or using images.</li>
          </BulletList>
        </SubSection>

        <SubSection
          level="h3"
          title="Where might you provide support?"
          titleColor="text-white"
        >
          <BodyText className="font-bold" textColor="text-white">
            Some students with specific learning disorder might:
          </BodyText>
          <BulletList textColor="text-white">
            <li>Be less engaged with a task of a specific area of learning, or get easily distracted. They may need more time to complete the task with frequent probing to stay on track.</li>
            <li>Take longer to learn new information in a specific area of learning. They may need extra help in the area of learning they find difficult.</li>
            <li>Find other subjects challenging if there is a lot of reading. This is because it can take them much longer to read the information, and they may not understand what they read.</li>
            <li>Need support with tasks where they need to remember lots of steps.</li>
            <li>Find it difficult to find rhythms in music or text.</li>
            <li>Find gross or fine motor tasks difficult.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
