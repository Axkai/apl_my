import React from "react";
import Image from "next/image";

export interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
  /** Optional explicit height override in pixels. */
  imageHeight?: number;
  /** Optional explicit width override in pixels. */
  imageWidth?: number;
  /** Alignment mode: "center" (default) or "left" */
  align?: "center" | "left";
  className?: string;
}

export default function ImageCard({
  src,
  alt,
  caption,
  imageHeight,
  imageWidth,
  align = "center",
  className = "",
}: ImageCardProps) {
  const isLeft = align === "left";
  const alignClasses = isLeft ? "items-start justify-start" : "items-center justify-center";

  return (
    /* Layer 8: Graphical Container Frame */
    <div
      className={`w-full max-w-[1038.8px] flex flex-col ${alignClasses} p-0 gap-0 h-auto ${className}`}
    >
      {/* Layer 9: Image Asset Node */}
      <div
        className={`w-full max-w-[1038.8px] relative overflow-hidden flex ${alignClasses} h-auto`}
        style={{
          width: imageWidth ? `${imageWidth}px` : undefined,
          height: imageHeight ? `${imageHeight}px` : undefined,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={imageWidth || 1039}
          height={imageHeight || 529}
          className={imageWidth ? "h-auto object-contain" : "w-full h-auto object-contain"}
          priority
        />
      </div>

      {/* Layer 10: Caption Container Frame */}
      {caption && (
        <div className="w-full max-w-[1038.8px] min-h-[58px] bg-[#F7F7F7] p-[10px] flex items-center justify-center text-center">
          {/* Layer 11: Caption Text Node */}
          <p className="w-full max-w-[1018.8px] text-[14px] leading-normal font-normal text-[#A0A0A0] font-[family-name:var(--font-open-sans)] text-center">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
