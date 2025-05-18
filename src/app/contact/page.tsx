
import ContactSection from "@/components/sections/ContactSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";

/**
 * Metadata for the Contact Me page.
 */
export const metadata = {
  title: siteContent.metadata.contactTitle,
  description: siteContent.metadata.contactDescription,
};

/**
 * Page component for the contact form.
 * @returns {JSX.Element} The Contact page.
 */
export default function ContactPage() {
  return (
    <SectionWrapper>
      <AnimatedSection>
        {/* SectionTitle is now part of ContactSection for better encapsulation */}
        <ContactSection />
      </AnimatedSection>
    </SectionWrapper>
  );
}
