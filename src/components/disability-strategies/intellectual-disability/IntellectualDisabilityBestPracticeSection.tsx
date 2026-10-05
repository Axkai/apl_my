import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function IntellectualDisabilityBestPracticeSection() {
  return (
    <ContentSection id="best-practice-tips" bgColor="bg-white">
      <SectionHeader title="Best practice tips" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection
          id="supportive-environment"
          level="h4"
          title="Provide a supportive environment"
        >
          <BulletList>
            <li>
              Children might lack confidence and may worry that they will not be able to keep up with other students. Praise efforts and encourage participation.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="reduce-background-noise"
          level="h4"
          title="Reduce background noise when giving instructions"
        >
          <BulletList>
            <li>
              Avoid background noise and distractions while giving instructions to help all children hear and focus on you. You might need to face the students away from distractions behind you.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="simplify-instructions"
          level="h4"
          title="Simplify instructions and limit the information given at once"
        >
          <BulletList>
            <li>
              Some children might need simple instructions which may need to be repeated lots of times. Use simpler words, visual aids and repeat. Learning a skill might require teachers to break it down into smaller parts at first.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="ask-parents"
          level="h4"
          title="Ask parents"
        >
          <BulletList>
            <li>
              Talk to parents to find out the best way to communicate and work with their child. Parents can help you understand a student’s unique strengths and areas they need more support.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="high-probability-command"
          level="h4"
          title="Use high probability command sequences"
        >
          <BulletList>
            <li>
              <span className="font-bold">Begin with brief, achievable tasks to increase motivation.</span> Present children with tasks that are easy, quick, and likely to be completed, before presenting the target task. The momentum created through completing the initial task can increase children’s persistence and compliance with the target task. Provide recognition and encouragement.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="promote-self-determination"
          level="h4"
          title="Promote self-determination"
        >
          <BulletList>
            <li>
              <span className="font-bold">Promote self-determination.</span> Empower and teach students to make choices, set goals, be independent, and develop problem-solving abilities. Use technology as needed. For example, technology can be used by students who communicate non-verbally to indicate preference.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="errorless-learning"
          level="h4"
          title="Use errorless learning procedures"
        >
          <BulletList>
            <li>
              <span className="font-bold">Errorless learning-based teaching may be more effective than trial-and-error-based teaching for some students.</span> During errorless learning, students are not given the chance to make any errors. Instructions are followed immediately with a prompt to minimise the chances of an incorrect response (e.g., pointing or highlighting the correct answer for students). Prompts can be removed systematically over time until students can independently respond correctly.
            </li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
