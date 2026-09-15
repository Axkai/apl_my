import React from "react";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  showPill?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  showPill = true,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`${
        isLeft ? "text-left w-full" : "text-center max-w-[996px] mx-auto"
      } ${className}`}
    >
      {showPill && (
        <div className="inline-block">
          <div
            className={`w-[50px] h-[14px] rounded-full bg-intro-pill-gradient mb-[15px] ${
              isLeft ? "" : "mx-auto"
            }`}
          ></div>
        </div>
      )}
      <h2 className="text-xl sm:text-2xl lg:text-[22px] font-semibold text-[#004899] tracking-tight leading-snug lg:leading-[29px] font-['Lexend',sans-serif] pr-[25px]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-['Verdana',sans-serif] ${
            isLeft ? "" : "max-w-3xl mx-auto"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
