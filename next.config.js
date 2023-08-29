const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "localhost",
      "medusa-server-testing.s3.amazonaws.com",
      "http://192.168.0.27:9090",
      "https://fn-backend-production.up.railway.app",
      "https://fn-backend-production.up.railway.app/app",
      "https://fn-frontend.vercel.app"
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
