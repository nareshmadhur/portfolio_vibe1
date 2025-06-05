// src/ai/genkit.ts
import {genkit, type Plugin} from 'genkit';
import {googleAI} from '@genkit-ai/googleai'; // Ensure this is imported

// All process.env checks and related console.warn calls have been removed.
// The 'use server'; directive was removed in a previous step as this file is a utility, not an action module.

export const ai = genkit({
  plugins: [googleAI()], // Use the googleAI plugin as per standard Genkit v1.x initialization
  // All other configurations (tracing, telemetry, logLevel) are absent as per previous debugging steps and v1.x guidelines for basic init.
});
