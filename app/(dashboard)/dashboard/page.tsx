import { getDashboardData, getCurrentUser } from "@/actions/dashboard.action"
import { DashboardView } from "@/components/dashboard/dashboard-view"

export const dynamic = "force-dynamic"

export default async function DashboardPage() {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return null
    }
    const dashboardData = await getDashboardData(currentUser.id, currentUser.role)

    return (
        <DashboardView
            role={currentUser.role}
            currentUser={currentUser}
            inventory={dashboardData.inventory}
            managementStats={dashboardData.managementStats}
            marketingStats={dashboardData.marketingStats}
            digitalMarketingStats={dashboardData.digitalMarketingStats}
            adminStats={dashboardData.adminStats}
            pipeline={dashboardData.pipeline}
            followUps={dashboardData.followUps}
            activities={dashboardData.activities}
        />
    )
}
