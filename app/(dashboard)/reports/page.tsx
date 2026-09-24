import Link from "next/link"
import { Calendar, BarChart3, ArrowRight, TrendingUp, Users, CheckCircle } from "lucide-react"

export default function ReportsHubPage() {
    return (
        <div className="min-h-screen bg-slate-50/50 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Laporan & Analitik
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Pilih jenis laporan yang ingin Anda tinjau atau analisis performanya.
                    </p>
                </div>

                {/* Ringkasan Singkat (Quick Metrics) */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">Total Lead Bulan Ini</p>
                            <p className="text-xl font-bold text-slate-900">128 Lead</p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                            <CheckCircle className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">Closing Rate</p>
                            <p className="text-xl font-bold text-slate-900">18.5%</p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">Performa Marketing Terbaik</p>
                            <p className="text-xl font-bold text-slate-900">Ahmad Dahlan</p>
                        </div>
                    </div>
                </div>

                {/* Pilihan Modul Laporan */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Card Laporan Harian */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
                        <div className="space-y-3">
                            <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-lg">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <h2 className="text-xl font-semibold text-slate-900">Laporan Harian (Daily)</h2>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Pantau rekap aktivitas follow-up harian, jumlah prospek masuk per hari, serta log interaksi tim sales secara *real-time*.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100">
                            <Link
                                href="/reports/daily"
                                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                Buka Laporan Harian <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Card Laporan Performa Marketing */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
                        <div className="space-y-3">
                            <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                                <BarChart3 className="h-6 w-6" />
                            </div>
                            <h2 className="text-xl font-semibold text-slate-900">Performa Marketing</h2>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Analisis pencapaian target tiap agen marketing, konversi dari Inquiry hingga Akad KPR, serta efektivitas saluran promosi.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100">
                            <Link
                                href="/reports/marketing"
                                className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                            >
                                Buka Laporan Marketing <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}