"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
    Menu,
    Bell,
    User,
    LogOut,
    Settings,
    ChevronDown,
} from "lucide-react"

interface HeaderProps {
    onOpenSidebar: () => void
}

export function Header({ onOpenSidebar }: HeaderProps) {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown saat klik di luar area
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-30 flex items-center justify-between lg:justify-end px-4 lg:px-8 transition-all">
            {/* Mobile Toggle Only */}
            <div className="lg:hidden flex items-center">
                <button
                    onClick={onOpenSidebar}
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                    aria-label="Open Sidebar"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
                {/* Notification Button */}
                <button
                    type="button"
                    className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                    aria-label="Notifications"
                >
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
                </button>

                {/* Divider Subtle */}
                <div className="h-5 w-px bg-slate-200/80 my-auto" />

                {/* Profile & Logout Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-2 p-1 pl-1.5 hover:bg-slate-100/80 rounded-full transition-all group border border-transparent hover:border-slate-200/60"
                    >
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                            EM
                        </div>

                        <div className="hidden md:block text-left pr-1">
                            <p className="text-xs font-semibold text-slate-800 leading-none">
                                Elin Marketing
                            </p>
                            <span className="text-[10px] text-slate-400 leading-none">
                                Internal Marketing
                            </span>
                        </div>

                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200" />
                    </button>

                    {/* Popover Dropdown Menu */}
                    {isProfileOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 py-1.5 z-50 animate-in fade-in-50 zoom-in-95">
                            <div className="px-4 py-2 border-b border-slate-100">
                                <p className="text-xs font-bold text-slate-900">
                                    Elin Marketing
                                </p>
                                <p className="text-[11px] text-slate-400">
                                    elin@pemasaran.com
                                </p>
                            </div>

                            <div className="py-1">
                                <Link
                                    href="/profile"
                                    onClick={() => setIsProfileOpen(false)}
                                    className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                                >
                                    <User className="w-3.5 h-3.5 text-slate-400" />
                                    Profil Saya
                                </Link>

                            </div>

                            <div className="my-1 border-t border-slate-100" />

                            <button
                                type="button"
                                onClick={() => {
                                    setIsProfileOpen(false)
                                    alert("Logout berhasil")
                                }}
                                className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50/80 transition-colors text-left"
                            >
                                <LogOut className="w-3.5 h-3.5 text-rose-500" />
                                Keluar (Logout)
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}