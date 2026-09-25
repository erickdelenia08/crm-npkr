import { getLeadById } from "@/actions/lead.action"
import { LeadDetailView } from "@/components/views/lead-detail-view"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function LeadDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const resolvedParams = await params
    const leadId = resolvedParams.id

    const lead = await getLeadById(leadId)

    if (!lead) {
        notFound()
    }

    return <LeadDetailView initialLead={lead} />
}