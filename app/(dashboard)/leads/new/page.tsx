"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import {
    ArrowLeft,
    Save,
    UserCheck,
    Home,
    Globe,
    Calendar,
    FileText,
    UserRound,
    Building,
    Package,
} from "lucide-react"

// ============================================================
// Types
// ============================================================

type LeadSource =
    | "WALK_IN"
    | "REFERRAL"
    | "FACEBOOK"
    | "INSTAGRAM"
    | "TIKTOK"
    | "WHATSAPP"
    | "ADVERTISEMENT"
    | "WEBSITE"
    | "MARKETING"
    | "OTHER"

// ============================================================
// Dummy Master Data
// Nanti diganti query Prisma
// ============================================================

const customers = [
    {
        id: "CUST-001",
        name: "Budi Santoso",
        phone: "081234567890",
    },
    {
        id: "CUST-002",
        name: "Dewi Puspitasari",
        phone: "089876543210",
    },
    {
        id: "CUST-003",
        name: "Ahmad Dahlan",
        phone: "085678901234",
    },
]

const projects = [
    {
        id: "PROJECT-001",
        name: "New Puri Kencana",
    },
]

const productTypes = [
    {
        id: "TYPE-001",
        projectId: "PROJECT-001",
        category: "Subsidi",
        name: "Subsidi 30/60",
    },
    {
        id: "TYPE-002",
        projectId: "PROJECT-001",
        category: "Subsidi",
        name: "Subsidi 30/72",
    },
    {
        id: "TYPE-003",
        projectId: "PROJECT-001",
        category: "Komersial",
        name: "Komersial 45/72",
    },
    {
        id: "TYPE-004",
        projectId: "PROJECT-001",
        category: "Ruko",
        name: "Ruko A",
    },
]

const units = [
    {
        id: "G-01",
        code: "G-01",
        projectId: "PROJECT-001",
        productTypeId: "TYPE-001",
        status: "AVAILABLE",
        price: "Rp 180.000.000",
    },
    {
        id: "G-05",
        code: "G-05",
        projectId: "PROJECT-001",
        productTypeId: "TYPE-001",
        status: "AVAILABLE",
        price: "Rp 180.000.000",
    },
    {
        id: "H-02",
        code: "H-02",
        projectId: "PROJECT-001",
        productTypeId: "TYPE-001",
        status: "AVAILABLE",
        price: "Rp 180.000.000",
    },
    {
        id: "H-03",
        code: "H-03",
        projectId: "PROJECT-001",
        productTypeId: "TYPE-002",
        status: "AVAILABLE",
        price: "Rp 190.000.000",
    },
]

const marketingUsers = [
    {
        id: "USER-001",
        name: "Elin Marketing",
    },
    {
        id: "USER-002",
        name: "Rian Marketing",
    },
]

// ============================================================
// Labels
// ============================================================

const sourceLabels: Record<LeadSource, string> = {
    WALK_IN: "Walk-in / Kantor",
    REFERRAL: "Referral",
    FACEBOOK: "Facebook",
    INSTAGRAM: "Instagram",
    TIKTOK: "TikTok",
    WHATSAPP: "WhatsApp",
    ADVERTISEMENT: "Advertisement",
    WEBSITE: "Website",
    MARKETING: "Marketing",
    OTHER: "Lainnya",
}

// ============================================================
// Page
// ============================================================

