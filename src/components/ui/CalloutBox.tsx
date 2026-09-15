import React from "react";
import { Info, BookOpen } from "lucide-react";

interface CalloutBoxProps {
  children: React.ReactNode;
  variant?: "quote" | "info" | "definition";
  className?: string;
}

export default function CalloutBox({
  children,
  variant = "definition",
  className = "",
}: CalloutBoxProps) {
  if (variant === "quote") {
    return (
      <div className={`w-full rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 text-center text-slate-700 font-['Verdana',sans-serif] text-sm sm:text-base italic leading-relaxed shadow-xs ${className}`}>
        {children}
      </div>
    );
  }

  if (variant === "info") {
    return (
      <div className={`w-full rounded-xl bg-blue-50/70 border-l-4 border-[#004899] p-5 sm:p-6 text-slate-700 font-['Verdana',sans-serif] text-sm leading-relaxed flex items-start gap-4 ${className}`}>
        <Info className="w-5 h-5 text-[#004899] shrink-0 mt-0.5" />
        <div>{children}</div>
      </div>
    );
  }

  return (
    <div className={`w-full rounded-xl bg-slate-50 border-l-4 border-[#004899] p-5 sm:p-6 text-slate-700 font-['Verdana',sans-serif] text-sm leading-relaxed flex items-start gap-4 ${className}`}>
      <BookOpen className="w-5 h-5 text-[#004899] shrink-0 mt-0.5" />
      <div>{children}</div>
    </div>
  );
}
