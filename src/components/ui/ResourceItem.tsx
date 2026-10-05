import React from "react";

export interface ResourceItemProps {
  id?: string | number;
  title: string;
  pdfUrl: string;
  previewImageUrl: string;
}

export default function ResourceItem({
  title,
  pdfUrl,
  previewImageUrl,
}: ResourceItemProps) {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center w-full pt-5 px-5 pb-[60px]"
    >
      {/* Doc Preview Container */}
      <div className="w-full aspect-[1/1.414] overflow-hidden">
        <img
          src={previewImageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Typography: Bolded BodyText configuration */}
      <span className="font-[family-name:var(--font-open-sans)] text-[14px] leading-[25px] font-bold text-[#4A4A4A] text-center mt-3">
        {title}
      </span>
    </a>
  );
}