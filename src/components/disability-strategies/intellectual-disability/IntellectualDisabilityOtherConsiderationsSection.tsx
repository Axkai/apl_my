import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function IntellectualDisabilityOtherConsiderationsSection() {
  return (
    <ContentSection id="other-considerations" bgColor="bg-white">
      <SectionHeader title="Other considerations" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection
          id="other-first-aid"
          level="h4"
          title="First aid"
        >
          <BulletList>
            <li>A child with an intellectual disability may have difficulty communicating that they are in pain or unwell. Watch for signs of pain such as grimacing. Encourage gestures or other methods of communication to work out what may be happening.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-friendships"
          level="h4"
          title="Friendships"
        >
          <BulletList>
            <li>Read more about how <a href="?tab=t.4x4tqckowy5" className="text-[#014996] underline hover:text-[#003366]">peer mediation</a> can support peers with learning social and communication skills that facilitate the inclusion of children with special needs.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-safety-drills"
          level="h4"
          title="Safety drills"
        >
          <BulletList>
            <li>Some children with an intellectual disability may not know how to tell an adult if there is an emergency, or what to do in an emergency or emergency drill. Consider making time for demonstrating and practicing what to do.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-behaviour"
          level="h4"
          title="Behaviour"
        >
          <BulletList>
            <li>Some children may not complete their work or they may engage in disruptive behaviour (e.g. call out during class). Giving children choices in their work may make them more motivated and less likely to be distracted. Showing them positive behaviour and giving them clear instructions so that they know what is expected may also help.</li>
            <li>Picture cards or stories about social situations can teach children about positive behaviour.</li>
            <li>Many children can be taught how to self-monitor their behaviour. Consider asking them to record whether they have done what they were asked to do.</li>
            <li>See our ‘in the moment’ resource page for more information and links to practical tools you can use with students ‘in the moment’.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-toileting"
          level="h4"
          title="Toileting"
        >
          <BulletList>
            <li>Some children with an intellectual disability may need extra help with toileting. Discuss with parents what help their child may need.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-homework"
          level="h4"
          title="Homework"
        >
          <BulletList>
            <li>Consider children’s strengths and challenges. Some children may find completing homework without help difficult. Work out what a child is able to do without help when assigning homework. Alternatively, consider not giving homework to the class to give the child some time away from books.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-transitions"
          level="h4"
          title="Transitions"
        >
          <BulletList>
            <li>A child with an intellectual disability may benefit from support when moving across education settings.</li>
            <li>It may be helpful to teach and practice organisation and homework skills, and time- and self- management skills.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
