
import { siteContent } from "@/lib/constants";

/**
 * Footer component for the application.
 * Displays copyright information and a tagline.
 * @returns {JSX.Element} The Footer component.
 */
export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-8 text-muted-foreground">
      <div className="container mx-auto px-4 text-left">
        <p>{siteContent.global.footer.copyright}</p>
        <p className="text-sm mt-1">{siteContent.global.footer.tagline}</p>
      </div>
    </footer>
  );
}

    