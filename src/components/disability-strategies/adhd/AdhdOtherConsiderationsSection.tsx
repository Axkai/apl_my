import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AdhdOtherConsiderationsSection() {
  return (
    <ContentSection id="other-considerations" bgColor="bg-white">
      <SectionHeader title="Other considerations" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection level="h4" title="Supporting Student Regulation and Behaviour">
          <BulletList>
            <li>Some children with ADHD may display more impulsive behaviours and take extra risks that may put themselves or others in danger.</li>
            <li>Consider using prompts and cues when necessary to prompt students to stop.</li>
            <li>Some students might also show challenging behaviours. It’s important to remember that children are most likely trying to communicate a need or want that is not being met.</li>
            <li>Understanding what might be causing a student's behaviour can help teachers respond calmly and effectively.</li>
            <li>See our ‘in the moment’ resource page for more information and links to practical tools you can use with students.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Homework">
          <BulletList>
            <li>Set homework that is clear, manageable, and can be completed in a reasonable amount of time.</li>
            <li>Help students use a homework planner and provide reminders to write homework down. Check planners regularly. Some students may need support to break larger assignments into smaller steps and plan when they will complete each task.</li>
            <li>Encourage families to establish a regular homework routine, such as completing homework at the same time each day in a quiet space. Parents can help by checking that homework is finished and providing encouragement and praise.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Transitions">
          <BulletList>
            <li>A child who has challenges with attention may benefit from support when between classroom activities and when moving across education settings.</li>
            <li>It may be helpful to teach and practise organisation and homework skills, and time- and self- management skills.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
