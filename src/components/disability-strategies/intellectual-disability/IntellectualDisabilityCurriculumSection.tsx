import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function IntellectualDisabilityCurriculumSection() {
  return (
    <ContentSection id="curriculum-considerations" bgColor="bg-white">
      <SectionHeader title="Curriculum considerations" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection
          id="curriculum-general"
          level="h4"
          title="General"
        >
          <BulletList>
            <li>Teachers may consider preparing additional simpler exercises for students to complete in class.</li>
            <li>It may be helpful to provide additional time for students to complete tasks in school (i.e., homework or during exams).</li>
            <li>Clearly explain and model the tasks and instructions. Break tasks into smaller components and model each step. Provide lots of opportunities to practise before proceeding to more difficult tasks and skills.</li>
            <li>They may need one-to-one help and instructions or information to be repeated lots of times.</li>
            <li>Parents can consider preparing the student at home (i.e., go through lesson materials) before entering the week’s lesson plan to ease learning.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="curriculum-english"
          level="h4"
          title="English"
        >
          <BulletList>
            <li>Students with an intellectual disability may need support with literacy skills (i.e., mnemonics/memory strategies and flash cards).</li>
            <li>Use self-regulated strategy development to help students with writing skills. First, present and discuss a writing strategy with students. Clearly model and help students understand and memorise this strategy (e.g., through a mnemonic device). Finally, support students to apply this strategy with increasing independence.</li>
            <li>Use visual supports and simple games (e.g., matching, sorting) to support and reinforce learning of new skills.</li>
            <li>Use phonic-based instruction. Teach students decoding strategies (e.g., associating letters with sounds, putting sounds together). Consider helping students memorise common, high-frequency words.</li>
            <li>Make reading interactive. Read text aloud to students, incorporating and posing questions and comments throughout. Consider breaking students into smaller groups to discuss and make meaning of the text. This could include students summarising, questioning, clarifying and making predictions about the text.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="curriculum-other-languages"
          level="h4"
          title="Other languages"
        >
          <BulletList>
            <li>Students with an intellectual disability may need support with learning a new language.</li>
            <li>Assess whether learning a language will be advantageous to them on a case-by-case basis.</li>
            <li>If they learn a language, focus on areas of strength and build from there.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="curriculum-mathematics"
          level="h4"
          title="Mathematics"
        >
          <BulletList>
            <li>Consider how to provide clear and short wording of maths problems. For example, using different ways of describing the same object may be confusing. For example, 'he took away three carrots, how many vegetables does he have now?'.</li>
            <li>Some students may learn well through sensory learning. This includes pointing to ‘touch points’ on a written number (dots/lines that they can count embedded into a number) or looking at a picture that shows the maths problem. Using manipulatives and visuals can be helpful in presenting and explaining new concepts and solving problems.</li>
            <li>Clear and exact instructions for strategies or methods for solving problems may be helpful. For example, consider modelling how to solve a maths problem while talking through the problem-solving steps you are taking. Students may need to be taught how to use those strategies across different problems.</li>
            <li>Divide learning into smaller, sequential steps with lots of repetition. Break down harder skills into smaller, more manageable steps. Carefully plan lessons to progress from easier to more difficult tasks. Present students with similar questions and activities until they show the target level of mastery before progressing to the next level. Use prompts and feedback to maximise the chances of students performing the target skill. Provide recognition of their efforts and encouragement.</li>
            <li>Consider pairing the student with another student who can demonstrate maths skills and give instructions or help. See <a href="?tab=t.4x4tqckowy5" className="text-[#014996] underline hover:text-[#003366]">Peer Mediation</a> for important tips for pairing students.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="curriculum-science"
          level="h4"
          title="Science"
        >
          <BodyText>
            Visual representations, such as graphic organisers, could be useful in helping students organise information and learn the connection between different concepts.
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
