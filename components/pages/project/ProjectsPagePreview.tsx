'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { projectBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ProjectPayload } from '@/types'

import ProjectsPage from './ProjectsPage'

type Props = {
//   params: { slug: string }
  initial: QueryResponseInitial<ProjectPayload | null>
}

export default function ProjectsPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<ProjectPayload | null>(
    projectBySlugQuery,
    // params,
    { initial },
  )

  return <ProjectsPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
