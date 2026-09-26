import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1, "Nama lengkap harus diisi"),
  username: z.string().min(1, "Username harus diisi"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().optional().nullable(),
});

export type ProfileInput = z.input<typeof profileSchema>;

export const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Kata sandi saat ini harus diisi"),
  newPassword: z.string().min(6, "Kata sandi baru minimal 6 karakter"),
  confirmPassword: z.string().min(1, "Konfirmasi kata sandi harus diisi"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Konfirmasi kata sandi baru tidak cocok",
  path: ["confirmPassword"],
});

export type PasswordInput = z.input<typeof passwordSchema>;
