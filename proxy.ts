import { auth } from "@/auth";
import { NextResponse } from "next/server";

type Role =
    | "ADMIN"
    | "MARKETING"
    | "DIGITAL_MARKETING"
    | "FIELD_SUPERVISOR"
    | "MANAGER"
    | "DIRECTOR";

/**
 * Route yang hanya bisa diakses oleh role tertentu.
 *
 * Catatan:
 * Proxy ini mengatur akses LEVEL HALAMAN.
 * Permission aksi seperti create/update/delete sebaiknya
 * tetap dicek di server/API.
 */
const protectedRoutes: Record<string, Role[]> = {
    // ==========================================
    // ADMIN ONLY
    // ==========================================

    "/users": ["ADMIN"],
    "/audit-logs": ["ADMIN"],

    // ==========================================
    // CUSTOMER
    // ==========================================

    "/customers": [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "MANAGER",
        "DIRECTOR",
    ],

    // ==========================================
    // LEADS
    // ==========================================

    "/leads": [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "MANAGER",
        "DIRECTOR",
    ],

    // ==========================================
    // ACTIVITIES
    // ==========================================

    "/activities": [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "MANAGER",
        "DIRECTOR",
    ],

    // ==========================================
    // REPORTS
    // ==========================================

    "/reports": [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "FIELD_SUPERVISOR",
        "MANAGER",
        "DIRECTOR",
    ],

    // ==========================================
    // UNITS
    // ==========================================

    "/units": [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "FIELD_SUPERVISOR",
        "MANAGER",
        "DIRECTOR",
    ],

    // ==========================================
    // PROJECTS
    // ==========================================

    "/projects": [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "FIELD_SUPERVISOR",
        "MANAGER",
        "DIRECTOR",
    ],

    // ==========================================
    // PRODUCTS
    // ==========================================

    "/products": [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "FIELD_SUPERVISOR",
        "MANAGER",
        "DIRECTOR",
    ],

    // ==========================================
    // SETTINGS
    // ==========================================

    "/settings": [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "FIELD_SUPERVISOR",
        "MANAGER",
        "DIRECTOR",
    ],

    // ==========================================
    // PROFILE
    // ==========================================

    "/profile": [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "FIELD_SUPERVISOR",
        "MANAGER",
        "DIRECTOR",
    ],
};

/**
 * Cari permission berdasarkan pathname.
 *
 * Contoh:
 *
 * /users
 * /users/123
 *      → ADMIN
 *
 * /leads
 * /leads/123
 *      → role Lead
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

    // ==========================================
    // DEBUG
    // ==========================================

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

        // Login boleh diakses
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

    const validRoles: Role[] = [
        "ADMIN",
        "MARKETING",
        "DIGITAL_MARKETING",
        "FIELD_SUPERVISOR",
        "MANAGER",
        "DIRECTOR",
    ];

    // Role tidak valid
    if (!role || !validRoles.includes(role)) {
        return NextResponse.redirect(
            new URL("/login", nextUrl)
        );
    }

    // ==========================================
    // ROOT → DASHBOARD
    // ==========================================

    if (isHomeRoute) {
        return NextResponse.redirect(
            new URL("/dashboard", nextUrl)
        );
    }

    // ==========================================
    // LOGIN → DASHBOARD
    // ==========================================

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
    // → user yang sudah login boleh masuk.
    if (!allowedRoles) {
        return NextResponse.next();
    }

    // Role tidak punya akses
    if (!allowedRoles.includes(role)) {
        return NextResponse.redirect(
            new URL("/dashboard", nextUrl)
        );
    }

    // Role punya akses
    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};