"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { projectSchema, ProjectInput } from "@/schemas/project.schema"
import { saveProject } from "@/actions/project.action"
import { X } from "lucide-react"

interface ProjectFormProps {
    initialData?: ProjectInput | null
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}

export function ProjectForm({ initialData, isOpen, onClose, onSuccess }: ProjectFormProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ProjectInput>({
        resolver: zodResolver(projectSchema),
        defaultValues: initialData || {
            name: "",
            code: "",
            address: "",
            description: "",
            isActive: true,
        },
    })

    if (!isOpen) return null

    const onSubmit = async (data: ProjectInput) => {
        setIsLoading(true)
        setError("")
        try {
            const res = await saveProject(data)
            if (res.success) {
                reset()
                onClose()
                if (onSuccess) onSuccess()
            } else {
                setError(res.error || "Failed to save project")
            }
        } catch (err: unknown) {
            setError("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-slate-900">
                        {initialData ? "Edit Proyek" : "Tambah Proyek Baru"}
                    </h2>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
                    {error && (
                        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100">
                            {error}
                        </div>
                    )}
                    
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Nama Proyek</label>
                        <input
                            {...register("name")}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Contoh: Grand Residence"
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Kode Proyek</label>
                        <input
                            {...register("code")}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Contoh: GRD-01"
                        />
                        {errors.code && <p className="text-xs text-red-500">{errors.code.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Lokasi / Alamat</label>
                        <input
                            {...register("address")}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Contoh: Jl. Sudirman No. 12"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700">Deskripsi</label>
                        <textarea
                            {...register("description")}
                            className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                            rows={3}
                            placeholder="Deskripsi singkat mengenai proyek..."
                        />
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                        <input
                            type="checkbox"
                            {...register("isActive")}
                            id="isActive"
                            className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-600"
                        />
                        <label htmlFor="isActive" className="text-sm text-slate-700">
                            Proyek Aktif (Ditampilkan)
                        </label>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-600/20 disabled:opacity-50 transition-all"
                        >
                            {isLoading ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
