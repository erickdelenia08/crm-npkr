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
    Minus,
} from "lucide-react"

type InputMode = "single" | "bulk"

export default function CreateUnitPage() {
    const router = useRouter()

    // =========================================================
    // MASTER DATA
    // =========================================================
    // Sementara masih hardcoded sesuai struktur kode sebelumnya.
    // Nanti diganti dengan data dari database/API.
    const projects = ["Griya Asri 1", "Griya Asri 2", "Kemuning Residence"]

    const blocks = ["Blok A", "Blok B", "Blok C", "Blok H"]

    const categories = ["Subsidi", "Komersial", "Ruko"]

    const allProductTypes = [
        { name: "Subsidi A (30/60)", category: "Subsidi" },
        { name: "Subsidi B (36/60)", category: "Subsidi" },
        { name: "Komersial A (Tipe 45)", category: "Komersial" },
        { name: "Komersial B (Tipe 54)", category: "Komersial" },
        { name: "Ruko A (2 Lantai)", category: "Ruko" },
    ]

    // =========================================================
    // MODE
    // =========================================================
    const [mode, setMode] = useState<InputMode>("single")

    // =========================================================
    // FORM DATA
    // =========================================================
    const [formData, setFormData] = useState({
        unitCode: "",
        project: projects[0],
        block: blocks[0],
        category: "",
        type: "",
        price: 0,
        unitStatus: "AVAILABLE",
        constructionStatus: "NOT_STARTED",
    })

    // =========================================================
    // BULK DATA
    // =========================================================
    const [bulkData, setBulkData] = useState({
        prefix: "",
        startNumber: 1,
        endNumber: 10,
        priceMode: "PRODUCT_TYPE" as "PRODUCT_TYPE" | "CUSTOM",
        customPrice: 0,
        unitStatus: "AVAILABLE",
        constructionStatus: "NOT_STARTED",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    // =========================================================
    // FILTER PRODUCT TYPE BERDASARKAN CATEGORY
    // =========================================================
    const availableTypes = useMemo(() => {
        if (!formData.category) return []

        return allProductTypes.filter(
            (t) => t.category === formData.category
        )
    }, [formData.category])

    // =========================================================
    // BULK UNIT PREVIEW
    // =========================================================
    const bulkUnitCodes = useMemo(() => {
        const start = Number(bulkData.startNumber)
        const end = Number(bulkData.endNumber)

        if (
            !bulkData.prefix.trim() ||
            !Number.isInteger(start) ||
            !Number.isInteger(end) ||
            start < 0 ||
            end < start
        ) {
            return []
        }

        const total = end - start + 1

        // Batas supaya user tidak tidak sengaja membuat ribuan unit.
        if (total > 500) return []

        const width = Math.max(
            String(start).length,
            String(end).length,
            2
        )

        return Array.from({ length: total }, (_, index) => {
            const number = start + index
            return `${bulkData.prefix.trim()}${String(number).padStart(width, "0")}`
        })
    }, [
        bulkData.prefix,
        bulkData.startNumber,
        bulkData.endNumber,
    ])

    // =========================================================
    // RESET FORM SAAT GANTI MODE
    // =========================================================
    const handleModeChange = (newMode: InputMode) => {
        setMode(newMode)
    }

    // =========================================================
    // SINGLE SUBMIT
    // =========================================================
    const handleSingleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.unitCode.trim()) {
            alert("Kode / nomor unit wajib diisi.")
            return
        }

        if (!formData.category) {
            alert("Kategori wajib dipilih.")
            return
        }

        if (!formData.type) {
            alert("Tipe properti wajib dipilih.")
            return
        }

        if (formData.price <= 0) {
            alert("Harga unit harus lebih dari 0.")
            return
        }

        setIsSubmitting(true)

        try {
            // TODO:
            // Panggil Server Action / API untuk menyimpan unit.
            console.log("Simpan 1 Unit:", formData)

            alert("Unit baru berhasil ditambahkan!")

            router.push("/units")
        } catch (error) {
            console.error(error)
            alert("Gagal menyimpan unit.")
        } finally {
            setIsSubmitting(false)
        }
    }

    // =========================================================
    // BULK SUBMIT
    // =========================================================
    const handleBulkSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!bulkData.prefix.trim()) {
            alert("Prefix nomor unit wajib diisi.")
            return
        }

        if (!formData.category) {
            alert("Kategori wajib dipilih.")
            return
        }

        if (!formData.type) {
            alert("Tipe properti wajib dipilih.")
            return
        }

        const start = Number(bulkData.startNumber)
        const end = Number(bulkData.endNumber)

        if (!Number.isInteger(start) || !Number.isInteger(end)) {
            alert("Nomor awal dan akhir harus berupa angka.")
            return
        }

        if (start < 0 || end < start) {
            alert("Rentang nomor unit tidak valid.")
            return
        }

        const total = end - start + 1

        if (total > 500) {
            alert("Maksimal 500 unit sekali bulk input.")
            return
        }

        if (bulkData.priceMode === "CUSTOM" && bulkData.customPrice <= 0) {
            alert("Harga custom harus lebih dari 0.")
            return
        }

        if (bulkUnitCodes.length === 0) {
            alert("Tidak ada unit yang dapat dibuat.")
            return
        }

        setIsSubmitting(true)

        try {
            const units = bulkUnitCodes.map((code) => ({
                unitCode: code,
                project: formData.project,
                block: formData.block,
                category: formData.category,
                type: formData.type,

                // Kalau mengikuti Product Type,
                // backend nanti mengambil harga dari ProductType.
                price:
                    bulkData.priceMode === "CUSTOM"
                        ? bulkData.customPrice
                        : null,

                priceMode: bulkData.priceMode,

                unitStatus: bulkData.unitStatus,
                constructionStatus: bulkData.constructionStatus,
            }))

            // TODO:
            // Panggil Server Action / API bulk create.
            console.log("Bulk create units:", units)

            alert(`${units.length} unit berhasil ditambahkan!`)

            router.push("/units")
        } catch (error) {
            console.error(error)
            alert("Gagal membuat unit.")
        } finally {
            setIsSubmitting(false)
        }
    }

    // =========================================================
    // COMMON FORM
    // =========================================================
    const handleCategoryChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            category: value,
            type: "",
        }))
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-12">

            {/* =================================================
                HEADER
            ================================================= */}
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

            {/* =================================================
                MODE SWITCHER
            ================================================= */}
            <div className="bg-slate-100 p-1 rounded-2xl flex gap-1">
                <button
                    type="button"
                    onClick={() => handleModeChange("single")}
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
                    onClick={() => handleModeChange("bulk")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${mode === "bulk"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                        }`}
                >
                    <Layers className="w-4 h-4" />
                    Tambah Banyak Unit
                </button>
            </div>

            {/* =================================================
                FORM
            ================================================= */}
            <form
                onSubmit={
                    mode === "single"
                        ? handleSingleSubmit
                        : handleBulkSubmit
                }
                className="space-y-6"
            >

                {/* =================================================
                    SECTION 1
                ================================================= */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">

                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b pb-3">
                        <Building2 className="w-4 h-4 text-blue-600" />
                        Lokasi & Identitas Unit
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* PROJECT */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Pilih Proyek{" "}
                                <span className="text-rose-500">*</span>
                            </label>

                            <select
                                value={formData.project}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        project: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                {projects.map((project) => (
                                    <option
                                        key={project}
                                        value={project}
                                    >
                                        {project}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* BLOCK */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Blok{" "}
                                <span className="text-rose-500">*</span>
                            </label>

                            <select
                                value={formData.block}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        block: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                {blocks.map((block) => (
                                    <option
                                        key={block}
                                        value={block}
                                    >
                                        {block}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* SINGLE UNIT CODE */}
                    {mode === "single" && (
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Kode / Nomor Unit{" "}
                                <span className="text-rose-500">*</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Contoh: G-01"
                                required
                                value={formData.unitCode}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        unitCode: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                    )}

                    {/* BULK UNIT NUMBER */}
                    {mode === "bulk" && (
                        <div className="border border-blue-100 bg-blue-50/50 rounded-2xl p-4 space-y-4">

                            <div>
                                <h3 className="text-sm font-bold text-slate-800">
                                    Nomor Unit Otomatis
                                </h3>

                                <p className="text-xs text-slate-500 mt-1">
                                    Sistem akan membuat kode unit berdasarkan prefix dan rentang nomor.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                {/* PREFIX */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Prefix{" "}
                                        <span className="text-rose-500">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Contoh: G-"
                                        value={bulkData.prefix}
                                        onChange={(e) =>
                                            setBulkData({
                                                ...bulkData,
                                                prefix: e.target.value,
                                            })
                                        }
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />

                                    <p className="text-[10px] text-slate-400 mt-1">
                                        Contoh: G-
                                    </p>
                                </div>

                                {/* START */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Nomor Awal
                                    </label>

                                    <input
                                        type="number"
                                        min={0}
                                        value={bulkData.startNumber}
                                        onChange={(e) =>
                                            setBulkData({
                                                ...bulkData,
                                                startNumber: Number(
                                                    e.target.value
                                                ),
                                            })
                                        }
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                {/* END */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Nomor Akhir
                                    </label>

                                    <input
                                        type="number"
                                        min={0}
                                        value={bulkData.endNumber}
                                        onChange={(e) =>
                                            setBulkData({
                                                ...bulkData,
                                                endNumber: Number(
                                                    e.target.value
                                                ),
                                            })
                                        }
                                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>

                            {/* PREVIEW */}
                            <div className="bg-white border border-slate-200 rounded-xl p-4">

                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-slate-500">
                                        Preview Unit
                                    </span>

                                    <span className="text-xs font-bold text-blue-600">
                                        {bulkUnitCodes.length} unit
                                    </span>
                                </div>

                                {bulkUnitCodes.length > 0 ? (
                                    <div className="flex flex-wrap gap-2">
                                        {bulkUnitCodes.slice(0, 50).map(
                                            (code) => (
                                                <span
                                                    key={code}
                                                    className="px-2.5 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-700"
                                                >
                                                    {code}
                                                </span>
                                            )
                                        )}

                                        {bulkUnitCodes.length > 50 && (
                                            <span className="px-2.5 py-1.5 text-[11px] font-bold text-slate-400">
                                                +{" "}
                                                {bulkUnitCodes.length - 50}{" "}
                                                lainnya
                                            </span>
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-xs text-slate-400">
                                        Isi prefix dan rentang nomor untuk melihat preview.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* =================================================
                    SECTION 2
                ================================================= */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">

                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b pb-3">
                        <Tag className="w-4 h-4 text-blue-600" />
                        Kategori & Tipe Properti
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* CATEGORY */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Kategori{" "}
                                <span className="text-rose-500">*</span>
                            </label>

                            <select
                                required
                                value={formData.category}
                                onChange={(e) =>
                                    handleCategoryChange(
                                        e.target.value
                                    )
                                }
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="">
                                    -- Pilih Kategori --
                                </option>

                                {categories.map((category) => (
                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* PRODUCT TYPE */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                                Tipe Properti{" "}
                                <span className="text-rose-500">*</span>
                            </label>

                            <select
                                required
                                disabled={!formData.category}
                                value={formData.type}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        type: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
                            >
                                <option value="">
                                    -- Pilih Tipe --
                                </option>

                                {availableTypes.map((type) => (
                                    <option
                                        key={type.name}
                                        value={type.name}
                                    >
                                        {type.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    SECTION 3 - HARGA & STATUS
                ================================================= */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">

                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 border-b pb-3">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                        Harga & Status Awal
                    </h2>

                    {/* SINGLE PRICE */}
                    {mode === "single" && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Harga Unit (Rp){" "}
                                    <span className="text-rose-500">*</span>
                                </label>

                                <input
                                    type="number"
                                    min={0}
                                    required
                                    placeholder="Contoh: 168000000"
                                    value={formData.price || ""}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            price: Number(
                                                e.target.value
                                            ),
                                        })
                                    }
                                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Status Penjualan Awal
                                </label>

                                <select
                                    value={formData.unitStatus}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            unitStatus:
                                                e.target.value,
                                        })
                                    }
                                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="AVAILABLE">
                                        AVAILABLE
                                    </option>
                                    <option value="HOLD">
                                        HOLD
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    Status Konstruksi Awal
                                </label>

                                <ConstructionStatusSelect
                                    value={formData.constructionStatus}
                                    onChange={(value) =>
                                        setFormData({
                                            ...formData,
                                            constructionStatus:
                                                value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    )}

                    {/* BULK PRICE */}
                    {mode === "bulk" && (
                        <div className="space-y-5">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                {/* PRICE MODE */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-2">
                                        Harga Unit
                                    </label>

                                    <div className="space-y-2">

                                        <label className="flex items-start gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                            <input
                                                type="radio"
                                                name="priceMode"
                                                value="PRODUCT_TYPE"
                                                checked={
                                                    bulkData.priceMode ===
                                                    "PRODUCT_TYPE"
                                                }
                                                onChange={() =>
                                                    setBulkData({
                                                        ...bulkData,
                                                        priceMode:
                                                            "PRODUCT_TYPE",
                                                    })
                                                }
                                                className="mt-0.5"
                                            />

                                            <div>
                                                <div className="text-xs font-bold text-slate-800">
                                                    Ikuti harga Product Type
                                                </div>

                                                <div className="text-[11px] text-slate-400 mt-0.5">
                                                    Harga akan mengikuti harga dasar tipe properti.
                                                </div>
                                            </div>
                                        </label>

                                        <label className="flex items-start gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                            <input
                                                type="radio"
                                                name="priceMode"
                                                value="CUSTOM"
                                                checked={
                                                    bulkData.priceMode ===
                                                    "CUSTOM"
                                                }
                                                onChange={() =>
                                                    setBulkData({
                                                        ...bulkData,
                                                        priceMode:
                                                            "CUSTOM",
                                                    })
                                                }
                                                className="mt-0.5"
                                            />

                                            <div className="flex-1">
                                                <div className="text-xs font-bold text-slate-800">
                                                    Gunakan harga tertentu
                                                </div>

                                                <div className="text-[11px] text-slate-400 mt-0.5">
                                                    Semua unit yang dibuat akan menggunakan harga ini.
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* CUSTOM PRICE */}
                                {bulkData.priceMode === "CUSTOM" && (
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">
                                            Harga Custom (Rp)
                                        </label>

                                        <input
                                            type="number"
                                            min={0}
                                            placeholder="Contoh: 168000000"
                                            value={
                                                bulkData.customPrice || ""
                                            }
                                            onChange={(e) =>
                                                setBulkData({
                                                    ...bulkData,
                                                    customPrice:
                                                        Number(
                                                            e.target
                                                                .value
                                                        ),
                                                })
                                            }
                                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* STATUS BULK */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Status Penjualan Awal
                                    </label>

                                    <select
                                        value={bulkData.unitStatus}
                                        onChange={(e) =>
                                            setBulkData({
                                                ...bulkData,
                                                unitStatus:
                                                    e.target.value,
                                            })
                                        }
                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        <option value="AVAILABLE">
                                            AVAILABLE
                                        </option>

                                        <option value="HOLD">
                                            HOLD
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Status Konstruksi Awal
                                    </label>

                                    <ConstructionStatusSelect
                                        value={
                                            bulkData.constructionStatus
                                        }
                                        onChange={(value) =>
                                            setBulkData({
                                                ...bulkData,
                                                constructionStatus:
                                                    value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* =================================================
                    SUMMARY BULK
                ================================================= */}
                {mode === "bulk" && bulkUnitCodes.length > 0 && (
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                        <div className="flex items-start gap-3">

                            <div className="p-2 bg-white rounded-xl">
                                <Layers className="w-5 h-5 text-blue-600" />
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-slate-800">
                                    Siap membuat{" "}
                                    {bulkUnitCodes.length} unit
                                </h3>

                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    Unit akan dibuat sebagai record
                                    terpisah sehingga setiap unit nantinya
                                    bisa memiliki status, harga, customer,
                                    dan riwayat sendiri.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* =================================================
                    ACTIONS
                ================================================= */}
                <div className="flex items-center justify-end gap-3 pt-2">

                    <Link
                        href="/units"
                        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-xl transition-colors"
                    >
                        Batal
                    </Link>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-2 transition-all"
                    >
                        {mode === "single" ? (
                            <>
                                <Save className="w-4 h-4" />
                                {isSubmitting
                                    ? "Menyimpan..."
                                    : "Simpan Unit Properti"}
                            </>
                        ) : (
                            <>
                                <Layers className="w-4 h-4" />
                                {isSubmitting
                                    ? "Membuat Unit..."
                                    : `Buat ${bulkUnitCodes.length} Unit`}
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

// =========================================================
// COMPONENT: CONSTRUCTION STATUS
// =========================================================

function ConstructionStatusSelect({
    value,
    onChange,
}: {
    value: string
    onChange: (value: string) => void
}) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-amber-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
            <option value="NOT_STARTED">
                NOT STARTED
            </option>

            <option value="FOUNDATION">
                FOUNDATION
            </option>

            <option value="STRUCTURE">
                STRUCTURE
            </option>

            <option value="WALL">
                WALL
            </option>

            <option value="ROOF">
                ROOF
            </option>

            <option value="CEILING">
                CEILING
            </option>

            <option value="FINISHING">
                FINISHING
            </option>

            <option value="COMPLETED">
                COMPLETED
            </option>
        </select>
    )
}