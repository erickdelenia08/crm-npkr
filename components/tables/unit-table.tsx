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
import { updateUnitStatus } from "@/actions/unit.action"

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

interface UnitData {
    id: string
    code: string
    price: number | null
    status: UnitStatus
    constructionStatus: ConstructionStatus
    block: {
        id: string
        name: string
        project: {
            id: string
            name: string
        }
    }
    productType: {
        id: string
        name: string
        category: {
            id: string
            name: string
        }
    }
}

interface UnitTableProps {
    initialUnits: UnitData[]
    projects: { id: string; name: string; blocks: { id: string; name: string }[] }[]
    categories: { id: string; name: string; productTypes: { id: string; name: string }[] }[]
}

export function UnitTable({ initialUnits, projects, categories }: UnitTableProps) {
    const router = useRouter()
    const [units, setUnits] = useState(initialUnits)

    // Filter States
    const [searchTerm, setSearchTerm] = useState("")
    const [filterProjectId, setFilterProjectId] = useState("")
    const [filterBlockId, setFilterBlockId] = useState("")
    const [filterCategoryId, setFilterCategoryId] = useState("")
    const [filterTypeId, setFilterTypeId] = useState("")
    const [filterUnitStatus, setFilterUnitStatus] = useState("")
    const [filterConstructionStatus, setFilterConstructionStatus] = useState("")

    const selectedProject = projects.find(p => p.id === filterProjectId)
    const availableBlocks = selectedProject ? selectedProject.blocks : projects.flatMap(p => p.blocks)

    const selectedCategory = categories.find(c => c.id === filterCategoryId)
    const availableTypes = selectedCategory ? selectedCategory.productTypes : categories.flatMap(c => c.productTypes)

    // Filter Logic
    const filteredUnits = units.filter((unit) => {
        const matchSearch =
            unit.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
            unit.block.project.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchProject = filterProjectId ? unit.block.project.id === filterProjectId : true
        const matchBlock = filterBlockId ? unit.block.id === filterBlockId : true
        const matchCategory = filterCategoryId ? unit.productType.category.id === filterCategoryId : true
        const matchType = filterTypeId ? unit.productType.id === filterTypeId : true
        const matchUnitStatus = filterUnitStatus ? unit.status === filterUnitStatus : true
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

    const handleStatusChange = async (unitId: string, newStatus: string) => {
        const optimisticUnits = units.map(u => u.id === unitId ? { ...u, status: newStatus as UnitStatus } : u)
        setUnits(optimisticUnits)
        
        const res = await updateUnitStatus(unitId, newStatus)
        if (!res.success) {
            // revert
            setUnits(initialUnits)
            alert("Failed to update status")
        }
    }

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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Inventory Unit Properti
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Klik pada baris unit untuk melihat detail lengkap.
                    </p>
                </div>

                <Link
                    href="/units/create"
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
                >
                    <Plus className="w-4 h-4" /> Tambah Unit Baru
                </Link>
            </div>

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
                        value={filterProjectId}
                        onChange={(e) => {
                            setFilterProjectId(e.target.value)
                            setFilterBlockId("")
                        }}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
                    >
                        <option value="">Semua Project</option>
                        {projects.map((p) => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>

                    <select
                        value={filterBlockId}
                        onChange={(e) => setFilterBlockId(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
                    >
                        <option value="">Semua Blok</option>
                        {availableBlocks.map((b) => (
                            <option key={b.id} value={b.id}>{b.name}</option>
                        ))}
                    </select>

                    <select
                        value={filterCategoryId}
                        onChange={(e) => {
                            setFilterCategoryId(e.target.value)
                            setFilterTypeId("")
                        }}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
                    >
                        <option value="">Semua Category</option>
                        {categories.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>

                    <select
                        value={filterTypeId}
                        onChange={(e) => setFilterTypeId(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
                    >
                        <option value="">Semua Tipe</option>
                        {availableTypes.map((t) => (
                            <option key={t.id} value={t.id}>{t.name}</option>
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
                                            <span>{u.block.name} - {u.code}</span>
                                        </div>
                                        <span className="text-[10px] text-slate-400 font-normal block pl-6">
                                            {u.block.project.name}
                                        </span>
                                    </td>

                                    <td className="p-4 space-y-1">
                                        <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-bold text-[10px]">
                                            {u.productType.category.name}
                                        </span>
                                        <p className="text-slate-800 font-semibold">{u.productType.name}</p>
                                    </td>

                                    <td className="p-4 font-bold text-slate-900">
                                        {u.price ? `Rp ${Number(u.price).toLocaleString("id-ID")}` : "-"}
                                    </td>

                                    <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                                        <select
                                            value={u.status}
                                            onChange={(e) => handleStatusChange(u.id, e.target.value)}
                                            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border focus:outline-none cursor-pointer ${getUnitStatusBadge(
                                                u.status
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
