import { useState } from "react";

import type { getNotes } from "@/lib/content";

export function useSearch(notes: ReturnType<typeof getNotes>) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(notes);

  const search = (query: string) => {
    setQuery(query);
    setResults(
      notes.filter((note) => {
        const q = query.trim().toLowerCase();

        const title = note.frontmatter.title.trim().toLowerCase();
        const content = note.content.trim().toLowerCase();

        return title.includes(q) || content.includes(q);
      }),
    );
  };

  return { query, results, search };
}
