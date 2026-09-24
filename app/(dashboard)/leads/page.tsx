"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
    Plus,
    Search,
    Calendar,
    Eye,
    RotateCcw,
} from "lucide-react"

type LeadStatus =
    | "NEW"
    | "FOLLOW_UP"
    | "PROSPECT"
    | "BOOKED"
    | "CLOSED"
    | "LOST"

type LeadStage =
    | "INQUIRY"
    | "VISIT"
    | "FOLLOW_UP"
    | "DOCUMENTATION"
    | "KPR"
    | "SLIK"
    | "OTS"
    | "AKAD"
    | "REALIZATION"
    | "CANCELLED"

type Lead = {
    id: string
    customerName: string
    customerPhone: string
    unitCode: string | null
    source: string
    status: LeadStatus
    stage: LeadStage
    marketing: string
    nextFollowUp: string | null
}

// ============================================================
// Dummy Data
// Nanti bagian ini diganti dengan data dari Prisma / API
// ============================================================

const leads: Lead[] = [
    {
        id: "L-101",
        customerName: "Budi Santoso",
        customerPhone: "081234567890",
        unitCode: "G-05",
        source: "Instagram Ads",
        status: "PROSPECT",
        stage: "DOCUMENTATION",
        marketing: "Elin Marketing",
        nextFollowUp: "2026-09-28",
    },
    {
        id: "L-102",
        customerName: "Dewi Puspitasari",
        customerPhone: "089876543210",
        unitCode: "H-03",
        source: "Kantor Pemasaran",
        status: "FOLLOW_UP",
        stage: "VISIT",
        marketing: "Elin Marketing",
        nextFollowUp: "2026-09-25",
    },
    {
        id: "L-103",
        customerName: "Ahmad Dahlan",
        customerPhone: "085678901234",
        unitCode: "G-01",
        source: "Facebook Ads",
        status: "NEW",
        stage: "INQUIRY",
        marketing: "Rian Marketing",
        nextFollowUp: "2026-09-24",
    },
    {
        id: "L-104",
        customerName: "Siti Aminah",
        customerPhone: "082345678901",
        unitCode: null,
        source: "WhatsApp",
        status: "NEW",
        stage: "INQUIRY",
        marketing: "Elin Marketing",
        nextFollowUp: "2026-09-26",
    },
    {
        id: "L-105",
        customerName: "Agus Setiawan",
        customerPhone: "083456789012",
        unitCode: "H-07",
        source: "Referral",
        status: "BOOKED",
        stage: "AKAD",
        marketing: "Rian Marketing",
        nextFollowUp: "2026-09-30",
    },
    {
        id: "L-106",
        customerName: "Rina Wulandari",
        customerPhone: "087654321098",
        unitCode: null,
        source: "TikTok",
        status: "LOST",
        stage: "CANCELLED",
        marketing: "Elin Marketing",
        nextFollowUp: null,
    },
]

// ============================================================
// Label
// ============================================================

const statusLabels: Record<LeadStatus, string> = {
    NEW: "New",
    FOLLOW_UP: "Follow Up",
    PROSPECT: "Prospect",
    BOOKED: "Booked",
    CLOSED: "Closed",
    LOST: "Lost",
}

const stageLabels: Record<LeadStage, string> = {
    INQUIRY: "Inquiry",
    VISIT: "Survey Lokasi",
    FOLLOW_UP: "Follow Up",
    DOCUMENTATION: "Dokumen",
    KPR: "Proses KPR",
    SLIK: "SLIK",
    OTS: "OTS",
    AKAD: "Akad",
    REALIZATION: "Realisasi",
    CANCELLED: "Batal",
}

// ============================================================
// Badge Style
// ============================================================

const getStatusBadge = (status: LeadStatus) => {
    const styles: Record<LeadStatus, string> = {
        NEW: "bg-blue-50 text-blue-700 border-blue-200",
        FOLLOW_UP: "bg-amber-50 text-amber-700 border-amber-200",
        PROSPECT: "bg-emerald-50 text-emerald-700 border-emerald-200",
        BOOKED: "bg-violet-50 text-violet-700 border-violet-200",
        CLOSED: "bg-slate-100 text-slate-700 border-slate-200",
        LOST: "bg-red-50 text-red-700 border-red-200",
    }

    return styles[status]
}

const getStageBadge = (stage: LeadStage) => {
    const styles: Record<LeadStage, string> = {
        INQUIRY: "bg-slate-50 text-slate-600 border-slate-200",
        VISIT: "bg-blue-50 text-blue-700 border-blue-200",
        FOLLOW_UP: "bg-amber-50 text-amber-700 border-amber-200",
        DOCUMENTATION: "bg-indigo-50 text-indigo-700 border-indigo-200",
        KPR: "bg-cyan-50 text-cyan-700 border-cyan-200",
        SLIK: "bg-orange-50 text-orange-700 border-orange-200",
        OTS: "bg-purple-50 text-purple-700 border-purple-200",
        AKAD: "bg-emerald-50 text-emerald-700 border-emerald-200",
        REALIZATION: "bg-green-50 text-green-700 border-green-200",
        CANCELLED: "bg-red-50 text-red-700 border-red-200",
    }

    return styles[stage]
}

