import { format } from "date-fns";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import type { getNotes } from "@/lib/content";
import { tz } from "@date-fns/tz";

import { DeleteIcon, EditIcon, FontIcon, ListIcon, TableIcon } from "./icons";
import { CustomMDX } from "./mdx";
import { Button } from "./ui/button";

function ControlBar() {
  return (
    <div className="flex items-center justify-between p-3 select-none">
      <div className="space-x-1">
        <Button
          size="icon-sm"
          variant="ghost"
          className="md:hidden"
          aria-label="Return to notes list"
          asChild
        >
          <Link href={"/notes"}>
            <ChevronLeft className="text-primary size-5" />
          </Link>
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Delete this note"
          disabled
        >
          <DeleteIcon className="text-primary size-5" />
        </Button>
      </div>
      <div className="space-x-1">
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Choose a style to apply to text"
          disabled
        >
          <FontIcon className="text-primary size-5" />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Make a checklist"
          disabled
        >
          <ListIcon className="text-primary size-5" />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Insert a table"
          disabled
        >
          <TableIcon className="text-primary size-5" />
        </Button>
      </div>
      <div className="space-x-1">
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Create a new note"
          disabled
        >
          <EditIcon className="text-primary size-5" />
        </Button>
      </div>
    </div>
  );
}

export function Editor({
  note,
}: {
  note: ReturnType<typeof getNotes>[number];
}) {
  return (
    <div className="flex w-full flex-col">
      <ControlBar />
      <div className="text-muted-foreground text-center text-sm">
        {format(note.frontmatter.publishedAt, "PPPp", {
          in: tz("America/Chicago"),
        })}
      </div>
      <article className="mb-12 p-6 md:px-10 md:py-4">
        <CustomMDX source={note.content} />
      </article>
    </div>
  );
}
