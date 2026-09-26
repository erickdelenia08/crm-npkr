"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
    Search,
    Plus,
    Filter,
    MoreHorizontal,
    UserCircle2,
    Calendar,
    Phone,
    Home,
    MapPin,
    ArrowRight,
} from "lucide-react"

type LeadStatus = "NEW" | "FOLLOW_UP" | "PROSPECT" | "BOOKED" | "CLOSED" | "LOST"
type LeadStage = "INQUIRY" | "VISIT" | "FOLLOW_UP" | "DOCUMENTATION" | "KPR" | "SLIK" | "OTS" | "AKAD" | "REALIZATION" | "CANCELLED"

type SafeLead = {
    id: string
    customerName: string
    customerPhone: string
    unitCode: string | null
    source: string
    status: LeadStatus
    stage: LeadStage
    marketing: string
    nextFollowUp: Date | null
}

const statusLabels: Record<string, string> = {
    NEW: "New",
    FOLLOW_UP: "Follow Up",
    PROSPECT: "Prospect",
    BOOKED: "Booked",
    CLOSED: "Closed (Won)",
    LOST: "Lost",
}

const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
        NEW: "bg-blue-50 text-blue-700 border-blue-200",
        FOLLOW_UP: "bg-amber-50 text-amber-700 border-amber-200",
        PROSPECT: "bg-purple-50 text-purple-700 border-purple-200",
        BOOKED: "bg-violet-50 text-violet-700 border-violet-200",
        CLOSED: "bg-emerald-50 text-emerald-700 border-emerald-200",
        LOST: "bg-rose-50 text-rose-700 border-rose-200",
    }
    return styles[status] || "bg-slate-100 text-slate-700 border-slate-200"
}

interface LeadsTableProps {
    initialLeads: SafeLead[]
}

export function LeadsTable({ initialLeads }: LeadsTableProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState("ALL")

    const filteredLeads = useMemo(() => {
        const search = searchTerm.trim().toLowerCase()
        return initialLeads.filter((lead) => {
            const matchesSearch =
                !search ||
                lead.customerName.toLowerCase().includes(search) ||
                lead.customerPhone.toLowerCase().includes(search) ||
                (lead.unitCode && lead.unitCode.toLowerCase().includes(search))

            const matchesStatus =
                statusFilter === "ALL" || lead.status === statusFilter

            return matchesSearch && matchesStatus
        })
    }, [searchTerm, statusFilter, initialLeads])

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Leads & Prospek</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Kelola data calon pembeli dan progress penjualan.
                    </p>
                </div>
                <Link
                    href="/leads/new"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
                >
                    <Plus className="w-4 h-4" />
                    Tambah Lead
                </Link>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Cari nama, telepon, atau unit..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    >
                        <option value="ALL">Semua Status</option>
                        {Object.entries(statusLabels).map(([key, label]) => (
                            <option key={key} value={key}>{label}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-200 uppercase font-bold">
                            <tr>
                                <th className="px-4 py-3">Customer</th>
                                <th className="px-4 py-3">Kontak</th>
                                <th className="px-4 py-3">Minat Unit</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">PIC Sales</th>
                                <th className="px-4 py-3 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredLeads.length > 0 ? (
                                filteredLeads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                    <span className="text-sm font-bold text-blue-700">
                                                        {lead.customerName.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{lead.customerName}</p>
                                                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                                        <MapPin className="w-3 h-3" />
                                                        {lead.source}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <p className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                                <Phone className="w-3.5 h-3.5 text-slate-400" />
                                                {lead.customerPhone}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4">
                                            {lead.unitCode ? (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
                                                    <Home className="w-3.5 h-3.5" />
                                                    {lead.unitCode}
                                                </span>
                                            ) : (
                                                <span className="text-xs text-slate-400 italic">Belum pilih unit</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold ${getStatusBadge(lead.status)}`}>
                                                {statusLabels[lead.status] || lead.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2">
                                                <UserCircle2 className="w-4 h-4 text-slate-400" />
                                                <div>
                                                    <p className="text-xs font-semibold text-slate-700">{lead.marketing}</p>
                                                    {lead.nextFollowUp && (
                                                        <p className="text-[10px] text-amber-600 flex items-center gap-1 mt-0.5 font-medium">
                                                            <Calendar className="w-3 h-3" />
                                                            {new Date(lead.nextFollowUp).toLocaleDateString('id-ID')}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            <Link
                                                href={`/leads/${lead.id}`}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
                                            >
                                                Detail
                                                <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-4 py-12 text-center">
                                        <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center mb-3">
                                            <Search className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <p className="text-sm font-bold text-slate-900">Lead tidak ditemukan</p>
                                        <p className="text-xs text-slate-500 mt-1">Coba sesuaikan kata kunci atau filter status.</p>
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
