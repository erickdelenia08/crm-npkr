import { getActivities } from "@/actions/activity.action"
import { ActivitiesView } from "@/components/views/activities-view"

export const dynamic = "force-dynamic"

export default async function ActivitiesPage() {
    const activities = await getActivities()
    return <ActivitiesView initialActivities={activities} />
}