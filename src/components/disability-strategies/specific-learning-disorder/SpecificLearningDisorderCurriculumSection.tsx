import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function SpecificLearningDisorderCurriculumSection() {
  return (
    <ContentSection id="curriculum-considerations" bgColor="bg-white">
      <SectionHeader title="Curriculum considerations" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection id="general" title="General">
          <BulletList>
            <li>
              <span className="font-bold">Note about multilingual students:</span> difficulty learning or using a second language, such as Chinese, does not by itself indicate dyslexia. Multilingual students may experience language-processing or language-learning difficulties that are related to differences between languages or the demands of learning multiple languages.
            </li>
            <li>
              Students with a reading or writing difficulty may need written tasks to be tailored for their current reading level. Consider tailoring your approach to include teaching methods that don’t involve reading.
            </li>
            <li>
              Audio textbooks allow students to focus on learning the information they need to know.
            </li>
            <li>
              It may be helpful to provide additional time for students to complete tasks in school (i.e., homework or during exams).
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="english" title="English">
          <BulletList>
            <li>
              Children with a reading or writing difficulty may need extra support with this subject. A range of very relevant strategies are covered in the above Evidence-based strategies.
            </li>
            <li>
              Consider whether some tasks can be tailored so there is less written content for some literacy skills. For example, if assessing whether a child understood a book read to the class, a student could draw images to identify key plot twists instead of writing them down.
            </li>
            <li>
              Consider using structured phonics programs (i.e., Orton-Gillingham approach) to aid the students in learning.
            </li>
            <li>
              Provide materials with dyslexic-friendly fonts (e.g., Arial, Comic Sans) to ease reading.
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="other-languages" title="Other languages">
          <BulletList>
            <li>
              Students with a specific learning disorder in reading or writing may find learning new phonetics difficult. They may benefit from learning languages that uses non-phonetic alphabets (i.e. Chinese characters).
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="mathematics" title="Mathematics">
          <BulletList>
            <li>
              Students with a mathematics difficulty will need support with this subject. A range of very relevant strategies are covered in the above Evidence-based strategies.
            </li>
            <li>
              Students with reading difficulty may need support with mathematics. In particular, they may need support with remembering number facts or ‘how many’ a particular number is.
            </li>
            <li>
              Starting with concrete materials before moving to abstract concepts may be helpful.
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="science" title="Science">
          <BulletList>
            <li>
              Concepts and information may be taught through visual representations, audio textbooks or read-aloud in class.
            </li>
            <li>
              Reduce unnecessary writing while retaining scientific thinking.
            </li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
