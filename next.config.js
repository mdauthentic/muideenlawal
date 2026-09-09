/** @type {import('next').NextConfig} */
const nextConfig = {
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