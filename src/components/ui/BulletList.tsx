import React from "react";

export interface BulletListProps {
  items?: React.ReactNode[];
  children?: React.ReactNode;
  className?: string;
  textColor?: string;
}

export default function BulletList({
  items,
  children,
  className = "",
  textColor = "text-[#4A4A4A]",
}: BulletListProps) {
  return (
    <ul
      className={`list-disc pl-6 flex flex-col gap-2 font-[family-name:var(--font-open-sans)] text-[14px] leading-[25px] ${textColor} ${className}`}
    >
      {items
        ? items.map((item, index) => <li key={index}>{item}</li>)
        : children}
    </ul>
  );
}
