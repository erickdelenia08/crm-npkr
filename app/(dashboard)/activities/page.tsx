"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
    Search,
    MessageCircle,
    Phone,
    MapPin,
    FileText,
    CalendarCheck,
    CreditCard,
    ClipboardCheck,
    ShieldCheck,
    Building2,
    Banknote,
    MoreHorizontal,
    ArrowRight,
    User,
    Clock3,
    Filter,
    X,
    Check,
} from "lucide-react"

// ============================================================
// Types
// ============================================================

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
    leadId: string
    customerName: string
    phone: string
    unitCode: string | null
    type: ActivityType
    description: string
    createdAt: string
    userName: string
}

// ============================================================
// Dummy Data
// ============================================================

const activities: Activity[] = [
    {
        id: "ACT-001",
        leadId: "L-101",
        customerName: "Budi Santoso",
        phone: "0821-1234-5678",
        unitCode: "G-05",
        type: "WHATSAPP",
        description:
            "Customer menanyakan simulasi KPR dan estimasi angsuran per bulan.",
        createdAt: "2026-09-24T10:30:00",
        userName: "Elin Marketing",
    },
    {
        id: "ACT-002",
        leadId: "L-102",
        customerName: "Dewi Puspitasari",
        phone: "0822-2345-6789",
        unitCode: "H-03",
        type: "VISIT",
        description:
            "Customer datang survei lokasi dan melihat area unit H-03.",
        createdAt: "2026-09-24T09:15:00",
        userName: "Elin Marketing",
    },
    {
        id: "ACT-003",
        leadId: "L-103",
        customerName: "Ahmad Dahlan",
        phone: "0831-3456-7890",
        unitCode: "G-01",
        type: "DOCUMENT",
        description:
            "Customer menyerahkan KTP dan KK untuk proses kelengkapan dokumen.",
        createdAt: "2026-09-23T15:20:00",
        userName: "Rian Marketing",
    },
    {
        id: "ACT-004",
        leadId: "L-101",
        customerName: "Budi Santoso",
        phone: "0821-1234-5678",
        unitCode: "G-05",
        type: "FOLLOW_UP",
        description:
            "Follow up setelah customer menerima simulasi KPR.",
        createdAt: "2026-09-23T11:00:00",
        userName: "Elin Marketing",
    },
    {
        id: "ACT-005",
        leadId: "L-104",
        customerName: "Siti Aminah",
        phone: "0812-4567-8901",
        unitCode: null,
        type: "CALL",
        description:
            "Customer masih mempertimbangkan pilihan tipe rumah dan belum menentukan unit.",
        createdAt: "2026-09-22T14:45:00",
        userName: "Rian Marketing",
    },
    {
        id: "ACT-006",
        leadId: "L-105",
        customerName: "Rudi Hartono",
        phone: "0857-5678-9012",
        unitCode: "H-08",
        type: "KPR",
        description:
            "Dokumen pengajuan KPR telah diteruskan untuk proses berikutnya.",
        createdAt: "2026-09-22T10:10:00",
        userName: "Elin Marketing",
    },
    {
        id: "ACT-007",
        leadId: "L-106",
        customerName: "Fajar Maulana",
        phone: "0819-6789-0123",
        unitCode: "G-10",
        type: "OTS",
        description:
            "Dilakukan pengecekan lokasi dan kondisi unit sebelum proses berikutnya.",
        createdAt: "2026-09-21T13:30:00",
        userName: "Rian Marketing",
    },
    {
        id: "ACT-008",
        leadId: "L-107",
        customerName: "Nur Aini",
        phone: "0823-7890-1234",
        unitCode: "H-02",
        type: "NOTE",
        description:
            "Customer meminta informasi tambahan mengenai biaya-biaya pembelian.",
        createdAt: "2026-09-20T16:00:00",
        userName: "Elin Marketing",
    },
]

// ============================================================
// Helpers
// ============================================================

const activityTypeConfig: Record<
    ActivityType,
    {
        label: string
        icon: typeof MessageCircle
        iconClass: string
        badgeClass: string
    }
