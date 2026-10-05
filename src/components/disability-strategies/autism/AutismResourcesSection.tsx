import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import Button from "@/components/ui/Button";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";

const autismResources = [
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
    id: "peer-mediation",
    title: "Peer mediation steps poster (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1a4suAHqw8aY1t1AA11VYt7XNPUgrRCI_/view?usp=sharing",
    previewImageUrl: "/images/resources/peer-mediation-preview.png",
  },
  {
    id: "peer-activity-autism",
    title: "Peer information activity book - Autism (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1RwvbHoZBT5qzGlHNF1l5uIRHcceavZr2/view?usp=sharing",
    previewImageUrl: "/images/resources/peer-activity-autism-preview.png",
  },
  {
    id: "emotion-cards",
    title: "Emotion cards (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1gLSBUd5qyqHWmbY7EUjSLgy5Pv42_njr/view?usp=sharing",
    previewImageUrl: "/images/resources/emotion-cards-preview.png",
  },
];

export default function AutismResourcesSection() {
  return (
    <ContentSection id="relevant-resources" bgColor="bg-white">
      <SectionHeader title="Relevant resources" align="left" showPill={true}>
        <BodyText>
          Visit our Resources page for a range of resources that can help to create inclusive education environments for children with special needs and developmental challenges. AllPlay Learn’s stories can help children with autism become familiar with primary school and some of the skills they need to participate in these settings. Other relevant resources for children with autism are:
        </BodyText>
      </SectionHeader>

      {/* PDF Resource Grid Display */}
      <ResourceContainer className="mt-4">
        {autismResources.map((resource) => (
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
          href="https://allplaylearn.org.au/content/uploads/2019/08/primary-teacher-autism.pdf"
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
