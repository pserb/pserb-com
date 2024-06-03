import ProjectsPage from '@/components/pages/project/ProjectsPage'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { toPlainText } from 'next-sanity'

import { ProjectSlugPage } from '@/components/pages/project/slug/ProjectSlugPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadProject, loadProjectsPage } from '@/sanity/loader/loadQuery'
const ProjectsPagePreview = dynamic(
  () => import('@/components/pages/project/ProjectsPagePreview'),
)

// type Props = {
//   params: { slug: string }
// }

export async function generateMetadata(
//   { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: project } = await loadProjectsPage()
//   const ogImage = urlForOpenGraphImage(project?.image)

  return {
    title: project?.heading,
    description: project?.blurb ? project.blurb : (await parent).description,
    // openGraph: ogImage
    //   ? {
    //       images: [ogImage, ...((await parent).openGraph?.images || [])],
    //     }
    //   : {},
  }
}

// export function generateStaticParams() {
//   return generateStaticSlugs('project')
// }

export default async function ProjectsPageRoute() {
  const initial = await loadProjectsPage()

  if (draftMode().isEnabled) {
    return <ProjectsPagePreview initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <ProjectsPage data={initial.data} />
}
