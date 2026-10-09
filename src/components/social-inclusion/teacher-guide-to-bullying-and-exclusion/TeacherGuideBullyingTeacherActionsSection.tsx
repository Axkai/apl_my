import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";
import Link from "next/link";

export default function TeacherGuideBullyingTeacherActionsSection() {
  return (
    <ContentSection id="what-can-teachers-do?" bgColor="bg-white">
      <SectionHeader title="What can teachers do?" align="left" showPill={true} />

      <SubSectionGroup layout="stack">
        <SubSection
          id="talk-regularly"
          title="Talk regularly with students about inclusion"
          level="h3"
        >
          <BodyText>
            Remind students that everyone is different and that everyone deserves to feel like they belong. Be clear that individual differences should be valued – the world would be very boring if we were all the same! You could also talk about or show videos which highlight achievements of people with disabilities. Remind students about the importance of language and that some terms can offend people.
          </BodyText>
        </SubSection>

        <SubSection
          id="set-expectations"
          title="Set clear expectations"
          level="h3"
        >
          <BodyText>
            Talk with students about what bullying is (and isn’t!), what exclusion is, and clearly outline what inclusion looks like at school. Be clear about what is expected of their behaviour at school, and what is not tolerated. Make sure students know what to do if they experience or see bullying.
          </BodyText>
        </SubSection>

        <SubSection
          id="teach-skills"
          title="Teach students social and emotion regulation skills"
          level="h3"
        >
          <BodyText>
            Use the{" "}
            <Link
              href="/social-inclusion/peer-mediation"
              className="text-[#0056B3] hover:underline"
            >
              peer mediation resource
            </Link>{" "}
            to teach students how to be inclusive of others. Teaching students how to recognise emotions and express them in a positive way can also help reduce conflict. Check out the ‘in the moment’ resources that might help!
          </BodyText>
        </SubSection>

        <SubSection
          id="support-inclusion"
          title="Consider times when inclusion can be supported"
          level="h3"
        >
          <BodyText>
            Think about situations in which bullying or exclusion may happen (e.g. lunchtime, group activities). Provide different activities and ways for children to participate. For example, lunchtime may be particularly challenging for children who are unsure how to join in with others. You could organise games, chess club, or choir to provide opportunities for children to try.
          </BodyText>
        </SubSection>

        <SubSection
          id="notice-indicators"
          title="Notice when a child might need help"
          level="h3"
        >
          <BodyText>
            If a student’s behaviour or emotions change significantly, this can sometimes be an indicator that they are being bullied. Look for changes such as being left out, spending lots of time alone, becoming quieter or upset, mood swings, feeling anxious, difficulty concentrating in class, avoiding school, losing belongings or having unexplained injuries.
          </BodyText>
          <BodyText>
            There can also be many other possible explanations for changes in behaviour and emotions, so if you notice any of these things, think about talking with the student or try to observe interactions with classmates over a few days.
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
