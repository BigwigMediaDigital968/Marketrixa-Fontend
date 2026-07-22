import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/services/website-development-service",
        destination: "/services/website-development",
        permanent: true, // 308 redirect
      },
      {
        source: "/services/seo-service",
        destination: "/services/search-engine-optimization",
        permanent: true, // 308 redirect
      },
      {
        source: "/services/performance-marketing-service",
        destination: "/services/performance-marketing",
        permanent: true, // 308 redirect
      },
      {
        source: "/services/graphic-design-service",
        destination: "/services/graphic-design",
        permanent: true, // 308 redirect
      },
      // {
      //   source: "/services/graphic-design-service",
      //   destination: "/services/graphic-design",
      //   permanent: true, // 308 redirect
      // },
    ];
  },
};

export default nextConfig;