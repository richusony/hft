/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'Richu Sony',
    // MAP_API_KEY: 'AIzaSyBBx0cYEYMzhbRxDNak5NV6WTiXF2sYrXI',
    // RAPIDAPI_KEY: 'f929ca5f62mshb613dfd8eb3f51bp1d8c7fjsn646dea722f98'
    // MAIL_PASS: 'uvmnetahpgfgpizv',
  },
  images: {
    domains: ['media.istockphoto.com']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Set webpack's resolve.alias for 'net' to false, so it won't try to resolve it during client-side compilation
      config.resolve.alias = {
        ...config.resolve.alias,
        net: false
      }
    }
    return config
  }
}


