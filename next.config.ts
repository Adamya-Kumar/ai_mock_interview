import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 eslint: {
    ignoreDuringBuilds: true,
  },
  tyepscript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
