"use server"

import { prisma } from "@/lib/prisma"

export async function getAuditLogs() {
    try {
        const rawLogs = await prisma.auditLog.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include: {
                user: true
            },
            take: 100 // Limit to recent 100 for performance
        })

        // Format to match UI expectations
        const formattedLogs = rawLogs.map(log => {
            // Synthesize a description based on action and entity
            let description = ""
            if (log.action === "CREATE") description = `Membuat data ${log.entity} baru`
            else if (log.action === "UPDATE") description = `Memperbarui data ${log.entity}`
            else if (log.action === "DELETE") description = `Menghapus data ${log.entity}`
            else description = `Melakukan ${log.action} pada ${log.entity}`

            return {
                id: log.id,
                // Format: 26 Sep 2026 - 09:42:10
                timestamp: log.createdAt.toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                }) + ' - ' + log.createdAt.toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }),
                user: log.user.name || "Unknown User",
                role: log.user.role || "Unknown",
                action: log.action,
                module: log.entity,
                target: `${log.entity} #${log.entityId.substring(0, 8)}`,
                description,
                result: "SUCCESS", // AuditLog only records successful actions currently
                ipAddress: "Unknown", // Not tracked in DB
                userAgent: "Unknown", // Not tracked in DB
            }
        })

        return formattedLogs
    } catch (error) {
        console.error("Failed to fetch audit logs:", error)
        return []
    }
}
