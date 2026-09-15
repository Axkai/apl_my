import React from "react";
import Image from "next/image";
import Button from "./Button";

export interface AudienceCardProps {
  id: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  bgImage?: string;
  placeholderText?: string;
}

export default function AudienceCard({
  id,
  title,
  copy,
  cta,
  href,
  bgImage,
  placeholderText,
}: AudienceCardProps) {
  return (
    /* Layer 1: Root Audience Card Frame (320.07 Fill x 500, Gap 0, Padding 0, Corner radius 0) */
    <div className="w-full max-w-[320.07px] h-[500px] flex flex-col">
      {/* Layer 2: Inner Card Frame (W: Fill, H: Fill, Corner radius 15px, Drop shadow, Background Fill) */}
      <div className="relative w-full h-full rounded-[15px] shadow-lg overflow-hidden bg-white group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center justify-between pt-[60px] px-[26px]">
        {/* Full Background Graphic Image Fill */}
        {bgImage ? (
          <Image
            src={bgImage}
            alt={`${title} Card Background`}
            fill
            className="object-cover rounded-[15px] pointer-events-none z-0"
            priority
          />
        ) : (
          /* Fallback Background Line-Art Overlay */
          <div className="absolute inset-0 bg-warm-card-gradient pointer-events-none z-0">
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" fill="none" stroke="currentColor">
                <pattern
                  id={`card-pattern-${id}`}
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="1" />
                  <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill={`url(#card-pattern-${id})`} />
              </svg>
            </div>
          </div>
        )}

        {/* Layer 3: Card Main Content Stack (Position: X:26.2, Y:60, W:267, H:238 Hug, Gap: 40px) */}
        <div className="relative z-10 flex flex-col items-center text-center w-[267px] mx-auto gap-[40px]">
          {/* Layer 4: Title Heading Container (W: 267 Fill, H: 32 Hug, Alignment: Center) */}
          <div className="w-full h-[32px] flex items-center justify-center text-center">
            <h3 className="text-2xl sm:text-[28px] leading-[32px] font-medium text-white font-['Lexend',sans-serif]">
              {title}
            </h3>
          </div>

          {/* Layer 5: Description Frame (W: 267 Fill, H: 75 Hug, Position Y: 72) */}
          <div className="w-full min-h-[75px] flex items-center justify-center text-center">
            <p className="text-xs sm:text-sm lg:text-[13px] leading-[25px] text-white font-normal font-['Verdana',sans-serif]">
              {copy}
            </p>
          </div>

          {/* Layer 6: Button ("Find out More") (W: 136 Hug, H: 51 Hug, Position Y: 187, Corner radius: 3, Padding: 2, Stroke: White 2px) */}
          <div className="w-full flex items-center justify-center">
            <Button href={href} variant="outline-white" className="w-[136px] h-[51px] p-[2px] rounded-[3px] text-[14px] leading-[25px] font-medium font-['Open_Sans',sans-serif]">
              {cta}
            </Button>
          </div>
        </div>

        {/* Bottom Spacer Area */}
        <div className="relative z-10 w-full h-[202px] flex justify-center items-end">
          {!bgImage && (
            <div className="w-48 h-36 rounded-t-2xl bg-black/15 backdrop-blur-xs border-t border-x border-white/25 flex flex-col items-center justify-center text-center p-4 mb-4">
              <span className="text-xs font-semibold text-white/90 font-body">
                {placeholderText || `[${title} Photo Placeholder]`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
