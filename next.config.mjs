/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Remove basePath since we're using a custom domain
  // Add assetPrefix for production assets
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://handymankarim.com' : '',
};

export default nextConfig;
