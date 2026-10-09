import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";

const socialInclusionResources = [
  {
    id: "being-different-poster",
    title: "Being Different Poster (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1jXxG3knu5_KHhcihBSa7rea3Aan62b5G/view?usp=share_link",
    previewImageUrl: "/images/resources/being-different-poster-preview.png",
  },
  {
    id: "stay-play-talk-v2",
    title: "Stay Play Talk Peer mediation poster (for early primary) (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1XtdNtaddL5Nk-J3j7BcR_ZGTDlIMxvz6/view?usp=share_link",
    previewImageUrl: "/images/resources/stay-play-talk-v2-preview.png",
  },
  {
    id: "stay-play-talk-v3",
    title: "Stay Play Talk Peer mediation poster (for early primary) (simple version/sensory sensitive version) (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1XtdNtaddL5Nk-J3j7BcR_ZGTDlIMxvz6/view?usp=share_link",
    previewImageUrl: "/images/resources/stay-play-talk-v3-preview.png",
  },
  {
    id: "peer-mediation-steps",
    title: "Peer mediation steps poster (for primary school students) (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1a4suAHqw8aY1t1AA11VYt7XNPUgrRCI_/view?usp=sharing",
    previewImageUrl: "/images/resources/peer-mediation-steps-preview.png",
  },
  {
    id: "activity-book-adhd",
    title: "Peer information activity book - ADHD (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Rz5Hbxm1cVZz_YLg4i6WgQ28iRe7kuag/view?usp=sharing",
    previewImageUrl: "/images/resources/peer-activity-adhd-preview.png",
  },
  {
    id: "activity-book-autism",
    title: "Peer information activity book - Autism (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1RwvbHoZBT5qzGlHNF1l5uIRHcceavZr2/view?usp=sharing",
    previewImageUrl: "/images/resources/peer-activity-autism-preview.png",
  },
  {
    id: "peer-info-id",
    title: "Primary Peer Information Sheet - Intellectual Disability (PDF)",
    pdfUrl: "https://drive.google.com/file/d/1Sm3Y6heeP7dSp9fzTugX5g-_lQ8qhvEr/view?usp=share_link",
    previewImageUrl: "/images/resources/peer-info-id-preview.png",
  },
];

export default function ResourcesSocialInclusionSection() {
  return (
    <ContentSection id="social-inclusion" bgColor="bg-white">
      <SectionHeader title="Social inclusion" align="left" showPill={true}>
        <BodyText>
          We have provided a range of resources for facilitating the social inclusion of special needs children. There are a range of activity books and handouts that help classmates understand how they can include and support a child with a specific disorder. There are also posters that provide reminders about how to communicate with and include others. Finally, we also provide a poster that celebrates being different.
        </BodyText>
      </SectionHeader>

      <ResourceContainer>
        {socialInclusionResources.map((resource) => (
          <ResourceItem
            key={resource.id}
            id={resource.id}
            title={resource.title}
            pdfUrl={resource.pdfUrl}
            previewImageUrl={resource.previewImageUrl}
          />
        ))}
      </ResourceContainer>
    </ContentSection>
  );
}
