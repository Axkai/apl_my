import React from "react";
import Container from "./ui/Container";
import AudienceCard, { AudienceCardProps } from "./ui/AudienceCard";

export default function AudienceCards() {
  const cards: AudienceCardProps[] = [
    {
      id: "students",
      title: "Students",
      copy: "Resources and information to support students with disabilities and developmental challenges in primary school.",
      cta: "Find out more",
      href: "/students",
    },
    {
      id: "parents",
      title: "Parents",
      copy: "Resources and information for parents, caregivers and guardians of children with disabilities and developmental challenges in the primary school years.",
      cta: "Find out more",
      href: "/parents",
    },
    {
      id: "teachers",
      title: "Teachers",
      copy: "Resources, information and strengths- and evidence-based strategies for primary school teachers and education support staff that aim to help create inclusive education environments for children with disabilities and developmental challenges.",
      cta: "Find out more",
      href: "/teachers",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <AudienceCard key={card.id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
