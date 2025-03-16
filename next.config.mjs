/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: '/handymankarim'
  },
  trailingSlash: true,
  basePath: '/handymankarim',
  assetPrefix: '/handymankarim',
};

export default nextConfig;