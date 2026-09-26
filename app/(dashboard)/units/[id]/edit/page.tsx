import { notFound } from "next/navigation";
import { getUnitById, getProjectsWithBlocks, getProductCategoriesWithTypes } from "@/actions/unit.action";
import { UnitEditForm } from "@/components/forms/unit-edit-form";

export const dynamic = "force-dynamic";

interface EditUnitPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditUnitPage({ params }: EditUnitPageProps) {
    const resolvedParams = await params;
    const unitId = resolvedParams.id;

    const [unit, projects, categories] = await Promise.all([
        getUnitById(unitId),
        getProjectsWithBlocks(),
        getProductCategoriesWithTypes(),
    ]);

    if (!unit) {
        notFound();
    }

    return (
        <UnitEditForm 
            unit={unit} 
            projects={projects} 
            categories={categories} 
        />
    );
}
