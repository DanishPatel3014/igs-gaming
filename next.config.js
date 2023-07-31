/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["http://igs.innovtestwebsite.online/"],
  }
}
module.exports = nextConfig
