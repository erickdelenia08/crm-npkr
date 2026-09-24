"use client"

import { use } from "react"
import Link from "next/link"
import {
    ArrowLeft,
    Home,
    Building2,
    HardHat,
    Tag,
    User,
    Clock,
    CheckCircle2,
} from "lucide-react"

export default function UnitDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)

    // Mock Detail Unit
    const unitDetail = {
        id: id,
        unitCode: "A-01",
        project: "Griya Asri 1",
        block: "Blok A",
        category: "Subsidi",
        price: 168000000,
        unitStatus: "BOOKED",
        constructionStatus: "STRUCTURE",
        // Data Tipe Produk yang terelasi
        productType: {
            name: "Subsidi A (30/60)",
            landArea: 60,
            buildingArea: 30,
            bedrooms: 2,
            bathrooms: 1,
            electricity: "1300 VA",
            water: "PDAM",
        },
        customer: {
            name: "Budi Santoso",
            phone: "081234567890",
            bookingDate: "12 September 2026",
            salesName: "Elin Marketing",
        },
        history: [
            { date: "12 Sep 2026", title: "Status Berubah ke BOOKED", user: "Elin Marketing" },
            { date: "10 Sep 2026", title: "Progres Konstruksi: STRUCTURE", user: "Tim Mandor" },
            { date: "01 Sep 2026", title: "Unit Didaftarkan ke System", user: "Admin Master" },
        ],
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Back Button & Header */}
            <div className="flex items-center justify-between">
                <Link
                    href="/units"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Inventory
                </Link>
                <span className="text-xs font-mono text-slate-400">ID: {unitDetail.id}</span>
            </div>

            {/* Main Banner Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                    <div className="p-3.5 bg-blue-50 border border-blue-100 rounded-2xl text-blue-600">
                        <Home className="w-8 h-8" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2.5">
                            <h1 className="text-2xl font-bold text-slate-900">
                                {unitDetail.block} - {unitDetail.unitCode}
                            </h1>
                            <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold rounded-lg">
                                {unitDetail.unitStatus}
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-slate-400" />
                            {unitDetail.project} • {unitDetail.category} ({unitDetail.productType.name})
                        </p>
                    </div>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 text-left md:text-right">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Harga Unit</p>
                    <p className="text-2xl font-extrabold text-blue-600">
                        Rp {unitDetail.price.toLocaleString("id-ID")}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column: Tipe Produk & Spesifikasi */}
                <div className="md:col-span-2 space-y-6">
                    {/* Spesifikasi berdasarkan Tipe Produk */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="flex items-center justify-between border-b pb-3">
                            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <Tag className="w-4 h-4 text-blue-600" /> Spesifikasi ({unitDetail.productType.name})
                            </h2>
                            <span className="text-[10px] bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded">
                                Master Data Tipe
                            </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <span className="text-slate-400 text-[10px] block font-semibold">Luas Tanah</span>
                                <span className="font-bold text-slate-800">{unitDetail.productType.landArea} m²</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <span className="text-slate-400 text-[10px] block font-semibold">Luas Bangunan</span>
                                <span className="font-bold text-slate-800">{unitDetail.productType.buildingArea} m²</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <span className="text-slate-400 text-[10px] block font-semibold">Kamar Tidur</span>
                                <span className="font-bold text-slate-800">{unitDetail.productType.bedrooms} Ruang</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <span className="text-slate-400 text-[10px] block font-semibold">Kamar Mandi</span>
                                <span className="font-bold text-slate-800">{unitDetail.productType.bathrooms} Ruang</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <span className="text-slate-400 text-[10px] block font-semibold">Daya Listrik</span>
                                <span className="font-bold text-slate-800">{unitDetail.productType.electricity}</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <span className="text-slate-400 text-[10px] block font-semibold">Sumber Air</span>
                                <span className="font-bold text-slate-800">{unitDetail.productType.water}</span>
                            </div>
                        </div>
                    </div>

                    {/* Status Pemesan / Konsumen */}
                    {unitDetail.customer && (
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <User className="w-4 h-4 text-emerald-600" /> Informasi Pemesan
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                <div>
                                    <span className="text-slate-400 text-[10px] block font-semibold">Nama Pembeli</span>
                                    <p className="font-bold text-slate-800 mt-0.5">{unitDetail.customer.name}</p>
                                </div>
                                <div>
                                    <span className="text-slate-400 text-[10px] block font-semibold">No. Telepon / WA</span>
                                    <p className="font-bold text-slate-800 mt-0.5">{unitDetail.customer.phone}</p>
                                </div>
                                <div>
                                    <span className="text-slate-400 text-[10px] block font-semibold">Tanggal Booking</span>
                                    <p className="font-bold text-slate-800 mt-0.5">{unitDetail.customer.bookingDate}</p>
                                </div>
                                <div>
                                    <span className="text-slate-400 text-[10px] block font-semibold">Sales / Marketing</span>
                                    <p className="font-bold text-slate-800 mt-0.5">{unitDetail.customer.salesName}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Status Progres & Histori Activity */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <HardHat className="w-4 h-4 text-amber-600" /> Progres Konstruksi
                        </h2>
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 font-bold text-xs flex items-center justify-between">
                            <span>Status Fisik</span>
                            <span>{unitDetail.constructionStatus}</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-600" /> Riwayat Perubahan
                        </h2>

                        <div className="space-y-3 relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-slate-100">
                            {unitDetail.history.map((item, idx) => (
                                <div key={idx} className="relative pl-6 space-y-0.5">
                                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center">
                                        <CheckCircle2 className="w-2.5 h-2.5 text-blue-600" />
                                    </div>
                                    <p className="text-xs font-bold text-slate-800">{item.title}</p>
                                    <p className="text-[10px] text-slate-400">
                                        {item.date} • oleh {item.user}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}