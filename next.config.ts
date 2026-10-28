import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
let basePath: string | undefined = undefined;

if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined && process.env.NEXT_PUBLIC_BASE_PATH !== "") {
  basePath = process.env.NEXT_PUBLIC_BASE_PATH;
} else if (!isDev) {
  basePath = "/site-evento";
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
