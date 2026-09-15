import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import PlaceholderFrame from "../ui/PlaceholderFrame";
import { ArrowRight, BookOpen } from "lucide-react";

export default function InclusiveStepsSection() {
  const disabilityTopics = [
    { title: "Autism", href: "/disability-strategies#autism" },
    { title: "ADHD", href: "/disability-strategies#adhd" },
    { title: "Intellectual disability", href: "/disability-strategies#intellectual-disability" },
    { title: "Specific learning disability", href: "/disability-strategies#specific-learning-disability" },
  ];

  return (
    <section
      id="how-to-be-inclusive-of-all-children"
      className="w-full bg-white py-8 lg:py-12 border-b border-slate-100 scroll-mt-20"
    >
      <Container>
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Section Header (Flush Left Alignment) */}
          <SectionHeader
            title="How to be inclusive of all children"
            showPill={true}
            align="left"
            className="px-0"
          />

          {/* Kylie's Photo Quote Banner */}
          <div className="py-2 flex justify-center">
            <div className="w-full rounded-2xl bg-white border border-slate-200/80 p-2 shadow-xs overflow-hidden">
              <Image
                src="/kylie-quote-banner.png"
                alt="Kylie's quote: Both at kinder and at school the teachers look at Lucy as though she can do everything..."
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Steps Breakdown */}
          <div className="space-y-8 pt-2 font-['Verdana',sans-serif]">
            {/* Step 1 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#004899] font-['Lexend',sans-serif]">
                1. Build partnerships with the child and their family
              </h3>
              <div className="space-y-3 text-base text-slate-700 leading-[1.8]">
                <p>
                  Building connections with the child and their family can support
                  inclusion. Work together to identify learning goals, and to create
                  positive strategies to achieve these goals. Many families inform
                  their school that their child has a disability at the time of
                  enrolment at school. However, some families may not wish to
                  disclose that their child has a developmental challenge or
                  disability, or they may not be aware of it yet.
                </p>
                <p>
                  If you notice that a child requires support in the classroom you
                  can sensitively discuss this with their family. When talking with
                  family members, focus on the learning task/s the child is finding
                  difficult, as well as the child’s strengths. Read more about
                  communicating with families in our teacher guide to
                  parent-teacher meetings. Work with the child’s family to develop
                  effective learning strategies and modifications for their child.
                  Learn more about Individual Education Plans on our transition to
                  primary page.
                </p>
              </div>

              {/* Action Button Link */}
              <div className="pt-2">
                <Button
                  href="/transition-to-primary"
                  variant="outline-navy"
                  size="md"
                >
                  <span>View transition to primary school</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#004899] font-['Lexend',sans-serif]">
                2. Learn the basics
              </h3>
              <p className="text-base text-slate-700 leading-[1.8]">
                You can make a positive difference in a child’s life by providing
                an inclusive environment. Not sure where to begin? See the basics
                guide for a list of simple things teachers can do to make a
                difference. Next, find out more about the language used when talking
                about a child&apos;s disability and how to use strengths-based
                language that focuses on their strengths, interests and
                personality traits.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#004899] font-['Lexend',sans-serif]">
                3. Collaborate with other teachers and staff
              </h3>
              <div className="space-y-3 text-base text-slate-700 leading-[1.8]">
                <p>
                  Collaboration between colleagues supports positive student
                  education experiences at school. Primary teachers and staff
                  working with children with disabilities and developmental
                  challenges may need to learn new knowledge, skills and try new
                  approaches.
                </p>
                <p>
                  Primary teachers can support each other to be inclusive and work
                  out the best ways to tailor the content of their classes. They
                  can talk together about learning plans and strategies that have
                  worked well with children, as well as those that didn’t. This way
                  teachers can learn from each other’s experiences and will feel
                  more supported.
                </p>
                <p>
                  Peer mentoring can build a teacher’s skills and confidence. You
                  may consider inviting a specialist school teacher who has worked
                  with children with developmental challenges to work with you for
                  a day, or collaborate with allied health professionals to develop
                  the most effective ways to include children with disabilities
                  and developmental challenges in your program.
                </p>
                <p>
                  Teachers can also promote and support a whole-school approach to
                  inclusion.
                </p>
              </div>

              {/* Action Button Link */}
              <div className="pt-2">
                <Button
                  href="/social-inclusion"
                  variant="outline-navy"
                  size="md"
                >
                  <span>Learn more about social inclusion</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Step 4 */}
            <div id="additional-resources" className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#004899] font-['Lexend',sans-serif]">
                4. Learn more about the different types of disabilities
              </h3>
              <p className="text-base text-slate-700 leading-[1.8]">
                Learn about the different strengths children may have, and read
                evidence-based strategies that are effective in school settings.
              </p>

              {/* Disability Category Link Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {disabilityTopics.map((topic, idx) => (
                  <a
                    key={idx}
                    href={topic.href}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/80 hover:border-[#004899] transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-[#004899]" />
                      <span className="text-sm font-semibold text-[#004899] font-['Lexend',sans-serif]">
                        {topic.title}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#004899] transform group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
