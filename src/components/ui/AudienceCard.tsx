import React from "react";
import Button from "./Button";

export interface AudienceCardProps {
  id: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  placeholderText?: string;
}

export default function AudienceCard({
  id,
  title,
  copy,
  cta,
  href,
  placeholderText,
}: AudienceCardProps) {
  return (
    <div
      className="relative group rounded-3xl bg-warm-card-gradient p-8 text-white shadow-xl flex flex-col items-center text-center justify-between min-h-[520px] overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Background Line-Art Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
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

      {/* Card Main Content (Center Aligned) */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 pt-4 w-full">
        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-white font-['Lexend',sans-serif]">
          {title}
        </h3>

        {/* Description Paragraph */}
        <p className="text-sm sm:text-base leading-relaxed text-white/95 font-normal max-w-xs font-['Verdana',sans-serif]">
          {copy}
        </p>

        {/* Centered White Outline Button */}
        <div className="pt-2">
          <Button href={href} variant="outline-white" size="md">
            {cta}
          </Button>
        </div>
      </div>

      {/* Bottom Photo Placeholder Container */}
      <div className="relative z-10 w-full mt-8 flex justify-center items-end">
        <div className="w-48 h-36 rounded-t-2xl bg-black/15 backdrop-blur-xs border-t border-x border-white/25 flex flex-col items-center justify-center text-center p-4">
          <span className="text-xs font-semibold text-white/90">
            {placeholderText || `[${title} Photo Placeholder]`}
          </span>
        </div>
      </div>
    </div>
  );
}
