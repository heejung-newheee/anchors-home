/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    // prependData: `@use 'variables.module' as *;`,
    prependData: `@import "/_variables.module.scss";`, // prependData 옵션 추가
  },
}

module.exports = nextConfig
