import BiAiPortfolio from "@/components/sections/BiAiPortfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";

export const metadata = {
  title: "BI & AI Projects | Tri-Folio",
  description: "Explore a collection of Business Intelligence and Artificial Intelligence projects.",
};

export default function BiAiPage() {
  return (
    <SectionWrapper>
      <SectionTitle>BI & AI Projects</SectionTitle>
      <p className="text-center text-lg mb-10 text-muted-foreground max-w-2xl mx-auto">
        A showcase of my work in Business Intelligence, Data Analytics, and Artificial Intelligence. Each project highlights different skills and technologies I've utilized to solve complex problems and deliver actionable insights.
      </p>
      <BiAiPortfolio />
    </SectionWrapper>
  );
}
