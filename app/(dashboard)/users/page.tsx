"use client"

import { useState } from "react"
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
} from "lucide-react"

// ============================================================
// Types
// ============================================================

type UserRole = "ADMIN" | "MANAGER" | "MARKETING" | "FINANCE"

type UserStatus = "ACTIVE" | "INACTIVE"

type UserData = {
    id: string
    name: string
    username: string
    email: string
    phone: string
    role: UserRole
    status: UserStatus
    createdAt: string
}

// ============================================================
// Labels & Badges
// ============================================================

const roleLabels: Record<UserRole, string> = {
    ADMIN: "Administrator",
    MANAGER: "Sales Manager",
    MARKETING: "Internal Marketing",
    FINANCE: "Tim Keuangan/KPR",
}

const roleBadges: Record<UserRole, string> = {
    ADMIN: "bg-purple-50 text-purple-700 border-purple-200",
    MANAGER: "bg-blue-50 text-blue-700 border-blue-200",
    MARKETING: "bg-emerald-50 text-emerald-700 border-emerald-200",
    FINANCE: "bg-amber-50 text-amber-700 border-amber-200",
}

// ============================================================
// Dummy Initial Data
// ============================================================

const initialUsers: UserData[] = [
    {
        id: "USER-001",
        name: "Elin Marketing",
        username: "elin_mkt",
        email: "elin@pemasaran.com",
        phone: "081234567890",
        role: "MARKETING",
        status: "ACTIVE",
        createdAt: "2026-01-15",
    },
    {
        id: "USER-002",
        name: "Bambang Admin",
        username: "bambang_admin",
        email: "bambang@pemasaran.com",
        phone: "082198765432",
        role: "ADMIN",
        status: "ACTIVE",
        createdAt: "2026-01-10",
    },
    {
        id: "USER-003",
        name: "Siti Finance",
        username: "siti_fin",
        email: "siti@pemasaran.com",
        phone: "085711223344",
        role: "FINANCE",
        status: "ACTIVE",
        createdAt: "2026-02-01",
    },
]

// ============================================================
// Main Page Component
// ============================================================

export default function UsersPage() {
    const [users, setUsers] = useState<UserData[]>(initialUsers)
    const [searchQuery, setSearchQuery] = useState("")
    const [roleFilter, setRoleFilter] = useState<string>("ALL")

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingUser, setEditingUser] = useState<UserData | null>(null)

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        role: "MARKETING" as UserRole,
        status: "ACTIVE" as UserStatus,
    })

    const [activeActionId, setActiveActionId] = useState<string | null>(null)

    // ========================================================
    // Filter Logic
    // ========================================================

    const filteredUsers = users.filter((user) => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.phone.includes(searchQuery)

        const matchesRole = roleFilter === "ALL" || user.role === roleFilter

        return matchesSearch && matchesRole
    })

    // ========================================================
    // Handlers
    // ========================================================

    const handleOpenCreateModal = () => {
        setEditingUser(null)
        setFormData({
            name: "",
            username: "",
            email: "",
            phone: "",
            role: "MARKETING",
            status: "ACTIVE",
        })
        setIsModalOpen(true)
    }

    const handleOpenEditModal = (user: UserData) => {
        setEditingUser(user)
        setFormData({
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            role: user.role,
            status: user.status,
        })
        setIsModalOpen(true)
        setActiveActionId(null)
    }

    const handleDeleteUser = (id: string) => {
        if (confirm("Apakah Anda yakin ingin menghapus akun user ini?")) {
            setUsers(users.filter((u) => u.id !== id))
            setActiveActionId(null)
        }
    }

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.username) {
            alert("Nama dan Username wajib diisi.")
            return
        }

        if (editingUser) {
            setUsers(
                users.map((u) =>
                    u.id === editingUser.id ? { ...u, ...formData } : u
                )
            )
        } else {
            const newUser: UserData = {
                id: `USER-00${users.length + 1}`,
                ...formData,
                createdAt: new Date().toISOString().split("T")[0],
            }
            setUsers([newUser, ...users])
        }

        setIsModalOpen(false)
    }

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Header Title & CTA */}
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

            {/* Filter Bar */}
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
                        <option value="ADMIN">Administrator</option>
                        <option value="MANAGER">Sales Manager</option>
                        <option value="MARKETING">Internal Marketing</option>
                        <option value="FINANCE">Tim Keuangan/KPR</option>
                    </select>
                </div>
            </div>

            {/* Users Table */}
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
                                        {/* User Info */}
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

                                        {/* Login Info (Username & Email) */}
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

                                        {/* Role */}
                                        <td className="py-3.5 px-4">
                                            <span
                                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-bold ${roleBadges[user.role]
                                                    }`}
                                            >
                                                <Shield className="w-3 h-3" />
                                                {roleLabels[user.role]}
                                            </span>
                                        </td>

                                        {/* Status */}
                                        <td className="py-3.5 px-4">
                                            {user.status === "ACTIVE" ? (
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

                                        {/* Actions */}
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
                                                        onClick={() =>
                                                            handleOpenEditModal(user)
                                                        }
                                                        className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 transition-colors"
                                                    >
                                                        <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                                                        Edit User
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteUser(user.id)
                                                        }
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

            {/* Modal Form Create / Edit User */}
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

                        <form onSubmit={handleSubmitForm} className="p-5 space-y-4">
                            <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Nama Lengkap *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Contoh: Elin Marketing"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Username Login *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="elin_mkt"
                                        value={formData.username}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                username: e.target.value
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "_"),
                                            })
                                        }
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Nomor HP / WA
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="081234567890"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Alamat Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="elin@pemasaran.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Role Akses
                                    </label>
                                    <select
                                        value={formData.role}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                role: e.target.value as UserRole,
                                            })
                                        }
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        <option value="MARKETING">Internal Marketing</option>
                                        <option value="MANAGER">Sales Manager</option>
                                        <option value="FINANCE">Tim Keuangan/KPR</option>
                                        <option value="ADMIN">Administrator</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Status Akun
                                    </label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                status: e.target.value as UserStatus,
                                            })
                                        }
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        <option value="ACTIVE">Aktif</option>
                                        <option value="INACTIVE">Nonaktif</option>
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
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 transition-all"
                                >
                                    {editingUser ? "Simpan Perubahan" : "Buat User"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}