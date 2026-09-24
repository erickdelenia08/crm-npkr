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

type LeadStatus =
    | "NEW"
    | "FOLLOW_UP"
    | "PROSPECT"
    | "BOOKED"
    | "CLOSED"
    | "LOST"

type Customer = {
    id: string
    name: string
    phone: string
    email: string
    address: string
    source: string
    interest: string
    leadStatus: LeadStatus | null
    marketing: string
    totalLeads: number
    createdAt: string
    lastActivity: string | null
}

const customers: Customer[] = [
    {
        id: "CUST-001",
        name: "Budi Santoso",
        phone: "081234567890",
        email: "budi.santoso@gmail.com",
        address: "Jl. Mawar No. 12, Surabaya",
        source: "TikTok",
        interest: "Subsidi 30/60",
        leadStatus: "FOLLOW_UP",
        marketing: "Erick",
        totalLeads: 1,
        createdAt: "12 Jan 2026",
        lastActivity: "23 Sep 2026",
    },
    {
        id: "CUST-002",
        name: "Dewi Puspitasari",
        phone: "089876543210",
        email: "dewi.p@gmail.com",
        address: "Jl. Melati No. 5, Sidoarjo",
        source: "Referral",
        interest: "Subsidi 30/72",
        leadStatus: "PROSPECT",
        marketing: "Andi",
        totalLeads: 2,
        createdAt: "18 Feb 2026",
        lastActivity: "22 Sep 2026",
    },
    {
        id: "CUST-003",
        name: "Ahmad Dahlan",
        phone: "085678901234",
        email: "-",
        address: "Perum Asri Blok C, Gresik",
        source: "Walk In",
        interest: "-",
        leadStatus: "NEW",
        marketing: "-",
        totalLeads: 0,
        createdAt: "05 Mar 2026",
        lastActivity: null,
    },
    {
        id: "CUST-004",
        name: "Siti Rahmawati",
        phone: "082145678901",
        email: "siti.rahmawati@gmail.com",
        address: "Jl. Kenanga No. 8, Lumajang",
        source: "WhatsApp",
        interest: "Subsidi 30/60",
        leadStatus: "BOOKED",
        marketing: "Erick",
        totalLeads: 1,
        createdAt: "15 Jun 2026",
        lastActivity: "24 Sep 2026",
    },
    {
        id: "CUST-005",
        name: "Rizky Pratama",
        phone: "083812345678",
        email: "rizky.pratama@gmail.com",
        address: "Jl. Diponegoro No. 21, Jember",
        source: "Facebook",
        interest: "Komersial A",
        leadStatus: "LOST",
        marketing: "Andi",
        totalLeads: 1,
        createdAt: "20 Jul 2026",
        lastActivity: "18 Sep 2026",
    },
]

const statusOptions: {
    value: LeadStatus | "ALL"
    label: string
}[] = [
        { value: "ALL", label: "Semua Status" },
        { value: "NEW", label: "New" },
        { value: "FOLLOW_UP", label: "Follow Up" },
        { value: "PROSPECT", label: "Prospect" },
        { value: "BOOKED", label: "Booked" },
        { value: "CLOSED", label: "Closed" },
        { value: "LOST", label: "Lost" },
    ]

const sourceOptions = [
    "Semua Sumber",
    "TikTok",
    "Instagram",
    "Facebook",
    "WhatsApp",
    "Referral",
    "Walk In",
    "Advertisement",
    "Website",
    "Other",
]

function getStatusLabel(status: LeadStatus | null) {
    if (!status) return "Belum ada Lead"

    const labels: Record<LeadStatus, string> = {
        NEW: "New",
        FOLLOW_UP: "Follow Up",
        PROSPECT: "Prospect",
        BOOKED: "Booked",
        CLOSED: "Closed",
        LOST: "Lost",
    }

    return labels[status]
}

