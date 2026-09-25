"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Building,
    ArrowLeft,
    MapPin,
    Home,
    Layers,
    Plus,
    Edit,
    FolderPlus,
    X,
} from "lucide-react"
import { saveBlock } from "@/actions/project.action"

type ProjectData = {
    id: string
    name: string
    code: string
    address: string | null
    description: string | null
    blocks: {
        id: string
        name: string
        code: string
        units: any[]
    }[]
}

type UnitData = {
    id: string
    code: string
    price: any
    status: string
    block: { name: string }
    productType: { name: string, category: { name: string } }
}

interface ProjectDetailClientProps {
    project: ProjectData
    units: UnitData[]
}

export function ProjectDetailClient({ project, units }: ProjectDetailClientProps) {
    const [activeTab, setActiveTab] = useState<"BLOCKS" | "UNITS" | "TYPES">("BLOCKS")

    // Modal State
    const [isBlockModalOpen, setIsBlockModalOpen] = useState(false)
    const [blockName, setBlockName] = useState("")
    const [blockCode, setBlockCode] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Derived stats
    const totalUnitsCount = units.length
    const availableUnitsCount = units.filter(u => u.status === "AVAILABLE").length
    const soldUnitsCount = units.filter(u => u.status === "SOLD").length
    const bookedUnitsCount = units.filter(u => u.status === "BOOKED").length

    const handleAddBlock = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!blockName || !blockCode) return

        setIsSubmitting(true)
        const res = await saveBlock({
            projectId: project.id,
            name: blockName,
            code: blockCode
        })

        if (res.success) {
            setIsBlockModalOpen(false)
            setBlockName("")
            setBlockCode("")
        } else {
            alert(res.error || "Gagal menyimpan blok")
        }
        setIsSubmitting(false)
    }

    const formatRupiah = (val: number | null | undefined) => {
        if (!val) return "-"
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(val)
    }

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Daftar Proyek
                </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Building className="w-5 h-5 text-blue-600" />
                            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                                {project.name}
                            </h1>
                            <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-blue-200">
                                {project.code}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-2">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                {project.address || "Lokasi belum diatur"}
                            </span>
                        </div>
                        {project.description && (
                            <p className="text-xs text-slate-600 mt-2 max-w-2xl">
                                {project.description}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer">
                            <Edit className="w-3.5 h-3.5" /> Edit Proyek
                        </button>
                        <button
                            onClick={() => setIsBlockModalOpen(true)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-1.5 cursor-pointer"
                        >
                            <Plus className="w-4 h-4" /> Tambah Blok Baru
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Total Unit</span>
                        <p className="text-xl font-black text-slate-800 mt-0.5">{totalUnitsCount}</p>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                        <span className="text-[10px] font-bold text-emerald-600 uppercase">Available</span>
                        <p className="text-xl font-black text-emerald-700 mt-0.5">{availableUnitsCount}</p>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                        <span className="text-[10px] font-bold text-amber-600 uppercase">Booked / Proses</span>
                        <p className="text-xl font-black text-amber-700 mt-0.5">{bookedUnitsCount}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                        <span className="text-[10px] font-bold text-blue-600 uppercase">Terjual (Sold)</span>
                        <p className="text-xl font-black text-blue-700 mt-0.5">{soldUnitsCount}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 border-b border-slate-200 text-xs font-semibold">
                <button
                    onClick={() => setActiveTab("BLOCKS")}
                    className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-all cursor-pointer ${activeTab === "BLOCKS"
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                >
                    <FolderPlus className="w-4 h-4" />
                    Daftar Blok / Cluster ({project.blocks.length})
                </button>

                <button
                    onClick={() => setActiveTab("UNITS")}
                    className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-all cursor-pointer ${activeTab === "UNITS"
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                >
                    <Home className="w-4 h-4" />
                    Semua Unit di Proyek Ini
                </button>

                <button
                    onClick={() => setActiveTab("TYPES")}
                    className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-all cursor-pointer ${activeTab === "TYPES"
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                >
                    <Layers className="w-4 h-4" />
                    Tipe Produk
                </button>
            </div>

            {activeTab === "BLOCKS" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.blocks.map((block) => (
                        <div
                            key={block.id}
                            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-blue-300 transition-all"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-slate-400 uppercase">{block.code}</span>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                                    {block.units.length} Unit
                                </span>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-900">{block.name}</h3>
                            </div>
                            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-[11px] text-slate-400">Pengaturan Blok</span>
                                <Link href="/units" className="text-xs font-bold text-blue-600 hover:underline">
                                    Kelola Unit &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                    {project.blocks.length === 0 && (
                        <div className="col-span-1 md:col-span-3 text-center py-8 text-slate-500 text-sm">
                            Belum ada blok yang terdaftar.
                        </div>
                    )}
                </div>
            )}

            {activeTab === "UNITS" && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                            <tr>
                                <th className="p-4">Blok</th>
                                <th className="p-4">Kode Unit</th>
                                <th className="p-4">Tipe Produk</th>
                                <th className="p-4">Harga Unit</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {units.map((unit) => (
                                <tr key={unit.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-semibold text-slate-500">{unit.block.name}</td>
                                    <td className="p-4 font-bold text-slate-900">{unit.code}</td>
                                    <td className="p-4 font-medium text-slate-700">{unit.productType.name}</td>
                                    <td className="p-4 font-bold text-slate-900">{formatRupiah(Number(unit.price))}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                                            unit.status === "AVAILABLE" ? "bg-emerald-50 text-emerald-700" :
                                            unit.status === "SOLD" ? "bg-slate-100 text-slate-700" :
                                            "bg-blue-50 text-blue-700"
                                        }`}>
                                            {unit.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {units.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-slate-400 text-xs">
                                        Belum ada unit yang terdaftar.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "TYPES" && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-500">
                    Tipe rumah/ruko yang terdaftar di proyek ini dipisahkan berdasarkan pilihan master tipe dari katalog produk.
                </div>
            )}

            {isBlockModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                            <h3 className="text-base font-bold text-slate-900">
                                Tambah Blok / Cluster
                            </h3>
                            <button
                                onClick={() => setIsBlockModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleAddBlock} className="space-y-4 mt-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Nama Blok / Cluster <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Contoh: Blok A atau Cluster Lavender"
                                    value={blockName}
                                    onChange={(e) => setBlockName(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Kode Blok <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Contoh: BLK-A"
                                    value={blockCode}
                                    onChange={(e) => setBlockCode(e.target.value)}
                                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                                <button
                                    type="button"
                                    disabled={isSubmitting}
                                    onClick={() => setIsBlockModalOpen(false)}
                                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors disabled:opacity-50"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? "Menyimpan..." : "Simpan Blok"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
