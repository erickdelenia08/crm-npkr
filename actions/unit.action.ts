"use server";

import { prisma } from "@/lib/prisma";
import { UnitStatus } from "@/generated/prisma";
import { unitSchema, bulkUnitSchema } from "@/schemas/unit.schema";
import { revalidatePath } from "next/cache";

export async function getUnits() {
    try {
        return await prisma.unit.findMany({
            include: {
                block: {
                    include: {
                        project: true
                    }
                },
                productType: {
                    include: {
                        category: true
                    }
                }
            },
            orderBy: { createdAt: "desc" },
        });
    } catch (error: unknown) {
        console.error("Error fetching units:", error);
        return [];
    }
}
export async function getUnitById(id: string) {
    try {
        return await prisma.unit.findUnique({
            where: { id },
            include: {
                block: {
                    include: {
                        project: true
                    }
                },
                productType: {
                    include: {
                        category: true
                    }
                }
            }
        });
    } catch (error: unknown) {
        console.error("Error fetching unit:", error);
        return null;
    }
}

export async function getProjectsWithBlocks() {
    try {
        return await prisma.project.findMany({
            where: { isActive: true },
            include: {
                blocks: {
                    orderBy: { sortOrder: "asc" }
                }
            },
            orderBy: { name: "asc" }
        });
    } catch (error: unknown) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

export async function getProductCategoriesWithTypes() {
    try {
        return await prisma.productCategory.findMany({
            where: { isActive: true },
            include: {
                productTypes: {
                    where: { isActive: true },
                    orderBy: { name: "asc" }
                }
            },
            orderBy: { name: "asc" }
        });
    } catch (error: unknown) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

export async function saveUnit(data: unknown) {
    try {
        const parsed = unitSchema.parse(data);
        
        const payload = {
            blockId: parsed.blockId,
            productTypeId: parsed.productTypeId,
            number: parsed.number,
            code: parsed.code,
            landArea: parsed.landArea || null,
            buildingArea: parsed.buildingArea || null,
            price: parsed.price || null,
            status: parsed.status,
            constructionStatus: parsed.constructionStatus,
            facing: parsed.facing || null,
            description: parsed.description || null,
        };

        if (parsed.id) {
            await prisma.unit.update({
                where: { id: parsed.id },
                data: payload,
            });
        } else {
            await prisma.unit.create({
                data: payload,
            });
        }
        
        revalidatePath("/units");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

export async function bulkCreateUnits(data: unknown) {
    try {
        const parsed = bulkUnitSchema.parse(data);
        
        const productType = await prisma.productType.findUnique({
            where: { id: parsed.productTypeId }
        });

        if (!productType) {
            throw new Error("Product type not found");
        }

        const price = parsed.priceMode === "CUSTOM" 
            ? parsed.customPrice 
            : (productType.basePrice ? Number(productType.basePrice) : null);

        const start = parsed.startNumber;
        const end = parsed.endNumber;
        const total = end - start + 1;
        
        if (total > 500) {
            throw new Error("Maximum 500 units per bulk create");
        }

        const width = Math.max(String(start).length, String(end).length, 2);
        
        const unitsToCreate = Array.from({ length: total }, (_, index) => {
            const numberVal = start + index;
            const numberStr = String(numberVal).padStart(width, "0");
            const code = `${parsed.prefix.trim()}${numberStr}`;
            
            return {
                blockId: parsed.blockId,
                productTypeId: parsed.productTypeId,
                number: numberStr,
                code: code,
                landArea: productType.landArea || null,
                buildingArea: productType.buildingArea || null,
                price: price,
                status: parsed.status,
                constructionStatus: parsed.constructionStatus,
            };
        });

        await prisma.unit.createMany({
            data: unitsToCreate,
            skipDuplicates: true
        });
        
        revalidatePath("/units");
        return { success: true, count: unitsToCreate.length };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

export async function updateUnitStatus(id: string, status: string) {
    try {
        await prisma.unit.update({
            where: { id },
            data: { status: status as UnitStatus } // Safe cast, schema validated by TS earlier
        });
        revalidatePath("/units");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}
