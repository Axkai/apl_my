import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AdhdCurriculumSection() {
  return (
    <ContentSection id="curriculum-considerations" bgColor="bg-white">
      <SectionHeader title="Curriculum considerations" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection level="h4" title="General">
          <BulletList>
            <li>Students with ADHD require more movement breaks in between tasks.</li>
            <li>It may be helpful to provide sufficient encouragement and reinforcement to motivate the students to initiate a task.</li>
            <li>Give simple, specific and direct instructions. It is also helpful to demonstrate or model the task or behaviour, or ask another student to demonstrate.</li>
            <li>Classes may be more interactive to maintain engagement.</li>
            <li>Provide clear and specific feedback.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="English">
          <BulletList>
            <li>Some students with ADHD may find reading and comprehension manageable with additional support in written expression, spelling and using structure and logic when communicating.</li>
            <li>Other students may benefit from extra guidance organising and expressing their ideas, or they may lose track of their original ideas. Planning out ideas before writing, or using pictorial or word cues, can help them stay on track. For instance, visual representations, such as graphic organisers, could be useful in helping students organise information and learn the connection between different concepts.</li>
            <li>Consider using computer software that teaches literacy skills. Reading and typing using a computer rather than hand writing on paper may be helpful for some students.</li>
            <li>Use self-regulated strategy development to help students with writing skills. First, present and discuss a writing strategy with students. Clearly model and help students understand and memorise this strategy (e.g., through a mnemonic device). Finally, support students to apply this strategy with increasing independence.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Other Languages">
          <BulletList>
            <li>Students with ADHD and a specific learning disorder may find learning new phonetics difficult. They may benefit from learning languages that uses non-phonetic alphabets (i.e. Chinese characters).</li>
            <li>Reduce the load of tasks that require copying.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Mathematics">
          <BulletList>
            <li>Computer software may help students learn and practise numeracy skills.</li>
            <li>Students may need to be taught how to filter out unnecessary information (e.g. the problem’s story), use highlighters to maintain engagement, as well as break the important information down (e.g. is it a compare, combine or change problem). They could find word cues (e.g. both red pens and blue pens are pens) and use diagrams (e.g. pictures for counting).</li>
            <li>Encourage students to try out helpful maths strategies their classmates used. Ask students questions (e.g. What could you do to make this easier?) to help them to think and talk out loud ways of doing problems accurately (e.g. I could draw columns in multiplication problems to keep answers organised).</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Science">
          <BulletList>
            <li>Students may remember and engage in lessons better if they can see it in real life. Consider excursions to see science in action.</li>
            <li>Consider letting the students plan their own activities to boost engagement.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
