/**
 * @fileoverview Defines the HomePageSectionCard component.
 * This component displays a full-width card for a section on the homepage,
 * featuring a background image, gradient overlay, title, and description.
 * It links to the respective section's detail page.
 */

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
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

/**
 * A full-width card component for homepage sections.
 * Displays a background image, title, and description, linking to a detail page.
 * Includes hover effects for interactivity.
 * @param {HomePageSectionCardProps} props - The props for the component.
 * @returns {JSX.Element} The HomePageSectionCard component.
 */
export default function HomePageSectionCard({ title, description, imageUrl, imageAiHint, linkUrl, className }: HomePageSectionCardProps) {
  return (
    <Link href={linkUrl} className={cn(
      "relative block group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out aspect-video hover:-translate-y-2",
      className
    )}>
      <Image
        src={imageUrl}
        alt={title} // Use title for alt text for better accessibility
        layout="fill"
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
        data-ai-hint={imageAiHint}
        priority={false} // Not LCP usually
      />
      {/* Adjusted gradient to be darker for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/90 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-primary-foreground group-hover:text-primary-foreground/90 transition-colors">{title}</h2>
        <p className="text-sm sm:text-base text-primary-foreground/80 group-hover:text-primary-foreground/70 transition-colors line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
