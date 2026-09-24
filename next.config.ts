import type {NextConfig} from 'next'

const nextConfig:NextConfig={
  output:'export',
  basePath:'/wastelens-dashboard-prototype',
  trailingSlash:true,
  images:{unoptimized:true},
  reactStrictMode:true
}

export default nextConfig
