
'use client'; // Required for useState, useEffect, and onClick handlers

import type { ReadonlyDeep } from 'type-fest';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent, type PerformanceVideo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube, BookOpen, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
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
  const performanceVideos = useMemo(() => youtube.performances.videos || [], [youtube.performances.videos]);
  const [currentPerformanceIndex, setCurrentPerformanceIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'initial' | 'next' | 'prev'>('initial');
  const [isAnimating, setIsAnimating] = useState(false);
  const slideDuration = 500; // milliseconds

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activePerformanceVideo = useMemo(() => {
    if (performanceVideos.length > 0) {
      return performanceVideos[currentPerformanceIndex];
    }
    return null;
  }, [performanceVideos, currentPerformanceIndex]);

  const changePerformanceVideo = (newIndex: number) => {
    if (isAnimating || performanceVideos.length <= 1 || newIndex === currentPerformanceIndex) return;
    
    let actualNewIndex = newIndex;
    if (newIndex >= performanceVideos.length) {
      actualNewIndex = 0; // Loop to start
    } else if (newIndex < 0) {
      actualNewIndex = performanceVideos.length - 1; // Loop to end
    }

    const newDirection = actualNewIndex > currentPerformanceIndex || (currentPerformanceIndex === performanceVideos.length -1 && actualNewIndex === 0) ? 'next' : 'prev';
    // Handle edge case for prev when looping from first to last
    if (currentPerformanceIndex === 0 && actualNewIndex === performanceVideos.length - 1) {
        //direction = 'prev'; // This was incorrect, should be 'prev' if we are going from 0 to last
    }


    setIsAnimating(true);
    setSlideDirection(newDirection);
    setCurrentPerformanceIndex(actualNewIndex); 
    setTimeout(() => {
      setIsAnimating(false);
    }, slideDuration);
  };
  
  const nextPerformance = () => {
    if (performanceVideos.length > 0) {
      changePerformanceVideo((currentPerformanceIndex + 1) % performanceVideos.length);
    }
  };

  const prevPerformance = () => {
     if (performanceVideos.length > 0) {
      changePerformanceVideo((currentPerformanceIndex - 1 + performanceVideos.length) % performanceVideos.length);
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

  const videosToDisplay = useMemo(() => {
    const numVids = performanceVideos.length;
    if (numVids === 0) return [null, null, null];
    if (numVids === 1) return [null, performanceVideos[0], null];
    
    const prevIndex = (currentPerformanceIndex - 1 + numVids) % numVids;
    const nextIndex = (currentPerformanceIndex + 1) % numVids;
    
    if (numVids === 2) {
      return currentPerformanceIndex === 0 
        ? [null, performanceVideos[0], performanceVideos[1]] 
        : [performanceVideos[0], performanceVideos[1], null];
    }
    
    return [
      performanceVideos[prevIndex],
      performanceVideos[currentPerformanceIndex],
      performanceVideos[nextIndex],
    ];
  }, [currentPerformanceIndex, performanceVideos]);


  if (!isMounted && performanceVideos.length > 0) {
    // Return a basic structure or skeleton if needed for SSR to avoid layout shifts
    // For now, returning null to match previous behavior for unmounted state.
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
                  <Youtube className="mr-2 h-6 w-6 text-accent" />
                  {youtube.musicVideos.title}
                </CardTitle>
                <CardDescription>{youtube.musicVideos.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground text-left">Featured Video</h4>
                  <div className="max-w-xl mb-4 text-left">
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
                  <Youtube className="mr-2 h-6 w-6 text-accent" />
                  {youtube.guitarTeaching.title}
                </CardTitle>
                <CardDescription>{youtube.guitarTeaching.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground text-left">Featured Lesson</h4>
                  <div className="max-w-xl mb-4 text-left">
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
              
              {performanceVideos.length > 0 && activePerformanceVideo && (
                <div className="relative mb-4">
                  <div className="flex items-center justify-center space-x-2 md:space-x-4">
                    <Button 
                      onClick={prevPerformance} 
                      variant="outline" 
                      size="icon" 
                      aria-label="Previous performance video" 
                      disabled={isAnimating || performanceVideos.length <= 1}
                      className="shrink-0"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-center">
                      {videosToDisplay.map((videoData, slotIndex) => {
                        const isPlayerSlot = slotIndex === 1 && videoData?.id === activePerformanceVideo.id;
                        const videoToShow = videoData || (slotIndex === 1 ? activePerformanceVideo : null);

                        if (!videoToShow) {
                          // Render an empty div or a placeholder for slots where video is not available
                          // This is crucial for maintaining grid structure if numVids < 3
                          return <div key={`empty-slot-${slotIndex}`} className="aspect-video bg-muted/10 rounded-lg" />;
                        }
                        
                        return (
                          <div 
                            key={videoToShow.id + `_slot_${slotIndex}`} 
                            className={cn(
                              "w-full transition-all duration-300 ease-in-out",
                              isPlayerSlot ? "md:col-span-1" : "md:col-span-1", 
                              !isPlayerSlot && "opacity-60 hover:opacity-100 transform scale-90 hover:scale-95"
                            )}
                          >
                            {isPlayerSlot ? (
                              <div
                                key={activePerformanceVideo.id} 
                                className={cn(
                                  "w-full aspect-video rounded-lg overflow-hidden shadow-xl",
                                  slideDirection === 'initial' ? 'animate-fadeIn' :
                                  slideDirection === 'next' ? 'animate-slideInFromRight' :
                                  slideDirection === 'prev' ? 'animate-slideInFromLeft' : ''
                                )}
                                style={{ animationDuration: `${slideDuration}ms` }}
                              >
                                <YouTubePlayer videoId={activePerformanceVideo.videoId} title={activePerformanceVideo.title} />
                              </div>
                            ) : (
                              <button
                                onClick={() => {
                                  const videoIndex = performanceVideos.findIndex(v => v.id === videoToShow.id);
                                  if (videoIndex !== -1) {
                                    changePerformanceVideo(videoIndex);
                                  }
                                }}
                                aria-label={`Play ${videoToShow.title}`}
                                className="w-full aspect-video relative rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                              >
                                <Image
                                  src={`https://i.ytimg.com/vi/${videoToShow.videoId}/mqdefault.jpg`}
                                  alt={`Thumbnail for ${videoToShow.title}`}
                                  layout="fill"
                                  objectFit="cover"
                                  className="transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                  <PlayCircle className="w-10 h-10 text-white/70 group-hover:text-white transition-opacity" />
                                </div>
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <Button 
                      onClick={nextPerformance} 
                      variant="outline" 
                      size="icon" 
                      aria-label="Next performance video" 
                      disabled={isAnimating || performanceVideos.length <= 1}
                      className="shrink-0"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                  {performanceVideos.length > 1 && (
                     <p className="text-center text-sm text-muted-foreground mt-4 tabular-nums">
                        {currentPerformanceIndex + 1} / {performanceVideos.length}
                      </p>
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
          <div className="text-left"> 
            <p className="text-lg mb-8 text-muted-foreground max-w-3xl">
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
