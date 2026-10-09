import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ImageCard from "@/components/ui/ImageCard";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";

export default function AboutWelcomeSection() {
  return (
    <ContentSection id="welcome" bgColor="bg-white">
      <SectionHeader align="left" showPill={true}>
        {/* Monash University Logo mapped via ImageCard primitive */}
        <ImageCard
          src="/monash-logo.svg"
          alt="Monash University Logo"
          imageWidth={293}
          imageHeight={125}
          align="left"
        />

        <BodyText>
          AllPlay Learn Malaysia is based on the AllPlay framework founded in
          Australia. AllPlay supports inclusion across education, sports and dance
          to improve the quality of life and wellbeing of young people with disability.
        </BodyText>

        <BodyText>
          AllPlay Learn was developed in Australia to help children with
          disabilities and developmental challenges participate and feel included in
          education. It provides practical, evidence-informed resources to address
          common barriers faced by children with special needs, such as:
        </BodyText>

        <BulletList
          items={[
            "Strategies for supporting children’s strengths and needs",
            "Information and resources for educators",
            "Resources for families to support their child",
            "Child-friendly resources to help children at school.",
          ]}
        />

        <BodyText>
          AllPlay Learn focuses on what children can do, and provides practical
          strategies that are based on research evidence and are easy to use in
          everyday education settings.
        </BodyText>
      </SectionHeader>
    </ContentSection>
  );
}
