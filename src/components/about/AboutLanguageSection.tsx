import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";

export default function AboutLanguageSection() {
  return (
    <ContentSection id="our-language" bgColor="bg-white">
      <SectionHeader
        title="Our Language"
        align="left"
        showPill={true}
      >
        <BodyText>
          Language is important because it can influence how we think about and view the world around us. The section below describes some language choices we have made in the AllPlay Learn Malaysia resources.
        </BodyText>

        <BodyText>
          All <strong className="font-semibold text-slate-900">families</strong> are
          different. We use the words ‘caregiver’, ‘parent’ or ‘family’
          interchangeably, because we do not want to exclude any person who is
          responsible for caring for a child.
        </BodyText>

        <BodyText>
          There are lots of ways to refer to{" "}
          <strong className="font-semibold text-slate-900">young people</strong>.
          We use ‘child’, ‘student’ and ‘young people’ interchangeably.
        </BodyText>

        <BodyText>
          AllPlay Learn Malaysia uses a{" "}
          <strong className="font-semibold text-slate-900">strengths-based</strong>{" "}
          approach to disability. This means, there is a focus on children’s
          strengths and what they can do and their differences. We try to avoid
          referring to ‘deficits’, ‘impairments’, ‘struggles’ or ‘limitations’.
        </BodyText>

        <BodyText>
          We mostly refer to{" "}
          <strong className="font-semibold text-slate-900">special needs</strong>,
          because that is an appropriate term in Malaysia. This is sometimes
          interchanged with ‘disability’.
        </BodyText>

        <BodyText>
          Some prefer a{" "}
          <strong className="font-semibold text-slate-900">
            person-first approach
          </strong>{" "}
          to disability, which refers to ‘people with a disability’ rather than ‘a
          disabled person’. This puts the focus on the person rather than the
          disability. However, others may prefer{" "}
          <strong className="font-semibold text-slate-900">
            identity first language
          </strong>{" "}
          for disability, such as ‘an autistic person’ rather than ‘a person with
          autism’. Identity first language can help individuals to “claim” their
          disabilities with pride. We do not wish to offend any person or appear
          insensitive so we use both approaches on our website.
        </BodyText>

        <BodyText>
          We are always careful with the language we use but acknowledge that
          sometimes we may unintentionally use a word or phrase that may be
          offensive. If this occurs, we are sorry.
        </BodyText>
      </SectionHeader>
    </ContentSection>
  );
}