> = {
    NOTE: {
        label: "Catatan",
        icon: FileText,
        iconClass: "text-slate-600",
        badgeClass: "bg-slate-100 text-slate-700",
    },
    CALL: {
        label: "Telepon",
        icon: Phone,
        iconClass: "text-blue-600",
        badgeClass: "bg-blue-50 text-blue-700",
    },
    WHATSAPP: {
        label: "WhatsApp",
        icon: MessageCircle,
        iconClass: "text-emerald-600",
        badgeClass: "bg-emerald-50 text-emerald-700",
    },
    VISIT: {
        label: "Visit",
        icon: MapPin,
        iconClass: "text-violet-600",
        badgeClass: "bg-violet-50 text-violet-700",
    },
    FOLLOW_UP: {
        label: "Follow Up",
        icon: CalendarCheck,
        iconClass: "text-amber-600",
        badgeClass: "bg-amber-50 text-amber-700",
    },
    DOCUMENT: {
        label: "Dokumen",
        icon: FileText,
        iconClass: "text-orange-600",
        badgeClass: "bg-orange-50 text-orange-700",
    },
    KPR: {
        label: "KPR",
        icon: CreditCard,
        iconClass: "text-cyan-600",
        badgeClass: "bg-cyan-50 text-cyan-700",
    },
    SLIK: {
        label: "SLIK",
        icon: ShieldCheck,
        iconClass: "text-indigo-600",
        badgeClass: "bg-indigo-50 text-indigo-700",
    },
    OTS: {
        label: "OTS",
        icon: ClipboardCheck,
        iconClass: "text-fuchsia-600",
        badgeClass: "bg-fuchsia-50 text-fuchsia-700",
    },
    AKAD: {
        label: "Akad",
        icon: Building2,
        iconClass: "text-teal-600",
        badgeClass: "bg-teal-50 text-teal-700",
    },
    REALIZATION: {
        label: "Realisasi",
        icon: Check,
        iconClass: "text-green-600",
        badgeClass: "bg-green-50 text-green-700",
    },
    PAYMENT: {
        label: "Pembayaran",
        icon: Banknote,
        iconClass: "text-lime-600",
        badgeClass: "bg-lime-50 text-lime-700",
    },
    OTHER: {
        label: "Lainnya",
        icon: MoreHorizontal,
        iconClass: "text-gray-600",
        badgeClass: "bg-gray-100 text-gray-700",
    },
}

function CheckIcon({
    className,
}: {
    className?: string
}) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}

function formatDateTime(value: string) {
    const date = new Date(value)

    return new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(date)
}

// ============================================================
// Page
// ============================================================

