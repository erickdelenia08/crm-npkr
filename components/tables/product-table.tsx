"use client"

import { useState } from "react"
import {
    Plus,
    Tags,
    Edit,
    Trash2,
    Layers,
    Home,
    Building2,
} from "lucide-react"

import { ProductCategoryForm } from "@/components/forms/product-category-form"
import { ProductTypeForm } from "@/components/forms/product-type-form"
import { deleteCategory, deleteProductType } from "@/actions/product.action"
import { ProductCategoryInput, ProductTypeInput } from "@/schemas/product.schema"

// Define matched types instead of generic unknown
type CategoryData = {
    id: string
    name: string
    code: string
    description: string | null
    isActive: boolean
}

type ProductTypeData = {
    id: string
    categoryId: string
    name: string
    code: string
    landArea: number | null
    buildingArea: number | null
    bedrooms: number | null
    bathrooms: number | null
    electricity: string | null
    waterSource: string | null
    wallMaterial: string | null
    roofMaterial: string | null
    description: string | null
    isActive: boolean
    category: {
        id: string
        name: string
    }
}

interface ProductTableProps {
    categories: CategoryData[]
    types: ProductTypeData[]
}

type TabType = "TYPES" | "CATEGORIES"

export function ProductTable({ categories, types }: ProductTableProps) {
    const [activeTab, setActiveTab] = useState<TabType>("TYPES")
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("")

    // Category Modal State
    const [isCatModalOpen, setIsCatModalOpen] = useState(false)
    const [catInitialData, setCatInitialData] = useState<ProductCategoryInput | null>(null)

    // Type Modal State
    const [isTypeModalOpen, setIsTypeModalOpen] = useState(false)
    const [typeInitialData, setTypeInitialData] = useState<ProductTypeInput | null>(null)

    // Handlers
    const handleEditCategory = (cat: CategoryData) => {
        setCatInitialData({
            id: cat.id,
            name: cat.name,
            code: cat.code,
            description: cat.description || "",
            isActive: cat.isActive,
        })
        setIsCatModalOpen(true)
    }

    const handleAddCategory = () => {
        setCatInitialData(null)
        setIsCatModalOpen(true)
    }

    const handleDeleteCategory = async (id: string) => {
        if (confirm("Yakin ingin menghapus kategori ini? Pastikan tidak ada tipe produk yang terkait.")) {
            await deleteCategory(id)
        }
    }

    const handleEditType = (type: ProductTypeData) => {
        setTypeInitialData({
            id: type.id,
            categoryId: type.categoryId,
            name: type.name,
            code: type.code,
            landArea: type.landArea,
            buildingArea: type.buildingArea,
            bedrooms: type.bedrooms,
            bathrooms: type.bathrooms,
            electricity: type.electricity || "",
            waterSource: type.waterSource || "",
            wallMaterial: type.wallMaterial || "",
            roofMaterial: type.roofMaterial || "",
            description: type.description || "",
            isActive: type.isActive,
        })
        setIsTypeModalOpen(true)
    }

    const handleAddType = () => {
        setTypeInitialData(null)
        setIsTypeModalOpen(true)
    }

    const handleDeleteType = async (id: string) => {
        if (confirm("Yakin ingin menghapus tipe produk ini?")) {
            await deleteProductType(id)
        }
    }

    const filteredTypes = selectedCategoryFilter
        ? types.filter((t) => t.category.name === selectedCategoryFilter)
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

                {activeTab === "TYPES" ? (
                    <button
                        onClick={handleAddType}
                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all"
                    >
                        <Plus className="w-4 h-4" /> Tambah Product Type
                    </button>
                ) : (
                    <button
                        onClick={handleAddCategory}
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

            {/* TAB 1: PRODUCT TYPES */}
            {activeTab === "TYPES" && (
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-slate-400" />
                            <span className="text-xs font-bold text-slate-700">Filter Category:</span>
                        </div>
                        <select
                            value={selectedCategoryFilter}
                            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
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

                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
                        <table className="w-full min-w-max text-left text-xs text-slate-600">
                            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                                <tr>
                                    <th className="p-4">Product Type</th>
                                    <th className="p-4">Category</th>
                                    <th className="p-4">Spesifikasi Unit</th>
                                    <th className="p-4 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredTypes.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-slate-400">Belum ada product type.</td>
                                    </tr>
                                ) : (
                                    filteredTypes.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="p-4 font-bold text-slate-900">
                                                <div className="flex items-center gap-2">
                                                    <Home className="w-4 h-4 text-emerald-600 shrink-0" />
                                                    <div className="flex flex-col">
                                                        <span>{item.name}</span>
                                                        <span className="text-[10px] text-slate-400 font-normal">{item.code}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 font-bold text-[10px] rounded-md">
                                                    {item.category?.name || "-"}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex flex-wrap gap-1.5 max-w-sm">
                                                    {item.landArea && <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-medium border border-slate-200/60"><strong>LT:</strong> {item.landArea} m²</span>}
                                                    {item.buildingArea && <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-medium border border-slate-200/60"><strong>LB:</strong> {item.buildingArea} m²</span>}
                                                    {item.bedrooms && <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-medium border border-slate-200/60"><strong>KT:</strong> {item.bedrooms}</span>}
                                                    {item.bathrooms && <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-medium border border-slate-200/60"><strong>KM:</strong> {item.bathrooms}</span>}
                                                    {item.electricity && <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-medium border border-slate-200/60"><strong>Listrik:</strong> {item.electricity}</span>}
                                                    {item.waterSource && <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-medium border border-slate-200/60"><strong>Air:</strong> {item.waterSource}</span>}
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
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* TAB 2: PRODUCT CATEGORIES */}
            {activeTab === "CATEGORIES" && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                            <tr>
                                <th className="p-4">Kode</th>
                                <th className="p-4">Nama Kategori</th>
                                <th className="p-4">Deskripsi</th>
                                <th className="p-4 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {categories.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-slate-400">Belum ada kategori.</td>
                                </tr>
                            ) : (
                                categories.map((cat) => (
                                    <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-mono text-[10px] text-slate-500">{cat.code}</td>
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
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            <ProductCategoryForm
                isOpen={isCatModalOpen}
                onClose={() => setIsCatModalOpen(false)}
                initialData={catInitialData}
            />

            <ProductTypeForm
                isOpen={isTypeModalOpen}
                onClose={() => setIsTypeModalOpen(false)}
                initialData={typeInitialData}
                categories={categories.map(c => ({ id: c.id, name: c.name }))}
            />
        </div>
    )
}
