import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/app1',
  assetPrefix: '/app1-static',
  reactStrictMode: true,
  transpilePackages: ['@saas/prisma'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'boxyhq.com',
      },
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
      },
    ],
  },
};

export default nextConfig;
