import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // Optionally, you can specify path patterns and ports
        // pathname: '/di2hze8zk/**',
        // port: '',
      },
    ]
  }
};

export default nextConfig;
