import React from "react";
import Container from "./ui/Container";
import AudienceCard, { AudienceCardProps } from "./ui/AudienceCard";

export default function AudienceCards() {
  const cards: AudienceCardProps[] = [
    {
      id: "students-1",
      title: "Students",
      copy: "Resources and information to support students with special needs at primary school.",
      cta: "Find out More",
      href: "/students",
      bgImage: "/card-students-bg.png",
    },
    {
      id: "parents-1",
      title: "Parents",
      copy: "Resources and information for parents and caregivers of primary-school aged children with special needs to use at home to support engagement at school.",
      cta: "Find out More",
      href: "/parents",
      bgImage: "/card-parents-bg.png",
    },
    {
      id: "teachers-1",
      title: "Teachers",
      copy: "Resources, information and evidence-based strategies for primary school teachers and education support staff that help create inclusive education environments for children with special needs.",
      cta: "Find out More",
      href: "/teachers",
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
