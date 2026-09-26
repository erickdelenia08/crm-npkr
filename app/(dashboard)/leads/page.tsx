import { getLeads } from "@/actions/lead.action"
import { LeadsTable } from "@/components/tables/leads-table"

export const dynamic = "force-dynamic"

export default async function LeadsPage() {
    const leads = await getLeads()
    return <LeadsTable initialLeads={leads} />
}