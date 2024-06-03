import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import type { ProjectPayload } from '@/types'
import {
  ProjectsPageBreadcrumb,
  ProjectsPageComponent,
} from '@/components/pages/project/projects-page-component'

export interface ProjectPageProps {
  data: ProjectPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectsPage({ data, encodeDataAttribute }: ProjectPageProps) {
  const { slug, heading, subheading, blurb, description, image, cards } =
    data ?? {}

  return (
    <>
      <ProjectsPageBreadcrumb />
      <div className="flex flex-col mt-6 space-y-16">
        {/* for each project in the list, construct a ProjectComponent */}
        {Array.isArray(data) &&
          data.map((project: any) => (
            <ProjectsPageComponent
              link={project.slug.current}
              heading={project.heading}
              subheading={project.subheading}
              blurb={project.blurb}
            />
          ))}
      </div>
    </>
  )
}

export default ProjectsPage
