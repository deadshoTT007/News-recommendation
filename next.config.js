const nextConfig = {
    reactStrictMode: false,
    assetPrefix: "/",
    compiler: {
      removeConsole: process.env.NODE_ENV === "production"
    },
  }
  
  module.exports = nextConfig
  