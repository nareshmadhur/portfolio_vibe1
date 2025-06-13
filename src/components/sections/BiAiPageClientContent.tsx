
'use client'; // This component needs client-side interactivity

import Image from 'next/image'; // Keep for potential future use or if static projects section uses it
import BiAiPortfolio from "@/components/sections/BiAiPortfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type FormEvent } from 'react';
import { Loader2, AlertTriangle, Sparkles } from "lucide-react"; // Changed MessageCircle to Sparkles

import { askNareshAI, type AskNareshAIInput, type AskNareshAIOutput } from '@/ai/flows/ask-me-flow';


/**
 * Client-side content for the BI & AI Projects page, including the "Ask My AI Assistant" tool.
 * @returns {JSX.Element} The client-side interactive content for the BI & AI Projects page.
 */
export default function BiAiPageClientContent() {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!question.trim()) {
      setError(siteContent.biAiPage.askMeAnything.errorMessages.emptyInput);
      return;
    }
    setIsLoading(true);
    setAiAnswer(null);
    setError(null);

    try {
      const input: AskNareshAIInput = { question };
      const result = await askNareshAI(input);
      setAiAnswer(result.answer);
    } catch (e: any) {
      console.error("Error fetching AI answer:", e);
      setError(e.message || siteContent.biAiPage.askMeAnything.errorMessages.generalError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper>
      <AnimatedSection>
        <SectionTitle>{siteContent.biAiPage.title}</SectionTitle>
        <p className="text-lg mb-10 text-muted-foreground max-w-3xl text-left">
          {siteContent.biAiPage.description}
        </p>
      </AnimatedSection>

      <AnimatedSection delay="delay-50">
        <SectionTitle>{siteContent.biAiPage.interactiveToolsTitle}</SectionTitle>
        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col max-w-3xl mx-auto bg-gradient-to-br from-card via-card to-secondary/20 dark:from-card dark:via-card dark:to-secondary/10">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Sparkles className="h-7 w-7 text-accent" />
              <CardTitle className="text-xl">{siteContent.biAiPage.askMeAnything.title}</CardTitle>
            </div>
            <CardDescription className="pt-1">{siteContent.biAiPage.askMeAnything.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="ai-question" className="block text-sm font-medium text-foreground mb-1.5">
                  {siteContent.biAiPage.askMeAnything.inputLabel}
                </label>
                <Textarea
                  id="ai-question"
                  value={question}
                  onChange={(e) => {
                      setQuestion(e.target.value);
                      if (error && e.target.value.trim()) setError(null);
                  }}
                  placeholder={siteContent.biAiPage.askMeAnything.inputPlaceholder}
                  disabled={isLoading}
                  className="w-full min-h-[80px]"
                  rows={3}
                  aria-describedby={error ? "ai-question-error" : undefined}
                />
              </div>
              <Button type="submit" disabled={isLoading || !question.trim()} className="w-full sm:w-auto">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                {isLoading ? siteContent.biAiPage.askMeAnything.buttonLoadingText : siteContent.biAiPage.askMeAnything.buttonText}
              </Button>
            </form>

            {error && (
              <div id="ai-question-error" role="alert" className="mt-4 p-3 rounded-md bg-destructive/10 text-destructive border border-destructive/30 flex items-start space-x-2 animate-fadeIn">
                <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">{siteContent.biAiPage.askMeAnything.errorMessages.errorTitle}</p>
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}

            {aiAnswer && (
              <Card className="mt-6 bg-background shadow-inner animate-fadeIn">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">{siteContent.biAiPage.askMeAnything.answerTitleLabel}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="text-foreground/90 whitespace-pre-line leading-relaxed">{aiAnswer}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground pt-4 justify-end">
            <p>Powered by Google Gemini</p>
          </CardFooter>
        </Card>
      </AnimatedSection>

      {/* Optional: Keep the static projects section if desired */}
      <AnimatedSection delay="delay-100" className="mt-12 md:mt-16">
        <SectionTitle>{siteContent.biAiPage.projectsTitle}</SectionTitle>
        <BiAiPortfolio />
      </AnimatedSection>
    </SectionWrapper>
  );
}
    
