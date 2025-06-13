
'use client'; // This component needs client-side interactivity

import { siteContent } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type FormEvent, useEffect } from 'react';
import { Loader2, AlertTriangle, Sparkles } from "lucide-react";
import { askNareshAI, type AskNareshAIInput } from '@/ai/flows/ask-me-flow';
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
    if (!text) return '';
    let html = text;
    // Convert **bold** to <strong>bold</strong>
    // Ensure to handle potential HTML entities within the bolded text by temporarily encoding them
    html = html.replace(/\*\*(.*?)\*\*/g, (_match, content) => {
      // A more robust solution would involve a proper Markdown parser,
      // but for simple bolding, this should be okay.
      // This regex specifically targets double asterisks.
      return `<strong>${content}</strong>`;
    });
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
    setSubmittedQuestion(question); // Store the question to display in chat
    setIsLoading(true);
    setAiAnswer(null); // Clear previous answer
    setError(null); // Clear previous error
    // setQuestion(''); // Clear input immediately after submission initiated - MOVED

    try {
      const input: AskNareshAIInput = { question };
      const result = await askNareshAI(input);
      setAiAnswer(result.answer);
      setQuestion(''); // Clear input only after successful response
    } catch (e: any) {
      console.error("Error fetching AI answer:", e);
      setError(e.message || siteContent.biAiPage.askMeAnything.errorMessages.generalError);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // Auto-clear error when user starts typing a new question
    if (error && question.trim() && !isLoading) {
      setError(null);
    }
  }, [question, error, isLoading]);


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
          "gemini-border-static", // Always show static border
          isLoading && "gemini-border-animate-rotation" // Animate only when loading
        )}>
          <Card className="flex flex-col min-h-[500px] max-h-[70vh]"> {/* Ensure card can grow and has a max height */}
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-7 w-7 text-accent animate-gentle-sparkle-pulse" />
                <CardTitle className="text-xl">{siteContent.biAiPage.askMeAnything.title}</CardTitle>
              </div>
              {/* Description moved to initial AI message */}
            </CardHeader>
            
            <CardContent className="flex flex-col flex-grow space-y-4 overflow-hidden p-4 md:p-6">
              {/* Chat messages area */}
              <div className="space-y-4 flex-grow overflow-y-auto pr-2"> {/* Added pr-2 for scrollbar spacing */}
                {/* Initial AI Message */}
                <AnimatedSection animationType="fadeIn" className="p-3 rounded-md bg-primary/5 shadow">
                  <p className="font-semibold text-primary">AI Assistant:</p>
                  <div className="text-foreground/90 whitespace-pre-line leading-relaxed">
                    {siteContent.biAiPage.askMeAnything.initialAiMessage}
                  </div>
                </AnimatedSection>

                {/* User's Submitted Question */}
                {submittedQuestion && (
                  <AnimatedSection animationType="fadeIn" className="p-3 rounded-md bg-secondary/50 shadow mt-3">
                    <p className="font-semibold text-secondary-foreground">You:</p>
                    <p className="text-secondary-foreground/90 whitespace-pre-line">{submittedQuestion}</p>
                  </AnimatedSection>
                )}
                
                {/* AI Thinking Indicator */}
                {isLoading && (
                  <AnimatedSection animationType="fadeIn" className="p-3 rounded-md bg-muted/30 shadow flex items-center mt-3">
                    <Loader2 className="mr-3 h-5 w-5 animate-spin text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">AI Assistant is thinking...</p>
                  </AnimatedSection>
                )}

                {/* AI's Actual Answer */}
                {aiAnswer && !isLoading && (
                  <AnimatedSection animationType="fadeIn" className="p-3 rounded-md bg-primary/5 shadow mt-3">
                    <p className="font-semibold text-primary">AI Assistant:</p>
                    <div 
                        className="text-foreground/90 whitespace-pre-line leading-relaxed" 
                        dangerouslySetInnerHTML={{ __html: processMarkdown(aiAnswer) }} 
                    />
                  </AnimatedSection>
                )}
              </div>

              {/* Error Message - Positioned before input form, within scrollable area if needed */}
              {error && !isLoading && (
                <div 
                  id="ai-question-error" 
                  role="alert" 
                  className="mt-auto p-3 rounded-md bg-destructive/10 text-destructive border border-destructive/30 flex items-start space-x-2 animate-fadeIn shrink-0" // shrink-0 so it doesn't push form
                >
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{siteContent.biAiPage.askMeAnything.errorMessages.errorTitle}</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              )}

              {/* Input Form at the bottom */}
              <form onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-border/50 mt-auto shrink-0"> {/* mt-auto pushes to bottom, border for separation */}
                <div>
                  {/* Removed redundant label, placeholder is enough for chatbot UI */}
                  <Textarea
                    id="ai-question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder={siteContent.biAiPage.askMeAnything.inputPlaceholder}
                    disabled={isLoading}
                    className={cn(
                      "w-full min-h-[60px] max-h-[150px]", // Adjusted height
                      "transition-all duration-300 ease-in-out",
                      "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-offset-card",
                      "focus-visible:border-transparent"
                    )}
                    rows={2} // Start with fewer rows
                    aria-describedby={error ? "ai-question-error" : undefined}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey && !isLoading && question.trim()) {
                        e.preventDefault();
                        handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
                      }
                    }}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading || !question.trim()} 
                  className={cn(
                    "w-full sm:w-auto float-right", // Align button to right
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
            </CardContent>

            <CardFooter className="text-xs text-muted-foreground pt-3 pb-3 justify-end border-t border-border/50 shrink-0">
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
    
