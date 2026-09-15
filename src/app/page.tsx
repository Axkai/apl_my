import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudienceCards from "@/components/AudienceCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      <main className="w-full flex flex-col gap-[10px] flex-1">
        <HeroSection />
        <AudienceCards />
      </main>
      <Footer />
    </div>
  );
}
