"use client"

import { useState } from "react"
import {
    Search,
    ShieldCheck,
    User,
    Clock,
    Filter,
    FileText,
    AlertCircle,
    Activity,
} from "lucide-react"

export default function AuditLogsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedModule, setSelectedModule] = useState("")
    const [selectedAction, setSelectedAction] = useState("")

    // Dummy Data Audit Log Aktivitas Sistem
    const auditLogs = [
        {
            id: "LOG-8801",
            timestamp: "24 Sep 2026 - 15:42:10",
            user: "Elin Marketing",
            role: "Sales / Marketing",
            action: "UPDATE",
            module: "LEADS",
            description: "Memperbarui status lead #L-101 dari FOLLOW_UP menjadi PROSPECT",
            ipAddress: "180.252.12.88",
        },
        {
            id: "LOG-8802",
            timestamp: "24 Sep 2026 - 14:15:00",
            user: "Admin Developer",
            role: "Administrator",
            action: "CREATE",
            module: "CUSTOMERS",
            description: "Menambahkan customer baru: Budi Santoso (CUST-001)",
            ipAddress: "114.122.45.10",
        },
        {
            id: "LOG-8803",
            timestamp: "24 Sep 2026 - 11:05:33",
            user: "Admin Developer",
            role: "Administrator",
            action: "UPDATE",
            module: "UNITS",
            description: "Mengubah harga jual Unit G-05 dari Rp 175jt menjadi Rp 180jt",
            ipAddress: "114.122.45.10",
        },
        {
            id: "LOG-8804",
            timestamp: "23 Sep 2026 - 09:20:18",
            user: "Rian Marketing",
            role: "Sales / Marketing",
            action: "DELETE",
            module: "LEADS",
            description: "Menghapus draf lead duplikat #L-099",
            ipAddress: "180.252.15.21",
        },
    ]

    const getActionBadge = (action: string) => {
        const styles: Record<string, string> = {
            CREATE: "bg-emerald-50 text-emerald-700 border-emerald-200",
            UPDATE: "bg-blue-50 text-blue-700 border-blue-200",
            DELETE: "bg-rose-50 text-rose-700 border-rose-200",
            LOGIN: "bg-purple-50 text-purple-700 border-purple-200",
        }
        return styles[action] || "bg-slate-100 text-slate-700 border-slate-200"
    }

    const filteredLogs = auditLogs.filter((log) => {
        const matchesSearch =
            log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.id.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesModule = selectedModule ? log.module === selectedModule : true
        const matchesAction = selectedAction ? log.action === selectedAction : true

        return matchesSearch && matchesModule && matchesAction
    })

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-2xl tracking-tight">
                    <ShieldCheck className="w-7 h-7 text-blue-600" />
                    <h1>Audit Logs System</h1>
                </div>
                <p className="text-sm text-slate-500 mt-0.5">
                    Rekam jejak seluruh aktivitas pengguna, perubahan data, dan akses sistem demi keamanan.
                </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-3">
                <div className="relative w-full lg:w-96">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Cari nama user, deskripsi, atau ID log..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                    {/* Filter Modul */}
                    <select
                        value={selectedModule}
                        onChange={(e) => setSelectedModule(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">Semua Modul</option>
                        <option value="CUSTOMERS">CUSTOMERS</option>
                        <option value="LEADS">LEADS</option>
                        <option value="UNITS">UNITS</option>
                    </select>

                    {/* Filter Aksi */}
                    <select
                        value={selectedAction}
                        onChange={(e) => setSelectedAction(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">Semua Aksi</option>
                        <option value="CREATE">CREATE</option>
                        <option value="UPDATE">UPDATE</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                </div>
            </div>

            {/* Logs Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                            <tr>
                                <th className="p-4">Waktu & Log ID</th>
                                <th className="p-4">Pengguna (User)</th>
                                <th className="p-4">Aksi & Modul</th>
                                <th className="p-4">Deskripsi Aktivitas</th>
                                <th className="p-4">IP Address</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredLogs.length > 0 ? (
                                filteredLogs.map((log) => (
                                    <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                                        {/* Timestamp & ID */}
                                        <td className="p-4 whitespace-nowrap">
                                            <div className="flex items-center gap-1.5 font-medium text-slate-900">
                                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                                <span>{log.timestamp}</span>
                                            </div>
                                            <span className="text-[10px] text-slate-400 font-mono">
                                                #{log.id}
                                            </span>
                                        </td>

                                        {/* User */}
                                        <td className="p-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[10px]">
                                                    <User className="w-3.5 h-3.5" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-800">{log.user}</p>
                                                    <p className="text-[10px] text-slate-400">{log.role}</p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Action & Module */}
                                        <td className="p-4 whitespace-nowrap">
                                            <div className="flex items-center gap-1.5">
                                                <span
                                                    className={`px-2 py-0.5 rounded border text-[10px] font-bold ${getActionBadge(
                                                        log.action
                                                    )}`}
                                                >
                                                    {log.action}
                                                </span>
                                                <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold">
                                                    {log.module}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Description */}
                                        <td className="p-4 max-w-md text-slate-700">
                                            {log.description}
                                        </td>

                                        {/* IP Address */}
                                        <td className="p-4 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                                            {log.ipAddress}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-slate-400 text-xs">
                                        Tidak ada rekam log aktivitas yang cocok dengan pencarian.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}