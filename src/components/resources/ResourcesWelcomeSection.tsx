import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import BodyText from "@/components/ui/BodyText";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function ResourcesWelcomeSection() {
  return (
    <ContentSection id="welcome" bgColor="bg-white">
      <SubSectionGroup layout="stack">
        <SubSection
          id="welcome-to-our-resources-page"
          title="Welcome to our resources page!"
          level="h3"
        >
          <BodyText>
            Here you will find a range of posters, activity books, handouts and more to support the inclusion of special needs children.
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
