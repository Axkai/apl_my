import React from "react";
import Image from "next/image";
import JumpLinksList from "./JumpLinksList";
import BodyText from "./BodyText";

export interface JumpLink {
  label: string;
  href: string;
}

export interface PageHeroProps {
  /** Main H1 Heading Title */
  title: string;
  /** H2 Subtitle (Optional) */
  subtitle?: string;
  /** Hero body text / intro description below jump links (Optional) */
  description?: React.ReactNode;
  /** Array of jump anchor links for table of contents (Optional) */
  jumpLinks?: JumpLink[];
  /** Section heading for jump links (Defaults to "On this page:") */
  jumpLinksTitle?: string;
  /** Full-bleed hero background image src (Defaults to "/hero-bg.svg") */
  heroGraphicSrc?: string;
  /** Alt text for accessibility */
  heroGraphicAlt?: string;
  /** Hero background canvas height in pixels (Defaults to 578) */
  heroHeight?: number;
  /** Additional container wrapper class overrides */
  className?: string;
  /** Supplementary React nodes / slots */
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  description,
  jumpLinks,
  jumpLinksTitle = "On this page:",
  heroGraphicSrc = "/hero-bg.svg",
  heroGraphicAlt = "AllPlay Learn Header Graphic",
  heroHeight = 578,
  className = "",
  children,
}: PageHeroProps) {
  const heightPx = `${heroHeight}px`;

  return (
    /* Layer 1: Full-Bleed PageHero Outer Section Container (Spans 100% viewport width) */
    <section
      className={`relative w-full overflow-hidden bg-white h-auto ${className}`}
      style={{ minHeight: heightPx }}
    >
      {/* Full-Bleed Hero Background Layer (Dynamic canvas height) */}
      {heroGraphicSrc && (
        <div
          className="absolute top-0 left-0 w-full pointer-events-none z-0"
          style={{ height: heightPx }}
        >
          <Image
            src={heroGraphicSrc}
            alt={heroGraphicAlt}
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      )}

      {/* Layer 2: PageHero Content Alignment Frame */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-[180px] lg:pt-[220px] pb-[40px] px-[24px] md:px-[190px] flex flex-col justify-between">
        {/* Layer 3: PageHero Content Container Stack (Position X: 190, Y: 250, W: 1060 Fill, H: 303 Hug, Gap: 20px) */}
        <div className="w-full max-w-[1060px] pl-[10.59px] pr-[10.61px] flex flex-col gap-[20px] items-start">
          {/* Layer 4: Title & Subtitle Stack Container (Position X: 0, Y: 0, W: 1060 Fill, H: 128 Hug, Gap: 0) */}
          <div className="w-full max-w-[1060px] flex flex-col gap-0 items-start">
            {/* Layer 5: Heading 1 Text */}
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-semibold text-[#014996] tracking-normal leading-tight lg:leading-[85px] font-[family-name:var(--font-montserrat)]">
              {title}
            </h1>

            {/* Layer 6: Subtitle Container */}
            {subtitle && (
              <div className="w-full max-w-[1060px] h-[43px] flex items-center">
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#004899] leading-tight lg:leading-[43px] font-['Lexend',sans-serif]">
                  {subtitle}
                </h2>
              </div>
            )}
          </div>

          {/* Layer 7: Jump Links Box Container */}
          {jumpLinks && jumpLinks.length > 0 && (
            <JumpLinksList items={jumpLinks} title={jumpLinksTitle} />
          )}

          {/* Layer 8: Hero Description Body Text (Below Jump Links) */}
          {description && (
            <BodyText className="max-w-[1038.8px]">
              {description}
            </BodyText>
          )}

          {/* Supplementary slot for custom page actions */}
          {children}
        </div>
      </div>
    </section>
  );
}
