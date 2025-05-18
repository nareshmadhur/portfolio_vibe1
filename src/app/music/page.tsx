
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent, YOUTUBE_CHANNEL_URLS, MUSIC_COURSE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image"; // Added for placeholder images

/**
 * Metadata for the Music Showcase page.
 */
export const metadata = {
  title: siteContent.metadata.musicTitle,
  description: siteContent.metadata.musicDescription,
};

/**
 * Page component for showcasing music projects and linking to YouTube.
 * @returns {JSX.Element} The Music Showcase page.
 */
export default function MusicPage() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <SectionTitle>{siteContent.musicPage.title}</SectionTitle>
        <p className="text-lg mb-10 text-muted-foreground max-w-2xl text-left">
          {siteContent.musicPage.description}
        </p>
      </AnimatedSection>

      {/* Music Videos and Covers Section */}
      <AnimatedSection delay="delay-100">
        <SectionWrapper>
          <SectionTitle>{siteContent.musicPage.sections.videos.title}</SectionTitle>
          <p className="text-lg mb-10 text-muted-foreground max-w-2xl text-left">
            {siteContent.musicPage.sections.videos.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {YOUTUBE_CHANNEL_URLS.map((channel, index) => (
              <AnimatedSection key={index} delay={`delay-${(index + 1) * 100}` as `delay-${number}`}>
                <div className="flex flex-col items-center text-center p-4 bg-card/50 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">{channel.name}</h3>
                  <Link href={channel.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity block w-full aspect-video relative mb-4">
                    <Image 
                      src={`https://placehold.co/600x338.png`} // Placeholder, 16:9
                      alt={`Link to ${channel.name}`} 
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-md"
                      data-ai-hint="music channel"
                    />
                  </Link>
                  <Button asChild variant="secondary">
                    <Link href={channel.url} target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-5 w-5" /> {siteContent.musicPage.visitYouTubeButton}
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </SectionWrapper>
      </AnimatedSection>

      {/* Online Course Section */}
      <AnimatedSection delay="delay-200">
        <SectionWrapper>
          <SectionTitle>{siteContent.musicPage.sections.course.title}</SectionTitle>
          <p className="text-lg mb-6 text-muted-foreground max-w-2xl text-left">
            {siteContent.musicPage.sections.course.description}
          </p>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href={MUSIC_COURSE_URL} target="_blank" rel="noopener noreferrer">
                {siteContent.musicPage.sections.course.enrollButton}
              </Link>
            </Button>
          </div>
        </SectionWrapper>
      </AnimatedSection>
    </SectionWrapper>
  );
}
