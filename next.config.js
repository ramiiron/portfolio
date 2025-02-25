/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'js'],
  output: 'export', // ✅ Required for GitHub Pages
  images: { unoptimized: true }, // ✅ Fixes Image Optimization Issue
  webpack: (config) => {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = nextConfig;
