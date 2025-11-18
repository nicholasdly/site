"use client";

import { SearchIcon } from "lucide-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

type SearchInputProps = {
  query: string;
  search: (query: string) => void;
};

export function SearchInput({ query, search }: SearchInputProps) {
  return (
    <InputGroup>
      <InputGroupInput
        placeholder="Search all notes"
        value={query}
        onChange={(event) => search(event.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
