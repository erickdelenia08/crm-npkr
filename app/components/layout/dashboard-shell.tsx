"use client"

import { useState } from "react"
import { Sidebar } from "../layout/sidebar"
import { Header } from "../layout/header"
import { User } from "@/generated/prisma"

type Props = {
    children: React.ReactNode
    user?: User
}

export default function DashboardShell({
    children,
    user,
}: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex overflow-scroll">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                userRole={user?.role}
            />

            <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
                <Header
                    onOpenSidebar={() => setSidebarOpen(true)}
                    user={user as User}
                />

                <main className="flex-1 p-4 lg:p-8 max-w-7xl w-full mx-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}