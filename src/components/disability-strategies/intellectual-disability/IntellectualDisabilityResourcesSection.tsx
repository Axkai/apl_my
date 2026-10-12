import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";
import { getAssetUrl } from "@/lib/storage";

const intellectualDisabilityResources = [
  {
    id: "communication-checklist",
    title: "Communication checklist (PDF)",
    pdfUrl: "https://allplaylearn.org.au/wp-content/uploads/2019/06/Strengths-and-Abilities-Communication-Checklist-Primary.pdf",
    previewImageUrl: getAssetUrl("previews/communication-checklist-preview.png"),
  },
  {
    id: "class-schedule",
    title: "Class schedule (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1wBsobfjgNdEji0A_dyFMSi5ONTA3LI5D/view?usp=sharing",
    previewImageUrl: getAssetUrl("previews/class-schedule-preview.png"),
  },
  {
    id: "self-monitoring",
    title: "Student self-monitoring form (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Vd0RHTBwpDCjGjjgNTm0tAxlsBNU0H4z/view?usp=sharing",
    previewImageUrl: getAssetUrl("previews/self-monitoring-preview.png"),
  },
  {
    id: "stay-play-talk-peer-mediation-poster",
    title: "Stay Play Talk Peer mediation poster (for early primary) (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1XtdNtaddL5Nk-J3j7BcR_ZGTDlIMxvz6/view?usp=share_link",
    previewImageUrl: getAssetUrl("previews/stay-play-talk-peer-mediation-poster-preview.png"),
  },
  {
    id: "stay-play-talk-peer-mediation-poster-simple",
    title: "Stay Play Talk Peer mediation poster (for early primary) (simple version/sensory sensitive version) (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1XtdNtaddL5Nk-J3j7BcR_ZGTDlIMxvz6/view?usp=share_link",
    previewImageUrl: getAssetUrl("previews/stay-play-talk-peer-mediation-poster-simple-preview.png"),
  },
  {
    id: "peer-mediation-steps",
    title: "Peer mediation steps poster (for primary school students) (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1a4suAHqw8aY1t1AA11VYt7XNPUgrRCI_/view?usp=sharing",
    previewImageUrl: getAssetUrl("previews/peer-mediation-steps-preview.png"),
  },
  {
    id: "emotion-cards",
    title: "Emotion cards (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1gLSBUd5qyqHWmbY7EUjSLgy5Pv42_njr/view?usp=sharing",
    previewImageUrl: getAssetUrl("previews/emotion-card.png"),
  },
  {
    id: "peer-info-id",
    title: "Peer information sheet - Intellectual Disability (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Sm3Y6heeP7dSp9fzTugX5g-_lQ8qhvEr/view?usp=share_link",
    previewImageUrl: getAssetUrl("previews/peer-info-id-preview.png"),
  },
];

export default function IntellectualDisabilityResourcesSection() {
  return (
    <ContentSection id="relevant-resources" bgColor="bg-white">
      <SectionHeader title="Relevant resources" align="left" showPill={true}>
        <BodyText>
          Visit our Resources page for a range of resources that can help to create inclusive education environments for children with special needs and developmental challenges. AllPlay Learn’s stories can help children with intellectual disability become familiar with primary school and some of the skills they need to participate in these settings. Other relevant resources for children with intellectual disability are:
        </BodyText>
      </SectionHeader>

      {/* PDF Resource Grid Display */}
      <ResourceContainer className="mt-4">
        {intellectualDisabilityResources.map((resource) => (
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
          href="https://allplaylearn.org.au/content/uploads/2019/08/primary-teacher-intellectual-disability.pdf"
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
