"use client";

import { useState } from "react";
import {
    Users,
    UserPlus,
    Search,
    MoreVertical,
    Edit2,
    Trash2,
    Shield,
    Phone,
    Mail,
    CheckCircle,
    XCircle,
    X,
    AtSign,
} from "lucide-react";
import { saveUser, deleteUser, getUsers } from "@/actions/user.action";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserInput } from "@/schemas/user.schema";

type UserData = Awaited<ReturnType<typeof getUsers>>[number];

const roleLabels: Record<string, string> = {
    ADMIN: "Administrator",
    MANAGER: "Sales Manager",
    MARKETING: "Internal Marketing",
    DIGITAL_MARKETING: "Digital Marketing",
    FIELD_SUPERVISOR: "Field Supervisor",
    DIRECTOR: "Director",
};

const roleBadges: Record<string, string> = {
    ADMIN: "bg-purple-50 text-purple-700 border-purple-200",
    MANAGER: "bg-blue-50 text-blue-700 border-blue-200",
    MARKETING: "bg-emerald-50 text-emerald-700 border-emerald-200",
    DIGITAL_MARKETING: "bg-emerald-50 text-emerald-700 border-emerald-200",
    FIELD_SUPERVISOR: "bg-amber-50 text-amber-700 border-amber-200",
    DIRECTOR: "bg-purple-50 text-purple-700 border-purple-200",
};

type UserTableProps = {
    initialUsers: NonNullable<Awaited<ReturnType<typeof getUsers>>>;
};

