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

    return <ProjectDetailClient project={project} units={units} />
}