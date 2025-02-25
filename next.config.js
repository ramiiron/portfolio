/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'js'],
  webpack: (config) => {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;