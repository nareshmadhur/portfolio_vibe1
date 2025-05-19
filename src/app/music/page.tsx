'use client'; // Required for useState, useEffect, and onClick handlers

import { useState, useEffect } from 'react';
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent, userProfile } from "@/lib/constants"; // userProfile might be needed for contact button text
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube, BookOpen, ChevronLeft, ChevronRight, Music } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import YouTubePlayer from "@/components/shared/YouTubePlayer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

  const [currentPerformanceIndex, setCurrentPerformanceIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const performanceVideos = youtube.performances.videos || [];

  const nextPerformance = () => {
    setCurrentPerformanceIndex((prevIndex) =>
      prevIndex === performanceVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPerformance = () => {
    setCurrentPerformanceIndex((prevIndex) =>
      prevIndex === 0 ? performanceVideos.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance for the performance carousel
  useEffect(() => {
    if (!isMounted || performanceVideos.length <= 1) {
      return; // Don't start interval if not mounted or not enough videos
    }

    const intervalId = setInterval(() => {
      setCurrentPerformanceIndex(prevIndex =>
        prevIndex === performanceVideos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-advance every 5 seconds

    // Clear interval on component unmount or if dependencies change (e.g., user navigates)
    return () => clearInterval(intervalId);
  }, [isMounted, currentPerformanceIndex, performanceVideos.length]);


  // Avoid hydration mismatch by not rendering on the server initially for carousel state.
  if (!isMounted) {
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
        <SectionWrapper containerClassName="space-y-12"> {/* Increased spacing for subsections */}
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
                  <div className="max-w-xl mb-4 text-left"> {/* Left aligned */}
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
                  <div className="max-w-xl mb-4 text-left"> {/* Left aligned */}
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
            <div className="mt-12"> {/* Added margin-top for separation */}
              <h3 className="text-2xl font-semibold mb-4 text-foreground text-left">{youtube.performances.title}</h3>
              <p className="text-md mb-6 text-muted-foreground max-w-3xl text-left">
                {youtube.performances.description}
              </p>
              {performanceVideos.length > 0 && (
                <div className="relative max-w-2xl text-left mb-8"> {/* Max width for carousel, text-left */}
                  <YouTubePlayer
                    videoId={performanceVideos[currentPerformanceIndex].videoId}
                    title={performanceVideos[currentPerformanceIndex].title}
                  />
                  {performanceVideos.length > 1 && (
                    <div className="flex justify-between items-center mt-4">
                      <Button onClick={prevPerformance} disabled={performanceVideos.length <= 1} variant="outline" size="icon">
                        <ChevronLeft className="h-5 w-5" />
                        <span className="sr-only">Previous Performance</span>
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        {currentPerformanceIndex + 1} of {performanceVideos.length}
                      </p>
                      <Button onClick={nextPerformance} disabled={performanceVideos.length <= 1} variant="outline" size="icon">
                        <ChevronRight className="h-5 w-5" />
                        <span className="sr-only">Next Performance</span>
                      </Button>
                    </div>
                  )}
                </div>
              )}
              {/* Contact Call to Action */}
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
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl text-left">
            {teachingJourney.description}
          </p>
          <div className="text-left"> {/* Ensure button is left-aligned */}
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
