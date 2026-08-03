/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['figma.com'],
  },
  async rewrites() {
    return [
      { source: '/tkc/Privacy', destination: '/tkc/Privacy.pdf' },
      { source: '/tkc/Terms', destination: '/tkc/Terms.pdf' },
    ]
  },
}

module.exports = nextConfig 