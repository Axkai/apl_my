import React from "react";
import ContentSection from "../ui/ContentSection";
import SectionHeader from "../ui/SectionHeader";
import BodyText from "../ui/BodyText";
import ImageCard from "../ui/ImageCard";
import { SubSectionGroup, SubSection } from "../ui/SubSection";
import Button from "../ui/Button";
import JumpLinksList from "../ui/JumpLinksList";
import { ArrowRight } from "lucide-react";

export default function InclusiveStepsSection() {
  const disabilityTopics = [
    { label: "Autism", href: "/disability-strategies#autism" },
    { label: "ADHD", href: "/disability-strategies#adhd" },
    { label: "Intellectual disability", href: "/disability-strategies#intellectual-disability" },
    { label: "Specific learning disability", href: "/disability-strategies#specific-learning-disability" },
  ];

  return (
    <ContentSection id="how-to-be-inclusive-of-all-children">
      {/* Top Section Header */}
      <SectionHeader
        title="How to be inclusive of all children"
        showPill={true}
        align="left"
        className="px-0"
      />

      {/* Kylie's Photo Quote Banner Image */}
      <ImageCard
        src="/kylie-quote-banner.png"
        alt="Kylie's quote: Both at kinder and at school the teachers look at Lucy as though she can do everything..."
      />

      {/* Steps Sub-sections Breakdown */}
      <SubSectionGroup>
        {/* Step 1 */}
        <SubSection title="1. Build partnerships with the child and their family">
          <BodyText>
            Building connections with the child and their family can support
            inclusion. Work together to identify learning goals, and to create
            positive strategies to achieve these goals. Many families inform
            their school that their child has a disability at the time of
            enrolment at school. However, some families may not wish to
            disclose that their child has a developmental challenge or
            disability, or they may not be aware of it yet.
          </BodyText>
          <BodyText>
            If you notice that a child requires support in the classroom you
            can sensitively discuss this with their family. When talking with
            family members, focus on the learning task/s the child is finding
            difficult, as well as the child’s strengths. Read more about
            communicating with families in our teacher guide to
            parent-teacher meetings. Work with the child’s family to develop
            effective learning strategies and modifications for their child.
            Learn more about Individual Education Plans on our transition to
            primary page.
          </BodyText>
          {/* Action Button Link */}
          <div className="pt-2">
            <Button
              href="/transition-to-primary"
              variant="outline-navy"
              size="md"
            >
              View transition to primary school
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </SubSection>

        {/* Step 2 */}
        <SubSection title="2. Learn the basics">
          <BodyText>
            You can make a positive difference in a child’s life by providing
            an inclusive environment. Not sure where to begin? See the basics
            guide for a list of simple things teachers can do to make a
            difference. Next, find out more about the language used when talking
            about a child&apos;s disability and how to use strengths-based
            language that focuses on their strengths, interests and
            personality traits.
          </BodyText>
        </SubSection>

        {/* Step 3 */}
        <SubSection title="3. Collaborate with other teachers and staff">
          <BodyText>
            Collaboration between colleagues supports positive student
            education experiences at school. Primary teachers and staff
            working with children with disabilities and developmental
            challenges may need to learn new knowledge, skills and try new
            approaches.
          </BodyText>
          <BodyText>
            Primary teachers can support each other to be inclusive and work
            out the best ways to tailor the content of their classes. They
            can talk together about learning plans and strategies that have
            worked well with children, as well as those that didn’t. This way
            teachers can learn from each other’s experiences and will feel
            more supported.
          </BodyText>
          <BodyText>
            Peer mentoring can build a teacher’s skills and confidence. You
            may consider inviting a specialist school teacher who has worked
            with children with developmental challenges to work with you for
            a day, or collaborate with allied health professionals to develop
            the most effective ways to include children with disabilities
            and developmental challenges in your program.
          </BodyText>
          <BodyText>
            Teachers can also promote and support a whole-school approach to
            inclusion.
          </BodyText>
          {/* Action Button Link */}
          <div className="pt-2">
            <Button
              href="/social-inclusion"
              variant="outline-navy"
              size="md"
            >
              Learn more about social inclusion
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </SubSection>

        {/* Step 4 */}
        <SubSection id="additional-resources" title="4. Learn more about the different types of disabilities">
          <BodyText>
            Learn about the different strengths children may have, and read
            evidence-based strategies that are effective in school settings.
          </BodyText>

          {/* Disability Category Jump Links List */}
          <JumpLinksList items={disabilityTopics} />
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
