"use client"

import { useState, use } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save, User, Phone, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export default function EditCustomerPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const router = useRouter()
    const resolvedParams = use(params)
    const customerId = resolvedParams.id

    const [isLoading, setIsLoading] = useState(false)
    // Dummy Pre-filled Data
    const [formData, setFormData] = useState({
        name: "Budi Santoso",
        phone: "081234567890",
        email: "budi.santoso@gmail.com",
        address: "Jl. Mawar No. 12, Surabaya",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            alert("Data customer berhasil diperbarui!")
            router.push(`/customers/${customerId}`)
        }, 800)
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            {/* Navigation Header */}
            <div className="flex items-center gap-4">
                <Link
                    href={`/customers/${customerId}`}
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Edit Data Customer
                    </h1>
                    <p className="text-xs text-slate-500 mt-0.5">
                        Perbarui data kontak untuk customer ID #{customerId}.
                    </p>
                </div>
            </div>

            {/* Form Container */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5"
            >
                <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        No. Telepon / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email
                    </label>
                    <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Alamat Domisili
                    </label>
                    <div className="relative">
                        <MapPin className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                        <textarea
                            rows={3}
                            value={formData.address}
                            onChange={(e) =>
                                setFormData({ ...formData, address: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                    <Link
                        href={`/customers/${customerId}`}
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
                        <span>{isLoading ? "Menyimpan..." : "Update Customer"}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}