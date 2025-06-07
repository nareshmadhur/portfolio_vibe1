
'use client'; // This component needs client-side interactivity

import Image from 'next/image';
import Link from 'next/link';
import BiAiPortfolio from "@/components/sections/BiAiPortfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Textarea is not used by the new Historical Place Summarizer, but might be by Ethical AI
// import { Textarea } from "@/components/ui/textarea"; 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type FormEvent } from 'react';
import { Loader2, AlertTriangle, Scale, Brain, Landmark, ExternalLink } from "lucide-react";

import { analyzeEthicalScenario, type EthicalScenarioAnalyzerInput, type EthicalScenarioAnalyzerOutput } from '@/ai/flows/ethical-scenario-flow';
import { getHistoricalSummary, type HistoricalPlaceSummaryInput, type HistoricalPlaceSummaryOutput } from '@/ai/flows/historical-place-summary-flow';


/**
 * Client-side content for the BI & AI Projects page, including interactive AI tools.
 * @returns {JSX.Element} The client-side interactive content for the BI & AI Projects page.
 */
export default function BiAiPageClientContent() {
  // State for Ethical AI Scenario Analyzer
  const [ethicalTopic, setEthicalTopic] = useState('');
  const [isEthicalLoading, setIsEthicalLoading] = useState(false);
  const [ethicalResult, setEthicalResult] = useState<EthicalScenarioAnalyzerOutput | null>(null);
  const [ethicalError, setEthicalError] = useState<string | null>(null);

  // State for Historical Place Summarizer
  const [placeName, setPlaceName] = useState('');
  const [isHistoricalLoading, setIsHistoricalLoading] = useState(false);
  const [historicalResult, setHistoricalResult] = useState<HistoricalPlaceSummaryOutput | null>(null);
  const [historicalError, setHistoricalError] = useState<string | null>(null);

  const handleEthicalSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEthicalLoading(true);
    setEthicalResult(null);
    setEthicalError(null);

    try {
      const input: EthicalScenarioAnalyzerInput = { topic: ethicalTopic.trim() || undefined };
      const result = await analyzeEthicalScenario(input);
      setEthicalResult(result);
    } catch (e: any) {
      console.error("Error fetching ethical scenario:", e);
      setEthicalError(e.message || siteContent.biAiPage.ethicalScenarioAnalyzer.errorMessages.generalError);
    } finally {
      setIsEthicalLoading(false);
    }
  };

  const handleHistoricalSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!placeName.trim()) {
      setHistoricalError(siteContent.biAiPage.historicalPlaceSummarizer.errorMessages.emptyInput);
      return;
    }
    setIsHistoricalLoading(true);
    setHistoricalResult(null);
    setHistoricalError(null);

    try {
      const input: HistoricalPlaceSummaryInput = { placeName };
      const result = await getHistoricalSummary(input);
      setHistoricalResult(result);
    } catch (e: any) {
      console.error("Error fetching historical summary:", e);
      setHistoricalError(e.message || siteContent.biAiPage.historicalPlaceSummarizer.errorMessages.generalError);
    } finally {
      setIsHistoricalLoading(false);
    }
  };

  const renderList = (items: string[] | undefined, listTitle: string, itemClassName?: string) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-muted-foreground mb-1.5">{listTitle}</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
          {items.map((item, index) => <li key={index} className={itemClassName}>{item}</li>)}
        </ul>
      </div>
    );
  };
  
  const renderKeyEvents = (items: HistoricalPlaceSummaryOutput['keyEvents'] | undefined, listTitle: string) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-muted-foreground mb-1.5">{listTitle}</h4>
        <ul className="space-y-1.5 text-sm text-foreground/80">
          {items.map((item, index) => (
            <li key={index} className="flex">
              <span className="font-semibold w-28 shrink-0">{item.year}:</span>
              <span>{item.event}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }


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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
          {/* Ethical AI Scenario Analyzer Card */}
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Scale className="h-7 w-7 text-accent" />
                <CardTitle className="text-xl">{siteContent.biAiPage.ethicalScenarioAnalyzer.title}</CardTitle>
              </div>
              <CardDescription className="pt-1">{siteContent.biAiPage.ethicalScenarioAnalyzer.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <form onSubmit={handleEthicalSubmit} className="space-y-4">
                <div>
                  <label htmlFor="ethical-topic" className="block text-sm font-medium text-foreground mb-1.5">
                    {siteContent.biAiPage.ethicalScenarioAnalyzer.inputLabel}
                  </label>
                  <Input
                    id="ethical-topic"
                    type="text"
                    value={ethicalTopic}
                    onChange={(e) => setEthicalTopic(e.target.value)}
                    placeholder={siteContent.biAiPage.ethicalScenarioAnalyzer.inputPlaceholder}
                    disabled={isEthicalLoading}
                    className="w-full"
                  />
                </div>
                <Button type="submit" disabled={isEthicalLoading} className="w-full sm:w-auto">
                  {isEthicalLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Brain className="mr-2 h-4 w-4" />
                  )}
                  {isEthicalLoading ? siteContent.biAiPage.ethicalScenarioAnalyzer.buttonLoadingText : siteContent.biAiPage.ethicalScenarioAnalyzer.buttonText}
                </Button>
              </form>

              {ethicalError && (
                <div role="alert" className="mt-4 p-3 rounded-md bg-destructive/10 text-destructive border border-destructive/30 flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{siteContent.biAiPage.ethicalScenarioAnalyzer.errorMessages.errorTitle}</p>
                    <p className="text-sm">{ethicalError}</p>
                  </div>
                </div>
              )}

              {ethicalResult && (
                <Card className="mt-4 bg-card/50 shadow-inner">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary">{siteContent.biAiPage.ethicalScenarioAnalyzer.scenarioTitleLabel} {ethicalResult.scenarioTitle}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-foreground/90 whitespace-pre-line leading-relaxed">{ethicalResult.scenarioDescription}</p>
                    {renderList(ethicalResult.ethicalConsiderations, siteContent.biAiPage.ethicalScenarioAnalyzer.ethicalConsiderationsLabel)}
                    {renderList(ethicalResult.suggestedQuestions, siteContent.biAiPage.ethicalScenarioAnalyzer.reflectionQuestionsLabel)}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          {/* Historical Place Summarizer Card */}
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Landmark className="h-7 w-7 text-accent" />
                <CardTitle className="text-xl">{siteContent.biAiPage.historicalPlaceSummarizer.title}</CardTitle>
              </div>
              <CardDescription className="pt-1">{siteContent.biAiPage.historicalPlaceSummarizer.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <form onSubmit={handleHistoricalSubmit} className="space-y-4">
                <div>
                  <label htmlFor="place-name" className="block text-sm font-medium text-foreground mb-1.5">
                    {siteContent.biAiPage.historicalPlaceSummarizer.inputLabel}
                  </label>
                  <Input
                    id="place-name"
                    type="text"
                    value={placeName}
                    onChange={(e) => {
                        setPlaceName(e.target.value);
                        if (historicalError && e.target.value.trim()) setHistoricalError(null);
                    }}
                    placeholder={siteContent.biAiPage.historicalPlaceSummarizer.inputPlaceholder}
                    disabled={isHistoricalLoading}
                    className="w-full"
                    aria-describedby={historicalError ? "historical-error" : undefined}
                  />
                </div>
                <Button type="submit" disabled={isHistoricalLoading} className="w-full sm:w-auto">
                  {isHistoricalLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                     <Landmark className="mr-2 h-4 w-4" /> 
                  )}
                  {isHistoricalLoading ? siteContent.biAiPage.historicalPlaceSummarizer.buttonLoadingText : siteContent.biAiPage.historicalPlaceSummarizer.buttonText}
                </Button>
              </form>

              {historicalError && (
                <div id="historical-error" role="alert" className="mt-4 p-3 rounded-md bg-destructive/10 text-destructive border border-destructive/30 flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{siteContent.biAiPage.historicalPlaceSummarizer.errorMessages.errorTitle}</p>
                    <p className="text-sm">{historicalError}</p>
                  </div>
                </div>
              )}

              {historicalResult && (
                <Card className="mt-4 bg-card/50 shadow-inner">
                   <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-primary">{historicalResult.summaryTitle || `${siteContent.biAiPage.historicalPlaceSummarizer.summaryTitleLabel} ${historicalResult.placeNameDisplay}`}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-3">
                    {historicalResult.suggestedImageKeywords && historicalResult.suggestedImageKeywords.trim() !== "" && (
                        <div className="my-3 aspect-video relative rounded-md overflow-hidden bg-muted/50">
                            <Image
                                src={`https://source.unsplash.com/600x400/?${encodeURIComponent(historicalResult.suggestedImageKeywords.trim().replace(/\s+/g, ','))}`}
                                alt={`${siteContent.biAiPage.historicalPlaceSummarizer.visualPlaceholderAlt} ${historicalResult.placeNameDisplay}`}
                                layout="fill"
                                objectFit="cover"
                                data-ai-hint={historicalResult.suggestedImageKeywords} // Keep original hint
                            />
                        </div>
                    )}
                    <p className="text-foreground/90 whitespace-pre-line leading-relaxed">{historicalResult.historicalSummary}</p>
                    {renderKeyEvents(historicalResult.keyEvents, siteContent.biAiPage.historicalPlaceSummarizer.keyEventsLabel)}
                    {renderList(historicalResult.interestingFacts, siteContent.biAiPage.historicalPlaceSummarizer.interestingFactsLabel)}
                    {historicalResult.learnMoreLinkSuggestion && (
                        <div className="mt-4 pt-3 border-t border-border/50">
                            <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                                <Link href={historicalResult.learnMoreLinkSuggestion} target="_blank" rel="noopener noreferrer">
                                    {siteContent.biAiPage.historicalPlaceSummarizer.learnMoreButton} <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                                </Link>
                            </Button>
                        </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection delay="delay-100">
        <SectionTitle>{siteContent.biAiPage.projectsTitle}</SectionTitle>
        <BiAiPortfolio />
      </AnimatedSection>
    </SectionWrapper>
  );
}
    
