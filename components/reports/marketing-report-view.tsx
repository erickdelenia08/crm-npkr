"use client"

import { useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
    Download,
    FileSpreadsheet,
    FileText,
    Users,
    UserCheck,
    MapPinned,
    CalendarCheck,
    Home,
    TrendingUp,
    Globe,
    Award,
    Filter,
} from "lucide-react"

import * as XLSX from "xlsx"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

type MarketingPerformance = {
    name: string
    totalLeads: number
    followUps: number
    siteVisits: number
    bookings: number
    closing: number
}

type LeadSource = {
    source: string
    count: number
    siteVisits: number
    bookings: number
    closing: number
}

interface MarketingReportViewProps {
    period: string
    marketingPerformances: MarketingPerformance[]
    leadSources: LeadSource[]
}

function percentage(value: number, total: number) {
    if (!total) return 0
    return (value / total) * 100
}

function formatPercentage(value: number) {
    return `${value.toFixed(1)}%`
}

export function MarketingReportView({ period, marketingPerformances, leadSources }: MarketingReportViewProps) {
    const router = useRouter()
    const [exporting, setExporting] = useState(false)

    const summary = useMemo(() => {
        const totalLeads = marketingPerformances.reduce((sum, item) => sum + item.totalLeads, 0)
        const followUps = marketingPerformances.reduce((sum, item) => sum + item.followUps, 0)
        const siteVisits = marketingPerformances.reduce((sum, item) => sum + item.siteVisits, 0)
        const bookings = marketingPerformances.reduce((sum, item) => sum + item.bookings, 0)
        const closing = marketingPerformances.reduce((sum, item) => sum + item.closing, 0)

        return {
            totalLeads,
            followUps,
            siteVisits,
            bookings,
            closing,
            conversionRate: percentage(closing, totalLeads),
        }
    }, [marketingPerformances])

    const exportExcel = () => {
        setExporting(true)
        try {
            const workbook = XLSX.utils.book_new()

            const summaryData = [
                ["LAPORAN KINERJA MARKETING"],
                ["Periode", period],
                [],
                ["INDIKATOR", "JUMLAH"],
                ["Total Lead", summary.totalLeads],
                ["Follow Up", summary.followUps],
                ["Site Visit", summary.siteVisits],
                ["Booking", summary.bookings],
                ["Closing", summary.closing],
                ["Conversion Rate", `${summary.conversionRate.toFixed(1)}%`],
            ]
            const summarySheet = XLSX.utils.aoa_to_sheet(summaryData)
            summarySheet["!cols"] = [{ wch: 25 }, { wch: 20 }]
            XLSX.utils.book_append_sheet(workbook, summarySheet, "Ringkasan")

            const marketingData = marketingPerformances.map((item) => ({
                "Nama Marketing": item.name,
                "Total Lead": item.totalLeads,
                "Follow Up": item.followUps,
                "Site Visit": item.siteVisits,
                Booking: item.bookings,
                Closing: item.closing,
                "Conversion Rate": `${percentage(item.closing, item.totalLeads).toFixed(1)}%`,
            }))
            const marketingSheet = XLSX.utils.json_to_sheet(marketingData)
            marketingSheet["!cols"] = [{ wch: 25 }, { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 18 }]
            XLSX.utils.book_append_sheet(workbook, marketingSheet, "Performa Marketing")

            const sourceData = leadSources.map((item) => ({
                "Sumber Lead": item.source,
                Lead: item.count,
                "Site Visit": item.siteVisits,
                Booking: item.bookings,
                Closing: item.closing,
                "Conversion Rate": `${percentage(item.closing, item.count).toFixed(1)}%`,
            }))
            const sourceSheet = XLSX.utils.json_to_sheet(sourceData)
            sourceSheet["!cols"] = [{ wch: 30 }, { wch: 12 }, { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 18 }]
            XLSX.utils.book_append_sheet(workbook, sourceSheet, "Sumber Lead")

            XLSX.writeFile(workbook, `Laporan-Marketing-${period.replaceAll(" ", "-")}.xlsx`)
        } finally {
            setExporting(false)
        }
    }

    const exportPDF = () => {
        setExporting(true)
        try {
            const doc = new jsPDF()

            doc.setFontSize(18)
            doc.setFont("helvetica", "bold")
            doc.text("Laporan Kinerja Marketing", 14, 18)

            doc.setFontSize(10)
            doc.setFont("helvetica", "normal")
            doc.text(`Periode: ${period}`, 14, 25)

            autoTable(doc, {
                startY: 32,
                head: [["Indikator", "Jumlah"]],
                body: [
                    ["Total Lead", summary.totalLeads.toString()],
                    ["Follow Up", summary.followUps.toString()],
                    ["Site Visit", summary.siteVisits.toString()],
                    ["Booking", summary.bookings.toString()],
                    ["Closing", summary.closing.toString()],
                    ["Conversion Rate", `${summary.conversionRate.toFixed(1)}%`],
                ],
                theme: "grid",
                styles: { fontSize: 9 },
                headStyles: { fontStyle: "bold" },
            })

            const marketingStartY = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12
            doc.setFontSize(12)
            doc.setFont("helvetica", "bold")
            doc.text("Performa Tim Marketing", 14, marketingStartY)

            autoTable(doc, {
                startY: marketingStartY + 5,
                head: [["Marketing", "Lead", "Follow Up", "Visit", "Booking", "Closing", "Conv."]],
                body: marketingPerformances.map((item) => [
                    item.name,
                    item.totalLeads,
                    item.followUps,
                    item.siteVisits,
                    item.bookings,
                    item.closing,
                    `${percentage(item.closing, item.totalLeads).toFixed(1)}%`,
                ]),
                theme: "grid",
                styles: { fontSize: 8 },
                headStyles: { fontStyle: "bold" },
            })

            const sourceStartY = (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12
            doc.setFontSize(12)
            doc.setFont("helvetica", "bold")
            doc.text("Sumber Lead", 14, sourceStartY)

            autoTable(doc, {
                startY: sourceStartY + 5,
                head: [["Sumber", "Lead", "Visit", "Booking", "Closing", "Conv."]],
                body: leadSources.map((item) => [
                    item.source,
                    item.count,
                    item.siteVisits,
                    item.bookings,
                    item.closing,
                    `${percentage(item.closing, item.count).toFixed(1)}%`,
                ]),
                theme: "grid",
                styles: { fontSize: 8 },
                headStyles: { fontStyle: "bold" },
            })

            const pageCount = (doc as jsPDF & { internal: { getNumberOfPages: () => number } }).internal.getNumberOfPages()
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i)
                doc.setFontSize(8)
                doc.setFont("helvetica", "normal")
                doc.text(`Laporan Kinerja Marketing - ${period}`, 14, 290)
                doc.text(`Halaman ${i} dari ${pageCount}`, 160, 290)
            }

            doc.save(`Laporan-Marketing-${period.replaceAll(" ", "-")}.pdf`)
        } finally {
            setExporting(false)
        }
    }

    const kpis = [
        { title: "Total Lead", value: summary.totalLeads, icon: Users, description: "Lead masuk" },
        { title: "Follow Up", value: summary.followUps, icon: UserCheck, description: "Lead telah dihubungi" },
        { title: "Site Visit", value: summary.siteVisits, icon: MapPinned, description: "Calon pembeli survei" },
        { title: "Booking", value: summary.bookings, icon: CalendarCheck, description: "Unit dibooking" },
        { title: "Closing", value: summary.closing, icon: Home, description: "Unit terjual" },
    ]

    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Laporan Kinerja Marketing</h1>
                    <p className="text-sm text-slate-500 mt-1">Evaluasi produktivitas tim sales dan efektivitas sumber lead.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <select
                            value={period}
                            onChange={(e) => router.push(`/reports/marketing?period=${e.target.value}`)}
                            className="appearance-none pl-9 pr-8 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20"
                        >
                            <option>September 2026</option>
                            <option>Agustus 2026</option>
                            <option>Juli 2026</option>
                            <option>Juni 2026</option>
                        </select>
                    </div>
                    <button onClick={exportExcel} disabled={exporting} className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-semibold rounded-xl shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all">
                        <FileSpreadsheet className="w-4 h-4" /> Excel
                    </button>
                    <button onClick={exportPDF} disabled={exporting} className="px-4 py-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-semibold rounded-xl shadow-md shadow-red-600/20 flex items-center justify-center gap-2 transition-all">
                        <FileText className="w-4 h-4" /> PDF
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {kpis.map((item) => {
                    const Icon = item.icon
                    return (
                        <div key={item.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                            <div className="flex items-center justify-between">
                                <div className="p-2.5 bg-blue-50 rounded-xl">
                                    <Icon className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                            <p className="text-xs font-medium text-slate-500 mt-4">{item.title}</p>
                            <p className="text-2xl font-bold text-slate-900 mt-1">{item.value}</p>
                            <p className="text-[10px] text-slate-400 mt-1">{item.description}</p>
                        </div>
                    )
                })}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-sm font-bold text-slate-900">Conversion Rate</h2>
                        <p className="text-xs text-slate-500 mt-1">Persentase lead yang berhasil menjadi closing.</p>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600">
                        <TrendingUp className="w-5 h-5" />
                        <span className="text-xl font-bold">{formatPercentage(summary.conversionRate)}</span>
                    </div>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full transition-all" style={{ width: `${Math.min(summary.conversionRate, 100)}%` }} />
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <div className="flex items-center gap-2 mb-5">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <h2 className="text-sm font-bold text-slate-900">Funnel Marketing</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                    {[
                        { label: "Lead", value: summary.totalLeads },
                        { label: "Follow Up", value: summary.followUps },
                        { label: "Site Visit", value: summary.siteVisits },
                        { label: "Booking", value: summary.bookings },
                        { label: "Closing", value: summary.closing },
                    ].map((item, index) => (
                        <div key={item.label} className="relative">
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{item.label}</p>
                                <p className="text-2xl font-bold text-slate-900 mt-1">{item.value}</p>
                            </div>
                            {index < 4 && <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-300 z-10">→</div>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <div>
                        <h2 className="text-sm font-bold text-slate-900">Performa Tim Marketing</h2>
                        <p className="text-xs text-slate-500 mt-0.5">Perbandingan aktivitas dan hasil masing-masing marketing.</p>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                            <tr>
                                <th className="p-4">Nama Marketing</th>
                                <th className="p-4 text-center">Lead</th>
                                <th className="p-4 text-center">Follow Up</th>
                                <th className="p-4 text-center">Site Visit</th>
                                <th className="p-4 text-center">Booking</th>
                                <th className="p-4 text-center">Closing</th>
                                <th className="p-4 text-right">Conversion</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {marketingPerformances.map((item, index) => {
                                const conversion = percentage(item.closing, item.totalLeads)
                                return (
                                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-slate-900">{item.name}</td>
                                        <td className="p-4 text-center font-semibold">{item.totalLeads}</td>
                                        <td className="p-4 text-center">{item.followUps}</td>
                                        <td className="p-4 text-center">{item.siteVisits}</td>
                                        <td className="p-4 text-center">{item.bookings}</td>
                                        <td className="p-4 text-center font-bold text-emerald-600">{item.closing}</td>
                                        <td className="p-4 text-right font-bold text-blue-600">{formatPercentage(conversion)}</td>
                                    </tr>
                                )
                            })}
                            {marketingPerformances.length === 0 && (
                                <tr><td colSpan={7} className="p-4 text-center text-slate-500">Belum ada performa.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <div>
                        <h2 className="text-sm font-bold text-slate-900">Efektivitas Sumber Lead</h2>
                        <p className="text-xs text-slate-500 mt-0.5">Melihat performa setiap channel sampai ke closing.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {leadSources.map((item, index) => {
                        const contribution = percentage(item.count, summary.totalLeads)
                        const conversion = percentage(item.closing, item.count)
                        return (
                            <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-800">{item.source}</span>
                                    <span className="text-xs font-bold text-blue-600">{item.count} Lead</span>
                                </div>
                                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-3">
                                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${contribution}%` }} />
                                </div>
                                <div className="grid grid-cols-4 gap-2 mt-4">
                                    <div><p className="text-[9px] text-slate-400">Lead</p><p className="text-xs font-bold text-slate-800">{item.count}</p></div>
                                    <div><p className="text-[9px] text-slate-400">Visit</p><p className="text-xs font-bold text-slate-800">{item.siteVisits}</p></div>
                                    <div><p className="text-[9px] text-slate-400">Booking</p><p className="text-xs font-bold text-slate-800">{item.bookings}</p></div>
                                    <div><p className="text-[9px] text-slate-400">Closing</p><p className="text-xs font-bold text-emerald-600">{item.closing}</p></div>
                                </div>
                                <div className="flex justify-between mt-3 text-[10px] text-slate-400">
                                    <span>Kontribusi Lead: {formatPercentage(contribution)}</span>
                                    <span>Conversion: {formatPercentage(conversion)}</span>
                                </div>
                            </div>
                        )
                    })}
                    {leadSources.length === 0 && (
                        <div className="col-span-2 text-center text-slate-500 py-4">Belum ada sumber lead.</div>
                    )}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2">
                <button onClick={exportExcel} disabled={exporting} className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> Export Excel
                </button>
                <button onClick={exportPDF} disabled={exporting} className="px-4 py-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> Export PDF
                </button>
            </div>
        </div>
    )
}
