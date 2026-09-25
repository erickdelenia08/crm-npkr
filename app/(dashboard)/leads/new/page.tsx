import { LeadForm } from "@/components/forms/lead-form"
import { getLeadFormDependencies } from "@/actions/lead.action"

export const dynamic = "force-dynamic"

export default async function NewLeadPage() {
    const dependencies = await getLeadFormDependencies()
    
    return <LeadForm dependencies={dependencies} />
}