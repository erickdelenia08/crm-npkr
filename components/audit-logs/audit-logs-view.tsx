"use client"

import { useMemo, useState } from "react"
import * as XLSX from "xlsx"
import {
    Search,
    ShieldCheck,
    User,
    Clock,
    Filter,
    Eye,
    Download,
    LogIn,
    LogOut,
    UserPlus,
    Pencil,
    Trash2,
    CheckCircle2,
    XCircle,
    ChevronDown,
    Activity,
} from "lucide-react"

// ============================================================
import { getAuditLogs } from "@/actions/audit-log.action"

export type AuditLogItem = Awaited<ReturnType<typeof getAuditLogs>>[number]
export type AuditActionType = AuditLogItem["action"]

// ============================================================
// Helpers
// ============================================================

function getActionStyle(action: AuditActionType | string) {
    const styles: Record<string, string> = {
        CREATE:
            "bg-emerald-50 text-emerald-700 border-emerald-200",
        UPDATE:
            "bg-blue-50 text-blue-700 border-blue-200",
        DELETE:
            "bg-rose-50 text-rose-700 border-rose-200",
        LOGIN:
            "bg-purple-50 text-purple-700 border-purple-200",
        LOGOUT:
            "bg-slate-100 text-slate-600 border-slate-200",
        LOGIN_FAILED:
            "bg-red-50 text-red-700 border-red-200",
        VIEW:
            "bg-sky-50 text-sky-700 border-sky-200",
        EXPORT:
            "bg-indigo-50 text-indigo-700 border-indigo-200",
        STATUS_CHANGE:
            "bg-amber-50 text-amber-700 border-amber-200",
        ASSIGN:
            "bg-cyan-50 text-cyan-700 border-cyan-200",
        APPROVE:
            "bg-green-50 text-green-700 border-green-200",
    }

    return styles[action] || "bg-slate-100 text-slate-600 border-slate-200"
}

function getActionIcon(action: AuditActionType | string) {
    switch (action) {
        case "CREATE":
            return UserPlus

        case "UPDATE":
        case "STATUS_CHANGE":
            return Pencil

        case "DELETE":
            return Trash2

        case "LOGIN":
            return LogIn

        case "LOGOUT":
            return LogOut

        case "LOGIN_FAILED":
            return XCircle

        case "VIEW":
            return Eye

        case "EXPORT":
            return Download

        default:
            return ShieldCheck
    }
}

// ============================================================
// Page
// ============================================================

export interface AuditLogsViewProps {
    initialLogs: AuditLogItem[]
}

