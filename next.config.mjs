/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// const withPlugins = require('next-compose-plugins');
// const withSvgr = require('next-svgr');

// module.exports = withPlugins([withSvgr], {
//   webpack(config, options) {
//     return config;
//   },
// });
