import React from "react";
import Image from "next/image";
import { Sparkles, GraduationCap } from "lucide-react";
import Container from "./ui/Container";
import SectionHeader from "./ui/SectionHeader";

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-20 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Context & Typography */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#004899] leading-[1.1] tracking-tight font-['Lexend',sans-serif]">
              AllPlay Learn <br />
              Malaysia
            </h1>

            <p className="text-base sm:text-lg font-normal text-slate-600 leading-[1.7] max-w-[760px] font-['Verdana',sans-serif]">
              AllPlay Learn Malaysia builds on the Australian AllPlay Learn
              program, adapting its evidence-informed resources for Malaysian
              primary schools. This website provides practical, easy-to-use
              resources to support educators, parents and children to recognise
              strengths and support needs to help all children, including those
              with special needs, participate, learn and feel included at
              school.
            </p>

            {/* Monash University Partner Logo */}
            <div className="pt-8 lg:pt-10">
              <Image
                src="/monash-logo.png"
                alt="Monash University Logo"
                width={340}
                height={110}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column: Wavy Organic Hero Frame Placeholder */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-4/3 rounded-3xl bg-[#1565C0] p-6 shadow-2xl overflow-hidden group">
              {/* Decorative Doodle SVG Background Elements */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" fill="none" stroke="currentColor">
                  <pattern
                    id="hero-doodles"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="15" cy="15" r="2" fill="white" />
                    <circle cx="45" cy="45" r="3" fill="white" />
                    <path
                      d="M10 40 Q25 30 40 40"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path d="M30 10 L40 20" stroke="white" strokeWidth="2" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#hero-doodles)" />
                </svg>
              </div>

              {/* Wavy Red Accent Wave Line at Bottom */}
              <div className="absolute -bottom-2 inset-x-0 h-6 bg-[#E53935] rounded-b-3xl transform skew-y-1"></div>

              {/* Placeholder Inner Image Container */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex flex-col items-center justify-center text-white p-8 text-center border-2 border-white/20">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Inclusive Education for Every Child
                </h3>
                <p className="text-xs text-blue-100 max-w-xs">
                  [Hero Image & Doodle Art Placeholder]
                </p>
                <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs text-blue-50 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>AllPlay Learn Malaysia Prototype</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Banner Intro Section (Using Modular SectionHeader) */}
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
