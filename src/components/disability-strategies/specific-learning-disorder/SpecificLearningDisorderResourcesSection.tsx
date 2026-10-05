import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import Button from "@/components/ui/Button";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";

const specificLearningDisorderResources = [
  {
    id: "communication-checklist",
    title: "Communication checklist (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Y89gRFrakEBD7hcU_0PxDEJubWhLWIpK/view?usp=sharing",
    previewImageUrl: "/images/resources/communication-checklist-preview.png",
  },
  {
    id: "self-monitoring",
    title: "Student self-monitoring form (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Vd0RHTBwpDCjGjjgNTm0tAxlsBNU0H4z/view?usp=sharing",
    previewImageUrl: "/images/resources/self-monitoring-preview.png",
  },
];

export default function SpecificLearningDisorderResourcesSection() {
  return (
    <ContentSection id="relevant-resources" bgColor="bg-white">
      <SectionHeader title="Relevant resources" align="left" showPill={true}>
        <BodyText>
          Visit our resources page for a range of resources that can help to create inclusive education environments for children with special needs and developmental challenges. Some particularly relevant resources for children with specific learning disorders include:
        </BodyText>
      </SectionHeader>

      <ResourceContainer className="mt-4">
        {specificLearningDisorderResources.map((resource) => (
          <ResourceItem
            key={resource.id}
            id={resource.id}
            title={resource.title}
            pdfUrl={resource.pdfUrl}
            previewImageUrl={resource.previewImageUrl}
          />
        ))}
      </ResourceContainer>

      <div className="pt-4">
        <Button
          href="https://allplaylearn.org.au/primary/teacher/sld/"
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
