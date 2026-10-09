import React from "react";
import PageHero from "../ui/PageHero";

export default function GuideHero() {
  const jumpLinks = [
    { label: "What is inclusive education?", href: "#what-is-inclusive-education" },
    { label: "How to be inclusive of all children", href: "#how-to-be-inclusive-of-all-children" },
    { label: "Additional resources", href: "#additional-resources" },
  ];

  return (
    <PageHero
      title="Getting Started"
      subtitle="Information for teachers"
      jumpLinks={jumpLinks}
      heroGraphicSrc="/hero-bg.svg"
      heroGraphicAlt="Teacher holding books with AllPlay Learn doodle wave graphic"
    />
  );
}

