import { ALargeSmall, ListTodo, SquarePen, Table, Trash2 } from "lucide-react";

import { CustomMDX } from "./mdx";
import { NoteSidebarToggle } from "./note-sidebar-toggle";
import { Button } from "./ui/button";

function ControlBar() {
  return (
    <div className="flex items-center justify-between p-3 select-none">
      <div className="space-x-1">
        <NoteSidebarToggle />
        <Button
          size="icon-sm"
          variant="ghost"
          className="hover:cursor-not-allowed"
          aria-label="Delete this note"
        >
          <Trash2 className="text-primary size-5" />
        </Button>
      </div>
      <div className="space-x-1">
        <Button
          size="icon-sm"
          variant="ghost"
          className="hover:cursor-not-allowed"
          aria-label="Choose a style to apply to text"
        >
          <ALargeSmall className="text-primary size-5" />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          className="hover:cursor-not-allowed"
          aria-label="Make a checklist"
        >
          <ListTodo className="text-primary size-5" />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          className="hover:cursor-not-allowed"
          aria-label="Insert a table"
        >
          <Table className="text-primary size-5" />
        </Button>
      </div>
      <div className="space-x-1">
        <Button
          size="icon-sm"
          variant="ghost"
          className="hover:cursor-not-allowed"
          aria-label="Create a new note"
        >
          <SquarePen className="text-primary size-5" />
        </Button>
      </div>
    </div>
  );
}

export function Editor({ content }: { content: string }) {
  return (
    <div className="flex w-full flex-col">
      <ControlBar />
      <article className="mb-12 px-10 py-4">
        <CustomMDX source={content} />
      </article>
    </div>
  );
}
