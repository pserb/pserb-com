import ProjectsPage from '@/components/pages/project/ProjectsPage'
import { loadProjectsPage } from '@/sanity/loader/loadQuery'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
const ProjectsPagePreview = dynamic(
  () => import('@/components/pages/project/ProjectsPagePreview'),
)

export default async function ProjectsPageRoute() {
  const initial = await loadProjectsPage()

  if (draftMode().isEnabled) {
    return <ProjectsPagePreview initial={initial} />
  }

  return <ProjectsPage data={initial.data} />
}
