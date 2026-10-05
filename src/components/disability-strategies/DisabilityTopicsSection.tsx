import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";
import BodyText from "@/components/ui/BodyText";
import Button from "@/components/ui/Button";
import ImageCard from "@/components/ui/ImageCard";

export default function DisabilityTopicsSection() {
  return (
    <>
      <ContentSection id="topics" bgColor="bg-white">
        <SubSectionGroup layout="grid-2">
          <SubSection id="adhd" title="Attention-deficit/hyperactivity disorder (ADHD)">
            <BodyText>
              Children with ADHD have different levels of attention and concentration. They may lose focus when doing tasks or listening to their teachers speak. It can seem like their mind is elsewhere. They may also be hyperactive and impulsive.
            </BodyText>
            <div className="pt-2 mt-auto">
              <Button href="/disability-strategies/adhd" variant="outline-navy">
                Find out more →
              </Button>
            </div>
          </SubSection>

          <SubSection id="autism" title="Autism">
            <BodyText>
              Every child with autism is different, there is no ‘one size fits all’. Children with autism typically have difficulties with socialising and communicating with others. Although they may have social difficulties they are often keen to join in, they just might not know how.
            </BodyText>
            <div className="pt-2 mt-auto">
              <Button href="/disability-strategies/autism" variant="outline-navy">
                Find out more →
              </Button>
            </div>
          </SubSection>

          <SubSection id="intellectual-disability" title="Intellectual disability">
            <BodyText>
              Children with intellectual disability have challenges with thinking skills, such as reasoning, problem solving, planning, and judgement (e.g. understanding and predicting risks). They may take longer to learn new skills at school and in everyday life.
            </BodyText>
            <div className="pt-2 mt-auto">
              <Button href="/disability-strategies/intellectual-disability" variant="outline-navy">
                Find out more →
              </Button>
            </div>
          </SubSection>

          <SubSection id="specific-learning-disability" title="Specific learning disability">
            <BodyText>
              Children with a specific learning disability find a specific area of learning very challenging, such as reading, spelling, handwriting or mathematics, but do well in other areas of learning. Some may even excel in other areas of learning. Children with specific learning disabilities often have other developmental disorders too, such as ADHD. A child can have more than one specific learning disability.
            </BodyText>
            <div className="pt-2 mt-auto">
              <Button href="/disability-strategies/specific-learning-disorder" variant="outline-navy">
                Find out more →
              </Button>
            </div>
          </SubSection>
        </SubSectionGroup>
      </ContentSection>

      <ContentSection id="banner" bgColor="bg-white">
        <ImageCard
          src="/disability-banner.png"
          alt="Disability Strategies Banner"
        />
      </ContentSection>
    </>
  );
}
