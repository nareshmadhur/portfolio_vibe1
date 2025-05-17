import SeoKeywordsGenerator from "@/components/sections/SeoKeywordsGenerator";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";

export const metadata = {
  title: "SEO Keyword Tool | Tri-Folio",
  description: "Generate SEO keywords for your portfolio content using AI.",
};

export default function SeoKeywordsPage() {
  return (
    <SectionWrapper>
      {/* SectionTitle is inside SeoKeywordsGenerator, or can be added here if needed */}
      {/* <SectionTitle>SEO Keyword Generation Tool</SectionTitle> */}
      <SeoKeywordsGenerator />
    </SectionWrapper>
  );
}
