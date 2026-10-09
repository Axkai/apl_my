import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";

export default function AboutDevelopmentSection() {
  return (
    <ContentSection id="development" bgColor="bg-white">
      <SectionHeader
        title="How the AllPlay Learn Malaysia resources were developed"
        align="left"
        showPill={true}
      >
        <BodyText>
          The AllPlay Learn team in Australia conducted a series of systematic
          reviews of the research evidence to identify evidence-based strategies that
          informed the resources. They also included strategies that are considered
          best-practice by experts in this field. This resulted in a series of guides
          and resources (e.g., stories, posters, cards and videos) to support
          educators, teachers, school staff, caregivers and students to understand and
          implement inclusive practices across Australian early childhood, primary
          and secondary school settings.
        </BodyText>

        <BodyText>
          To adapt AllPlay Learn to Malaysia, we worked with Malaysian educators,
          families, allied health professionals and other key stakeholders to review the
          Australian resources and identify changes needed to make them more relevant
          and accessible in the Malaysian context.
        </BodyText>

        <BodyText>
          The adapted resources bring together research evidence from AllPlay Learn
          Australia with local knowledge and experience from Malaysia to support
          Malaysian primary schools.
        </BodyText>
      </SectionHeader>
    </ContentSection>
  );
}
