import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AdhdStrategiesSection() {
  return (
    <ContentSection id="evidence-based-strategies" bgColor="bg-white">
      <SectionHeader title="Evidence-based strategies" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection level="h4" title="Consider how you communicate">
          <BulletList>
            <li><strong>Get their attention before speaking</strong>. Eye contact, gestures, touch, or verbal prompts can be used to get children’s full attention before giving instructions or speaking to them.</li>
            <li><strong>Speak clearly</strong>. Give clear and direct instructions about the task, the behaviour expected, and how much time children have. These instructions may need to be repeated at the start of each new task.</li>
            <li><strong>Simplify instructions and learning</strong>. Consider breaking down big tasks into smaller ones. For example, give step-by-step instructions or visual instructions (i.e., pictures). It may be helpful to ask them to repeat instructions or answer questions, to ensure they have understood.</li>
            <li><strong>Vary teaching formats</strong>. Consider using pictures, videos, PowerPoint presentations, objects, or demonstrations to explain concepts and tasks.</li>
            <li><strong>Use computer software</strong>. Multimedia educational software on the computer or tablet may help some students focus on complex lessons, such as mathematics or reading. Consider using interactive software.</li>
            <li><strong>Consider read-aloud accommodations during testing</strong>. Presenting the items of a test orally can assist in focusing students’ attention and increasing engagement during testing.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Modify the environment">
          <BulletList>
            <li><strong>Minimise potential distractions</strong>. It may be helpful to sit children with their backs facing windows, doors, corridors, or other busy areas of the classroom.</li>
            <li><strong>Consider seating</strong>. Consider sitting children near friends who can model positive behaviours, or close to you, so you can interact with them.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Structure classes">
          <BulletList>
            <li><strong>Set clear classroom rules</strong>. A few short and simple rules that are reviewed regularly may be best. Teach them at the start of the school year, verbally and with the help of pictures. Children may respond well to rules that tell them what to do rather than what to avoid. Rules could be displayed where all students can see them.</li>
            <li><strong>Create a consistent daily routine</strong>. Rules and routines help a child know what is planned for the day, so that they know what to do if they have missed instructions. Consider using a daily visual schedule with a timer/clock that students can see at all times.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Tailor activities to be as inclusive as possible">
          <BulletList>
            <li><strong>Alternate activities</strong>. Consider giving tasks that require higher concentration earlier in the day. Mixing high- and low- interest activities throughout the day may help keep them interested. Breaks after finishing each small task may help with their attention.</li>
            <li><strong>Provide choices</strong>. Giving students choices in their work can increase engagement. Consider letting them write, draw, point to cue cards, demonstrate or talk to demonstrate their learning.</li>
            <li><strong>Match teaching to interests and abilities</strong>. Consider what students like and can do to keep things interesting or relevant and manageable for them. As they become more capable, the workload or difficulty can be slowly increased.</li>
            <li><strong>Give time to practise</strong>. Consider providing students with lots of time to practise in different settings and with different materials to help them learn to use a skill in other situations.</li>
            <li><strong>Work collaboratively in groups or with buddies</strong>. This will reduce distractions, making it easier for them to focus. Students can practise new skills, make friends, and learn by watching others. Buddies are also great for redirecting a student.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Provide feedback">
          <BulletList>
            <li><strong>Give praise and corrections</strong>. Children may respond well when their own and others’ efforts and achievements are praised frequently. Brief and direct correction may be more successful than repeating instructions lots of times or paying attention to disruptive behaviour.</li>
            <li><strong>Use a reward system</strong>. Punishment may not lead to changes in challenging behaviour. Instead, rewards can be used to encourage positive behaviours. Visual behavioural charts help students see their progress. Students may be motivated if they can choose their rewards, like extra time on the computer or free time.</li>
            <li><strong>Redirect rather than reprimand</strong>. Consider asking a child to check displayed rules or redirecting a child who is distracted without causing embarrassment.</li>
            <li><strong>Use a home-school communication system</strong>. Communicate openly and often with parents/caregivers. Use a daily or weekly school update to monitor how a student is going with their goals. Provide support and encourage behaviours similarly in school and at home.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Support students to self-manage">
          <BulletList>
            <li><strong>Set simple and clear goals</strong>. Consider letting families choose goals. These could be short statements that describe positive and achievable behaviours that children understand. Check that the goals set include behaviours that can be seen and counted. For example, a goal might be handing in four items within a set time.</li>
            <li><strong>Teach self-instruction skills</strong>. Consider guiding students to problem solve so they can persist with school work instead of getting frustrated. For example, they can follow these steps mentally or think out loud: “What is the problem?”, “What are my options?”, “I think this is the best option”, “Am I following my plan?” and “How did I do it?”</li>
            <li><strong>Teach students how to self-monitor</strong>. Consider giving children a checklist of behaviours that they would like to work on. Prompt them to check off the list throughout the day. AllPlay Learn's self-monitoring form can support this.</li>
          </BulletList>
        </SubSection>

        <SubSection level="h4" title="Teach academic skills">
          <BulletList>
            <li><strong>Teach organisation strategies explicitly</strong>. Tools such as colour-coded folders, planners, or checklists can be used to help students keep track of notes, books, homework, assignments, and key dates.</li>
            <li><strong>Ask parents for support</strong>. With parent support, children can practise newly-learned skills outside the classroom.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
