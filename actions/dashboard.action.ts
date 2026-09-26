"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"

export async function getCurrentUser() {
    const session = await auth()

    if (!session?.user) {
        throw new Error("UNAUTHORIZED")
    }

    return {
        id: session.user.id,
        name: session.user.name ?? "User",
        role: session.user.role,
    }
}
export async function getDashboardData(userId: string, role: string) {
    const now = new Date()
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    // Inventory
    const units = await prisma.unit.groupBy({
        by: ['status'],
        _count: {
            id: true
        }
    })

    let total = 0, available = 0, booking = 0, sold = 0
    units.forEach(u => {
        total += u._count.id
        if (u.status === 'AVAILABLE') available += u._count.id
        if (u.status === 'BOOKED' || u.status === 'HOLD') booking += u._count.id
        if (u.status === 'SOLD') sold += u._count.id
    })

    const inventory = { total, available, booking, sold }

    // Stats
    let managementStats = null
    let marketingStats = null
    let digitalMarketingStats = null
    let adminStats = null

    if (role === "SUPER_ADMIN" || role === "MANAGER") {
        const leadsThisMonth = await prisma.lead.count({ where: { createdAt: { gte: firstDayOfMonth } } })
        const siteVisitsThisMonth = await prisma.activity.count({ where: { type: 'VISIT', createdAt: { gte: firstDayOfMonth } } })
        const bookingsThisMonth = await prisma.unitReservation.count({ where: { createdAt: { gte: firstDayOfMonth } } })
        const closedThisMonth = await prisma.lead.count({ where: { status: 'CLOSED', updatedAt: { gte: firstDayOfMonth } } })

        managementStats = {
            totalLead: leadsThisMonth,
            siteVisit: siteVisitsThisMonth,
            booking: bookingsThisMonth,
            closing: closedThisMonth
        }
    } else if (role === "MARKETING") {
        // Need to find by PIC if user ID is real, but using dummy for now
        // Assuming we find by user's assigned leads
        const userLeads = await prisma.lead.count({ where: { createdAt: { gte: firstDayOfMonth } } }) // should filter by PIC
        const followUps = await prisma.activity.count({ where: { type: { in: ['CALL', 'WHATSAPP', 'FOLLOW_UP'] } } })
        const siteVisits = await prisma.activity.count({ where: { type: 'VISIT', createdAt: { gte: firstDayOfMonth } } })
        const closed = await prisma.lead.count({ where: { status: 'CLOSED', updatedAt: { gte: firstDayOfMonth } } })

        marketingStats = {
            leadSaya: userLeads,
            followUp: followUps,
            siteVisit: siteVisits,
            closing: closed
        }
    } else if (role === "DIGITAL_MARKETING") {
        const digitalLeads = await prisma.lead.count({ where: { source: { in: ['INSTAGRAM', 'FACEBOOK', 'TIKTOK', 'WEBSITE', 'ADVERTISEMENT'] }, createdAt: { gte: firstDayOfMonth } } })
        const igLeads = await prisma.lead.count({ where: { source: 'INSTAGRAM', createdAt: { gte: firstDayOfMonth } } })
        const fbLeads = await prisma.lead.count({ where: { source: 'FACEBOOK', createdAt: { gte: firstDayOfMonth } } })
        const closed = await prisma.lead.count({ where: { source: { in: ['INSTAGRAM', 'FACEBOOK', 'TIKTOK', 'WEBSITE', 'ADVERTISEMENT'] }, status: 'CLOSED', updatedAt: { gte: firstDayOfMonth } } })

        digitalMarketingStats = {
            totalLead: digitalLeads,
            instagram: igLeads,
            facebook: fbLeads,
            conversion: digitalLeads > 0 ? (closed / digitalLeads) * 100 : 0
        }
    } else if (role === "ADMIN") {
        const bookingAktif = await prisma.unitReservation.count({ where: { status: 'ACTIVE' } })
        const belumLengkap = await prisma.lead.count({ where: { stage: 'DOCUMENTATION' } })
        const siapAkad = await prisma.lead.count({ where: { stage: 'AKAD', status: 'ACTIVE' } })
        const akad = await prisma.activity.count({ where: { type: 'AKAD', createdAt: { gte: firstDayOfMonth } } })

        adminStats = {
            bookingAktif,
            berkasBelumLengkap: belumLengkap,
            siapAkad,
            akad
        }
    }

    // Pipeline
    const newLead = await prisma.lead.count({ where: { status: 'NEW' } })
    const activeLead = await prisma.lead.count({ where: { status: 'ACTIVE' } })
    const visitLead = await prisma.lead.count({ where: { stage: 'VISIT' } })
    const bookedLead = await prisma.lead.count({ where: { status: 'BOOKED' } })
    const kprLead = await prisma.lead.count({ where: { stage: 'KPR' } })

    const pipeline = { new: newLead, active: activeLead, visit: visitLead, booked: bookedLead, kpr: kprLead }

    // Follow ups
    // Find active leads that have followUpDate set
    const startOfToday = new Date(now)
    startOfToday.setHours(0, 0, 0, 0)

    const endOfToday = new Date(now)
    endOfToday.setHours(23, 59, 59, 999)

    const endOfTomorrow = new Date(now)
    endOfTomorrow.setDate(endOfTomorrow.getDate() + 1)
    endOfTomorrow.setHours(23, 59, 59, 999)

    const followUpLeads = await prisma.lead.findMany({
        where: { nextFollowUpAt: { not: null }, status: { notIn: ['CLOSED', 'LOST'] } },
        include: { customer: true }
    })

    const followUps = followUpLeads.map(lead => {
        let type = "today"
        const followDate = lead.nextFollowUpAt!
        if (followDate < startOfToday) {
            type = "overdue"
        } else if (followDate >= startOfToday && followDate <= endOfToday) {
            type = "today"
        } else if (followDate > endOfToday && followDate <= endOfTomorrow) {
            type = "tomorrow"
        } else {
            type = "later"
        }

        return {
            name: lead.customer.name,
            unit: lead.unitId || "Belum ditentukan",
            task: "Follow Up",
            time: followDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
            date: followDate,
            type
        }
    }).filter(f => f.type !== "later").sort((a, b) => a.date.getTime() - b.date.getTime())

    // Activities
    const recentActivitiesRaw = await prisma.activity.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: { createdBy: true }
    })

    const activities = recentActivitiesRaw.map(act => {
        // Calculate relative time like "2 jam yang lalu"
        const diffMs = now.getTime() - act.createdAt.getTime()
        const diffMins = Math.floor(diffMs / 60000)
        let timeStr = "Baru saja"
        if (diffMins > 0 && diffMins < 60) timeStr = `${diffMins} menit yang lalu`
        else if (diffMins >= 60 && diffMins < 1440) timeStr = `${Math.floor(diffMins / 60)} jam yang lalu`
        else if (diffMins >= 1440) timeStr = `${Math.floor(diffMins / 1440)} hari yang lalu`

        return {
            time: timeStr,
            user: act.createdBy.name,
            type: act.type,
            description: act.description
        }
    })

    return {
        inventory,
        managementStats,
        marketingStats,
        digitalMarketingStats,
        adminStats,
        pipeline,
        followUps,
        activities
    }
}
