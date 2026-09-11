import React from "react";
import Link from "next/link";

export default function AudienceCards() {
  const cards = [
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group rounded-3xl bg-warm-card-gradient p-8 text-white shadow-xl flex flex-col items-center text-center justify-between min-h-[520px] overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Line-Art Overlay */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" fill="none" stroke="currentColor">
                  <pattern
                    id={`card-pattern-${card.id}`}
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="1" />
                    <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#card-pattern-${card.id})`} />
                </svg>
              </div>

              {/* Card Main Content (Center Aligned) */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6 pt-4 w-full">
                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-white font-sans">
                  {card.title}
                </h3>

                {/* Description Paragraph */}
                <p className="text-sm sm:text-base leading-relaxed text-white/95 font-normal max-w-xs font-['Verdana',sans-serif]">
                  {card.copy}
                </p>

                {/* Centered White Outline Button */}
                <div className="pt-2">
                  <Link
                    href={card.href}
                    className="inline-block rounded-md border-2 border-white bg-white/20 backdrop-blur-md px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-[#C43F6E] focus:outline-hidden shadow-xs"
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>

              {/* Bottom Photo Placeholder Container */}
              <div className="relative z-10 w-full mt-8 flex justify-center items-end">
                <div className="w-48 h-36 rounded-t-2xl bg-black/15 backdrop-blur-xs border-t border-x border-white/25 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-xs font-semibold text-white/90">
                    [{card.title} Photo Placeholder]
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
