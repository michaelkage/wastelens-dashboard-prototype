/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/wastelens-dashboard-prototype',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
