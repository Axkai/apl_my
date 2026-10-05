import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function SpecificLearningDisorderOtherConsiderationsSection() {
  return (
    <ContentSection id="other-considerations" bgColor="bg-white">
      <SectionHeader title="Other considerations" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection id="behaviour" title="Behaviour">
          <BulletList>
            <li>
              Some students might also show challenging behaviours. It’s important to remember that students are most likely trying to communicate a need or want that is not being met.
            </li>
            <li>
              See our ‘in the moment’ resource page for more information and links to practical tools you can use with students ‘in the moment’
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="eal" title="English as an additional language (EAL)">
          <BulletList>
            <li>
              Students with a specific learning disorder in reading or writing who are learning English as an additional language (EAL) may find it challenging to learn to read or write.
            </li>
            <li>
              This may be even more difficult for children who have been taught reading or writing in a language that does not use a phonetic alphabet (i.e. Chinese characters).
            </li>
            <li>
              These students will require extra support and time.
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="transitions" title="Transitions">
          <BulletList>
            <li>
              A child with a specific learning disorder may benefit from support when moving across education settings.
            </li>
            <li>
              Making clear links to what will be similar may reduce anxiety. Consider telling students what will be the same so that they know they already have some of the skills they will need.
            </li>
            <li>
              It may be helpful to teach and practice organisation and homework skills, and time- and self- management skills.
            </li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
