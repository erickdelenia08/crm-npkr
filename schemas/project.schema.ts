import { z } from "zod";

export const projectSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  code: z.string().min(1, "Code is required"),
  address: z.string().optional(),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type ProjectInput = z.infer<typeof projectSchema>;

export const blockSchema = z.object({
  id: z.string().optional(),
  projectId: z.string().min(1, "Project ID is required"),
  name: z.string().min(1, "Name is required"),
  code: z.string().min(1, "Code is required"),
});

export type BlockInput = z.infer<typeof blockSchema>;
