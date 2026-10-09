import React from "react";
import Image from "next/image";

export interface ContentSectionProps {
  id?: string;
  className?: string;
  /** Custom background color Tailwind class (Defaults to "bg-white") */
  bgColor?: string;
  /** Optional full-bleed background image src */
  bgImageSrc?: string;
  /** Alt text for background image */
  bgImageAlt?: string;
  /** Custom object-fit or placement classes for background image */
  bgImageClassName?: string;
  children: React.ReactNode;
}

export default function ContentSection({
  id,
  className = "",
  bgColor = "bg-white",
  bgImageSrc,
  bgImageAlt = "",
  bgImageClassName = "object-cover",
  children,
}: ContentSectionProps) {
  return (
    /* Layer 1: Full-Bleed Outer Section Container (Spans 100% viewport width) */
    <section
      id={id}
      className={`relative w-full overflow-hidden scroll-mt-20 ${bgColor} ${className}`}
    >
      {/* Optional Full-Bleed Background Image Asset Layer */}
      {bgImageSrc && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src={bgImageSrc}
            alt={bgImageAlt}
            fill
            className={`${bgImageClassName}`}
          />
        </div>
      )}

      {/* Layer 2: Content Alignment Frame (W: 1440 Max Centered, Pt: 50, Pb: 40, Pl: 190, Pr: 190) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-[30px] pb-[30px] px-[190px] flex flex-col items-start gap-0">
        {/* Layer 3: Main Content Stack Container (W: 1060 Fill, Gap: 40px) */}
        <div className="w-full max-w-[1060px] pl-[10.59px] pr-[10.61px] flex flex-col items-start gap-[40px]">
          {children}
        </div>
      </div>
    </section>
  );
}
