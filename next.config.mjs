/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Remove GitHub Pages specific configuration
  assetPrefix: '',
  basePath: '',
};

export default nextConfig;
