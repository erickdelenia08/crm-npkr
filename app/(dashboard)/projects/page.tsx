import { getProjects } from "@/actions/project.action"
import { ProjectTable } from "@/components/tables/project-table"

export const dynamic = "force-dynamic"

export default async function ProjectsPage() {
    const projects = await getProjects()

    return <ProjectTable projects={projects} />
}