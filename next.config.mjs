const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubPages ? '/handymankarim' : '',
  assetPrefix: isGitHubPages ? '/handymankarim' : '',
};

export default nextConfig;