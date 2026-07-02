/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

module.exports = withMDX(nextConfig);