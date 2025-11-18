import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getNotes } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export default function Page() {
  const notes = getNotes();

  notes.sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt);
    const dateB = new Date(b.frontmatter.publishedAt);
    return dateA > dateB ? -1 : 1;
  });

  return (
    <main className="p-3 md:hidden">
      {notes.map(({ slug, frontmatter }) => {
        const formattedDate = formatDate(new Date(frontmatter.publishedAt));

        return (
          <Button
            key={slug}
            variant="ghost"
            className="p-3 select-none"
            asChild
          >
            <Link href={`/notes/${slug}`} className="block! h-auto">
              <p className="text-xl font-semibold text-nowrap md:text-base">
                {frontmatter.title}
              </p>
              <p className="text-muted-foreground line-clamp-1 text-lg text-ellipsis md:text-sm">
                <span className="text-foreground mr-1.5">{formattedDate}</span>
                {frontmatter.summary}
              </p>
            </Link>
          </Button>
        );
      })}
    </main>
  );
}
