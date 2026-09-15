import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

export default function GuideHero() {
  const jumpLinks = [
    { label: "What is inclusive education?", href: "#what-is-inclusive-education" },
    { label: "How to be inclusive of all children", href: "#how-to-be-inclusive-of-all-children" },
    { label: "AllPlay Learn resources", href: "#allplay-learn-resources" },
    { label: "Additional resources", href: "#additional-resources" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white border-b border-slate-100 pt-[250px] pb-[40px] flex items-center">
      {/* Top-Left Pink Doodle Line-Art Background Asset */}
      <div className="absolute top-0 left-0 w-1/2 h-64 sm:h-80 pointer-events-none opacity-80 z-0">
        <Image
          src="/hero-left-doodles.png"
          alt=""
          fill
          className="object-contain object-top-left"
          priority
        />
      </div>

      {/* Right-Side 3D Wave & Teacher Photo Cutout Graphic Asset */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none z-0">
        <Image
          src="/hero-teacher-wave.png"
          alt="Teacher holding books with AllPlay Learn doodle wave graphic"
          fill
          className="object-cover object-right-top"
          priority
        />
      </div>

      {/* Main Content Container (Figma spec: 1060px max-width, 190px side margins, 250px top offset) */}
      <div className="mx-auto w-full max-w-[1060px] px-6 lg:px-0 relative z-10">
        <div className="w-full">
          {/* Breadcrumb Navigation */}
          <nav className="text-xs font-medium text-slate-500 flex items-center gap-2 font-['Verdana',sans-serif] mb-3">
            <a href="/" className="hover:text-[#004899] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#004899] font-semibold">Getting Started</span>
          </nav>

          {/* Title & Subtitle Block */}
          <div className="space-y-1 mb-[20px]">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#004899] tracking-tight leading-tight font-['Lexend',sans-serif]">
              Getting Started
            </h1>
            <p className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#004899] leading-snug font-['Lexend',sans-serif]">
              Information for teachers
            </p>
          </div>

          {/* "On this page:" Jump Links Box (Figma spec: 1060 Fill x 155 Hug) */}
          <div className="w-full max-w-[1060px]">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-800 tracking-wide font-['Lexend',sans-serif] mb-2">
              On this page:
            </h3>
            <ul className="space-y-1.5 text-sm font-['Verdana',sans-serif]">
              {jumpLinks.map((link, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#004899] font-bold select-none">•</span>
                  <a
                    href={link.href}
                    className="text-[#004899] font-medium hover:text-[#002b5c] underline decoration-dotted underline-offset-4 hover:decoration-solid transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
