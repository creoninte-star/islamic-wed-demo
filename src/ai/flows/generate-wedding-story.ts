'use server';
/**
 * @fileOverview A Genkit flow to generate elegant, romantic placeholder text for the 'Our Story' section of a Muslim wedding website.
 *
 * - generateWeddingStory - A function that generates the wedding story.
 * - GenerateWeddingStoryInput - The input type for the generateWeddingStory function.
 * - GenerateWeddingStoryOutput - The return type for the generateWeddingStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWeddingStoryInputSchema = z
  .object({
    coupleName1: z
      .string()
      .optional()
      .describe('The first name of one of the couple members, e.g., "Aisha".'),
    coupleName2: z
      .string()
      .optional()
      .describe('The first name of the other couple member, e.g., "Zaid".'),
  })
  .describe('Input for generating a romantic wedding story.');
export type GenerateWeddingStoryInput = z.infer<
  typeof GenerateWeddingStoryInputSchema
>;

const GenerateWeddingStoryOutputSchema = z
  .string()
  .describe('The generated romantic wedding story in three paragraphs.');
export type GenerateWeddingStoryOutput = z.infer<
  typeof GenerateWeddingStoryOutputSchema
>;

const prompt = ai.definePrompt({
  name: 'generateWeddingStoryPrompt',
  input: {schema: GenerateWeddingStoryInputSchema},
  output: {schema: GenerateWeddingStoryOutputSchema},
  prompt: `You are an expert romantic storyteller, specializing in crafting elegant and luxurious narratives for premium Muslim wedding invitations. Your task is to generate a three-paragraph story about how a couple met, imbued with a cinematic, intimate, and royal Islamic palace feel, suitable for an editorial magazine.

The story should be fictional and evoke a sense of destiny, warmth, and enduring love.

Use the following names for the couple:
{{#if coupleName1}}{{{coupleName1}}}{{#if coupleName2}} & {{{coupleName2}}}{{/if}}{{else}}Aisha & Zaid{{/if}}

Ensure the language is rich, poetic, and reflects a high-end aesthetic.

Please provide only the three paragraphs of the story, without any introductory or concluding remarks.`,
});

const generateWeddingStoryFlow = ai.defineFlow(
  {
    name: 'generateWeddingStoryFlow',
    inputSchema: GenerateWeddingStoryInputSchema,
    outputSchema: GenerateWeddingStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

export async function generateWeddingStory(
  input: GenerateWeddingStoryInput = {}
): Promise<GenerateWeddingStoryOutput> {
  return generateWeddingStoryFlow(input);
}
