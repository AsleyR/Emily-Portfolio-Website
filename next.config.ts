import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'sofabedstore.com',
      port: "",
      pathname: "/cdn/shop/articles/**"
    }],
  }
};

export default nextConfig;
