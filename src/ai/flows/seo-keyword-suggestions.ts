'use server';

/**
 * @fileOverview A flow to suggest relevant SEO keywords based on portfolio content.
 *
 * - suggestSeoKeywords - A function that suggests SEO keywords for the portfolio.
 * - SeoKeywordSuggestionsInput - The input type for the suggestSeoKeywords function.
 * - SeoKeywordSuggestionsOutput - The return type for the suggestSeoKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SeoKeywordSuggestionsInputSchema = z.object({
  engineeringProjects: z
    .array(z.string())
    .describe('List of engineering projects with descriptions.'),
  musicContent: z.array(z.string()).describe('List of music content descriptions.'),
  photographyContent: z
    .array(z.string())
    .describe('List of photography content descriptions.'),
});

export type SeoKeywordSuggestionsInput = z.infer<
  typeof SeoKeywordSuggestionsInputSchema
>;

const SeoKeywordSuggestionsOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('List of relevant SEO keywords to enhance discoverability.'),
});

export type SeoKeywordSuggestionsOutput = z.infer<
  typeof SeoKeywordSuggestionsOutputSchema
>;

export async function suggestSeoKeywords(
  input: SeoKeywordSuggestionsInput
): Promise<SeoKeywordSuggestionsOutput> {
  return suggestSeoKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seoKeywordSuggestionsPrompt',
  input: {schema: SeoKeywordSuggestionsInputSchema},
  output: {schema: SeoKeywordSuggestionsOutputSchema},
  prompt: `You are an SEO expert specializing in keyword research for online portfolios.

  Analyze the following portfolio content and suggest relevant keywords to enhance SEO and discoverability.
  Provide a list of keywords that are most likely to attract visitors interested in the content.

  Engineering Projects: {{#each engineeringProjects}}{{{this}}}\n{{/each}}

  Music Content: {{#each musicContent}}{{{this}}}\n{{/each}}

  Photography Content: {{#each photographyContent}}{{{this}}}\n{{/each}}

  Return a JSON array of strings.`,
});

const suggestSeoKeywordsFlow = ai.defineFlow(
  {
    name: 'suggestSeoKeywordsFlow',
    inputSchema: SeoKeywordSuggestionsInputSchema,
    outputSchema: SeoKeywordSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
