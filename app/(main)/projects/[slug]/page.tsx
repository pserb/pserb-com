import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { toPlainText } from 'next-sanity'

import { ProjectSlugPage } from '@/components/pages/project/slug/ProjectSlugPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadProject } from '@/sanity/loader/loadQuery'
const ProjectSlugPreview = dynamic(
  () => import('@/components/pages/project/slug/ProjectSlugPreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: project } = await loadProject(params.slug)
  const ogImage = urlForOpenGraphImage(project?.image)

  return {
    title: project?.heading,
    description: project?.blurb
      ? project.blurb
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function ProjectSlugRoute({ params }: Props) {
  const initial = await loadProject(params.slug)

  // if (draftMode().isEnabled) {
  //   return <ProjectSlugPreview params={params} initial={initial} />
  // }

  if (!initial.data) {
    notFound()
  }

  return <ProjectSlugPage data={initial.data} />
}
