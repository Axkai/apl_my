import React from "react";
import Container from "./ui/Container";
import AudienceCard, { AudienceCardProps } from "./ui/AudienceCard";

export default function AudienceCards() {
  const cards: AudienceCardProps[] = [
    {
      id: "disability-strategies",
      title: "Disability Strategies",
      copy: "Practical, evidence-based strategies to support children with special needs and developmental challenges at school and at home.",
      cta: "Find out More",
      href: "/disability-strategies",
      bgImage: "/card-students-bg.png",
    },
    {
      id: "social-inclusion",
      title: "Social Inclusion",
      copy: "Resources and activities that help children understand, accept and include peers of all abilities.",
      cta: "Find out More",
      href: "/social-inclusion",
      bgImage: "/card-parents-bg.png",
    },
    {
      id: "resources",
      title: "Resources",
      copy: "Guides, checklists and tools adapted for Malaysian primary schools, ready to download and use.",
      cta: "Find out More",
      href: "/resources",
      bgImage: "/card-teachers-bg.png",
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-[82px]">
      <Container>
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
          {cards.map((card) => (
            <AudienceCard key={card.id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
