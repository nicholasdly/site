import { Sidebar } from "@/components/ui/sidebar";
import { getNotes } from "@/lib/content";

import { NoteSidebarContent } from "./note-sidebar-content";

export function NoteSidebar() {
  const notes = getNotes();

  notes.sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt);
    const dateB = new Date(b.frontmatter.publishedAt);
    return dateA > dateB ? -1 : 1;
  });

  return (
    <Sidebar>
      <NoteSidebarContent notes={notes} />
    </Sidebar>
  );
}
