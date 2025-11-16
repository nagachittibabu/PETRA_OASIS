import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    reactRemoveProperties: true,
    styledComponents: true
  }

};

export default nextConfig;
