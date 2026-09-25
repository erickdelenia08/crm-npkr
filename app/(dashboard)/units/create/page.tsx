import { getProjectsWithBlocks, getProductCategoriesWithTypes } from "@/actions/unit.action"
import { UnitCreateForm } from "@/components/forms/unit-create-form"

export const dynamic = "force-dynamic"

export default async function CreateUnitPage() {
    const projects = await getProjectsWithBlocks()
    const categories = await getProductCategoriesWithTypes()

    return <UnitCreateForm projects={projects} categories={categories} />
}