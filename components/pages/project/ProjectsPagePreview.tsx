'use client'

import { projectsPageQuery } from '@/sanity/lib/queries'
import { ProjectsPagePayload } from '@/types'
import { QueryResponseInitial, useQuery } from '@sanity/react-loader'
import TestPage from './ProjectsPage'

type Props = {
    initial: QueryResponseInitial<ProjectsPagePayload | null>
}

export default function ProjectsPagePreview(props: Props) {
    const { initial } = props
    const { data = null, encodeDataAttribute } = useQuery<ProjectsPagePayload | null>(
        projectsPageQuery,
        { initial },
    )

    return <TestPage data={data} encodeDataAttribute={encodeDataAttribute} />
}
