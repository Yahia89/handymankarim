import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['your-domain.com'],
    minimumCacheTTL: 60,
  },
  basePath: '/handymankarim',
  assetPrefix: '/handymankarim',
};

export default nextConfig;
