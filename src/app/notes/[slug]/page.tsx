import { notFound } from "next/navigation";

import { Editor } from "@/components/editor";
import { getNotes } from "@/lib/content";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getNotes().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  const note = getNotes().find((note) => note.slug === slug);
  if (!note) return;

  return {
    title: note.frontmatter.title,
    description: note.frontmatter.summary,
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;

  const note = getNotes().find((note) => note.slug === slug);
  if (!note) notFound();

  return <Editor note={note} />;
}