export function AuditLogsView({ initialLogs }: AuditLogsViewProps) {
    const [auditLogs] = useState<AuditLogItem[]>(initialLogs)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedModule, setSelectedModule] = useState("")
    const [selectedAction, setSelectedAction] = useState("")
    const [selectedResult, setSelectedResult] = useState("")
    const [selectedLog, setSelectedLog] = useState<AuditLogItem | null>(null)

    // ========================================================
    // Filter
    // ========================================================

    const filteredLogs = useMemo(() => {
        return auditLogs.filter((log) => {
            const search = searchTerm.toLowerCase()

            const matchesSearch =
                log.user.toLowerCase().includes(search) ||
                log.description.toLowerCase().includes(search) ||
                log.id.toLowerCase().includes(search) ||
                log.target.toLowerCase().includes(search)

            const matchesModule = selectedModule
                ? log.module === selectedModule
                : true

            const matchesAction = selectedAction
                ? log.action === selectedAction
                : true

            const matchesResult = selectedResult
                ? log.result === selectedResult
                : true

            return (
                matchesSearch &&
                matchesModule &&
                matchesAction &&
                matchesResult
            )
        })
    }, [
        searchTerm,
        selectedModule,
        selectedAction,
        selectedResult,
    ])

    // ========================================================
    // Summary
    // ========================================================

    const totalLogs = auditLogs.length

    const failedLogs = auditLogs.filter(
        (log) => log.result === "FAILED"
    ).length

    const updateLogs = auditLogs.filter(
        (log) =>
            log.action === "UPDATE" ||
            log.action === "STATUS_CHANGE"
    ).length

    const loginLogs = auditLogs.filter(
        (log) =>
            (log.action as string) === "LOGIN" ||
            (log.action as string) === "LOGIN_FAILED"
    ).length

    const handleExport = () => {
        if (filteredLogs.length === 0) {
            alert("Tidak ada data untuk diexport")
            return
        }

        const dataToExport = filteredLogs.map(log => ({
            "Log ID": log.id,
            "Waktu": log.timestamp,
            "Pengguna": log.user,
            "Role": log.role,
            "Aksi": log.action,
            "Modul": log.module,
            "Target": log.target,
            "Deskripsi": log.description,
            "Hasil": log.result,
            "IP Address": log.ipAddress,
        }))

        const worksheet = XLSX.utils.json_to_sheet(dataToExport)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, "Audit Logs")
        
        // Atur lebar kolom
        const colWidths = [
            { wch: 25 }, // Log ID
            { wch: 25 }, // Waktu
            { wch: 20 }, // Pengguna
            { wch: 20 }, // Role
            { wch: 15 }, // Aksi
            { wch: 15 }, // Modul
            { wch: 20 }, // Target
            { wch: 50 }, // Deskripsi
            { wch: 10 }, // Hasil
            { wch: 15 }, // IP Address
        ]
        worksheet['!cols'] = colWidths

        XLSX.writeFile(workbook, `Audit_Logs_${new Date().getTime()}.xlsx`)
    }

    return (
        <div className="max-w-7xl mx-auto pb-12 space-y-6">

            {/* ==================================================
                Header
            ================================================== */}

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-blue-600" />

                        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                            Audit Logs
                        </h1>
                    </div>

                    <p className="text-xs text-slate-500 mt-1">
                        Rekam jejak aktivitas pengguna dan perubahan data
                        dalam sistem.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={handleExport}
                        className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-medium rounded-lg transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Export Log
                    </button>
                </div>
            </div>

            {/* ==================================================
                Summary Cards
            ================================================== */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

                <SummaryCard
                    label="Total Aktivitas"
                    value={totalLogs}
                    icon={Activity}
                    iconClass="text-blue-600 bg-blue-50"
                />

                <SummaryCard
                    label="Perubahan Data"
                    value={updateLogs}
                    icon={Pencil}
                    iconClass="text-amber-600 bg-amber-50"
                />

                <SummaryCard
                    label="Aktivitas Login"
                    value={loginLogs}
                    icon={LogIn}
                    iconClass="text-purple-600 bg-purple-50"
                />

                <SummaryCard
                    label="Aktivitas Gagal"
                    value={failedLogs}
                    icon={AlertIcon}
                    iconClass="text-red-600 bg-red-50"
                />
            </div>

            {/* ==================================================
                Filter
            ================================================== */}

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">

                <div className="flex items-center gap-2 mb-3">
                    <Filter className="w-4 h-4 text-slate-500" />

                    <span className="text-xs font-semibold text-slate-700">
                        Filter Audit Log
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

                    {/* Search */}

                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                        <input
                            type="text"
                            placeholder="Cari user, log, target..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                    </div>

                    {/* Module */}

                    <select
                        value={selectedModule}
                        onChange={(e) =>
                            setSelectedModule(e.target.value)
                        }
                        className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">Semua Modul</option>
                        <option value="AUTH">AUTH</option>
                        <option value="LEADS">LEADS</option>
                        <option value="CUSTOMERS">CUSTOMERS</option>
                        <option value="UNITS">UNITS</option>
                        <option value="REPORTS">REPORTS</option>
                    </select>

                    {/* Action */}

                    <select
                        value={selectedAction}
                        onChange={(e) =>
                            setSelectedAction(e.target.value)
                        }
                        className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">Semua Aksi</option>
                        <option value="CREATE">CREATE</option>
                        <option value="UPDATE">UPDATE</option>
                        <option value="DELETE">DELETE</option>
                        <option value="LOGIN">LOGIN</option>
                        <option value="LOGIN_FAILED">
                            LOGIN FAILED
                        </option>
                        <option value="LOGOUT">LOGOUT</option>
                        <option value="VIEW">VIEW</option>
                        <option value="EXPORT">EXPORT</option>
                        <option value="STATUS_CHANGE">
                            STATUS CHANGE
                        </option>
                        <option value="ASSIGN">ASSIGN</option>
                        <option value="APPROVE">APPROVE</option>
                    </select>

                    {/* Result */}

                    <select
                        value={selectedResult}
                        onChange={(e) =>
                            setSelectedResult(e.target.value)
                        }
                        className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">Semua Hasil</option>
                        <option value="SUCCESS">SUCCESS</option>
                        <option value="FAILED">FAILED</option>
                    </select>
                </div>
            </div>

            {/* ==================================================
                Table
            ================================================== */}

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">

                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <h2 className="text-sm font-semibold text-slate-800">
                            System Activity
                        </h2>

                        <p className="text-[10px] text-slate-400 mt-0.5">
                            Menampilkan {filteredLogs.length} dari{" "}
                            {auditLogs.length} aktivitas
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Audit trail aktif
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">

                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-5 py-3 font-semibold text-slate-600">
                                    Waktu
                                </th>

                                <th className="px-5 py-3 font-semibold text-slate-600">
                                    Pengguna
                                </th>

                                <th className="px-5 py-3 font-semibold text-slate-600">
                                    Aksi
                                </th>

                                <th className="px-5 py-3 font-semibold text-slate-600">
                                    Target
                                </th>

                                <th className="px-5 py-3 font-semibold text-slate-600">
                                    Detail Aktivitas
                                </th>

                                <th className="px-5 py-3 font-semibold text-slate-600">
                                    Hasil
                                </th>

                                <th className="px-5 py-3 font-semibold text-slate-600">
                                    IP
                                </th>

                                <th className="px-5 py-3" />
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">

                            {filteredLogs.length > 0 ? (
                                filteredLogs.map((log) => {
                                    const ActionIcon =
                                        getActionIcon(log.action)

                                    return (
                                        <tr
                                            key={log.id}
                                            className="hover:bg-slate-50/70 transition-colors"
                                        >

                                            {/* Waktu */}

                                            <td className="px-5 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-1.5 text-slate-700">
                                                    <Clock className="w-3.5 h-3.5 text-slate-400" />

                                                    <span className="text-[11px] font-medium">
                                                        {log.timestamp}
                                                    </span>
                                                </div>

                                                <span className="text-[9px] text-slate-400 font-mono">
                                                    {log.id}
                                                </span>
                                            </td>

                                            {/* User */}

                                            <td className="px-5 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">

                                                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                                                        <User className="w-3.5 h-3.5 text-slate-500" />
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold text-slate-800">
                                                            {log.user}
                                                        </p>

                                                        <p className="text-[9px] text-slate-400">
                                                            {log.role}
                                                        </p>
                                                    </div>

                                                </div>
                                            </td>

                                            {/* Action */}

                                            <td className="px-5 py-4 whitespace-nowrap">

                                                <div className="flex items-center gap-1.5">

                                                    <span
                                                        className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-[9px] font-bold ${getActionStyle(
                                                            log.action
                                                        )}`}
                                                    >
                                                        <ActionIcon className="w-3 h-3" />

                                                        {log.action}
                                                    </span>

                                                </div>

                                                <span className="inline-block mt-1 text-[9px] text-slate-400">
                                                    {log.module}
                                                </span>

                                            </td>

                                            {/* Target */}

                                            <td className="px-5 py-4 whitespace-nowrap">
                                                <span className="font-medium text-slate-700">
                                                    {log.target}
                                                </span>
                                            </td>

                                            {/* Description */}

                                            <td className="px-5 py-4 min-w-[300px] max-w-[420px]">
                                                <p className="text-[11px] text-slate-600 leading-relaxed">
                                                    {log.description}
                                                </p>
                                            </td>

                                            {/* Result */}

                                            <td className="px-5 py-4 whitespace-nowrap">

                                                {log.result === "SUCCESS" ? (
                                                    <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-600">
                                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                                        SUCCESS
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-red-600">
                                                        <XCircle className="w-3.5 h-3.5" />
                                                        FAILED
                                                    </span>
                                                )}

                                            </td>

                                            {/* IP */}

                                            <td className="px-5 py-4 whitespace-nowrap">

                                                <span className="font-mono text-[10px] text-slate-400">
                                                    {log.ipAddress}
                                                </span>

                                            </td>

                                            {/* Detail */}

                                            <td className="px-5 py-4">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedLog(log)
                                                    }
                                                    className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                                                    title="Lihat detail"
                                                >
                                                    <ChevronDown className="w-4 h-4" />
                                                </button>

                                            </td>

                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td
                                        colSpan={8}
                                        className="px-5 py-12 text-center"
                                    >
                                        <ShieldCheck className="w-8 h-8 text-slate-300 mx-auto mb-2" />

                                        <p className="text-xs font-medium text-slate-500">
                                            Tidak ada audit log
                                        </p>

                                        <p className="text-[10px] text-slate-400 mt-1">
                                            Coba ubah filter atau kata pencarian.
                                        </p>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>

            {/* ==================================================
                Detail Modal
            ================================================== */}

            {selectedLog && (
                <div
                    className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setSelectedLog(null)}
                >
                    <div
                        className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">
                                    Detail Audit Log
                                </h3>

                                <p className="text-[10px] text-slate-400 mt-1 font-mono">
                                    {selectedLog.id}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedLog(null)}
                                className="text-slate-400 hover:text-slate-700"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-5 space-y-5">

                            <div className="grid grid-cols-2 gap-4">

                                <DetailItem
                                    label="Pengguna"
                                    value={selectedLog.user}
                                />

                                <DetailItem
                                    label="Role"
                                    value={selectedLog.role}
                                />

                                <DetailItem
                                    label="Action"
                                    value={selectedLog.action}
                                />

                                <DetailItem
                                    label="Module"
                                    value={selectedLog.module}
                                />

                                <DetailItem
                                    label="Target"
                                    value={selectedLog.target}
                                />

                                <DetailItem
                                    label="Result"
                                    value={selectedLog.result}
                                />

                                <DetailItem
                                    label="IP Address"
                                    value={selectedLog.ipAddress}
                                />

                                <DetailItem
                                    label="Device"
                                    value={selectedLog.userAgent}
                                />

                            </div>

                            <div>
                                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    Aktivitas
                                </p>

                                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                    <p className="text-xs text-slate-700 leading-relaxed">
                                        {selectedLog.description}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    Timestamp
                                </p>

                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                    <Clock className="w-4 h-4 text-slate-400" />
                                    {selectedLog.timestamp}
                                </div>
                            </div>

                        </div>

                        <div className="px-5 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setSelectedLog(null)}
                                className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800"
                            >
                                Tutup
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

// ============================================================
// Summary Card
// ============================================================

function SummaryCard({
    label,
    value,
    icon: Icon,
    iconClass,
}: {
    label: string
    value: number
    icon: React.ElementType
    iconClass: string
}) {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="flex items-start justify-between">

                <div>
                    <p className="text-[10px] font-medium text-slate-500">
                        {label}
                    </p>

                    <p className="text-2xl font-bold text-slate-900 mt-1">
                        {value}
                    </p>
                </div>

                <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconClass}`}
                >
                    <Icon className="w-4 h-4" />
                </div>

            </div>
        </div>
    )
}

// ============================================================
// Detail Item
// ============================================================

function DetailItem({
    label,
    value,
}: {
    label: string
    value: string
}) {
    return (
        <div>
            <p className="text-[9px] uppercase tracking-wider font-semibold text-slate-400">
                {label}
            </p>

            <p className="text-xs font-medium text-slate-700 mt-1">
                {value}
            </p>
        </div>
    )
}

// ============================================================
// Alert Icon
// ============================================================

function AlertIcon({
    className,
}: {
    className?: string
}) {
    return (
        <XCircle className={className} />
    )
}