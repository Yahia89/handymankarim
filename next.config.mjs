/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Remove all GitHub Pages specific paths
  assetPrefix: '',
  basePath: '',
  distDir: 'out',
};

export default nextConfig;
