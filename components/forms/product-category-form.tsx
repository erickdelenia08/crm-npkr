"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { productCategorySchema, ProductCategoryInput } from "@/schemas/product.schema"
import { saveCategory } from "@/actions/product.action"
import { X, Save } from "lucide-react"

interface ProductCategoryFormProps {
    initialData?: ProductCategoryInput | null
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}

export function ProductCategoryForm({ initialData, isOpen, onClose, onSuccess }: ProductCategoryFormProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ProductCategoryInput>({
        resolver: zodResolver(productCategorySchema),
        defaultValues: {
            name: "",
            code: "",
            description: "",
            isActive: true,
        },
    })

    useEffect(() => {
        if (isOpen) {
            reset(initialData || {
                name: "",
                code: "",
                description: "",
                isActive: true,
            })
        }
    }, [isOpen, initialData, reset])

    if (!isOpen) return null

    const onSubmit = async (data: ProductCategoryInput) => {
        setIsLoading(true)
        setError("")
        try {
            const res = await saveCategory(data)
            if (res.success) {
                reset()
                onClose()
                if (onSuccess) onSuccess()
            } else {
                setError(res.error || "Failed to save category")
            }
        } catch (err: unknown) {
            setError("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-2xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b pb-3">
                    <h3 className="font-bold text-slate-900 text-sm">
                        {initialData ? "Edit Category" : "Tambah Category Baru"}
                    </h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {error && (
                        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                            Nama Kategori <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("name")}
                            placeholder="Contoh: Subsidi, Komersial, Ruko"
                            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                            Kode Kategori <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("code")}
                            placeholder="Contoh: SUB"
                            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.code && <p className="text-xs text-red-500 mt-1">{errors.code.message}</p>}
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                            Deskripsi
                        </label>
                        <textarea
                            {...register("description")}
                            rows={3}
                            placeholder="Catatan singkat seputar kategori ini..."
                            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            {...register("isActive")}
                            id="catIsActive"
                            className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-600"
                        />
                        <label htmlFor="catIsActive" className="text-xs text-slate-700">
                            Aktif
                        </label>
                    </div>

                    <div className="flex justify-end gap-2 pt-2 border-t">
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
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 disabled:opacity-50"
                        >
                            <Save className="w-4 h-4" /> {isLoading ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
