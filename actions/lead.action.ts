"use server";

import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/schemas/lead.schema";
import { revalidatePath } from "next/cache";

export async function getLeads() {
    try {
        const leads = await prisma.lead.findMany({
            include: {
                customer: true,
                marketing: true,
                unit: true,
                project: true,
                productType: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        })

        return leads.map((lead) => ({
            ...lead,
            unit: lead.unit
                ? {
                    ...lead.unit,
                    price: lead.unit.price?.toString() ?? null,
                }
                : null,
        }))
    } catch (error: unknown) {
        console.error("Error fetching leads:", error)
        return []
    }
}

export async function getLeadById(id: string) {
    try {
        const lead = await prisma.lead.findUnique({
            where: { id },
            include: {
                customer: true,
                marketing: true,
                project: true,
                productType: {
                    include: {
                        category: true,
                    },
                },
                unit: true,
                activities: {
                    orderBy: {
                        createdAt: "desc",
                    },
                },
            },
        })

        if (!lead) {
            return null
        }

        return {
            ...lead,
            unit: lead.unit
                ? {
                    ...lead.unit,
                    price: lead.unit.price?.toString() ?? null,
                }
                : null,
        }
    } catch (error: unknown) {
        console.error("Error fetching lead by id:", error)
        return null
    }
}
export async function saveLead(data: unknown) {
    try {
        const parsed = leadSchema.parse(data);

        let nextFollowUpDate = null;
        if (parsed.nextFollowUpAt) {
            nextFollowUpDate = new Date(parsed.nextFollowUpAt);
        }

        if (parsed.id) {
            await prisma.lead.update({
                where: { id: parsed.id },
                data: {
                    customerId: parsed.customerId,
                    marketingId: parsed.marketingId,
                    projectId: parsed.projectId,
                    productTypeId: parsed.productTypeId,
                    unitId: parsed.unitId || null,
                    source: parsed.source,
                    nextFollowUpAt: nextFollowUpDate,
                    notes: parsed.notes,
                }
            });
        } else {
            await prisma.lead.create({
                data: {
                    customerId: parsed.customerId,
                    marketingId: parsed.marketingId,
                    projectId: parsed.projectId,
                    productTypeId: parsed.productTypeId,
                    unitId: parsed.unitId || null,
                    source: parsed.source,
                    status: "NEW",
                    stage: "INQUIRY",
                    nextFollowUpAt: nextFollowUpDate,
                    notes: parsed.notes,
                }
            });
        }

        revalidatePath("/leads");
        revalidatePath(`/customers/${parsed.customerId}`);
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}

export async function getLeadFormDependencies() {
    try {
        const [customers, projects, productTypes, units, users] = await Promise.all([
            prisma.customer.findMany({
                select: {
                    id: true,
                    name: true,
                    phone: true,
                },
                orderBy: { name: "asc" },
            }),

            prisma.project.findMany({
                select: {
                    id: true,
                    name: true,
                },
                orderBy: { name: "asc" },
            }),

            prisma.productType.findMany({
                select: {
                    id: true,
                    name: true,
                    categoryId: true,
                    category: {
                        select: {
                            name: true,
                        },
                    },
                },
                orderBy: { name: "asc" },
            }),

            prisma.unit.findMany({
                select: {
                    id: true,
                    code: true,
                    price: true,
                    block: {
                        select: {
                            projectId: true,
                        },
                    },
                    productTypeId: true,
                    status: true,
                },
                where: {
                    status: "AVAILABLE",
                },
                orderBy: {
                    code: "asc",
                },
            }),

            prisma.user.findMany({
                select: {
                    id: true,
                    name: true,
                },
                where: {
                    isActive: true,
                },
                orderBy: {
                    name: "asc",
                },
            }),
        ]);

        const serializedUnits = units.map((unit) => ({
            ...unit,
            price: unit.price?.toString() ?? null,
        }));

        return {
            customers,
            projects,
            productTypes,
            units: serializedUnits,
            users,
        };
    } catch (error: unknown) {
        console.error("Error fetching lead dependencies:", error);

        return {
            customers: [],
            projects: [],
            productTypes: [],
            units: [],
            users: [],
        };
    }
}
