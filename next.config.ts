import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/handymankarim',
  assetPrefix: '/handymankarim/',
  trailingSlash: true,
};

export default nextConfig;
