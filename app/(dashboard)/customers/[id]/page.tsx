import Link from "next/link"
import {
    ArrowLeft,
    Edit,
    Phone,
    Mail,
    MapPin,
    Building,
    User,
    Plus,
    ExternalLink,
} from "lucide-react"
import { getCustomerById } from "@/actions/customer.action"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { id } from "date-fns/locale"

export const dynamic = "force-dynamic"

type LeadStatus =
    | "NEW"
    | "FOLLOW_UP"
    | "PROSPECT"
    | "BOOKED"
    | "CLOSED"
    | "LOST"

type SalesStage =
    | "INQUIRY"
    | "VISIT"
    | "FOLLOW_UP"
    | "DOCUMENTATION"
    | "KPR"
    | "SLIK"
    | "OTS"
    | "AKAD"
    | "REALIZATION"
    | "CANCELLED"

function getStatusClass(status: string) {
    const classes: Record<string, string> = {
        NEW: "bg-blue-50 text-blue-700 border-blue-100",
        FOLLOW_UP: "bg-amber-50 text-amber-700 border-amber-100",
        PROSPECT: "bg-violet-50 text-violet-700 border-violet-100",
        BOOKED: "bg-orange-50 text-orange-700 border-orange-100",
        CLOSED: "bg-emerald-50 text-emerald-700 border-emerald-100",
        LOST: "bg-red-50 text-red-700 border-red-100",
    }

    return classes[status] || "bg-slate-50 text-slate-700 border-slate-100"
}

function getStatusLabel(status: string) {
    const labels: Record<string, string> = {
        NEW: "New",
        FOLLOW_UP: "Follow Up",
        PROSPECT: "Prospect",
        BOOKED: "Booked",
        CLOSED: "Closed",
        LOST: "Lost",
    }

    return labels[status] || status
}

function getStageLabel(stage: string) {
    const labels: Record<string, string> = {
        INQUIRY: "Inquiry",
        VISIT: "Visit",
        FOLLOW_UP: "Follow Up",
        DOCUMENTATION: "Dokumentasi",
        KPR: "KPR",
        SLIK: "SLIK",
        OTS: "OTS",
        AKAD: "Akad",
        REALIZATION: "Realisasi",
        CANCELLED: "Dibatalkan",
    }

    return labels[stage] || stage
}

export default async function CustomerDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const resolvedParams = await params
    const customerId = resolvedParams.id

    const customer = await getCustomerById(customerId)

    if (!customer) {
        notFound()
    }

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Link
                        href="/customers"
                        className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                            {customer.name}
                        </h1>
                        <p className="text-xs text-slate-500 mt-0.5">
                            ID Customer: #{customer.id}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Link
                        href={`/customers/${customerId}/edit`}
                        className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                    >
                        <Edit className="w-4 h-4" />
                        Edit Data
                    </Link>

                    <Link
                        href={`/leads/new?customerId=${customerId}`}
                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-1.5 transition-all"
                    >
                        <Plus className="w-4 h-4" />
                        Buat Lead
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 h-fit">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="font-bold text-slate-900 text-sm">
                                {customer.name}
                            </h2>
                            <span className="text-[10px] text-slate-400">
                                Terdaftar: {format(new Date(customer.createdAt), "dd MMMM yyyy", { locale: id })}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4 text-xs text-slate-600">
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                            <span>{customer.phone || "-"}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="truncate">
                                {customer.email || "-"}
                            </span>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <span>{customer.address || "-"}</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                                <Building className="w-4 h-4 text-blue-600" />
                                Lead & Minat Properti
                            </h2>
                            <p className="text-[11px] text-slate-400 mt-1">
                                Daftar proses penjualan yang dimiliki customer ini.
                            </p>
                        </div>
                        <span className="text-[10px] text-slate-400">
                            {customer.leads.length} Lead
                        </span>
                    </div>

                    <div className="space-y-3">
                        {customer.leads.length > 0 ? (
                            customer.leads.map((lead) => (
                                <Link
                                    key={lead.id}
                                    href={`/leads/${lead.id}`}
                                    className="block p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[10px] font-semibold text-slate-400">
                                                    {lead.id}
                                                </p>
                                                <span className="text-[10px] text-slate-300">
                                                    •
                                                </span>
                                                <p className="text-[10px] text-slate-400">
                                                    {format(new Date(lead.createdAt), "dd MMMM yyyy", { locale: id })}
                                                </p>
                                            </div>
                                            <p className="text-sm font-bold text-slate-900 mt-1">
                                                {lead.project.name}
                                            </p>
                                            <p className="text-xs text-slate-500 mt-1">
                                                {lead.productType.category?.name || "Unknown"} • {lead.productType.name}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`inline-flex w-fit px-2.5 py-1 rounded-lg border text-[10px] font-bold ${getStatusClass(
                                                    lead.status
                                                )}`}
                                            >
                                                {getStatusLabel(lead.status)}
                                            </span>
                                            <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-200">
                                        <div>
                                            <p className="text-[10px] text-slate-400">
                                                Unit
                                            </p>
                                            <p className="text-xs font-semibold text-slate-700 mt-1">
                                                {lead.unit?.code || "Belum pilih"}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[10px] text-slate-400">
                                                Sumber
                                            </p>
                                            <p className="text-xs font-semibold text-slate-700 mt-1">
                                                {lead.source}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[10px] text-slate-400">
                                                Tahap
                                            </p>
                                            <p className="text-xs font-semibold text-slate-700 mt-1">
                                                {getStageLabel(lead.stage)}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[10px] text-slate-400">
                                                Marketing
                                            </p>
                                            <p className="text-xs font-semibold text-slate-700 mt-1">
                                                {lead.marketing.name}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="py-10 text-center">
                                <Building className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                                <p className="text-xs font-semibold text-slate-600">
                                    Belum ada Lead
                                </p>
                                <p className="text-[11px] text-slate-400 mt-1">
                                    Customer ini belum memiliki proses penjualan.
                                </p>
                                <Link
                                    href={`/leads/new?customerId=${customerId}`}
                                    className="inline-flex items-center gap-1.5 mt-4 px-3 py-2 bg-blue-600 text-white text-[11px] font-semibold rounded-lg hover:bg-blue-700"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Buat Lead
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                        <Building className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-700">
                            Tentang Lead & Aktivitas
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                            Customer menyimpan data orangnya, sedangkan Lead
                            menyimpan proses penjualan. Riwayat komunikasi,
                            kunjungan, follow up, dokumen, dan aktivitas lainnya
                            dicatat di dalam masing-masing Lead.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}