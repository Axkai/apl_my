import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import Button from "@/components/ui/Button";

export default function ResourcesInTheMomentSection() {
  return (
    <ContentSection id="in-the-moment-resources" bgColor="bg-white">
      <SectionHeader title="In-the-moment resources" align="left" showPill={true}>
        <BodyText>
          We provide resources to help children learn how to manage their emotions and problem solve. We also have posters celebrating the strengths of children.
        </BodyText>
      </SectionHeader>

      <div>
        <Button href="/resources/in-the-moment-resources" variant="outline-navy">
          View in-the-moment resource collection
        </Button>
      </div>
    </ContentSection>
  );
}
