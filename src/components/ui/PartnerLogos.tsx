import React from "react";
import Image from "next/image";

interface PartnerLogosProps {
  layout?: "stacked" | "row";
  monashVariant?: "color" | "white";
  className?: string;
}

export default function PartnerLogos({
  layout = "stacked",
  monashVariant = "color",
  className = "",
}: PartnerLogosProps) {
  const isWhite = monashVariant === "white";

  return (
    <div
      className={`flex ${
        layout === "row"
          ? "flex-row items-center gap-6"
          : "flex-col items-start space-y-5"
      } ${className}`}
    >
      {/* Monash Logo */}
      <div>
        <Image
          src={isWhite ? "/monash-white-logo.png" : "/monash-logo.png"}
          alt="Monash University Logo"
          width={280}
          height={90}
          className={`${
            isWhite ? "h-20 sm:h-22" : "h-16 sm:h-20 lg:h-24"
          } w-auto object-contain`}
        />
      </div>

      {/* Deakin Circular Logo Badge */}
      <div className="pt-1">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-3 shadow-md">
          <Image
            src="/deakin-logo.png"
            alt="Deakin University Logo"
            width={70}
            height={70}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
