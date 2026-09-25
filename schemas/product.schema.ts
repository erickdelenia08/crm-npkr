import { z } from "zod";

export const productCategorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  code: z.string().min(1, "Code is required"),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type ProductCategoryInput = z.infer<typeof productCategorySchema>;

export const productTypeSchema = z.object({
  id: z.string().optional(),
  categoryId: z.string().min(1, "Category is required"),
  name: z.string().min(1, "Name is required"),
  code: z.string().min(1, "Code is required"),
  landArea: z.coerce.number().optional().nullable(),
  buildingArea: z.coerce.number().optional().nullable(),
  bedrooms: z.coerce.number().optional().nullable(),
  bathrooms: z.coerce.number().optional().nullable(),
  electricity: z.string().optional().nullable(),
  waterSource: z.string().optional().nullable(),
  wallMaterial: z.string().optional().nullable(),
  roofMaterial: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().default(true),
});

export type ProductTypeInput = z.infer<typeof productTypeSchema>;
