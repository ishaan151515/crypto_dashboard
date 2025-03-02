/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false, // Disable ESM external handling for dependencies
  },
};

module.exports = nextConfig;

