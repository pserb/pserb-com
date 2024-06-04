import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'projectList',
      title: 'Project List',
      description: 'List of projects to display on page',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'project',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
        return {
            title: 'Projects Page',
        }
    }
  }
})
