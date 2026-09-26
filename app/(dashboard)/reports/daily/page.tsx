import { DailyReportView } from "@/components/reports/daily-report-view"
import { getDailyReport } from "@/actions/report.action"

export const dynamic = "force-dynamic"

export default async function DailyReportPage({
    searchParams,
}: {
    searchParams: { date?: string }
}) {
    // default to today if no date provided
    let dateStr = searchParams.date
    if (!dateStr) {
        const today = new Date()
        const yyyy = today.getFullYear()
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const dd = String(today.getDate()).padStart(2, '0')
        dateStr = `${yyyy}-${mm}-${dd}`
    }

    const { summary, dailyActivities } = await getDailyReport(dateStr)

    return (
        <DailyReportView
            dateStr={dateStr}
            summary={summary}
            dailyActivities={dailyActivities}
        />
    )
}