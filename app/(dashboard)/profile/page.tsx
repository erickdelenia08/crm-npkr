"use client"

import { useState } from "react"
import {
    User,
    AtSign,
    Mail,
    Phone,
    Shield,
    Calendar,
    Save,
    Key,
    CheckCircle2,
    Lock,
} from "lucide-react"

export default function ProfilePage() {
    // State Data Profil
    const [profile, setProfile] = useState({
        name: "Elin Marketing",
        username: "elin_mkt",
        email: "elin@pemasaran.com",
        phone: "081234567890",
        role: "Internal Marketing",
        joinedDate: "15 Januari 2026",
    })

    // State Password
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    })

    const [isSaved, setIsSaved] = useState(false)

    const handleSaveProfile = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Panggil API Update Profile
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 3000)
    }

    const handleUpdatePassword = (e: React.FormEvent) => {
        e.preventDefault()
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert("Konfirmasi kata sandi baru tidak cocok!")
            return
        }
        // TODO: Panggil API Update Password
        alert("Kata sandi berhasil diperbarui!")
        setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Title Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
                    <User className="w-6 h-6 text-blue-600" />
                    Profil Saya
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                    Kelola informasi pribadi dan keamanan akun login Anda.
                </p>
            </div>

            {/* Alert Notifikasi Berhasil */}
            {isSaved && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs font-semibold animate-in fade-in-50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    Perubahan profil berhasil disimpan!
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Side: Avatar Card Summary */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
                        {/* Avatar Large */}
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold text-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
                            {profile.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()
                                .slice(0, 2)}
                        </div>

                        <h2 className="text-base font-bold text-slate-900">
                            {profile.name}
                        </h2>

                        <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 mt-1">
                            <AtSign className="w-3.5 h-3.5" />
                            <span>{profile.username}</span>
                        </div>

                        <span className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-[11px] font-bold rounded-full border border-slate-200">
                            <Shield className="w-3 h-3 text-slate-500" />
                            {profile.role}
                        </span>

                        <div className="w-full border-t border-slate-100 my-4" />

                        <div className="w-full text-left space-y-2.5 text-xs text-slate-500">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                                <span>Bergabung sejak {profile.joinedDate}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Edit Form & Security */}
                <div className="md:col-span-2 space-y-6">
                    {/* Personal Information Form */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                        <h3 className="text-sm font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                            Informasi Pribadi
                        </h3>

                        <form onSubmit={handleSaveProfile} className="space-y-4">
                            <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={profile.name}
                                    onChange={(e) =>
                                        setProfile({ ...profile, name: e.target.value })
                                    }
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Username (Untuk Login)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            disabled
                                            value={profile.username}
                                            className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 cursor-not-allowed font-semibold pl-8"
                                        />
                                        <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    </div>
                                    <p className="text-[10px] text-slate-400 mt-1">
                                        Username dibuat oleh Admin.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Nomor WhatsApp
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={profile.phone}
                                            onChange={(e) =>
                                                setProfile({ ...profile, phone: e.target.value })
                                            }
                                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all pl-8"
                                        />
                                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Alamat Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={profile.email}
                                        onChange={(e) =>
                                            setProfile({ ...profile, email: e.target.value })
                                        }
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all pl-8"
                                    />
                                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                </div>
                            </div>

                            <div className="pt-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 transition-all"
                                >
                                    <Save className="w-4 h-4" />
                                    Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Change Password Form */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                        <h3 className="text-sm font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                            <Key className="w-4 h-4 text-slate-500" />
                            Ubah Kata Sandi
                        </h3>

                        <form onSubmit={handleUpdatePassword} className="space-y-4">
                            <div>
                                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                    Kata Sandi Saat Ini
                                </label>
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    value={passwordData.currentPassword}
                                    onChange={(e) =>
                                        setPasswordData({
                                            ...passwordData,
                                            currentPassword: e.target.value,
                                        })
                                    }
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Kata Sandi Baru
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        value={passwordData.newPassword}
                                        onChange={(e) =>
                                            setPasswordData({
                                                ...passwordData,
                                                newPassword: e.target.value,
                                            })
                                        }
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                        Konfirmasi Kata Sandi Baru
                                    </label>
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        value={passwordData.confirmPassword}
                                        onChange={(e) =>
                                            setPasswordData({
                                                ...passwordData,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div className="pt-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                                >
                                    Perbarui Kata Sandi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}