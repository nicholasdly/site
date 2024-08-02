"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { getNotes } from "@/lib/content";
import { cn } from "@/lib/utils";

import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
}

export function NoteSidebarLink({
  slug,
  frontmatter,
}: ReturnType<typeof getNotes>[number]) {
  const pathname = usePathname();

  const isActive = pathname === `/notes/${slug}`;
  const formattedDate = formatDate(new Date(frontmatter.publishedAt));

  return (
    <SidebarMenuItem key={slug}>
      <SidebarMenuButton className="p-3 select-none" asChild>
        <Link
          href={`/notes/${slug}`}
          className={cn(
            "block! h-auto",
            isActive && "bg-secondary hover:bg-secondary!",
          )}
        >
          <p className="text-base font-semibold text-nowrap">
            {frontmatter.title}
          </p>
          <p className="text-muted-foreground line-clamp-1 text-sm text-ellipsis">
            <span className="text-foreground mr-2">{formattedDate}</span>
            {frontmatter.summary}
          </p>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
