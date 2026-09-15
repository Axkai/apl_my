import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import PlaceholderFrame from "../ui/PlaceholderFrame";

export default function ResourcePromoGrid() {
  return (
    <section
      id="allplay-learn-resources"
      className="w-full bg-white py-8 lg:py-12 scroll-mt-20"
    >
      <Container>
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Section Header (Flush Left Alignment) */}
          <SectionHeader
            title="AllPlay Learn resources"
            subtitle="Explore resources, evidence-informed strategies, and practical tools tailored for primary school teachers."
            showPill={true}
            align="left"
            className="px-0"
          />

          {/* 2-Column Resource Promo Banner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Card 1 */}
            <div className="group rounded-2xl overflow-hidden shadow-md border border-purple-900/10 hover:shadow-xl transition-all">
              <PlaceholderFrame
                label="AllPlay Learn Primary Teacher Resources"
                aspectRatio="aspect-16/9"
              />
              <div className="bg-[#3D2590] text-white p-5 space-y-1.5">
                <h4 className="text-base font-semibold font-['Lexend',sans-serif]">
                  Primary Teacher Resources
                </h4>
                <p className="text-xs text-purple-100/80 font-['Verdana',sans-serif] leading-relaxed">
                  Comprehensive guidelines and classroom management strategies for inclusive teaching.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl overflow-hidden shadow-md border border-purple-900/10 hover:shadow-xl transition-all">
              <PlaceholderFrame
                label="AllPlay Learn Primary Strategies"
                aspectRatio="aspect-16/9"
              />
              <div className="bg-[#3D2590] text-white p-5 space-y-1.5">
                <h4 className="text-base font-semibold font-['Lexend',sans-serif]">
                  Primary Strategies
                </h4>
                <p className="text-xs text-purple-100/80 font-['Verdana',sans-serif] leading-relaxed">
                  Practical, strengths-based evidence strategies to support all children in the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
