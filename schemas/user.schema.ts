import { z } from "zod";

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Nama wajib diisi"),
  username: z.string().min(1, "Username wajib diisi"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().optional().nullable(),
  password: z.string().optional().nullable(), // password only required for new user
  role: z.enum(["ADMIN", "MARKETING", "DIGITAL_MARKETING", "FIELD_SUPERVISOR", "MANAGER", "DIRECTOR"]),
  isActive: z.boolean(),
});

export type UserInput = z.input<typeof userSchema>;
