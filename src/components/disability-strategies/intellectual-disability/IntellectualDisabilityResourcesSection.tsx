import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import Button from "@/components/ui/Button";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";

const intellectualDisabilityResources = [
  {
    id: "communication-checklist",
    title: "Communication checklist (PDF)",
    pdfUrl: "https://allplaylearn.org.au/wp-content/uploads/2019/06/Strengths-and-Abilities-Communication-Checklist-Primary.pdf",
    previewImageUrl: "/images/resources/communication-checklist-preview.png",
  },
  {
    id: "class-schedule",
    title: "Class schedule (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1wBsobfjgNdEji0A_dyFMSi5ONTA3LI5D/view?usp=sharing",
    previewImageUrl: "/images/resources/class-schedule-preview.png",
  },
  {
    id: "self-monitoring",
    title: "Student self-monitoring form (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Vd0RHTBwpDCjGjjgNTm0tAxlsBNU0H4z/view?usp=sharing",
    previewImageUrl: "/images/resources/self-monitoring-preview.png",
  },
  {
    id: "stay-play-talk",
    title: "Stay play talk poster (PDF)",
    pdfUrl: "https://allplaylearn.org.au/wp-content/uploads/2019/06/Stay-Play-Talk-Poster-Early-Primary.pdf",
    previewImageUrl: "/images/resources/stay-play-talk-preview.png",
  },
  {
    id: "peer-mediation",
    title: "Peer mediation steps poster (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1a4suAHqw8aY1t1AA11VYt7XNPUgrRCI_/view?usp=sharing",
    previewImageUrl: "/images/resources/peer-mediation-preview.png",
  },
  {
    id: "emotion-cards",
    title: "Emotion cards (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1gLSBUd5qyqHWmbY7EUjSLgy5Pv42_njr/view?usp=sharing",
    previewImageUrl: "/images/resources/emotion-cards-preview.png",
  },
  {
    id: "peer-info-id",
    title: "Peer information sheet - Intellectual Disability (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Sm3Y6heeP7dSp9fzTugX5g-_lQ8qhvEr/view?usp=share_link",
    previewImageUrl: "/images/resources/peer-info-id-preview.png",
  },
];

export default function IntellectualDisabilityResourcesSection() {
  return (
    <ContentSection id="relevant-resources" bgColor="bg-white">
      <SectionHeader title="Relevant resources" align="left" showPill={true}>
        <BodyText>
          Visit our Resources page for a range of resources that can help to create inclusive education environments for children with special needs and developmental challenges. AllPlay Learn’s stories can help children with intellectual disability become familiar with primary school and some of the skills they need to participate in these settings. Other relevant resources for children with intellectual disability are:
        </BodyText>
      </SectionHeader>

      {/* PDF Resource Grid Display */}
      <ResourceContainer className="mt-4">
        {intellectualDisabilityResources.map((resource) => (
          <ResourceItem
            key={resource.id}
            id={resource.id}
            title={resource.title}
            pdfUrl={resource.pdfUrl}
            previewImageUrl={resource.previewImageUrl}
          />
        ))}
      </ResourceContainer>

      {/* Primary Page PDF Download CTA */}
      <div className="pt-4">
        <Button
          href="https://allplaylearn.org.au/content/uploads/2019/08/primary-teacher-intellectual-disability.pdf"
          variant="primary-navy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download this page as a PDF
        </Button>
      </div>
    </ContentSection>
  );
}
