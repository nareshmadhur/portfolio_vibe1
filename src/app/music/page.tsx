
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { userProfile, siteContent, YOUTUBE_CHANNEL_URLS, MUSIC_COURSE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import YouTubePlayer from "@/components/shared/YouTubePlayer";
import { Youtube } from "lucide-react";

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
      <SectionTitle>{siteContent.musicPage.title}</SectionTitle>
      <p className="text-lg mb-10 text-muted-foreground max-w-2xl text-left">
        {siteContent.musicPage.description}
      </p>

      {/* Music Videos and Covers Section */}
 <SectionWrapper>
        <SectionTitle>{siteContent.musicPage.sections.videos.title}</SectionTitle>
 <p className="text-lg mb-10 text-muted-foreground max-w-2xl text-left">
          {siteContent.musicPage.sections.videos.description}
 </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {YOUTUBE_CHANNEL_URLS.map((channel, index) => (
            <div key={index} className="flex flex-col items-center text-center">
 <h3 className="text-2xl font-bold mb-4">{channel.name}</h3>
              {/* You would typically embed a specific video here,
                  but for a general channel link, an image or button is better */}
              <Link href={channel.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                {/* Replace with an actual channel thumbnail or a relevant image */}
                <img src="/images/youtube-placeholder.jpg" alt={`Link to ${channel.name}`} className="rounded-lg shadow-lg mb-4 w-full h-auto object-cover"/>
              </Link>
 <Button asChild variant="secondary">
                <Link href={channel.url} target="_blank" rel="noopener noreferrer">
 <Youtube className="mr-2 h-5 w-5" /> Visit Channel
 </Link>
 </Button>
            </div>
          ))}
        </div>
 </SectionWrapper>

      {/* Online Course Section */}
 <SectionWrapper>
 <SectionTitle>{siteContent.musicPage.sections.course.title}</SectionTitle>
 <p className="text-lg mb-6 text-muted-foreground max-w-2xl text-left">
          {siteContent.musicPage.sections.course.description}
 </p>
        <div className="text-center">
 <Button size="lg" asChild>
 <Link href={MUSIC_COURSE_URL} target="_blank" rel="noopener noreferrer">
              Enroll in the Course
 </Link>
 </Button>
        </div>
 </SectionWrapper>
    </SectionWrapper>
  );
}

    