import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface PlaceholderFrameProps {
  label: string;
  aspectRatio?: string;
  variant?: "hero-badge" | "quote-banner" | "promo-card" | "diagram";
  className?: string;
}

export default function PlaceholderFrame({
  label,
  aspectRatio = "aspect-16/9",
  variant = "promo-card",
  className = "",
}: PlaceholderFrameProps) {
  if (variant === "hero-badge") {
    return (
      <div className={`relative w-full max-w-md lg:max-w-lg aspect-4/3 rounded-3xl bg-warm-card-gradient p-6 shadow-2xl overflow-hidden group flex items-center justify-center ${className}`}>
        {/* Doodle pattern overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" fill="none" stroke="currentColor">
            <pattern id="hero-teacher-doodles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="4" fill="white" />
              <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-teacher-doodles)" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-6 bg-black/15 backdrop-blur-xs rounded-2xl border border-white/30 max-w-xs">
          <ImageIcon className="w-10 h-10 mb-3 text-white/90" />
          <span className="text-sm font-semibold tracking-wide">[{label}]</span>
          <span className="text-xs text-white/75 mt-1">(Teacher Photo Cutout & Badge)</span>
        </div>
      </div>
    );
  }

  if (variant === "quote-banner") {
    return (
      <div className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-8 sm:p-12 shadow-lg ${className}`}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-4">
          <div className="p-3 rounded-full bg-white/20 backdrop-blur-md">
            <ImageIcon className="w-8 h-8 text-white" />
          </div>
          <blockquote className="text-base sm:text-lg font-medium leading-relaxed font-['Verdana',sans-serif] italic">
            &ldquo;Both at home and at school the teachers look at Lucy as though she can do everything and support her to do all she can because she is able to do everything – she just needs help in order to be able to do it.&rdquo;
          </blockquote>
          <span className="text-sm font-semibold text-amber-300 font-['Lexend',sans-serif]">
            – Katie
          </span>
          <span className="text-xs text-white/60 pt-2">[{label}]</span>
        </div>
      </div>
    );
  }

  if (variant === "diagram") {
    return (
      <div className={`relative w-full rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col items-center justify-center text-center ${className}`}>
        {/* Inline SVG Inclusion Visual Diagram Placeholder */}
        <div className="w-full max-w-lg space-y-6">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full border-2 border-[#004899] bg-blue-50/50 flex items-center justify-center p-3 relative">
              <span className="text-xs font-semibold text-[#004899] absolute -bottom-6">Inclusion</span>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-[#00BCD4]"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-dashed border-slate-300 my-4"></div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-slate-300 bg-white flex items-center justify-center p-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-700 mt-2">Exclusion</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-slate-300 bg-white flex items-center justify-center p-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-700 mt-2">Segregation</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-slate-300 bg-white flex items-center justify-center p-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-700 mt-2">Integration</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-400 font-medium">
          [{label}]
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatio} rounded-2xl bg-gradient-to-r from-[#3D2590] to-[#583BB8] text-white p-6 flex flex-col items-center justify-center text-center shadow-md overflow-hidden ${className}`}>
      <ImageIcon className="w-8 h-8 mb-2 text-white/80" />
      <span className="text-sm font-semibold tracking-wide">{label}</span>
      <span className="text-xs text-white/60 mt-1">[Image Asset Placeholder]</span>
    </div>
  );
}
