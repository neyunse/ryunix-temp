/** @type {import('@unsetsoft/ryunix-webpack/config').Setting} */

const RyunixSettings = {
  // used in dev and build mode
  experimental: {
    mdx: true,
    ssr: true,
  },
  static: {
    favicon: true, // if is false the favicon is not mandatory
  },
  webpack: {
    production: true, // use 'true' for production
  },
}

export default RyunixSettings
