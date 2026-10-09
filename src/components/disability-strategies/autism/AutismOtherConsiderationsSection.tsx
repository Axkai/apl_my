import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AutismOtherConsiderationsSection() {
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
            <li>Consider sensitivity to smells and textures when giving first aid to a student with autism. Some students may be distressed by blood or bandages, or refuse to have an ice pack or medication.</li>
            <li>Talk to a child’s caregivers to identify the best way to manage an injury/illness.</li>
            <li>Children with minimal language may have difficulty communicating that they are in pain or unwell. Watch for signs of pain, such as grimacing, and encourage gestures or other methods of communication to work out what may be happening.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-safety-drills"
          level="h4"
          title="Safety drills"
        >
          <BodyText className="mb-2">
            Unexpected safety drills may upset some children with autism. Consider letting a child know beforehand that there will be a drill.
          </BodyText>
          <BulletList>
            <li>Pair them with a buddy or person they feel safe with.</li>
            <li>Noise-reducing headphones may help if they find the noise of the alarms overwhelming.</li>
            <li>Some children with autism may not know how to tell an adult if there is an emergency, or what to do in an emergency or drill. Consider making time for demonstrating and practising what to do.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-regulation-behaviour"
          level="h4"
          title="Supporting Student Regulation and Behaviour"
        >
          <BulletList>
            <li>Understanding what might be causing a student's behaviour can help teachers respond calmly and effectively. It’s important to remember that children are most likely trying to communicate a need or want that is not being met.</li>
            <li>See our ‘in the moment’ resource page for more information and links to practical tools you can use with students ‘in the moment’.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-relief-teachers"
          level="h4"
          title="Relief teachers"
        >
          <BulletList>
            <li>A child with autism may find having a different teacher and changes to their routine upsetting.</li>
            <li>Telling relief teachers about the specific routines and teaching tips that will help that child may prevent distress.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-friendships"
          level="h4"
          title="Friendships"
        >
          <BulletList>
            <li>Autistic children may need support with friendship dynamics or feeling different. Teachers may need to help facilitate and navigate friendships.</li>
            <li>Provide universal and targeted bullying prevention. Increasing the understanding of students, families, and staff about disability, and providing peer-mediated interventions against bullying, helps create a positive school culture that supports positive peer inclusion.</li>
            <li>Explicitly teach students about friendship, emotions, and skills such as turn-taking, shared play, and social interpersonal problem-solving.</li>
          </BulletList>
        </SubSection>

        <SubSection
          id="other-transitions"
          level="h4"
          title="Transitions"
        >
          <div>
            <BodyText className="font-bold mb-2">General tips</BodyText>
            <BulletList>
              <li>A child with autism may benefit from support when moving across education settings.</li>
              <li>It may be helpful to teach and practice organisation and homework skills, and time- and self- management skills.</li>
            </BulletList>
          </div>

          <div>
            <BodyText className="font-bold mb-2">To support a student with transitioning into your school or classroom setting:</BodyText>
            <BulletList>
              <li>Meet with the student, family, and relevant staff before the transition. Consider also meeting, when relevant, with their health professionals.</li>
              <li>Give the student opportunities to visit the new classroom, teacher, or school beforehand.</li>
              <li>Maintain regular communication with families, especially during the first few weeks.</li>
              <li>Provide supports such as visual schedules, a safe space, a key staff member, or a peer buddy.</li>
              <li>Ask families about the student's strengths, interests, and strategies that work well. Ask parents to complete AllPlay Learn's Strengths and Abilities Communication Checklist.</li>
              <li>Check in regularly to see how the student is settling in socially, emotionally, and academically.</li>
            </BulletList>
          </div>

          <div>
            <BodyText className="font-bold mb-2">To support a student with transitioning out of your school or classroom setting:</BodyText>
            <BulletList>
              <li>Work with the student, family, and new education setting to plan the transition. This can be done through, for example, a transition planning meeting.</li>
              <li>Help the student practise coping and self-regulation strategies.</li>
              <li>With parent consent, share information about the student's strengths, interests, and successful supports with the new setting. Use AllPlay Learn's Strengths and Abilities Communication Checklist.</li>
            </BulletList>
          </div>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
