import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Allow .md / .mdx files to be treated as pages and imports.
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  // Remark/rehype plugins can be added here later (use string names if you
  // switch the build to Turbopack — see node_modules/next/dist/docs MDX guide).
});

export default withMDX(nextConfig);