export default function ActivitiesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedType, setSelectedType] = useState<ActivityType | "">("")
    const [selectedUser, setSelectedUser] = useState("")

    const users = useMemo(() => {
        return Array.from(
            new Set(activities.map((activity) => activity.userName))
        )
    }, [])

    const filteredActivities = useMemo(() => {
        const search = searchTerm.trim().toLowerCase()

        return activities.filter((activity) => {
            const matchesSearch =
                !search ||
                activity.customerName.toLowerCase().includes(search) ||
                activity.phone.toLowerCase().includes(search) ||
                activity.description.toLowerCase().includes(search) ||
                activity.leadId.toLowerCase().includes(search) ||
                activity.userName.toLowerCase().includes(search) ||
                (activity.unitCode?.toLowerCase().includes(search) ?? false)

            const matchesType =
                !selectedType || activity.type === selectedType

            const matchesUser =
                !selectedUser || activity.userName === selectedUser

            return matchesSearch && matchesType && matchesUser
        })
    }, [searchTerm, selectedType, selectedUser])

    const hasFilter =
        searchTerm.trim() !== "" ||
        selectedType !== "" ||
        selectedUser !== ""

    const resetFilter = () => {
        setSearchTerm("")
        setSelectedType("")
        setSelectedUser("")
    }

    return (
        <div className="space-y-6">
            {/* ========================================================
                Header
            ======================================================== */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                    Aktivitas
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Riwayat aktivitas sales dan interaksi dengan customer.
                </p>
            </div>

            {/* ========================================================
                Summary
            ======================================================== */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-slate-500">
                                Total Aktivitas
                            </p>

                            <p className="mt-1 text-2xl font-bold text-slate-900">
                                {activities.length}
                            </p>
                        </div>

                        <div className="p-3 rounded-xl bg-blue-50">
                            <CalendarCheck className="w-5 h-5 text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-slate-500">
                                Aktivitas Hari Ini
                            </p>

                            <p className="mt-1 text-2xl font-bold text-slate-900">
                                {
                                    activities.filter((activity) =>
                                        activity.createdAt.startsWith(
                                            "2026-09-24"
                                        )
                                    ).length
                                }
                            </p>
                        </div>

                        <div className="p-3 rounded-xl bg-emerald-50">
                            <Clock3 className="w-5 h-5 text-emerald-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-slate-500">
                                Marketing Aktif
                            </p>

                            <p className="mt-1 text-2xl font-bold text-slate-900">
                                {users.length}
                            </p>
                        </div>

                        <div className="p-3 rounded-xl bg-violet-50">
                            <User className="w-5 h-5 text-violet-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ========================================================
                Filter
            ======================================================== */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
                <div className="flex flex-col lg:flex-row gap-3">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            placeholder="Cari customer, lead, unit, aktivitas..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        />
                    </div>

                    {/* Type */}
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />

                        <select
                            value={selectedType}
                            onChange={(event) =>
                                setSelectedType(
                                    event.target.value as ActivityType | ""
                                )
                            }
                            className="w-full lg:w-48 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            <option value="">Semua Jenis</option>

                            {Object.entries(activityTypeConfig).map(
                                ([value, config]) => (
                                    <option key={value} value={value}>
                                        {config.label}
                                    </option>
                                )
                            )}
                        </select>
                    </div>

                    {/* User */}
                    <select
                        value={selectedUser}
                        onChange={(event) =>
                            setSelectedUser(event.target.value)
                        }
                        className="w-full lg:w-48 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="">Semua Marketing</option>

                        {users.map((user) => (
                            <option key={user} value={user}>
                                {user}
                            </option>
                        ))}
                    </select>

                    {/* Reset */}
                    {hasFilter && (
                        <button
                            onClick={resetFilter}
                            className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors"
                        >
                            <X className="w-4 h-4" />
                            Reset
                        </button>
                    )}
                </div>
            </div>

            {/* ========================================================
                Result Info
            ======================================================== */}
            <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">
                    Menampilkan{" "}
                    <span className="font-semibold text-slate-700">
                        {filteredActivities.length}
                    </span>{" "}
                    aktivitas
                </p>
            </div>

            {/* ========================================================
                Activity List
            ======================================================== */}
            <div className="space-y-3">
                {filteredActivities.length > 0 ? (
                    filteredActivities.map((activity) => {
                        const config = activityTypeConfig[activity.type]
                        const Icon = config.icon

                        return (
                            <Link
                                key={activity.id}
                                href={`/leads/${activity.leadId}`}
                                className="block bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all"
                            >
                                <div className="p-5">
                                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                                        {/* Icon */}
                                        <div
                                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-slate-50 border border-slate-100`}
                                        >
                                            <Icon
                                                className={`w-5 h-5 ${config.iconClass}`}
                                            />
                                        </div>

                                        {/* Main */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span
                                                    className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${config.badgeClass}`}
                                                >
                                                    {config.label}
                                                </span>

                                                {activity.unitCode && (
                                                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600">
                                                        Unit{" "}
                                                        {activity.unitCode}
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="mt-2 text-sm font-bold text-slate-900">
                                                {activity.customerName}
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                                                {activity.description}
                                            </p>

                                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                                                <span className="flex items-center gap-1.5">
                                                    <Clock3 className="w-3.5 h-3.5" />
                                                    {formatDateTime(
                                                        activity.createdAt
                                                    )}
                                                </span>

                                                <span className="flex items-center gap-1.5">
                                                    <User className="w-3.5 h-3.5" />
                                                    {activity.userName}
                                                </span>

                                                <span>
                                                    Lead {activity.leadId}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <div className="flex items-center justify-end md:pt-1">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                                                Lihat Lead
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-slate-100 flex items-center justify-center">
                            <Search className="w-5 h-5 text-slate-400" />
                        </div>

                        <h3 className="mt-4 text-sm font-bold text-slate-900">
                            Aktivitas tidak ditemukan
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            Coba ubah kata pencarian atau filter yang digunakan.
                        </p>

                        {hasFilter && (
                            <button
                                onClick={resetFilter}
                                className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                            >
                                Reset Filter
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}