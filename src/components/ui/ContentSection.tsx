import React from "react";

export interface ContentSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function ContentSection({
  id,
  className = "",
  children,
}: ContentSectionProps) {
  return (
    /* Layer 1: Outer Section Container (W: 1440 Fill, H: 1183 Hug, Pt: 50, Pb: 40, Pl: 190, Pr: 190) */
    <section
      id={id}
      className={`w-full max-w-[1440px] mx-auto bg-white pt-[50px] pb-[40px] px-[190px] flex flex-col items-start gap-0 min-h-[1183px] scroll-mt-20 ${className}`}
    >
      {/* Layer 2: Main Content Stack Container (W: 1060 Fill, H: 1093 Hug, Gap: 40px, Pl: 10.59, Pr: 10.61) */}
      <div className="w-full max-w-[1060px] pl-[10.59px] pr-[10.61px] flex flex-col items-start gap-[40px] min-h-[1093px]">
        {children}
      </div>
    </section>
  );
}
