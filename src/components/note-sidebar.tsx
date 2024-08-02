import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { getNotes } from "@/lib/content";

import { NoteSidebarLink } from "./note-sidebar-link";

export function NoteSidebar() {
  const notes = getNotes();

  notes.sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt);
    const dateB = new Date(b.frontmatter.publishedAt);
    return dateA > dateB ? -1 : 1;
  });

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="sr-only">Notes</SidebarGroupLabel>
          <SidebarGroupContent>
            {notes.map((note) => (
              <NoteSidebarLink key={note.slug} {...note} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
