export default function imageLoader({ src }: { src: string }) {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  return isGitHubPages ? `/handymankarim${src}` : src;
}