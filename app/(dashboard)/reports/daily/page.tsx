"use client"

import { useState } from "react"
import {
    Calendar,
    FileText,
    TrendingUp,
    UserCheck,
    Building,
    Download,
    Filter,
} from "lucide-react"

export default function DailyReportPage() {
    const [selectedDate, setSelectedDate] = useState("2026-09-24")

    // Dummy Ringkasan Harian
    const summary = {
        newLeadsToday: 5,
        activitiesCount: 12,
        siteVisitsToday: 3,
        bookingCount: 1,
    }

    // Dummy Log Laporan Harian
    const dailyLogs = [
        {
            time: "14:30",
            category: "BOOKING",
            title: "Booking Unit G-05",
            description: "Customer Budi Santoso melakukan pembayaran Tanda Jadi (UTJ) Rp 5.000.000.",
            marketing: "Elin Marketing",
        },
        {
            time: "11:15",
            category: "SITE_VISIT",
            title: "Kunjungan Lokasi",
            description: "Survei lokasi dengan Dewi Puspitasari untuk Kavling H-03.",
            marketing: "Elin Marketing",
        },
        {
            time: "09:00",
            category: "NEW_LEAD",
            title: "Lead Baru Masuk",
            description: "Inquiry via Instagram Ads dari Ahmad Dahlan (Minat tipe 36).",
            marketing: "Rian Marketing",
        },
    ]

    return (
        <div className="space-y-6">
            {/* Header & Date Picker */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Laporan Harian Operasional
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Rekap transaksi, prospek masuk, dan aktivitas sales pada tanggal terpilih.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button
                        onClick={() => alert("Mengunduh laporan harian...")}
                        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors"
                    >
                        <Download className="w-4 h-4" /> Export PDF
                    </button>
                </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">
                        Lead Baru Hari Ini
                    </span>
                    <p className="text-2xl font-bold text-blue-600">{summary.newLeadsToday}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">
                        Aktivitas Follow-Up
                    </span>
                    <p className="text-2xl font-bold text-slate-800">{summary.activitiesCount}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">
                        Site Visit Lokasi
                    </span>
                    <p className="text-2xl font-bold text-amber-600">{summary.siteVisitsToday}</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">
                        Closing / Booking Unit
                    </span>
                    <p className="text-2xl font-bold text-emerald-600">{summary.bookingCount}</p>
                </div>
            </div>

            {/* Rincian Aktivitas Hari Ini */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" /> Jurnal Kejadian Harian
                </h2>

                <div className="divide-y divide-slate-100">
                    {dailyLogs.map((log, index) => (
                        <div key={index} className="py-3.5 flex items-start justify-between gap-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-mono font-bold text-slate-500">
                                        {log.time}
                                    </span>
                                    <h3 className="text-xs font-bold text-slate-900">{log.title}</h3>
                                </div>
                                <p className="text-xs text-slate-600">{log.description}</p>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-400 whitespace-nowrap bg-slate-50 px-2 py-1 rounded">
                                {log.marketing}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}