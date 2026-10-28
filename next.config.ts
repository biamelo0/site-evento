import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_ACTIONS === "1";
let basePath: string | undefined = undefined;

if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
  basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;
} else if (isGithubActions) {
  basePath = "/meu-site";
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
