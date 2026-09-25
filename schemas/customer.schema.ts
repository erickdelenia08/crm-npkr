import { z } from "zod";

export const customerSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional().nullable(),
  email: z.string().email("Invalid email format").optional().nullable().or(z.literal("")),
  address: z.string().optional().nullable(),
});

export type CustomerInput = z.infer<typeof customerSchema>;
