
'use client'; // This component needs client-side interactivity

import BiAiPortfolio from "@/components/sections/BiAiPortfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type FormEvent } from 'react';
import { Loader2, Sparkles, AlertTriangle } from "lucide-react";
import { getAiIdea, type AiIdeaSparkInput, type AiIdeaSparkOutput } from '@/ai/flows/ai-idea-spark-flow';

/**
 * Client-side content for the BI & AI Projects page, including the AI Idea Spark feature.
 * @returns {JSX.Element} The client-side interactive content for the BI & AI Projects page.
 */
export default function BiAiPageClientContent() {
  const [keywords, setKeywords] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState<AiIdeaSparkOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!keywords.trim()) {
      setError(siteContent.biAiPage.ideaSpark.errorMessages.emptyKeywords);
      return;
    }
    setIsLoading(true);
    setAiResult(null);
    setError(null);

    try {
      const input: AiIdeaSparkInput = { keywords };
      const result = await getAiIdea(input);
      setAiResult(result);
    } catch (e: any) {
      console.error("Error fetching AI idea:", e);
      setError(e.message || siteContent.biAiPage.ideaSpark.errorMessages.generalError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper>
      <AnimatedSection>
        <SectionTitle>{siteContent.biAiPage.title}</SectionTitle>
        <p className="text-lg mb-10 text-muted-foreground max-w-2xl text-left">
          {siteContent.biAiPage.description}
        </p>
      </AnimatedSection>

      {/* AI Idea Spark Section */}
      <AnimatedSection delay="delay-50">
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 mt-0 md:mt-4">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Sparkles className="h-7 w-7 text-accent" />
              <CardTitle className="text-2xl">{siteContent.biAiPage.ideaSpark.title}</CardTitle>
            </div>
            <CardDescription className="pt-1">{siteContent.biAiPage.ideaSpark.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="ai-keywords" className="block text-sm font-medium text-foreground mb-1.5">
                  {siteContent.biAiPage.ideaSpark.inputLabel}
                </label>
                <Input
                  id="ai-keywords"
                  type="text"
                  value={keywords}
                  onChange={(e) => {
                    setKeywords(e.target.value);
                    if (error && e.target.value.trim()) setError(null); // Clear error on type
                  }}
                  placeholder={siteContent.biAiPage.ideaSpark.inputPlaceholder}
                  disabled={isLoading}
                  className="w-full"
                  aria-describedby={error ? "keywords-error" : undefined}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                {isLoading ? siteContent.biAiPage.ideaSpark.buttonLoadingText : siteContent.biAiPage.ideaSpark.buttonText}
              </Button>
            </form>

            {error && (
              <div id="keywords-error" role="alert" className="mt-4 p-4 rounded-md bg-destructive/10 text-destructive border border-destructive/30 flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">{siteContent.biAiPage.ideaSpark.errorMessages.errorTitle}</p>
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}

            {aiResult && (
              <Card className="mt-6 bg-card shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{aiResult.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 whitespace-pre-line leading-relaxed">{aiResult.explanation}</p>
                  {aiResult.suggestedKeywords && aiResult.suggestedKeywords.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-border/70">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                        {siteContent.biAiPage.ideaSpark.relatedKeywordsLabel}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {aiResult.suggestedKeywords.map(kw => (
                          <span key={kw} className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-medium">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection delay="delay-100" className="mt-12 md:mt-16">
        <SectionTitle>{siteContent.biAiPage.projectsTitle}</SectionTitle>
        <BiAiPortfolio />
      </AnimatedSection>
    </SectionWrapper>
  );
}
