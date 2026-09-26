"use server"

import { prisma } from "@/lib/prisma"

export async function getDashboardHubReport() {
    const now = new Date()
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    try {
        const totalLeads = await prisma.lead.count({
            where: { createdAt: { gte: firstDayOfMonth } },
        })

        const totalActivities = await prisma.activity.count({
            where: { createdAt: { gte: firstDayOfMonth } },
        })

        const totalClosed = await prisma.lead.count({
            where: {
                status: "CLOSED",
                updatedAt: { gte: firstDayOfMonth },
            },
        })

        return {
            totalLeads,
            totalActivities,
            totalClosed,
        }
    } catch (error) {
        console.error("Failed to fetch dashboard hub report:", error)
        return { totalLeads: 0, totalActivities: 0, totalClosed: 0 }
    }
}

export async function getDailyReport(dateStr?: string) {
    // If no date provided, use today
    const targetDate = dateStr ? new Date(dateStr) : new Date()
    
    // Set to beginning and end of the target day
    const startOfDay = new Date(targetDate)
    startOfDay.setHours(0, 0, 0, 0)
    
    const endOfDay = new Date(targetDate)
    endOfDay.setHours(23, 59, 59, 999)

    try {
        const newLeads = await prisma.lead.count({
            where: {
                createdAt: { gte: startOfDay, lte: endOfDay }
            }
        })

        const totalActivities = await prisma.activity.count({
            where: {
                createdAt: { gte: startOfDay, lte: endOfDay }
            }
        })

        const siteVisits = await prisma.activity.count({
            where: {
                type: "VISIT",
                createdAt: { gte: startOfDay, lte: endOfDay }
            }
        })

        // For bookings, we can count leads that changed status to BOOKED today, or activities with type BOOKING/PAYMENT. Let's just use activities with type PAYMENT or something for booking if there's no BOOKING activity type. Wait, the schema has ReservationType.BOOKING. Or Lead.status = BOOKED.
        const bookings = await prisma.unitReservation.count({
            where: {
                type: "BOOKING",
                createdAt: { gte: startOfDay, lte: endOfDay }
            }
        })

        const closed = await prisma.lead.count({
            where: {
                status: "CLOSED",
                updatedAt: { gte: startOfDay, lte: endOfDay }
            }
        })

        const dailyActivitiesRaw = await prisma.activity.findMany({
            where: {
                createdAt: { gte: startOfDay, lte: endOfDay }
            },
            include: {
                createdBy: true,
                lead: {
                    include: {
                        customer: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        const dailyActivities = dailyActivitiesRaw.map(act => {
            const time = act.createdAt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            return {
                id: act.id,
                time,
                type: act.type as string,
                title: `${act.type} - ${act.lead.customer.name}`,
                description: act.description,
                user: act.createdBy.name
            }
        })

        return {
            summary: {
                newLeads,
                totalActivities,
                siteVisits,
                bookings,
                closed,
            },
            dailyActivities
        }
    } catch (error) {
        console.error("Failed to fetch daily report:", error)
        return {
            summary: { newLeads: 0, totalActivities: 0, siteVisits: 0, bookings: 0, closed: 0 },
            dailyActivities: []
        }
    }
}

export async function getMarketingReport(periodStr?: string) {
    // periodStr could be "September 2026"
    // We will parse it to find start and end of month. If not provided, use current month.
    let startDate = new Date()
    startDate.setHours(0, 0, 0, 0)
    startDate.setDate(1) // first day of current month

    let endDate = new Date(startDate)
    endDate.setMonth(endDate.getMonth() + 1) // first day of next month

    if (periodStr) {
        const [monthName, yearStr] = periodStr.split(" ")
        const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        const monthIndex = monthNames.indexOf(monthName)
        if (monthIndex !== -1 && yearStr) {
            startDate = new Date(parseInt(yearStr), monthIndex, 1)
            endDate = new Date(parseInt(yearStr), monthIndex + 1, 1)
        }
    }

    try {
        const users = await prisma.user.findMany({
            where: { role: { in: ["MARKETING", "DIGITAL_MARKETING", "MANAGER"] } },
            include: {
                leads: {
                    where: { createdAt: { gte: startDate, lt: endDate } },
                    include: {
                        activities: true,
                        reservations: true
                    }
                }
            }
        })

        const marketingPerformances = users.map(user => {
            const totalLeads = user.leads.length
            let followUps = 0
            let siteVisits = 0
            let bookings = 0
            let closing = 0

            for (const lead of user.leads) {
                if (lead.status === "CLOSED") closing++
                
                for (const act of lead.activities) {
                    if (act.type === "FOLLOW_UP" || act.type === "CALL" || act.type === "WHATSAPP") followUps++
                    if (act.type === "VISIT") siteVisits++
                }
                
                for (const res of lead.reservations) {
                    if (res.type === "BOOKING") bookings++
                }
            }

            return {
                name: user.name,
                totalLeads,
                followUps,
                siteVisits,
                bookings,
                closing
            }
        }).filter(m => m.totalLeads > 0 || m.followUps > 0 || m.siteVisits > 0)

        // Lead sources
        const leads = await prisma.lead.findMany({
            where: { createdAt: { gte: startDate, lt: endDate } },
            include: {
                activities: true,
                reservations: true
            }
        })

        const sourceMap = new Map<string, { source: string, count: number, siteVisits: number, bookings: number, closing: number }>()

        for (const lead of leads) {
            const source = lead.source as string
            if (!sourceMap.has(source)) {
                sourceMap.set(source, { source, count: 0, siteVisits: 0, bookings: 0, closing: 0 })
            }
            
            const stats = sourceMap.get(source)!
            stats.count++
            if (lead.status === "CLOSED") stats.closing++
            
            let hasVisit = false
            for (const act of lead.activities) {
                if (act.type === "VISIT") hasVisit = true
            }
            if (hasVisit) stats.siteVisits++
            
            let hasBooking = false
            for (const res of lead.reservations) {
                if (res.type === "BOOKING") hasBooking = true
            }
            if (hasBooking) stats.bookings++
        }

        const leadSources = Array.from(sourceMap.values()).sort((a, b) => b.count - a.count)

        return {
            marketingPerformances,
            leadSources
        }
    } catch (error) {
        console.error("Failed to fetch marketing report:", error)
        return {
            marketingPerformances: [],
            leadSources: []
        }
    }
}
