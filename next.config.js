/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, '.')],
    additionalData: `@import "${path.join(__dirname, 'variables.module.scss').replace(/\\/g, '/')}";`,
  },
};

module.exports = nextConfig;
