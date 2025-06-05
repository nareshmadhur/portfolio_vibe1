"use client";

/**
 * @fileoverview Defines the HomePageSectionCard component.
 * This component displays a full-width card for a section on the homepage,
 * featuring a background image, gradient overlay, title, and description.
 * It links to the respective section's detail page.
 * It also handles image grayscale effect on hover.
 */

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * @typedef {object} HomePageSectionCardProps
 * Props for the HomePageSectionCard component.
 */
interface HomePageSectionCardProps {
  /** The title of the section. */
  title: string;
  /** A short description of the section. */
  description: string;
  /** URL of the background image for the card. */
  imageUrl: string;
  /** AI hint for the background image (for image generation tools). */
  imageAiHint: string;
  /** URL the card links to. */
  linkUrl: string;
  /** Optional additional CSS classes. */
  className?: string;
}

import { useState } from 'react';
/**
 * A full-width card component for homepage sections.
 * Displays a background image, title, and description, linking to a detail page.
 * Includes hover effects for interactivity.
 * @param {HomePageSectionCardProps} props - The props for the component.
 * @returns {JSX.Element} The HomePageSectionCard component.
 */
export default function HomePageSectionCard({ title, description, imageUrl, imageAiHint, linkUrl, className }: HomePageSectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={linkUrl} className={cn(
      "relative block group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out aspect-[16/9] hover:-translate-y-2 bg-card/10 hover:bg-card/20",
      className
    )}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={title} // Use title for alt text for better accessibility
        layout="fill"
        // Removed grayscale filter to better suit color themes
        className={cn("transition-transform duration-300 ease-in-out", isHovered ? "scale-105" : "")}
        objectFit="cover"
        data-ai-hint={imageAiHint}
        priority={false} // Not LCP usually
      />
      {/* Adjusted gradient to be darker for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/90 group-hover:via-black/20 group-hover:to-black/0 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-primary-foreground">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 transition-colors">{title}</h2>
        <p className="text-sm sm:text-base text-primary-foreground/80 transition-colors line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
