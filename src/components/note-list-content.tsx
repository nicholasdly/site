"use client";

import Link from "next/link";
import { useState } from "react";

import type { getNotes } from "@/lib/content";
import { formatDate } from "@/lib/utils";

import { Search } from "./search";
import { Button } from "./ui/button";

export function NoteListContent({
  notes,
}: {
  notes: ReturnType<typeof getNotes>;
}) {
  const [filteredNotes, setFilteredNotes] = useState(notes);

  return (
    <>
      <Search notes={notes} setFilteredNotes={setFilteredNotes} />
      {filteredNotes.map(({ slug, frontmatter }) => {
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
    </>
  );
}
