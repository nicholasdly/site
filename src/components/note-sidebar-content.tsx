"use client";

import { Pin } from "lucide-react";

import { useSearch } from "@/hooks/use-search";
import type { getNotes } from "@/lib/content";

import { NoteSidebarLink } from "./note-sidebar-link";
import { SearchInput } from "./search-input";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "./ui/sidebar";

export function NoteSidebarContent({
  notes,
}: {
  notes: ReturnType<typeof getNotes>;
}) {
  const pinnedNotes = notes.filter((note) => note.frontmatter.pinned);
  const unpinnedNotes = notes.filter((note) => !note.frontmatter.pinned);

  const { query, results: filteredNotes, search } = useSearch(notes);

  return (
    <SidebarContent className="gap-0">
      <SidebarGroup>
        <SearchInput query={query} search={search} />
      </SidebarGroup>
      {query.length === 0 ? (
        <>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm font-semibold">
              <Pin className="mr-1" />
              Pinned
            </SidebarGroupLabel>
            {pinnedNotes.map((note) => (
              <NoteSidebarLink key={note.slug} {...note} />
            ))}
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm font-semibold">
              Notes
            </SidebarGroupLabel>
            {unpinnedNotes.map((note) => (
              <NoteSidebarLink key={note.slug} {...note} />
            ))}
          </SidebarGroup>
        </>
      ) : (
        <SidebarGroup>
          <SidebarGroupContent>
            {filteredNotes.map((note) => (
              <NoteSidebarLink key={note.slug} {...note} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      )}
    </SidebarContent>
  );
}
