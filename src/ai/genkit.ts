// src/ai/genkit.ts
import {genkit, type Plugin} from 'genkit';
// import {googleAI} from '@genkit-ai/googleai'; // Google AI plugin remains commented out for now

// All process.env checks and related console.warn calls have been removed.

const plugins: Plugin<any>[] = []; // Initialize an empty plugins array

export const ai = genkit({
  plugins: plugins, // Pass the empty array. Will be [] as the Google AI plugin is not pushed.
  // All other configurations (tracing, telemetry, logLevel) are absent as per previous debugging steps and v1.x guidelines for basic init.
});