// ============================================================
// Format Date
// ============================================================

const formatDate = (date: string | null) => {
    if (!date) return "—"

    return new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(new Date(`${date}T00:00:00`))
}

// ============================================================
// Page
// ============================================================

export default function LeadsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedStatus, setSelectedStatus] = useState<LeadStatus | "">("")
    const [selectedStage, setSelectedStage] = useState<LeadStage | "">("")
    const [selectedMarketing, setSelectedMarketing] = useState("")

    // ========================================================
    // Marketing Options
    // ========================================================

    const marketingOptions = useMemo(() => {
        return Array.from(
            new Set(leads.map((lead) => lead.marketing))
        ).sort()
    }, [])

    // ========================================================
    // Filter
    // ========================================================

    const filteredLeads = useMemo(() => {
        const keyword = searchTerm.trim().toLowerCase()

        return leads.filter((lead) => {
            const matchesSearch =
                !keyword ||
                lead.id.toLowerCase().includes(keyword) ||
                lead.customerName.toLowerCase().includes(keyword) ||
                lead.customerPhone.toLowerCase().includes(keyword) ||
                (lead.unitCode?.toLowerCase().includes(keyword) ?? false)

            const matchesStatus =
                selectedStatus === ""
                    ? true
                    : lead.status === selectedStatus

            const matchesStage =
                selectedStage === ""
                    ? true
                    : lead.stage === selectedStage

            const matchesMarketing =
                selectedMarketing === ""
                    ? true
                    : lead.marketing === selectedMarketing

            return (
                matchesSearch &&
                matchesStatus &&
                matchesStage &&
                matchesMarketing
            )
        })
    }, [
        searchTerm,
        selectedStatus,
        selectedStage,
        selectedMarketing,
    ])

    // ========================================================
    // Reset Filter
    // ========================================================

    const resetFilters = () => {
        setSearchTerm("")
        setSelectedStatus("")
        setSelectedStage("")
        setSelectedMarketing("")
    }

    const hasActiveFilter =
        searchTerm !== "" ||
        selectedStatus !== "" ||
        selectedStage !== "" ||
        selectedMarketing !== ""

    // ========================================================
    // Render
    // ========================================================

    return (
        <div className="space-y-6">

            {/* ==================================================
                Header
            ================================================== */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Pipeline Lead CRM
                    </h1>

                    <p className="text-sm text-slate-500 mt-0.5">
                        Kelola prospek pembeli, jadwal follow up,
                        dan tahap transaksi.
                    </p>
                </div>

                <Link
                    href="/leads/new"
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                >
                    <Plus className="w-4 h-4" />
                    <span>Input Lead Baru</span>
                </Link>
            </div>

            {/* ==================================================
                Search & Filter
            ================================================== */}

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">

                <div className="flex flex-col lg:flex-row gap-3">

                    {/* Search */}

                    <div className="relative w-full lg:flex-1">
                        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

                        <input
                            type="text"
                            placeholder="Cari nama customer, No. HP, unit, atau ID lead..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        />
                    </div>

                    {/* Status */}

                    <select
                        value={selectedStatus}
                        onChange={(e) =>
                            setSelectedStatus(
                                e.target.value as LeadStatus | ""
                            )
                        }
                        className="w-full lg:w-44 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">
                            Semua Status
                        </option>

                        <option value="NEW">
                            New
                        </option>

                        <option value="FOLLOW_UP">
                            Follow Up
                        </option>

                        <option value="PROSPECT">
                            Prospect
                        </option>

                        <option value="BOOKED">
                            Booked
                        </option>

                        <option value="CLOSED">
                            Closed
                        </option>

                        <option value="LOST">
                            Lost
                        </option>
                    </select>

                    {/* Stage */}

                    <select
                        value={selectedStage}
                        onChange={(e) =>
                            setSelectedStage(
                                e.target.value as LeadStage | ""
                            )
                        }
                        className="w-full lg:w-48 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">
                            Semua Tahap
                        </option>

                        <option value="INQUIRY">
                            Inquiry
                        </option>

                        <option value="VISIT">
                            Survey Lokasi
                        </option>

                        <option value="FOLLOW_UP">
                            Follow Up
                        </option>

                        <option value="DOCUMENTATION">
                            Dokumen
                        </option>

                        <option value="KPR">
                            Proses KPR
                        </option>

                        <option value="SLIK">
                            SLIK
                        </option>

                        <option value="OTS">
                            OTS
                        </option>

                        <option value="AKAD">
                            Akad
                        </option>

                        <option value="REALIZATION">
                            Realisasi
                        </option>

                        <option value="CANCELLED">
                            Batal
                        </option>
                    </select>

                    {/* Marketing */}

                    <select
                        value={selectedMarketing}
                        onChange={(e) =>
                            setSelectedMarketing(e.target.value)
                        }
                        className="w-full lg:w-48 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">
                            Semua Marketing
                        </option>

                        {marketingOptions.map((marketing) => (
                            <option
                                key={marketing}
                                value={marketing}
                            >
                                {marketing}
                            </option>
                        ))}
                    </select>

                </div>

                {/* Filter Footer */}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1">

                    <span className="text-[11px] text-slate-400">
                        Menampilkan{" "}
                        <span className="font-semibold text-slate-600">
                            {filteredLeads.length}
                        </span>{" "}
                        dari{" "}
                        <span className="font-semibold text-slate-600">
                            {leads.length}
                        </span>{" "}
                        lead
                    </span>

                    {hasActiveFilter && (
                        <button
                            type="button"
                            onClick={resetFilters}
                            className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            Reset Filter
                        </button>
                    )}

                </div>
            </div>

            {/* ==================================================
                Leads Table
            ================================================== */}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full text-left text-xs text-slate-600">

                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">

                            <tr>

                                <th className="p-4">
                                    Customer
                                </th>

                                <th className="p-4">
                                    Unit Minat
                                </th>

                                <th className="p-4">
                                    Sumber
                                </th>

                                <th className="p-4">
                                    Marketing
                                </th>

                                <th className="p-4">
                                    Status Lead
                                </th>

                                <th className="p-4">
                                    Tahap Sales
                                </th>

                                <th className="p-4">
                                    Follow Up
                                </th>

                                <th className="p-4 text-center">
                                    Aksi
                                </th>

                            </tr>

                        </thead>

                        <tbody className="divide-y divide-slate-100">

                            {filteredLeads.length > 0 ? (

                                filteredLeads.map((lead) => (

                                    <tr
                                        key={lead.id}
                                        className="hover:bg-slate-50/80 transition-colors"
                                    >

                                        {/* Customer */}

                                        <td className="p-4">

                                            <div>

                                                <Link
                                                    href={`/leads/${lead.id}`}
                                                    className="font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                                                >
                                                    {lead.customerName}
                                                </Link>

                                                <div className="flex items-center gap-2 mt-0.5">

                                                    <span className="text-[10px] text-slate-400">
                                                        {lead.customerPhone}
                                                    </span>

                                                    <span className="text-[9px] text-slate-300">
                                                        •
                                                    </span>

                                                    <span className="text-[10px] text-slate-400">
                                                        {lead.id}
                                                    </span>

                                                </div>

                                            </div>

                                        </td>

                                        {/* Unit */}

                                        <td className="p-4">

                                            {lead.unitCode ? (
                                                <span className="font-bold text-blue-600">
                                                    {lead.unitCode}
                                                </span>
                                            ) : (
                                                <span className="text-slate-400 italic">
                                                    Belum dipilih
                                                </span>
                                            )}

                                        </td>

                                        {/* Source */}

                                        <td className="p-4 text-slate-500">
                                            {lead.source}
                                        </td>

                                        {/* Marketing */}

                                        <td className="p-4">

                                            <span className="font-medium text-slate-700">
                                                {lead.marketing}
                                            </span>

                                        </td>

                                        {/* Status */}

                                        <td className="p-4">

                                            <span
                                                className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold ${getStatusBadge(
                                                    lead.status
                                                )}`}
                                            >
                                                {statusLabels[lead.status]}
                                            </span>

                                        </td>

                                        {/* Stage */}

                                        <td className="p-4">

                                            <span
                                                className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] font-semibold ${getStageBadge(
                                                    lead.stage
                                                )}`}
                                            >
                                                {stageLabels[lead.stage]}
                                            </span>

                                        </td>

                                        {/* Follow Up */}

                                        <td className="p-4">

                                            {lead.nextFollowUp ? (

                                                <div className="flex items-center gap-1.5 text-slate-600">

                                                    <Calendar className="w-3.5 h-3.5 text-slate-400" />

                                                    <span>
                                                        {formatDate(
                                                            lead.nextFollowUp
                                                        )}
                                                    </span>

                                                </div>

                                            ) : (

                                                <span className="text-slate-400">
                                                    —
                                                </span>

                                            )}

                                        </td>

                                        {/* Action */}

                                        <td className="p-4 text-center">

                                            <Link
                                                href={`/leads/${lead.id}`}
                                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg text-[11px] transition-colors"
                                            >

                                                <Eye className="w-3.5 h-3.5" />

                                                <span>
                                                    Detail
                                                </span>

                                            </Link>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan={8}
                                        className="p-12 text-center"
                                    >

                                        <div className="text-slate-400">

                                            <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />

                                            <p className="text-xs font-medium">
                                                Tidak ada lead yang ditemukan.
                                            </p>

                                            <p className="text-[11px] mt-1">
                                                Coba ubah kata pencarian atau filter.
                                            </p>

                                        </div>

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