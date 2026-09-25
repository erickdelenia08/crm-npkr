"use server";

import { prisma } from "@/lib/prisma";
import { customerSchema } from "@/schemas/customer.schema";
import { revalidatePath } from "next/cache";

export async function getCustomers() {
    try {
        const customers = await prisma.customer.findMany({
            include: {
                leads: {
                    include: {
                        marketing: true,
                        productType: true,
                    },
                    orderBy: { createdAt: 'desc' }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        return customers;
    } catch (error: unknown) {
        console.error("Error fetching customers:", error);
        return [];
    }
}

export async function getCustomerById(id: string) {
    try {
        return await prisma.customer.findUnique({
            where: { id },
            include: {
                leads: {
                    include: {
                        project: true,
                        productType: {
                            include: {
                                category: true
                            }
                        },
                        unit: true,
                        marketing: true
                    },
                    orderBy: { createdAt: 'desc' }
                }
            }
        });
    } catch (error: unknown) {
        console.error("Error fetching customer by id:", error);
        return null;
    }
}

export async function saveCustomer(data: unknown) {
    try {
        const parsed = customerSchema.parse(data);
        
        const email = parsed.email === "" ? null : parsed.email;
        const phone = parsed.phone === "" ? null : parsed.phone;
        const address = parsed.address === "" ? null : parsed.address;

        if (parsed.id) {
            await prisma.customer.update({
                where: { id: parsed.id },
                data: {
                    name: parsed.name,
                    phone: phone,
                    email: email,
                    address: address,
                }
            });
        } else {
            await prisma.customer.create({
                data: {
                    name: parsed.name,
                    phone: phone,
                    email: email,
                    address: address,
                }
            });
        }
        
        revalidatePath("/customers");
        return { success: true };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}
