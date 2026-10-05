import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AdhdStrengthsSection() {
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
            Some students with ADHD might:
          </BodyText>
          <BulletList textColor="text-white">
            <li>Have similar thinking and communication skills to other students.</li>
            <li>Show creativity, such as coming up with more imaginative ideas or thinking 'outside the box'.</li>
            <li>Have strong feelings of self-competence.</li>
            <li>Be able to answer their teacher back eagerly or help out with tasks quickly.</li>
            <li>Be excited to learn new things and be more involved in their learning. They may be more willing to raise their hand and ask relevant questions.</li>
          </BulletList>
        </SubSection>

        <SubSection
          level="h3"
          title="Where might you provide support?"
          titleColor="text-white"
        >
          <BodyText className="font-bold" textColor="text-white">
            Some students with ADHD might:
          </BodyText>
          <BulletList textColor="text-white">
            <li>Sometimes look like they are ‘daydreaming’ or uninterested in an activity. They may not respond straight away when their name is called.</li>
            <li>Need extra time and support with learning tasks such as reading, writing, and maths.</li>
            <li>May forget to write homework down, work on it at home, or hand it in on time. They may also have difficulties managing worksheets and other class materials.</li>
            <li>Find sitting still at their desks for long periods of time uncomfortable. They may fidget, talk to their classmates, or move around the classroom frequently. This movement can support students when learning.</li>
            <li>Need support to manage their emotions or follow social rules, such as taking turns. This can impact their relationships with other children and teachers.</li>
            <li>All these areas can affect how students with ADHD view themselves. They may need support and encouragement to help them feel positive about themselves.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
