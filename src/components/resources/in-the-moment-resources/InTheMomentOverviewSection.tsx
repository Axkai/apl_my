import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import BodyText from "@/components/ui/BodyText";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

const inTheMomentResources = [
  {
    id: "asking-for-help",
    title: "Asking for help (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1X5HeKsy28NGOb9kkg9RZXWQSXJadA63p/view?usp=share_link",
    previewImageUrl: "/images/resources/communication-checklist-preview.png",
  },
  {
    id: "problem-solving-guide",
    title: "Problem-solving guide (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1X63AQdOYZVIc3cEXtrYAwolrcWH0QfSI/view?usp=share_link",
    previewImageUrl: "/images/resources/problem-solving-preview.png",
  },
  {
    id: "relaxation-breathing-script",
    title: "Relaxation box breathing script (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1cEovEFGYrUlPKbrcO6NvjdR9UcIL0Sbg/view?usp=share_link",
    previewImageUrl: "/images/resources/peer-info-id-preview.png",
  },
  {
    id: "emotion-cards",
    title: "Emotion cards (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1XACIdqBw-S9TML0B893MpYxwyJIIpbvy/view?usp=share_link",
    previewImageUrl: "/images/resources/emotion-card.png",
  },
];

export default function InTheMomentOverviewSection() {
  return (
    <ContentSection id="overview" bgColor="bg-white">
      <SubSectionGroup layout="stack">
        <SubSection
          id="in-the-moment-resources"
          title=""
          level="h3"
        >
          <BodyText>
            On this page, you will find tools and information to support students with skills such as asking for help, solving problems, and regulating emotions and behaviours.
          </BodyText>
          <BodyText>
            Below is a list of resources that may help teachers support students in these areas:
          </BodyText>
        </SubSection>
      </SubSectionGroup>

      <ResourceContainer>
        {inTheMomentResources.map((resource) => (
          <ResourceItem
            key={resource.id}
            id={resource.id}
            title={resource.title}
            pdfUrl={resource.pdfUrl}
            previewImageUrl={resource.previewImageUrl}
          />
        ))}
      </ResourceContainer>
    </ContentSection>
  );
}
