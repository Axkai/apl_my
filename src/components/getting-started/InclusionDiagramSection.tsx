import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import CalloutBox from "../ui/CalloutBox";
import PlaceholderFrame from "../ui/PlaceholderFrame";

export default function InclusionDiagramSection() {
  return (
    <section
      id="what-is-inclusive-education"
      className="w-full bg-white py-8 lg:py-12 border-b border-slate-100 scroll-mt-20"
    >
      <Container>
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Section Header with Flush-Left Gradient Pill & Title */}
          <SectionHeader
            title="What is inclusive education?"
            showPill={true}
            align="left"
            className="px-0"
          />

          {/* Narrative Body Copy (Aligned Flush Left with Header) */}
          <div className="space-y-4 text-base text-slate-700 leading-[1.8] font-['Verdana',sans-serif]">
            <p>
              Inclusive education means all students, including students with
              disabilities, are welcomed by their school and supported to reach
              their full potential. Inclusion is most effective when schools aim
              to create a culture that celebrates diversity and builds on the
              strengths of each student. Inclusive schools nurture professional
              learning communities that empower teachers to create optimum
              learning outcomes for students with disabilities through the use of
              best practice approaches and current, evidence-based strategies.
            </p>

            <p>
              The Disability Standards for Education (2005) underpin inclusive
              education in Victorian schools. These legal standards are based on
              a human rights framework and have been introduced in order that
              students with disabilities can participate in education on an
              equal basis with their peers. Schools need to comply with three
              main obligations under these standards—consultation, reasonable
              adjustments and elimination of harassment and victimisation.
            </p>
          </div>

          {/* Graphical Inclusion Diagram */}
          <div className="py-2 flex justify-center">
            <div className="w-full max-w-2xl rounded-2xl bg-white border border-slate-200/80 p-4 shadow-xs overflow-hidden">
              <Image
                src="/inclusion-diagram.png"
                alt="Inclusion vs Exclusion, Segregation, Integration Diagram"
                width={1000}
                height={600}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Definition Callout Box */}
          <CalloutBox variant="quote">
            &ldquo;Inclusion is about providing equal access and opportunity to
            all, and involves removing discrimination and other barriers so that
            all individuals feel that they belong and are connected. Unlike
            integration, which expects children with disability to adapt to the
            regular learning environment, inclusion creates a learning
            environment that adapts to each child.&rdquo;
          </CalloutBox>

          {/* Sub-sections */}
          <div className="space-y-6 pt-2">
            {/* Sub-section 1 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#004899] font-['Lexend',sans-serif]">
                What is an inclusive teacher?
              </h3>
              <p className="text-base text-slate-700 leading-[1.8] font-['Verdana',sans-serif]">
                An inclusive teacher supports all children to participate, learn
                and succeed in all aspects of education.
              </p>
            </div>

            {/* Sub-section 2 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#004899] font-['Lexend',sans-serif]">
                What are disabilities and developmental challenges?
              </h3>
              <p className="text-base text-slate-700 leading-[1.8] font-['Verdana',sans-serif]">
                Children with disabilities and developmental challenges might
                include those who have limitations in mobility (such as difficulty
                or inability to walk), the way they think or behave (e.g.
                intellectual disabilities, autism, behavioural/emotional
                disorders), and sensory difficulties (e.g. vision/hearing).
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
