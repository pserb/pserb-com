import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import type { ProjectPayload } from '@/types'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { Button } from '@/components/ui/button'
import ClientRenderImage from './client-image-renderer'

export interface ProjectPageProps {
  data: ProjectPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

function StatInsert({
  stat,
  description,
}: {
  stat: string
  description: string
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{stat}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

type Card = {
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
}

function RenderCards({ cards }: { cards: Card[] }) {
  // TODO: RENDER MULTIPLE CARDS
  return cards?.map((card: Card) => (
    <Card>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{card.content}</p>
        <div className="mt-4 space-y-3">
          {card.stats ? (
            card.stats.map((stat: any) => (
              <StatInsert stat={stat.stat} description={stat.description} />
            ))
          ) : (
            <></>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row justify-between w-full">
          {card.buttons ? (
            card.buttons.map((button: any) => (
              <span>
                <Button asChild variant={button.variant}>
                  <Link href={button.link}>{button.text}</Link>
                </Button>
              </span>
            ))
          ) : (
            <></>
          )}
        </div>
      </CardFooter>
    </Card>
  ))
}

function ProjectSlugPageBreadcrumb({
  slug,
  heading,
}: {
  slug: string
  heading?: string
}) {
  const link = `/projects/${slug}`
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-foreground" href={link}>
            {heading ? heading : slug}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function ProjectSlugPage({
  data,
  encodeDataAttribute,
}: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { slug, heading, subheading, blurb, description, image, cards } =
    data ?? {}

  return (
    <>
      <ProjectSlugPageBreadcrumb slug={slug!} heading={heading} />
      <div className="mt-6 space-y-6">
        <h1 className="text-3xl font-bold border-b pb-4">{heading}</h1>
        <p className="">{description}</p>
        {image ? <ClientRenderImage image={image} /> : <></>}
        {cards ? <RenderCards cards={cards} /> : <></>}
      </div>
    </>
  )
}

export default ProjectSlugPage
