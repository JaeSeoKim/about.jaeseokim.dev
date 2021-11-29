// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/**
 * @type {import('next').NextConfig}
 */
const Config = {
  images: {
    domains: ['www.notion.so']
  },
  swcMinify: true
}

module.exports = withBundleAnalyzer(Config)
