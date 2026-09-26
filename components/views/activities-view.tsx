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

const activityTypeConfig: Record<
    string,
    {
        label: string
        icon: React.ElementType
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

interface ActivitiesViewProps {
    initialActivities: Activity[]
}

export function ActivitiesView({ initialActivities }: ActivitiesViewProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedType, setSelectedType] = useState<ActivityType | "">("")
    const [selectedUser, setSelectedUser] = useState("")

    const users = useMemo(() => {
        return Array.from(
            new Set(initialActivities.map((activity) => activity.userName))
        ).sort()
    }, [initialActivities])

    const filteredActivities = useMemo(() => {
        const search = searchTerm.trim().toLowerCase()

        return initialActivities.filter((activity) => {
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
    }, [initialActivities, searchTerm, selectedType, selectedUser])

    const hasFilter =
        searchTerm.trim() !== "" ||
        selectedType !== "" ||
        selectedUser !== ""

    const resetFilter = () => {
        setSearchTerm("")
        setSelectedType("")
        setSelectedUser("")
    }
    
    // Get today's date in local time ISO format to match activities
    const todayStr = new Date().toLocaleDateString('en-CA')

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                    Aktivitas
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Riwayat aktivitas sales dan interaksi dengan customer.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-slate-500">
                                Total Aktivitas
                            </p>

                            <p className="mt-1 text-2xl font-bold text-slate-900">
                                {initialActivities.length}
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
                                    initialActivities.filter((activity) =>
                                        activity.createdAt.startsWith(todayStr)
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

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
                <div className="flex flex-col lg:flex-row gap-3">
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

            <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">
                    Menampilkan{" "}
                    <span className="font-semibold text-slate-700">
                        {filteredActivities.length}
                    </span>{" "}
                    aktivitas
                </p>
            </div>

            <div className="space-y-3">
                {filteredActivities.length > 0 ? (
                    filteredActivities.map((activity) => {
                        const config = activityTypeConfig[activity.type] || activityTypeConfig["OTHER"]
                        const Icon = config.icon

                        return (
                            <Link
                                key={activity.id}
                                href={`/leads/${activity.leadId}`}
                                className="block bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all"
                            >
                                <div className="p-5">
                                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                                        <div
                                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-slate-50 border border-slate-100`}
                                        >
                                            <Icon
                                                className={`w-5 h-5 ${config.iconClass}`}
                                            />
                                        </div>

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
