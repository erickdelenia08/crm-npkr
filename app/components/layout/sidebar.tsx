"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Building2,
    LayoutDashboard,
    Home,
    Users,
    UserCheck,
    FileText,
    History,
    X,
    Settings,
    LocationEdit,
    Activity,
} from "lucide-react"

export type UserRole =
    | "ADMIN"
    | "MARKETING"
    | "DIGITAL_MARKETING"
    | "FIELD_SUPERVISOR"
    | "MANAGER"
    | "DIRECTOR"

interface SidebarProps {
    isOpen: boolean
    onClose: () => void
    userRole?: string
}

export function Sidebar({ isOpen, onClose, userRole = "ADMIN" }: SidebarProps) {
    const pathname = usePathname()

    // Pengelompokan Menu Navigasi
    const navigationGroups = [
        {
            groupName: "Main",
            items: [
                {
                    name: "Dashboard",
                    href: "/dashboard",
                    icon: LayoutDashboard,
                    roles: [
                        "ADMIN",
                        "MARKETING",
                        "DIGITAL_MARKETING",
                        "FIELD_SUPERVISOR",
                        "MANAGER",
                        "DIRECTOR",
                    ],
                },
            ],
        },
        {
            groupName: "CRM & Penjualan",
            items: [
                {
                    name: "Leads / Prospek",
                    href: "/leads",
                    icon: UserCheck,
                    roles: [
                        "ADMIN",
                        "MARKETING",
                        "DIGITAL_MARKETING",
                        "MANAGER",
                        "DIRECTOR",
                    ],
                },
                {
                    name: "Customer",
                    href: "/customers",
                    icon: Users,
                    roles: [
                        "ADMIN",
                        "MARKETING",
                        "DIGITAL_MARKETING",
                        "MANAGER",
                        "DIRECTOR",
                    ],
                },
                {
                    name: "Activities",
                    href: "/activities",
                    icon: Activity,
                    roles: [
                        "ADMIN",
                        "MARKETING",
                        "DIGITAL_MARKETING",
                        "MANAGER",
                        "DIRECTOR",
                    ],
                },
                {
                    name: "Laporan Harian",
                    href: "/reports",
                    icon: FileText,
                    roles: [
                        "ADMIN",
                        "MARKETING",
                        "DIGITAL_MARKETING",
                        "FIELD_SUPERVISOR",
                        "MANAGER",
                        "DIRECTOR",
                    ],
                },
            ],
        },
        {
            groupName: "Manajemen Properti",
            items: [
                {
                    name: "Projects",
                    href: "/projects",
                    icon: LocationEdit,
                    roles: [
                        "ADMIN",
                        "MARKETING",
                        "DIGITAL_MARKETING",
                        "FIELD_SUPERVISOR",
                        "MANAGER",
                        "DIRECTOR",
                    ],
                },
                {
                    name: "Unit Perumahan",
                    href: "/units",
                    icon: Home,
                    roles: [
                        "ADMIN",
                        "MARKETING",
                        "DIGITAL_MARKETING",
                        "FIELD_SUPERVISOR",
                        "MANAGER",
                        "DIRECTOR",
                    ],
                },
                {
                    name: "Products",
                    href: "/products",
                    icon: Settings,
                    roles: [
                        "ADMIN",
                        "MARKETING",
                        "DIGITAL_MARKETING",
                        "FIELD_SUPERVISOR",
                        "MANAGER",
                        "DIRECTOR",
                    ],
                },
            ],
        },
        {
            groupName: "Sistem & Admin",
            items: [
                {
                    name: "Users",
                    href: "/users",
                    icon: Users,
                    roles: ["ADMIN"],
                },
                {
                    name: "Audit Log",
                    href: "/audit-logs",
                    icon: History,
                    roles: ["ADMIN"],
                },
            ],
        },
    ]

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Drawer */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 text-slate-300 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Brand Header */}
                <div className="h-16 flex items-center justify-between px-6 bg-slate-950/50 border-b border-slate-800 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="font-bold text-white text-base tracking-wide">
                                NPKR CRM
                            </h1>
                            {/* <span className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase">
                                {userRole.replace("_", " ")}
                            </span> */}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="lg:hidden text-slate-400 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Grouped Navigation Links */}
                <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
                    {navigationGroups.map((group) => {
                        // Filter item berdasarkan role user
                        const filteredItems = group.items.filter((item) =>
                            item.roles.includes(userRole)
                        )

                        // Jika grup tidak memiliki item yang boleh diakses role ini, jangan tampilkan header grupnya
                        if (filteredItems.length === 0) return null

                        return (
                            <div key={group.groupName} className="space-y-1.5">
                                <h2 className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                    {group.groupName}
                                </h2>

                                {filteredItems.map((item) => {
                                    const isActive =
                                        pathname === item.href ||
                                        (item.href !== "/" && pathname.startsWith(item.href))

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={onClose}
                                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                                : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                                                }`}
                                        >
                                            <item.icon className="w-5 h-5 shrink-0" />
                                            <span>{item.name}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        )
                    })}
                </nav>
            </aside>
        </>
    )
}