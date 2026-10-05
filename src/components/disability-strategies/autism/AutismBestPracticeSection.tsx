import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AutismBestPracticeSection() {
  return (
    <ContentSection id="best-practice-tips" bgColor="bg-white">
      <SectionHeader title="Best practice tips" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection
          id="safe-space"
          level="h4"
          title="Provide a safe space"
        >
          <BulletList>
            <li>
              <span className="font-bold">Consider providing a quiet area that a child with autism can access to support them if they feel overwhelmed.</span> Having access to a trusted adult can also support students when they are feeling overwhelmed.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="minimise-noise"
          level="h4"
          title="Minimise background noise and distractions while giving instructions"
        >
          <BulletList>
            <li>
              This can help all children hear and focus on the teacher. You might need to face the group away from distractions behind you.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="ask-how-to-help"
          level="h4"
          title="Ask how to help"
        >
          <BulletList>
            <li>
              Talk to parents and the child’s support team to find out the best way to work with and support the student. You could ask parents to complete AllPlay Learn’s <a href="https://allplaylearn.org.au/primary/teacher/asd/#relevantresources" target="_blank" rel="noopener noreferrer" className="text-[#014996] underline hover:text-[#003366]">Communication Checklist</a>.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="teach-learning-strategies"
          level="h4"
          title="Teach learning strategies"
        >
          <BulletList>
            <li>
              <span className="font-bold">Use strategies that help students learn and remember skills so they can complete tasks more independently.</span> For example, break tasks into smaller steps and use memory aids or reminders to support learning.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="classroom-engagement-space"
          level="h4"
          title="Create a classroom space that supports engagement"
        >
          <BulletList>
            <li>
              <span className="font-bold">Consider trialling (and monitoring) changes to the classroom environment</span>. This may include creating designated spaces for specific classroom activities, providing enclosed areas that reduce distractions, providing spaces with dimmable or reduced lighting, and reducing detail in visual displays.
            </li>
            <li>
              <span className="font-bold">Allow regular movement breaks</span>: Short opportunities to move can help students stay focused, manage their energy levels, and support learning.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="self-disclosure"
          level="h4"
          title="Self-disclosure"
        >
          <BulletList>
            <li>
              <span className="font-bold">Some students may choose to disclose their diagnosis to peers</span>. This can be a positive or a challenging experience for students. Understanding the student's experience of disclosure, to provide support if needed, may be helpful.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="use-technology"
          level="h4"
          title="Use technology"
        >
          <BulletList>
            <li>
              <span className="font-bold">Consider how technology may support a student’s organisation and planning</span>. For example, consider the use of software or apps that can help a student to keep track of their homework tasks, or the use of a silent vibration alert on a watch to support them with self-monitoring.
            </li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
