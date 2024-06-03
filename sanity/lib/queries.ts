import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    supraheading,
    heading,
    blurb,
  }
`

// TODO: NOT USED
export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectsPageQuery = groq`
  *[_type == "project"] {
    _id,
    slug,
    heading,
    subheading,
    blurb,
    description,
    image,
    cards,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    heading,
    "slug": slug.current,
    subheading,
    blurb,
    description,
    image,
    cards,
  }
`

// TODO: NOT USED
export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
