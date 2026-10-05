import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";

export default function AdhdAboutSection() {
  return (
    <ContentSection id="about-attention-deficit/hyperactivity-disorder-(adhd)" bgColor="bg-white">
      <SectionHeader
        title="About attention-deficit/hyperactivity disorder (ADHD)"
        showPill={true}
        align="left"
      >
        <BodyText>
          Students with ADHD have different levels of attention, concentration, impulse control, and energy. While all students can experience times when they struggle to focus or sit still, students with ADHD tend to experience this more frequently and significantly.
        </BodyText>
        <BodyText>
          While ADHD can look different from one student to another, students with ADHD typically experience differences in one or more of these areas:
        </BodyText>
        <BulletList>
          <li>
            <strong>Attention</strong>. Some students with ADHD may find it difficult to stay focused when completing tasks, leading to mistakes. They may also find it difficult to stay focused when listening to others speak, following instructions, or completing tasks.
          </li>
          <li>
            <strong>Hyperactivity</strong>. Some students with ADHD may be very active, fidget or appear restless, talk frequently, or prefer movement-based and hands-on, active activities.
          </li>
          <li>
            <strong>Impulsivity</strong>. Some students with ADHD may act before thinking. This may mean they interrupt others, have difficulty waiting their turn, or engage in risky behaviours. They may also experience strong emotional reactions.
          </li>
          <li>
            <strong>Organisation, time management and planning</strong>. Some students with ADHD may need support with organising belongings and homework, starting tasks, managing their time, and completing work.
          </li>
        </BulletList>
        <BodyText>
          Some students with ADHD may have learned to 'mask' (hide or camouflage) their ADHD characteristics, which can negatively impact their well-being.
        </BodyText>
      </SectionHeader>
    </ContentSection>
  );
}
