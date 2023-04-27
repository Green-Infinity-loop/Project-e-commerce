/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "www.w3.org",
        pathname: "/**",
      },
    ]
  }
}

module.exports = nextConfig
