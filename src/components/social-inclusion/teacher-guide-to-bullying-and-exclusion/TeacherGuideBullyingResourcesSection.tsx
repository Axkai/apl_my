import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";

const bullyingScriptsResources = [
  {
    id: "script-ask-your-friend",
    title: "Bullying script - Ask your friend (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1X5HeKsy28NGOb9kkg9RZXWQSXJadA63p/view?usp=share_link",
    previewImageUrl: "/images/resources/communication-checklist-preview.png",
  },
  {
    id: "script-ask-if-someone-is-being-bullied",
    title: "Bullying script - Ask if someone is being bullied (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1X63AQdOYZVIc3cEXtrYAwolrcWH0QfSI/view?usp=share_link",
    previewImageUrl: "/images/resources/peer-mediation-preview.png",
  },
  {
    id: "script-ask-a-teacher",
    title: "Bullying script - Ask a teacher (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1cEovEFGYrUlPKbrcO6NvjdR9UcIL0Sbg/view?usp=share_link",
    previewImageUrl: "/images/resources/peer-info-id-preview.png",
  },
  {
    id: "script-ask-a-parent-or-adult",
    title: "Bullying script - Ask a parent or adult (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1XACIdqBw-S9TML0B893MpYxwyJIIpbvy/view?usp=share_link",
    previewImageUrl: "/images/resources/stay-play-talk-preview.png",
  },
];

export default function TeacherGuideBullyingResourcesSection() {
  return (
    <ContentSection id="helping-students-to-speak-up" bgColor="bg-white">
      <SectionHeader title="Helping students to speak up" align="left" showPill={true}>
        <BodyText>
          Students can practise asking for help, using these scripts:
        </BodyText>
      </SectionHeader>

      <ResourceContainer className="mt-4">
        {bullyingScriptsResources.map((resource) => (
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
