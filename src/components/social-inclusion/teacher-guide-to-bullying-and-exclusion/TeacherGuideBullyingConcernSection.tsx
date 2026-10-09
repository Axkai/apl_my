import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function TeacherGuideBullyingConcernSection() {
  return (
    <ContentSection id="what-to-do-if-you-are-concerned" bgColor="bg-white">
      <SectionHeader title="What to do if you are concerned" align="left" showPill={true}>
        <BodyText>
          Sensitively talk with the child and listen to what they have experienced. Don’t assume they will want to talk about it with you. Follow your school&apos;s process for responding to bullying and involve the family where appropriate. Continue to check that the child feels safe and supported.
        </BodyText>
      </SectionHeader>

      <SubSectionGroup layout="stack">
        <SubSection
          id="talk-about-bullying"
          title="How to talk with a child about bullying"
          level="h3"
        >
          <BodyText>
            If you would like to talk with a child about bullying, it is important to make sure it is in private, listen calmly, do not make assumptions, ask open questions, and check on their safety. For example you could follow the steps below:
          </BodyText>

          <BulletList>
            <li>Find a quiet place to talk without catching the attention of other students.</li>
            <li>Start the conversation by saying something like: “I noticed you have seemed upset recently. Is there anything you want to tell me?”</li>
            <li>Check that they want to talk and feel safe to talk: “You are not in trouble.” “Is it okay to keep talking about this?”</li>
            <li>Find out what happened: “Can you tell me what happened?” “Who was there?”</li>
            <li>Check that they feel safe at school: “Do you feel safe at school now?” “Is there anywhere or anyone at school that makes you feel unsafe?”</li>
            <li>Explain what might happen next: “I may need to talk to another adult who can help keep you safe. We will work out what to do together”</li>
          </BulletList>

          <BodyText>
            Avoid suggesting quick solutions, such as asking other children involved to apologise, as this may make the child who was hurt feel that their experience and feelings have not been heard.
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
