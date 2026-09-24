"use client"

import { use, useMemo, useState } from "react"
import Link from "next/link"
import {
    ArrowLeft,
    User,
    Home,
    Clock,
    Send,
    Calendar,
    MessageSquare,
    Phone,
    MapPin,
    FileText,
    Building,
    Package,
    UserRound,
} from "lucide-react"

// ============================================================
// Types
// ============================================================

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

type ActivityType =
    | "NOTE"
    | "CALL"
    | "WHATSAPP"
    | "VISIT"
    | "FOLLOW_UP"
    | "DOCUMENT"
    | "KPR"
    | "SLIK"
    | "OTS"
    | "AKAD"
    | "REALIZATION"
    | "PAYMENT"
    | "OTHER"

type Activity = {
    id: string
    type: ActivityType
    date: string
    author: string
    notes: string
}

type LeadDetail = {
    id: string

    status: LeadStatus
    stage: LeadStage

    source: string
    nextFollowUp: string | null
    createdAt: string

    customer: {
        id: string
        name: string
        phone: string
    }

    project: {
        id: string
        name: string
    }

    productType: {
        id: string
        name: string
        category: string
    }

    unit?: {
        id: string
        code: string
        price: string
    } | null

    marketing: {
        id: string
        name: string
    }
}

// ============================================================
// Labels
// ============================================================

const statusLabels: Record<LeadStatus, string> = {
    NEW: "New",
    FOLLOW_UP: "Follow Up",
    PROSPECT: "Prospect",
    BOOKED: "Booked",
    CLOSED: "Closed (Won)",
    LOST: "Lost",
}

const stageLabels: Record<LeadStage, string> = {
    INQUIRY: "Inquiry",
    VISIT: "Visit / Survei",
    FOLLOW_UP: "Follow Up",
    DOCUMENTATION: "Dokumentasi",
    KPR: "Pengajuan KPR",
    SLIK: "Cek SLIK",
    OTS: "OTS",
    AKAD: "Akad",
    REALIZATION: "Realisasi",
    CANCELLED: "Dibatalkan",
}

const activityTypeLabels: Record<ActivityType, string> = {
    NOTE: "Catatan",
    CALL: "Telepon",
    WHATSAPP: "WhatsApp",
    VISIT: "Survei Lokasi",
    FOLLOW_UP: "Follow Up",
    DOCUMENT: "Berkas / Dokumen",
    KPR: "KPR",
    SLIK: "SLIK",
    OTS: "OTS",
    AKAD: "Akad",
    REALIZATION: "Realisasi",
    PAYMENT: "Pembayaran",
    OTHER: "Lainnya",
}

// ============================================================
// Badge Styles
// ============================================================

const getStatusBadge = (status: LeadStatus) => {
    const styles: Record<LeadStatus, string> = {
        NEW: "bg-blue-50 text-blue-700 border-blue-200",
        FOLLOW_UP: "bg-amber-50 text-amber-700 border-amber-200",
        PROSPECT: "bg-purple-50 text-purple-700 border-purple-200",
        BOOKED: "bg-violet-50 text-violet-700 border-violet-200",
        CLOSED: "bg-emerald-50 text-emerald-700 border-emerald-200",
        LOST: "bg-rose-50 text-rose-700 border-rose-200",
    }

    return (
        styles[status] ||
        "bg-slate-100 text-slate-700 border-slate-200"
    )
}

const getStageBadge = (stage: LeadStage) => {
    const styles: Record<LeadStage, string> = {
        INQUIRY:
            "bg-slate-50 text-slate-600 border-slate-200",

        VISIT:
            "bg-blue-50 text-blue-700 border-blue-200",

        FOLLOW_UP:
            "bg-amber-50 text-amber-700 border-amber-200",

        DOCUMENTATION:
            "bg-purple-50 text-purple-700 border-purple-200",

        KPR:
            "bg-cyan-50 text-cyan-700 border-cyan-200",

        SLIK:
            "bg-orange-50 text-orange-700 border-orange-200",

        OTS:
            "bg-indigo-50 text-indigo-700 border-indigo-200",

        AKAD:
            "bg-emerald-50 text-emerald-700 border-emerald-200",

        REALIZATION:
            "bg-green-50 text-green-700 border-green-200",

        CANCELLED:
            "bg-rose-50 text-rose-700 border-rose-200",
    }

    return (
        styles[stage] ||
        "bg-slate-50 text-slate-600 border-slate-200"
    )
}

// ============================================================
// Activity Icon
// ============================================================

