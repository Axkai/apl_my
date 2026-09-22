import React from "react";
import Image from "next/image";

export interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
  imageHeight?: number;
  className?: string;
}

export default function ImageCard({
  src,
  alt,
  caption,
  imageHeight = 529,
  className = "",
}: ImageCardProps) {
  return (
    /* Layer 8: Graphical Container Frame (Position X: 10.59, W: 1038.8 Fill, Flow: Vertical, Gap: 0, Padding: 0) */
    <div
      className={`w-full max-w-[1038.8px] flex flex-col items-center justify-start p-0 gap-0 ${
        caption ? "min-h-[587px]" : "h-auto"
      } ${className}`}
    >
      {/* Layer 9: Image Asset Node (W: 1038.8 Fill, Clip content: true) */}
      <div
        className="w-full max-w-[1038.8px] relative overflow-hidden flex items-center justify-center"
        style={{ height: caption ? `${imageHeight}px` : "auto", minHeight: caption ? `${imageHeight}px` : undefined }}
      >
        <Image
          src={src}
          alt={alt}
          width={1039}
          height={imageHeight}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Layer 10: Caption Container Frame (Position X: 0, W: 1038.8 Fill, H: 58 Hug, Padding: 10px, Fill: Alabaster #F7F7F7) */}
      {caption && (
        <div className="w-full max-w-[1038.8px] min-h-[58px] bg-[#F7F7F7] p-[10px] flex items-center justify-center text-center">
          {/* Layer 11: Caption Text Node (Typography: Open Sans 14/Auto, Fill: Silver Chalice #A0A0A0) */}
          <p className="w-full max-w-[1018.8px] text-[14px] leading-normal font-normal text-[#A0A0A0] font-[family-name:var(--font-open-sans)] text-center">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
