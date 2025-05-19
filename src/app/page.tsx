
/**
 * @fileoverview Defines the main homepage component for the Tri-Folio application.
 * It showcases the hero section, about me, portfolio highlights, and a contact call-to-action.
 */
import HeroSection from "@/components/sections/HeroSection";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { siteContent, userProfile } from "@/lib/constants";
import Link from "next/link";
import HomePageSectionCard from "@/components/shared/HomePageSectionCard";
import AnimatedSection from "@/components/shared/AnimatedSection";

/**
 * The main homepage component for the application.
 * It showcases the hero section, about me, portfolio highlights, and a contact call-to-action.
 * @returns {JSX.Element} The Home page component.
 */
export default function Home() {
  return (
    <>
      <HeroSection />

      <AnimatedSection>
        <SectionWrapper
          contentBgClass="bg-transparent dark:bg-transparent shadow-none backdrop-blur-none p-0 text-left"
        >
          <SectionTitle>{siteContent.homePage.about.title}</SectionTitle>
          <p className="text-lg max-w-3xl text-foreground/90">
            {userProfile.shortBio}
          </p>
        </SectionWrapper>
      </AnimatedSection>

      <AnimatedSection>
        <SectionWrapper
          contentBgClass="bg-transparent dark:bg-transparent shadow-none backdrop-blur-none p-0 text-left"
        >
          <SectionTitle>{siteContent.homePage.portfolioTitle}</SectionTitle>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <AnimatedSection delay="delay-100">
              <HomePageSectionCard
                title={siteContent.homePage.sections.music.title}
                description={siteContent.homePage.sections.music.description}
                imageUrl={siteContent.homePage.sections.music.imageUrl}
                imageAiHint={siteContent.homePage.sections.music.imageAiHint}
                linkUrl={siteContent.homePage.sections.music.linkUrl}
              />
            </AnimatedSection>
            <AnimatedSection delay="delay-200">
              <HomePageSectionCard
                title={siteContent.homePage.sections.biAi.title}
                description={siteContent.homePage.sections.biAi.description}
                imageUrl={siteContent.homePage.sections.biAi.imageUrl}
                imageAiHint={siteContent.homePage.sections.biAi.imageAiHint}
                linkUrl={siteContent.homePage.sections.biAi.linkUrl}
              />
            </AnimatedSection>
            <AnimatedSection delay="delay-300">
              <HomePageSectionCard
                title={siteContent.homePage.sections.photography.title}
                description={siteContent.homePage.sections.photography.description}
                imageUrl={siteContent.homePage.sections.photography.imageUrl}
                imageAiHint={siteContent.homePage.sections.photography.imageAiHint}
                linkUrl={siteContent.homePage.sections.photography.linkUrl}
              />
            </AnimatedSection>
          </div>
        </SectionWrapper>
      </AnimatedSection>

      <AnimatedSection>
        <SectionWrapper
          contentBgClass="bg-transparent dark:bg-transparent shadow-none backdrop-blur-none p-0 text-left"
        >
          <SectionTitle>{siteContent.homePage.contact.title}</SectionTitle>
          <p className="text-lg max-w-2xl text-foreground/90 mb-8">
            {siteContent.homePage.contact.description}
          </p>
          <div className="text-left">
            <Button size="lg" asChild><Link href="/contact">{siteContent.homePage.contact.buttonText}</Link></Button>
          </div>
        </SectionWrapper>
      </AnimatedSection>
    </>
  );
}
