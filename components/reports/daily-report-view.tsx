"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
    Calendar,
    FileText,
    Users,
    MapPin,
    CalendarCheck,
    Download,
    MessageSquare,
    UserPlus,
    FileSpreadsheet,
    FileDown,
} from "lucide-react"
import * as XLSX from "xlsx"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

interface DailyReportViewProps {
    dateStr: string
    summary: {
        newLeads: number
        totalActivities: number
        siteVisits: number
        bookings: number
        closed: number
    }
    dailyActivities: {
        id: string
        time: string
        type: string
        title: string
        description: string
        user: string
    }[]
}

export function DailyReportView({ dateStr, summary, dailyActivities }: DailyReportViewProps) {
    const router = useRouter()
    const [showExportMenu, setShowExportMenu] = useState(false)
    const [marketingFilter, setMarketingFilter] = useState("ALL")

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/reports/daily?date=${e.target.value}`)
    }

    const filteredActivities = dailyActivities.filter(a => {
        if (marketingFilter === "ALL") return true
        return a.user.toUpperCase().includes(marketingFilter)
    })

    const handleExportExcel = () => {
        setShowExportMenu(false)
        
        const workbook = XLSX.utils.book_new()
        
        const summaryData = [
            ["LAPORAN HARIAN"],
            ["Tanggal", dateStr],
            [],
            ["INDIKATOR", "JUMLAH"],
            ["Lead Baru", summary.newLeads],
            ["Aktivitas", summary.totalActivities],
            ["Site Visit", summary.siteVisits],
            ["Booking", summary.bookings],
            ["Closed", summary.closed],
        ]
        const summarySheet = XLSX.utils.aoa_to_sheet(summaryData)
        XLSX.utils.book_append_sheet(workbook, summarySheet, "Ringkasan")

        const activitiesData = filteredActivities.map(a => ({
            "Waktu": a.time,
            "Tipe": a.type,
            "Judul": a.title,
            "Deskripsi": a.description,
            "Oleh": a.user
        }))
        const activitiesSheet = XLSX.utils.json_to_sheet(activitiesData)
        XLSX.utils.book_append_sheet(workbook, activitiesSheet, "Aktivitas")

        XLSX.writeFile(workbook, `Laporan-Harian-${dateStr}.xlsx`)
    }

    const handleExportPDF = () => {
        setShowExportMenu(false)
        const doc = new jsPDF()

        doc.setFontSize(16)
        doc.setFont("helvetica", "bold")
        doc.text("Laporan Harian", 14, 20)
        
        doc.setFontSize(10)
        doc.setFont("helvetica", "normal")
        doc.text(`Tanggal: ${dateStr}`, 14, 28)

        autoTable(doc, {
            startY: 35,
            head: [["Indikator", "Jumlah"]],
            body: [
                ["Lead Baru", summary.newLeads],
                ["Total Aktivitas", summary.totalActivities],
                ["Site Visit", summary.siteVisits],
                ["Booking", summary.bookings],
                ["Closed", summary.closed],
            ],
            theme: "grid"
        })

        const nextY = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 10
        doc.setFontSize(12)
        doc.setFont("helvetica", "bold")
        doc.text("Aktivitas Harian", 14, nextY)

        autoTable(doc, {
            startY: nextY + 5,
            head: [["Waktu", "Tipe", "Judul", "Deskripsi", "PIC"]],
            body: filteredActivities.map(a => [a.time, a.type, a.title, a.description, a.user]),
            theme: "grid",
            styles: { fontSize: 8 }
        })

        doc.save(`Laporan-Harian-${dateStr}.pdf`)
    }

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Laporan Harian
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Rekap aktivitas CRM dan perkembangan proses penjualan pada tanggal yang dipilih.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <input
                            type="date"
                            value={dateStr}
                            onChange={handleDateChange}
                            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setShowExportMenu((prev) => !prev)}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors"
                        >
                            <Download className="w-4 h-4" /> Export
                        </button>

                        {showExportMenu && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg z-20 overflow-hidden">
                                <button
                                    onClick={handleExportExcel}
                                    className="w-full px-4 py-3 flex items-center gap-3 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                                    <div>
                                        <p className="font-semibold">Export Excel</p>
                                        <p className="text-[10px] text-slate-400 font-normal">File .xlsx</p>
                                    </div>
                                </button>
                                <button
                                    onClick={handleExportPDF}
                                    className="w-full px-4 py-3 flex items-center gap-3 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    <FileDown className="w-4 h-4 text-red-600" />
                                    <div>
                                        <p className="font-semibold">Export PDF</p>
                                        <p className="text-[10px] text-slate-400 font-normal">File .pdf</p>
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <UserPlus className="w-4 h-4 text-blue-600" />
                        <span className="text-[11px] font-bold text-slate-400 uppercase">Lead Baru</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">{summary.newLeads}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-violet-600" />
                        <span className="text-[11px] font-bold text-slate-400 uppercase">Aktivitas</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-800">{summary.totalActivities}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-amber-600" />
                        <span className="text-[11px] font-bold text-slate-400 uppercase">Site Visit</span>
                    </div>
                    <p className="text-2xl font-bold text-amber-600">{summary.siteVisits}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <CalendarCheck className="w-4 h-4 text-orange-600" />
                        <span className="text-[11px] font-bold text-slate-400 uppercase">Booking</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">{summary.bookings}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-emerald-600" />
                        <span className="text-[11px] font-bold text-slate-400 uppercase">Closed</span>
                    </div>
                    <p className="text-2xl font-bold text-emerald-600">{summary.closed}</p>
                </div>
            </div>

            {/* Daily Activities */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                    <div>
                        <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-600" /> Aktivitas Harian
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">Seluruh aktivitas CRM yang tercatat pada tanggal {dateStr}.</p>
                    </div>
                    <select
                        value={marketingFilter}
                        onChange={(e) => setMarketingFilter(e.target.value)}
                        className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="ALL">Semua Marketing</option>
                        <option value="ELIN">Elin Marketing</option>
                        <option value="RIAN">Rian Marketing</option>
                    </select>
                </div>

                <div className="divide-y divide-slate-100">
                    {filteredActivities.length > 0 ? filteredActivities.map((activity, index) => (
                        <div key={index} className="py-4 flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3 min-w-0">
                                <span className="text-xs font-mono font-bold text-slate-400 pt-1 shrink-0">{activity.time}</span>
                                <div className="space-y-1">
                                    <h3 className="text-xs font-bold text-slate-900">{activity.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{activity.description}</p>
                                    <p className="text-[11px] text-slate-400">Oleh {activity.user}</p>
                                </div>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-500 whitespace-nowrap bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                                {activity.type}
                            </span>
                        </div>
                    )) : (
                        <div className="py-10 text-center text-slate-500 text-sm">Tidak ada aktivitas pada tanggal ini.</div>
                    )}
                </div>
            </div>
        </div>
    )
}
