"use client"

import { useState } from "react"
import Link from "next/link"
import {
    Building,
    Plus,
    Search,
    MapPin,
    Home,
    ArrowRight,
    Edit3,
    Trash2,
    Layers,
} from "lucide-react"

type Project = {
    id: string
    name: string
    location: string
    description: string
    totalUnits: number
    availableUnits: number
    startingPrice: number
    status: "ACTIVE" | "COMPLETED" | "UPCOMING"
}

const initialProjects: Project[] = [
    {
        id: "PRJ-01",
        name: "Grand Residence Phase 1",
        location: "Kepanjen, Kabupaten Malang",
        description: "Hunian modern minimalis dekat fasilitas umum dan pusat kota.",
        totalUnits: 48,
        availableUnits: 12,
        startingPrice: 185000000,
        status: "ACTIVE",
    },
    {
        id: "PRJ-02",
        name: "Emerald Commercial Hub",
        location: "Lowokwaru, Kota Malang",
        description: "Kawasan ruko & komersial strategis pusat bisnis.",
        totalUnits: 12,
        availableUnits: 3,
        startingPrice: 650000000,
        status: "ACTIVE",
    },
    {
        id: "PRJ-03",
        name: "Griya Harmony Villa",
        location: "Batu, Jawa Timur",
        description: "Proyek villa eksklusif bernuansa pegunungan.",
        totalUnits: 20,
        availableUnits: 20,
        startingPrice: 850000000,
        status: "UPCOMING",
    },
]

export default function ProjectsPage() {
    const [projects] = useState<Project[]>(initialProjects)
    const [searchQuery, setSearchQuery] = useState("")

    const formatRupiah = (val: number) =>
        new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(val)

    const filteredProjects = projects.filter(
        (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.location.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <Building className="w-6 h-6 text-blue-600" />
                        Daftar Proyek & Perumahan
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Kelola seluruh area proyek perumahan dan pengembangan unit.
                    </p>
                </div>
                <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all">
                    <Plus className="w-4 h-4" /> Tambah Proyek Baru
                </button>
            </div>

            {/* Filter Search */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="relative w-full sm:w-80">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Cari nama proyek atau lokasi..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                    >
                        <div className="p-5 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    {project.id}
                                </span>
                                {project.status === "ACTIVE" && (
                                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px] rounded-full">
                                        Penjualan Aktif
                                    </span>
                                )}
                                {project.status === "UPCOMING" && (
                                    <span className="px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 font-bold text-[10px] rounded-full">
                                        Segera Hadir
                                    </span>
                                )}
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                    {project.location}
                                </p>
                            </div>

                            <p className="text-xs text-slate-600 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                                <div>
                                    <span className="text-slate-400 text-[10px] block">Unit Tersedia</span>
                                    <span className="font-bold text-slate-800 flex items-center gap-1">
                                        <Home className="w-3.5 h-3.5 text-blue-600" />
                                        {project.availableUnits} / {project.totalUnits} Unit
                                    </span>
                                </div>
                                <div>
                                    <span className="text-slate-400 text-[10px] block">Mulai Dari</span>
                                    <span className="font-bold text-emerald-600">
                                        {formatRupiah(project.startingPrice)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <button className="p-1.5 text-slate-400 hover:text-amber-600 rounded-lg">
                                    <Edit3 className="w-4 h-4" />
                                </button>
                                <button className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            <Link
                                href={`/projects/${project.id}`}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                            >
                                Detail Proyek <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}