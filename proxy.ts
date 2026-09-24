import { auth } from "@/auth";
import { NextResponse } from "next/server";

type Role = "ADMIN" | "MARKETING" | "STAFF";

/**
 * Route yang hanya bisa diakses oleh role tertentu.
 *
 * Urutan penting:
 * route yang lebih spesifik diletakkan lebih dulu.
 */
const protectedRoutes: Record<string, Role[]> = {
    "/users": ["ADMIN"],
    "/audit-logs": ["ADMIN"],
    "/settings": ["ADMIN"],

    "/leads": ["ADMIN", "MARKETING"],
    "/customers": ["ADMIN", "MARKETING"],
    "/activities": ["ADMIN", "MARKETING"],
    "/reports": ["ADMIN", "MARKETING"],

    "/units": ["ADMIN", "MARKETING", "STAFF"],
    "/projects": ["ADMIN", "MARKETING", "STAFF"],
};

/**
 * Cari permission berdasarkan pathname.
 *
 * Contoh:
 * /users              → ADMIN
 * /users/123          → ADMIN
 * /leads              → ADMIN + MARKETING
 * /leads/123          → ADMIN + MARKETING
 */
function getAllowedRoles(pathname: string): Role[] | undefined {
    const matchedRoute = Object.keys(protectedRoutes)
        .sort((a, b) => b.length - a.length)
        .find(
            (route) =>
                pathname === route ||
                pathname.startsWith(`${route}/`)
        );

    return matchedRoute
        ? protectedRoutes[matchedRoute]
        : undefined;
}

export default auth((req) => {
    const { nextUrl } = req;

    const isLoggedIn = !!req.auth;

    const role = req.auth?.user?.role as Role | undefined;

    const pathname = nextUrl.pathname;

    const isHomeRoute = pathname === "/";
    const isLoginRoute = pathname === "/login";

    console.log("========== PROXY ==========");
    console.log("PATH:", pathname);
    console.log("isLoggedIn:", isLoggedIn);
    console.log("role:", role);
    console.log("user:", req.auth?.user);
    console.log("===========================");

    // ==========================================
    // USER BELUM LOGIN
    // ==========================================

    if (!isLoggedIn) {
        // Root → login
        if (isHomeRoute) {
            return NextResponse.redirect(
                new URL("/login", nextUrl)
            );
        }

        // Halaman login boleh diakses
        if (isLoginRoute) {
            return NextResponse.next();
        }

        // Semua halaman aplikasi → login
        return NextResponse.redirect(
            new URL("/login", nextUrl)
        );
    }

    // ==========================================
    // USER SUDAH LOGIN
    // ==========================================

    // Role tidak valid
    if (!role || !["ADMIN", "MARKETING", "STAFF"].includes(role)) {
        return NextResponse.redirect(
            new URL("/login", nextUrl)
        );
    }

    // "/" → dashboard
    if (isHomeRoute) {
        return NextResponse.redirect(
            new URL("/dashboard", nextUrl)
        );
    }

    // "/login" → dashboard
    if (isLoginRoute) {
        return NextResponse.redirect(
            new URL("/dashboard", nextUrl)
        );
    }

    // ==========================================
    // RBAC
    // ==========================================

    const allowedRoles = getAllowedRoles(pathname);

    // Route tidak memiliki permission khusus
    // → selama sudah login, boleh masuk.
    if (!allowedRoles) {
        return NextResponse.next();
    }

    // Role tidak memiliki akses
    if (!allowedRoles.includes(role)) {
        return NextResponse.redirect(
            new URL("/dashboard", nextUrl)
        );
    }

    // Role memiliki akses
    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};

