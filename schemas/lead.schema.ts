import { z } from "zod";

export const leadSchema = z.object({
  id: z.string().optional(),
  customerId: z.string().min(1, "Customer is required"),
  marketingId: z.string().min(1, "Marketing is required"),
  projectId: z.string().min(1, "Project is required"),
  productTypeId: z.string().min(1, "Product Type is required"),
  unitId: z.string().optional().nullable(),
  source: z.enum([
    "WALK_IN",
    "REFERRAL",
    "FACEBOOK",
    "INSTAGRAM",
    "TIKTOK",
    "WHATSAPP",
    "ADVERTISEMENT",
    "WEBSITE",
    "MARKETING",
    "OTHER"
  ]),
  nextFollowUpAt: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
});

export type LeadInput = z.infer<typeof leadSchema>;
