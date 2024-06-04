/**
 * Sets up the Presentation Resolver API,
 * see https://www.sanity.io/docs/presentation-resolver-api for more information.
 */

import { defineDocuments, defineLocations } from 'sanity/presentation'

import { resolveHref } from '@/sanity/lib/utils'

export const mainDocuments = defineDocuments([
  {
    route: '/projects/:slug',
    filter: `_type == "project" && slug.current == $slug`,
  },
  {
    route: '/projects',
    filter: `_type == "projects"`,
  },
])

export const locations = {
  settings: defineLocations({
    message: 'This document is used on all pages',
    tone: 'caution',
  }),
  home: defineLocations({
    message: 'This document is used to render the front page',
    tone: 'positive',
    locations: [{ title: 'Home', href: resolveHref('home')! }],
  }),
  project: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Untitled',
          href: resolveHref('project', doc?.slug)!,
        },
      ],
    }),
  }),
  projects: defineLocations({
    select: { title: 'heading', slug: 'slug.current' },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Untitled',
          href: resolveHref('projects')!,
        },
      ],
    }),
  }),
}
