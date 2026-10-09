import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";

const anxietyResources = [
  {
    id: "anxiety-teacher-form",
    title: "Teacher form (PDF)",
    pdfUrl: "https://www.allplaylearn.org.au/content/uploads/2021/03/Anxiety-tool-AllPlay-Primary-school-teachers.pdf",
    previewImageUrl: "/images/resources/anxiety-teacher-preview.png",
  },
  {
    id: "anxiety-student-form",
    title: "Student form (PDF)",
    pdfUrl: "https://allplaylearn.org.au/wp-content/uploads/2021/03/Anxiety-tool-AllPlay-Taking-control-of-my-worries.pdf",
    previewImageUrl: "/images/resources/anxiety-student-preview.png",
  },
];

export default function ResourcesAnxietySection() {
  return (
    <ContentSection id="recognising-and-supporting-student-anxiety" bgColor="bg-white">
      <SectionHeader title="Recognising and supporting student anxiety" align="left" showPill={true}>
        <BodyText>
          AllPlay Learn’s Recognising and supporting student anxiety forms help teachers and students to reflect on:
        </BodyText>

        <BulletList>
          <li>a student’s early signs that they are feeling anxious</li>
          <li>later signs that their anxiety is escalating</li>
          <li>triggers or contributors to the student’s anxiety</li>
          <li>strategies that may be effective at specific timepoints</li>
        </BulletList>

        <BodyText>
          Talking with families about their observations will help you develop a shared and richer understanding about the student’s anxiety. Involving students in recognising and responding to signs of anxiety can increase their autonomy and confidence. Some students may complete these forms independently, while others may find working with a trusted teacher, family member or health professional (e.g. their psychologist) helpful.
        </BodyText>

        <BodyText>
          These forms can be used to support collaboration and communication across teaching staff, which can help create consistent supportive environments that foster a child’s sense of security and capability in managing their anxiety. You may also like to consider including these forms within an existing Individual Learning Plan to support the student throughout the year.
        </BodyText>
      </SectionHeader>

      <ResourceContainer>
        {anxietyResources.map((resource) => (
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
