import { getActivities } from "@/actions/activity.action"
import { ActivitiesView } from "@/components/views/activities-view"

export const dynamic = "force-dynamic"

export default async function ActivitiesPage() {
    const activities = await getActivities()

    const safeActivities = activities.map((activity) => ({
        id: activity.id,
        leadId: activity.leadId,
        customerName: activity.customerName,
        phone: activity.phone,
        unitCode: activity.unitCode,
        type: activity.type as any,
        description: activity.description,
        createdAt: activity.createdAt,
        userName: activity.userName,
    }))

    return <ActivitiesView initialActivities={safeActivities} />
}