"use server";

import { prisma } from "@/lib/prisma";
import { ActivityType } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

export async function getActivities() {
    try {
        const activities = await prisma.activity.findMany({
            include: {
                lead: {
                    include: {
                        customer: true,
                        unit: true,
                    }
                },
                createdBy: true,
            },
            orderBy: {
                createdAt: 'desc',
            }
        });
        
        return activities.map(activity => ({
            id: activity.id,
            leadId: activity.leadId,
            customerName: activity.lead.customer.name,
            phone: activity.lead.customer.phone || "-",
            unitCode: activity.lead.unit?.code || null,
            type: activity.type,
            description: activity.description,
            createdAt: activity.createdAt.toISOString(),
            userName: activity.createdBy.name,
        }));
    } catch (error: unknown) {
        console.error("Error fetching activities:", error);
        return [];
    }
}

export async function saveActivity(data: {
    leadId: string;
    createdById: string;
    type: string;
    description: string;
    updateLead?: {
        status?: string;
        stage?: string;
        nextFollowUpAt?: string | null;
    }
}) {
    try {
        // Create the activity
        const activity = await prisma.activity.create({
            data: {
                leadId: data.leadId,
                createdById: data.createdById,
                type: data.type as ActivityType,
                activityDate: new Date(),
                description: data.description,
            }
        });

        // Update the lead if requested
        if (data.updateLead) {
            const updateData: Record<string, unknown> = {};
            if (data.updateLead.status) updateData.status = data.updateLead.status;
            if (data.updateLead.stage) updateData.stage = data.updateLead.stage;
            if (data.updateLead.nextFollowUpAt !== undefined) {
                updateData.nextFollowUpAt = data.updateLead.nextFollowUpAt ? new Date(data.updateLead.nextFollowUpAt) : null;
            }

            if (Object.keys(updateData).length > 0) {
                await prisma.lead.update({
                    where: { id: data.leadId },
                    data: updateData,
                });
            }
        }

        revalidatePath(`/leads/${data.leadId}`);
        revalidatePath("/activities");

        return { success: true, activity };
    } catch (error: unknown) {
        console.error("Error saving activity:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}
