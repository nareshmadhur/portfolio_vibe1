// src/ai/flows/ai-idea-spark-flow.ts
'use server';
/**
 * @fileOverview An AI agent that generates project ideas or explanations for AI/BI concepts.
 *
 * - getAiIdea - A function that handles the idea/explanation generation.
 * - AiIdeaSparkInput - The input type for the flow.
 * - AiIdeaSparkOutput - The return type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit'; // Use Genkit's re-export of Zod

// Input Schema (not exported directly)
const AiIdeaSparkInputSchema = z.object({
  keywords: z.string().min(3, { message: "Keywords must be at least 3 characters." })
    .describe('Keywords or a short phrase related to AI or Business Intelligence for which an idea or explanation is sought.'),
});
export type AiIdeaSparkInput = z.infer<typeof AiIdeaSparkInputSchema>;

// Output Schema (not exported directly)
const AiIdeaSparkOutputSchema = z.object({
  title: z.string().describe('A catchy and relevant title for the generated idea or explanation.'),
  explanation: z.string().describe('A concise explanation of the AI/BI concept or a project idea (1-2 paragraphs).'),
  suggestedKeywords: z.array(z.string()).optional().describe('A few related keywords or concepts the user might also be interested in.'),
});
export type AiIdeaSparkOutput = z.infer<typeof AiIdeaSparkOutputSchema>;

/**
 * Publicly exported function to be called from server components or actions.
 * @param {AiIdeaSparkInput} input - The keywords provided by the user.
 * @returns {Promise<AiIdeaSparkOutput>} The AI-generated idea or explanation.
 */
export async function getAiIdea(input: AiIdeaSparkInput): Promise<AiIdeaSparkOutput> {
  return aiIdeaSparkGenkitFlow(input);
}

// Define the prompt to be used by the Genkit flow
const ideaSparkPrompt = ai.definePrompt({
  name: 'aiIdeaSparkPrompt',
  input: { schema: AiIdeaSparkInputSchema },
  output: { schema: AiIdeaSparkOutputSchema },
  prompt: `You are an AI assistant named 'Idea Spark', specializing in Business Intelligence and Artificial Intelligence.
Your goal is to inspire and educate users by providing concise project ideas or simple explanations of concepts based on their input.

User's keywords/phrase: {{{keywords}}}

Based on these keywords, generate:
1. A catchy and relevant "title".
2. A concise "explanation" (1-2 paragraphs) that is either a project idea or an explanation of an AI/BI concept related to the keywords.
3. Optionally, provide a few "suggestedKeywords" (related concepts or terms, as an array of strings) that the user might find interesting for further exploration.

Keep the tone encouraging and informative. Ensure your output strictly adheres to the requested JSON schema.`,
  model: 'googleai/gemini-1.5-flash-latest', 
  config: { temperature: 0.7 }
});

// Define the Genkit Flow that orchestrates the AI call
const aiIdeaSparkGenkitFlow = ai.defineFlow(
  {
    name: 'aiIdeaSparkGenkitFlow', // Internal Genkit flow name
    inputSchema: AiIdeaSparkInputSchema,
    outputSchema: AiIdeaSparkOutputSchema,
  },
  async (input) => {
    const { output } = await ideaSparkPrompt(input);

    if (!output) {
      // This case should ideally be rare if the LLM adheres to the output schema.
      // Genkit's `definePrompt` with an output schema attempts to parse the LLM response into that schema.
      // If parsing fails or the LLM doesn't respond appropriately, `output` might be undefined or not match the schema.
      console.error("AI Idea Spark Flow: LLM output was empty or failed to parse.");
      throw new Error("AI failed to generate a valid response. The output might not conform to the expected schema. Please try again or adjust the prompt.");
    }
    // `output` is automatically parsed by Genkit into the `AiIdeaSparkOutputSchema` type.
    return output;
  }
);

