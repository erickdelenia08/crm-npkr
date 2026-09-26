"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { profileSchema, passwordSchema } from "@/schemas/profile.schema";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export async function getCurrentUserProfile() {
    const session = await auth();
    if (!session?.user?.id) {
        return null;
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
            id: true,
            name: true,
            username: true,
            email: true,
            phone: true,
            role: true,
            createdAt: true,
        },
    });

    return user;
}

export async function updateProfile(data: unknown) {
    const session = await auth();
    if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const parsed = profileSchema.parse(data);

        // Check if username/email already exists for other users
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: parsed.username },
                    { email: parsed.email },
                ],
                NOT: { id: session.user.id },
            },
        });

        if (existingUser) {
            if (existingUser.username === parsed.username) {
                return { success: false, error: "Username sudah digunakan." };
            }
            if (existingUser.email === parsed.email) {
                return { success: false, error: "Email sudah digunakan." };
            }
        }

        await prisma.user.update({
            where: { id: session.user.id },
            data: {
                name: parsed.name,
                username: parsed.username,
                email: parsed.email,
                phone: parsed.phone,
            },
        });

        revalidatePath("/profile");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

export async function updatePassword(data: unknown) {
    const session = await auth();
    if (!session?.user?.id) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const parsed = passwordSchema.parse(data);

        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
        });

        if (!user || !user.password) {
            return { success: false, error: "User tidak ditemukan atau menggunakan login provider (Google)." };
        }

        const isPasswordValid = await bcrypt.compare(parsed.currentPassword, user.password);
        if (!isPasswordValid) {
            return { success: false, error: "Kata sandi saat ini salah." };
        }

        const hashedNewPassword = await bcrypt.hash(parsed.newPassword, 10);

        await prisma.user.update({
            where: { id: session.user.id },
            data: { password: hashedNewPassword },
        });

        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}
