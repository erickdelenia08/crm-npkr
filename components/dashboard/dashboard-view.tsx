"use client"

import Link from "next/link"
import {
    Home,
    Users,
    CalendarClock,
    Activity,
    ArrowUpRight,
    MessageSquare,
    MapPin,
    Plus,
    Building2,
    CheckCircle2,
    Clock3,
    AlertCircle,
    CalendarDays,
    ChevronRight,
    TrendingUp,
    FileText,
    Megaphone,
    UserCheck,
    ClipboardCheck,
} from "lucide-react"

import { getCurrentUser, getDashboardData } from "@/actions/dashboard.action"

type CurrentUser = Awaited<ReturnType<typeof getCurrentUser>>
type DashboardData = Awaited<ReturnType<typeof getDashboardData>>

export interface DashboardViewProps {
    role: CurrentUser["role"]
    currentUser: CurrentUser
    inventory: DashboardData["inventory"]
    managementStats: DashboardData["managementStats"]
    marketingStats: DashboardData["marketingStats"]
    digitalMarketingStats: DashboardData["digitalMarketingStats"]
    adminStats: DashboardData["adminStats"]
    pipeline: DashboardData["pipeline"]
    followUps: DashboardData["followUps"]
    activities: DashboardData["activities"]
}

export function DashboardView({
    role,
    currentUser,
    inventory,
    managementStats,
    marketingStats,
    digitalMarketingStats,
    adminStats,
    pipeline,
    followUps,
    activities
}: DashboardViewProps) {
    const reportPeriod = "September 2026"

    const soldPercentage = inventory.total > 0 ? Math.round((inventory.sold / inventory.total) * 100) : 0
    const bookingPercentage = inventory.total > 0 ? Math.round((inventory.booking / inventory.total) * 100) : 0
    const availablePercentage = inventory.total > 0 ? Math.round((inventory.available / inventory.total) * 100) : 0

    const managementStatsRender = managementStats ? [
        {
            label: "Total Lead",
            value: managementStats.totalLead,
            description: "Bulan ini",
            icon: Users,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        {
            label: "Site Visit",
            value: managementStats.siteVisit,
            description: "Bulan ini",
            icon: MapPin,
            iconBg: "bg-violet-50",
            iconColor: "text-violet-600",
        },
        {
            label: "Booking",
            value: managementStats.booking,
            description: "Bulan ini",
            icon: CalendarClock,
            iconBg: "bg-amber-50",
            iconColor: "text-amber-600",
        },
        {
            label: "Closing",
            value: managementStats.closing,
            description: "Bulan ini",
            icon: CheckCircle2,
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
        },
    ] : []

    const marketingStatsRender = marketingStats ? [
        {
            label: "Lead Saya",
            value: marketingStats.leadSaya,
            description: "Bulan ini",
            icon: Users,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        {
            label: "Follow Up",
            value: marketingStats.followUp,
            description: "Total",
            icon: MessageSquare,
            iconBg: "bg-amber-50",
            iconColor: "text-amber-600",
        },
        {
            label: "Site Visit",
            value: marketingStats.siteVisit,
            description: "Bulan ini",
            icon: MapPin,
            iconBg: "bg-violet-50",
            iconColor: "text-violet-600",
        },
        {
            label: "Closing",
            value: marketingStats.closing,
            description: "Bulan ini",
            icon: CheckCircle2,
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
        },
    ] : []

    const digitalMarketingStatsRender = digitalMarketingStats ? [
        {
            label: "Total Lead",
            value: digitalMarketingStats.totalLead,
            description: "Bulan ini",
            icon: Users,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        {
            label: "Instagram",
            value: digitalMarketingStats.instagram,
            description: "Lead",
            icon: Megaphone,
            iconBg: "bg-pink-50",
            iconColor: "text-pink-600",
        },
        {
            label: "Facebook",
            value: digitalMarketingStats.facebook,
            description: "Lead",
            icon: Megaphone,
            iconBg: "bg-indigo-50",
            iconColor: "text-indigo-600",
        },
        {
            label: "Conversion",
            value: digitalMarketingStats.conversion.toFixed(1) + "%",
            description: "Lead → Closing",
            icon: TrendingUp,
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
        },
    ] : []

    const adminStatsRender = adminStats ? [
        {
            label: "Booking Aktif",
            value: adminStats.bookingAktif,
            description: "Perlu diproses",
            icon: CalendarClock,
            iconBg: "bg-amber-50",
            iconColor: "text-amber-600",
        },
        {
            label: "Berkas Belum Lengkap",
            value: adminStats.berkasBelumLengkap,
            description: "Perlu dilengkapi",
            icon: FileText,
            iconBg: "bg-red-50",
            iconColor: "text-red-600",
        },
        {
            label: "Siap Akad",
            value: adminStats.siapAkad,
            description: "Status Aktif",
            icon: ClipboardCheck,
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        {
            label: "Akad",
            value: adminStats.akad,
            description: "Bulan ini",
            icon: CheckCircle2,
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
        },
    ] : []

    const renderStats = () => {
        let statsToRender: Array<{
            label: string
            value: string | number
            description: string
            icon: React.ElementType
            iconBg: string
            iconColor: string
        }> = []
        if (role === "MANAGER") statsToRender = managementStatsRender
        else if (role === "MARKETING") statsToRender = marketingStatsRender
        else if (role === "DIGITAL_MARKETING") statsToRender = digitalMarketingStatsRender
        else if (role === "ADMIN") statsToRender = adminStatsRender

        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statsToRender.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                        <div key={index} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden group">
                            <div className="flex items-start justify-between relative z-10">
                                <div>
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                                    <h3 className="text-2xl font-bold text-slate-900 mt-2 tracking-tight">{stat.value}</h3>
                                    <p className="text-[10px] font-medium text-slate-400 mt-1">{stat.description}</p>
                                </div>
                                <div className={`p-3 rounded-xl ${stat.iconBg} ${stat.iconColor}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                                <Icon className="w-24 h-24" />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50/50 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Selamat datang, {currentUser.name}! 👋
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Berikut ringkasan performa Anda sebagai{" "}
                            <span className="font-semibold text-slate-700">{role.replace("_", " ")}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href="/leads/new" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all active:scale-95 gap-2">
                            <Plus className="h-4 w-4" /> Tambah Lead
                        </Link>
                    </div>
                </div>

                {/* KPI */}
                {renderStats()}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content (2/3) */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* INVENTORY */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-blue-600" /> Ketersediaan Unit
                                    </h2>
                                    <p className="text-xs text-slate-500 mt-1">Status seluruh unit di proyek ini.</p>
                                </div>
                                <Link href="/units" className="text-[11px] font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors">
                                    Lihat Denah <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-4 gap-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Total Unit</p>
                                    <p className="text-xl font-black text-slate-700 mt-1">{inventory.total}</p>
                                </div>
                                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-center relative overflow-hidden">
                                    <p className="text-[10px] font-bold text-emerald-600 uppercase">Tersedia</p>
                                    <p className="text-xl font-black text-emerald-700 mt-1">{inventory.available}</p>
                                    <div className="absolute bottom-0 left-0 h-1 bg-emerald-500" style={{ width: `${availablePercentage}%` }} />
                                </div>
                                <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-center relative overflow-hidden">
                                    <p className="text-[10px] font-bold text-amber-600 uppercase">Booking/Hold</p>
                                    <p className="text-xl font-black text-amber-700 mt-1">{inventory.booking}</p>
                                    <div className="absolute bottom-0 left-0 h-1 bg-amber-500" style={{ width: `${bookingPercentage}%` }} />
                                </div>
                                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center relative overflow-hidden">
                                    <p className="text-[10px] font-bold text-blue-600 uppercase">Terjual (Akad)</p>
                                    <p className="text-xl font-black text-blue-700 mt-1">{inventory.sold}</p>
                                    <div className="absolute bottom-0 left-0 h-1 bg-blue-500" style={{ width: `${soldPercentage}%` }} />
                                </div>
                            </div>
                        </div>

                        {/* PIPELINE (All roles) */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-emerald-600" /> Pipeline Penjualan
                                    </h2>
                                    <p className="text-xs text-slate-500 mt-1">Status lead aktif saat ini.</p>
                                </div>
                                <Link href="/leads" className="text-[11px] font-bold text-slate-600 hover:text-slate-900 bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">
                                    Lihat Semua
                                </Link>
                            </div>

                            <div className="flex items-center justify-between relative">
                                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
                                {[
                                    { label: "New Lead", value: pipeline.new, color: "blue" },
                                    { label: "Active", value: pipeline.active, color: "violet" },
                                    { label: "Site Visit", value: pipeline.visit, color: "fuchsia" },
                                    { label: "Booking", value: pipeline.booked, color: "amber" },
                                    { label: "KPR", value: pipeline.kpr, color: "emerald" },
                                ].map((step, idx) => (
                                    <div key={idx} className="relative z-10 flex flex-col items-center bg-white px-2 cursor-pointer group">
                                        <div className={`w-10 h-10 rounded-full border-2 border-${step.color}-100 bg-${step.color}-50 text-${step.color}-600 flex items-center justify-center font-bold text-sm group-hover:scale-110 group-hover:border-${step.color}-200 transition-all shadow-sm`}>
                                            {step.value}
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-500 mt-2 uppercase text-center w-16">{step.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ACTIVITIES */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                        <Activity className="w-4 h-4 text-violet-600" /> Aktivitas Terbaru
                                    </h2>
                                </div>
                                <Link href="/activities" className="text-[11px] font-bold text-slate-600 hover:text-slate-900 bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">
                                    Detail
                                </Link>
                            </div>

                            <div className="space-y-5">
                                {activities.length > 0 ? activities.map((act, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 z-10">
                                                <Activity className="w-3.5 h-3.5" />
                                            </div>
                                            {index !== activities.length - 1 && <div className="w-px h-full bg-slate-100 mt-2" />}
                                        </div>
                                        <div className="pb-5">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">{act.time}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-slate-800 mt-1">
                                                <span className="text-blue-600">{act.user}</span> - {act.type}
                                            </p>
                                            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{act.description}</p>
                                        </div>
                                    </div>
                                )) : <div className="text-sm text-slate-500 text-center py-4">Belum ada aktivitas.</div>}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Content (1/3) */}
                    <div className="space-y-6">
                        {/* FOLLOW UPS */}
                        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-slate-100">
                                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <CalendarDays className="w-4 h-4 text-amber-500" /> Jadwal Follow Up
                                </h2>
                                <p className="text-[11px] text-slate-500 mt-1">Tugas yang perlu diselesaikan.</p>
                            </div>

                            <div className="p-2 space-y-1 bg-slate-50/50">
                                {followUps.length > 0 ? followUps.map((item, idx) => (
                                    <div key={idx} className="bg-white p-3 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors group cursor-pointer">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${item.type === "today" ? "bg-blue-500" : item.type === "tomorrow" ? "bg-amber-500" : "bg-red-500 animate-pulse"}`} />
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.type === "today" ? "bg-blue-50 text-blue-600" : item.type === "tomorrow" ? "bg-amber-50 text-amber-600" : "bg-red-50 text-red-600"}`}>
                                                    {item.time}
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className="text-xs font-bold text-slate-900">{item.task}</h4>
                                        <p className="text-[11px] text-slate-500 mt-0.5">
                                            {item.name} <span className="text-slate-300 mx-1">•</span> <span className="font-semibold">{item.unit}</span>
                                        </p>
                                    </div>
                                )) : <div className="text-sm text-slate-500 text-center py-4 bg-white">Tidak ada jadwal follow up.</div>}
                            </div>
                        </div>

                        {/* QUICK ACTION */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <h2 className="text-sm font-bold text-slate-900 mb-4">Akses Cepat</h2>
                            <div className="grid grid-cols-2 gap-3">
                                <Link href="/leads/new" className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-colors text-slate-600 group">
                                    <Users className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] font-bold text-center">Tambah Lead</span>
                                </Link>
                                <Link href="/activities" className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-violet-50 hover:border-violet-200 hover:text-violet-600 transition-colors text-slate-600 group">
                                    <Activity className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] font-bold text-center">Log Aktivitas</span>
                                </Link>
                                <Link href="/units" className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 transition-colors text-slate-600 group">
                                    <Building2 className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] font-bold text-center">Cek Unit</span>
                                </Link>
                                <Link href="/reports" className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-600 transition-colors text-slate-600 group">
                                    <TrendingUp className="w-5 h-5 mb-2 group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] font-bold text-center">Laporan</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}