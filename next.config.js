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
      "https://family-nutrition.s3.us-west-1.amazonaws.com",
      "https://fn-backend-production.up.railway.app",
      "https://fn-backend-production.up.railway.app/app",
      "https://fn-frontend.vercel.app"
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
