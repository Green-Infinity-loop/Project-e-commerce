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

        protocol: "https",
        hostname: "cdn3.shoppy.mn",

        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost:8080",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "back.emonos.mn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
