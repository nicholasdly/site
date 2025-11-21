import { Editor } from "@/components/editor";
import type { getNotes } from "@/lib/content";

export default function NotFound() {
  const note: ReturnType<typeof getNotes>[number] = {
    frontmatter: {
      title: "not found",
      summary: "whatever you're looking for isn't here",
      publishedAt: "2001-08-06T11:00-06:00",
    },
    slug: "not-found",
    content: "# not found 🤔\nwhatever you're looking for isn't here",
  };

  return <Editor note={note} />;
}
