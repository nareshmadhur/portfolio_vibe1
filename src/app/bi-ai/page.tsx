
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent } from "@/lib/constants";
import BiAiPageClientContent from "@/components/sections/BiAiPageClientContent"; // New client component

/**
 * Metadata for the BI & AI Projects page.
 */
export const metadata = {
  title: siteContent.metadata.biAiTitle,
  description: siteContent.metadata.biAiDescription,
};

/**
 * Page component for showcasing Business Intelligence and AI projects.
 * This is a Server Component that renders the client-side interactive content.
 * @returns {JSX.Element} The BI & AI Projects page.
 */
export default function BiAiPage() {
  return (
    <BiAiPageClientContent />
  );
}
