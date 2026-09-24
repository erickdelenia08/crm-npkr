"use client"

import Link from "next/link"
import {
    Home,
    CheckCircle2,
    Clock,
    TrendingUp,
    Users,
    UserCheck,
    CalendarClock,
    Activity,
    ArrowUpRight,
    MessageSquare,
    MapPin,
    Plus,
} from "lucide-react"

export default function DashboardPage() {
    // Data Inventory Unit
    const unitStats = [
        { label: "Total Unit", value: "72", desc: "Keseluruhan unit" },
        { label: "Available", value: "31", status: "emerald" },
        { label: "Hold / Booking", value: "12", status: "amber" },
        { label: "Terjual / Akad", value: "29", status: "blue" },
    ]

    // Data CRM
    const crmStats = [
        { label: "Total Lead", value: "128", change: "+12% bln ini" },
        { label: "Lead Aktif", value: "47", change: "Perlu ditindak" },
        { label: "Follow Up", value: "12", change: "Jadwal hari ini" },
        { label: "Closed", value: "29", change: "Konversi 22.6%" },
    ]

    const recentFollowUps = [
        {
            name: "Pak Budi Santoso",
            unit: "G-05",
            task: "Follow Up Berkas KPR Bank BRI",
            time: "Hari Ini",
            urgent: true,
        },
        {
            name: "Bu Ani Wijaya",
            unit: "H-03",
            task: "Jadwal Konfirmasi Akad",
            time: "Hari Ini",
            urgent: false,
        },
        {
            name: "Bpk. Dedi Supriadi",
            unit: "G-12",
            task: "Kunjungan Lokasi / Site Visit",
            time: "Besok",
            urgent: false,
        },
    ]

    const recentActivities = [
        {
            time: "10:32",
            user: "Marketing",
            type: "WhatsApp",
            description: "Follow up Pak Budi Santoso",
            icon: MessageSquare,
        },
        {
            time: "09:45",
            user: "Marketing",
            type: "Site Visit",
            description: "Kunjungan Dedi Supriadi",
            icon: MapPin,
        },
        {
            time: "09:20",
            user: "Digital Marketing",
            type: "Lead Baru",
            description: "Lead baru dari Instagram",
            icon: Activity,
        },
        {
            time: "08:50",
            user: "Marketing",
            type: "Follow Up",
            description: "Follow up Bu Ani Wijaya",
            icon: MessageSquare,
        },
    ]

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-10">
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div>
                    <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                        Overview
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Pantau pergerakan inventory unit dan performa CRM secara realtime.
                    </p>
                </div>

                <Link
                    href="/leads/new"
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
                >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Lead</span>
                </Link>
            </div>

            {/* Top Metric Strip: Unit Overview */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-slate-500" />
                        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                            Inventory Unit
                        </h2>
                    </div>
                    <Link
                        href="/units"
                        className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
                    >
                        <span>Kelola Unit</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
                    {unitStats.map((stat, i) => (
                        <div key={i} className="p-5">
                            <span className="text-xs text-slate-500 font-medium">
                                {stat.label}
                            </span>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-2xl font-bold text-slate-900 tracking-tight">
                                    {stat.value}
                                </span>
                                {stat.status === "emerald" && (
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700">
                                        Tersedia
                                    </span>
                                )}
                                {stat.status === "amber" && (
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700">
                                        Locked
                                    </span>
                                )}
                                {stat.status === "blue" && (
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700">
                                        Akad
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CRM Pipeline Stats */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Performa CRM & Leads
                    </h2>
                    <Link
                        href="/leads"
                        className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
                    >
                        <span>Lihat Semua Lead</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {crmStats.map((stat, i) => (
                        <div
                            key={i}
                            className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors"
                        >
                            <p className="text-xs font-medium text-slate-500">
                                {stat.label}
                            </p>
                            <p className="text-xl font-bold text-slate-900 tracking-tight mt-1">
                                {stat.value}
                            </p>
                            <p className="text-[11px] text-slate-400 mt-1 font-normal">
                                {stat.change}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Grid: Follow Ups & Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Follow Up Agenda (7 Cols) */}
                <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/80 shadow-xs flex flex-col">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CalendarClock className="w-4 h-4 text-slate-500" />
                            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                                Agenda Follow Up
                            </h2>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">
                            {recentFollowUps.length} Tugas
                        </span>
                    </div>

                    <div className="p-2 flex-1 space-y-1">
                        {recentFollowUps.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-3.5 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between gap-4 border border-transparent hover:border-slate-100"
                            >
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <p className="text-xs font-semibold text-slate-900 truncate">
                                            {item.name}
                                        </p>
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-600 shrink-0">
                                            Unit {item.unit}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1 truncate">
                                        {item.task}
                                    </p>
                                </div>

                                <div className="text-right shrink-0">
                                    <span
                                        className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded ${item.urgent
                                            ? "bg-amber-50 text-amber-700 border border-amber-200/60"
                                            : "bg-slate-100 text-slate-600"
                                            }`}
                                    >
                                        {item.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-3 border-t border-slate-100 bg-slate-50/50 rounded-b-xl text-center">
                        <Link
                            href="/leads"
                            className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            Buka Kanban CRM →
                        </Link>
                    </div>
                </div>

                {/* Activity Feed (5 Cols) */}
                <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/80 shadow-xs flex flex-col">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-slate-500" />
                            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                                Aktivitas Tim
                            </h2>
                        </div>
                        <Link
                            href="/activities"
                            className="text-xs font-medium text-slate-400 hover:text-slate-700"
                        >
                            Lihat Log
                        </Link>
                    </div>

                    <div className="p-4 flex-1">
                        <div className="relative pl-4 space-y-6 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                            {recentActivities.map((act, i) => {
                                const IconComponent = act.icon
                                return (
                                    <div key={i} className="relative flex items-start justify-between gap-3 text-xs">
                                        <div className="absolute -left-[21px] top-0.5 bg-white p-0.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white" />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="font-medium text-slate-800 leading-tight">
                                                {act.description}
                                            </p>
                                            <p className="text-[11px] text-slate-400 mt-1">
                                                {act.user} • <span className="text-slate-500">{act.type}</span>
                                            </p>
                                        </div>

                                        <span className="text-[10px] font-mono text-slate-400 shrink-0">
                                            {act.time}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}