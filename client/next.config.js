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
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
