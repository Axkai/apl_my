import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function SpecificLearningDisorderAboutSection() {
  return (
    <ContentSection id="about-specific-learning-disorder" bgColor="bg-white">
      <SectionHeader
        title="About specific learning disorder"
        align="left"
        showPill={true}
      >
        <BodyText>
          Children with a specific learning disorder find a specific area of learning very challenging, such as reading, handwriting or mathematics, but do well, or even excel in other areas of learning. A child can have more than one specific learning disorder. Some common areas of learning difficulty include:
        </BodyText>
      </SectionHeader>

      <SubSectionGroup layout="tabbed-vertical">
        <SubSection
          id="reading-difficulties"
          title="Difficulties with reading"
          level="h4"
        >
          <BodyText>
            Children with reading difficulties, which is also known as dyslexia, typically have trouble recognising words. They can find it difficult to ‘sound out’ and blend the sounds in a word. This can make it difficult for them to understand things that are written or spell words correctly. They may find it hard to connect speech sounds with written letters or words.
          </BodyText>
        </SubSection>

        <SubSection
          id="writing-difficulties"
          title="Difficulties with writing"
          level="h4"
        >
          <BodyText>
            Children with writing difficulties may write slowly and have trouble drawing letters. They may have challenges with grammar and vocabulary, and they may misspell words. They may find it hard to organise their ideas, or to write a creative or logical piece.
          </BodyText>
        </SubSection>

        <SubSection
          id="math-difficulties"
          title="Difficulties with mathematics"
          level="h4"
        >
          <BodyText>
            Mathematics difficulties, also known as dyscalculia, look different from child to child. Some children find it hard to understand the meaning of numbers, and they may count on their fingers. Other children may find basic addition or subtraction difficult. Some children may find more complex and abstract problems difficult to understand.
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
