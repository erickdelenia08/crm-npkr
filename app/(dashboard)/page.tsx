"use client"

import {
    Home,
    CheckCircle2,
    Clock,
    UserPlus,
    TrendingUp,
    Building,
    ArrowRight,
} from "lucide-react"

export default function DashboardPage() {
    // Dummy Stat Data
    const unitStats = [
        { label: "Total Unit", value: "72", color: "bg-slate-900 text-white", icon: Home },
        { label: "Available", value: "31", color: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: CheckCircle2 },
        { label: "Hold / Booking", value: "12", color: "bg-amber-50 text-amber-700 border-amber-200", icon: Clock },
        { label: "Terjual / Akad", value: "29", color: "bg-blue-50 text-blue-700 border-blue-200", icon: TrendingUp },
    ]

    const constructionProgress = [
        { status: "Belum Dibangun", count: 10, percent: 14 },
        { status: "Pondasi & Struktur", count: 15, percent: 21 },
        { status: "Finishing", count: 11, percent: 15 },
        { status: "Selesai", count: 36, percent: 50 },
    ]

    const recentFollowUps = [
        { name: "Pak Budi Santoso", unit: "G-05", task: "Follow Up Berkasa KPR Bank BRI", time: "Hari Ini" },
        { name: "Bu Ani Wijaya", unit: "H-03", task: "Jadwal Konfirmasi Akad", time: "Hari Ini" },
        { name: "Bpk. Dedi Supriadi", unit: "G-12", task: "Kunjungan Lokasi / Site Visit", time: "Besok" },
    ]

    return (
        <div className="space-y-8">
            {/* Header Welcome */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Dashboard Overview
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Ringkasan status unit perumahan dan aktivitas CRM marketing.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md transition-all">
                        + Tambah Lead Baru
                    </button>
                </div>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {unitStats.map((stat, i) => (
                    <div
                        key={i}
                        className={`p-5 rounded-2xl border shadow-sm flex items-center justify-between ${stat.color}`}
                    >
                        <div>
                            <p className="text-xs font-medium opacity-80">{stat.label}</p>
                            <p className="text-2xl font-bold mt-1 tracking-tight">{stat.value}</p>
                        </div>
                        <div className="p-3 bg-white/20 rounded-xl">
                            <stat.icon className="w-6 h-6" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Grid Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Construction Visualizer Progress (2 Columns) */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                <Building className="w-5 h-5 text-blue-600" />
                                Progress Pembangunan Unit
                            </h2>
                            <p className="text-xs text-slate-500 mt-0.5">
                                Breakdown status fisik konstruksi di lapangan
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {constructionProgress.map((item, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="flex justify-between text-xs font-semibold text-slate-700">
                                    <span>{item.status}</span>
                                    <span className="text-slate-500">
                                        {item.count} Unit ({item.percent}%)
                                    </span>
                                </div>
                                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                                        style={{ width: `${item.percent}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Task Follow-Up Hari Ini (1 Column) */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-amber-500" />
                                Follow Up Hari Ini
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {recentFollowUps.map((fu, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1 hover:border-slate-200 transition-colors"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-800">
                                            {fu.name}
                                        </span>
                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 font-semibold text-[10px] rounded">
                                            {fu.unit}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-600">{fu.task}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="mt-6 w-full py-2.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center gap-1.5 transition-colors">
                        <span>Lihat Semua Lead</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}