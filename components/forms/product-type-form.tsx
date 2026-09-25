"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { productTypeSchema, ProductTypeInput } from "@/schemas/product.schema"
import { saveProductType } from "@/actions/product.action"
import { X, Save, Settings2 } from "lucide-react"

interface ProductTypeFormProps {
    initialData?: ProductTypeInput | null
    categories: { id: string, name: string }[]
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}

export function ProductTypeForm({ initialData, categories, isOpen, onClose, onSuccess }: ProductTypeFormProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ProductTypeInput>({
        resolver: zodResolver(productTypeSchema),
        defaultValues: {
            categoryId: categories[0]?.id || "",
            name: "",
            code: "",
            landArea: null,
            buildingArea: null,
            bedrooms: null,
            bathrooms: null,
            electricity: "",
            waterSource: "",
            wallMaterial: "",
            roofMaterial: "",
            description: "",
            isActive: true,
        },
    })

    useEffect(() => {
        if (isOpen) {
            reset(initialData || {
                categoryId: categories[0]?.id || "",
                name: "",
                code: "",
                landArea: null,
                buildingArea: null,
                bedrooms: null,
                bathrooms: null,
                electricity: "",
                waterSource: "",
                wallMaterial: "",
                roofMaterial: "",
                description: "",
                isActive: true,
            })
        }
    }, [isOpen, initialData, categories, reset])

    if (!isOpen) return null

    const onSubmit = async (data: ProductTypeInput) => {
        setIsLoading(true)
        setError("")
        try {
            const res = await saveProductType(data)
            if (res.success) {
                reset()
                onClose()
                if (onSuccess) onSuccess()
            } else {
                setError(res.error || "Failed to save product type")
            }
        } catch (err: unknown) {
            setError("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-xl max-h-[90vh] flex flex-col overflow-hidden">
                <div className="flex items-center justify-between border-b pb-3 mb-4 shrink-0">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <Settings2 className="w-4 h-4 text-blue-600" />
                        {initialData ? "Edit Product Type" : "Tambah Product Type"}
                    </h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="overflow-y-auto flex-1 pr-2 space-y-4">
                    {error && (
                        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100 shrink-0">
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Kategori <span className="text-red-500">*</span>
                            </label>
                            <select
                                {...register("categoryId")}
                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="">Pilih Kategori</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                            {errors.categoryId && <p className="text-xs text-red-500 mt-1">{errors.categoryId.message}</p>}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Nama Product Type <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("name")}
                                placeholder="Contoh: Subsidi A (30/60)"
                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Kode Type <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("code")}
                                placeholder="Contoh: TYP-A"
                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {errors.code && <p className="text-xs text-red-500 mt-1">{errors.code.message}</p>}
                        </div>

                        <div className="flex items-center gap-2 pt-6">
                            <input
                                type="checkbox"
                                {...register("isActive")}
                                id="typeIsActive"
                                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-600"
                            />
                            <label htmlFor="typeIsActive" className="text-xs text-slate-700">
                                Aktif (Tersedia)
                            </label>
                        </div>
                    </div>

                    <div className="border-t pt-4 mt-4">
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                            Spesifikasi Dasar
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[10px] text-slate-600 font-semibold mb-1">Luas Tanah (m²)</label>
                                <input type="number" {...register("landArea")} className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-600 font-semibold mb-1">Luas Bangunan (m²)</label>
                                <input type="number" {...register("buildingArea")} className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-600 font-semibold mb-1">Kamar Tidur</label>
                                <input type="number" {...register("bedrooms")} className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-600 font-semibold mb-1">Kamar Mandi</label>
                                <input type="number" {...register("bathrooms")} className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-600 font-semibold mb-1">Daya Listrik</label>
                                <input type="text" {...register("electricity")} placeholder="e.g. 1300 VA" className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-600 font-semibold mb-1">Sumber Air</label>
                                <input type="text" {...register("waterSource")} placeholder="e.g. PDAM" className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-600 font-semibold mb-1">Struktur Dinding</label>
                                <input type="text" {...register("wallMaterial")} placeholder="e.g. Bata Merah" className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-600 font-semibold mb-1">Rangka Atap</label>
                                <input type="text" {...register("roofMaterial")} placeholder="e.g. Baja Ringan" className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-2">
                        <label className="block text-[10px] text-slate-600 font-semibold mb-1">Deskripsi Tambahan</label>
                        <textarea {...register("description")} rows={2} className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                    </div>

                    <div className="flex justify-end gap-2 pt-4 border-t shrink-0">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 shadow-md disabled:opacity-50"
                        >
                            <Save className="w-4 h-4" /> {isLoading ? "Menyimpan..." : "Simpan Product Type"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
