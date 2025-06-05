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

/**
 * Hero section component for the homepage.
 * Displays the user's name, an animated title cycling through roles, bio, social links,
 * and a call-to-action button, overlaid on a background image with a gradient.
 * Content is aligned to the bottom-left of the section.
 * @returns {JSX.Element} The HeroSection component.
 */
export default function HeroSection() {
  const titles = userProfile.titles || ["Engineer | Musician | Photographer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 50; // Faster typing
  const deletingSpeed = 30; // Faster deleting
  const pauseDuration = 1200; // Shorter pause after typing
  const shortPauseDuration = 200; // Shorter pause after deleting

  useEffect(() => {
    if (titles.length <= 1) {
      setCurrentText(titles[0] || '');
      return;
    }

    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === '') {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, shortPauseDuration);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText(prev => prev.substring(0, prev.length - 1));
        }, deletingSpeed);
      }
    } else {
      const fullText = titles[currentIndex % titles.length];
      if (currentText === fullText) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText(prev => fullText.substring(0, prev.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentIndex, titles, typingSpeed, deletingSpeed, pauseDuration, shortPauseDuration]);


  return (
    <section className="relative min-h-[75vh] flex items-end justify-start text-left"> {/* Ensure items-end for bottom alignment */}
      {/* Background Image */}
      {siteContent.heroSection.backgroundImageUrl && (
        <Image
          src={siteContent.heroSection.backgroundImageUrl}
          alt={siteContent.heroSection.backgroundImageAlt || "Hero background"}
          fill
          objectFit="cover"
          objectPosition="center top" // Prioritize the top-center of the image
          className="absolute inset-0 z-0"
          data-ai-hint={siteContent.heroSection.backgroundImageAiHint || "landscape"}
          priority
        />
      )}
      {/* Gradient overlay for text readability (bottom-to-top) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 pb-12 md:pb-16"> {/* Reduced bottom padding */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {userProfile.name}
          </h1>
          
          {/* Animated Title Container */}
          <div className="h-8 md:h-10 mb-6 relative"> {/* Fixed height for animation stability */}
            <p className="text-xl md:text-2xl text-foreground/90 font-normal">
              <span>{currentText}</span>
              <span className="typewriter-caret">&nbsp;</span> {/* Blinking caret */}
            </p>
          </div>

          <p className="text-base md:text-lg text-foreground/80 mb-8 font-light">
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
