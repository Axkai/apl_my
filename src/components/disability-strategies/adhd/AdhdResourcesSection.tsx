import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";

const adhdResources = [
  {
    id: "class-schedule",
    title: "Class schedule (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1wBsobfjgNdEji0A_dyFMSi5ONTA3LI5D/view?usp=sharing",
    previewImageUrl: "/images/resources/class-schedule-preview.png",
  },
  {
    id: "self-monitoring",
    title: "Student self-monitoring form (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Vd0RHTBwpDCjGjjgNTm0tAxlsBNU0H4z/view?usp=sharing",
    previewImageUrl: "/images/resources/self-monitoring-preview.png",
  },
  {
    id: "problem-solving",
    title: "Problem solving guide (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1o7hg3fJWbUrao64_WhdOiQx74JYg73cl/view?usp=sharing",
    previewImageUrl: "/images/resources/problem-solving-preview.png",
  },
  {
    id: "peer-info-activity",
    title: "Peer information activity book - ADHD (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Rz5Hbxm1cVZz_YLg4i6WgQ28iRe7kuag/view?usp=sharing",
    previewImageUrl: "/images/resources/peer-activity-preview.png",
  },
];

export default function AdhdResourcesSection() {
  return (
    <ContentSection id="relevant-resources" bgColor="bg-white">
      <SectionHeader title="Relevant resources" align="left" showPill={true}>
        <BodyText>
          Visit our Resources page for a range of resources that can help to create inclusive education environments for children with special needs and developmental challenges. Some particularly relevant resources for children with ADHD are:
        </BodyText>
      </SectionHeader>

      {/* PDF Resource Grid Display */}
      <ResourceContainer className="mt-4">
        {adhdResources.map((resource) => (
          <ResourceItem
            key={resource.id}
            id={resource.id}
            title={resource.title}
            pdfUrl={resource.pdfUrl}
            previewImageUrl={resource.previewImageUrl}
          />
        ))}
      </ResourceContainer>

      {/* Primary Page PDF Download CTA */}
      <div className="pt-4">
        <a
          href="https://allplaylearn.org.au/wp-content/uploads/2019/08/primary-teacher-adhd.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105 focus:outline-hidden"
          aria-label="Download this page as a PDF"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/download-page-pdf.svg"
            alt="Download this page as a PDF"
            className="h-auto w-auto max-w-[260px]"
          />
        </a>
      </div>
    </ContentSection>
  );
}
