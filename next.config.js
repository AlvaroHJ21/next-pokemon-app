/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
//   swcMinify: true,
  swcMinify: false,
  images: {
    domains: ['raw.githubusercontent.com'],
},
}

module.exports = nextConfig
