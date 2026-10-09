import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function InTheMomentRespondingSection() {
  return (
    <ContentSection
      id="responding-to-students-behaviour"
      bgColor="bg-white"
      bgImageSrc="/strengths-bg-pattern-v2.png"
      bgImageAlt="Responding to Students Behaviour section background pattern"
    >
      <SectionHeader
        title="Responding to Students’ Behaviour"
        align="left"
        showPill={true}
        titleColor="text-white"
      />
      <SubSectionGroup layout="grid-2">
        <SubSection
          level="h3"
          title="What can I do?"
          titleColor="text-white"
        >
          <BodyText className="font-bold" textColor="text-white">
            When You First Notice Signs of Distress
          </BodyText>
          <BodyText textColor="text-white">
            Try to:
          </BodyText>
          <BulletList textColor="text-white">
            <li>Consider what the student might need in that moment. For example, they may need a break, help with a task, a quieter space, reassurance, or support communicating their needs.</li>
            <li>Check in with the student and acknowledge how they may be feeling.</li>
            <li>Use the AllPlay Learn Emotion Cards or other visual supports if the student is already familiar with them.</li>
            <li>Reduce or remove possible triggers, if possible.</li>
            <li>Redirect the student to a preferred activity or quieter space.</li>
            <li>Model calm behaviour, such as taking slow breaths together. For example, see the AllPlay Learn Relaxation Box Breathing Script.</li>
          </BulletList>

          <BodyText className="font-bold" textColor="text-white">
            When a student becomes very overwhelmed
          </BodyText>
          <BulletList textColor="text-white">
            <li>Use a calm, reassuring tone.</li>
            <li>Keep instructions brief and simple.</li>
            <li>Use familiar visuals to support communication, where possible.</li>
            <li>Ensure student and others are safe.</li>
            <li>Give the student time and space to regulate.</li>
            <li>Remain nearby and within sight, monitoring the student&apos;s safety.</li>
            <li>Reconnect with the student once they are regulated.</li>
          </BulletList>
        </SubSection>

        <SubSection
          level="h3"
          title="What to avoid?"
          titleColor="text-white"
        >
          <BodyText className="font-bold" textColor="text-white">
            Avoid
          </BodyText>
          <BulletList textColor="text-white">
            <li>Showing frustration, criticism, anger or alarm.</li>
            <li>Raising your voice.</li>
            <li>Using consequences to stop the behaviour in the moment.</li>
            <li>Asking the student to explain their behaviour while upset.</li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
