import React from "react";
import ContentSection from "../ui/ContentSection";
import SectionHeader from "../ui/SectionHeader";
import BodyText from "../ui/BodyText";
import ImageCard from "../ui/ImageCard";
import { SubSectionGroup, SubSection } from "../ui/SubSection";

export default function InclusionDiagramSection() {
  return (
    <ContentSection id="what-is-inclusive-education">
      {/* Top Content Block */}
      <SectionHeader
        title="What is inclusive education?"
        showPill={true}
        align="left"
        
      >
        <BodyText>
          Inclusive education means all students, including students with
          special needs, are welcomed by their school and supported to reach their full potential.
          Inclusion is most effective when schools aim to create a culture that celebrates everyone's differences and strengths. Inclusive schools help teachers to use
          best practice approaches and current, evidence-based strategies to support all students.
        </BodyText>
      </SectionHeader>

      {/* Graphical Inclusion Diagram & Caption */}
      <ImageCard
        src="/inclusion-diagram.png"
        alt="Inclusion vs Exclusion, Segregation, Integration Diagram"
        caption="Inclusion is about providing equal access and opportunity to all, and involves removing discrimination and other barriers so that all individuals feel that they belong. Inclusion creates a learning environment that can be adapted to meet the needs of each child."
      />

      {/* Bottom Sub-sections */}
      <SubSectionGroup>
        <SubSection title="What is an inclusive teacher?">
          <BodyText>
            An inclusive teacher supports all children to participate, learn
            and succeed in all aspects of education.
          </BodyText>
        </SubSection>

        <SubSection title="What are disabilities and developmental challenges?">
          <BodyText>
            Children with disabilities and developmental challenges might
            include those who have limitations in mobility (such as difficulty
            or inability to walk), the way they think or behave (e.g.
            intellectual disabilities, autism, behavioural/emotional
            disorders), and sensory difficulties (e.g. vision/hearing).
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}

