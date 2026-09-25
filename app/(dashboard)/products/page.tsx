import { getCategories, getProductTypes } from "@/actions/product.action"
import { ProductTable } from "@/components/tables/product-table"

export const dynamic = "force-dynamic"

export default async function ProductsPage() {
    const categories = await getCategories()
    const types = await getProductTypes()

    // Map properties slightly if needed to match strictly the expected schema
    const safeCategories = categories.map(c => ({
        ...c,
        description: c.description || null,
    }))
    
    // We fetch categories and types directly from the DB via server action.
    const safeTypes = types.map(t => ({
        ...t,
        landArea: t.landArea || null,
        buildingArea: t.buildingArea || null,
        bedrooms: t.bedrooms || null,
        bathrooms: t.bathrooms || null,
        electricity: t.electricity || null,
        waterSource: t.waterSource || null,
        wallMaterial: t.wallMaterial || null,
        roofMaterial: t.roofMaterial || null,
        description: t.description || null,
        // The relation
        category: {
            id: t.category.id,
            name: t.category.name,
        }
    }))

    return <ProductTable categories={safeCategories} types={safeTypes} />
}