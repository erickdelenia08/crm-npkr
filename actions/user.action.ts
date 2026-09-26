"use server";

import { prisma } from "@/lib/prisma";
import { userSchema } from "@/schemas/user.schema";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { Role, Prisma } from "@/generated/prisma";

export async function getUsers() {
    const session = await auth();
    if (!session || (session.user.role !== "ADMIN" && session.user.role !== "MANAGER")) {
        throw new Error("Unauthorized");
    }

    return await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            name: true,
            username: true,
            email: true,
            phone: true,
            role: true,
            isActive: true,
            createdAt: true,
        },
    });
}

export async function saveUser(data: unknown) {
    const session = await auth();
    if (!session || (session.user.role !== "ADMIN" && session.user.role !== "MANAGER")) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const parsed = userSchema.parse(data);

        // Check if username or email already exists
        const existing = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: parsed.username },
                    { email: parsed.email }
                ],
                NOT: parsed.id ? { id: parsed.id } : undefined,
            }
        });

        if (existing) {
            if (existing.username === parsed.username) return { success: false, error: "Username sudah digunakan." };
            if (existing.email === parsed.email) return { success: false, error: "Email sudah digunakan." };
        }

        if (parsed.id) {
            // Update
            const updateData: Prisma.UserUpdateInput = {
                name: parsed.name,
                username: parsed.username,
                email: parsed.email,
                phone: parsed.phone,
                role: parsed.role as Role,
                isActive: parsed.isActive,
            };

            if (parsed.password && parsed.password.trim() !== "") {
                updateData.password = await bcrypt.hash(parsed.password, 10);
            }

            await prisma.user.update({
                where: { id: parsed.id },
                data: updateData,
            });
        } else {
            // Create
            if (!parsed.password) {
                return { success: false, error: "Password wajib diisi untuk user baru." };
            }

            const hashedPassword = await bcrypt.hash(parsed.password, 10);

            await prisma.user.create({
                data: {
                    name: parsed.name,
                    username: parsed.username,
                    email: parsed.email,
                    phone: parsed.phone,
                    role: parsed.role as Role,
                    isActive: parsed.isActive,
                    password: hashedPassword,
                },
            });
        }

        revalidatePath("/users");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

export async function deleteUser(id: string) {
    const session = await auth();
    if (!session || session.user.role !== "ADMIN") {
        return { success: false, error: "Unauthorized (Admin only)" };
    }

    try {
        await prisma.user.delete({
            where: { id },
        });

        revalidatePath("/users");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}
