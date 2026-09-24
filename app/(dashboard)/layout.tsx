"use client"

import { useState } from "react"
import { Sidebar } from "../components/layout/sidebar"
import { Header } from "../components/layout/header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex overflow-scroll">
            {/* Sidebar Navigation */}
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                userRole="ADMIN" // Bisa disesuaikan nanti dengan state/auth
            />

            {/* Main Content Container */}
            <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
                {/* Sticky Header */}
                <Header onOpenSidebar={() => setSidebarOpen(true)} />

                {/* Dynamic Page Content */}
                <main className="flex-1 p-4 lg:p-8 max-w-7xl w-full mx-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}