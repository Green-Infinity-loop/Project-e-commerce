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
<<<<<<< HEAD
        protocol: "http",
        hostname: "localhost:8080",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "back.emonos.mn",
        pathname: "/**",
      },
    ]
  }
}
=======
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/**",
      },
    ],
  },
};
>>>>>>> e758b2fa5c2f96fba64e72a9a41a6cd9caec7d06

module.exports = nextConfig;
