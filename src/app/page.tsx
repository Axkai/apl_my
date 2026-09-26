import PageContainer from "@/components/ui/PageContainer";
import HeroSection from "@/components/HeroSection";
import AudienceCards from "@/components/AudienceCards";

export default function Home() {
  return (
    <PageContainer mainClassName="gap-[10px]">
      <HeroSection />
      <AudienceCards />
    </PageContainer>
  );
}
