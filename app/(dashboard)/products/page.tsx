"use client"

import { useState } from "react"
import {
    Plus,
    Search,
    Tags,
    Edit,
    Trash2,
    Save,
    X,
    Home,
    Layers,
    Settings2,
    Trash,
    Building2,
} from "lucide-react"

// ==========================================
// TYPES
// ==========================================
type TabType = "TYPES" | "CATEGORIES"

interface DynamicSpec {
    key: string
    value: string
}

interface ProductType {
    id: string
    name: string
    category: string
    specs: DynamicSpec[]
}

interface ProductCategory {
    id: string
    name: string
    description: string
}

export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState<TabType>("TYPES")

    // ==========================================
    // STATE: CATEGORIES
    // ==========================================
    const [categories, setCategories] = useState<ProductCategory[]>([
        { id: "CAT-01", name: "Subsidi", description: "Rumah program subsidi pemerintah" },
        { id: "CAT-02", name: "Komersial", description: "Rumah komersial / non-subsidi" },
        { id: "CAT-03", name: "Ruko", description: "Rumah toko / tempat usaha" },
    ])
    const [isCatModalOpen, setIsCatModalOpen] = useState(false)
    const [catFormData, setCatFormData] = useState<ProductCategory>({
        id: "",
        name: "",
        description: "",
    })

    // ==========================================
    // STATE: PRODUCT TYPES
    // ==========================================
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
    const [isTypeModalOpen, setIsTypeModalOpen] = useState(false)

    const initialTypeFormState: ProductType = {
        id: "",
        name: "",
        category: categories[0]?.name || "Subsidi",
        specs: [
            { key: "Luas Tanah", value: "" },
            { key: "Luas Bangunan", value: "" },
        ],
    }

    const [typeFormData, setTypeFormData] = useState<ProductType>(initialTypeFormState)

    // ==========================================
    // HANDLERS: CATEGORIES
    // ==========================================
    const handleSaveCategory = (e: React.FormEvent) => {
        e.preventDefault()
        if (catFormData.id) {
            setCategories(categories.map((c) => (c.id === catFormData.id ? catFormData : c)))
        } else {
            setCategories([
                ...categories,
                { ...catFormData, id: `CAT-0${categories.length + 1}` },
            ])
        }
        setIsCatModalOpen(false)
        setCatFormData({ id: "", name: "", description: "" })
    }

    const handleEditCategory = (cat: ProductCategory) => {
        setCatFormData(cat)
        setIsCatModalOpen(true)
    }

    const handleDeleteCategory = (id: string) => {
        if (confirm("Yakin ingin menghapus kategori ini?")) {
            setCategories(categories.filter((c) => c.id !== id))
        }
    }

    // ==========================================
    // HANDLERS: PRODUCT TYPES & SPECS
    // ==========================================
    const handleSpecChange = (index: number, field: "key" | "value", val: string) => {
        const updatedSpecs = [...typeFormData.specs]
        updatedSpecs[index][field] = val
        setTypeFormData({ ...typeFormData, specs: updatedSpecs })
    }

    const handleAddSpec = () => {
        setTypeFormData({
            ...typeFormData,
            specs: [...typeFormData.specs, { key: "Daya Listrik", value: "" }],
        })
    }

    const handleRemoveSpec = (index: number) => {
        const updatedSpecs = typeFormData.specs.filter((_, i) => i !== index)
        setTypeFormData({ ...typeFormData, specs: updatedSpecs })
    }

    const handleSaveType = (e: React.FormEvent) => {
        e.preventDefault()
        if (typeFormData.id) {
            setTypes(types.map((t) => (t.id === typeFormData.id ? typeFormData : t)))
        } else {
            setTypes([
                ...types,
                { ...typeFormData, id: `TYP-0${types.length + 1}` },
            ])
        }
        setIsTypeModalOpen(false)
        setTypeFormData(initialTypeFormState)
    }

    const handleEditType = (item: ProductType) => {
        setTypeFormData(item)
        setIsTypeModalOpen(true)
    }

    const handleDeleteType = (id: string) => {
        if (confirm("Yakin ingin menghapus tipe produk ini?")) {
            setTypes(types.filter((t) => t.id !== id))
        }
    }

    const filteredTypes = selectedCategory
        ? types.filter((t) => t.category === selectedCategory)
        : types

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header Utama */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <Building2 className="w-6 h-6 text-blue-600" />
                        Katalog & Spesifikasi Produk
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">
                        Kelola tipe unit, kategori, serta atribut spesifikasi produk properti Anda.
                    </p>
                </div>

                {/* Dynamic CTA Button berdasarkan Tab aktif */}
                {activeTab === "TYPES" ? (
                    <button
                        onClick={() => {
                            setTypeFormData({
                                ...initialTypeFormState,
                                category: categories[0]?.name || "Subsidi",
                            })
                            setIsTypeModalOpen(true)
                        }}
                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
                    >
                        <Plus className="w-4 h-4" /> Tambah Product Type
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            setCatFormData({ id: "", name: "", description: "" })
                            setIsCatModalOpen(true)
                        }}
                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
                    >
                        <Plus className="w-4 h-4" /> Tambah Kategori
                    </button>
                )}
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-4 border-b border-slate-200 text-xs font-semibold">
                <button
                    onClick={() => setActiveTab("TYPES")}
                    className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-all ${activeTab === "TYPES"
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                >
                    <Layers className="w-4 h-4" />
                    Product Types & Spesifikasi
                </button>

                <button
                    onClick={() => setActiveTab("CATEGORIES")}
                    className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-all ${activeTab === "CATEGORIES"
                        ? "border-blue-600 text-blue-600 font-bold"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                >
                    <Tags className="w-4 h-4" />
                    Product Categories
                </button>
            </div>

            {/* ========================================== */}
            {/* TAB 1: PRODUCT TYPES */}
            {/* ========================================== */}
            {activeTab === "TYPES" && (
                <div className="space-y-4">
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
                                <option key={cat.id} value={cat.name}>
                                    {cat.name}
                                </option>
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
                                                    onClick={() => handleEditType(item)}
                                                    className="p-1.5 text-slate-500 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteType(item.id)}
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
                </div>
            )}

            {/* ========================================== */}
            {/* TAB 2: PRODUCT CATEGORIES */}
            {/* ========================================== */}
            {activeTab === "CATEGORIES" && (
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
                                                onClick={() => handleEditCategory(cat)}
                                                className="p-1.5 text-slate-500 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteCategory(cat.id)}
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
            )}

            {/* ========================================== */}
            {/* MODAL 1: PRODUCT TYPE FORM */}
            {/* ========================================== */}
            {isTypeModalOpen && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg rounded-2xl p-6 space-y-4 shadow-xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b pb-3">
                            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                <Settings2 className="w-4 h-4 text-blue-600" />
                                {typeFormData.id ? "Edit Product Type" : "Tambah Product Type"}
                            </h3>
                            <button onClick={() => setIsTypeModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveType} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Category <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        required
                                        value={typeFormData.category}
                                        onChange={(e) => setTypeFormData({ ...typeFormData, category: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.name}>{cat.name}</option>
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
                                        value={typeFormData.name}
                                        onChange={(e) => setTypeFormData({ ...typeFormData, name: e.target.value })}
                                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>

                            {/* Spesifikasi Dinamis */}
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
                                    {typeFormData.specs.map((spec, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <select
                                                value={spec.key}
                                                onChange={(e) => handleSpecChange(index, "key", e.target.value)}
                                                className="w-1/2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            >
                                                {defaultSpecKeys.map((k) => (
                                                    <option key={k} value={k}>{k}</option>
                                                ))}
                                            </select>

                                            <input
                                                type="text"
                                                required
                                                placeholder="Nilai (misal: 60 m² / 2)"
                                                value={spec.value}
                                                onChange={(e) => handleSpecChange(index, "value", e.target.value)}
                                                className="w-1/2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            />

                                            {typeFormData.specs.length > 1 && (
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

                            <div className="flex justify-end gap-2 pt-3 border-t">
                                <button
                                    type="button"
                                    onClick={() => setIsTypeModalOpen(false)}
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

            {/* ========================================== */}
            {/* MODAL 2: CATEGORY FORM */}
            {/* ========================================== */}
            {isCatModalOpen && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-md rounded-2xl p-6 space-y-4 shadow-xl">
                        <div className="flex items-center justify-between border-b pb-3">
                            <h3 className="font-bold text-slate-900 text-sm">
                                {catFormData.id ? "Edit Category" : "Tambah Category Baru"}
                            </h3>
                            <button
                                onClick={() => setIsCatModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveCategory} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Nama Kategori <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Contoh: Subsidi, Komersial, Ruko"
                                    value={catFormData.name}
                                    onChange={(e) =>
                                        setCatFormData({ ...catFormData, name: e.target.value })
                                    }
                                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Deskripsi
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Catatan singkat seputar kategori ini..."
                                    value={catFormData.description}
                                    onChange={(e) =>
                                        setCatFormData({ ...catFormData, description: e.target.value })
                                    }
                                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-2 border-t">
                                <button
                                    type="button"
                                    onClick={() => setIsCatModalOpen(false)}
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