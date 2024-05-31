import { z } from "zod";

export const submissionDtoZodSchema = z.object({
    userId: z.string(),
    problemId: z.string(),
    code: z.string(),
    language: z.string(),
});

export type submissionDto = z.infer<typeof submissionDtoZodSchema>;