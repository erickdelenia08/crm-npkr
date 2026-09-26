import { MarketingReportView } from "@/components/reports/marketing-report-view"
import { getMarketingReport } from "@/actions/report.action"

export const dynamic = "force-dynamic"

export default async function MarketingReportPage({
    searchParams,
}: {
    searchParams: { period?: string }
}) {
    // default to current month/year if no period provided
    let period = searchParams.period
    if (!period) {
        const today = new Date()
        const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        period = `${monthNames[today.getMonth()]} ${today.getFullYear()}`
    }

    const { marketingPerformances, leadSources } = await getMarketingReport(period)

    return (
        <MarketingReportView
            period={period}
            marketingPerformances={marketingPerformances}
            leadSources={leadSources}
        />
    )
}