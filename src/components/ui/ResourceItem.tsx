import React from "react";

export type ResourceVariant = "portrait" | "landscape" | "auto";

export interface ResourceItemProps {
  id?: string | number;
  title: string;
  pdfUrl: string;
  previewImageUrl: string;
  variant?: ResourceVariant;
  aspectRatio?: string;
  className?: string;
}

export default function ResourceItem({
  title,
  pdfUrl,
  previewImageUrl,
  variant,
  aspectRatio,
  className = "",
}: ResourceItemProps) {
  const effectiveRatio = aspectRatio || variant;

  let aspectClass = "";
  if (effectiveRatio === "portrait") {
    aspectClass = "aspect-[1/1.414]";
  } else if (effectiveRatio === "landscape") {
    aspectClass = "aspect-[20/7]";
  } else if (effectiveRatio && effectiveRatio !== "auto") {
    aspectClass = effectiveRatio;
  }

  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center w-full pt-5 px-5 pb-[60px] ${className}`}
    >
      {/* Doc Preview Container */}
      <div className={`w-full overflow-hidden flex items-center justify-center ${aspectClass}`}>
        <img
          src={previewImageUrl}
          alt={title}
          className="w-full h-full block object-contain"
        />
      </div>

      {/* Typography: Bolded BodyText configuration */}
      <span className="font-[family-name:var(--font-open-sans)] text-[14px] leading-[25px] font-bold text-[#4A4A4A] text-center mt-3">
        {title}
      </span>
    </a>
  );
}