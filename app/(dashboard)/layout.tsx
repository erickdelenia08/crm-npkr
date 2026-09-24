import DashboardShell from "../components/layout/dashboard-shell"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { User } from "@/generated/prisma"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth();

    if (!session) {
        redirect("/login")
    }

    const user = session?.user as User

    return (
        <DashboardShell user={user}>
            {children}
        </DashboardShell>
    )
}