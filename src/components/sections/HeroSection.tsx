
import { Button } from "@/components/ui/button";
import { userProfile } from "@/lib/constants";
import { ArrowDown, Github, Linkedin, Youtube, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 text-left"> {/* Changed from text-center */}
        <div className="mb-8 flex justify-center"> {/* Profile image remains centered */}
           <Image
            src="https://placehold.co/150x150.png"
            alt={userProfile.name}
            width={150}
            height={150}
            className="rounded-full shadow-lg border-4 border-primary/30"
            data-ai-hint="profile portrait"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4"> {/* Removed mx-auto */}
          {userProfile.name}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl"> {/* Removed mx-auto */}
          {userProfile.title}
        </p>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl text-left"> {/* Ensured text-left, removed mx-auto */}
          {userProfile.bio}
        </p>
        <div className="flex justify-start space-x-4 mb-10"> {/* Changed from justify-center */}
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
        {/* Button will align left due to parent's text-left */}
        <Button size="lg" asChild><Link href="/contact">Get in Touch<ArrowDown className="ml-2 h-5 w-5 animate-bounce" /></Link></Button>
      </div>
    </section>
  );
}
