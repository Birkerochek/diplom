// next.config.ts
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  prefetch: true,
  allowedDevOrigins:['127.0.0.1'] ,
  images: {
    formats: ["image/avif", "image/webp"],
    
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),

      "@app": path.resolve(__dirname, "src/1_app"),
      "@features": path.resolve(__dirname, "src/4_features"),
      "@entities": path.resolve(__dirname, "src/5_entities"),
      "@shared": path.resolve(__dirname, "src/6_shared"),
      "@widgets": path.resolve(__dirname, "src/3_widgets"),
      
      "@pages": path.resolve(__dirname, "src/2_pages"),

     
      "@": path.resolve(__dirname, "src"),
    };

    return config;
  },
  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
