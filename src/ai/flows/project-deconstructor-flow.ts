
'use server';
/**
 * @fileOverview An AI agent that deconstructs AI project ideas.
 *
 * - deconstructProjectIdea - A function that handles project deconstruction.
 * - ProjectDeconstructorInput - The input type for the flow.
 * - ProjectDeconstructorOutput - The return type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { siteContent } from '@/lib/constants';

const ProjectDeconstructorInputSchema = z.object({
  description: z.string().min(10, { message: "Project description must be at least 10 characters." })
    .describe('A description of an AI project idea or a problem the user wants to solve.'),
});
export type ProjectDeconstructorInput = z.infer<typeof ProjectDeconstructorInputSchema>;

const ProjectDeconstructorOutputSchema = z.object({
  suggestedTitle: z.string().describe('A suggested title for this potential project.'),
  projectApproach: z.string().describe('A brief (1-2 sentences) outline of the general strategy to tackle the project.'),
  keyTechniques: z.array(z.string()).describe('A list of 3-4 key AI techniques or model types relevant to the project (e.g., "Natural Language Processing", "Convolutional Neural Network").'),
  suggestedTechStack: z.array(z.string()).describe('A list of 3-5 common tools, libraries, or platforms (e.g., "Python", "PyTorch", "Pandas", "AWS SageMaker").'),
  potentialChallenges: z.array(z.string()).describe('A list of 1-2 potential challenges the user might encounter during the project.'),
});
export type ProjectDeconstructorOutput = z.infer<typeof ProjectDeconstructorOutputSchema>;

export async function deconstructProjectIdea(input: ProjectDeconstructorInput): Promise<ProjectDeconstructorOutput> {
  return projectDeconstructorGenkitFlow(input);
}

const projectDeconstructorPrompt = ai.definePrompt({
  name: 'projectDeconstructorPrompt',
  input: { schema: ProjectDeconstructorInputSchema },
  output: { schema: ProjectDeconstructorOutputSchema },
  prompt: `You are an experienced AI Solutions Architect and Project Planner. Your goal is to help users conceptualize AI projects by providing a high-level deconstruction.
User's project idea or problem: {{{description}}}

Based on the user's input, generate the following:
1. A "suggestedTitle" for this potential project.
2. A brief "projectApproach" (1-2 sentences on the general strategy).
3. List 3-4 "keyTechniques" or AI model types (as an array of strings) that would be relevant (e.g., "Natural Language Processing", "Convolutional Neural Network", "Anomaly Detection", "Reinforcement Learning").
4. Suggest a "suggestedTechStack" (as an array of strings) of 3-5 common tools/libraries/platforms (e.g., "Python", "PyTorch", "Pandas", "Scikit-learn", "AWS SageMaker", "Google AI Platform", "Docker").
5. Mention 1-2 "potentialChallenges" (as an array of strings) the user might encounter (e.g., "Data acquisition and cleaning", "Model interpretability", "Scalability issues").

Ensure your output strictly adheres to the requested JSON schema. Be practical, concise, and clear.`,
  model: 'googleai/gemini-1.5-flash-latest',
  config: { temperature: 0.5 }
});

const projectDeconstructorGenkitFlow = ai.defineFlow(
  {
    name: 'projectDeconstructorGenkitFlow',
    inputSchema: ProjectDeconstructorInputSchema,
    outputSchema: ProjectDeconstructorOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await projectDeconstructorPrompt(input);
      if (!output) {
        throw new Error(siteContent.biAiPage.projectDeconstructor.errorMessages.generalError);
      }
      return output;
    } catch (flowError: any) {
      console.error("Project Deconstructor Flow execution error:", flowError.message, flowError.stack);
      throw new Error(siteContent.biAiPage.projectDeconstructor.errorMessages.generalError);
    }
  }
);

    