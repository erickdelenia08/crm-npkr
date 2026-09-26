"use client"

import { useState } from "react"
import Link from "next/link"
import {
    ArrowLeft,
    User,
    Home,
    Clock,
    Send,
    Calendar,
    MessageSquare,
    Phone,
    MapPin,
    FileText,
    Building,
} from "lucide-react"
import { saveActivity } from "@/actions/activity.action"
import { getLeadById } from "@/actions/lead.action"
import { LeadStatus, SalesStage, ActivityType } from "@/generated/prisma"

type LeadDetailViewProps = {
    initialLead: NonNullable<Awaited<ReturnType<typeof getLeadById>>>
}

const statusLabels: Record<string, string> = {
    NEW: "New",
    FOLLOW_UP: "Follow Up",
    PROSPECT: "Prospect",
    BOOKED: "Booked",
    CLOSED: "Closed (Won)",
    LOST: "Lost",
}

const stageLabels: Record<string, string> = {
    INQUIRY: "Inquiry",
    VISIT: "Visit / Survei",
    FOLLOW_UP: "Follow Up",
    DOCUMENTATION: "Dokumentasi",
    KPR: "Pengajuan KPR",
    SLIK: "Cek SLIK",
    OTS: "OTS",
    AKAD: "Akad",
    REALIZATION: "Realisasi",
    CANCELLED: "Dibatalkan",
}

const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
        NEW: "bg-blue-50 text-blue-700 border-blue-200",
        FOLLOW_UP: "bg-amber-50 text-amber-700 border-amber-200",
        PROSPECT: "bg-purple-50 text-purple-700 border-purple-200",
        BOOKED: "bg-violet-50 text-violet-700 border-violet-200",
        CLOSED: "bg-emerald-50 text-emerald-700 border-emerald-200",
        LOST: "bg-rose-50 text-rose-700 border-rose-200",
    }
    return styles[status] || "bg-slate-100 text-slate-700 border-slate-200"
}

const getStageBadge = (stage: string) => {
    const styles: Record<string, string> = {
        INQUIRY: "bg-slate-50 text-slate-600 border-slate-200",
        VISIT: "bg-blue-50 text-blue-700 border-blue-200",
        FOLLOW_UP: "bg-amber-50 text-amber-700 border-amber-200",
        DOCUMENTATION: "bg-purple-50 text-purple-700 border-purple-200",
        KPR: "bg-cyan-50 text-cyan-700 border-cyan-200",
        SLIK: "bg-orange-50 text-orange-700 border-orange-200",
        OTS: "bg-indigo-50 text-indigo-700 border-indigo-200",
        AKAD: "bg-emerald-50 text-emerald-700 border-emerald-200",
        REALIZATION: "bg-green-50 text-green-700 border-green-200",
        CANCELLED: "bg-rose-50 text-rose-700 border-rose-200",
    }
    return styles[stage] || "bg-slate-50 text-slate-600 border-slate-200"
}

const ActivityIcon = ({ type }: { type: string }) => {
    const className = "w-3.5 h-3.5"
    switch (type) {
        case "CALL": return <Phone className={className} />
        case "WHATSAPP": return <MessageSquare className={className} />
        case "VISIT":
        case "OTS": return <MapPin className={className} />
        case "DOCUMENT":
        case "KPR":
        case "SLIK": return <FileText className={className} />
        case "AKAD":
        case "REALIZATION": return <Building className={className} />
        default: return <Clock className={className} />
    }
}