export default function NewLeadPage() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const customerIdFromUrl =
        searchParams.get("customerId") || ""

    const [isLoading, setIsLoading] =
        useState(false)

    // ========================================================
    // Form State
    // ========================================================

    const [formData, setFormData] = useState({
        customerId: customerIdFromUrl,
        projectId: "",
        productTypeId: "",
        unitId: "",
        source: "WHATSAPP" as LeadSource,
        marketingId: "",
        nextFollowUp: "",
        notes: "",
    })

    // ========================================================
    // Set customer dari URL
    // ========================================================

    useEffect(() => {
        if (customerIdFromUrl) {
            setFormData((prev) => ({
                ...prev,
                customerId: customerIdFromUrl,
            }))
        }
    }, [customerIdFromUrl])

    // ========================================================
    // Selected Customer
    // ========================================================

    const selectedCustomer = customers.find(
        (customer) =>
            customer.id === formData.customerId
    )

    // ========================================================
    // Product Type berdasarkan Project
    // ========================================================

    const availableProductTypes = useMemo(() => {
        if (!formData.projectId) {
            return []
        }

        return productTypes.filter(
            (product) =>
                product.projectId ===
                formData.projectId
        )
    }, [formData.projectId])

    // ========================================================
    // Unit berdasarkan Project + Product Type
    // ========================================================

    const availableUnits = useMemo(() => {
        if (
            !formData.projectId ||
            !formData.productTypeId
        ) {
            return []
        }

        return units.filter(
            (unit) =>
                unit.projectId ===
                formData.projectId &&
                unit.productTypeId ===
                formData.productTypeId &&
                unit.status === "AVAILABLE"
        )
    }, [
        formData.projectId,
        formData.productTypeId,
    ])

    // ========================================================
    // Selected Product Type
    // ========================================================

    const selectedProductType =
        productTypes.find(
            (product) =>
                product.id ===
                formData.productTypeId
        )

    // ========================================================
    // Selected Unit
    // ========================================================

    const selectedUnit = units.find(
        (unit) =>
            unit.id === formData.unitId
    )

    // ========================================================
    // Handle Project Change
    // ========================================================

    const handleProjectChange = (
        projectId: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            projectId,
            productTypeId: "",
            unitId: "",
        }))
    }

    // ========================================================
    // Handle Product Type Change
    // ========================================================

    const handleProductTypeChange = (
        productTypeId: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            productTypeId,
            unitId: "",
        }))
    }

    // ========================================================
    // Submit
    // ========================================================

    const handleSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault()

        if (!formData.customerId) {
            alert("Customer wajib dipilih.")
            return
        }

        if (!formData.projectId) {
            alert("Project wajib dipilih.")
            return
        }

        if (!formData.productTypeId) {
            alert("Product Type wajib dipilih.")
            return
        }

        if (!formData.marketingId) {
            alert("Marketing wajib dipilih.")
            return
        }

        setIsLoading(true)

        // ====================================================
        // Lead baru selalu dibuat dengan:
        //
        // status = NEW
        // stage  = INQUIRY
        //
        // Status dan stage tidak diinput manual
        // ====================================================

        const leadData = {
            customerId: formData.customerId,
            projectId: formData.projectId,
            productTypeId:
                formData.productTypeId,
            unitId:
                formData.unitId || null,
            source: formData.source,
            marketingId:
                formData.marketingId,
            status: "NEW",
            stage: "INQUIRY",
            nextFollowUp:
                formData.nextFollowUp || null,
            notes:
                formData.notes.trim() || null,
        }

        // TODO:
        // Ganti dengan Server Action / API + Prisma.
        console.log("Create Lead:", leadData)

        setTimeout(() => {
            setIsLoading(false)

            alert("Lead berhasil ditambahkan!")

            router.push("/leads")
        }, 800)
    }

    // ========================================================
    // Render
    // ========================================================

    return (
        <div className="max-w-2xl mx-auto space-y-6">

            {/* ==================================================
                Header
            ================================================== */}

            <div className="flex items-center gap-4">

                <Link
                    href="/leads"
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>

                <div>

                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Input Lead Baru
                    </h1>

                    <p className="text-xs text-slate-500 mt-0.5">
                        Daftarkan proses atau minat pembelian dari customer.
                    </p>

                </div>

            </div>


            {/* ==================================================
                Form
            ================================================== */}

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6"
            >

                {/* ==================================================
                    CUSTOMER
                ================================================== */}

                <div>

                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Customer
                    </h2>

                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Pilih Customer{" "}
                        <span className="text-red-500">
                            *
                        </span>
                    </label>

                    <div className="relative">

                        <UserCheck className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

                        <select
                            required
                            value={
                                formData.customerId
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    customerId:
                                        e.target.value,
                                })
                            }
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        >

                            <option value="">
                                -- Pilih Customer Terdaftar --
                            </option>

                            {customers.map(
                                (customer) => (
                                    <option
                                        key={
                                            customer.id
                                        }
                                        value={
                                            customer.id
                                        }
                                    >
                                        {
                                            customer.name
                                        }{" "}
                                        (
                                        {
                                            customer.phone
                                        }
                                        )
                                    </option>
                                )
                            )}

                        </select>

                    </div>


                    {/* Customer Preview */}

                    {selectedCustomer && (
                        <div className="mt-2 p-3 bg-blue-50 border border-blue-100 rounded-xl">

                            <div className="flex items-center gap-2">

                                <UserRound className="w-4 h-4 text-blue-600" />

                                <div>

                                    <p className="text-xs font-bold text-blue-900">
                                        {
                                            selectedCustomer.name
                                        }
                                    </p>

                                    <p className="text-[10px] text-blue-700">
                                        {
                                            selectedCustomer.phone
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>
                    )}

                </div>


                {/* ==================================================
                    MINAT PROPERTI
                ================================================== */}

                <div className="pt-1">

                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Minat Properti
                    </h2>

                    <div className="space-y-4">

                        {/* Project */}

                        <div>

                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Project{" "}
                                <span className="text-red-500">
                                    *
                                </span>
                            </label>

                            <div className="relative">

                                <Building className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

                                <select
                                    required
                                    value={
                                        formData.projectId
                                    }
                                    onChange={(e) =>
                                        handleProjectChange(
                                            e.target.value
                                        )
                                    }
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                >

                                    <option value="">
                                        -- Pilih Project --
                                    </option>

                                    {projects.map(
                                        (project) => (
                                            <option
                                                key={
                                                    project.id
                                                }
                                                value={
                                                    project.id
                                                }
                                            >
                                                {
                                                    project.name
                                                }
                                            </option>
                                        )
                                    )}

                                </select>

                            </div>

                        </div>


                        {/* Product Type */}

                        <div>

                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Product Type{" "}
                                <span className="text-red-500">
                                    *
                                </span>
                            </label>

                            <div className="relative">

                                <Package className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

                                <select
                                    required
                                    disabled={
                                        !formData.projectId
                                    }
                                    value={
                                        formData.productTypeId
                                    }
                                    onChange={(e) =>
                                        handleProductTypeChange(
                                            e.target.value
                                        )
                                    }
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all disabled:opacity-50"
                                >

                                    <option value="">
                                        {!formData.projectId
                                            ? "-- Pilih Project Terlebih Dahulu --"
                                            : "-- Pilih Product Type --"}
                                    </option>

                                    {availableProductTypes.map(
                                        (product) => (
                                            <option
                                                key={
                                                    product.id
                                                }
                                                value={
                                                    product.id
                                                }
                                            >
                                                {
                                                    product.name
                                                }{" "}
                                                •{" "}
                                                {
                                                    product.category
                                                }
                                            </option>
                                        )
                                    )}

                                </select>

                            </div>

                        </div>


                        {/* Unit */}

                        <div>

                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Unit
                            </label>

                            <div className="relative">

                                <Home className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

                                <select
                                    disabled={
                                        !formData.productTypeId
                                    }
                                    value={
                                        formData.unitId
                                    }
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            unitId:
                                                e.target.value,
                                        })
                                    }
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all disabled:opacity-50"
                                >

                                    <option value="">
                                        {!formData.productTypeId
                                            ? "-- Pilih Product Type Terlebih Dahulu --"
                                            : "-- Belum Menentukan Unit --"}
                                    </option>

                                    {availableUnits.map(
                                        (unit) => (
                                            <option
                                                key={
                                                    unit.id
                                                }
                                                value={
                                                    unit.id
                                                }
                                            >
                                                {
                                                    unit.code
                                                }{" "}
                                                •{" "}
                                                {
                                                    unit.price
                                                }
                                            </option>
                                        )
                                    )}

                                </select>

                            </div>

                            <p className="text-[10px] text-slate-400 mt-1.5">
                                Unit boleh dikosongkan jika customer baru menentukan tipe rumah.
                            </p>


                            {/* Unit Preview */}

                            {selectedUnit && (
                                <div className="mt-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">

                                    <div className="flex items-center gap-2">

                                        <Home className="w-4 h-4 text-emerald-600" />

                                        <div>

                                            <p className="text-xs font-bold text-emerald-900">
                                                Unit{" "}
                                                {
                                                    selectedUnit.code
                                                }
                                            </p>

                                            <p className="text-[10px] text-emerald-700">
                                                {
                                                    selectedProductType?.name
                                                }{" "}
                                                •{" "}
                                                {
                                                    selectedUnit.price
                                                }
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            )}

                        </div>

                    </div>

                </div>


                {/* ==================================================
                    SOURCE + MARKETING
                ================================================== */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Source */}

                    <div>

                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Sumber Lead{" "}
                            <span className="text-red-500">
                                *
                            </span>
                        </label>

                        <div className="relative">

                            <Globe className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

                            <select
                                required
                                value={
                                    formData.source
                                }
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        source:
                                            e.target.value as LeadSource,
                                    })
                                }
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                            >

                                {Object.entries(
                                    sourceLabels
                                ).map(
                                    ([
                                        value,
                                        label,
                                    ]) => (
                                        <option
                                            key={
                                                value
                                            }
                                            value={
                                                value
                                            }
                                        >
                                            {label}
                                        </option>
                                    )
                                )}

                            </select>

                        </div>

                    </div>


                    {/* Marketing */}

                    <div>

                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Marketing{" "}
                            <span className="text-red-500">
                                *
                            </span>
                        </label>

                        <div className="relative">

                            <UserRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

                            <select
                                required
                                value={
                                    formData.marketingId
                                }
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        marketingId:
                                            e.target.value,
                                    })
                                }
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                            >

                                <option value="">
                                    -- Pilih Marketing --
                                </option>

                                {marketingUsers.map(
                                    (marketing) => (
                                        <option
                                            key={
                                                marketing.id
                                            }
                                            value={
                                                marketing.id
                                            }
                                        >
                                            {
                                                marketing.name
                                            }
                                        </option>
                                    )
                                )}

                            </select>

                        </div>

                    </div>

                </div>


                {/* ==================================================
                    NEXT FOLLOW UP
                ================================================== */}

                <div>

                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Jadwal Follow Up Berikutnya
                    </label>

                    <div className="relative">

                        <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

                        <input
                            type="date"
                            value={
                                formData.nextFollowUp
                            }
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    nextFollowUp:
                                        e.target.value,
                                })
                            }
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        />

                    </div>

                    <p className="text-[10px] text-slate-400 mt-1.5">
                        Bisa dikosongkan jika belum ada jadwal follow up.
                    </p>

                </div>


                {/* ==================================================
                    CATATAN LEAD
                ================================================== */}

                <div>

                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Catatan Lead
                    </label>

                    <div className="relative">

                        <FileText className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />

                        <textarea
                            rows={4}
                            value={formData.notes}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    notes:
                                        e.target.value,
                                })
                            }
                            placeholder="Contoh: Customer tertarik rumah subsidi tipe 30/60 dan meminta simulasi KPR."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        />

                    </div>

                    <p className="text-[10px] text-slate-400 mt-1.5">
                        Catatan ini merupakan informasi awal tentang Lead, bukan Activity.
                    </p>

                </div>


                {/* ==================================================
                    INFO STATUS
                ================================================== */}

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">

                    <div className="flex items-start gap-3">

                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4 text-blue-600" />
                        </div>

                        <div>

                            <p className="text-xs font-bold text-blue-900">
                                Status awal Lead
                            </p>

                            <p className="text-[11px] text-blue-700 mt-1">
                                Lead baru otomatis dibuat dengan
                                status <strong>New</strong> dan
                                tahap <strong>Inquiry</strong>.
                                Perkembangan selanjutnya dicatat
                                dari halaman detail Lead.
                            </p>

                        </div>

                    </div>

                </div>


                {/* ==================================================
                    SUBMIT
                ================================================== */}

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">

                    <Link
                        href="/leads"
                        className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                        Batal
                    </Link>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-md shadow-blue-600/20 flex items-center gap-2 transition-all disabled:opacity-50"
                    >

                        <Save className="w-4 h-4" />

                        <span>
                            {isLoading
                                ? "Menyimpan..."
                                : "Simpan Lead"}
                        </span>

                    </button>

                </div>

            </form>

        </div>
    )
}