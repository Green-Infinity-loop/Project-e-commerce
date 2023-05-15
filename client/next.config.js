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
<<<<<<< HEAD
        hostname: "www.pexels.com",
        pathname: "/**",
      },
    ]
  }
}
=======
        hostname: "cdn.dribbble.com",
        hostname: "www.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
        pathname: "/**",
      },
    ],
  },
};
>>>>>>> 07dc1e744b006eb28d712c2bf546173cc779ece8

module.exports = nextConfig;
