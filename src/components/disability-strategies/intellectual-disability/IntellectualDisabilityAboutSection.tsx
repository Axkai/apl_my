import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";

export default function IntellectualDisabilityAboutSection() {
  return (
    <ContentSection id="about-intellectual-disability" bgColor="bg-white">
      <SectionHeader
        title="About intellectual disability"
        align="left"
        showPill={true}
      >
        <div className="flex flex-col items-start gap-4">
          <BodyText>
            Students with intellectual disability find it harder to learn, which means they need extra time and help to learn new skills. While intellectual disability can look different from one student to another, students with intellectual disability may experience differences in their:
          </BodyText>

          <BulletList>
            <li>
              <span className="font-bold">Thinking and organisation.</span> Students with intellectual disability will typically experience difficulties in attention, reasoning, problem solving, memory, planning, and judgement (e.g. understanding and predicting risks). This can impact the speed or way in which they best learn, and they tend to need extra time and help to learn new skills or knowledge (e.g. reading, maths). Some students may be easily distracted and need support with organisation, or they may find instructions with several steps hard to follow. Students with intellectual disability often prefer concrete, multi-modal or hands-on learning tasks.
            </li>
            <li>
              <span className="font-bold">Communication and social skills.</span> Students with intellectual disability may seem socially immature for their age, and they may find it difficult to understand body language (e.g. facial expression, gestures). Some students might have lots of vocabulary and others might only use a few words or no words.
            </li>
            <li>
              <span className="font-bold">Emotions and behaviour.</span> Some students can find it challenging to manage their emotions and behaviour, or to recognise and respond to the emotions of others. Students with intellectual disability may experience low self-confidence, depression, anxiety or frustration if they consistently find that they are unable to complete a task or meet their needs.
            </li>
            <li>
              <span className="font-bold">Practical skills.</span> Some students may need support and lots of opportunities to practise practical skills, such as dressing, eating, toileting, telling the time or handling money.
            </li>
            <li>
              <span className="font-bold">Health and movement.</span> Some students may tire easily, particularly when there are demanding tasks. They may find some motor skills difficult. Some may also be restless, or over-active.
            </li>
          </BulletList>
        </div>
      </SectionHeader>
    </ContentSection>
  );
}
