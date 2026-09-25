import { getProjectById, getProjectUnits } from "@/actions/project.action"
import { ProjectDetailClient } from "@/components/tables/project-detail-client"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

type PageProps = {
    params: Promise<{ id: string }>
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const projectId = resolvedParams.id;

    const project = await getProjectById(projectId);
    
    if (!project) {
        notFound();
    }

    const units = await getProjectUnits(projectId);

    // Map strict DB model to client props to avoid passing unneeded sensitive DB properties if any
    const safeProject = {
        id: project.id,
        name: project.name,
        code: project.code,
        address: project.address,
        description: project.description,
        blocks: project.blocks.map(b => ({
            id: b.id,
            name: b.name,
            code: b.code,
            units: b.units,
        }))
    };

    const safeUnits = units.map(u => ({
        id: u.id,
        code: u.code,
        price: u.price,
        status: u.status,
        block: {
            name: u.block.name
        },
        productType: {
            name: u.productType.name,
            category: {
                name: u.productType.category.name
            }
        }
    }));

    return <ProjectDetailClient project={safeProject} units={safeUnits} />
}