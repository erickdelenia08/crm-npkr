import { getAuditLogs } from "@/actions/audit-log.action"
import { AuditLogsView } from "@/components/audit-logs/audit-logs-view"

export const dynamic = "force-dynamic"

export default async function AuditLogsPage() {
    const logs = await getAuditLogs()

    // Pass typed data to Client Component
    return <AuditLogsView initialLogs={logs} />
}