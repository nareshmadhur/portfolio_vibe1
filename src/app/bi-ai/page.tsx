
import BiAiPortfolio from "@/components/sections/BiAiPortfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";

/**
 * Metadata for the BI & AI Projects page.
 */
export const metadata = {
  title: siteContent.metadata.biAiTitle,
  description: siteContent.metadata.biAiDescription,
};

/**
 * Page component for showcasing Business Intelligence and AI projects.
 * @returns {JSX.Element} The BI & AI Projects page.
 */
export default function BiAiPage() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <SectionTitle>{siteContent.biAiPage.title}</SectionTitle>
        <p className="text-lg mb-10 text-muted-foreground max-w-2xl text-left">
          {siteContent.biAiPage.description}
        </p>
      </AnimatedSection>
      <AnimatedSection delay="delay-100">
        <BiAiPortfolio />
      </AnimatedSection>
    </SectionWrapper>
  );
}