const ActivityIcon = ({
    type,
}: {
    type: ActivityType
}) => {
    const className = "w-3.5 h-3.5"

    switch (type) {
        case "CALL":
            return <Phone className={className} />

        case "WHATSAPP":
            return (
                <MessageSquare className={className} />
            )

        case "VISIT":
        case "OTS":
            return <MapPin className={className} />

        case "DOCUMENT":
            return <FileText className={className} />

        case "KPR":
        case "SLIK":
            return <FileText className={className} />

        case "AKAD":
        case "REALIZATION":
            return <Building className={className} />

        default:
            return <Clock className={className} />
    }
}

// ============================================================
// Date Helper
// ============================================================

const formatDate = (dateStr: string) => {
    if (!dateStr) return "—"

    const [year, month, day] =
        dateStr.split("-").map(Number)

    if (!year || !month || !day) {
        return dateStr
    }

    return new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(
        new Date(year, month - 1, day)
    )
}

// ============================================================
// Page
// ============================================================

export default function LeadDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const resolvedParams = use(params)

    const leadId = resolvedParams.id

    // ========================================================
    // Dummy Lead
    // ========================================================

    const initialLead =
        useMemo<LeadDetail>(() => {
            return {
                id: leadId,

                status: "PROSPECT",

                stage: "SLIK",

                source: "WhatsApp",

                nextFollowUp:
                    "2026-09-28",

                createdAt:
                    "2026-09-24",

                customer: {
                    id: "CUST-001",
                    name: "Budi Santoso",
                    phone: "081234567890",
                },

                project: {
                    id: "PROJECT-001",
                    name: "New Puri Kencana",
                },

                productType: {
                    id: "TYPE-001",
                    name: "Subsidi 30/60",
                    category: "Subsidi",
                },

                unit: {
                    id: "G-05",
                    code: "G-05",
                    price: "Rp 180.000.000",
                },

                marketing: {
                    id: "USER-001",
                    name: "Elin Marketing",
                },
            }
        }, [leadId])

    // ========================================================
    // Lead State
    // ========================================================

    const [leadStatus, setLeadStatus] =
        useState<LeadStatus>(
            initialLead.status
        )

    const [salesStage, setSalesStage] =
        useState<LeadStage>(
            initialLead.stage
        )

    const [nextFollowUp, setNextFollowUp] =
        useState(
            initialLead.nextFollowUp || ""
        )

    // ========================================================
    // Activity Form
    // ========================================================

    const [activityType, setActivityType] =
        useState<ActivityType>("FOLLOW_UP")

    const [newLogNote, setNewLogNote] =
        useState("")

    // Optional Lead Update
    const [changeStatus, setChangeStatus] =
        useState(false)

    const [changeStage, setChangeStage] =
        useState(false)

    const [changeFollowUp, setChangeFollowUp] =
        useState(false)

    const [activityNewStatus, setActivityNewStatus] =
        useState<LeadStatus>(leadStatus)

    const [activityNewStage, setActivityNewStage] =
        useState<LeadStage>(salesStage)

    const [activityNewFollowUp, setActivityNewFollowUp] =
        useState(nextFollowUp)

    // ========================================================
    // Dummy Activities
    // ========================================================

    const [activities, setActivities] =
        useState<Activity[]>([
            {
                id: "1",

                type: "DOCUMENT",

                date: "2026-09-24",

                author: "Elin Marketing",

                notes:
                    "Konfirmasi dokumen pendukung KPR BRI. Pak Budi akan mengirim slip gaji besok.",
            },

            {
                id: "2",

                type: "VISIT",

                date: "2026-09-18",

                author: "Elin Marketing",

                notes:
                    "Customer selesai melakukan survei lokasi untuk unit G-05.",
            },
        ])

    // ========================================================
    // Add Activity
    // ========================================================

    const handleAddActivity = (
        e: React.FormEvent
    ) => {
        e.preventDefault()

        if (!newLogNote.trim()) {
            alert(
                "Catatan aktivitas wajib diisi."
            )

            return
        }

        // ---------------------------------------------
        // Simpan Activity
        // ---------------------------------------------

        const newActivity: Activity = {
            id: Date.now().toString(),

            type: activityType,

            date: new Date()
                .toISOString()
                .split("T")[0],

            // Sementara dummy.
            // Nanti ambil dari logged-in user.
            author:
                initialLead.marketing.name,

            notes: newLogNote.trim(),
        }

        setActivities((prev) => [
            newActivity,
            ...prev,
        ])

        // ---------------------------------------------
        // Update Lead jika dicentang
        // ---------------------------------------------

        if (changeStatus) {
            setLeadStatus(
                activityNewStatus
            )
        }

        if (changeStage) {
            setSalesStage(
                activityNewStage
            )
        }

        if (changeFollowUp) {
            setNextFollowUp(
                activityNewFollowUp
            )
        }

        // ---------------------------------------------
        // Reset
        // ---------------------------------------------

        setNewLogNote("")

        setChangeStatus(false)
        setChangeStage(false)
        setChangeFollowUp(false)

        alert(
            "Aktivitas berhasil ditambahkan."
        )
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6">

            {/* ==================================================
                HEADER
            ================================================== */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <div className="flex items-center gap-3">

                    <Link
                        href="/leads"
                        className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>

                    <div>

                        <div className="flex items-center gap-2">

                            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                                Lead #{initialLead.id}
                            </h1>

                            <span
                                className={`px-2.5 py-1 rounded-full border text-[10px] font-bold ${getStatusBadge(
                                    leadStatus
                                )}`}
                            >
                                {
                                    statusLabels[
                                    leadStatus
                                    ]
                                }
                            </span>

                        </div>

                        <p className="text-xs text-slate-500 mt-0.5">
                            Marketing:{" "}
                            {
                                initialLead
                                    .marketing
                                    .name
                            }{" "}
                            • Dibuat{" "}
                            {formatDate(
                                initialLead.createdAt
                            )}
                        </p>

                    </div>

                </div>

            </div>


            {/* ==================================================
                MAIN GRID
            ================================================== */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* ==================================================
                    LEFT
                ================================================== */}

                <div className="space-y-4">

                    {/* Lead Information */}

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">

                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Informasi Lead
                        </h2>


                        {/* Customer */}

                        <Link
                            href={`/customers/${initialLead.customer.id}`}
                            className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition-colors"
                        >

                            <User className="w-5 h-5 text-blue-600 shrink-0" />

                            <div>

                                <p className="text-xs font-bold text-slate-900">
                                    {
                                        initialLead
                                            .customer
                                            .name
                                    }
                                </p>

                                <p className="text-[11px] text-slate-500">
                                    {
                                        initialLead
                                            .customer
                                            .phone
                                    }
                                </p>

                            </div>

                        </Link>


                        {/* Project */}

                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">

                            <Building className="w-5 h-5 text-slate-600 shrink-0" />

                            <div>

                                <p className="text-xs font-bold text-slate-900">
                                    {
                                        initialLead
                                            .project
                                            .name
                                    }
                                </p>

                                <p className="text-[11px] text-slate-500">
                                    {
                                        initialLead
                                            .productType
                                            .name
                                    }{" "}
                                    (
                                    {
                                        initialLead
                                            .productType
                                            .category
                                    }
                                    )
                                </p>

                            </div>

                        </div>


                        {/* Unit */}

                        {initialLead.unit ? (
                            <Link
                                href={`/units/${initialLead.unit.id}`}
                                className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl transition-colors"
                            >

                                <Home className="w-5 h-5 text-emerald-600 shrink-0" />

                                <div>

                                    <p className="text-xs font-bold text-slate-900">
                                        Unit{" "}
                                        {
                                            initialLead
                                                .unit
                                                .code
                                        }
                                    </p>

                                    <p className="text-[11px] text-slate-500">
                                        {
                                            initialLead
                                                .unit
                                                .price
                                        }
                                    </p>

                                </div>

                            </Link>
                        ) : (
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">

                                <Home className="w-5 h-5 text-slate-400 shrink-0" />

                                <div>

                                    <p className="text-xs font-bold text-slate-500">
                                        Unit Belum Dipilih
                                    </p>

                                    <p className="text-[11px] text-slate-400">
                                        Customer baru menentukan tipe rumah
                                    </p>

                                </div>

                            </div>
                        )}


                        {/* Source */}

                        <div className="pt-3 border-t border-slate-100">

                            <p className="text-[10px] text-slate-400 uppercase font-bold">
                                Sumber Lead
                            </p>

                            <p className="text-xs font-semibold text-slate-700 mt-1">
                                {
                                    initialLead.source
                                }
                            </p>

                        </div>


                        {/* PIC */}

                        <div>

                            <p className="text-[10px] text-slate-400 uppercase font-bold">
                                PIC Marketing
                            </p>

                            <p className="text-xs font-semibold text-slate-700 mt-1">
                                {
                                    initialLead
                                        .marketing
                                        .name
                                }
                            </p>

                        </div>

                    </div>


                    {/* ==================================================
                        CURRENT LEAD STATE
                    ================================================== */}

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">

                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Kondisi Lead Saat Ini
                        </h2>


                        {/* Status */}

                        <div>

                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                                Status
                            </p>

                            <span
                                className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold ${getStatusBadge(
                                    leadStatus
                                )}`}
                            >
                                {
                                    statusLabels[
                                    leadStatus
                                    ]
                                }
                            </span>

                        </div>


                        {/* Stage */}

                        <div>

                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                                Sales Stage
                            </p>

                            <span
                                className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold ${getStageBadge(
                                    salesStage
                                )}`}
                            >
                                {
                                    stageLabels[
                                    salesStage
                                    ]
                                }
                            </span>

                        </div>


                        {/* Next Follow Up */}

                        <div>

                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                                Next Follow Up
                            </p>

                            <div className="flex items-center gap-2">

                                <Calendar className="w-4 h-4 text-slate-400" />

                                <span className="text-xs font-semibold text-slate-700">
                                    {nextFollowUp
                                        ? formatDate(
                                            nextFollowUp
                                        )
                                        : "Belum dijadwalkan"}
                                </span>

                            </div>

                        </div>


                        {/* Edit */}

                        <button
                            type="button"
                            onClick={() =>
                                alert(
                                    "Nanti buka modal Edit Lead."
                                )
                            }
                            className="w-full px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
                        >
                            Edit Kondisi Lead
                        </button>

                    </div>

                </div>


                {/* ==================================================
                    RIGHT
                ================================================== */}

                <div className="lg:col-span-2 space-y-6">

                    {/* ==================================================
                        ADD ACTIVITY
                    ================================================== */}

                    <form
                        onSubmit={
                            handleAddActivity
                        }
                        className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4"
                    >

                        <h3 className="text-xs font-bold text-slate-800 flex items-center gap-2">

                            <MessageSquare className="w-4 h-4 text-blue-600" />

                            Tambah Aktivitas

                        </h3>


                        {/* Activity Type */}

                        <div>

                            <label className="block text-[11px] font-bold text-slate-600 mb-1">
                                Jenis Aktivitas
                            </label>

                            <select
                                value={
                                    activityType
                                }
                                onChange={(e) =>
                                    setActivityType(
                                        e.target.value as ActivityType
                                    )
                                }
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >

                                {Object.entries(
                                    activityTypeLabels
                                ).map(
                                    ([
                                        key,
                                        label,
                                    ]) => (
                                        <option
                                            key={
                                                key
                                            }
                                            value={
                                                key
                                            }
                                        >
                                            {label}
                                        </option>
                                    )
                                )}

                            </select>

                        </div>


                        {/* Notes */}

                        <div>

                            <label className="block text-[11px] font-bold text-slate-600 mb-1">
                                Catatan Aktivitas
                            </label>

                            <textarea
                                rows={3}
                                value={
                                    newLogNote
                                }
                                onChange={(e) =>
                                    setNewLogNote(
                                        e.target.value
                                    )
                                }
                                placeholder="Tuliskan hasil komunikasi, progres, atau informasi penting dari aktivitas ini..."
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                            />

                        </div>


                        {/* ==================================================
                            OPTIONAL LEAD UPDATE
                        ================================================== */}

                        <div className="border-t border-slate-100 pt-4 space-y-3">

                            <div>

                                <p className="text-[11px] font-bold text-slate-700">
                                    Perbarui Lead
                                    <span className="font-normal text-slate-400 ml-1">
                                        (opsional)
                                    </span>
                                </p>

                                <p className="text-[10px] text-slate-400 mt-0.5">
                                    Tidak perlu diubah setiap kali menambahkan aktivitas.
                                </p>

                            </div>


                            {/* Status */}

                            <label className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer">

                                <input
                                    type="checkbox"
                                    checked={
                                        changeStatus
                                    }
                                    onChange={(e) =>
                                        setChangeStatus(
                                            e.target.checked
                                        )
                                    }
                                    className="mt-0.5"
                                />

                                <div className="flex-1">

                                    <p className="text-[11px] font-semibold text-slate-700">
                                        Ubah Status Lead
                                    </p>

                                    {changeStatus && (
                                        <select
                                            value={
                                                activityNewStatus
                                            }
                                            onChange={(e) =>
                                                setActivityNewStatus(
                                                    e.target.value as LeadStatus
                                                )
                                            }
                                            className="mt-2 w-full p-2.5 bg-white border border-slate-200 rounded-lg text-xs"
                                        >
                                            {Object.entries(
                                                statusLabels
                                            ).map(
                                                ([
                                                    key,
                                                    label,
                                                ]) => (
                                                    <option
                                                        key={
                                                            key
                                                        }
                                                        value={
                                                            key
                                                        }
                                                    >
                                                        {
                                                            label
                                                        }
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    )}

                                </div>

                            </label>


                            {/* Stage */}

                            <label className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer">

                                <input
                                    type="checkbox"
                                    checked={
                                        changeStage
                                    }
                                    onChange={(e) =>
                                        setChangeStage(
                                            e.target.checked
                                        )
                                    }
                                    className="mt-0.5"
                                />

                                <div className="flex-1">

                                    <p className="text-[11px] font-semibold text-slate-700">
                                        Ubah Sales Stage
                                    </p>

                                    {changeStage && (
                                        <select
                                            value={
                                                activityNewStage
                                            }
                                            onChange={(e) =>
                                                setActivityNewStage(
                                                    e.target.value as LeadStage
                                                )
                                            }
                                            className="mt-2 w-full p-2.5 bg-white border border-slate-200 rounded-lg text-xs"
                                        >
                                            {Object.entries(
                                                stageLabels
                                            ).map(
                                                ([
                                                    key,
                                                    label,
                                                ]) => (
                                                    <option
                                                        key={
                                                            key
                                                        }
                                                        value={
                                                            key
                                                        }
                                                    >
                                                        {
                                                            label
                                                        }
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    )}

                                </div>

                            </label>


                            {/* Follow Up */}

                            <label className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer">

                                <input
                                    type="checkbox"
                                    checked={
                                        changeFollowUp
                                    }
                                    onChange={(e) =>
                                        setChangeFollowUp(
                                            e.target.checked
                                        )
                                    }
                                    className="mt-0.5"
                                />

                                <div className="flex-1">

                                    <p className="text-[11px] font-semibold text-slate-700">
                                        Atur Next Follow Up
                                    </p>

                                    {changeFollowUp && (
                                        <input
                                            type="date"
                                            value={
                                                activityNewFollowUp
                                            }
                                            onChange={(e) =>
                                                setActivityNewFollowUp(
                                                    e.target.value
                                                )
                                            }
                                            className="mt-2 w-full p-2.5 bg-white border border-slate-200 rounded-lg text-xs"
                                        />
                                    )}

                                </div>

                            </label>

                        </div>


                        {/* Submit */}

                        <div className="flex justify-end pt-2">

                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-1.5 transition-all"
                            >

                                <Send className="w-3.5 h-3.5" />

                                Simpan Aktivitas

                            </button>

                        </div>

                    </form>


                    {/* ==================================================
                        ACTIVITY TIMELINE
                    ================================================== */}

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">

                        <div className="flex items-center justify-between mb-5">

                            <div>

                                <h3 className="text-xs font-bold text-slate-800 flex items-center gap-2">

                                    <Clock className="w-4 h-4 text-amber-500" />

                                    Histori Aktivitas

                                </h3>

                                <p className="text-[10px] text-slate-400 mt-1">
                                    Riwayat interaksi dan kegiatan dalam Lead.
                                </p>

                            </div>

                            <span className="text-[10px] font-semibold text-slate-400">
                                {
                                    activities.length
                                }{" "}
                                aktivitas
                            </span>

                        </div>


                        <div className="relative pl-7 border-l-2 border-slate-100 space-y-7">

                            {activities.length ===
                                0 ? (
                                <div className="py-8 text-center">

                                    <Clock className="w-8 h-8 text-slate-300 mx-auto mb-2" />

                                    <p className="text-xs font-semibold text-slate-500">
                                        Belum ada aktivitas
                                    </p>

                                    <p className="text-[10px] text-slate-400 mt-1">
                                        Aktivitas pertama akan muncul di sini.
                                    </p>

                                </div>
                            ) : (
                                activities.map(
                                    (activity) => (
                                        <div
                                            key={
                                                activity.id
                                            }
                                            className="relative space-y-2"
                                        >

                                            <div className="absolute -left-[35px] top-0.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white flex items-center justify-center text-white">

                                                <ActivityIcon
                                                    type={
                                                        activity.type
                                                    }
                                                />

                                            </div>


                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">

                                                <div className="flex items-center gap-2">

                                                    <span className="font-bold text-xs text-slate-900">
                                                        {
                                                            activity.author
                                                        }
                                                    </span>

                                                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-semibold">

                                                        {
                                                            activityTypeLabels[
                                                            activity.type
                                                            ]
                                                        }

                                                    </span>

                                                </div>

                                                <span className="text-[10px] text-slate-400">
                                                    {formatDate(
                                                        activity.date
                                                    )}
                                                </span>

                                            </div>


                                            <p className="text-xs leading-relaxed text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">

                                                {
                                                    activity.notes
                                                }

                                            </p>

                                        </div>
                                    )
                                )
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}