function getStatusClass(status: LeadStatus | null) {
    if (!status) {
        return "bg-slate-100 text-slate-500"
    }

    const classes: Record<LeadStatus, string> = {
        NEW: "bg-blue-50 text-blue-700",
        FOLLOW_UP: "bg-amber-50 text-amber-700",
        PROSPECT: "bg-violet-50 text-violet-700",
        BOOKED: "bg-orange-50 text-orange-700",
        CLOSED: "bg-emerald-50 text-emerald-700",
        LOST: "bg-red-50 text-red-700",
    }

    return classes[status]
}

export default function CustomersPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState<LeadStatus | "ALL">("ALL")
    const [sourceFilter, setSourceFilter] = useState("Semua Sumber")
    const [showFilters, setShowFilters] = useState(false)

    const filteredCustomers = useMemo(() => {
        return customers.filter((customer) => {
            const search = searchTerm.toLowerCase().trim()

            const matchesSearch =
                !search ||
                customer.name.toLowerCase().includes(search) ||
                customer.phone.includes(search) ||
                customer.email.toLowerCase().includes(search)

            const matchesStatus =
                statusFilter === "ALL" ||
                customer.leadStatus === statusFilter

            const matchesSource =
                sourceFilter === "Semua Sumber" ||
                customer.source === sourceFilter

            return matchesSearch && matchesStatus && matchesSource
        })
    }, [searchTerm, statusFilter, sourceFilter])

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

            {/* =========================================================
                HEADER
            ========================================================== */}
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


            {/* =========================================================
                SEARCH & FILTER
            ========================================================== */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

                <div className="p-4 flex flex-col lg:flex-row gap-3">

                    {/* Search */}
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

                    {/* Filter button */}
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

                        <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                </div>


                {/* Filter panel */}
                {showFilters && (
                    <div className="border-t border-slate-100 p-4 bg-slate-50/50">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* Status */}
                            <div>
                                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">
                                    Status Lead
                                </label>

                                <div className="relative">
                                    <select
                                        value={statusFilter}
                                        onChange={(e) =>
                                            setStatusFilter(
                                                e.target.value as LeadStatus | "ALL"
                                            )
                                        }
                                        className="appearance-none w-full px-3 py-2.5 pr-9 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {statusOptions.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>

                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                                </div>
                            </div>


                            {/* Source */}
                            <div>
                                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">
                                    Sumber Lead
                                </label>

                                <div className="relative">
                                    <select
                                        value={sourceFilter}
                                        onChange={(e) =>
                                            setSourceFilter(e.target.value)
                                        }
                                        className="appearance-none w-full px-3 py-2.5 pr-9 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {sourceOptions.map((source) => (
                                            <option
                                                key={source}
                                                value={source}
                                            >
                                                {source}
                                            </option>
                                        ))}
                                    </select>

                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>


                        {/* Reset */}
                        {activeFilterCount > 0 && (
                            <div className="mt-4">
                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1.5"
                                >
                                    <X className="w-3.5 h-3.5" />
                                    Reset Filter
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>


            {/* =========================================================
                SUMMARY
            ========================================================== */}
            <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">
                    Menampilkan{" "}
                    <span className="font-bold text-slate-800">
                        {filteredCustomers.length}
                    </span>{" "}
                    dari{" "}
                    <span className="font-bold text-slate-800">
                        {customers.length}
                    </span>{" "}
                    customer
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


            {/* =========================================================
                CUSTOMER TABLE
            ========================================================== */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px] text-left text-xs text-slate-600">

                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                            <tr>
                                <th className="px-4 py-3.5">
                                    Customer
                                </th>

                                <th className="px-4 py-3.5">
                                    No. Telepon / WA
                                </th>

                                <th className="px-4 py-3.5">
                                    Sumber
                                </th>

                                <th className="px-4 py-3.5">
                                    Minat
                                </th>

                                <th className="px-4 py-3.5">
                                    Status
                                </th>

                                <th className="px-4 py-3.5">
                                    Marketing
                                </th>

                                <th className="px-4 py-3.5">
                                    Update Terakhir
                                </th>

                                <th className="px-4 py-3.5 text-center">
                                    Aksi
                                </th>
                            </tr>
                        </thead>


                        <tbody className="divide-y divide-slate-100">

                            {filteredCustomers.length > 0 ? (
                                filteredCustomers.map((customer) => (

                                    <tr
                                        key={customer.id}
                                        className="hover:bg-slate-50/80 transition-colors"
                                    >

                                        {/* Customer */}
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">

                                                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                                                    <User className="w-4 h-4" />
                                                </div>

                                                <div className="min-w-0">

                                                    <Link
                                                        href={`/customers/${customer.id}`}
                                                        className="font-bold text-slate-900 hover:text-blue-600 transition-colors block truncate"
                                                    >
                                                        {customer.name}
                                                    </Link>

                                                    <div className="flex items-center gap-2 mt-0.5">

                                                        <span className="text-[10px] text-slate-400">
                                                            #{customer.id}
                                                        </span>

                                                        {customer.totalLeads > 0 && (
                                                            <>
                                                                <span className="text-slate-300">
                                                                    •
                                                                </span>

                                                                <span className="text-[10px] text-slate-400">
                                                                    {customer.totalLeads}{" "}
                                                                    {customer.totalLeads === 1
                                                                        ? "Lead"
                                                                        : "Leads"}
                                                                </span>
                                                            </>
                                                        )}

                                                    </div>
                                                </div>
                                            </div>
                                        </td>


                                        {/* Phone */}
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-1.5 font-medium text-slate-800">

                                                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />

                                                <span>
                                                    {customer.phone}
                                                </span>

                                            </div>
                                        </td>


                                        {/* Source */}
                                        <td className="px-4 py-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-semibold whitespace-nowrap">
                                                {customer.source}
                                            </span>
                                        </td>


                                        {/* Interest */}
                                        <td className="px-4 py-4">

                                            {customer.interest !== "-" ? (
                                                <div>
                                                    <p className="font-semibold text-slate-800">
                                                        {customer.interest}
                                                    </p>

                                                    <p className="text-[10px] text-slate-400 mt-0.5">
                                                        Minat produk
                                                    </p>
                                                </div>
                                            ) : (
                                                <span className="text-slate-400">
                                                    Belum ditentukan
                                                </span>
                                            )}

                                        </td>


                                        {/* Status */}
                                        <td className="px-4 py-4">

                                            <span
                                                className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap ${getStatusClass(
                                                    customer.leadStatus
                                                )}`}
                                            >
                                                {getStatusLabel(
                                                    customer.leadStatus
                                                )}
                                            </span>

                                        </td>


                                        {/* Marketing */}
                                        <td className="px-4 py-4">

                                            {customer.marketing !== "-" ? (
                                                <span className="font-medium text-slate-700">
                                                    {customer.marketing}
                                                </span>
                                            ) : (
                                                <span className="text-slate-400">
                                                    -
                                                </span>
                                            )}

                                        </td>


                                        {/* Last Activity */}
                                        <td className="px-4 py-4 text-slate-500 whitespace-nowrap">

                                            {customer.lastActivity ?? (
                                                <span className="text-slate-400">
                                                    Belum ada aktivitas
                                                </span>
                                            )}

                                        </td>


                                        {/* Actions */}
                                        <td className="px-4 py-4 text-center">

                                            <div className="flex items-center justify-center gap-1">

                                                <Link
                                                    href={`/customers/${customer.id}`}
                                                    className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
                                                    title="Lihat Detail"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Link>

                                                <Link
                                                    href={`/customers/${customer.id}/edit`}
                                                    className="p-1.5 text-slate-500 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors"
                                                    title="Edit Customer"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </Link>

                                            </div>

                                        </td>

                                    </tr>
                                ))
                            ) : (

                                /* Empty State */
                                <tr>
                                    <td
                                        colSpan={8}
                                        className="p-12 text-center"
                                    >
                                        <div className="flex flex-col items-center">

                                            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
                                                <User className="w-5 h-5" />
                                            </div>

                                            <h3 className="text-sm font-bold text-slate-800">
                                                Customer tidak ditemukan
                                            </h3>

                                            <p className="text-xs text-slate-400 mt-1">
                                                Coba ubah kata pencarian atau filter.
                                            </p>

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