import { getUsers } from "@/actions/user.action";
import { UserTable } from "@/components/tables/user-table";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";

export default async function UsersPage() {
    const session = await auth();

    // Pastikan hanya ADMIN atau MANAGER yang dapat mengakses halaman manajemen user
    if (!session || (session.user.role !== "ADMIN" && session.user.role !== "MANAGER")) {
        redirect("/dashboard");
    }

    const users = await getUsers();

    return (
        <UserTable initialUsers={users} />
    );
}