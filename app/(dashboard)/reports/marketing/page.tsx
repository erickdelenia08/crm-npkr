"use client"

import { useState } from "react"
import {
    TrendingUp,
    User,
    Globe,
    Award,
    Download,
    BarChart2,
} from "lucide-react"

export default function MarketingReportPage() {
    // Dummy Performa Sales / Marketing
    const marketingPerformances = [
        {
            name: "Elin Marketing",
            totalLeads: 18,
            siteVisits: 8,
            closing: 3,
            conversionRate: "16.6%",
        },
        {
            name: "Rian Marketing",
            totalLeads: 12,
            siteVisits: 4,
            closing: 1,
            conversionRate: "8.3%",
        },
    ]

    // Dummy Sumber Traffic / Ad Channel
    const leadSources = [
        { source: "Instagram Ads", count: 15, percentage: "50%" },
        { source: "Kantor Pemasaran (Walk-in)", count: 8, percentage: "26.6%" },
        { source: "Facebook Ads", count: 5, percentage: "16.6%" },
        { source: "Referral / Teman", count: 2, percentage: "6.8%" },
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Laporan Kinerja Marketing
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Evaluasi produktivitas tim sales dan efektivitas channel promosi.
                    </p>
                </div>
                <button
                    onClick={() => alert("Mengunduh rekap performa marketing...")}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-2 transition-all w-full sm:w-auto justify-center"
                >
                    <Download className="w-4 h-4" /> Unduh Laporan Rekap
                </button>
            </div>

            {/* Performance by Sales Personnel */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex items-center gap-2 font-bold text-xs text-slate-800">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Performa Tim Sales (Marketing)</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                            <tr>
                                <th className="p-4">Nama Marketing</th>
                                <th className="p-4 text-center">Total Lead</th>
                                <th className="p-4 text-center">Site Visit</th>
                                <th className="p-4 text-center">Unit Closing</th>
                                <th className="p-4 text-right">Rasio Konversi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {marketingPerformances.map((m, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                                        <User className="w-4 h-4 text-slate-400" />
                                        {m.name}
                                    </td>
                                    <td className="p-4 text-center font-semibold">{m.totalLeads}</td>
                                    <td className="p-4 text-center text-slate-700">{m.siteVisits}</td>
                                    <td className="p-4 text-center font-bold text-emerald-600">{m.closing}</td>
                                    <td className="p-4 text-right font-bold text-blue-600">{m.conversionRate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Sources & Channels Breakdown */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-600" /> Efektivitas Sumber Lead (Channel)
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {leadSources.map((item, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                                <span>{item.source}</span>
                                <span className="text-blue-600">{item.count} Lead</span>
                            </div>
                            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-blue-600 h-full rounded-full"
                                    style={{ width: item.percentage }}
                                />
                            </div>
                            <span className="text-[10px] text-slate-400 block text-right">
                                Kontribusi: {item.percentage}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}