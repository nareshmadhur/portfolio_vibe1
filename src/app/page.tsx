
import HeroSection from "@/components/sections/HeroSection";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { homePageCardSections, homePageAbout, homePageContact } from "@/lib/constants";
import Link from "next/link";
import HomePageSectionCard from "@/components/shared/HomePageSectionCard";

export default function Home() {
  return (
    <>
      <HeroSection />

      <SectionWrapper contentBgClass="bg-transparent dark:bg-transparent shadow-none backdrop-blur-none p-0 text-left">
        <SectionTitle>{homePageAbout.title}</SectionTitle>
        <p className="text-lg max-w-3xl text-foreground/90">
          {homePageAbout.description}
        </p>
      </SectionWrapper>

      <div className="my-12 md:my-16 grid grid-cols-1 gap-10 md:gap-12 px-4">
        <HomePageSectionCard
          title={homePageCardSections.biAi.title}
          description={homePageCardSections.biAi.description}
          imageUrl={homePageCardSections.biAi.imageUrl}
          imageAiHint={homePageCardSections.biAi.imageAiHint}
          linkUrl={homePageCardSections.biAi.linkUrl}
        />
        <HomePageSectionCard
          title={homePageCardSections.music.title}
          description={homePageCardSections.music.description}
          imageUrl={homePageCardSections.music.imageUrl}
          imageAiHint={homePageCardSections.music.imageAiHint}
          linkUrl={homePageCardSections.music.linkUrl}
        />
        <HomePageSectionCard
          title={homePageCardSections.photography.title}
          description={homePageCardSections.photography.description}
          imageUrl={homePageCardSections.photography.imageUrl}
          imageAiHint={homePageCardSections.photography.imageAiHint}
          linkUrl={homePageCardSections.photography.linkUrl}
        />
      </div>

      <SectionWrapper contentBgClass="bg-transparent dark:bg-transparent shadow-none backdrop-blur-none p-0 text-left">
        <SectionTitle>{homePageContact.title}</SectionTitle>
        <p className="text-lg max-w-2xl text-foreground/90 mb-8">
          {homePageContact.description}
        </p>
        <div className="text-left">
          <Button size="lg" asChild><Link href="/contact">Contact Me</Link></Button>
        </div>
      </SectionWrapper>
    </>
  );
}
