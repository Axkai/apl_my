import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";
import { getAssetUrl } from "@/lib/storage";

const classroomResources = [
  {
    id: "strengths-communication-checklist",
    title: "Strengths and Abilities Communication Checklist (Primary) (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Y89gRFrakEBD7hcU_0PxDEJubWhLWIpK/view?usp=sharing",
    previewImageUrl: getAssetUrl("previews/communication-checklist-preview.png"),
  },
  {
    id: "teacher-schedule",
    title: "Primary / Secondary Teacher Schedule (PDF)",
    pdfUrl: getAssetUrl("pdfs/class-schedule.pdf"),
    previewImageUrl: getAssetUrl("previews/class_schedule.png"),
  },
  {
    id: "self-monitoring-form",
    title: "Primary / Secondary Self-Monitoring Form (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Vd0RHTBwpDCjGjjgNTm0tAxlsBNU0H4z/view?usp=sharing",
    previewImageUrl: getAssetUrl("previews/self-monitoring-preview.png"),
  },
];

export default function ResourcesClassroomSection() {
  return (
    <ContentSection id="classroom-resources" bgColor="bg-white">
      <SectionHeader title="Classroom resources" align="left" showPill={true}>
        <BodyText>
          You can access a class schedule so that children have visual prompts for what comes next, and self-monitoring forms to support them with managing their goals. We also provide a communication checklist to facilitate communication between teachers and parents.
        </BodyText>
      </SectionHeader>

      <ResourceContainer>
        {classroomResources.map((resource) => (
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
