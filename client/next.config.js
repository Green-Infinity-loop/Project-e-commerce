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
        hostname: "cdn.dribbble.com",
        hostname: "www.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pics.walgreens.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: " images.pexels.com ",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "beautysecrets.mn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "o.remove.bg",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "https",

        hostname: "cdn.greensoft.mn",

        hostname: "pics.walgreens.com",

        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
<<<<<<< HEAD
      },{

=======
      },
      {
        protocol: "https",
>>>>>>> a90c84db530b7e283d2356f1d0e5b53ac9bf5d98
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.greensoft.mn",
        pathname: "/**",
      },
<<<<<<< HEAD
    
=======
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
>>>>>>> a90c84db530b7e283d2356f1d0e5b53ac9bf5d98
    ],
  },
};

module.exports = nextConfig;
