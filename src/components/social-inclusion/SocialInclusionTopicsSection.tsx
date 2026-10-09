import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";
import BodyText from "@/components/ui/BodyText";
import Button from "@/components/ui/Button";
import ImageCard from "@/components/ui/ImageCard";

export default function SocialInclusionTopicsSection() {
  return (
    <>
      <ContentSection id="topics" bgColor="bg-white">
        <SubSectionGroup layout="grid-2">
          <SubSection id="peer-mediation" title="Peer mediation and group work">
            <BodyText>
              Research has found that peer mediation is one of the most effective approaches for supporting the inclusion of students and the development of social skills at school. Peer mediation is particularly relevant for students who find joining in or engaging with peers challenging, such as students with autism.
            </BodyText>
            <div className="pt-2 mt-auto">
              <Button href="/social-inclusion/peer-mediation" variant="outline-navy">
                Find out more →
              </Button>
            </div>
          </SubSection>

          <SubSection id="bullying-and-exclusion" title="Teacher guide to bullying and exclusion">
            <BodyText>
              We all like to feel accepted and be part of a group. Some children, such as those with disabilities, are more likely to experience bullying or exclusion than their peers. As a teacher, there are a number of ways that you can support a child with a disability if they are experiencing bullying or exclusion at school.
            </BodyText>
            <div className="pt-2 mt-auto">
              <Button href="/social-inclusion/teacher-guide-to-bullying-and-exclusion" variant="outline-navy">
                Find out more →
              </Button>
            </div>
          </SubSection>
        </SubSectionGroup>
      </ContentSection>

      <ContentSection id="banner" bgColor="bg-white">
        <ImageCard
          src="/disability-banner.png"
          alt="Social Inclusion Banner"
        />
      </ContentSection>
    </>
  );
}
