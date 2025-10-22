import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src')],
  },


  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },

    // resolveAlias работает только для JS/TS, не для SCSS
    resolveAlias: {
      '@shared': path.resolve(__dirname, 'src/6_shared'),
    },
  },
};

export default nextConfig;
