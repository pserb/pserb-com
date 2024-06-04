import { ProjectPayload, ProjectsPagePayload } from '@/types'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { Card } from '@sanity/ui'
import ProjectsPageComponent, { ProjectsPageBreadcrumb } from './projects-page-component'

export interface ProjectsPageProps {
  data: ProjectsPagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export default function ProjectsPage({
  data,
  encodeDataAttribute,
}: ProjectsPageProps) {
  const { projectList = [] } = data ?? {}

  return (
    <>
    <ProjectsPageBreadcrumb />
      <div className="flex flex-col mt-6 space-y-12">
        {projectList &&
          projectList.map((project: ProjectPayload) => {
            if (project) {
              return (
                <ProjectsPageComponent
                  link={project.slug!}
                  heading={project.heading!}
                  subheading={project.subheading!}
                  blurb={project.blurb!}
                />
              )
            }
            return null
          })}
      </div>
    </>
  )
}
