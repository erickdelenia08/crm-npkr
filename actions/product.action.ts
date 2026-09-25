"use server";

import { prisma } from "@/lib/prisma";
import { productCategorySchema, productTypeSchema } from "@/schemas/product.schema";
import { revalidatePath } from "next/cache";

// ==========================================
// CATEGORIES
// ==========================================

export async function getCategories() {
    try {
        return await prisma.productCategory.findMany({
            orderBy: { createdAt: "desc" },
        });
    } catch (error: unknown) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

export async function saveCategory(data: unknown) {
    try {
        const parsed = productCategorySchema.parse(data);
        
        if (parsed.id) {
            await prisma.productCategory.update({
                where: { id: parsed.id },
                data: {
                    name: parsed.name,
                    code: parsed.code,
                    description: parsed.description || null,
                    isActive: parsed.isActive,
                },
            });
        } else {
            await prisma.productCategory.create({
                data: {
                    name: parsed.name,
                    code: parsed.code,
                    description: parsed.description || null,
                    isActive: parsed.isActive,
                },
            });
        }
        
        revalidatePath("/products");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

export async function deleteCategory(id: string) {
    try {
        await prisma.productCategory.delete({
            where: { id },
        });
        revalidatePath("/products");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

// ==========================================
// PRODUCT TYPES
// ==========================================

export async function getProductTypes() {
    try {
        return await prisma.productType.findMany({
            include: {
                category: true,
            },
            orderBy: { createdAt: "desc" },
        });
    } catch (error: unknown) {
        console.error("Error fetching product types:", error);
        return [];
    }
}

export async function saveProductType(data: unknown) {
    try {
        const parsed = productTypeSchema.parse(data);
        
        const payload = {
            categoryId: parsed.categoryId,
            name: parsed.name,
            code: parsed.code,
            landArea: parsed.landArea || null,
            buildingArea: parsed.buildingArea || null,
            bedrooms: parsed.bedrooms || null,
            bathrooms: parsed.bathrooms || null,
            electricity: parsed.electricity || null,
            waterSource: parsed.waterSource || null,
            wallMaterial: parsed.wallMaterial || null,
            roofMaterial: parsed.roofMaterial || null,
            description: parsed.description || null,
            isActive: parsed.isActive,
        };

        if (parsed.id) {
            await prisma.productType.update({
                where: { id: parsed.id },
                data: payload,
            });
        } else {
            await prisma.productType.create({
                data: payload,
            });
        }
        
        revalidatePath("/products");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

export async function deleteProductType(id: string) {
    try {
        await prisma.productType.delete({
            where: { id },
        });
        revalidatePath("/products");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}
