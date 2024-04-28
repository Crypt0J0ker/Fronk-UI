/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ]
  },
  env: {
    PROJECT_ID_WALLET: 'ee900e627921fa07e5e9f89206466ff5'
  }
}

module.exports = nextConfig