export function UserTable({ initialUsers }: UserTableProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [roleFilter, setRoleFilter] = useState<string>("ALL");

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<UserData | null>(null);
    const [activeActionId, setActiveActionId] = useState<string | null>(null);
    const [serverError, setServerError] = useState("");

    const form = useForm<UserInput>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            phone: "",
            role: "MARKETING",
            isActive: true,
            password: "",
        },
    });

    const filteredUsers = initialUsers.filter((user) => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (user.phone || "").includes(searchQuery);

        const matchesRole = roleFilter === "ALL" || user.role === roleFilter;

        return matchesSearch && matchesRole;
    });

    const handleOpenCreateModal = () => {
        setEditingUser(null);
        form.reset({
            name: "",
            username: "",
            email: "",
            phone: "",
            role: "MARKETING",
            isActive: true,
            password: "",
        });
        setServerError("");
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (user: UserData) => {
        setEditingUser(user);
        form.reset({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone || "",
            role: user.role,
            isActive: user.isActive,
            password: "", // Do not populate password
        });
        setServerError("");
        setIsModalOpen(true);
        setActiveActionId(null);
    };

    const handleDeleteUser = async (id: string) => {
        if (confirm("Apakah Anda yakin ingin menghapus akun user ini?")) {
            await deleteUser(id);
            setActiveActionId(null);
        }
    };

    const onSubmit: SubmitHandler<UserInput> = async (data) => {
        setServerError("");
        const res = await saveUser(data);
        if (res.success) {
            setIsModalOpen(false);
        } else {
            setServerError(res.error || "Terjadi kesalahan");
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
                        <Users className="w-6 h-6 text-blue-600" />
                        Manajemen User CRM
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Kelola akun login pengguna, hak akses role, dan status keaktifan tim.
                    </p>
                </div>

                <button
                    onClick={handleOpenCreateModal}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 transition-all"
                >
                    <UserPlus className="w-4 h-4" />
                    Tambah User Baru
                </button>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="relative w-full sm:w-80">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Cari username, nama, email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-xs font-medium text-slate-500 shrink-0">
                        Role:
                    </span>
                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className="w-full sm:w-auto p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        <option value="ALL">Semua Role</option>
                        {Object.entries(roleLabels).map(([key, label]) => (
                            <option key={key} value={key}>{label}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-600">
                        <thead className="bg-slate-50/80 border-b border-slate-200/80 text-slate-400 uppercase font-semibold text-[10px] tracking-wider">
                            <tr>
                                <th className="py-3.5 px-4">Pengguna</th>
                                <th className="py-3.5 px-4">Akun Login</th>
                                <th className="py-3.5 px-4">Role Akses</th>
                                <th className="py-3.5 px-4">Status</th>
                                <th className="py-3.5 px-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-slate-50/50 transition-colors"
                                    >
                                        <td className="py-3.5 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200">
                                                    {user.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")
                                                        .toUpperCase()
                                                        .slice(0, 2)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 text-xs">
                                                        {user.name}
                                                    </p>
                                                    <p className="text-[10px] text-slate-400">
                                                        {user.phone || "No phone"}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-3.5 px-4 space-y-1">
                                            <div className="flex items-center gap-1.5 font-bold text-slate-800">
                                                <AtSign className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                                <span>{user.username}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                                                <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                                                <span>{user.email}</span>
                                            </div>
                                        </td>

                                        <td className="py-3.5 px-4">
                                            <span
                                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-bold ${roleBadges[user.role] || "bg-slate-50 text-slate-700 border-slate-200"}`}
                                            >
                                                <Shield className="w-3 h-3" />
                                                {roleLabels[user.role]}
                                            </span>
                                        </td>

                                        <td className="py-3.5 px-4">
                                            {user.isActive ? (
                                                <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-[11px]">
                                                    <CheckCircle className="w-3.5 h-3.5" />
                                                    Aktif
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 text-slate-400 font-medium text-[11px]">
                                                    <XCircle className="w-3.5 h-3.5" />
                                                    Nonaktif
                                                </span>
                                            )}
                                        </td>

                                        <td className="py-3.5 px-4 text-right relative">
                                            <button
                                                onClick={() =>
                                                    setActiveActionId(
                                                        activeActionId === user.id
                                                            ? null
                                                            : user.id
                                                    )
                                                }
                                                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                                            >
                                                <MoreVertical className="w-4 h-4" />
                                            </button>

                                            {activeActionId === user.id && (
                                                <div className="absolute right-4 mt-1 w-36 bg-white rounded-xl border border-slate-200 shadow-lg py-1 z-20 text-left">
                                                    <button
                                                        onClick={() => handleOpenEditModal(user)}
                                                        className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 transition-colors"
                                                    >
                                                        <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                                                        Edit User
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 transition-colors"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                                                        Hapus
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="py-8 text-center text-xs text-slate-400"
                                    >
                                        Tidak ada user yang ditemukan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-md rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95">
                        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                            <h3 className="text-sm font-bold text-slate-900">
                                {editingUser ? "Edit Akun User" : "Tambah User Baru"}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {serverError && (
                            <div className="mx-5 mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold">
                                {serverError}
                            </div>
                        )}

                        <form onSubmit={form.handleSubmit(onSubmit)} className="p-5 space-y-4">
                            <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Nama Lengkap *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Contoh: Elin Marketing"
                                    {...form.register("name")}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                {form.formState.errors.name && <p className="text-[10px] text-red-500 mt-1">{form.formState.errors.name.message}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Username Login *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="elin_mkt"
                                        {...form.register("username")}
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {form.formState.errors.username && <p className="text-[10px] text-red-500 mt-1">{form.formState.errors.username.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Nomor HP / WA
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="081234567890"
                                        {...form.register("phone")}
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Alamat Email *
                                </label>
                                <input
                                    type="email"
                                    placeholder="elin@pemasaran.com"
                                    {...form.register("email")}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                {form.formState.errors.email && <p className="text-[10px] text-red-500 mt-1">{form.formState.errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Kata Sandi {editingUser && "(Kosongkan jika tidak diubah)"} *
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    {...form.register("password")}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                {form.formState.errors.password && <p className="text-[10px] text-red-500 mt-1">{form.formState.errors.password.message}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Role Akses
                                    </label>
                                    <select
                                        {...form.register("role")}
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {Object.entries(roleLabels).map(([key, label]) => (
                                            <option key={key} value={key}>{label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Status Akun
                                    </label>
                                    <select
                                        {...form.register("isActive", {
                                            setValueAs: (v) => v === "true" || v === true
                                        })}
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        <option value="true">Aktif</option>
                                        <option value="false">Nonaktif</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={form.formState.isSubmitting}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 transition-all disabled:opacity-50"
                                >
                                    {form.formState.isSubmitting ? "Menyimpan..." : (editingUser ? "Simpan Perubahan" : "Buat User")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
