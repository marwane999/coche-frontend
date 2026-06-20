/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'coachconsulting.ma',
        pathname: '/images/**',
      },
    ],
  },
}
module.exports = nextConfig
