/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint:{
    ignoreDuringBuilds:true,
  },
  swcMinify: true,
}

module.exports = nextConfig
