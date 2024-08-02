import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { ComponentProps } from "react";

import type { MDXProvider } from "@mdx-js/react";

function CustomLink(props: ComponentProps<"a">) {
  if (props.href?.startsWith("/")) <Link href={props.href} {...props} />;
  if (props.href?.startsWith("#")) return <a {...props} />;
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const components: ComponentProps<typeof MDXProvider>["components"] = {
  a: CustomLink,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      components={{ ...components, ...(props.components || {}) }}
      {...props}
    />
  );
}
