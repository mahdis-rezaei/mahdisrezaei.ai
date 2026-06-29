import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Allow .mdx pages/content so case studies (Phase 2) can live as MDX.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Let the dev server accept requests from Replit's proxied preview domains.
  allowedDevOrigins: ["*.replit.dev", "*.repl.co", "*.riker.replit.dev"],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
