/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Avoid stale development styles surviving branch switches and merges.
    turbopackFileSystemCacheForDev: false,
  },
  async redirects() {
    return ["dueward", "duewise"].flatMap((previousName) =>
      ["privacy", "support"].map((page) => ({
        source: `/${previousName}/${page}`,
        destination: `/recurden/${page}`,
        permanent: true,
      }))
    );
  },
}

module.exports = nextConfig