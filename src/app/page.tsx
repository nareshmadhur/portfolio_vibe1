
import HeroSection from "@/components/sections/HeroSection";
import BiAiPortfolio from "@/components/sections/BiAiPortfolio";
import MusicShowcase from "@/components/sections/MusicShowcase";
import PhotographyGallery from "@/components/sections/PhotographyGallery";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { userProfile } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />

      <SectionWrapper contentBgClass="bg-transparent dark:bg-transparent shadow-none backdrop-blur-none p-0">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-lg max-w-3xl text-foreground/90 text-left">
          {userProfile.bio}
        </p>
      </SectionWrapper>

      <SectionWrapper
        className="bg-transparent"
        backgroundImageUrl="https://placehold.co/1920x1080.png?text=AI+Projects+BG"
        data-ai-hint="technology abstract"
        minHeightClass="min-h-[500px]"
      >
        <SectionTitle>BI & AI Projects</SectionTitle>
        <BiAiPortfolio isPreview={true} />
        <div className="text-center mt-8">
          <Button asChild variant="outline"><Link href="/bi-ai">View All Projects</Link></Button>
        </div>
      </SectionWrapper>

      <SectionWrapper> {/* Music showcase without background image for now */}
        <SectionTitle>Music Showcase</SectionTitle>
        <MusicShowcase isPreview={true} />
         <div className="text-center mt-8">
          <Button asChild variant="outline"><Link href="/music">More Music</Link></Button>
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="bg-transparent"
        backgroundImageUrl="https://placehold.co/1920x1080.png?text=Photography+BG"
        data-ai-hint="nature landscape"
        minHeightClass="min-h-[500px]"
      >
        <SectionTitle>Photography Gallery</SectionTitle>
        <PhotographyGallery isPreview={true} />
        <div className="text-center mt-8">
          <Button asChild variant="outline"><Link href="/photography">Explore Gallery</Link></Button>
        </div>
      </SectionWrapper>

      <SectionWrapper contentBgClass="bg-transparent dark:bg-transparent shadow-none backdrop-blur-none p-0">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-lg max-w-2xl text-foreground/90 mb-8 text-left">
          Interested in collaborating or have a question? Feel free to reach out!
        </p>
        <div className="text-center">
          <Button size="lg" asChild><Link href="/contact">Contact Me</Link></Button>
        </div>
      </SectionWrapper>
    </>
  );
}
