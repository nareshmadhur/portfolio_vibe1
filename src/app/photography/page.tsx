import PhotographyGallery from "@/components/sections/PhotographyGallery";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { userProfile } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Camera } from "lucide-react";


export const metadata = {
  title: "Photography Gallery | Tri-Folio",
  description: "Browse a collection of photographs capturing moments, landscapes, and stories.",
};

export default function PhotographyPage() {
  return (
    <SectionWrapper>
      <SectionTitle>Photography Gallery</SectionTitle>
      <p className="text-lg mb-10 text-muted-foreground max-w-2xl text-left"> {/* Removed text-center mx-auto, added text-left */}
        Welcome to my visual journal. Here, I share moments captured through my lens, from cityscapes to natural wonders. Each photo tells a story.
      </p>
      <PhotographyGallery />
      {userProfile.socialLinks.flickr && (
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={userProfile.socialLinks.flickr} target="_blank" rel="noopener noreferrer">
              <Camera className="mr-2 h-5 w-5" /> View More on Flickr
            </Link>
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}
