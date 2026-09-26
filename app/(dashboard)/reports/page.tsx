import Link from "next/link"
import {
    Calendar,
    BarChart3,
    ArrowRight,
    Activity,
    Users,
    CheckCircle,
} from "lucide-react"
import { getDashboardHubReport } from "@/actions/report.action"

export const dynamic = "force-dynamic"

export default async function ReportsHubPage() {
    const report = await getDashboardHubReport()

    return (
        <div className="min-h-screen bg-slate-50/50 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">

                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Laporan & Analitik
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        Pantau aktivitas CRM dan perkembangan proses penjualan.
                    </p>
                </div>


                {/* Quick Metrics */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                    {/* Total Lead */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                            <Users className="h-6 w-6" />
                        </div>

                        <div>
                            <p className="text-xs text-slate-500 font-medium">
                                Total Lead Bulan Ini
                            </p>

                            <p className="text-xl font-bold text-slate-900">
                                {report.totalLeads}
                            </p>
                        </div>
                    </div>


                    {/* Total Aktivitas */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-violet-50 text-violet-600 rounded-lg">
                            <Activity className="h-6 w-6" />
                        </div>

                        <div>
                            <p className="text-xs text-slate-500 font-medium">
                                Aktivitas Bulan Ini
                            </p>

                            <p className="text-xl font-bold text-slate-900">
                                {report.totalActivities}
                            </p>
                        </div>
                    </div>


                    {/* Closing */}
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                            <CheckCircle className="h-6 w-6" />
                        </div>

                        <div>
                            <p className="text-xs text-slate-500 font-medium">
                                Lead Closed Bulan Ini
                            </p>

                            <p className="text-xl font-bold text-slate-900">
                                {report.totalClosed}
                            </p>
                        </div>
                    </div>

                </div>


                {/* Report Modules */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Laporan Harian */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">

                        <div className="space-y-3">

                            <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-lg">
                                <Calendar className="h-6 w-6" />
                            </div>

                            <h2 className="text-xl font-semibold text-slate-900">
                                Laporan Harian
                            </h2>

                            <p className="text-sm text-slate-600 leading-relaxed">
                                Lihat rekap aktivitas harian, lead baru,
                                follow up, kunjungan, dan aktivitas CRM
                                yang dilakukan oleh tim.
                            </p>

                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100">

                            <Link
                                href="/reports/daily"
                                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                Buka Laporan Harian
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                        </div>

                    </div>


                    {/* Performa Marketing */}
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">

                        <div className="space-y-3">

                            <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                                <BarChart3 className="h-6 w-6" />
                            </div>

                            <h2 className="text-xl font-semibold text-slate-900">
                                Performa Marketing
                            </h2>

                            <p className="text-sm text-slate-600 leading-relaxed">
                                Lihat perkembangan lead, aktivitas,
                                kunjungan, booking, akad, dan sumber
                                lead berdasarkan periode yang dipilih.
                            </p>

                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100">

                            <Link
                                href="/reports/marketing"
                                className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                            >
                                Buka Performa Marketing
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}