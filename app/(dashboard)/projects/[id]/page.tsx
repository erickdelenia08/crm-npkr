"use client"

import { useState, use } from "react"
import Link from "next/link"
import {
    Building,
    ArrowLeft,
    MapPin,
    Home,
    Layers,
    Plus,
    Search,
    Edit,
    CheckCircle2,
    Clock,
    XCircle,
} from "lucide-react"

type PageProps = {
    params: Promise<{ id: string }>
}

export default function ProjectDetailPage({ params }: PageProps) {
    // Unwrapping Dynamic Route Parameter (Next.js 15+)
    const resolvedParams = use(params)
    const projectId = resolvedParams.id

    const [activeTab, setActiveTab] = useState<"UNITS" | "TYPES">("UNITS")

    // Mock Project Data
    const project = {
        id: projectId,
        name: "Grand Residence Phase 1",
        location: "Kepanjen, Kabupaten Malang",
        description: "Hunian eksklusif dengan konsep green-living dekat gerbang tol.",
        totalUnits: 48,
        availableUnits: 12,
        bookedUnits: 8,
        soldUnits: 28,
    }

    // Mock Units in Project
    const units = [
        { id: "U-101", code: "A-01", type: "Subsidi A (30/60)", price: 185000000, status: "AVAILABLE" },
        { id: "U-102", code: "A-02", type: "Subsidi A (30/60)", price: 185000000, status: "BOOKED" },
        { id: "U-103", code: "B-01", type: "Komersial A (Tipe 45)", price: 350000000, status: "SOLD" },
    ]

    const formatRupiah = (val: number) =>
        new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(val)

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Navigation Back */}
            <div>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Proyek
                </Link>
            </div>

            {/* Project Banner & Overview Header */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md uppercase">
                                ID: {project.id}
                            </span>
                            <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                Active Project
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                            {project.name}
                        </h1>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {project.location}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5">
                            <Edit className="w-3.5 h-3.5" /> Edit Proyek
                        </button>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-1.5">
                            <Plus className="w-4 h-4" /> Tambah Unit
                        </button>
                    </div>
                </div>

                {/* Project Stats Quick Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Total Unit</span>
                        <p className="text-lg font-bold text-slate-900">{project.totalUnits}</p>
                    </div>
                    <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                        <span className="text-[10px] font-bold text-emerald-600 uppercase">Available</span>
                        <p className="text-lg font-bold text-emerald-700">{project.availableUnits}</p>
                    </div>
                    <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                        <span className="text-[10px] font-bold text-amber-600 uppercase">Booked</span>
                        <p className="text-lg font-bold text-amber-700">{project.bookedUnits}</p>
                    </div>
                    <div className="p-3 bg-slate-100/70 rounded-xl border border-slate-200">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Sold Out</span>
                        <p className="text-lg font-bold text-slate-700">{project.soldUnits}</p>
                    </div>
                </div>
            </div>

            {/* Sub-Navigation Tabs */}
            <div className="flex items-center gap-4 border-b border-slate-200 text-xs font-semibold">
                <button
                    onClick={() => setActiveTab("UNITS")}
                    className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-all ${activeTab === "UNITS"
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                >
                    <Home className="w-4 h-4" />
                    Daftar Unit di Proyek Ini
                </button>

                <button
                    onClick={() => setActiveTab("TYPES")}
                    className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-all ${activeTab === "TYPES"
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                >
                    <Layers className="w-4 h-4" />
                    Tipe Produk Disediakan
                </button>
            </div>

            {/* TAB CONTENT: UNITS TABLE */}
            {activeTab === "UNITS" && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                            <tr>
                                <th className="p-4">Kode Blok/Unit</th>
                                <th className="p-4">Tipe Produk</th>
                                <th className="p-4">Harga Unit</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {units.map((unit) => (
                                <tr key={unit.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-bold text-slate-900">{unit.code}</td>
                                    <td className="p-4 font-medium text-slate-700">{unit.type}</td>
                                    <td className="p-4 font-bold text-slate-900">{formatRupiah(unit.price)}</td>
                                    <td className="p-4">
                                        {unit.status === "AVAILABLE" && (
                                            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px] rounded-full">
                                                Available
                                            </span>
                                        )}
                                        {unit.status === "BOOKED" && (
                                            <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 font-bold text-[10px] rounded-full">
                                                Booked
                                            </span>
                                        )}
                                        {unit.status === "SOLD" && (
                                            <span className="px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200 font-bold text-[10px] rounded-full">
                                                Sold
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4 text-center">
                                        <button className="text-xs font-bold text-blue-600 hover:underline">
                                            Edit Unit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* TAB CONTENT: PRODUCT TYPES */}
            {activeTab === "TYPES" && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-500">
                    Tipe rumah/ruko yang terdaftar di proyek ini dipisahkan berdasarkan pilihan master tipe dari katalog produk.
                </div>
            )}
        </div>
    )
}