
'use client'; // This component needs client-side interactivity

import { siteContent } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type FormEvent, useEffect } from 'react';
import { Loader2, AlertTriangle, Sparkles } from "lucide-react";
import { askNareshAI, type AskNareshAIInput } from '@/ai/flows/ask-me-flow';
import SectionTitle from "@/components/shared/SectionTitle";
import BiAiPortfolio from "@/components/sections/BiAiPortfolio";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";


/**
 * Client-side content for the BI & AI Projects page, including the "Ask My AI Assistant" tool.
 * @returns {JSX.Element} The client-side interactive content for the BI & AI Projects page.
 */
export default function BiAiPageClientContent() {
  const [question, setQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processMarkdown = (text: string): string => {
    let html = text;
    // Convert **bold** to <strong>bold</strong>
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Convert *italic* to <em>italic</em> (optional, but good to have)
    // html = html.replace(/\*(.*?)\*/g, '<em>$1</em>'); 
    // Basic list item handling (can be expanded)
    // html = html.replace(/^\s*-\s+(.*)/gm, '<li>$1</li>'); 
    // Convert newlines to <br />
    html = html.replace(/\n/g, "<br />");
    return html;
  };
  

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!question.trim()) {
      setError(siteContent.biAiPage.askMeAnything.errorMessages.emptyInput);
      return;
    }
    setSubmittedQuestion(question);
    setIsLoading(true);
    setAiAnswer(null);
    setError(null);
    // setQuestion(''); // Clear input after submission is initiated

    try {
      const input: AskNareshAIInput = { question };
      const result = await askNareshAI(input);
      setAiAnswer(result.answer);
      setQuestion(''); // Clear input after successful response
    } catch (e: any) {
      console.error("Error fetching AI answer:", e);
      setError(e.message || siteContent.biAiPage.askMeAnything.errorMessages.generalError);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // This effect could be used to auto-clear submittedQuestion/aiAnswer if the main question input is cleared MANUALLY by user,
    // but with the current logic of clearing `question` on submit, it's less critical.
    // If `question` (the Textarea) is empty and there was a previous conversation, clearing them might feel abrupt.
    // For now, explicit clearing is handled in handleSubmit.
  }, [question, submittedQuestion, aiAnswer]);


  return (
    <SectionWrapper>
      <AnimatedSection>
        <SectionTitle>{siteContent.biAiPage.title}</SectionTitle>
        <p className="text-lg mb-10 text-muted-foreground max-w-3xl text-left">
          {siteContent.biAiPage.description}
        </p>
      </AnimatedSection>

      <AnimatedSection delay="delay-50">
        <div className={cn(
          "max-w-3xl mx-auto",
          "gemini-border-static", 
          isLoading && "gemini-border-animate-rotation" 
        )}>
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-7 w-7 text-accent animate-gentle-sparkle-pulse" />
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
                    className={cn(
                      "w-full min-h-[80px]",
                      "transition-all duration-300 ease-in-out",
                      "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-offset-card",
                      "focus-visible:border-transparent"
                    )}
                    rows={3}
                    aria-describedby={error ? "ai-question-error" : undefined}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading || !question.trim()} 
                  className={cn(
                    "w-full sm:w-auto",
                    "transition-all duration-200 ease-in-out",
                    "hover:scale-105 hover:brightness-110 focus-visible:scale-105 focus-visible:brightness-110"
                  )}
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  {isLoading ? siteContent.biAiPage.askMeAnything.buttonLoadingText : siteContent.biAiPage.askMeAnything.buttonText}
                </Button>
              </form>

              {error && !isLoading && ( // Only show error if not loading and error exists
                <div 
                  id="ai-question-error" 
                  role="alert" 
                  className="mt-4 p-3 rounded-md bg-destructive/10 text-destructive border border-destructive/30 flex items-start space-x-2 animate-fadeIn"
                >
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{siteContent.biAiPage.askMeAnything.errorMessages.errorTitle}</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              )}
              
              {/* Chatbot-style display area */}
              <div className="mt-6 space-y-4">
                {submittedQuestion && (
                  <AnimatedSection animationType="fadeIn" className="p-4 rounded-md bg-secondary/50 shadow">
                    <p className="font-semibold text-secondary-foreground">You:</p>
                    <p className="text-secondary-foreground/90 whitespace-pre-line">{submittedQuestion}</p>
                  </AnimatedSection>
                )}
                {isLoading && (
                  <AnimatedSection animationType="fadeIn" className="p-4 rounded-md bg-muted/30 shadow flex items-center">
                    <Loader2 className="mr-3 h-5 w-5 animate-spin text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">AI Assistant is thinking...</p>
                  </AnimatedSection>
                )}
                {aiAnswer && !isLoading && (
                  <AnimatedSection animationType="fadeIn" className="p-4 rounded-md bg-primary/5 shadow">
                    <p className="font-semibold text-primary">AI Assistant:</p>
                    <div 
                        className="text-foreground/90 whitespace-pre-line leading-relaxed" 
                        dangerouslySetInnerHTML={{ __html: processMarkdown(aiAnswer) }} 
                    />
                  </AnimatedSection>
                )}
              </div>

            </CardContent>
            <CardFooter className="text-xs text-muted-foreground pt-4 justify-end">
              <p>Powered by Google Gemini</p>
            </CardFooter>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection delay="delay-100" className="mt-12 md:mt-16">
        <SectionTitle>{siteContent.biAiPage.projectsTitle}</SectionTitle>
        <BiAiPortfolio />
      </AnimatedSection>
    </SectionWrapper>
  );
}
    
