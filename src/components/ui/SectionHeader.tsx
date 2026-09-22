import React from "react";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  showPill?: boolean;
  align?: "center" | "left";
  className?: string;
  children?: React.ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  showPill = true,
  align = "center",
  className = "",
  children,
}: SectionHeaderProps) {
  const isLeft = align === "left";

  if (isLeft) {
    return (
      <div
        className={`w-full max-w-[1038.8px] flex flex-col items-start gap-[15px] pb-[15px] ${className}`}
      >
        <div>
          {showPill && (
            <div className="inline-block">
              <div className="w-[50px] h-[14px] rounded-full bg-intro-pill-gradient mb-[15px]" />
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#004899] leading-tight lg:leading-[43px] font-['Lexend',sans-serif]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-['Verdana',sans-serif]">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className={`text-center max-w-[996px] mx-auto ${className}`}>
      {showPill && (
        <div className="inline-block">
          <div className="w-[50px] h-[14px] rounded-full bg-intro-pill-gradient mb-[15px] mx-auto" />
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#004899] leading-tight lg:leading-[43px] font-['Lexend',sans-serif]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-['Verdana',sans-serif] max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
