"use client"

import { useState } from "react"
import { Plus, Search, Tags, Edit, Trash2, Save, X } from "lucide-react"

export default function ProductCategoriesPage() {
    const [categories, setCategories] = useState([
        { id: "CAT-01", name: "Subsidi", description: "Rumah program subsidi pemerintah" },
        { id: "CAT-02", name: "Komersial", description: "Rumah komersial / non-subsidi" },
        { id: "CAT-03", name: "Ruko", description: "Rumah toko / tempat usaha" },
    ])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({ id: "", name: "", description: "" })

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.id) {
            setCategories(categories.map((c) => (c.id === formData.id ? formData : c)))
        } else {
            setCategories([
                ...categories,
                { ...formData, id: `CAT-0${categories.length + 1}` },
            ])
        }
        setIsModalOpen(false)
        setFormData({ id: "", name: "", description: "" })
    }

    const handleEdit = (cat: typeof formData) => {
        setFormData(cat)
        setIsModalOpen(true)
    }

    const handleDelete = (id: string) => {
        if (confirm("Yakin ingin menghapus kategori ini?")) {
            setCategories(categories.filter((c) => c.id !== id))
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Product Category
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Kelola kategori utama unit properti yang ditawarkan.
                    </p>
                </div>
                <button
                    onClick={() => {
                        setFormData({ id: "", name: "", description: "" })
                        setIsModalOpen(true)
                    }}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
                >
                    <Plus className="w-4 h-4" /> Tambah Kategori
                </button>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                        <tr>
                            <th className="p-4">Nama Kategori</th>
                            <th className="p-4">Deskripsi</th>
                            <th className="p-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {categories.map((cat) => (
                            <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                                    <Tags className="w-4 h-4 text-blue-600" />
                                    {cat.name}
                                </td>
                                <td className="p-4 text-slate-600">{cat.description || "-"}</td>
                                <td className="p-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => handleEdit(cat)}
                                            className="p-1.5 text-slate-500 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(cat.id)}
                                            className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-slate-100 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-md rounded-2xl p-6 space-y-4 shadow-xl">
                        <div className="flex items-center justify-between border-b pb-3">
                            <h3 className="font-bold text-slate-900 text-sm">
                                {formData.id ? "Edit Category" : "Tambah Category Baru"}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Nama Kategori <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Contoh: Subsidi, Komersial, Ruko"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Deskripsi
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Catatan singkat seputar kategori ini..."
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, description: e.target.value })
                                    }
                                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-2 border-t">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5"
                                >
                                    <Save className="w-4 h-4" /> Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}