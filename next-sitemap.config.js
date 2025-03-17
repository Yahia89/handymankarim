/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://handymankarim.com',
  generateRobotsTxt: true,
  outDir: 'out',
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://handymankarim.com/sitemap-0.xml'
    ]
  }
};
  