
'use server';
/**
 * @fileOverview An AI agent that answers questions based on Naresh Madhur's professional profile,
 * using summarized information from his resume and GitHub.
 *
 * - askNareshAI - A function that handles user questions and generates answers.
 * - AskNareshAIInput - The input type for the flow.
 * - AskNareshAIOutput - The return type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { siteContent, aiKnowledgeBase } from '@/lib/constants'; // Import aiKnowledgeBase

// Schema for the user's direct input to the flow
const AskNareshAIFlowInputSchema = z.object({
  question: z.string().min(5, { message: "Question must be at least 5 characters." })
    .describe('The user\'s question about Naresh Madhur.'),
});
export type AskNareshAIInput = z.infer<typeof AskNareshAIFlowInputSchema>; // This is the public input type

// Schema for the output of the flow
const AskNareshAIOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user\'s question.'),
});
export type AskNareshAIOutput = z.infer<typeof AskNareshAIOutputSchema>;

// --- Internal Prompt Input Schema ---
// This schema includes the user's question AND the knowledge base data
const AskNareshAIPromptInputSchema = z.object({
  question: z.string().describe("The user's question about Naresh Madhur."),
  resumeSummary: z.string().optional().describe("A concise overview of Naresh Madhur's professional background."),
  keySkills: z.array(z.string()).optional().describe("A list of Naresh Madhur's key skills."),
  experienceHighlights: z.array(z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    details: z.string()
  })).optional().describe("Highlights of Naresh Madhur's professional experience."),
  educationHighlights: z.array(z.object({
    degree: z.string(),
    institution: z.string(),
    period: z.string().optional(),
    details: z.string()
  })).optional().describe("Highlights of Naresh Madhur's education."),
  githubUsername: z.string().optional().describe("Naresh Madhur's GitHub username."),
  githubPublicHighlights: z.array(z.object({
    name: z.string(),
    description: z.string(),
    keyTechnologies: z.array(z.string()),
    repoUrl: z.string().url().optional()
  })).optional().describe("Summaries of key public GitHub repositories."),
  githubPrivateHighlights: z.array(z.object({
    name: z.string(),
    purpose: z.string(),
    myRole: z.string(),
    keyFeatures: z.array(z.string()),
    technologiesUsed: z.array(z.string()),
    learningsAndImpact: z.string()
  })).optional().describe("Summaries of key private GitHub projects (simulated knowledge).")
});

// --- Genkit Prompt Definition ---
const askNareshAIPrompt = ai.definePrompt({
  name: 'askNareshAIPrompt',
  input: { schema: AskNareshAIPromptInputSchema }, // Uses the internal detailed schema
  output: { schema: AskNareshAIOutputSchema },    // Standard output schema
  prompt: `You are a helpful and professional AI assistant for Naresh Madhur (GitHub: {{{githubUsername}}}).
Your knowledge base consists of the following summarized information from Naresh Madhur's resume and GitHub profile.

CONTEXT ABOUT NARESH MADHUR:
--- Resume Information ---
Overall Summary:
{{{resumeSummary}}}

Key Skills:
{{#if keySkills}}
{{#each keySkills}}
- {{{this}}}
{{/each}}
{{else}}
(No specific key skills provided in summary)
{{/if}}

Experience Highlights:
{{#if experienceHighlights}}
{{#each experienceHighlights}}
- Role: {{{role}}}
  Company: {{{company}}}
  Period: {{{period}}}
  Details: {{{details}}}
{{/each}}
{{else}}
(No specific experience highlights provided)
{{/if}}

Education Highlights:
{{#if educationHighlights}}
{{#each educationHighlights}}
- Degree: {{{degree}}}
  Institution: {{{institution}}}
  {{#if period}}Period: {{{period}}}{{/if}}
  Details: {{{details}}}
{{/each}}
{{else}}
(No specific education highlights provided)
{{/if}}

--- GitHub Profile Information (GitHub username: {{{githubUsername}}}) ---
Key Public Repository Highlights:
{{#if githubPublicHighlights}}
{{#each githubPublicHighlights}}
- Project Name: {{{name}}}
  Description: {{{description}}}
  Key Technologies: {{#each keyTechnologies}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  {{#if repoUrl}}Repo URL: {{{repoUrl}}}{{/if}}
{{/each}}
{{else}}
(No specific public GitHub project highlights provided)
{{/if}}

Key Private Project Summaries (Simulated Knowledge - you are aware of these based on Naresh's summary):
{{#if githubPrivateHighlights}}
{{#each githubPrivateHighlights}}
- Project Name: {{{name}}}
  Purpose: {{{purpose}}}
  Naresh's Role: {{{myRole}}}
  Key Features:
  {{#each keyFeatures}}
  - {{{this}}}
  {{/each}}
  Technologies Used: {{#each technologiesUsed}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Learnings/Impact: {{{learningsAndImpact}}}
{{/each}}
{{else}}
(No specific private project summaries provided)
{{/if}}
--- End of Context ---

YOUR TASK:
Answer the user's question based *only* on the information provided above about Naresh Madhur.
- Be concise and relevant.
- If the question is about a topic not covered in the provided information (e.g., personal opinions, information outside his professional/technical profile as described), politely state that the information is not available in your current knowledge base for Naresh.
- Do not invent information or answer questions that require accessing external websites or real-time data.
- If asked about skills or experience, refer to the "Key Skills" and "Experience Highlights" sections.
- If asked about projects, refer to the "GitHub Profile Information" (both public and private summaries).

User's question: {{{question}}}

Provide your answer in the "answer" field.
`,
  model: 'googleai/gemini-1.5-flash-latest',
  config: {
    temperature: 0.3, // Lower temperature for more factual, less speculative answers
    safetySettings: [
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  }
});

// --- Genkit Flow Definition ---
const askNareshAIGenkitFlow = ai.defineFlow(
  {
    name: 'askNareshAIGenkitFlow',
    inputSchema: AskNareshAIFlowInputSchema, // Takes the user's question
    outputSchema: AskNareshAIOutputSchema, // Returns the AI's answer
  },
  async (input) => {
    try {
      // Construct the detailed input for the prompt using aiKnowledgeBase
      const promptInput = {
        question: input.question,
        resumeSummary: aiKnowledgeBase.resume.summary,
        keySkills: aiKnowledgeBase.resume.keySkills,
        experienceHighlights: aiKnowledgeBase.resume.experienceHighlights,
        educationHighlights: aiKnowledgeBase.resume.educationHighlights,
        githubUsername: aiKnowledgeBase.githubProfile.username,
        githubPublicHighlights: aiKnowledgeBase.githubProfile.publicRepoHighlights,
        githubPrivateHighlights: aiKnowledgeBase.githubProfile.privateProjectSummaries,
      };

      const { output } = await askNareshAIPrompt(promptInput);

      if (!output || !output.answer || output.answer.trim() === "") {
        console.warn("Ask Naresh AI Flow: Model returned empty or whitespace answer for question:", input.question);
        throw new Error(siteContent.biAiPage.askMeAnything.errorMessages.noModelOutput);
      }
      return output;
    } catch (flowError: any) {
      console.error("Ask Naresh AI Flow execution error - Question:", input.question);
      console.error("Ask Naresh AI Flow execution error - Message:", flowError.message);
      console.error("Ask Naresh AI Flow execution error - Stack:", flowError.stack);
      
      let errorMessage = siteContent.biAiPage.askMeAnything.errorMessages.generalError;
      if (flowError.message && Object.values(siteContent.biAiPage.askMeAnything.errorMessages).includes(flowError.message)) {
        errorMessage = flowError.message;
      } else if (flowError.message) {
        // Append the original error message if it's not one of our predefined ones, for more specific client-side errors if needed.
        // However, for security and user experience, usually better to show generic.
        // For now, stick to generic unless it's a known specific one.
      }
      throw new Error(errorMessage);
    }
  }
);

/**
 * Exported function to be called from the client.
 * @param {AskNareshAIInput} input - The user's question.
 * @returns {Promise<AskNareshAIOutput>} The AI's answer.
 */
export async function askNareshAI(input: AskNareshAIInput): Promise<AskNareshAIOutput> {
  return askNareshAIGenkitFlow(input);
}
