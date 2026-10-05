"use client";

import React, { useState } from "react";

export interface SubSectionGroupProps {
  /**
   * Layout mode:
   * - "stack" (default): Original single-column vertical stack (max-w-[1038.8px])
   * - "grid-2": 2xN grid layout (each cell max-w-[530px] fill, dynamic hug height)
   * - "tabbed-vertical": Side-by-side vertical tabs menu on left, active content panel on right
   */
  layout?: "stack" | "grid-2" | "tabbed-vertical";
  className?: string;
  children: React.ReactNode;
}

export function SubSectionGroup({
  layout = "stack",
  className = "",
  children,
}: SubSectionGroupProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (layout === "tabbed-vertical") {
    const rawChildren = React.Children.toArray(children);
    const subsections = rawChildren.filter(
      (child): child is React.ReactElement<SubSectionProps> =>
        React.isValidElement(child)
    );

    if (subsections.length === 0) {
      return null;
    }

    const safeActiveIndex = Math.min(
      Math.max(0, activeTabIndex),
      subsections.length - 1
    );
    const activeSubsection = subsections[safeActiveIndex];

    return (
      <div
        className={`w-full max-w-[1038.8px] pt-[25px] pb-[15px] flex flex-col md:flex-row items-start gap-0 ${className}`}
      >
        {/* Mobile Horizontal Scrollable Tab Bar (< md) */}
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="md:hidden w-full flex flex-row overflow-x-auto gap-2 pb-3 mb-4 border-b border-slate-200 shrink-0"
        >
          {subsections.map((sub, idx) => {
            const isActive = idx === safeActiveIndex;
            return (
              <button
                key={sub.props.id || `tab-m-${idx}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${sub.props.id || idx}`}
                onClick={() => setActiveTabIndex(idx)}
                className={`px-4 py-2 rounded-full font-['Lexend',sans-serif] text-[14px] leading-[20px] font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-[#004899] text-white shadow-sm"
                    : "bg-slate-100 text-[#004899] hover:bg-slate-200"
                }`}
              >
                {sub.props.title}
              </button>
            );
          })}
        </div>

        {/* Desktop Vertical Side-Tab Menu (>= md) */}
        <div
          role="tablist"
          aria-orientation="vertical"
          className="hidden md:flex w-[320px] lg:w-[360px] flex-col items-stretch border-r border-slate-200 pr-5 lg:pr-7 relative shrink-0"
        >
          {subsections.map((sub, idx) => {
            const isActive = idx === safeActiveIndex;
            const level = sub.props.level || "h4";
            const titleStyles =
              level === "h4"
                ? "text-[18px] leading-[25px]"
                : "text-[24px] lg:text-[28px] leading-[32px]";

            return (
              <button
                key={sub.props.id || `tab-d-${idx}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${sub.props.id || idx}`}
                onClick={() => setActiveTabIndex(idx)}
                className={`w-full py-3 pr-4 pl-3 text-right block cursor-pointer transition-all duration-200 relative ${
                  isActive
                    ? `font-bold text-[#004899] opacity-100`
                    : `font-semibold text-[#004899] opacity-80 hover:opacity-100 hover:bg-slate-50/50`
                }`}
              >
                <span className={`block w-full text-right ${titleStyles} font-['Lexend',sans-serif] tracking-normal`}>
                  {sub.props.title}
                </span>

                {/* Active Indicator Bar on vertical right edge */}
                {isActive && (
                  <span
                    className="w-[4px] h-full bg-intro-pill-gradient rounded-full absolute -right-[2.5px] top-0"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Active SubSection Content Panel */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeSubsection.props.id || safeActiveIndex}`}
          className="flex-1 w-full pl-0 md:pl-8 lg:pl-10 pt-2 md:pt-0 flex flex-col items-start gap-[16px]"
        >
          {activeSubsection.props.children}
        </div>
      </div>
    );
  }

  const layoutClasses =
    layout === "grid-2"
      ? "grid grid-cols-1 md:grid-cols-2 gap-x-[40px] lg:gap-x-[50px] gap-y-[50px] max-w-[1060px]"
      : "flex flex-col items-start gap-[50px] max-w-[1038.8px]";

  return (
    <div
      className={`w-full pt-[25px] pb-[15px] ${layoutClasses} ${className}`}
    >
      {children}
    </div>
  );
}

export interface SubSectionProps {
  id?: string;
  title: string;
  /** Heading level: "h3" (28/32, default) or "h4" (18/25 per Figma spec) */
  level?: "h3" | "h4";
  titleColor?: string;
  className?: string;
  children: React.ReactNode;
}

export function SubSection({
  id,
  title,
  level = "h3",
  titleColor = "text-[#004899]",
  className = "",
  children,
}: SubSectionProps) {
  const HeadingTag = level === "h4" ? "h4" : "h3";
  const titleStyles =
    level === "h4"
      ? `text-[18px] leading-[25px] font-semibold ${titleColor}`
      : `text-[24px] lg:text-[28px] leading-[32px] font-semibold ${titleColor}`;

  return (
    <div
      id={id}
      className={`w-full h-auto flex flex-col md:grid md:grid-rows-subgrid md:row-span-2 items-start justify-start gap-[16px] ${
        id ? "scroll-mt-20" : ""
      } ${className}`}
    >
      {/* Subsection Heading Text Node */}
      <div className="w-full flex items-center justify-start p-0 gap-0">
        <HeadingTag className={`${titleStyles} font-['Lexend',sans-serif]`}>
          {title}
        </HeadingTag>
      </div>
      <div className="w-full flex flex-col items-start gap-[16px]">
        {children}
      </div>
    </div>
  );
}
