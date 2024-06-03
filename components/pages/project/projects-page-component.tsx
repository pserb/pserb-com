"use client";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, ExternalLink } from "lucide-react";

export function ProjectsPageBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-foreground" href="/projects">
            Projects
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export function ProjectsPageComponent({
  link,
  heading,
  subheading,
  blurb,
}: {
  link: string;
  heading: string;
  subheading: string;
  blurb: string;
}) {
  return (
    <Link href={"projects/" + link}>
      <div className="flex flex-col justify-between space-y-4 p-4 border rounded-lg hover:bg-secondary">
        {/* this div acts as a card */}
        <div className="grid">
          <span className="justify-self-end col-start-1 row-start-1 text-muted-foreground">
            <ExternalLink />
          </span>
          <span className="col-start-1 row-start-1">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">{heading}</h2>
              <p className="text-sm text-muted-foreground italic">
                {subheading}
              </p>
            </div>
            <div className="mt-3">
              <p>{blurb}</p>
            </div>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProjectsPageComponent;
