/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Remove basePath completely
  assetPrefix: '',
  basePath: '/handymankarim.com',
};

export default nextConfig;