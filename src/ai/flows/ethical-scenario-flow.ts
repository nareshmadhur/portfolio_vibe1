
'use server';
/**
 * @fileOverview An AI agent that generates and analyzes ethical scenarios related to AI.
 *
 * - analyzeEthicalScenario - A function that handles scenario generation and analysis.
 * - EthicalScenarioAnalyzerInput - The input type for the flow.
 * - EthicalScenarioAnalyzerOutput - The return type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { siteContent } from '@/lib/constants';

const EthicalScenarioAnalyzerInputSchema = z.object({
  topic: z.string().optional().describe('An optional topic focus for the ethical scenario (e.g., "AI in healthcare", "facial recognition"). If empty, AI chooses a general AI ethics theme.'),
});
export type EthicalScenarioAnalyzerInput = z.infer<typeof EthicalScenarioAnalyzerInputSchema>;

const EthicalScenarioAnalyzerOutputSchema = z.object({
  scenarioTitle: z.string().describe('A concise and thought-provoking title for the generated scenario.'),
  scenarioDescription: z.string().describe('A short (1-2 paragraphs) description of a relatable, hypothetical situation where an AI application is used, highlighting a potential ethical dilemma or challenge.'),
  ethicalConsiderations: z.array(z.string()).describe('2-3 key ethical considerations raised by this scenario.'),
  suggestedQuestions: z.array(z.string()).describe('1-2 questions that encourage the user to reflect on the scenario\'s implications.'),
});
export type EthicalScenarioAnalyzerOutput = z.infer<typeof EthicalScenarioAnalyzerOutputSchema>;

export async function analyzeEthicalScenario(input: EthicalScenarioAnalyzerInput): Promise<EthicalScenarioAnalyzerOutput> {
  return ethicalScenarioGenkitFlow(input);
}

const ethicalScenarioPrompt = ai.definePrompt({
  name: 'ethicalScenarioPrompt',
  input: { schema: EthicalScenarioAnalyzerInputSchema },
  output: { schema: EthicalScenarioAnalyzerOutputSchema },
  prompt: `You are an AI Ethicist and Storyteller. Your goal is to make users think critically about the societal impact of AI.
User's optional topic focus: {{{topic}}} (If no topic is provided, choose a general, impactful AI ethics theme like AI bias, privacy, accountability, or job displacement).

Based on the topic (or a general theme if no topic provided), generate the following:
1. A concise and thought-provoking "scenarioTitle".
2. A short "scenarioDescription" (1-2 paragraphs) presenting a relatable, hypothetical situation where an AI application is used, highlighting a potential ethical dilemma or challenge.
3. Identify 2-3 key "ethicalConsiderations" (as an array of strings) raised by this scenario.
4. Provide 1-2 "suggestedQuestions" (as an array of strings) that encourage the user to reflect on the scenario's implications.

Ensure your output strictly adheres to the requested JSON schema. Be neutral and objective in your analysis. Present the considerations and questions clearly.`,
  model: 'googleai/gemini-1.5-flash-latest',
  config: { temperature: 0.6 }
});

const ethicalScenarioGenkitFlow = ai.defineFlow(
  {
    name: 'ethicalScenarioGenkitFlow',
    inputSchema: EthicalScenarioAnalyzerInputSchema,
    outputSchema: EthicalScenarioAnalyzerOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await ethicalScenarioPrompt(input);
      if (!output) {
        throw new Error(siteContent.biAiPage.ethicalScenarioAnalyzer.errorMessages.generalError);
      }
      return output;
    } catch (flowError: any) {
      console.error("Ethical Scenario Analyzer Flow execution error:", flowError.message, flowError.stack);
      throw new Error(siteContent.biAiPage.ethicalScenarioAnalyzer.errorMessages.generalError);
    }
  }
);

    