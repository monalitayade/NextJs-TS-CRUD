import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "", // Optional: Leave empty for default ports
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
