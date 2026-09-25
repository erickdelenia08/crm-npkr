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
} from "lucide-react"
import { ProjectForm } from "@/components/forms/project-form"
import { deleteProject } from "@/actions/project.action"
import { ProjectInput } from "@/schemas/project.schema"

type ProjectWithStats = {
    id: string
    name: string
    code: string
    address: string | null
    description: string | null
    isActive: boolean
    blocks?: { units: { status: string }[] }[] 
}

export function ProjectTable({ projects }: { projects: ProjectWithStats[] }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [editingProject, setEditingProject] = useState<ProjectInput | null>(null)

    const handleEdit = (project: ProjectWithStats) => {
        setEditingProject({
            id: project.id,
            name: project.name,
            code: project.code,
            address: project.address || "",
            description: project.description || "",
            isActive: project.isActive,
        })
        setIsFormOpen(true)
    }

    const handleAddNew = () => {
        setEditingProject(null)
        setIsFormOpen(true)
    }

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this project?")) {
            await deleteProject(id)
        }
    }
    
    const filteredProjects = projects.filter(
        (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (p.address && p.address.toLowerCase().includes(searchQuery.toLowerCase())) ||
            p.code.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const formatRupiah = (val: number) =>
        new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(val)

    return (
        <div className="max-w-6xl mx-auto space-y-6">
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
                <button 
                    onClick={handleAddNew}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
                >
                    <Plus className="w-4 h-4" /> Tambah Proyek Baru
                </button>
            </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => {
                    const totalUnits = project.blocks?.reduce((acc, block) => acc + block.units.length, 0) || 0;
                    const availableUnits = project.blocks?.reduce((acc, block) => acc + block.units.filter(u => u.status === 'AVAILABLE').length, 0) || 0;

                    return (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                        >
                            <div className="p-5 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                        {project.code}
                                    </span>
                                    {project.isActive ? (
                                        <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px] rounded-full">
                                            Aktif
                                        </span>
                                    ) : (
                                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 font-bold text-[10px] rounded-full">
                                            Nonaktif
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                        {project.address || "Belum ada lokasi"}
                                    </p>
                                </div>

                                <p className="text-xs text-slate-600 line-clamp-2 h-8">
                                    {project.description || "Tidak ada deskripsi."}
                                </p>

                                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                                    <div>
                                        <span className="text-slate-400 text-[10px] block">Unit Tersedia</span>
                                        <span className="font-bold text-slate-800 flex items-center gap-1">
                                            <Home className="w-3.5 h-3.5 text-blue-600" />
                                            {availableUnits} / {totalUnits} Unit
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-slate-400 text-[10px] block">Mulai Dari</span>
                                        <span className="font-bold text-emerald-600">
                                            {formatRupiah(0)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <button 
                                        onClick={() => handleEdit(project)}
                                        className="p-1.5 text-slate-400 hover:text-amber-600 rounded-lg transition-colors"
                                    >
                                        <Edit3 className="w-4 h-4" />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(project.id)}
                                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"
                                    >
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
                    )
                })}
            </div>

            <ProjectForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                initialData={editingProject}
            />
        </div>
    )
}
