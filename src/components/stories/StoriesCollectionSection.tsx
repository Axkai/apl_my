import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import ResourceContainer from "@/components/ui/ResourceContainer";
import ResourceItem from "@/components/ui/ResourceItem";
import Button from "@/components/ui/Button";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

const storiesList = [
  {
    id: "what-happens-at-playtime",
    title: "What happens at playtime",
    mainPdfTitle: "What happens at playtime (PDF)",
    mainPdfUrl: "https://drive.google.com/file/d/1X5HeKsy28NGOb9kkg9RZXWQSXJadA63p/view?usp=share_link",
    audioUrl: "https://drive.google.com/file/d/1X63AQdOYZVIc3cEXtrYAwolrcWH0QfSI/view?usp=share_link",
    customImagesUrl: "https://drive.google.com/file/d/1cEovEFGYrUlPKbrcO6NvjdR9UcIL0Sbg/view?usp=share_link",
    previewImageUrl: "/images/resources/story-playtime-preview.png",
  },
  {
    id: "being-different",
    title: "Being different",
    mainPdfTitle: "Being different (PDF)",
    mainPdfUrl: "https://drive.google.com/file/d/1jXxG3knu5_KHhcihBSa7rea3Aan62b5G/view?usp=share_link",
    audioUrl: "https://drive.google.com/file/d/1XtdNtaddL5Nk-J3j7BcR_ZGTDlIMxvz6/view?usp=share_link",
    customImagesUrl: "https://drive.google.com/file/d/1XyXOyzgy-GCNfnPpd6_SX7pi3D0do6ib/view?usp=share_link",
    previewImageUrl: "/images/resources/story-being-different-preview.png",
  },
];

export default function StoriesCollectionSection() {
  return (
    <ContentSection id="collection" bgColor="bg-white">
      <SubSectionGroup layout="stack">
        {storiesList.map((story) => (
          <SubSection
            key={story.id}
            id={story.id}
            title={story.title}
            level="h3"
          >
            <ResourceContainer variant="landscape">
              <ResourceItem
                id={story.id}
                title={story.mainPdfTitle}
                pdfUrl={story.mainPdfUrl}
                previewImageUrl={story.previewImageUrl}
                variant="landscape"
              />
            </ResourceContainer>

            <div className="flex flex-wrap items-center gap-3">
              <Button href={story.audioUrl} variant="outline-navy">
                Download audio version
              </Button>
              <Button href={story.customImagesUrl} variant="outline-navy">
                Download &quot;add your own images&quot; version
              </Button>
            </div>
          </SubSection>
        ))}
      </SubSectionGroup>
    </ContentSection>
  );
}
