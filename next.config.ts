import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

// Served from https://hav98ice.github.io/decant/ on GitHub Pages,
// so assets/links need the /decant prefix in production builds only.
const repo = 'decant'

const nextConfig: NextConfig = {
  output: 'export', // emit a fully static site into ./out
  images: { unoptimized: true }, // no image-optimization server on GitHub Pages
  basePath: isProd ? `/${repo}` : '',
  trailingSlash: true, // -> out/index.html, plays nicely with Pages routing
}

export default nextConfig
