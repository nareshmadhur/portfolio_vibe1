
import MusicShowcase from "@/components/sections/MusicShowcase";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { userProfile, siteContent } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
      <MusicShowcase />
      {userProfile.socialLinks.youtube && (
        <div className="text-center mt-12">
          <Button size="lg" asChild variant="secondary">
            <Link href={userProfile.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" /> {siteContent.musicPage.visitYouTubeButton}
            </Link>
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}

    