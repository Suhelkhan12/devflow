import * as z from "zod";

export const QuestionFromSchema = z.object({
    title: z
      .string()
      .min(5, {
        message: "Title should have atleast 3 characters.",
      })
      .max(130, {
        message: "Title too big.",
      }),
      explaination: z.string().min(100,{
        message:'Very short explaination!'
      }),
      tags: z.array(z.string().min(1).max(15)).min(1).max(3)
  });

export type QuestionFromSchemaType = z.infer<typeof QuestionFromSchema>;