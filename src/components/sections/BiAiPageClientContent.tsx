
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

    // General bold pass first
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    const lines = html.split('\n');
    const newLines = [];
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        if (line.startsWith('<h3>') || line.startsWith('<h2>')) { // Already processed
            if (inList) {
                newLines.push('</ul>');
                inList = false;
            }
            newLines.push(line);
            continue;
        }

        if (line.startsWith('### ')) {
            if (inList) {
                newLines.push('</ul>');
                inList = false;
            }
            newLines.push('<h3>' + line.substring(4) + '</h3>');
        } else if (line.startsWith('## ')) {
            if (inList) {
                newLines.push('</ul>');
                inList = false;
            }
            newLines.push('<h2>' + line.substring(3) + '</h2>');
        } else if (line.trim().startsWith('- ')) {
            if (!inList) {
                newLines.push('<ul>');
                inList = true;
            }
            newLines.push('<li>' + line.trim().substring(2) + '</li>');
        } else {
            if (inList) {
                newLines.push('</ul>');
                inList = false;
            }
            if (line.trim() === '') { // Keep empty lines if they are meant for paragraph breaks outside lists
              newLines.push('<br />'); 
            } else {
              newLines.push(line);
            }
        }
    }
    if (inList) {
        newLines.push('</ul>');
    }
    html = newLines.join('\n'); // Rejoin with \n, then convert to <br> if not part of a block
    
    // Convert remaining newlines to <br />, but be careful around block elements
    html = html.replace(/<\/h[23]>\n/g, '</h3>') // Remove \n after headings
               .replace(/<\/ul>\n/g, '</ul>')   // Remove \n after lists
               .replace(/<\/li>\n/g, '</li>')   // Remove \n after list items
               .replace(/\n/g, '<br />'); // Convert remaining newlines

    // Clean up excessive <br> tags, especially those from empty lines or around blocks
    html = html.replace(/<br \s*\/?>\s*(<(h[23]|ul|li))/gi, '$1'); 
    html = html.replace(/(<\/(h[23]|ul|li)>)\s*<br \s*\/?>/gi, '$1');
    html = html.replace(/<li><br \s*\/?>/gi, '<li>'); 
    html = html.replace(/<br \s*\/?>\s*<\/li>/gi, '</li>'); 
    html = html.replace(/(<br \s*\/?>\s*){2,}/gi, '<br />'); // Multiple breaks to one
    html = html.replace(/^<br \s*\/?>/, ''); // Leading breaks
    html = html.replace(/<br \s*\/?>$/, ''); // Trailing breaks


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
    
    setIsLoading(true);
    setAiAnswer(null); 
    setError(null);
    setSubmittedQuestion(question); 
    
    try {
      const input: AskNareshAIInput = { question: question.trim() };
      const result = await askNareshAI(input);
      setAiAnswer(result.answer);
      setQuestion(''); 
    } catch (e: any) {
      console.error("Error fetching AI answer:", e);
      setError(e.message || siteContent.biAiPage.askMeAnything.errorMessages.generalError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
  }, [question, error, isLoading]);

  useEffect(() => {
    scrollToBottom();
    const timer = setTimeout(checkScrollIndicator, 150); 
    return () => clearTimeout(timer);
  }, [aiAnswer, submittedQuestion, checkScrollIndicator, scrollToBottom]);

  useEffect(() => {
    checkScrollIndicator(); 
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
          <Card className="flex flex-col min-h-[500px] max-h-[70vh]">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-7 w-7 text-accent animate-gentle-sparkle-pulse" />
                <CardTitle className="text-xl">{siteContent.biAiPage.askMeAnything.title}</CardTitle>
              </div>
            </CardHeader>

            <CardContent className={cn(
              "flex flex-col flex-grow space-y-4 p-4 md:p-6 min-h-0" 
            )}>
              <div 
                ref={chatLogRef} 
                className="space-y-4 flex-grow overflow-y-auto pr-2 min-h-0 relative" 
              >
                <AnimatedSection animationType="fadeIn" className="p-3 rounded-md bg-primary/5 shadow">
                  <p className="font-semibold text-primary">AI Assistant:</p>
                  <div 
                    className="text-foreground/90 whitespace-pre-line leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: processMarkdown(siteContent.biAiPage.askMeAnything.initialAiMessage) }}
                  />
                </AnimatedSection>

                {submittedQuestion && (
                  <AnimatedSection animationType="fadeIn" className="mt-3 p-3 rounded-md bg-secondary/50 shadow">
                    <p className="font-semibold text-secondary-foreground">You:</p>
                    <p className="text-secondary-foreground/90 whitespace-pre-line">{submittedQuestion}</p>
                  </AnimatedSection>
                )}

                {isLoading && !aiAnswer && (
                  <AnimatedSection animationType="fadeIn" className="mt-3 p-3 rounded-md bg-muted/30 shadow flex items-center">
                    <Loader2 className="mr-3 h-5 w-5 animate-spin text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">AI Assistant is thinking...</p>
                  </AnimatedSection>
                )}

                {aiAnswer && (
                  <AnimatedSection animationType="fadeIn" className="mt-3 p-3 rounded-md bg-primary/5 shadow">
                    <p className="font-semibold text-primary">AI Assistant:</p>
                    <div
                        className="text-foreground/90 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: processMarkdown(aiAnswer) }}
                    />
                  </AnimatedSection>
                )}
                
                {showScrollIndicator && (
                  <button
                    onClick={scrollToBottom}
                    aria-label="Scroll to bottom"
                    className="sticky bottom-2 left-1/2 -translate-x-1/2 p-2 bg-accent/80 hover:bg-accent dark:bg-accent/90 dark:hover:bg-accent/100 backdrop-blur-sm rounded-full z-10 shadow-lg transition-colors"
                  >
                    <ArrowDown className="h-5 w-5 text-accent-foreground" />
                  </button>
                )}
              </div>

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

              <form onSubmit={handleSubmit} className="space-y-3 pt-4 border-t border-border/50 mt-auto shrink-0">
                <div>
                  <Textarea
                    id="ai-question"
                    value={question}
                    onChange={(e) => {
                      setQuestion(e.target.value);
                      if (error) setError(null); 
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
