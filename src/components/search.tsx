"use client";

import { SearchIcon } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";

import type { getNotes } from "@/lib/content";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

type SearchProps = {
  notes: ReturnType<typeof getNotes>;
  setFilteredNotes: Dispatch<SetStateAction<ReturnType<typeof getNotes>>>;
};

export function Search({ notes, setFilteredNotes }: SearchProps) {
  const [input, setInput] = useState("");

  const search = (query: string) => {
    setInput(query);

    setFilteredNotes(
      notes.filter((note) => {
        const q = query.trim().toLowerCase();

        const title = note.frontmatter.title.trim().toLowerCase();
        const content = note.content.trim().toLowerCase();

        return title.includes(q) || content.includes(q);
      }),
    );
  };

  return (
    <InputGroup className="mb-3">
      <InputGroupInput
        placeholder="Search all notes"
        value={input}
        onChange={(event) => search(event.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
