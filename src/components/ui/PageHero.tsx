import React from "react";
import Image from "next/image";
import JumpLinksList from "./JumpLinksList";

export interface JumpLink {
  label: string;
  href: string;
}

export interface PageHeroProps {
  /** Main H1 Heading Title */
  title: string;
  /** H2 Subtitle (Optional) */
  subtitle?: string;
  /** Array of jump anchor links for table of contents (Optional) */
  jumpLinks?: JumpLink[];
  /** Section heading for jump links (Defaults to "On this page:") */
  jumpLinksTitle?: string;
  /** Custom right-side graphic cutout image src */
  heroGraphicSrc?: string;
  /** Alt text for accessibility */
  heroGraphicAlt?: string;
  /** Top-left doodle line art image src */
  doodlesGraphicSrc?: string;
  /** Additional container wrapper class overrides */
  className?: string;
  /** Supplementary React nodes / slots */
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  jumpLinks,
  jumpLinksTitle = "On this page:",
  heroGraphicSrc = "/hero-teacher-wave.png",
  heroGraphicAlt = "AllPlay Learn Header Graphic",
  doodlesGraphicSrc = "/hero-left-doodles.png",
  className = "",
  children,
}: PageHeroProps) {
  return (
    /* Layer 1: PageHero Outer Section Container (W: 1440 Fill, H: 593 Hug, Pt: 250, Pr: 190, Pb: 40, Pl: 190) */
    <section className={`relative w-full overflow-hidden bg-white pt-[250px] pb-[40px] px-[190px] flex flex-col justify-between min-h-[593px] ${className}`}>
      {/* Top-Left Pink Doodle Line-Art Background Asset */}
      {doodlesGraphicSrc && (
        <div className="absolute top-0 left-0 w-1/2 h-64 sm:h-80 pointer-events-none opacity-80 z-0">
          <Image
            src={doodlesGraphicSrc}
            alt=""
            fill
            className="object-contain object-top-left"
            priority
          />
        </div>
      )}

      {/* Right-Side 3D Wave & Graphic Cutout Asset */}
      {heroGraphicSrc && (
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none z-0">
          <Image
            src={heroGraphicSrc}
            alt={heroGraphicAlt}
            fill
            className="object-cover object-right-top"
            priority
          />
        </div>
      )}

      {/* Layer 2: PageHero Content Container Stack (Position X: 190, Y: 250, W: 1060 Fill, H: 303 Hug, Gap: 20px) */}
      <div className="relative z-10 w-full max-w-[1060px] flex flex-col gap-[20px] items-start">
        {/* Layer 3: Title & Subtitle Stack Container (Position X: 0, Y: 0, W: 1060 Fill, H: 128 Hug, Gap: 0) */}
        <div className="w-full max-w-[1060px] flex flex-col gap-0 items-start">
          {/* Layer 4: Heading 1 Text */}
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-[#004899] tracking-tight leading-tight lg:leading-[85px] font-['Lexend',sans-serif]">
            {title}
          </h1>

          {/* Layer 5: Subtitle Container */}
          {subtitle && (
            <div className="w-full max-w-[1060px] h-[43px] flex items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#004899] leading-tight lg:leading-[43px] font-['Lexend',sans-serif]">
                {subtitle}
              </h2>
            </div>
          )}
        </div>

        {/* Layer 6: Jump Links Box Container */}
        {jumpLinks && jumpLinks.length > 0 && (
          <JumpLinksList items={jumpLinks} title={jumpLinksTitle} />
        )}

        {/* Supplementary slot for custom page actions */}
        {children}
      </div>
    </section>
  );
}
