
'use client'; // Required for useState, useEffect, and onClick handlers

import type { ReadonlyDeep } from 'type-fest';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import next/image
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent, type PerformanceVideo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube, BookOpen, ChevronLeft, ChevronRight, Music, PlayCircle } from "lucide-react"; // Added PlayCircle
import AnimatedSection from "@/components/shared/AnimatedSection";
import YouTubePlayer from "@/components/shared/YouTubePlayer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * @fileoverview Page component for showcasing music projects, YouTube channels, performances, and teaching.
 * Includes client-side state for carousel functionality.
 */

/**
 * Page component for showcasing music projects, YouTube channels, performances, and teaching.
 * @returns {JSX.Element | null} The Music & Teaching page. Returns null if not mounted to avoid hydration mismatch for carousel.
 */
export default function MusicPage() {
  const { title, description, sections } = siteContent.musicPage;
  const { youtube, teachingJourney } = sections;

  const [isMounted, setIsMounted] = useState(false);

  // For Live Performances Carousel
  const performanceVideos = youtube.performances.videos || [];
  const [currentPerformanceIndex, setCurrentPerformanceIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'initial' | 'next' | 'prev'>('initial');
  const [isAnimating, setIsAnimating] = useState(false);
  const slideDuration = 500; // milliseconds

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activePerformanceVideo = performanceVideos[currentPerformanceIndex];

  const changePerformanceVideo = (newIndex: number, newDirection: 'next' | 'prev') => {
    if (isAnimating || performanceVideos.length <= 1) return;
    
    let actualNewIndex = newIndex;
    if (newIndex >= performanceVideos.length) {
      actualNewIndex = 0; // Loop to start
    } else if (newIndex < 0) {
      actualNewIndex = performanceVideos.length - 1; // Loop to end
    }

    setIsAnimating(true);
    setSlideDirection(newDirection);
    setCurrentPerformanceIndex(actualNewIndex); 
    setTimeout(() => {
      setIsAnimating(false);
    }, slideDuration);
  };
  
  const nextPerformance = () => {
    if (performanceVideos.length > 0) { // Ensure there are videos
      changePerformanceVideo((currentPerformanceIndex + 1) % performanceVideos.length, 'next');
    }
  };

  const prevPerformance = () => {
     if (performanceVideos.length > 0) { // Ensure there are videos
      changePerformanceVideo((currentPerformanceIndex - 1 + performanceVideos.length) % performanceVideos.length, 'prev');
     }
  };

  // Auto-advance for the performance carousel
  useEffect(() => {
    if (!isMounted || performanceVideos.length <= 1 || isAnimating) {
      return;
    }
    const intervalId = setInterval(() => {
      nextPerformance();
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, currentPerformanceIndex, performanceVideos.length, isAnimating]);


  if (!isMounted && performanceVideos.length > 0) {
    return null;
  }

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
                  <h4 className="text-lg font-semibold mb-2 text-foreground text-left">Featured Video</h4>
                  <div className="max-w-xl mb-4 text-left"> {/* Adjusted for left alignment */}
                    <YouTubePlayer videoId={youtube.musicVideos.featuredVideoId} title={youtube.musicVideos.featuredVideoTitle} />
                  </div>
                </div>
                {youtube.musicVideos.otherExampleVideos && youtube.musicVideos.otherExampleVideos.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground text-left">More Videos</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {youtube.musicVideos.otherExampleVideos.map(video => (
                        <Card key={video.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                          <CardContent className="p-0">
                            <YouTubePlayer videoId={video.videoId} title={video.title} />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                <div className="text-left">
                    <Button asChild variant="secondary">
                    <Link href={youtube.musicVideos.channelUrl} target="_blank" rel="noopener noreferrer">
                        <Youtube className="mr-2 h-5 w-5" /> {siteContent.musicPage.visitYouTubeButton} ({youtube.musicVideos.channelName})
                    </Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Guitar & Music Lessons Subsection */}
          <AnimatedSection delay="delay-300">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Music className="mr-2 h-6 w-6 text-accent" />
                  {youtube.guitarTeaching.title}
                </CardTitle>
                <CardDescription>{youtube.guitarTeaching.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground text-left">Featured Lesson</h4>
                  <div className="max-w-xl mb-4 text-left"> {/* Adjusted for left alignment */}
                    <YouTubePlayer videoId={youtube.guitarTeaching.featuredVideoId} title={youtube.guitarTeaching.featuredVideoTitle} />
                  </div>
                </div>
                {youtube.guitarTeaching.otherExampleVideos && youtube.guitarTeaching.otherExampleVideos.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground text-left">More Lessons</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {youtube.guitarTeaching.otherExampleVideos.map(video => (
                        <Card key={video.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                           <CardContent className="p-0">
                            <YouTubePlayer videoId={video.videoId} title={video.title} />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                <div className="text-left">
                    <Button asChild variant="secondary">
                    <Link href={youtube.guitarTeaching.channelUrl} target="_blank" rel="noopener noreferrer">
                        <Youtube className="mr-2 h-5 w-5" /> {siteContent.musicPage.visitYouTubeButton} ({youtube.guitarTeaching.channelName})
                    </Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Live Performances & Collaborations Subsection */}
          <AnimatedSection delay="delay-400">
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-left">{youtube.performances.title}</h3>
              <p className="text-md mb-6 text-muted-foreground max-w-3xl text-left">
                {youtube.performances.description}
              </p>
              
              {/* Main Video Player Area for Performances */}
              {activePerformanceVideo && (
                <div className="relative mb-4 aspect-video w-full max-w-3xl mx-auto"> {/* Centered for focus */}
                  <div
                    key={activePerformanceVideo.id} // Key for re-render and animation trigger
                    className={cn(
                      "w-full h-full",
                      slideDirection === 'initial' ? 'animate-fadeIn' :
                      slideDirection === 'next' ? 'animate-slideInFromRight' :
                      slideDirection === 'prev' ? 'animate-slideInFromLeft' : ''
                    )}
                    style={{ animationDuration: `${slideDuration}ms` }}
                  >
                    <YouTubePlayer videoId={activePerformanceVideo.videoId} title={activePerformanceVideo.title} />
                  </div>
                </div>
              )}

              {/* Thumbnail Strip and Navigation for Performances */}
              {performanceVideos.length > 0 && (
                <div className="flex flex-col items-center space-y-4 mt-6">
                  {/* Thumbnail Strip - horizontally scrollable */}
                  <div className="w-full overflow-x-auto pb-2">
                    <div className="inline-flex space-x-3 px-2"> {/* Changed from flex justify-start md:justify-center */}
                      {performanceVideos.map((video, index) => (
                        <button
                          key={video.id}
                          onClick={() => changePerformanceVideo(index, index > currentPerformanceIndex ? 'next' : 'prev')}
                          aria-label={`Play ${video.title}`}
                          className={cn(
                            "flex-shrink-0 w-32 h-20 md:w-36 md:h-20 relative rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                            index === currentPerformanceIndex ? "border-primary scale-105 shadow-lg" : "border-transparent hover:border-muted-foreground/30 opacity-70 hover:opacity-100"
                          )}
                        >
                          <Image
                            src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
                            alt={`Thumbnail for ${video.title}`}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                          />
                          {index === currentPerformanceIndex && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <PlayCircle className="w-8 h-8 text-white/90" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Prev/Next Buttons */}
                  {performanceVideos.length > 1 && (
                    <div className="flex justify-center items-center space-x-4">
                      <Button onClick={prevPerformance} disabled={isAnimating} variant="outline" size="icon" aria-label="Previous performance video">
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <p className="text-sm text-muted-foreground tabular-nums">
                        {currentPerformanceIndex + 1} / {performanceVideos.length}
                      </p>
                      <Button onClick={nextPerformance} disabled={isAnimating} variant="outline" size="icon" aria-label="Next performance video">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-10 text-left">
                <h4 className="text-xl font-semibold mb-3 text-foreground">{youtube.performances.collaborationPromptTitle}</h4>
                <p className="text-md text-muted-foreground mb-6 max-w-2xl">{youtube.performances.collaborationPromptText}</p>
                <Button asChild size="lg">
                  <Link href="/contact">{siteContent.homePage.contact.buttonText}</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </SectionWrapper>
      </AnimatedSection>

      {/* Teaching Journey & Online Course Section */}
      <AnimatedSection delay="delay-200">
        <SectionWrapper containerClassName="mt-12">
          <SectionTitle className="text-left">{teachingJourney.title}</SectionTitle>
          <div className="text-left"> {/* Ensure parent is text-left for children to inherit */}
            <p className="text-lg mb-8 text-muted-foreground max-w-3xl"> {/* Removed mx-auto and text-center */}
              {teachingJourney.description}
            </p>
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
