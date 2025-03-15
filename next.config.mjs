/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // Required for static export to GitHub Pages
  images: {
    unoptimized: true, // Necessary for static exports
  },
  trailingSlash: true, // Adds trailing slashes to page URLs (optional, but keep as is)
  basePath: '/', // Serve from the root of the domain
  assetPrefix: '/', // Ensure assets are prefixed correctly from the root
  distDir: 'out', // Output directory for static files
};

export default nextConfig;