import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function IntellectualDisabilityStrategiesSection() {
  return (
    <ContentSection id="evidence-based-strategies" bgColor="bg-white">
      <SectionHeader title="Evidence-based strategies" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection
          id="communication-style"
          level="h4"
          title="Consider adjustments to communication style"
        >
          <BulletList>
            <li>
              <span className="font-bold">Get student’s attention before communicating.</span> When giving instructions or talking with students, check that you have their full attention before beginning. This can be done verbally or with a gesture (e.g. tapping on their shoulder).
            </li>
            <li>
              <span className="font-bold">Be clear and specific.</span> It can be helpful to give clear and specific instructions about the task or behavior expected, and how much time they have to work in.
            </li>
            <li>
              <span className="font-bold">Use visual instructions.</span> Visual instructions about a task or behavior may help support some students. Consider demonstrating the task/behaviour, or asking another student to demonstrate. You could also use a <a href="https://docs.google.com/document/d/17fe5rCCp3etWNiQm8ImkmO21yVx2oScRkV1vMv8j-JY/edit?tab=t.409ca2apuspu" target="_blank" rel="noopener noreferrer" className="text-[#014996] underline hover:text-[#003366]">visual schedule</a>, poster or video to outline or model the task.
            </li>
            <li>
              <span className="font-bold">Some students may find it easier if they can use gestures.</span> Some may need to point to the correct answer instead of talking.
            </li>
            <li>
              <span className="font-bold">Give brief prompts immediately before each activity.</span> It can be helpful to remind students what you want them to focus on in that activity.
            </li>
            <li>
              <span className="font-bold">Give encouragement and corrections.</span> Consider giving positive feedback and correction immediately when children are learning a task or behaviour. This can be reduced gradually as they build their capability.
            </li>
            <li>
              <span className="font-bold">Consider using least-to-most prompts.</span> If a student isn’t sure of a response/task, prompts that gradually increase in the level of support and/or are provided at set intervals (e.g. after 5 seconds) can be helpful. For example, ‘least support’ prompts may be a broad open-ended question “which number comes next” whereas ‘most support’ prompts may be “point to the 6 - the 6 comes next”.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="activities-rules"
          level="h4"
          title="Consider adjustments to activities and rules"
        >
          <BulletList>
            <li>
              <span className="font-bold">Some tasks may need to be tailored to better engage a student.</span> Tailor tasks for the student’s current level of understanding so they can achieve success.
            </li>
            <li>
              <span className="font-bold">Adjustments to reading materials.</span> Provide materials that are age-appropriate, and suitable for the reading level of a student. Using audiobooks and providing choices may support their engagement.
            </li>
            <li>
              <span className="font-bold">Allow students to demonstrate understanding in multiple forms.</span> Students can demonstrate understanding in ways that align with their strengths and abilities. For example, by making a poster, presentation or written report.
            </li>
            <li>
              <span className="font-bold">Include child interests.</span> For example, if a student is motivated by cars, offer a small bundle of toy cars for addition and subtraction. When the student completes their maths, encourage them with some time to play with the cars.
            </li>
            <li>
              <span className="font-bold">Have a consistent routine.</span> Routines help a student understand how to behave. Students often feel more secure when they know what to expect. Refer AllPlay Learn’s class schedule under <a href="#relevant-resources" className="text-[#014996] underline hover:text-[#003366]">relevant resources</a> below.
            </li>
            <li>
              <span className="font-bold">Use a token system.</span> Consider giving tokens for correctly performed actions or behaviours. These tokens can be traded for something of interest to the child. Consider teaching the whole class how to self-monitor (recognise and record their individual completion of a specific behaviour/skill). Access AllPlay Learn’s self-monitoring form under <a href="#relevant-resources" className="text-[#014996] underline hover:text-[#003366]">relevant resources</a> below.
            </li>
            <li>
              <span className="font-bold">Embed learning opportunities and instructions across the naturally occurring routine of your classroom.</span> Identify specific times and activities to provide instructions. Examples include when students are taking a break or transitioning between activities.
            </li>
            <li>
              <span className="font-bold">Consider using time delay programs or approaches.</span> These are questions or problems that have a set amount of time for the student to answer. When the time is up, the correct answer is given.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="practise-opportunities"
          level="h4"
          title="Provide lots of opportunities to practise"
        >
          <BulletList>
            <li>
              <span className="font-bold">Students may need to practise a task or behaviour multiple times.</span> Lots of time to practise in different settings and with different materials can help students learn to use that skill in other situations.
            </li>
            <li>
              <span className="font-bold">Offer fewer tasks with more opportunities to practise.</span> Offering fewer tasks with more time for students to learn and practise these tasks may be more helpful than offering many tasks with little opportunity to practise.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="peer-collaboration"
          level="h4"
          title="Provide opportunities to work with their classmates"
        >
          <BulletList>
            <li>
              <span className="font-bold">Provide lots of opportunities for students to work together.</span> Children with and without intellectual disability can get to know each other and build friendships when they work together. It also helps students learn through watching others.
            </li>
            <li>
              <span className="font-bold">Allocate specific tasks within the group.</span> Consider assigning tasks if a student with an intellectual disability uses tailored materials or instructions. You could also choose a group member to act as a tutor or mentor.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="build-social-skills"
          level="h4"
          title="Build social skills"
        >
          <BulletList>
            <li>
              <span className="font-bold">Help students develop their social skills.</span> Target skills may include speaking and listening, asking questions, and understanding and expressing emotions. Consider using a combination of video modelling, social stories, and roleplaying activities to teach these target skills.
            </li>
            <li>
              <span className="font-bold">Teach students to express their needs and wants.</span> Use prompting, video-modelling, and roleplaying to teach students to request items, activities, or assistance. Arrange the environment and identify students' interests and preferences to motivate and reinforce their efforts. Encourage students to use whichever mode of communication that is most appropriate (e.g., picture cards, objects, writing, speech).
            </li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
