import React from "react";

export interface BodyTextProps {
  className?: string;
  textColor?: string;
  children: React.ReactNode;
}

export default function BodyText({
  className = "",
  textColor = "text-[#4A4A4A]",
  children,
}: BodyTextProps) {
  return (
    <p
      className={`w-full max-w-[1038.8px] text-[14px] leading-[25px] ${textColor} font-[family-name:var(--font-open-sans)] ${className}`}
    >
      {children}
    </p>
  );
}
