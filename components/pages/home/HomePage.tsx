import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { Button } from '@/components/ui/button'
import { Github } from "lucide-react";

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { supraheading = "", heading = "", blurb = "" } = data ?? {}

  return (
    <div className="flex flex-col space-y-8">
      <div className="space-y-1">
        <p className="text-lg text-muted-foreground">{supraheading}</p>
        <h1 className="text-4xl font-bold">{heading}</h1>
      </div>
      <div className="">
        <p>{blurb}</p>
      </div>
      <div className="flex flex-row space-x-4">
        <Button asChild variant="default">
          <Link href="/projects">Projects</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/contact">Contact</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="https://github.com/pserb">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default HomePage
