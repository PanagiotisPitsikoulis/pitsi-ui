
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  cacheComponents: true,
  experimental: {
    serverComponentsHmrCache: true,
    turbopackFileSystemCacheForDev: true,
    optimizeServerReact: true,
  },
}

export default nextConfig
