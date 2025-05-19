
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube, BookOpen, ExternalLink, Music } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import YouTubePlayer from "@/components/shared/YouTubePlayer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Metadata for the Music & Teaching page.
 */
export const metadata = {
  title: siteContent.metadata.musicTitle,
  description: siteContent.metadata.musicDescription,
};

/**
 * Page component for showcasing music projects, YouTube channels, performances, and teaching.
 * @returns {JSX.Element} The Music & Teaching page.
 */
export default function MusicPage() {
  const { title, description, sections } = siteContent.musicPage;
  const { youtube, teachingJourney } = sections;

  return (
    <SectionWrapper>
      <AnimatedSection>
        <SectionTitle>{title}</SectionTitle>
        <p className="text-lg mb-10 text-muted-foreground max-w-3xl text-left">
          {description}
        </p>
      </AnimatedSection>

      {/* YouTube Presence Section */}
      <AnimatedSection delay="delay-100">
        <SectionWrapper containerClassName="space-y-12">
          <SectionTitle>{youtube.title}</SectionTitle>
          <p className="text-md mb-10 text-muted-foreground max-w-2xl text-left -mt-4">
            {youtube.description}
          </p>

          {/* Music Videos & Arrangements Subsection */}
          <AnimatedSection delay="delay-200">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Music className="mr-2 h-6 w-6 text-accent" />
                  {youtube.musicVideos.title}
                </CardTitle>
                <CardDescription>{youtube.musicVideos.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Featured Video</h4>
                  <YouTubePlayer videoId={youtube.musicVideos.featuredVideoId} title={youtube.musicVideos.featuredVideoTitle} />
                </div>
                {youtube.musicVideos.otherExampleVideos && youtube.musicVideos.otherExampleVideos.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">More Videos</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {youtube.musicVideos.otherExampleVideos.map(video => (
                        <Card key={video.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                          <CardContent className="p-0">
                            <YouTubePlayer videoId={video.videoId} title={video.title} />
                          </CardContent>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base line-clamp-2">{video.title}</CardTitle>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                <Button asChild variant="secondary">
                  <Link href={youtube.musicVideos.channelUrl} target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-5 w-5" /> {siteContent.musicPage.visitYouTubeButton} ({youtube.musicVideos.channelName})
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Guitar & Music Lessons Subsection */}
          <AnimatedSection delay="delay-300">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Music className="mr-2 h-6 w-6 text-accent" /> {/* Or a different icon like 'Guitar' if available & suitable */}
                  {youtube.guitarTeaching.title}
                </CardTitle>
                <CardDescription>{youtube.guitarTeaching.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Featured Lesson</h4>
                  <YouTubePlayer videoId={youtube.guitarTeaching.featuredVideoId} title={youtube.guitarTeaching.featuredVideoTitle} />
                </div>
                {youtube.guitarTeaching.otherExampleVideos && youtube.guitarTeaching.otherExampleVideos.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">More Lessons</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {youtube.guitarTeaching.otherExampleVideos.map(video => (
                        <Card key={video.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                           <CardContent className="p-0">
                            <YouTubePlayer videoId={video.videoId} title={video.title} />
                          </CardContent>
                          <CardHeader className="p-4">
                            <CardTitle className="text-base line-clamp-2">{video.title}</CardTitle>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                <Button asChild variant="secondary">
                  <Link href={youtube.guitarTeaching.channelUrl} target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-5 w-5" /> {siteContent.musicPage.visitYouTubeButton} ({youtube.guitarTeaching.channelName})
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Live Performances & Collaborations Subsection */}
          <AnimatedSection delay="delay-400">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{youtube.performances.title}</h3>
              <p className="text-md mb-6 text-muted-foreground max-w-2xl text-left">
                {youtube.performances.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {youtube.performances.videos.map((video, index) => (
                  <AnimatedSection key={video.id} delay={`delay-${(index + 1) * 100}` as `delay-${number}`}>
                     <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      <CardContent className="p-0">
                        <YouTubePlayer videoId={video.videoId} title={video.title} />
                      </CardContent>
                      <CardHeader className="flex-grow">
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                        {video.description && <CardDescription className="text-sm">{video.description}</CardDescription>}
                      </CardHeader>
                      <CardContent>
                         <Button asChild variant="link" className="p-0 h-auto text-sm">
                            <Link href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
                               {siteContent.musicPage.viewPerformanceButton} <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </SectionWrapper>
      </AnimatedSection>

      {/* Teaching Journey & Online Course Section */}
      <AnimatedSection delay="delay-200">
        <SectionWrapper containerClassName="mt-12">
          <SectionTitle>{teachingJourney.title}</SectionTitle>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl text-left">
            {teachingJourney.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
            {teachingJourney.images.map((image, index) => (
              <AnimatedSection key={index} delay={`delay-${(index + 2) * 100}` as `delay-${number}`}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={image.dataAiHint}
                    priority={index === 0} // Add priority to the first image
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-left md:text-center">
            <Button size="lg" asChild>
              <Link href={teachingJourney.courseUrl} target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-5 w-5" /> {teachingJourney.enrollButton}
              </Link>
            </Button>
          </div>
        </SectionWrapper>
      </AnimatedSection>
    </SectionWrapper>
  );
}
