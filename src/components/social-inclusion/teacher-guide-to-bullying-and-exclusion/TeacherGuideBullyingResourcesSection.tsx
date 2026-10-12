import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";

const bullyingScriptsResources = [
  {
    id: "how-to-ask-your-friend",
    title: "How to ask your friend if they are okay (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1X5HeKsy28NGOb9kkg9RZXWQSXJadA63p/view?usp=share_link",
    previewImageUrl: "/images/resources/how-to-ask-your-friend-preview.png",
  },
  {
    id: "what-to-do",
    title: "What to do if you see someone is being bullied (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1X63AQdOYZVIc3cEXtrYAwolrcWH0QfSI/view?usp=share_link",
    previewImageUrl: "/images/resources/what-to-do-if-someone-being-bullied-preview.png",
  },
  {
    id: "ask-a-teacher",
    title: "How to ask a teacher for help if you think you are being bullied (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1cEovEFGYrUlPKbrcO6NvjdR9UcIL0Sbg/view?usp=share_link",
    previewImageUrl: "/images/resources/ask-a-teacher-preview.png",
  },
  {
    id: "ask-a-parent-or-adult",
    title: "How to ask a parent or adult for help if you think you are being bullied (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1XACIdqBw-S9TML0B893MpYxwyJIIpbvy/view?usp=share_link",
    previewImageUrl: "/images/resources/ask-a-parent-or-adult-preview.png",
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
