const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
const repoName = 'handymankarim';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isCustomDomain ? '' : `/${repoName}`,
  assetPrefix: isCustomDomain ? '' : `/${repoName}`,
};

export default nextConfig;
