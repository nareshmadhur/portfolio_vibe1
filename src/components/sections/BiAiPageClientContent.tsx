
'use client';

import { siteContent } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import BiAiPortfolio from "@/components/sections/BiAiPortfolio";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type FormEvent, useEffect, useRef, useCallback } from 'react';
import { Loader2, AlertTriangle, Sparkles, ArrowDown } from "lucide-react";
import { askNareshAI, type AskNareshAIInput } from '@/ai/flows/ask-me-flow';
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper"; 

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
  const chatLogRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const processMarkdown = (text: string): string => {
    if (!text) return '';
    let html = text;

    // 1. Headings (process h3 before h2 to avoid ## matching ###)
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');

    // 2. Bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // 3. Unordered list items
    // Convert '- item' lines to <li>item</li>
    // Then, wrap consecutive <li> blocks in <ul></ul>
    const lines = html.split('\n');
    const newLines = [];
    let listOpen = false;

    for (const line of lines) {
        const trimmedLine = line.trim();
        // Check if the line is a Markdown list item
        if (trimmedLine.startsWith('- ')) {
            if (!listOpen) {
                newLines.push('<ul>');
                listOpen = true;
            }
            // Remove the leading '- ' and wrap in <li>
            newLines.push('<li>' + trimmedLine.substring(2) + '</li>');
        } 
        // Check if the line is already part of an HTML list or heading (from previous replacements)
        else if (trimmedLine.startsWith('<li>') || trimmedLine.startsWith('<ul>') || trimmedLine.startsWith('<h2>') || trimmedLine.startsWith('<h3>') || trimmedLine.startsWith('<strong>')) {
             if (listOpen && !(trimmedLine.startsWith('<li>') || trimmedLine.startsWith('<ul>'))) {
                // If we were in a list, and this line is not a list item, close the list.
                // This specifically checks if the line is not ALREADY an li or ul tag.
                newLines.push('</ul>');
                listOpen = false;
            }
            newLines.push(line); // Keep the original line as it's already processed or special
        }
        else { // Not a list item, not already processed HTML
            if (listOpen) {
                newLines.push('</ul>');
                listOpen = false;
            }
            newLines.push(line);
        }
    }
    if (listOpen) { // Close any list that's still open at the end
        newLines.push('</ul>');
    }
    html = newLines.join('\n');

    // 4. Convert remaining newlines (those not part of list/heading structure) to <br />
    html = html.replace(/\n/g, '<br />');

    // 5. Cleanup common <br /> issues
    // Remove <br /> immediately after closing block tags
    html = html.replace(/<\/(ul|li|h2|h3|strong)><br \s*\/>/gi, '</$1>');
    // Remove <br /> immediately after opening block tags if content starts there
    html = html.replace(/<(ul|li|h2|h3|strong)><br \s*\/>/gi, '<$1>');
     // Remove <br /> if it's the very last thing
    html = html.replace(/<br \s*\/>$/, '');
    // Clean up <br/> inside li tags if they are empty or at start/end
    html = html.replace(/<li><br \s*\/>/gi, '<li>');
    html = html.replace(/<br \s*\/>\s*<\/li>/gi, '</li>');
     // Clean up <br /> between </ul> or </h#> and a following <p>, <ul>, or <h#>
    html = html.replace(/<\/(ul|h[23])><br \s*\/>(\s*<(p|ul|h[23]))/gi, '</$1>$2');


    return html;
  };


  const scrollToBottom = useCallback(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, []);

  const checkScrollIndicator = useCallback(() => {
    if (chatLogRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = chatLogRef.current;
      const isScrollable = scrollHeight > clientHeight;
      const isNotAtBottom = scrollTop + clientHeight < scrollHeight - 10; 
      setShowScrollIndicator(isScrollable && isNotAtBottom);
    } else {
      setShowScrollIndicator(false);
    }
  }, []);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!question.trim() || isLoading) {
      if(!question.trim()) setError(siteContent.biAiPage.askMeAnything.errorMessages.emptyInput);
      return;
    }
    setSubmittedQuestion(question);
    setIsLoading(true);
    setAiAnswer(null); 
    setError(null);
    // Do not clear question state here, clear it after AI response or error
    // setQuestion(''); 

    try {
      const input: AskNareshAIInput = { question: question.trim() };
      const result = await askNareshAI(input);
      setAiAnswer(result.answer);
      setQuestion(''); // Clear input after successful AI response
    } catch (e: any) {
      console.error("Error fetching AI answer:", e);
      setError(e.message || siteContent.biAiPage.askMeAnything.errorMessages.generalError);
      // Don't clear question on error, so user can retry/edit
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error && question.trim() && !isLoading) {
      // Clear error if user starts typing a new question after an error
      // setError(null); // This might be too aggressive, let user see error until next submit
    }
  }, [question, error, isLoading]);

  useEffect(() => {
    scrollToBottom();
    const timer = setTimeout(checkScrollIndicator, 150); // Check after scroll and DOM update
    return () => clearTimeout(timer);
  }, [aiAnswer, submittedQuestion, checkScrollIndicator, scrollToBottom]);

  useEffect(() => {
    checkScrollIndicator(); // Initial check
    window.addEventListener('resize', checkScrollIndicator);
    const currentChatLog = chatLogRef.current;
    if (currentChatLog) {
      currentChatLog.addEventListener('scroll', checkScrollIndicator);
    }
    return () => {
      window.removeEventListener('resize', checkScrollIndicator);
      if (currentChatLog) {
        currentChatLog.removeEventListener('scroll', checkScrollIndicator);
      }
    };
  }, [checkScrollIndicator]);


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
          <Card className="flex flex-col min-h-[500px] max-h-[70vh]"> {/* Ensure Card itself allows children to flex */}
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-7 w-7 text-accent animate-gentle-sparkle-pulse" />
                <CardTitle className="text-xl">{siteContent.biAiPage.askMeAnything.title}</CardTitle>
              </div>
            </CardHeader>

            <CardContent className={cn(
              "flex flex-col flex-grow space-y-4 p-4 md:p-6",
              "min-h-0" // Crucial for allowing internal scrolling
            )}>
              {/* Chat Messages Log */}
              <div 
                ref={chatLogRef} 
                className="space-y-4 flex-grow overflow-y-auto pr-2 min-h-0 relative" // min-h-0 here too
              >
                {/* Initial AI Message */}
                <AnimatedSection animationType="fadeIn" className="p-3 rounded-md bg-primary/5 shadow">
                  <p className="font-semibold text-primary">AI Assistant:</p>
                  <div 
                    className="text-foreground/90 whitespace-pre-line leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: processMarkdown(siteContent.biAiPage.askMeAnything.initialAiMessage) }}
                  />
                </AnimatedSection>

                {/* Submitted Question Display */}
                {submittedQuestion && (
                  <AnimatedSection animationType="fadeIn" className="mt-3 p-3 rounded-md bg-secondary/50 shadow">
                    <p className="font-semibold text-secondary-foreground">You:</p>
                    <p className="text-secondary-foreground/90 whitespace-pre-line">{submittedQuestion}</p>
                  </AnimatedSection>
                )}

                {/* Loading Indicator */}
                {isLoading && !aiAnswer && ( // Show loader only if no answer yet
                  <AnimatedSection animationType="fadeIn" className="mt-3 p-3 rounded-md bg-muted/30 shadow flex items-center">
                    <Loader2 className="mr-3 h-5 w-5 animate-spin text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">AI Assistant is thinking...</p>
                  </AnimatedSection>
                )}

                {/* AI Answer Display */}
                {aiAnswer && ( // Render AI answer as soon as it's available
                  <AnimatedSection animationType="fadeIn" className="mt-3 p-3 rounded-md bg-primary/5 shadow">
                    <p className="font-semibold text-primary">AI Assistant:</p>
                    <div
                        className="text-foreground/90 whitespace-pre-line leading-relaxed prose prose-sm dark:prose-invert max-w-none" // Added prose for better default styling of HTML from Markdown
                        dangerouslySetInnerHTML={{ __html: processMarkdown(aiAnswer) }}
                    />
                  </AnimatedSection>
                )}
                {/* Scroll Down Indicator */}
                {showScrollIndicator && (
                  <button
                    onClick={scrollToBottom}
                    aria-label="Scroll to bottom"
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 bg-accent/80 hover:bg-accent dark:bg-accent/90 dark:hover:bg-accent/100 backdrop-blur-sm rounded-full z-20 shadow-lg transition-colors"
                  >
                    <ArrowDown className="h-5 w-5 text-accent-foreground" />
                  </button>
                )}
              </div>

              {/* Error Display - Placed below scrollable area, but above input form */}
              {error && !isLoading && (
                <div
                  id="ai-question-error"
                  role="alert"
                  className="mt-2 p-3 rounded-md bg-destructive/10 text-destructive border border-destructive/30 flex items-start space-x-2 animate-fadeIn shrink-0"
                >
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{siteContent.biAiPage.askMeAnything.errorMessages.errorTitle}</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              )}

              {/* Input Form - Pushed to the bottom */}
              <form onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-border/50 mt-auto shrink-0">
                <div>
                  <Textarea
                    id="ai-question"
                    value={question}
                    onChange={(e) => {
                      setQuestion(e.target.value);
                      if (error) setError(null); // Clear error when user starts typing
                    }}
                    placeholder={siteContent.biAiPage.askMeAnything.inputPlaceholder}
                    disabled={isLoading}
                    className={cn(
                      "w-full min-h-[60px] max-h-[150px]",
                      "transition-all duration-300 ease-in-out",
                      "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-offset-card",
                      "focus-visible:border-transparent"
                    )}
                    rows={2}
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
                    "w-full sm:w-auto float-right",
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
    
