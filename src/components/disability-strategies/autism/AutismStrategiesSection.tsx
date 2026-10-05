import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function AutismStrategiesSection() {
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
              <span className="font-bold">Visual cues.</span> Visual cues and schedules can help students understand what is coming up, how to complete an activity, and when they should complete a transition from one activity to another. This can support providing advanced warning during transitions. See AllPlay Learn's <a href="https://allplaylearn.org.au/primary/teacher/asd/#relevantresources" target="_blank" rel="noopener noreferrer" className="text-[#014996] underline hover:text-[#003366]">printable class schedule</a>.
            </li>
            <li>
              <span className="font-bold">Give a warning when a transition is coming up.</span> Provide lots of warning when moving from one activity to another, using clear instructions (for example: “in two minutes we are going to pack away and go to art”), paired with a visual timer and schedule.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="inclusive-activities"
          level="h4"
          title="Tailor activities to be as inclusive as possible"
        >
          <BulletList>
            <li>
              <span className="font-bold">Some tasks may need to be modified for a student</span>. Where you can, use visuals, simplified instructions, and concrete materials (such as images to supplement text, blocks to model maths) to support a student’s understanding of the task.
            </li>
            <li>
              <span className="font-bold">Where possible, add the child interests or choice into the learning process</span> to support their engagement and motivation; for example, if a child has an interest in cars, build car images or toys into learning tasks.
            </li>
            <li>
              <span className="font-bold">When a task is new, some students will learn best with support</span>. Teachers or other students can provide support such as prompts, video or in-person demonstrations, or encouragement, and gradually reduce support as the student becomes more confident.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="positive-feedback"
          level="h4"
          title="Provide positive feedback"
        >
          <BulletList>
            <li>
              <span className="font-bold">Give encouragement and corrections</span>. Consider giving positive feedback and constructive correction immediately when children are learning a task or behaviour, gradually reducing this support as they learn.
            </li>
            <li>
              <span className="font-bold">Express positive regard and support</span>. Emotional support and encouragement can support an autistic student with learning.
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
              <span className="font-bold">Provide fewer tasks with more opportunities to practise</span>, helping students build and apply skills across different situations.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="work-collaboratively"
          level="h4"
          title="Work collaboratively"
        >
          <BulletList>
            <li>
              <span className="font-bold">Provide lots of opportunities for students to work together</span>. This can support autistic students to build friendships and learn from one another.
            </li>
            <li>
              <span className="font-bold">When appropriate, give individualised tasks</span>. Consider giving specific roles or tasks to students in a group if an autistic student is working with tailored materials or instructions. You could also select a student in a group to be a tutor or mentor.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="support-self-manage"
          level="h4"
          title="Support students to self-manage"
        >
          <BulletList>
            <li>
              <span className="font-bold">Teach self-instruction skills.</span> Consider guiding students to problem solve to help them work through challenges independently.
            </li>
            <li>
              <span className="font-bold">Teach students how to self-monitor.</span> Consider giving children a checklist of behaviours that they would like to work on. Prompt them to check off the list throughout the day.
            </li>
            <li>
              <span className="font-bold">Class passes</span>. Provide students with visual cards that allow them to take an additional break during classroom activities.
            </li>
            <li>
              <span className="font-bold">Allow noise-reducing headphones</span>. Noise-reducing headphones may help students if they find the classroom or playground too loud.
            </li>
          </BulletList>
        </SubSection>

        <SubSection
          id="develop-social-skills"
          level="h4"
          title="Support to develop social skills"
        >
          <BulletList>
            <li>
              <span className="font-bold">Use social stories.</span> <a href="?tab=t.kfy0cxfk1bip" className="text-[#014996] underline hover:text-[#003366]">Social stories</a> can help students understand what is likely to happen, understand changes to the classroom routine, and how they can respond in specific situations.
            </li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
