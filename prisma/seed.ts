import { Role, UnitStatus, ConstructionStatus, HouseFacing } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function main() {
    console.log("🌱 Starting database seed...");

    // =====================================================
    // PASSWORD
    // =====================================================

    const adminPassword = await bcrypt.hash("admin123", 12);
    const marketingPassword = await bcrypt.hash("marketing123", 12);
    const staffPassword = await bcrypt.hash("staff123", 12);

    // =====================================================
    // USERS
    // =====================================================

    const admin = await prisma.user.upsert({
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

    const marketing = await prisma.user.upsert({
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

    const staff = await prisma.user.upsert({
        where: {
            username: "staff",
        },
        update: {},
        create: {
            username: "staff",
            name: "Staff Demo",
            email: "staff@property.local",
            phone: "081234567892",
            password: staffPassword,
            role: Role.STAFF,
            isActive: true,
        },
    });

    console.log("✅ Users created");

    // =====================================================
    // PROJECT
    // =====================================================

    const project = await prisma.project.upsert({
        where: {
            code: "NPK",
        },
        update: {},
        create: {
            name: "New Puri Kencana",
            code: "NPK",
            address: "Yosowilangun, Lumajang",
            description: "Perumahan New Puri Kencana",
            isActive: true,
        },
    });

    console.log("✅ Project created");

    // =====================================================
    // UNIT TYPES
    // =====================================================

    const type30_60 = await prisma.unitType.upsert({
        where: {
            code: "30-60",
        },
        update: {},
        create: {
            name: "Tipe 30/60",
            code: "30-60",
            buildingArea: 30,
            landArea: 60,
            description: "Rumah tipe 30 dengan luas tanah 60 m²",
        },
    });

    const type30_72 = await prisma.unitType.upsert({
        where: {
            code: "30-72",
        },
        update: {},
        create: {
            name: "Tipe 30/72",
            code: "30-72",
            buildingArea: 30,
            landArea: 72,
            description: "Rumah tipe 30 dengan luas tanah 72 m²",
        },
    });

    console.log("✅ Unit types created");

    // =====================================================
    // BLOCKS
    // =====================================================

    const blockA = await prisma.block.upsert({
        where: {
            projectId_code: {
                projectId: project.id,
                code: "A",
            },
        },
        update: {},
        create: {
            projectId: project.id,
            name: "Blok A",
            code: "A",
            sortOrder: 1,
        },
    });

    const blockB = await prisma.block.upsert({
        where: {
            projectId_code: {
                projectId: project.id,
                code: "B",
            },
        },
        update: {},
        create: {
            projectId: project.id,
            name: "Blok B",
            code: "B",
            sortOrder: 2,
        },
    });

    const blockC = await prisma.block.upsert({
        where: {
            projectId_code: {
                projectId: project.id,
                code: "C",
            },
        },
        update: {},
        create: {
            projectId: project.id,
            name: "Blok C",
            code: "C",
            sortOrder: 3,
        },
    });

    console.log("✅ Blocks created");

    // =====================================================
    // UNITS
    // =====================================================

    const units = [
        {
            blockId: blockA.id,
            number: "01",
            code: "NPK-A-01",
            unitTypeId: type30_60.id,
            status: UnitStatus.AVAILABLE,
            constructionStatus: ConstructionStatus.FOUNDATION,
            facing: HouseFacing.SOUTH,
        },
        {
            blockId: blockA.id,
            number: "02",
            code: "NPK-A-02",
            unitTypeId: type30_60.id,
            status: UnitStatus.BOOKED,
            constructionStatus: ConstructionStatus.STRUCTURE,
            facing: HouseFacing.SOUTH,
        },
        {
            blockId: blockA.id,
            number: "03",
            code: "NPK-A-03",
            unitTypeId: type30_72.id,
            status: UnitStatus.SOLD,
            constructionStatus: ConstructionStatus.COMPLETED,
            facing: HouseFacing.NORTH,
        },
        {
            blockId: blockA.id,
            number: "04",
            code: "NPK-A-04",
            unitTypeId: type30_72.id,
            status: UnitStatus.AVAILABLE,
            constructionStatus: ConstructionStatus.FINISHING,
            facing: HouseFacing.NORTH,
        },

        {
            blockId: blockB.id,
            number: "01",
            code: "NPK-B-01",
            unitTypeId: type30_60.id,
            status: UnitStatus.AVAILABLE,
            constructionStatus: ConstructionStatus.FOUNDATION,
            facing: HouseFacing.SOUTH,
        },
        {
            blockId: blockB.id,
            number: "02",
            code: "NPK-B-02",
            unitTypeId: type30_72.id,
            status: UnitStatus.HOLD,
            constructionStatus: ConstructionStatus.STRUCTURE,
            facing: HouseFacing.NORTH,
        },
        {
            blockId: blockB.id,
            number: "03",
            code: "NPK-B-03",
            unitTypeId: type30_72.id,
            status: UnitStatus.AVAILABLE,
            constructionStatus: ConstructionStatus.FOUNDATION,
            facing: HouseFacing.NORTH,
        },

        {
            blockId: blockC.id,
            number: "01",
            code: "NPK-C-01",
            unitTypeId: type30_60.id,
            status: UnitStatus.AVAILABLE,
            constructionStatus: ConstructionStatus.NOT_STARTED,
            facing: HouseFacing.SOUTH,
        },
        {
            blockId: blockC.id,
            number: "02",
            code: "NPK-C-02",
            unitTypeId: type30_72.id,
            status: UnitStatus.CANCELLED,
            constructionStatus: ConstructionStatus.NOT_STARTED,
            facing: HouseFacing.NORTH,
        },
    ];

    for (const unit of units) {
        await prisma.unit.upsert({
            where: {
                code: unit.code,
            },
            update: {},
            create: {
                ...unit,
            },
        });
    }

    console.log("✅ Units created");

    // =====================================================
    // CUSTOMER DEMO
    // =====================================================

    const existingCustomer = await prisma.customer.findFirst({
        where: {
            phone: "081299999999",
        },
    });

    const customer =
        existingCustomer ??
        (await prisma.customer.create({
            data: {
                name: "Budi Santoso",
                phone: "081299999999",
                address: "Lumajang",
            },
        }));

    // =====================================================
    // LEAD DEMO
    // =====================================================

    const bookedUnit = await prisma.unit.findUnique({
        where: {
            code: "NPK-A-02",
        },
    });

    if (bookedUnit) {
        const existingLead = await prisma.lead.findFirst({
            where: {
                customerId: customer.id,
                unitId: bookedUnit.id,
            },
        });

        if (!existingLead) {
            const lead = await prisma.lead.create({
                data: {
                    customerId: customer.id,
                    marketingId: marketing.id,
                    projectId: project.id,
                    unitId: bookedUnit.id,

                    source: "WHATSAPP",
                    status: "BOOKED",
                    stage: "DOCUMENTATION",

                    firstVisitAt: new Date(),
                    nextFollowUpAt: new Date(),

                    notes: "Customer demo untuk testing CRM.",
                },
            });

            // =================================================
            // ACTIVITY DEMO
            // =================================================

            await prisma.activity.create({
                data: {
                    leadId: lead.id,
                    createdById: marketing.id,
                    type: "WHATSAPP",
                    activityDate: new Date(),
                    description:
                        "Customer menghubungi melalui WhatsApp dan tertarik dengan unit NPK-A-02.",
                },
            });

            await prisma.activity.create({
                data: {
                    leadId: lead.id,
                    createdById: marketing.id,
                    type: "VISIT",
                    activityDate: new Date(),
                    description:
                        "Customer melakukan kunjungan dan melihat lokasi unit.",
                },
            });

            console.log("✅ Demo customer, lead, and activities created");
        }
    }

    // =====================================================
    // SUMMARY
    // =====================================================

    console.log("");
    console.log("======================================");
    console.log("🌱 DATABASE SEED COMPLETED");
    console.log("======================================");
    console.log("");
    console.log("LOGIN ACCOUNTS:");
    console.log("");
    console.log("ADMIN");
    console.log("Username : admin");
    console.log("Password : admin123");
    console.log("");
    console.log("MARKETING");
    console.log("Username : marketing");
    console.log("Password : marketing123");
    console.log("");
    console.log("STAFF");
    console.log("Username : staff");
    console.log("Password : staff123");
    console.log("");
    console.log("======================================");
}

main()
    .catch((error) => {
        console.error("❌ Seed failed:");
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
