import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

// TODO: NOT USED
export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

// TODO: NOT USED
export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

// TODO: NOT USED
export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

// Page payloads

export interface HomePagePayload {
  supraheading?: string
  heading?: string
  blurb?: string
}

// TODO: NOT USED
export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export type ProjectPayload = {
  slug: string
  heading?: string
  subheading?: string
  blurb?: string
  description?: string
  image?: {
    src: string
    hyperlink?: string
    alt: string
    height?: string
  }
  cards?: Array<{
    title?: string
    description?: string
    content?: string
    stats?: Array<{
      stat?: string
      description?: string
    }>
    buttons?: Array<{
      text?: string
      link?: string
      variant?:
        | 'default'
        | 'destructive'
        | 'ghost'
        | 'link'
        | 'outline'
        | 'secondary'
    }>
  }>
}

// TODO: NOT USED
export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

export interface ProjectsPagePayload {
  projectList?: ProjectPayload[]
}
