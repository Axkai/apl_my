import React from "react";

export interface JumpLinkItem {
  label: string;
  href: string;
}

export interface JumpLinksListProps {
  /** Array of jump links with label and href */
  items: JumpLinkItem[];
  /** Optional section heading title above the links */
  title?: string;
  /** Optional container class overrides */
  className?: string;
}

export default function JumpLinksList({
  items,
  title,
  className = "",
}: JumpLinksListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`w-full max-w-[1060px] flex flex-col items-start gap-[15px] p-0 ${className}`}>
      {title && (
        <h3 className="text-xs sm:text-sm font-semibold text-slate-800 tracking-wide font-['Lexend',sans-serif]">
          {title}
        </h3>
      )}
      <ul className="pl-[30px] w-full max-w-[1029.8px] flex flex-col gap-[10px] text-sm font-['Verdana',sans-serif]">
        {items.map((item, idx) => (
          <li key={idx} className="w-full max-w-[1029.8px] h-[25px] flex items-center gap-2">
            <span className="text-[#004899] font-bold select-none">•</span>
            <a
              href={item.href}
              className="text-[14px] leading-[25px] h-[25px] flex items-center text-[#004899] font-medium font-['Verdana',sans-serif] hover:text-[#002b5c] underline decoration-dotted underline-offset-4 hover:decoration-solid transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
