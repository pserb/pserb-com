'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { projectBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ProjectPayload } from '@/types'

import ProjectSlugPage from './ProjectSlugPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<ProjectPayload | null>
}

export default function ProjectSlugPreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<ProjectPayload | null>(
    projectBySlugQuery,
    params,
    { initial },
  )

  return (
    <ProjectSlugPage data={data!} encodeDataAttribute={encodeDataAttribute} />
  )
}
