
'use server';
/**
 * @fileOverview An AI agent that answers questions based on Naresh Madhur's professional profile.
 *
 * - askNareshAI - A function that handles user questions and generates answers.
 * - AskNareshAIInput - The input type for the flow.
 * - AskNareshAIOutput - The return type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { siteContent } from '@/lib/constants';

const AskNareshAIInputSchema = z.object({
  question: z.string().min(5, { message: "Question must be at least 5 characters." })
    .describe('The user\'s question about Naresh Madhur.'),
});
export type AskNareshAIInput = z.infer<typeof AskNareshAIInputSchema>;

const AskNareshAIOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user\'s question.'),
});
export type AskNareshAIOutput = z.infer<typeof AskNareshAIOutputSchema>;

export async function askNareshAI(input: AskNareshAIInput): Promise<AskNareshAIOutput> {
  return askNareshAIGenkitFlow(input);
}

const askNareshAIPrompt = ai.definePrompt({
  name: 'askNareshAIPrompt',
  input: { schema: AskNareshAIInputSchema },
  output: { schema: AskNareshAIOutputSchema },
  prompt: `You are a helpful AI assistant for Naresh Madhur. Your knowledge base includes detailed information from Naresh Madhur's resume (covering his skills, experience, education, projects) and the content of his public GitHub repositories.

You should answer questions naturally and conversationally, drawing upon this comprehensive understanding of Naresh.

User's question: {{{question}}}

Based on your knowledge of Naresh Madhur, provide a concise and relevant "answer".
If the question is outside the scope of Naresh's professional profile, skills, projects, or publicly available information you are trained on, politely state that you cannot answer or that the information is not available.
Do not invent information. Be truthful and stick to the information you are presumed to know.
`,
  model: 'googleai/gemini-1.5-flash-latest',
  config: {
    temperature: 0.4, // Lower temperature for more factual, less speculative answers
    safetySettings: [
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  }
});

const askNareshAIGenkitFlow = ai.defineFlow(
  {
    name: 'askNareshAIGenkitFlow',
    inputSchema: AskNareshAIInputSchema,
    outputSchema: AskNareshAIOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await askNareshAIPrompt(input);
      if (!output || !output.answer || output.answer.trim() === "") {
        // If the answer is empty or only whitespace, treat as no valid output.
        console.warn("Ask Naresh AI Flow: Model returned empty or whitespace answer for question:", input.question);
        throw new Error(siteContent.biAiPage.askMeAnything.errorMessages.noModelOutput);
      }
      return output;
    } catch (flowError: any) {
      console.error("Ask Naresh AI Flow execution error - Question:", input.question);
      console.error("Ask Naresh AI Flow execution error - Message:", flowError.message);
      console.error("Ask Naresh AI Flow execution error - Stack:", flowError.stack);
      // Check if the error message from the flow matches one of our specific messages already
      if (Object.values(siteContent.biAiPage.askMeAnything.errorMessages).includes(flowError.message)) {
        throw flowError; // Re-throw if it's already a known, specific error
      }
      // Otherwise, throw the general error
      throw new Error(siteContent.biAiPage.askMeAnything.errorMessages.generalError);
    }
  }
);
