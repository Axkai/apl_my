import React from "react";

export interface SubSectionGroupProps {
  className?: string;
  children: React.ReactNode;
}

export function SubSectionGroup({
  className = "",
  children,
}: SubSectionGroupProps) {
  return (
    /* Layer 12: Bottom Sub-sections Container Frame (W: 1038.8 Fill, Flow: Vertical, Gap: 50px, Pt: 25, Pr: 25, Pb: 15, Pl: 0) */
    <div
      className={`w-full max-w-[1038.8px] flex flex-col items-start gap-[50px] pt-[25px] pr-[25px] pb-[15px] min-h-[249px] ${className}`}
    >
      {children}
    </div>
  );
}

export interface SubSectionProps {
  id?: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

export function SubSection({
  id,
  title,
  className = "",
  children,
}: SubSectionProps) {
  return (
    <div
      id={id}
      className={`w-full max-w-[1038.8px] flex flex-col items-start gap-[15px] ${
        id ? "scroll-mt-20" : ""
      } ${className}`}
    >
      {/* Layer 13: Subsection Header Container Frame (W: 1038.8 Fill, H: 32 Hug, Gap: 0, Padding: 0) */}
      <div className="w-full max-w-[1038.8px] h-[32px] flex items-center justify-start p-0 gap-0">
        {/* Layer 14: Subsection Heading Text Node (Typography: Semantic/Heading 3 · 28/32, Color: Congress Blue #004899) */}
        <h3 className="text-[28px] leading-[32px] font-semibold text-[#004899] font-['Lexend',sans-serif]">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}
