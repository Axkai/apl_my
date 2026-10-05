import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BulletList from "@/components/ui/BulletList";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function SpecificLearningDisorderStrategiesSection() {
  return (
    <ContentSection id="evidence-based-strategies" bgColor="bg-white">
      <SectionHeader title="Evidence-based strategies" align="left" showPill={true} />
      <SubSectionGroup layout="tabbed-vertical">
        <SubSection id="underlying-skills" title="Directly tackle underlying skills">
          <BulletList>
            <li>
              <span className="font-bold">Target phonological skills.</span> Consider teaching children phonemes (speech sounds), graphemes (letters that make up a sound such as ‘ph’), morphemes (smallest part of a word that means something, such as ‘cut’ in ‘cutting’), and orthography – especially when students are in lower primary. For example, ask children to rearrange syllables to form a word, or write different word endings.
            </li>
            <li>
              <span className="font-bold">Target comprehension.</span> Building student understanding or comprehension of text can support a child with a reading disability - especially when students are in upper primary. For example, ask students to guess what might happen half-way through a story, or imagine a scene from the story.
            </li>
            <li>
              <span className="font-bold">Target working memory.</span> Students with specific learning disorders may need extra help to support their working memory (remembering several things at the same time). Consider how to tailor tasks so that there isn’t too much to remember at a time. Extra support such as mnemonics (memory strategies) or handouts/notes on the board can be helpful.
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="senses-and-fun" title="Engage other senses and make learning fun">
          <BulletList>
            <li>
              <span className="font-bold">Use visual supports.</span> Mathematics may be simpler for some students to learn when concrete, visual objects are used in demonstrations. Asking students to create semantic maps or graphic organisers may support students with a writing or reading disability.
            </li>
            <li>
              <span className="font-bold">Use music, rhythm and touch.</span> Rhythm and music can help a child learn phonemes.{" "}
              <a
                href="https://allplaylearn.org.au/content/uploads/2019/07/Touch-numbers.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0056B3] hover:underline"
              >
                Dots on written numbers
              </a>{" "}
              that a student can touch and count can help a child learn to add and subtract.
            </li>
            <li>
              <span className="font-bold">Make it a game.</span> When possible, mix learning with fun games to increase student engagement and enjoyment of learning.
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="opportunities-to-practise" title="Provide lots of opportunities to practise">
          <BulletList>
            <li>
              <span className="font-bold">Students may need to practise a task lots of times.</span> It may be helpful to give them lots of similar mathematics problems or have them read the same short story lots of times. For children with reading difficulties, this is particularly helpful with a book that has lots of words that need decoding (i.e. words where the pronunciations are not easily predicted from the spelling).
            </li>
            <li>
              <span className="font-bold">When a task is new, students will learn best with help.</span> When possible, offer them help (i.e. prompts, demonstrations, encouragement), and gradually reduce this help as they become more capable. This can be provided by parents/teachers, or if working in pairs or small groups, by other students/peers.
            </li>
            <li>
              <span className="font-bold">Mix mastered tasks with target tasks.</span> When students are practising, mixing lots of tasks they can already do with a few new tasks can help them feel confident.
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="give-instructions" title="Consider how you give instructions">
          <BulletList>
            <li>
              <span className="font-bold">Provide clear and explicit instructions.</span> Break down target skills (e.g. help them identify key parts of an essay question) and identify the components of a problem (e.g. break down the steps needed to solve a maths problem).
            </li>
            <li>
              <span className="font-bold">Model tasks and the underlying strategies or thinking.</span> Students may learn more effectively if shown how to do a task. Consider talking out loud to demonstrate the strategies you use to problem solve when working on the task.
            </li>
            <li>
              <span className="font-bold">Provide concrete examples.</span> Students may learn new information more easily when there are concrete examples and objects. When students can complete concrete problems they can then start working on abstract problems. This is especially important with students from lower primary.
            </li>
            <li>
              <span className="font-bold">Monitor and check understanding.</span> Check if students have understood what they are learning. Consider checking their understanding and progress regularly.
            </li>
          </BulletList>
        </SubSection>

        <SubSection id="extra-supports" title="Provide students with extra supports and strategies">
          <BulletList>
            <li>
              <span className="font-bold">Teach students to self-monitor.</span> Students can be taught to assess their own work. For example, give students with a writing disability a list of things to include in their work (e.g. five adjectives) and ask them to plan how they will include them. They can then assess whether they have successfully included that list of things in their work.
            </li>
            <li>
              <span className="font-bold">Provide opportunities for peer tutoring.</span> Consider pairing a student with a specific learning disorder with other students or incorporating group work into learning. Other students can help by demonstrating how to do a task, or by giving prompts and feedback. See{" "}
              <a
                href="?tab=t.4x4tqckowy5"
                className="text-[#0056B3] hover:underline"
              >
                AllPlay Learn’s peer mediation
              </a>{" "}
              for important tips about pairing children.
            </li>
            <li>
              <span className="font-bold">Actively use and teach meta-cognitive strategies.</span> Meta-cognitive strategies help students to understand the way they best learn. Teaching students how to use strategies such as rehearsal (repeating), elaboration (paraphrasing and summarising), reading aloud, using mnemonics, visual supports or organisers (e.g. concept maps; taking notes), reading comprehension strategies such as self-questioning, and opportunities for learning reflections can all help students identify strategies to support their learning.
            </li>
          </BulletList>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}
