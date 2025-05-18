
/**
 * @fileoverview Defines the HeroSection component.
 * This component displays the main hero section of the website,
 * featuring a background image, gradient overlay, user's name, an animated title,
 * bio, social links, and a call-to-action button.
 * Content is aligned to the bottom-left of the section.
 */
'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { userProfile, siteContent } from "@/lib/constants";
import { ArrowDown, Github, Linkedin, Youtube, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from '@/lib/utils';

/**
 * Hero section component for the homepage.
 * Displays the user's name, an animated title cycling through roles, bio, social links,
 * and a call-to-action button, overlaid on a background image with a gradient.
 * Content is aligned to the bottom-left of the section.
 * @returns {JSX.Element} The HeroSection component.
 */
export default function HeroSection() {
  const titles = userProfile.titles || ["Engineer | Musician | Photographer"]; // Fallback if titles array isn't defined
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState<'visible' | 'exiting' | 'entering'>('visible');

  useEffect(() => {
    if (titles.length <= 1) return; // No animation if only one or no titles

    const cycleDuration = 3500; // Total time for one title to be displayed and transition (e.g., 3s visible + 0.5s transition)
    const animationDuration = 500; // Duration of the fade/slide animation in ms

    const intervalId = setInterval(() => {
      setAnimationState('exiting'); // Start the exit animation

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        // After text content is virtually updated, set state to start entry animation
        setAnimationState('entering'); 
        
        // Use requestAnimationFrame to ensure 'entering' styles are applied before transitioning to 'visible'
        // This helps ensure the browser has processed the DOM/style changes for the 'entering' state.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimationState('visible'); // Trigger the entry animation to the final 'visible' state
          });
        });
      }, animationDuration); // Wait for the exit animation to complete
    }, cycleDuration);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [titles]);

  // Define base classes and animation-specific classes
  let titleDynamicClasses = "transition-all duration-500 ease-in-out absolute inset-0";
  if (animationState === 'visible') {
    titleDynamicClasses += " opacity-100 translate-y-0";
  } else if (animationState === 'exiting') {
    titleDynamicClasses += " opacity-0 -translate-y-3"; // Slide up and fade out
  } else if (animationState === 'entering') {
    titleDynamicClasses += " opacity-0 translate-y-3";  // Start from slightly below and faded
  }

  return (
    <section className="relative min-h-[70vh] flex items-end justify-start text-left pt-10">
      {/* Background Image */}
      {siteContent.heroSection.backgroundImageUrl && (
        <Image
          src={siteContent.heroSection.backgroundImageUrl}
          alt={siteContent.heroSection.backgroundImageAlt || "Hero background"}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint={siteContent.heroSection.backgroundImageAiHint}
          priority // Prioritize loading for LCP
        />
      )}
      {/* Gradient overlay for text readability (bottom-to-top) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 pb-20 md:pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {userProfile.name}
          </h1>
          
          {/* Animated Title Container */}
          <div className="h-8 md:h-10 mb-6 relative overflow-hidden"> {/* Fixed height and overflow for animation stability */}
            <p className={cn(
                "text-xl md:text-2xl text-primary-foreground/90 font-normal",
                titleDynamicClasses
              )}
            >
              {titles[currentIndex]}
            </p>
          </div>

          <p className="text-base md:text-lg text-primary-foreground/80 mb-8 font-light">
            {userProfile.bio}
          </p>
          {/* Social Media Links */}
          <div className="flex justify-start space-x-3 mb-8">
            {userProfile.socialLinks.linkedin && (
              <Button variant="outline" size="icon" asChild><Link href={userProfile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link></Button>
            )}
            {userProfile.socialLinks.github && (
              <Button variant="outline" size="icon" asChild><Link href={userProfile.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></Link></Button>
            )}
            {userProfile.socialLinks.youtube && (
              <Button variant="outline" size="icon" asChild><Link href={userProfile.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube className="h-5 w-5" /></Link></Button>
            )}
            {userProfile.contactEmail && (
                 <Button variant="outline" size="icon" asChild><Link href={`mailto:${userProfile.contactEmail}`} aria-label="Email"><Mail className="h-5 w-5" /></Link></Button>
            )}
          </div>
          {/* Call to Action Button */}
          <Button size="lg" asChild><Link href="/contact">{siteContent.heroSection.getInTouchButton}<ArrowDown className="ml-2 h-5 w-5 animate-bounce" /></Link></Button>
        </div>
      </div>
    </section>
  );
}

    