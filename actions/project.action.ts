"use server";

import { prisma } from "@/lib/prisma";
import { projectSchema, blockSchema } from "@/schemas/project.schema";
import { revalidatePath } from "next/cache";

export async function getProjects(searchQuery: string = "") {
    try {
        const projects = await prisma.project.findMany({
            where: {
                OR: [
                    { name: { contains: searchQuery } },
                    { address: { contains: searchQuery } },
                    { code: { contains: searchQuery } },
                ],
            },
            orderBy: { createdAt: "desc" },
            include: {
                blocks: {
                    include: {
                        units: true,
                    },
                },
            },
        });

        return projects.map((project) => ({
            ...project,
            blocks: project.blocks.map((block) => ({
                ...block,
                units: block.units.map((unit) => ({
                    ...unit,
                    price: unit.price?.toString() || null,
                })),
            })),
        }));
    } catch (error: unknown) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

export async function getProjectById(id: string) {
    try {
        return await prisma.project.findUnique({
            where: { id },
            include: {
                blocks: {
                    include: {
                        units: true
                    },
                    orderBy: { sortOrder: "asc" }
                },
                leads: true
            }
        });
    } catch (error: unknown) {
        console.error("Error fetching project by id:", error);
        return null;
    }
}

export async function getProjectUnits(projectId: string) {
    try {
        return await prisma.unit.findMany({
            where: { block: { projectId } },
            include: {
                block: true,
                productType: {
                    include: {
                        category: true
                    }
                }
            },
            orderBy: [{ block: { name: "asc" } }, { number: "asc" }]
        });
    } catch (error: unknown) {
        console.error("Error fetching project units:", error);
        return [];
    }
}

export async function saveProject(data: unknown) {
    try {
        const parsed = projectSchema.parse(data);

        if (parsed.id) {
            await prisma.project.update({
                where: { id: parsed.id },
                data: {
                    name: parsed.name,
                    code: parsed.code,
                    address: parsed.address,
                    description: parsed.description,
                    isActive: parsed.isActive
                }
            });
        } else {
            await prisma.project.create({
                data: {
                    name: parsed.name,
                    code: parsed.code,
                    address: parsed.address,
                    description: parsed.description,
                    isActive: parsed.isActive
                }
            });
        }

        revalidatePath("/projects");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

export async function saveBlock(data: unknown) {
    try {
        const parsed = blockSchema.parse(data);

        if (parsed.id) {
            await prisma.block.update({
                where: { id: parsed.id },
                data: {
                    name: parsed.name,
                    code: parsed.code,
                }
            });
        } else {
            // Calculate sort order
            const lastBlock = await prisma.block.findFirst({
                where: { projectId: parsed.projectId },
                orderBy: { sortOrder: 'desc' }
            });
            const newSortOrder = lastBlock ? lastBlock.sortOrder + 1 : 0;

            await prisma.block.create({
                data: {
                    projectId: parsed.projectId,
                    name: parsed.name,
                    code: parsed.code,
                    sortOrder: newSortOrder
                }
            });
        }

        revalidatePath(`/projects/${parsed.projectId}`);
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

export async function deleteProject(id: string) {
    try {
        await prisma.project.delete({
            where: { id }
        });
        revalidatePath("/projects");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}
