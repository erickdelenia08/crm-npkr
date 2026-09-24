"use client"

import { useState } from "react"
import { Plus, Home, Edit, Trash2, Save, X, Layers, Settings2, Trash } from "lucide-react"

interface DynamicSpec {
    key: string
    value: string
}

interface ProductType {
    id: string
    name: string
    category: string
    specs: DynamicSpec[] // Spesifikasi disimpan dalam bentuk Array Key-Value dinamis
}

export default function ProductTypesPage() {
    const categories = ["Subsidi", "Komersial", "Ruko"]

    // Opsi attribute yang bisa dipilih (bisa ditarik dari DB/Master Data)
    const defaultSpecKeys = [
        "Luas Tanah",
        "Luas Bangunan",
        "Kamar Tidur",
        "Kamar Mandi",
        "Daya Listrik",
        "Sumber Air",
        "Struktur Dinding",
        "Rangka Atap",
    ]

    const [types, setTypes] = useState<ProductType[]>([
        {
            id: "TYP-01",
            name: "Subsidi A (30/60)",
            category: "Subsidi",
            specs: [
                { key: "Luas Tanah", value: "60 m²" },
                { key: "Luas Bangunan", value: "30 m²" },
                { key: "Kamar Tidur", value: "2" },
                { key: "Kamar Mandi", value: "1" },
                { key: "Daya Listrik", value: "1300 VA" },
                { key: "Sumber Air", value: "PDAM" },
            ],
        },
        {
            id: "TYP-02",
            name: "Komersial A (Tipe 45)",
            category: "Komersial",
            specs: [
                { key: "Luas Tanah", value: "84 m²" },
                { key: "Luas Bangunan", value: "45 m²" },
                { key: "Kamar Tidur", value: "2" },
                { key: "Kamar Mandi", value: "1" },
                { key: "Rangka Atap", value: "Baja Ringan" },
                { key: "Daya Listrik", value: "2200 VA" },
            ],
        },
    ])

    const [selectedCategory, setSelectedCategory] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const initialFormState: ProductType = {
        id: "",
        name: "",
        category: "Subsidi",
        specs: [
            { key: "Luas Tanah", value: "" },
            { key: "Luas Bangunan", value: "" },
        ],
    }

    const [formData, setFormData] = useState<ProductType>(initialFormState)

    // Handlers untuk Spesifikasi Dinamis
    const handleSpecChange = (index: number, field: "key" | "value", val: string) => {
        const updatedSpecs = [...formData.specs]
        updatedSpecs[index][field] = val
        setFormData({ ...formData, specs: updatedSpecs })
    }

    const handleAddSpec = () => {
        setFormData({
            ...formData,
            specs: [...formData.specs, { key: "Daya Listrik", value: "" }],
        })
    }

    const handleRemoveSpec = (index: number) => {
        const updatedSpecs = formData.specs.filter((_, i) => i !== index)
        setFormData({ ...formData, specs: updatedSpecs })
    }

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.id) {
            setTypes(types.map((t) => (t.id === formData.id ? formData : t)))
        } else {
            setTypes([
                ...types,
                { ...formData, id: `TYP-0${types.length + 1}` },
            ])
        }
        setIsModalOpen(false)
        setFormData(initialFormState)
    }

    const handleEdit = (item: ProductType) => {
        setFormData(item)
        setIsModalOpen(true)
    }

    const handleDelete = (id: string) => {
        if (confirm("Yakin ingin menghapus tipe produk ini?")) {
            setTypes(types.filter((t) => t.id !== id))
        }
    }

    const filteredTypes = selectedCategory
        ? types.filter((t) => t.category === selectedCategory)
        : types

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Product Type & Spesifikasi Dinamis
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Kelola tipe unit dan sesuaikan atribut spesifikasinya sesuai kebutuhan.
                    </p>
                </div>
                <button
                    onClick={() => {
                        setFormData(initialFormState)
                        setIsModalOpen(true)
                    }}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
                >
                    <Plus className="w-4 h-4" /> Tambah Product Type
                </button>
            </div>

            {/* Filter Category */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-slate-700">Filter Category:</span>
                </div>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="">Semua Category</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* Table Product Types */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                        <tr>
                            <th className="p-4">Product Type</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Spesifikasi Unit (Dinamis)</th>
                            <th className="p-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filteredTypes.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-bold text-slate-900">
                                    <div className="flex items-center gap-2">
                                        <Home className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>{item.name}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 font-bold text-[10px] rounded-md">
                                        {item.category}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.specs.map((spec, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-medium border border-slate-200/60"
                                            >
                                                <strong className="text-slate-900">{spec.key}:</strong> {spec.value}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="p-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="p-1.5 text-slate-500 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
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

            {/* Dynamic Modal Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl p-6 space-y-4 shadow-xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b pb-3">
                            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                <Settings2 className="w-4 h-4 text-blue-600" />
                                {formData.id ? "Edit Product Type" : "Tambah Product Type"}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="space-y-4">
                            {/* Basic Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Category <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        required
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Nama Product Type <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Contoh: Subsidi A (30/60)"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>

                            {/* Dynamic Specifications Section */}
                            <div className="border-t pt-3 space-y-3">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                        Spesifikasi Dinamis
                                    </h4>
                                    <button
                                        type="button"
                                        onClick={handleAddSpec}
                                        className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                                    >
                                        <Plus className="w-3.5 h-3.5" /> Tambah Spesifikasi
                                    </button>
                                </div>

                                <div className="space-y-2">
                                    {formData.specs.map((spec, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            {/* Dropdown / Input Nama Spesifikasi */}
                                            <select
                                                value={spec.key}
                                                onChange={(e) => handleSpecChange(index, "key", e.target.value)}
                                                className="w-1/2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            >
                                                {defaultSpecKeys.map((k) => (
                                                    <option key={k} value={k}>{k}</option>
                                                ))}
                                            </select>

                                            {/* Input Nilai Spesifikasi */}
                                            <input
                                                type="text"
                                                required
                                                placeholder="Nilai (misal: 60 m² / 2)"
                                                value={spec.value}
                                                onChange={(e) => handleSpecChange(index, "value", e.target.value)}
                                                className="w-1/2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            />

                                            {/* Delete Spec Item */}
                                            {formData.specs.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveSpec(index)}
                                                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg"
                                                >
                                                    <Trash className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Modal Actions */}
                            <div className="flex justify-end gap-2 pt-3 border-t">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-blue-600/20"
                                >
                                    <Save className="w-4 h-4" /> Simpan Product Type
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}