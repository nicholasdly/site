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
          aria-label="Delete this note"
          disabled
        >
          <Trash2 className="text-primary size-5" />
        </Button>
      </div>
      <div className="space-x-1">
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Choose a style to apply to text"
          disabled
        >
          <ALargeSmall className="text-primary size-5" />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Make a checklist"
          disabled
        >
          <ListTodo className="text-primary size-5" />
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Insert a table"
          disabled
        >
          <Table className="text-primary size-5" />
        </Button>
      </div>
      <div className="space-x-1">
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Create a new note"
          disabled
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
      <article className="mb-12 p-6 md:px-10 md:py-4">
        <CustomMDX source={content} />
      </article>
    </div>
  );
}
