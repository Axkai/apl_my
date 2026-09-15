import React from "react";
import Image from "next/image";
import Container from "./ui/Container";
import SectionHeader from "./ui/SectionHeader";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 pb-10 lg:pt-[150px] lg:pb-[40px] flex flex-col justify-between">
      {/* Edge-to-Edge Right Wave & Children Graphic Asset */}
      <div className="absolute top-0 right-0 w-full lg:w-[56%] h-full pointer-events-none z-0">
        <Image
          src="/homepage-hero-bg.png"
          alt="Children enjoying inclusive education with AllPlay Learn graphic wave"
          fill
          className="object-cover object-right-top"
          priority
        />
      </div>

      {/* Hero Main Content */}
      <Container className="relative z-10 w-full">
        <div className="max-w-[1060px] mx-auto">
          <div className="max-w-[686px] space-y-[31px]">
            {/* H1 Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-[#004899] leading-tight lg:leading-[85px] tracking-tight font-['Lexend',sans-serif]">
              AllPlay Learn <br />
              Malaysia
            </h1>

            {/* Body Copy (Figma spec: 685.45 Fill x 115.5 Hug, Position Y: 201, Pr: 15.5, Gap to H1: 31) */}
            <p className="text-sm sm:text-base lg:text-[14px] font-normal text-[#4A4A4A] leading-relaxed lg:leading-[25px] font-['Verdana',sans-serif] pr-[15.5px]">
              AllPlay Learn Malaysia builds on the Australian AllPlay Learn
              program, adapting its evidence-informed resources for Malaysian
              primary schools. This website provides practical, easy-to-use
              resources to support educators, parents and children to recognise
              strengths and support needs to help all children, including those
              with special needs, participate, learn and feel included at
              school.
            </p>

            {/* Monash University Partner Logo (Figma spec: 293 x 125, Position Y: 347.5, Gap to copy: 31) */}
            <div className="w-[293px] h-[125px] relative">
              <Image
                src="/monash-logo.png"
                alt="Monash University Logo"
                width={293}
                height={125}
                className="w-[293px] h-[125px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Sub-Banner Intro Section */}
        <div className="mt-20 lg:mt-28">
          <SectionHeader
            title={
              <>
                Resources and information for children, parents, and <br className="hidden md:inline" />
                teachers in Malaysian primary schools
              </>
            }
          />
        </div>
      </Container>
    </section>
  );
}

