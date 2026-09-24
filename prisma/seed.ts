import { Role } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function main() {
    console.log("🌱 Starting user seed...");

    // =====================================================
    // PASSWORD
    // =====================================================

    const adminPassword = await bcrypt.hash("admin123", 12);
    const marketingPassword = await bcrypt.hash("marketing123", 12);
    const digitalMarketingPassword = await bcrypt.hash(
        "digitalmarketing123",
        12
    );
    const fieldSupervisorPassword = await bcrypt.hash(
        "fieldsupervisor123",
        12
    );
    const managerPassword = await bcrypt.hash("manager123", 12);
    const directorPassword = await bcrypt.hash("director123", 12);

    // =====================================================
    // USERS
    // =====================================================

    await prisma.user.upsert({
        where: {
            username: "admin",
        },
        update: {},
        create: {
            username: "admin",
            name: "Administrator",
            email: "admin@property.local",
            phone: "081234567890",
            password: adminPassword,
            role: Role.ADMIN,
            isActive: true,
        },
    });

    await prisma.user.upsert({
        where: {
            username: "marketing",
        },
        update: {},
        create: {
            username: "marketing",
            name: "Marketing Demo",
            email: "marketing@property.local",
            phone: "081234567891",
            password: marketingPassword,
            role: Role.MARKETING,
            isActive: true,
        },
    });

    await prisma.user.upsert({
        where: {
            username: "digitalmarketing",
        },
        update: {},
        create: {
            username: "digitalmarketing",
            name: "Digital Marketing Demo",
            email: "digitalmarketing@property.local",
            phone: "081234567893",
            password: digitalMarketingPassword,
            role: Role.DIGITAL_MARKETING,
            isActive: true,
        },
    });

    await prisma.user.upsert({
        where: {
            username: "fieldsupervisor",
        },
        update: {},
        create: {
            username: "fieldsupervisor",
            name: "Field Supervisor Demo",
            email: "fieldsupervisor@property.local",
            phone: "081234567894",
            password: fieldSupervisorPassword,
            role: Role.FIELD_SUPERVISOR,
            isActive: true,
        },
    });

    await prisma.user.upsert({
        where: {
            username: "manager",
        },
        update: {},
        create: {
            username: "manager",
            name: "Manager Demo",
            email: "manager@property.local",
            phone: "081234567895",
            password: managerPassword,
            role: Role.MANAGER,
            isActive: true,
        },
    });

    await prisma.user.upsert({
        where: {
            username: "director",
        },
        update: {},
        create: {
            username: "director",
            name: "Director Demo",
            email: "director@property.local",
            phone: "081234567896",
            password: directorPassword,
            role: Role.DIRECTOR,
            isActive: true,
        },
    });

    console.log("✅ Users created");

    // =====================================================
    // LOGIN ACCOUNTS
    // =====================================================

    console.log("");
    console.log("======================================");
    console.log("LOGIN ACCOUNTS");
    console.log("======================================");

    console.log("");
    console.log("ADMIN");
    console.log("Username : admin");
    console.log("Password : admin123");

    console.log("");
    console.log("MARKETING");
    console.log("Username : marketing");
    console.log("Password : marketing123");

    console.log("");
    console.log("DIGITAL MARKETING");
    console.log("Username : digitalmarketing");
    console.log("Password : digitalmarketing123");

    console.log("");
    console.log("FIELD SUPERVISOR");
    console.log("Username : fieldsupervisor");
    console.log("Password : fieldsupervisor123");

    console.log("");
    console.log("MANAGER");
    console.log("Username : manager");
    console.log("Password : manager123");

    console.log("");
    console.log("DIRECTOR");
    console.log("Username : director");
    console.log("Password : director123");

    console.log("");
    console.log("======================================");
    console.log("🌱 USER SEED COMPLETED");
    console.log("======================================");
}

main()
    .catch((error) => {
        console.error("❌ User seed failed:");
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });