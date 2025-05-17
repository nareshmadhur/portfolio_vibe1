import MusicShowcase from "@/components/sections/MusicShowcase";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { userProfile } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Youtube } from "lucide-react";

export const metadata = {
  title: "Music Showcase | Tri-Folio",
  description: "Listen to original compositions, covers, and live performances.",
};

export default function MusicPage() {
  return (
    <SectionWrapper>
      <SectionTitle>Music Showcase</SectionTitle>
      <p className="text-lg mb-10 text-muted-foreground max-w-2xl text-left"> {/* Removed text-center mx-auto, added text-left */}
        Dive into my musical world. Here you'll find a collection of my original tracks, covers, and live performances. 
      </p>
      <MusicShowcase />
      {userProfile.socialLinks.youtube && (
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href={userProfile.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" /> Visit my YouTube Channel
            </Link>
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}
