
'use client'; // This component needs client-side interactivity

import BiAiPortfolio from "@/components/sections/BiAiPortfolio";
import SectionTitle from "@/components/shared/SectionTitle";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { siteContent } from "@/lib/constants";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type FormEvent } from 'react';
import { Loader2, AlertTriangle, Scale, Wand2, ListChecks, Lightbulb, Brain } from "lucide-react";

import { analyzeEthicalScenario, type EthicalScenarioAnalyzerInput, type EthicalScenarioAnalyzerOutput } from '@/ai/flows/ethical-scenario-flow';
import { deconstructProjectIdea, type ProjectDeconstructorInput, type ProjectDeconstructorOutput } from '@/ai/flows/project-deconstructor-flow';

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

  // State for AI Project Deconstructor
  const [projectDescription, setProjectDescription] = useState('');
  const [isDeconstructorLoading, setIsDeconstructorLoading] = useState(false);
  const [deconstructorResult, setDeconstructorResult] = useState<ProjectDeconstructorOutput | null>(null);
  const [deconstructorError, setDeconstructorError] = useState<string | null>(null);

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

  const handleDeconstructorSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!projectDescription.trim()) {
      setDeconstructorError(siteContent.biAiPage.projectDeconstructor.errorMessages.emptyInput);
      return;
    }
    setIsDeconstructorLoading(true);
    setDeconstructorResult(null);
    setDeconstructorError(null);

    try {
      const input: ProjectDeconstructorInput = { description: projectDescription };
      const result = await deconstructProjectIdea(input);
      setDeconstructorResult(result);
    } catch (e: any) {
      console.error("Error deconstructing project:", e);
      setDeconstructorError(e.message || siteContent.biAiPage.projectDeconstructor.errorMessages.generalError);
    } finally {
      setIsDeconstructorLoading(false);
    }
  };

  const renderList = (items: string[] | undefined, listTitle: string) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-muted-foreground mb-1.5">{listTitle}</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
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

          {/* AI Project Deconstructor Card */}
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Wand2 className="h-7 w-7 text-accent" />
                <CardTitle className="text-xl">{siteContent.biAiPage.projectDeconstructor.title}</CardTitle>
              </div>
              <CardDescription className="pt-1">{siteContent.biAiPage.projectDeconstructor.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <form onSubmit={handleDeconstructorSubmit} className="space-y-4">
                <div>
                  <label htmlFor="project-description" className="block text-sm font-medium text-foreground mb-1.5">
                    {siteContent.biAiPage.projectDeconstructor.inputLabel}
                  </label>
                  <Textarea
                    id="project-description"
                    value={projectDescription}
                    onChange={(e) => {
                        setProjectDescription(e.target.value);
                        if (deconstructorError && e.target.value.trim()) setDeconstructorError(null);
                    }}
                    placeholder={siteContent.biAiPage.projectDeconstructor.inputPlaceholder}
                    disabled={isDeconstructorLoading}
                    className="w-full"
                    rows={3}
                    aria-describedby={deconstructorError ? "deconstructor-error" : undefined}
                  />
                </div>
                <Button type="submit" disabled={isDeconstructorLoading} className="w-full sm:w-auto">
                  {isDeconstructorLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <ListChecks className="mr-2 h-4 w-4" />
                  )}
                  {isDeconstructorLoading ? siteContent.biAiPage.projectDeconstructor.buttonLoadingText : siteContent.biAiPage.projectDeconstructor.buttonText}
                </Button>
              </form>

              {deconstructorError && (
                <div id="deconstructor-error" role="alert" className="mt-4 p-3 rounded-md bg-destructive/10 text-destructive border border-destructive/30 flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">{siteContent.biAiPage.projectDeconstructor.errorMessages.errorTitle}</p>
                    <p className="text-sm">{deconstructorError}</p>
                  </div>
                </div>
              )}

              {deconstructorResult && (
                <Card className="mt-4 bg-card/50 shadow-inner">
                   <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-primary">{siteContent.biAiPage.projectDeconstructor.suggestedTitleLabel} {deconstructorResult.suggestedTitle}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p><span className="font-semibold text-muted-foreground">{siteContent.biAiPage.projectDeconstructor.approachLabel}</span> {deconstructorResult.projectApproach}</p>
                    {renderList(deconstructorResult.keyTechniques, siteContent.biAiPage.projectDeconstructor.keyTechniquesLabel)}
                    {renderList(deconstructorResult.suggestedTechStack, siteContent.biAiPage.projectDeconstructor.techStackLabel)}
                    {renderList(deconstructorResult.potentialChallenges, siteContent.biAiPage.projectDeconstructor.challengesLabel)}
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


    