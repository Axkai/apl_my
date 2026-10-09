import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import Button from "@/components/ui/Button";

export default function ResourcesStoriesSection() {
  return (
    <ContentSection id="stories" bgColor="bg-white">
      <SectionHeader title="Stories" align="left" showPill={true}>
        <BodyText>
          We provide a range of stories that help children learn about school so they know what to expect and can learn helpful ways to respond to new situations. Each story comes with audio so that children who are blind and low vision, or find reading challenging, can still access these stories. We have also provided these same stories without pictures so they can be customised with personal images or photos that are relevant to the child or children you will read it with.
        </BodyText>
      </SectionHeader>

      <div>
        <Button href="/stories" variant="outline-navy">
          View story collection
        </Button>
      </div>
    </ContentSection>
  );
}
