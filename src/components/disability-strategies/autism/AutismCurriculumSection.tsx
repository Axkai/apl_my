import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AutismCurriculumSection() {
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
            <li>Students with autism are sensitive to sensory input. Ensure that the environment is not overstimulating (i.e., no loud noises or flashing lights).</li>
            <li>They struggle with generalizing concepts and skills across different settings. Manage expectations on their abstract reasoning skills and work within their capacity.</li>
            <li>Students may benefit from individualized teaching based on the child’s interest or strength.</li>
            <li>Give simple, specific and direct instructions. It is also helpful to demonstrate or model the task or behaviour, or ask another student to demonstrate.</li>
            <li>Provide specific positive feedback, lots of time to practise and reduce demand.</li>
            <li>Parents can consider preparing the student at home (i.e., go through lesson materials) before entering the week’s lesson plan to ease learning.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="curriculum-english"
          level="h4"
          title="English"
        >
          <BulletList>
            <li>Some students may need support with reading comprehension. Consider using a story map for important story elements such as the main characters, setting, beginning, middle, end. Ask comprehension questions and provide prompts that increase in support when needed (i.e. start with an open question, and move to a choice of two options if needed). Tactile and visual supports that link to the story and encourage student interaction may also be helpful.</li>
            <li>Some students with autism find pronouns (a word that replaces a person or object, such as I, me, or you) challenging. This is possibly because children with autism often echo other people’s speech and have trouble understanding the social rules of language. They may need help to identify the pronouns when reading.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="curriculum-other-languages"
          level="h4"
          title="Other languages"
        >
          <BulletList>
            <li>Students with autism who have communication challenges may need support with learning a new language.</li>
            <li>Assess whether learning a language will be of advantage to them on a case-by-case basis.</li>
            <li>If they are learning a new language, focus on areas of strength and build from there.</li>
            <li>Breakdown tasks and provide high reinforcements (i.e., acknowledge efforts for how many books read in a given time frame).</li>
            <li>Reduce demand for writing tasks.</li>
            <li>Students may benefit from learning through computer softwares or gamified platforms.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="curriculum-mathematics"
          level="h4"
          title="Mathematics"
        >
          <BulletList>
            <li>Some children with autism may find it difficult to connect an image of a number with ‘how many’ (the quantity) it represents. Visuals can support students by acting as a concrete example of the mathematics problem in action.</li>
            <li>Break down concepts into basic steps to ease learning.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="curriculum-science"
          level="h4"
          title="Science"
        >
          <BulletList>
            <li>Some children with autism may have much knowledge in an area of the science curriculum if it is one of their special interests. This can give them an opportunity to share their knowledge with others.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
