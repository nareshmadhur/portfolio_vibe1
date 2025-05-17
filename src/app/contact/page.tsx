import ContactSection from "@/components/sections/ContactSection";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";

export const metadata = {
  title: "Contact Me | Tri-Folio",
  description: "Get in touch for inquiries related to engineering, music, or photography.",
};

export default function ContactPage() {
  return (
    <SectionWrapper>
      {/* SectionTitle is inside ContactSection now, so we can remove it here if we want only the card title */}
      {/* <SectionTitle>Contact Me</SectionTitle> */}
      <ContactSection />
    </SectionWrapper>
  );
}
