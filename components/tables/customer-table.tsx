"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
    Plus,
    Search,
    User,
    Phone,
    Eye,
    Edit,
    Filter,
    X,
    ChevronDown,
} from "lucide-react"
import { format } from "date-fns"
import { id } from "date-fns/locale"

type LeadStatus = "NEW" | "FOLLOW_UP" | "PROSPECT" | "BOOKED" | "CLOSED" | "LOST"

type CustomerData = {
    id: string
    name: string
    phone: string | null
    email: string | null
    address: string | null
    leads: {
        id: string
        source: string
        status: string
        marketing: { name: string }
        productType: { name: string }
        createdAt: Date
    }[]
    createdAt: Date
}

interface CustomerTableProps {
    initialCustomers: CustomerData[]
}

const statusOptions: { value: LeadStatus | "ALL"; label: string }[] = [
    { value: "ALL", label: "Semua Status" },
    { value: "NEW", label: "New" },
    { value: "FOLLOW_UP", label: "Follow Up" },
    { value: "PROSPECT", label: "Prospect" },
    { value: "BOOKED", label: "Booked" },
    { value: "CLOSED", label: "Closed" },
    { value: "LOST", label: "Lost" },
]

function getStatusLabel(status: string | null) {
    if (!status) return "Belum ada Lead"
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

function getStatusClass(status: string | null) {
    if (!status) return "bg-slate-100 text-slate-500"
    const classes: Record<string, string> = {
        NEW: "bg-blue-50 text-blue-700",
        FOLLOW_UP: "bg-amber-50 text-amber-700",
        PROSPECT: "bg-violet-50 text-violet-700",
        BOOKED: "bg-orange-50 text-orange-700",
        CLOSED: "bg-emerald-50 text-emerald-700",
        LOST: "bg-red-50 text-red-700",
    }
    return classes[status] || "bg-slate-100 text-slate-500"
}

export function CustomerTable({ initialCustomers }: CustomerTableProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState<LeadStatus | "ALL">("ALL")
    const [sourceFilter, setSourceFilter] = useState("Semua Sumber")
    const [showFilters, setShowFilters] = useState(false)

    // Build source options dynamically from leads
    const sourceOptions = useMemo(() => {
        const sources = new Set<string>()
        initialCustomers.forEach(c => {
            if (c.leads && c.leads.length > 0) {
                sources.add(c.leads[0].source)
            }
        })
        return ["Semua Sumber", ...Array.from(sources)]
    }, [initialCustomers])

    const filteredCustomers = useMemo(() => {
        return initialCustomers.filter((customer) => {
            const search = searchTerm.toLowerCase().trim()

            const matchesSearch =
                !search ||
                customer.name.toLowerCase().includes(search) ||
                (customer.phone && customer.phone.includes(search)) ||
                (customer.email && customer.email.toLowerCase().includes(search))

            const latestLead = customer.leads && customer.leads.length > 0 ? customer.leads[0] : null

            const matchesStatus =
                statusFilter === "ALL" ||
                (latestLead && latestLead.status === statusFilter)

            const matchesSource =
                sourceFilter === "Semua Sumber" ||
                (latestLead && latestLead.source === sourceFilter)

            return matchesSearch && matchesStatus && matchesSource
        })
    }, [initialCustomers, searchTerm, statusFilter, sourceFilter])

    const activeFilterCount =
        (statusFilter !== "ALL" ? 1 : 0) +
        (sourceFilter !== "Semua Sumber" ? 1 : 0)

    function resetFilters() {
        setStatusFilter("ALL")
        setSourceFilter("Semua Sumber")
        setSearchTerm("")
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Database Customer
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Daftar customer dan informasi kontak calon pembeli.
                    </p>
                </div>

                <Link
                    href="/customers/new"
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Customer</span>
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-4 flex flex-col lg:flex-row gap-3">
                    <div className="relative flex-1">
                        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Cari nama, nomor WA, atau email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowFilters((value) => !value)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${showFilters || activeFilterCount > 0
                            ? "border-blue-200 bg-blue-50 text-blue-700"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }`}
                    >
                        <Filter className="w-4 h-4" />
                        <span>Filter</span>
                        {activeFilterCount > 0 && (
                            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                                {activeFilterCount}
                            </span>
                        )}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                    </button>
                </div>

                {showFilters && (
                    <div className="border-t border-slate-100 p-4 bg-slate-50/50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">
                                    Status Lead
                                </label>
                                <div className="relative">
                                    <select
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value as LeadStatus | "ALL")}
                                        className="appearance-none w-full px-3 py-2.5 pr-9 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {statusOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">
                                    Sumber Lead
                                </label>
                                <div className="relative">
                                    <select
                                        value={sourceFilter}
                                        onChange={(e) => setSourceFilter(e.target.value)}
                                        className="appearance-none w-full px-3 py-2.5 pr-9 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {sourceOptions.map((source) => (
                                            <option key={source} value={source}>{source}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {activeFilterCount > 0 && (
                            <div className="mt-4">
                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1.5"
                                >
                                    <X className="w-3.5 h-3.5" /> Reset Filter
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">
                    Menampilkan <span className="font-bold text-slate-800">{filteredCustomers.length}</span> dari <span className="font-bold text-slate-800">{initialCustomers.length}</span> customer
                </p>
                {searchTerm && (
                    <button
                        type="button"
                        onClick={() => setSearchTerm("")}
                        className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        Hapus pencarian
                    </button>
                )}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px] text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                            <tr>
                                <th className="px-4 py-3.5">Customer</th>
                                <th className="px-4 py-3.5">No. Telepon / WA</th>
                                <th className="px-4 py-3.5">Sumber</th>
                                <th className="px-4 py-3.5">Minat</th>
                                <th className="px-4 py-3.5">Status</th>
                                <th className="px-4 py-3.5">Marketing</th>
                                <th className="px-4 py-3.5">Update Terakhir</th>
                                <th className="px-4 py-3.5 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredCustomers.length > 0 ? (
                                filteredCustomers.map((customer) => {
                                    const latestLead = customer.leads && customer.leads.length > 0 ? customer.leads[0] : null;

                                    return (
                                        <tr key={customer.id} className="hover:bg-slate-50/80 transition-colors">
                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                                                        <User className="w-4 h-4" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <Link href={`/customers/${customer.id}`} className="font-bold text-slate-900 hover:text-blue-600 transition-colors block truncate">
                                                            {customer.name}
                                                        </Link>
                                                        <div className="flex items-center gap-2 mt-0.5">
                                                            <span className="text-[10px] text-slate-400">#{customer.id}</span>
                                                            {customer.leads.length > 0 && (
                                                                <>
                                                                    <span className="text-slate-300">•</span>
                                                                    <span className="text-[10px] text-slate-400">
                                                                        {customer.leads.length} {customer.leads.length === 1 ? "Lead" : "Leads"}
                                                                    </span>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-1.5 font-medium text-slate-800">
                                                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                                    <span>{customer.phone || "-"}</span>
                                                </div>
                                            </td>

                                            <td className="px-4 py-4">
                                                {latestLead ? (
                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-semibold whitespace-nowrap">
                                                        {latestLead.source}
                                                    </span>
                                                ) : <span className="text-slate-400">-</span>}
                                            </td>

                                            <td className="px-4 py-4">
                                                {latestLead && latestLead.productType ? (
                                                    <div>
                                                        <p className="font-semibold text-slate-800">{latestLead.productType.name}</p>
                                                        <p className="text-[10px] text-slate-400 mt-0.5">Minat produk</p>
                                                    </div>
                                                ) : <span className="text-slate-400">Belum ditentukan</span>}
                                            </td>

                                            <td className="px-4 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap ${getStatusClass(latestLead?.status || null)}`}>
                                                    {getStatusLabel(latestLead?.status || null)}
                                                </span>
                                            </td>

                                            <td className="px-4 py-4">
                                                {latestLead && latestLead.marketing ? (
                                                    <span className="font-medium text-slate-700">{latestLead.marketing.name}</span>
                                                ) : <span className="text-slate-400">-</span>}
                                            </td>

                                            <td className="px-4 py-4 text-slate-500 whitespace-nowrap">
                                                {latestLead ? (
                                                    format(new Date(latestLead.createdAt), "dd MMM yyyy", { locale: id })
                                                ) : (
                                                    <span className="text-slate-400">Belum ada aktivitas</span>
                                                )}
                                            </td>

                                            <td className="px-4 py-4 text-center">
                                                <div className="flex items-center justify-center gap-1">
                                                    <Link
                                                        href={`/customers/${customer.id}`}
                                                        className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                                                        title="Lihat Detail"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={8} className="p-12 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-sm font-bold text-slate-800">Customer tidak ditemukan</h3>
                                            <p className="text-xs text-slate-400 mt-1">Coba ubah kata pencarian atau filter.</p>
                                            {(searchTerm || activeFilterCount > 0) && (
                                                <button
                                                    type="button"
                                                    onClick={resetFilters}
                                                    className="mt-4 text-xs font-semibold text-blue-600 hover:text-blue-700"
                                                >
                                                    Reset pencarian & filter
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
