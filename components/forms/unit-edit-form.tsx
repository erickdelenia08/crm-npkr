"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Building2, Tag, DollarSign } from "lucide-react";
import { saveUnit } from "@/actions/unit.action";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { unitSchema, UnitInput } from "@/schemas/unit.schema";

type ProjectData = Awaited<ReturnType<typeof import("@/actions/unit.action").getProjectsWithBlocks>>[number];

type CategoryData = Awaited<ReturnType<typeof import("@/actions/unit.action").getProductCategoriesWithTypes>>[number];

interface UnitEditFormProps {
    unit: NonNullable<Awaited<ReturnType<typeof import("@/actions/unit.action").getUnitById>>>;
    projects: ProjectData[];
    categories: CategoryData[];
}

export function UnitEditForm({ unit, projects, categories }: UnitEditFormProps) {
    const router = useRouter();
    const [serverError, setServerError] = useState("");

    const initialProjectId = projects.find(p => p.blocks.some(b => b.id === unit.blockId))?.id || "";
    const initialCategoryId = categories.find(c => c.productTypes.some(t => t.id === unit.productTypeId))?.id || "";

    const [projectId, setProjectId] = useState(initialProjectId);
    const [categoryId, setCategoryId] = useState(initialCategoryId);

    const availableBlocks = useMemo(() => {
        return projects.find((p) => p.id === projectId)?.blocks || [];
    }, [projectId, projects]);

    const availableTypes = useMemo(() => {
        return categories.find((c) => c.id === categoryId)?.productTypes || [];
    }, [categoryId, categories]);

    const form = useForm<UnitInput>({
        resolver: zodResolver(unitSchema),
        defaultValues: {
            id: unit.id,
            blockId: unit.blockId,
            productTypeId: unit.productTypeId,
            number: unit.number,
            code: unit.code,
            landArea: unit.landArea ? Number(unit.landArea) : null,
            buildingArea: unit.buildingArea ? Number(unit.buildingArea) : null,
            price: unit.price ? Number(unit.price) : null,
            status: unit.status,
            constructionStatus: unit.constructionStatus,
            facing: unit.facing,
            description: unit.description,
        }
    });

    const onSubmit: SubmitHandler<UnitInput> = async (data) => {
        setServerError("");
        const res = await saveUnit(data);
        if (res.success) {
            router.push("/units");
        } else {
            setServerError(res.error || "Gagal menyimpan perubahan unit");
        }
    };

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
                    Edit Unit: {unit.code}
                </h1>
                <p className="text-sm text-slate-500 mt-0.5">
                    Ubah data informasi detail unit properti.
                </p>
            </div>

            {serverError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-800 text-xs font-semibold">
                    {serverError}
                </div>
            )}

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                    <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        <h2 className="text-sm font-bold text-slate-900">
                            Lokasi & Tipe Properti
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Proyek
                            </label>
                            <select
                                value={projectId}
                                onChange={(e) => {
                                    setProjectId(e.target.value);
                                    const blocks = projects.find(p => p.id === e.target.value)?.blocks || [];
                                    if (blocks.length > 0) form.setValue("blockId", blocks[0].id);
                                }}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="" disabled>Pilih Proyek...</option>
                                {projects.map((p) => (
                                    <option key={p.id} value={p.id}>{p.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Blok *
                            </label>
                            <select
                                {...form.register("blockId")}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                {availableBlocks.length === 0 && (
                                    <option value="" disabled>Tidak ada blok</option>
                                )}
                                {availableBlocks.map((b) => (
                                    <option key={b.id} value={b.id}>{b.name}</option>
                                ))}
                            </select>
                            {form.formState.errors.blockId && <p className="text-[10px] text-red-500 mt-1">{form.formState.errors.blockId.message}</p>}
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Kategori
                            </label>
                            <select
                                value={categoryId}
                                onChange={(e) => {
                                    setCategoryId(e.target.value);
                                    const types = categories.find(c => c.id === e.target.value)?.productTypes || [];
                                    if (types.length > 0) form.setValue("productTypeId", types[0].id);
                                }}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="" disabled>Pilih Kategori...</option>
                                {categories.map((c) => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Tipe Properti *
                            </label>
                            <select
                                {...form.register("productTypeId")}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                {availableTypes.length === 0 && (
                                    <option value="" disabled>Tidak ada tipe</option>
                                )}
                                {availableTypes.map((t) => (
                                    <option key={t.id} value={t.id}>{t.name}</option>
                                ))}
                            </select>
                            {form.formState.errors.productTypeId && <p className="text-[10px] text-red-500 mt-1">{form.formState.errors.productTypeId.message}</p>}
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                    <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                        <Tag className="w-5 h-5 text-blue-600" />
                        <h2 className="text-sm font-bold text-slate-900">
                            Detail Unit & Identifikasi
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Nomor Unit *
                            </label>
                            <input
                                type="text"
                                {...form.register("number")}
                                placeholder="Contoh: 01, 01A, 12"
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {form.formState.errors.number && <p className="text-[10px] text-red-500 mt-1">{form.formState.errors.number.message}</p>}
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Kode Unit Lengkap *
                            </label>
                            <input
                                type="text"
                                {...form.register("code")}
                                placeholder="Contoh: A1-01"
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 uppercase"
                            />
                            <p className="text-[10px] text-slate-500 mt-1">
                                Kode unik yang digunakan untuk referensi dokumen.
                            </p>
                            {form.formState.errors.code && <p className="text-[10px] text-red-500 mt-1">{form.formState.errors.code.message}</p>}
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Luas Tanah (m²)
                            </label>
                            <input
                                type="number"
                                {...form.register("landArea")}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Luas Bangunan (m²)
                            </label>
                            <input
                                type="number"
                                {...form.register("buildingArea")}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Harga Unit (Rp)
                            </label>
                            <div className="relative">
                                <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="number"
                                    {...form.register("price")}
                                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Status Penjualan *
                            </label>
                            <select
                                {...form.register("status")}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="AVAILABLE">AVAILABLE - Tersedia</option>
                                <option value="HOLD">HOLD - Ditahan</option>
                                <option value="BOOKED">BOOKED - Dibooking</option>
                                <option value="AKAD">AKAD - Terjual KPR</option>
                                <option value="SOLD">SOLD - Lunas</option>
                                <option value="CANCELLED">CANCELLED - Batal</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                                Progres Konstruksi *
                            </label>
                            <select
                                {...form.register("constructionStatus")}
                                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="NOT_STARTED">Belum Dibangun</option>
                                <option value="FOUNDATION">Pondasi</option>
                                <option value="STRUCTURE">Struktur & Dinding</option>
                                <option value="ROOF">Atap</option>
                                <option value="FINISHING">Finishing</option>
                                <option value="COMPLETED">Selesai 100%</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                            Catatan Tambahan
                        </label>
                        <textarea
                            {...form.register("description")}
                            rows={3}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                            placeholder="Tulis informasi tambahan atau khusus mengenai unit ini..."
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4">
                    <Link
                        href="/units"
                        className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                        Batal
                    </Link>
                    <button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20 transition-all"
                    >
                        <Save className="w-4 h-4" />
                        {form.formState.isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
                    </button>
                </div>
            </form>
        </div>
    );
}
