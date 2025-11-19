import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  redirects: async () => [
    {
      source: "/",
      destination: "/notes/about-me",
      permanent: false,
    },
    {
      source:
        "/:path((?!notes|api|messages|_next|static|public|favicon\\.ico|sitemap\\.xml|robots\\.txt).*)",
      destination: "/notes/:path",
      permanent: false,
    },
  ],
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true, // Reduces build times since we use GitHub actions for this
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