const formatDate = (dateValue: Date | string | null | undefined) => {
    if (!dateValue) return "—"
    try {
        return new Intl.DateTimeFormat("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(new Date(dateValue))
    } catch {
        return String(dateValue)
    }
}

export function LeadDetailView({ initialLead }: LeadDetailViewProps) {
    const [leadStatus, setLeadStatus] = useState<LeadStatus>(initialLead.status)
    const [salesStage, setSalesStage] = useState<SalesStage>(initialLead.stage)
    const [nextFollowUp, setNextFollowUp] = useState(initialLead.nextFollowUpAt ? new Date(initialLead.nextFollowUpAt).toISOString().split('T')[0] : "")

    const [activityType, setActivityType] = useState<ActivityType>("FOLLOW_UP")
    const [newLogNote, setNewLogNote] = useState("")

    const [changeStatus, setChangeStatus] = useState(false)
    const [changeStage, setChangeStage] = useState(false)
    const [changeFollowUp, setChangeFollowUp] = useState(false)

    const [activityNewStatus, setActivityNewStatus] = useState<LeadStatus>(leadStatus)
    const [activityNewStage, setActivityNewStage] = useState<SalesStage>(salesStage)
    const [activityNewFollowUp, setActivityNewFollowUp] = useState(nextFollowUp)

    const [activities, setActivities] = useState(initialLead.activities || [])

    const [isSaving, setIsSaving] = useState(false)

    const handleAddActivity = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!newLogNote.trim()) {
            alert("Catatan aktivitas wajib diisi.")
            return
        }

        setIsSaving(true)

        const res = await saveActivity({
            leadId: initialLead.id,
            createdById: initialLead.marketingId, // use the current marketing user
            type: activityType,
            description: newLogNote.trim(),
            updateLead: {
                ...(changeStatus && { status: activityNewStatus }),
                ...(changeStage && { stage: activityNewStage }),
                ...(changeFollowUp && { nextFollowUpAt: activityNewFollowUp || null }),
            }
        })

        if (res.success) {
            if (!res.activity) {
                alert("Aktivitas berhasil dibuat, tetapi data aktivitas tidak ditemukan.");
                return;
            }
            setActivities((prev) => [res.activity, ...prev])

            if (changeStatus) setLeadStatus(activityNewStatus)
            if (changeStage) setSalesStage(activityNewStage)
            if (changeFollowUp) setNextFollowUp(activityNewFollowUp)

            setNewLogNote("")
            setChangeStatus(false)
            setChangeStage(false)
            setChangeFollowUp(false)

            alert("Aktivitas berhasil ditambahkan!")
        } else {
            alert("Gagal menambahkan aktivitas: " + res.error)
        }

        setIsSaving(false)
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Link href="/leads" className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Lead #{initialLead.id}</h1>
                            <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold ${getStatusBadge(leadStatus)}`}>
                                {statusLabels[leadStatus] || leadStatus}
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                            Marketing: {initialLead.marketing.name} • Dibuat {formatDate(initialLead.createdAt)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Informasi Lead</h2>
                        <Link href={`/customers/${initialLead.customer.id}`} className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition-colors">
                            <User className="w-5 h-5 text-blue-600 shrink-0" />
                            <div>
                                <p className="text-xs font-bold text-slate-900">{initialLead.customer.name}</p>
                                <p className="text-[11px] text-slate-500">{initialLead.customer.phone || "-"}</p>
                            </div>
                        </Link>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                            <Building className="w-5 h-5 text-slate-600 shrink-0" />
                            <div>
                                <p className="text-xs font-bold text-slate-900">{initialLead.project.name}</p>
                                <p className="text-[11px] text-slate-500">{initialLead.productType.name} ({initialLead.productType.category?.name})</p>
                            </div>
                        </div>
                        {initialLead.unit ? (
                            <div className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl transition-colors">
                                <Home className="w-5 h-5 text-emerald-600 shrink-0" />
                                <div>
                                    <p className="text-xs font-bold text-slate-900">Unit {initialLead.unit.code}</p>
                                    <p className="text-[11px] text-slate-500">Rp {Number(initialLead.unit.price).toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                <Home className="w-5 h-5 text-slate-400 shrink-0" />
                                <div>
                                    <p className="text-xs font-bold text-slate-500">Unit Belum Dipilih</p>
                                    <p className="text-[11px] text-slate-400">Customer baru menentukan tipe rumah</p>
                                </div>
                            </div>
                        )}
                        <div className="pt-3 border-t border-slate-100">
                            <p className="text-[10px] text-slate-400 uppercase font-bold">Sumber Lead</p>
                            <p className="text-xs font-semibold text-slate-700 mt-1">{initialLead.source}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold">PIC Marketing</p>
                            <p className="text-xs font-semibold text-slate-700 mt-1">{initialLead.marketing.name}</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Kondisi Saat Ini</h2>
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Status</p>
                            <span className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold ${getStatusBadge(leadStatus)}`}>{statusLabels[leadStatus] || leadStatus}</span>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Sales Stage</p>
                            <span className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold ${getStageBadge(salesStage)}`}>{stageLabels[salesStage] || salesStage}</span>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Next Follow Up</p>
                            {nextFollowUp ? (
                                <div className="flex items-center gap-1.5 text-slate-700 font-semibold text-xs mt-1">
                                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                                    <span>{formatDate(nextFollowUp)}</span>
                                </div>
                            ) : <span className="text-xs text-slate-400 mt-1 block">—</span>}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                    <form onSubmit={handleAddActivity} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <h2 className="text-sm font-bold text-slate-800">Catat Aktivitas Baru</h2>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-[11px] font-bold text-slate-500 mb-1">Tipe Aktivitas</label>
                                <select value={activityType} onChange={(e) => setActivityType(e.target.value as ActivityType)} className="w-full lg:w-1/2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-blue-600 outline-none">
                                    <option value="FOLLOW_UP">Follow Up</option>
                                    <option value="WHATSAPP">WhatsApp</option>
                                    <option value="CALL">Telepon</option>
                                    <option value="VISIT">Survei Lokasi</option>
                                    <option value="DOCUMENT">Terima Berkas</option>
                                    <option value="NOTE">Catatan Internal</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[11px] font-bold text-slate-500 mb-1">Catatan / Detail Aktivitas</label>
                                <textarea value={newLogNote} onChange={(e) => setNewLogNote(e.target.value)} rows={3} placeholder="Tuliskan detail aktivitas di sini..." className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-blue-600 outline-none resize-none"></textarea>
                            </div>
                        </div>

                        <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <p className="text-[11px] font-bold text-slate-500 mb-2">Update Progres Lead (Opsional)</p>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="changeStatus" checked={changeStatus} onChange={(e) => setChangeStatus(e.target.checked)} className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                <label htmlFor="changeStatus" className="text-xs text-slate-700">Update Status</label>
                                {changeStatus && (
                                    <select value={activityNewStatus} onChange={(e) => setActivityNewStatus(e.target.value as LeadStatus)} className="ml-2 px-2 py-1 bg-white border border-slate-200 rounded text-xs outline-none">
                                        {Object.entries(statusLabels).map(([val, label]) => <option key={val} value={val}>{label}</option>)}
                                    </select>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="changeStage" checked={changeStage} onChange={(e) => setChangeStage(e.target.checked)} className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                <label htmlFor="changeStage" className="text-xs text-slate-700">Update Tahap Sales</label>
                                {changeStage && (
                                    <select value={activityNewStage} onChange={(e) => setActivityNewStage(e.target.value as SalesStage)} className="ml-2 px-2 py-1 bg-white border border-slate-200 rounded text-xs outline-none">
                                        {Object.entries(stageLabels).map(([val, label]) => <option key={val} value={val}>{label}</option>)}
                                    </select>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="changeFollowUp" checked={changeFollowUp} onChange={(e) => setChangeFollowUp(e.target.checked)} className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                <label htmlFor="changeFollowUp" className="text-xs text-slate-700">Jadwalkan Follow Up</label>
                                {changeFollowUp && (
                                    <input type="date" value={activityNewFollowUp} onChange={(e) => setActivityNewFollowUp(e.target.value)} className="ml-2 px-2 py-1 bg-white border border-slate-200 rounded text-xs outline-none" />
                                )}
                            </div>
                        </div>

                        <div className="flex justify-end pt-2">
                            <button type="submit" disabled={isSaving} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-md flex items-center gap-2 transition-all disabled:opacity-50">
                                <Send className="w-3.5 h-3.5" />
                                {isSaving ? "Menyimpan..." : "Simpan Aktivitas"}
                            </button>
                        </div>
                    </form>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm font-bold text-slate-800">Riwayat Aktivitas</h2>
                            <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-lg font-semibold">{activities.length} Catatan</span>
                        </div>
                        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                            {activities.map((activity) => (
                                <div key={activity.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-50 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <ActivityIcon type={activity.type} />
                                    </div>
                                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-bold text-blue-600 bg-blue-100/50 px-2 py-0.5 rounded-md">{activity.type}</span>
                                            <span className="text-[10px] text-slate-400 font-medium">{formatDate(activity.createdAt)}</span>
                                        </div>
                                        <p className="text-xs text-slate-700 leading-relaxed">{activity.description}</p>
                                    </div>
                                </div>
                            ))}
                            {activities.length === 0 && (
                                <p className="text-center text-xs text-slate-500 py-4">Belum ada riwayat aktivitas.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
