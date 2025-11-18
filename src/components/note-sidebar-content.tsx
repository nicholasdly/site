"use client";

import { useState } from "react";

import type { getNotes } from "@/lib/content";

import { NoteSidebarLink } from "./note-sidebar-link";
import { Search } from "./search";
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
  const [filteredNotes, setFilteredNotes] = useState(notes);

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel className="sr-only">Notes</SidebarGroupLabel>
        <Search notes={notes} setFilteredNotes={setFilteredNotes} />
        <SidebarGroupContent>
          {filteredNotes.map((note) => (
            <NoteSidebarLink key={note.slug} {...note} />
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
