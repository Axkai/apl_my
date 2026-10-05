import React from "react";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  showPill?: boolean;
  align?: "center" | "left";
  className?: string;
  titleColor?: string;
  subtitleColor?: string;
  children?: React.ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  showPill = true,
  align = "center",
  className = "",
  titleColor = "text-[#014996]",
  subtitleColor = "text-slate-600",
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
          <h2 className={`text-2xl sm:text-3xl lg:text-[36px] font-semibold ${titleColor} leading-tight lg:leading-[43px] font-[family-name:var(--font-lexend)]`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-base sm:text-lg ${subtitleColor} leading-relaxed font-['Verdana',sans-serif]`}>
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
      <h2 className={`text-2xl sm:text-3xl lg:text-[36px] font-medium ${titleColor} leading-tight lg:leading-[43px] font-[family-name:var(--font-montserrat)]`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${subtitleColor} leading-relaxed font-['Verdana',sans-serif] max-w-3xl mx-auto`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
