import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/hrm-concept',
  images: {
    unoptimized: true, // Disable default image optimization
  },
};

export default nextConfig;
