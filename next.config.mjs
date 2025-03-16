/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/handymankarim',
  assetPrefix: '/handymankarim',
};

export default nextConfig;