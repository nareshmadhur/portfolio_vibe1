
// src/ai/genkit.ts
'use server';
import {genkit, type Plugin} from 'genkit';
// import {googleAI} from '@genkit-ai/googleai'; // Temporarily comment out Google AI plugin

// It's good practice to ensure the API key is available.
const googleApiKey = process.env.GOOGLE_API_KEY;

const plugins: Plugin<any>[] = [];
// Temporarily disable Google AI plugin integration for debugging
// if (googleApiKey) {
//   plugins.push(googleAI({apiKey: googleApiKey}));
// } else {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'GOOGLE_API_KEY is not set in .env.local. AI features using Google AI will not work. (Google AI plugin is also temporarily disabled for debugging this eval error).'
    );
  } else {
    // In production, you might want to throw an error or ensure this is handled.
    console.warn(
      'GOOGLE_API_KEY is not set. AI features using Google AI will be unavailable. (Google AI plugin is also temporarily disabled for debugging this eval error).'
    );
  }
// }

export const ai = genkit({
  plugins: plugins, // Will be an empty array for now
  // According to v1.x guidelines, logLevel is not set here directly.
  // Tracing and telemetry can be configured if needed for debugging.
  enableTracing: process.env.NODE_ENV === 'development', // Enable tracing in development
  telemetry: {
    instrumentation: false, // Disable OpenTelemetry for simplicity in this example
    logger: false,          // Disable default Genkit logger for simplicity
  },
});
