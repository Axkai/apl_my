import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";

export default function AutismAboutSection() {
  return (
    <ContentSection id="about-autism" bgColor="bg-white">
      <SectionHeader
        title="About autism"
        align="left"
        showPill={true}
      >
        <BodyText>
          Autism is a neurodevelopmental condition that impacts how a student experiences, understands, and interacts with the world. Every autistic student is unique, and their strengths, preferences, and support needs can vary.
        </BodyText>

        <BodyText className="font-bold">
          Students with autism typically experience differences in their:
        </BodyText>

        <BulletList>
          <li>
            <span className="font-bold">Verbal Communication:</span> Some autistic students may use a lot of language, and others might use a few or no words. They may prefer clear, direct language and need extra time to process information and understand conversations.
          </li>
          <li>
            <span className="font-bold">Nonverbal communication.</span> Autistic students may differ in the way they use eye contact (e.g., some may avoid it), their facial expressions may be less expressive than others, and they may not use gestures (e.g., pointing) when communicating. Some autistic students can become frustrated and distressed if they are not understood.
          </li>
          <li>
            <span className="font-bold">Social interactions.</span> Some autistic students may find social rules, conversations, and group interactions challenging, but often want to connect with others and join in.
          </li>
          <li>
            <span className="font-bold">Behaviours or interests.</span> Students with autism may prefer routines and class rules, have particular activities they enjoy repeating many times, and may need warnings and support when switching from one task or activity to another.
          </li>
          <li>
            <span className="font-bold">Reactions to sensory input.</span> Some students may find loud noises, particular sounds, or textures uncomfortable. Every autistic student is different, so understanding their sensory needs can help teachers provide appropriate support and create an inclusive classroom.
          </li>
        </BulletList>

        <BodyText>
          <span className="font-bold">* A note on language.</span> How you speak about autism is an important issue to many. Some autistic people and families prefer ‘autism’ over ‘autism spectrum disorder’. Some students and their families prefer a person-first approach, where you refer to the person before their diagnosis — so ‘student with autism’. This puts the focus on the young person, rather than their diagnosis. However, others may prefer identity-first language, so ‘autistic student' rather than a ‘student with autism’.
        </BodyText>

        <BodyText>
          Some autistic students may have learned to 'mask' (hide or camouflage) their autistic characteristics, which can negatively impact their well-being.
        </BodyText>
      </SectionHeader>
    </ContentSection>
  );
}
