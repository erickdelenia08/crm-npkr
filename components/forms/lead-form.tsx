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
    UserRound,
    Building,
    Package,
} from "lucide-react"
import { saveLead } from "@/actions/lead.action"

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

interface LeadFormProps {
    dependencies: {
        customers: any[]
        projects: any[]
        productTypes: any[]
        units: any[]
        users: any[]
    }
}

export function LeadForm({ dependencies }: LeadFormProps) {
    const { customers, projects, productTypes, units, users: marketingUsers } = dependencies
    const router = useRouter()
    const searchParams = useSearchParams()

    const customerIdFromUrl = searchParams.get("customerId") || ""
    const [isLoading, setIsLoading] = useState(false)

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

    useEffect(() => {
        if (customerIdFromUrl) {
            setFormData((prev) => ({
                ...prev,
                customerId: customerIdFromUrl,
            }))
        }
    }, [customerIdFromUrl])

    const selectedCustomer = customers.find((customer) => customer.id === formData.customerId)

    // ProductType in prisma is global, so we just show all product types
    const availableProductTypes = productTypes

    const availableUnits = useMemo(() => {
        if (!formData.projectId || !formData.productTypeId) {
            return []
        }
        return units.filter(
            (unit) =>
                unit.block.projectId === formData.projectId &&
                unit.productTypeId === formData.productTypeId &&
                unit.status === "AVAILABLE"
        )
    }, [formData.projectId, formData.productTypeId, units])

    const selectedProductType = productTypes.find((product) => product.id === formData.productTypeId)
    const selectedUnit = units.find((unit) => unit.id === formData.unitId)

    const handleProjectChange = (projectId: string) => {
        setFormData((prev) => ({
            ...prev,
            projectId,
            productTypeId: "",
            unitId: "",
        }))
    }

    const handleProductTypeChange = (productTypeId: string) => {
        setFormData((prev) => ({
            ...prev,
            productTypeId,
            unitId: "",
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.customerId || !formData.projectId || !formData.productTypeId || !formData.marketingId) {
            alert("Harap lengkapi semua field wajib.")
            return
        }

        setIsLoading(true)

        const res = await saveLead({
            customerId: formData.customerId,
            projectId: formData.projectId,
            productTypeId: formData.productTypeId,
            unitId: formData.unitId || null,
            source: formData.source,
            marketingId: formData.marketingId,
            nextFollowUpAt: formData.nextFollowUp || null,
            notes: formData.notes.trim() || null,
        })

        if (res.success) {
            alert("Lead berhasil ditambahkan!")
            router.push("/leads")
        } else {
            alert(res.error || "Gagal menyimpan lead.")
        }
        
        setIsLoading(false)
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
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

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6"
            >
                <div>
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Customer
                    </h2>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Pilih Customer <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <UserCheck className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <select
                            required
                            value={formData.customerId}
                            onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        >
                            <option value="">-- Pilih Customer Terdaftar --</option>
                            {customers.map((customer) => (
                                <option key={customer.id} value={customer.id}>
                                    {customer.name} ({customer.phone || "-"})
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedCustomer && (
                        <div className="mt-2 p-3 bg-blue-50 border border-blue-100 rounded-xl">
                            <div className="flex items-center gap-2">
                                <UserRound className="w-4 h-4 text-blue-600" />
                                <div>
                                    <p className="text-xs font-bold text-blue-900">{selectedCustomer.name}</p>
                                    <p className="text-[10px] text-blue-700">{selectedCustomer.phone}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="pt-1">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Minat Properti
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Project <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Building className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                                <select
                                    required
                                    value={formData.projectId}
                                    onChange={(e) => handleProjectChange(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                >
                                    <option value="">-- Pilih Project --</option>
                                    {projects.map((project) => (
                                        <option key={project.id} value={project.id}>
                                            {project.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">
                                Product Type <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Package className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                                <select
                                    required
                                    disabled={!formData.projectId}
                                    value={formData.productTypeId}
                                    onChange={(e) => handleProductTypeChange(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all disabled:opacity-50"
                                >
                                    <option value="">{!formData.projectId ? "-- Pilih Project Terlebih Dahulu --" : "-- Pilih Product Type --"}</option>
                                    {availableProductTypes.map((product) => (
                                        <option key={product.id} value={product.id}>
                                            {product.name} • {product.category?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Unit</label>
                            <div className="relative">
                                <Home className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                                <select
                                    disabled={!formData.productTypeId}
                                    value={formData.unitId}
                                    onChange={(e) => setFormData({ ...formData, unitId: e.target.value })}
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all disabled:opacity-50"
                                >
                                    <option value="">{!formData.productTypeId ? "-- Pilih Product Type Terlebih Dahulu --" : "-- Belum Menentukan Unit --"}</option>
                                    {availableUnits.map((unit) => (
                                        <option key={unit.id} value={unit.id}>
                                            {unit.code} • Rp {Number(unit.price || 0).toLocaleString('id-ID')}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <p className="text-[10px] text-slate-400 mt-1.5">
                                Unit boleh dikosongkan jika customer baru menentukan tipe rumah.
                            </p>

                            {selectedUnit && (
                                <div className="mt-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                                    <div className="flex items-center gap-2">
                                        <Home className="w-4 h-4 text-emerald-600" />
                                        <div>
                                            <p className="text-xs font-bold text-emerald-900">Unit {selectedUnit.code}</p>
                                            <p className="text-[10px] text-emerald-700">
                                                {selectedProductType?.name} • Rp {Number(selectedUnit.price || 0).toLocaleString('id-ID')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Sumber Lead <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <Globe className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <select
                                required
                                value={formData.source}
                                onChange={(e) => setFormData({ ...formData, source: e.target.value as LeadSource })}
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                            >
                                {Object.entries(sourceLabels).map(([value, label]) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            PIC Marketing <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <UserRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <select
                                required
                                value={formData.marketingId}
                                onChange={(e) => setFormData({ ...formData, marketingId: e.target.value })}
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                            >
                                <option value="">-- Pilih Marketing --</option>
                                {marketingUsers.map((user) => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
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
                        <span>{isLoading ? "Menyimpan..." : "Simpan Lead Baru"}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
