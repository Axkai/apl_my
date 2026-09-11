import React from "react";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  showPill?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  showPill = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-[1024px] mx-auto space-y-4 px-4 ${className}`}>
      {showPill && (
        <div className="inline-block">
          <div className="h-2 w-12 rounded-full bg-intro-pill-gradient mx-auto mb-4"></div>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#004899] tracking-tight leading-snug font-['Lexend',sans-serif]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-['Verdana',sans-serif] max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
