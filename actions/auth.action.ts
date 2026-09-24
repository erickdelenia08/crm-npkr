"use server";

import { signIn } from "@/auth";
import { loginSchema } from "@/schemas/auth.schema";
import { AuthError } from "next-auth";

export async function loginAction(formData: unknown) {
    try {
        const parsed = loginSchema.parse(formData);

        await signIn("credentials", {
            username: parsed.username,
            password: parsed.password,
            redirectTo: "/",
        });

        return { success: true };
    } catch (error: unknown) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { success: false, error: "Email atau password salah." };
                default:
                    return { success: false, error: "Terjadi kesalahan sistem saat login." };
            }
        }

        // Next.js redirect throws an error, so we need to let it bubble up
        // or check if it's a redirect error. NextAuth `signIn` handles redirect inside.
        if (typeof error === 'object' && error !== null && 'digest' in error) {
            throw error;
        }

        // Return generic error message for safety
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}
