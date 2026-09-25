import { getUnits, getProjectsWithBlocks, getProductCategoriesWithTypes } from "@/actions/unit.action"
import { UnitTable } from "@/components/tables/unit-table"

export const dynamic = "force-dynamic"

export default async function UnitsPage() {
    const rawUnits = await getUnits()
    const projects = await getProjectsWithBlocks()
    const categories = await getProductCategoriesWithTypes()

    const units = rawUnits.map(u => ({
        id: u.id,
        code: u.code,
        price: u.price ? Number(u.price) : null,
        status: u.status,
        constructionStatus: u.constructionStatus,
        block: {
            id: u.block.id,
            name: u.block.name,
            project: {
                id: u.block.project.id,
                name: u.block.project.name,
            }
        },
        productType: {
            id: u.productType.id,
            name: u.productType.name,
            category: {
                id: u.productType.category.id,
                name: u.productType.category.name,
            }
        }
    }))

    return <UnitTable initialUnits={units} projects={projects} categories={categories} />
}