
import { Button } from "@/components/ui/button";
import { userProfile, siteContent } from "@/lib/constants";
import { ArrowDown, Github, Linkedin, Youtube, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Hero section component for the homepage.
 * Displays the user's name, title, bio, social links, and a call-to-action button,
 * overlaid on a background image with a gradient.
 * @returns {JSX.Element} The HeroSection component.
 */
export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 min-h-[70vh] flex items-end justify-start text-left">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="abstract technology"
        priority // Prioritize loading for LCP
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Content Wrapper */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {userProfile.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-normal">
            {userProfile.title}
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 font-light">
            {userProfile.bio}
          </p>
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
            <Button variant="outline" size="icon" asChild><Link href={`mailto:${userProfile.contactEmail}`} aria-label="Email"><Mail className="h-5 w-5" /></Link></Button>
          </div>
          <Button size="lg" asChild><Link href="/contact">{siteContent.heroSection.getInTouchButton}<ArrowDown className="ml-2 h-5 w-5 animate-bounce" /></Link></Button>
        </div>
      </div>
    </section>
  );
}

    