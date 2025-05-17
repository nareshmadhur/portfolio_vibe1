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

      <SectionWrapper>
        <SectionTitle>About Me</SectionTitle>
        <p className="text-lg text-center max-w-3xl mx-auto text-foreground/90">
          {userProfile.bio}
        </p>
      </SectionWrapper>
      
      <SectionWrapper className="bg-primary/5">
        <SectionTitle>BI & AI Projects</SectionTitle>
        <BiAiPortfolio isPreview={true} />
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/bi-ai">View All Projects</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Music Showcase</SectionTitle>
        <MusicShowcase isPreview={true} />
         <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/music">More Music</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-accent/5">
        <SectionTitle>Photography Gallery</SectionTitle>
        <PhotographyGallery isPreview={true} />
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/photography">Explore Gallery</Link>
          </Button>
        </div>
      </SectionWrapper>
      
      <SectionWrapper>
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-lg text-center max-w-2xl mx-auto text-foreground/90 mb-8">
          Interested in collaborating or have a question? Feel free to reach out!
        </p>
        <div className="text-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
