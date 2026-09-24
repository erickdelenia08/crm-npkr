"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
    Home,
    Plus,
    Search,
    Edit,
    HardHat,
    ChevronRight,
} from "lucide-react"

type UnitStatus = "AVAILABLE" | "HOLD" | "BOOKED" | "AKAD" | "SOLD" | "CANCELLED"
type ConstructionStatus =
    | "NOT_STARTED"
    | "FOUNDATION"
    | "STRUCTURE"
    | "WALL"
    | "ROOF"
    | "CEILING"
    | "FINISHING"
    | "COMPLETED"

export default function UnitsPage() {
    const router = useRouter()

    // Master Data Filter
    const projects = ["Griya Asri 1", "Griya Asri 2", "Kemuning Residence"]
    const blocks = ["Blok A", "Blok B", "Blok C", "Blok H"]
    const categories = ["Subsidi", "Komersial", "Ruko"]

    const allProductTypes = [
        { name: "Subsidi A (30/60)", category: "Subsidi" },
        { name: "Subsidi B (36/60)", category: "Subsidi" },
        { name: "Komersial A (Tipe 45)", category: "Komersial" },
        { name: "Komersial B (Tipe 54)", category: "Komersial" },
        { name: "Ruko A (2 Lantai)", category: "Ruko" },
    ]

    // Mock Database Units
    const [units, setUnits] = useState([
        {
            id: "UNT-001",
            unitCode: "A-01",
            project: "Griya Asri 1",
            block: "Blok A",
            category: "Subsidi",
            type: "Subsidi A (30/60)",
            price: 168000000,
            unitStatus: "AVAILABLE" as UnitStatus,
            constructionStatus: "COMPLETED" as ConstructionStatus,
        },
        {
            id: "UNT-002",
            unitCode: "B-05",
            project: "Griya Asri 1",
            block: "Blok B",
            category: "Komersial",
            type: "Komersial A (Tipe 45)",
            price: 350000000,
            unitStatus: "BOOKED" as UnitStatus,
            constructionStatus: "STRUCTURE" as ConstructionStatus,
        },
        {
            id: "UNT-003",
            unitCode: "R-01",
            project: "Kemuning Residence",
            block: "Blok H",
            category: "Ruko",
            type: "Ruko A (2 Lantai)",
            price: 650000000,
            unitStatus: "SOLD" as UnitStatus,
            constructionStatus: "COMPLETED" as ConstructionStatus,
        },
    ])

    // Filter States
    const [searchTerm, setSearchTerm] = useState("")
    const [filterProject, setFilterProject] = useState("")
    const [filterBlock, setFilterBlock] = useState("")
    const [filterCategory, setFilterCategory] = useState("")
    const [filterType, setFilterType] = useState("")
    const [filterUnitStatus, setFilterUnitStatus] = useState("")
    const [filterConstructionStatus, setFilterConstructionStatus] = useState("")

    const filterAvailableTypes = filterCategory
        ? allProductTypes.filter((t) => t.category === filterCategory)
        : allProductTypes

    // Filter Logic
    const filteredUnits = units.filter((unit) => {
        const matchSearch =
            unit.unitCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
            unit.project.toLowerCase().includes(searchTerm.toLowerCase())
        const matchProject = filterProject ? unit.project === filterProject : true
        const matchBlock = filterBlock ? unit.block === filterBlock : true
        const matchCategory = filterCategory ? unit.category === filterCategory : true
        const matchType = filterType ? unit.type === filterType : true
        const matchUnitStatus = filterUnitStatus ? unit.unitStatus === filterUnitStatus : true
        const matchConstStatus = filterConstructionStatus
            ? unit.constructionStatus === filterConstructionStatus
            : true

        return (
            matchSearch &&
            matchProject &&
            matchBlock &&
            matchCategory &&
            matchType &&
            matchUnitStatus &&
            matchConstStatus
        )
    })

    const getUnitStatusBadge = (status: UnitStatus) => {
        switch (status) {
            case "AVAILABLE":
                return "bg-emerald-50 text-emerald-700 border-emerald-200"
            case "HOLD":
                return "bg-purple-50 text-purple-700 border-purple-200"
            case "BOOKED":
                return "bg-amber-50 text-amber-700 border-amber-200"
            case "AKAD":
                return "bg-blue-50 text-blue-700 border-blue-200"
            case "SOLD":
                return "bg-slate-100 text-slate-700 border-slate-300"
            case "CANCELLED":
                return "bg-rose-50 text-rose-700 border-rose-200"
            default:
                return "bg-slate-50 text-slate-600 border-slate-200"
        }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Inventory Unit Properti
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Klik pada baris unit untuk melihat detail lengkap.
                    </p>
                </div>

                {/* Link Ke Halaman Tambah Unit */}
                <Link
                    href="/units/create"
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
                >
                    <Plus className="w-4 h-4" /> Tambah Unit Baru
                </Link>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                    <div className="relative flex-1 min-w-[180px]">
                        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Cari kode unit..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <select
                        value={filterProject}
                        onChange={(e) => setFilterProject(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
                    >
                        <option value="">Semua Project</option>
                        {projects.map((p) => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>

                    <select
                        value={filterBlock}
                        onChange={(e) => setFilterBlock(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
                    >
                        <option value="">Semua Blok</option>
                        {blocks.map((b) => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>

                    <select
                        value={filterCategory}
                        onChange={(e) => {
                            setFilterCategory(e.target.value)
                            setFilterType("")
                        }}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
                    >
                        <option value="">Semua Category</option>
                        {categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>

                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
                    >
                        <option value="">Semua Tipe</option>
                        {filterAvailableTypes.map((t, idx) => (
                            <option key={idx} value={t.name}>{t.name}</option>
                        ))}
                    </select>

                    <select
                        value={filterUnitStatus}
                        onChange={(e) => setFilterUnitStatus(e.target.value)}
                        className="px-3 py-2 bg-blue-50/50 border border-blue-200 rounded-xl text-xs font-bold text-blue-900"
                    >
                        <option value="">Status Penjualan: Semua</option>
                        <option value="AVAILABLE">AVAILABLE</option>
                        <option value="HOLD">HOLD</option>
                        <option value="BOOKED">BOOKED</option>
                        <option value="AKAD">AKAD</option>
                        <option value="SOLD">SOLD</option>
                        <option value="CANCELLED">CANCELLED</option>
                    </select>

                    <select
                        value={filterConstructionStatus}
                        onChange={(e) => setFilterConstructionStatus(e.target.value)}
                        className="px-3 py-2 bg-amber-50/50 border border-amber-200 rounded-xl text-xs font-bold text-amber-900"
                    >
                        <option value="">Status Konstruksi: Semua</option>
                        <option value="NOT_STARTED">NOT STARTED</option>
                        <option value="FOUNDATION">FOUNDATION</option>
                        <option value="STRUCTURE">STRUCTURE</option>
                        <option value="WALL">WALL</option>
                        <option value="ROOF">ROOF</option>
                        <option value="CEILING">CEILING</option>
                        <option value="FINISHING">FINISHING</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>
                </div>
            </div>

            {/* Units Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600 min-w-[700px]">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                        <tr>
                            <th className="p-4">Kode & Project</th>
                            <th className="p-4">Category & Type</th>
                            <th className="p-4">Harga Unit</th>
                            <th className="p-4 text-center">Status Unit</th>
                            <th className="p-4 text-center">Status Konstruksi</th>
                            <th className="p-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filteredUnits.length > 0 ? (
                            filteredUnits.map((u) => (
                                <tr
                                    key={u.id}
                                    onClick={() => router.push(`/units/${u.id}`)}
                                    className="hover:bg-slate-50 cursor-pointer transition-colors group"
                                >
                                    <td className="p-4 font-bold text-slate-900">
                                        <div className="flex items-center gap-2">
                                            <Home className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                                            <span>{u.block} - {u.unitCode}</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-normal block pl-6">
                                            {u.project}
                                        </span>
                                    </td>

                                    <td className="p-4 space-y-1">
                                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-bold text-[10px]">
                                            {u.category}
                                        </span>
                                        <p className="text-slate-800 font-semibold">{u.type}</p>
                                    </td>

                                    <td className="p-4 font-bold text-slate-900">
                                        Rp {u.price.toLocaleString("id-ID")}
                                    </td>

                                    <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                                        <select
                                            value={u.unitStatus}
                                            onChange={(e) =>
                                                setUnits(
                                                    units.map((item) =>
                                                        item.id === u.id
                                                            ? { ...item, unitStatus: e.target.value as UnitStatus }
                                                            : item
                                                    )
                                                )
                                            }
                                            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border focus:outline-none cursor-pointer ${getUnitStatusBadge(
                                                u.unitStatus
                                            )}`}
                                        >
                                            <option value="AVAILABLE">AVAILABLE</option>
                                            <option value="HOLD">HOLD</option>
                                            <option value="BOOKED">BOOKED</option>
                                            <option value="AKAD">AKAD</option>
                                            <option value="SOLD">SOLD</option>
                                            <option value="CANCELLED">CANCELLED</option>
                                        </select>
                                    </td>

                                    <td className="p-4 text-center">
                                        <span className="inline-flex items-center gap-1 font-bold text-[10px] text-slate-700 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
                                            <HardHat className="w-3 h-3 text-amber-600" />
                                            {u.constructionStatus.replace("_", " ")}
                                        </span>
                                    </td>

                                    <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-center justify-center gap-1">
                                            <button
                                                onClick={() => router.push(`/units/${u.id}`)}
                                                className="p-1.5 text-slate-500 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="p-8 text-center text-slate-400 text-xs">
                                    Tidak ada unit yang memenuhi kriteria filter.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}