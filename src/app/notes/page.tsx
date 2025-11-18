import { Metadata } from "next";

import { NoteSidebarContent } from "@/components/note-sidebar-content";
import { getNotes } from "@/lib/content";

export const metadata: Metadata = {
  title: "nicholas ly | notes",
  description: "read all about it!",
};

export default function Page() {
  const notes = getNotes();

  notes.sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt);
    const dateB = new Date(b.frontmatter.publishedAt);
    return dateA > dateB ? -1 : 1;
  });

  return (
    <main className="md:hidden">
      <NoteSidebarContent notes={notes} />
    </main>
  );
}
