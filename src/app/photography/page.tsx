
import PhotographyGallery from "@/components/sections/PhotographyGallery";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { userProfile, siteContent } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Camera } from "lucide-react";

/**
 * Metadata for the Photography Gallery page.
 */
export const metadata = {
  title: siteContent.metadata.photographyTitle,
  description: siteContent.metadata.photographyDescription,
};

/**
 * Page component for showcasing photography and linking to Flickr.
 * @returns {JSX.Element} The Photography Gallery page.
 */
export default function PhotographyPage() {
  return (
    <SectionWrapper>
      <SectionTitle>{siteContent.photographyPage.title}</SectionTitle>
      <p className="text-lg mb-10 text-muted-foreground max-w-2xl text-left">
        {siteContent.photographyPage.description}
      </p>
      <PhotographyGallery />
      {userProfile.socialLinks.flickr && (
        <div className="text-center mt-12">
          <Button size="lg" asChild variant="default">
            <Link href={userProfile.socialLinks.flickr} target="_blank" rel="noopener noreferrer">
              <Camera className="mr-2 h-5 w-5" /> {siteContent.photographyPage.viewOnFlickrButton}
            </Link>
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}

    