
'use server';
/**
 * @fileOverview An AI agent that provides historical summaries of places.
 *
 * - getHistoricalSummary - A function that handles fetching and structuring historical place summaries.
 * - HistoricalPlaceSummaryInput - The input type for the flow.
 * - HistoricalPlaceSummaryOutput - The return type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { siteContent } from '@/lib/constants';

const HistoricalPlaceSummaryInputSchema = z.object({
  placeName: z.string().min(2, { message: "Place name must be at least 2 characters." })
    .describe('The name of the historical place the user wants to learn about (e.g., "Rome", "Machu Picchu").'),
});
export type HistoricalPlaceSummaryInput = z.infer<typeof HistoricalPlaceSummaryInputSchema>;

const HistoricalPlaceSummaryOutputSchema = z.object({
  placeNameDisplay: z.string().describe("The display-friendly name of the place, often similar to the input."),
  summaryTitle: z.string().describe('A concise and engaging title for the historical summary (e.g., "The Enduring Legacy of the Great Wall of China").'),
  historicalSummary: z.string().describe('A 2-3 paragraph narrative summarizing the key historical aspects, significance, and evolution of the place. Focus on clarity and engaging storytelling.'),
  keyEvents: z.array(z.object({
    year: z.string().describe("The year or approximate time period of the event (e.g., '70-80 AD', 'c. 2560 BC', '15th Century')."),
    event: z.string().describe("A brief description of a significant historical event related to the place."),
  }))
  .min(3, { message: "AI should provide at least 3 key events." })
  .max(5, { message: "AI should provide no more than 5 key events." })
  .describe('A list of 3-5 pivotal historical events with their corresponding years or periods. Ordered chronologically if possible.'),
  interestingFacts: z.array(z.string()).min(2).max(4).describe('A list of 2-4 fascinating and little-known facts about the place.'),
  suggestedImageKeywords: z.string().describe('1-2 keywords relevant to the place that can be used for searching an image (e.g., "ancient rome colosseum", "inca trail machu picchu"). Maximum two words.'),
  learnMoreLinkSuggestion: z.string().url().optional().describe('An optional URL to a reputable source (like Wikipedia) for more detailed information about the place.'),
});
export type HistoricalPlaceSummaryOutput = z.infer<typeof HistoricalPlaceSummaryOutputSchema>;

export async function getHistoricalSummary(input: HistoricalPlaceSummaryInput): Promise<HistoricalPlaceSummaryOutput> {
  return historicalPlaceSummaryGenkitFlow(input);
}

const historicalPlacePrompt = ai.definePrompt({
  name: 'historicalPlacePrompt',
  input: { schema: HistoricalPlaceSummaryInputSchema },
  output: { schema: HistoricalPlaceSummaryOutputSchema },
  prompt: `You are a knowledgeable and engaging historian. Your task is to provide a concise yet informative historical summary of a place specified by the user.
Place to summarize: {{{placeName}}}

Based on this place, generate the following information, ensuring it is synthesized from generally accepted historical knowledge:
1.  "placeNameDisplay": The common, display-friendly name for "{{{placeName}}}".
2.  "summaryTitle": A captivating title for the summary.
3.  "historicalSummary": A 2-3 paragraph overview of the place's history, covering its origin, key periods of significance, major transformations, and lasting legacy.
4.  "keyEvents": A chronological list of 3-5 major historical events, each with a "year" (or period) and a brief "event" description.
5.  "interestingFacts": 2-4 intriguing and lesser-known facts about the place.
6.  "suggestedImageKeywords": One or two relevant keywords for finding a representative image (e.g., "ancient rome colosseum", "inca trail machu picchu"). Maximum two words.
7.  "learnMoreLinkSuggestion" (Optional): If readily available and appropriate, a direct URL to a primary, reputable online resource (like a Wikipedia page) for the place.

Strive for accuracy and a neutral, informative tone. Ensure your output strictly adheres to the requested JSON schema. Focus on providing a summary that is both educational and engaging for a general audience.
`,
  model: 'googleai/gemini-1.5-flash-latest',
  config: { temperature: 0.4 }
});

const historicalPlaceSummaryGenkitFlow = ai.defineFlow(
  {
    name: 'historicalPlaceSummaryGenkitFlow',
    inputSchema: HistoricalPlaceSummaryInputSchema,
    outputSchema: HistoricalPlaceSummaryOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await historicalPlacePrompt(input);
      if (!output) {
        // Provide a slightly more specific error if the model returns no parsable output
        throw new Error(siteContent.biAiPage.historicalPlaceSummarizer.errorMessages.noModelOutput || "The AI model did not return a valid response. This might be due to content restrictions or an issue with the query.");
      }
      // Validate image keywords length (simple post-processing validation)
      if (output.suggestedImageKeywords && output.suggestedImageKeywords.split(' ').length > 2) {
          output.suggestedImageKeywords = output.suggestedImageKeywords.split(' ').slice(0, 2).join(' ');
      }
      return output;
    } catch (flowError: any) {
      console.error("Historical Place Summarizer Flow execution error:", flowError.message, flowError.stack);
      // Propagate a general error message to the client
      throw new Error(siteContent.biAiPage.historicalPlaceSummarizer.errorMessages.generalError);
    }
  }
);
    
