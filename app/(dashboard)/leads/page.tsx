import { getLeads } from "@/actions/lead.action"
import { LeadsTable } from "@/components/tables/leads-table"

export const dynamic = "force-dynamic"

export default async function LeadsPage() {
    const leads = await getLeads()

    const safeLeads = leads.map((lead) => ({
        id: lead.id,
        customerName: lead.customer.name,
        customerPhone: lead.customer.phone || "-",
        unitCode: lead.unit?.code || null,
        source: lead.source,
        status: lead.status as any,
        stage: lead.stage as any,
        marketing: lead.marketing.name,
        nextFollowUp: lead.nextFollowUpAt,
    }))

    return <LeadsTable initialLeads={safeLeads} />
}