import { NoteListContent } from "@/components/note-list-content";
import { getNotes } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "nicholas ly | notes",
  description: "notes for you to read.",
};

export default function Page() {
  const notes = getNotes();

  notes.sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt);
    const dateB = new Date(b.frontmatter.publishedAt);
    return dateA > dateB ? -1 : 1;
  });

  return (
    <main className="p-3 md:hidden">
      <NoteListContent notes={notes} />
    </main>
  );
}
