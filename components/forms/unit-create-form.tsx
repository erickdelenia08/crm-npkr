"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
    ArrowLeft,
    Building2,
    Save,
    Tag,
    DollarSign,
    Layers,
    Plus,
} from "lucide-react"
import { saveUnit, bulkCreateUnits } from "@/actions/unit.action"

type InputMode = "single" | "bulk"

interface ProjectData {
    id: string
    name: string
    blocks: { id: string; name: string }[]
}

interface CategoryData {
    id: string
    name: string
    productTypes: { id: string; name: string }[]
}

interface UnitCreateFormProps {
    projects: ProjectData[]
    categories: CategoryData[]
}

export function UnitCreateForm({ projects, categories }: UnitCreateFormProps) {
    const router = useRouter()

    const [mode, setMode] = useState<InputMode>("single")
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Form states
    const [projectId, setProjectId] = useState(projects[0]?.id || "")
    const [blockId, setBlockId] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [productTypeId, setProductTypeId] = useState("")
    
    // Single mode states
    const [unitCode, setUnitCode] = useState("")
    const [price, setPrice] = useState<number | "">("")
    const [unitStatus, setUnitStatus] = useState("AVAILABLE")
    const [constructionStatus, setConstructionStatus] = useState("NOT_STARTED")

    // Bulk mode states
    const [prefix, setPrefix] = useState("")
    const [startNumber, setStartNumber] = useState<number | "">(1)
    const [endNumber, setEndNumber] = useState<number | "">(10)
    const [priceMode, setPriceMode] = useState<"PRODUCT_TYPE" | "CUSTOM">("PRODUCT_TYPE")
    const [customPrice, setCustomPrice] = useState<number | "">("")

    // Derived data
    const availableBlocks = useMemo(() => {
        return projects.find((p) => p.id === projectId)?.blocks || []
    }, [projectId, projects])

    const availableTypes = useMemo(() => {
        return categories.find((c) => c.id === categoryId)?.productTypes || []
    }, [categoryId, categories])

    // Auto-select first item when parent changes
    useMemo(() => {
        if (availableBlocks.length > 0 && !availableBlocks.find(b => b.id === blockId)) {
            setBlockId(availableBlocks[0].id)
        }
    }, [availableBlocks, blockId])

    useMemo(() => {
        if (availableTypes.length > 0 && !availableTypes.find(t => t.id === productTypeId)) {
            setProductTypeId(availableTypes[0].id)
        }
    }, [availableTypes, productTypeId])

    const bulkUnitCodes = useMemo(() => {
        const start = Number(startNumber)
        const end = Number(endNumber)

        if (!prefix.trim() || !Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < start) {
            return []
        }

        const total = end - start + 1
        if (total > 500) return []

        const width = Math.max(String(start).length, String(end).length, 2)
        return Array.from({ length: total }, (_, index) => {
            const number = start + index
            return `${prefix.trim()}${String(number).padStart(width, "0")}`
        })
    }, [prefix, startNumber, endNumber])

    const handleSingleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!unitCode.trim()) return alert("Kode / nomor unit wajib diisi.")
        if (!blockId) return alert("Blok wajib dipilih.")
        if (!productTypeId) return alert("Tipe properti wajib dipilih.")
        if (Number(price) <= 0) return alert("Harga unit harus lebih dari 0.")

        setIsSubmitting(true)
        try {
            const res = await saveUnit({
                blockId,
                productTypeId,
                number: unitCode, // Extracting number logic might be needed, using unitCode as number for simplicity
                code: unitCode,
                price: Number(price),
                status: unitStatus,
                constructionStatus,
            })

            if (res.success) {
                alert("Unit baru berhasil ditambahkan!")
                router.push("/units")
            } else {
                alert(res.error || "Gagal menyimpan unit.")
            }
        } catch (error) {
            alert("Terjadi kesalahan.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleBulkSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!prefix.trim()) return alert("Prefix nomor unit wajib diisi.")
        if (!blockId) return alert("Blok wajib dipilih.")
        if (!productTypeId) return alert("Tipe properti wajib dipilih.")
        
        const start = Number(startNumber)
        const end = Number(endNumber)
        
        if (!Number.isInteger(start) || !Number.isInteger(end)) return alert("Nomor awal dan akhir harus berupa angka.")
        if (start < 0 || end < start) return alert("Rentang nomor unit tidak valid.")
        if (end - start + 1 > 500) return alert("Maksimal 500 unit sekali bulk input.")
        if (priceMode === "CUSTOM" && Number(customPrice) <= 0) return alert("Harga custom harus lebih dari 0.")
        if (bulkUnitCodes.length === 0) return alert("Tidak ada unit yang dapat dibuat.")

        setIsSubmitting(true)
        try {
            const res = await bulkCreateUnits({
                blockId,
                productTypeId,
                prefix,
                startNumber: start,
                endNumber: end,
                priceMode,
                customPrice: priceMode === "CUSTOM" ? Number(customPrice) : null,
                status: unitStatus,
                constructionStatus,
            })

            if (res.success) {
                alert(`${res.count} unit berhasil ditambahkan!`)
                router.push("/units")
            } else {
                alert(res.error || "Gagal membuat unit.")
            }
        } catch (error) {
            alert("Terjadi kesalahan.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-12">
            <div className="flex items-center justify-between">
                <Link
                    href="/units"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Batal & Kembali
                </Link>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Tambah Unit Properti
                </h1>
                <p className="text-sm text-slate-500 mt-0.5">
                    Tambahkan satu unit atau beberapa unit sekaligus ke inventaris.
                </p>
            </div>

            <div className="bg-slate-100 p-1 rounded-2xl flex gap-1">
                <button
                    type="button"
                    onClick={() => setMode("single")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${mode === "single"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                        }`}
                >
                    <Plus className="w-4 h-4" />
                    Tambah 1 Unit
                </button>

                <button
                    type="button"
                    onClick={() => setMode("bulk")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${mode === "bulk"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                        }`}
                >
                    <Layers className="w-4 h-4" />
                    Tambah Banyak Unit
                </button>
            </div>

            <form
                onSubmit={mode === "single" ? handleSingleSubmit : handleBulkSubmit}
                className="space-y-6"
            >
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b pb-3">
                        <Building2 className="w-4 h-4 text-blue-600" />
                        Lokasi & Identitas Unit
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Pilih Proyek <span className="text-rose-500">*</span>
                            </label>
                            <select
                                value={projectId}
                                onChange={(e) => setProjectId(e.target.value)}
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                {projects.map((project) => (
                                    <option key={project.id} value={project.id}>{project.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Blok <span className="text-rose-500">*</span>
                            </label>
                            <select
                                value={blockId}
                                onChange={(e) => setBlockId(e.target.value)}
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                {availableBlocks.map((block) => (
                                    <option key={block.id} value={block.id}>{block.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {mode === "single" && (
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Kode / Nomor Unit <span className="text-rose-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Contoh: G-01"
                                required
                                value={unitCode}
                                onChange={(e) => setUnitCode(e.target.value)}
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                    )}

                    {mode === "bulk" && (
                        <div className="border border-blue-100 bg-blue-50/50 rounded-2xl p-4 space-y-4">
                            <div>
                                <h3 className="text-sm font-bold text-slate-800">Nomor Unit Otomatis</h3>
                                <p className="text-xs text-slate-500 mt-1">
                                    Sistem akan membuat kode unit berdasarkan prefix dan rentang nomor.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Prefix <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Contoh: G-"
                                        value={prefix}
                                        onChange={(e) => setPrefix(e.target.value)}
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Nomor Awal</label>
                                    <input
                                        type="number"
                                        min={0}
                                        value={startNumber}
                                        onChange={(e) => setStartNumber(e.target.value === "" ? "" : Number(e.target.value))}
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Nomor Akhir</label>
                                    <input
                                        type="number"
                                        min={0}
                                        value={endNumber}
                                        onChange={(e) => setEndNumber(e.target.value === "" ? "" : Number(e.target.value))}
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-slate-500">Preview Unit</span>
                                    <span className="text-xs font-bold text-blue-600">{bulkUnitCodes.length} unit</span>
                                </div>
                                {bulkUnitCodes.length > 0 ? (
                                    <div className="flex flex-wrap gap-2">
                                        {bulkUnitCodes.slice(0, 50).map((code) => (
                                            <span key={code} className="px-2.5 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-700">
                                                {code}
                                            </span>
                                        ))}
                                        {bulkUnitCodes.length > 50 && (
                                            <span className="px-2.5 py-1.5 text-[11px] font-bold text-slate-400">
                                                + {bulkUnitCodes.length - 50} lainnya
                                            </span>
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-xs text-slate-400">Isi prefix dan rentang nomor untuk melihat preview.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b pb-3">
                        <Tag className="w-4 h-4 text-blue-600" />
                        Kategori & Tipe Properti
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Kategori <span className="text-rose-500">*</span>
                            </label>
                            <select
                                required
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="">-- Pilih Kategori --</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Tipe Properti <span className="text-rose-500">*</span>
                            </label>
                            <select
                                required
                                disabled={!categoryId}
                                value={productTypeId}
                                onChange={(e) => setProductTypeId(e.target.value)}
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
                            >
                                <option value="">-- Pilih Tipe --</option>
                                {availableTypes.map((type) => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b pb-3">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                        Harga & Status Awal
                    </h2>

                    {mode === "single" && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Harga Unit (Rp) <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    min={0}
                                    required
                                    placeholder="Contoh: 168000000"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Status Penjualan Awal</label>
                                <select
                                    value={unitStatus}
                                    onChange={(e) => setUnitStatus(e.target.value)}
                                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="AVAILABLE">AVAILABLE</option>
                                    <option value="HOLD">HOLD</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Status Konstruksi Awal</label>
                                <select
                                    value={constructionStatus}
                                    onChange={(e) => setConstructionStatus(e.target.value)}
                                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="NOT_STARTED">NOT STARTED</option>
                                    <option value="FOUNDATION">FOUNDATION</option>
                                    <option value="STRUCTURE">STRUCTURE</option>
                                    <option value="WALL">WALL</option>
                                    <option value="ROOF">ROOF</option>
                                    <option value="CEILING">CEILING</option>
                                    <option value="FINISHING">FINISHING</option>
                                    <option value="COMPLETED">COMPLETED</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {mode === "bulk" && (
                        <div className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-2">Harga Unit</label>
                                    <div className="space-y-2">
                                        <label className="flex items-start gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                            <input
                                                type="radio"
                                                name="priceMode"
                                                value="PRODUCT_TYPE"
                                                checked={priceMode === "PRODUCT_TYPE"}
                                                onChange={() => setPriceMode("PRODUCT_TYPE")}
                                                className="mt-0.5"
                                            />
                                            <div>
                                                <div className="text-xs font-bold text-slate-800">Ikuti harga Product Type</div>
                                                <div className="text-[11px] text-slate-400 mt-0.5">Harga akan mengikuti harga dasar tipe properti.</div>
                                            </div>
                                        </label>

                                        <label className="flex items-start gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                            <input
                                                type="radio"
                                                name="priceMode"
                                                value="CUSTOM"
                                                checked={priceMode === "CUSTOM"}
                                                onChange={() => setPriceMode("CUSTOM")}
                                                className="mt-0.5"
                                            />
                                            <div className="flex-1">
                                                <div className="text-xs font-bold text-slate-800">Gunakan harga tertentu</div>
                                                <div className="text-[11px] text-slate-400 mt-0.5">Semua unit yang dibuat akan menggunakan harga ini.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {priceMode === "CUSTOM" && (
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Harga Custom (Rp) <span className="text-rose-500">*</span></label>
                                        <input
                                            type="number"
                                            min={0}
                                            required
                                            value={customPrice}
                                            onChange={(e) => setCustomPrice(e.target.value === "" ? "" : Number(e.target.value))}
                                            className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Status Penjualan Awal</label>
                                    <select
                                        value={unitStatus}
                                        onChange={(e) => setUnitStatus(e.target.value)}
                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        <option value="AVAILABLE">AVAILABLE</option>
                                        <option value="HOLD">HOLD</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Status Konstruksi Awal</label>
                                    <select
                                        value={constructionStatus}
                                        onChange={(e) => setConstructionStatus(e.target.value)}
                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        <option value="NOT_STARTED">NOT STARTED</option>
                                        <option value="FOUNDATION">FOUNDATION</option>
                                        <option value="STRUCTURE">STRUCTURE</option>
                                        <option value="WALL">WALL</option>
                                        <option value="ROOF">ROOF</option>
                                        <option value="CEILING">CEILING</option>
                                        <option value="FINISHING">FINISHING</option>
                                        <option value="COMPLETED">COMPLETED</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                    <Link
                        href="/units"
                        className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        Batal
                    </Link>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-600/20 disabled:opacity-50 transition-all flex items-center gap-2"
                    >
                        <Save className="w-4 h-4" />
                        {isSubmitting ? "Menyimpan..." : "Simpan Unit"}
                    </button>
                </div>
            </form>
        </div>
    )
}
